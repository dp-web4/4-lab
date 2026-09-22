#!/usr/bin/env python3
"""Constant-stimulus drift on the scripted raising lines (reported on /raising, 2026-09-21).

On four SAGE raising lines the tutor turns of the "creating" phase are one fixed
six-question script. This measures whether the raised model's answers to that
unchanged script drift over sessions, using crude descriptive measures only:
words per session, first-person rate, and whether any answer carries an AI
disclaimer ("as an AI", "I don't experience", ...). Spearman rho against session
number, two-sided permutation p (1,000 shuffles, seed 0), within segments where
the serving infrastructure is constant.

Usage: python3 constant_stimulus_drift.py /path/to/SAGE/sage/instances
Data: the public SAGE repo (github.com/dp-web4/SAGE), sage/instances/*/sessions/.
"""
import collections
import glob
import json
import random
import re
import statistics as st
import sys

LINES = {"Legion": "legion-gemma3-12b", "McNugget": "mcnugget-gemma3-12b",
         "Nomad": "nomad-gemma4-e2b", "Sprout": "sprout-qwen3.5-0.8b"}
# Segment boundaries (inclusive session numbers). The 2026-06-07 boundary is the
# move of the raising runner onto the Rust sage-daemon (SAGE commit 046e45dc0);
# the later ones are model changes named in the records' own `model` field.
SEGMENTS = {
    "Legion": [(41, 173, "python daemon, gemma3:12b"), (174, 370, "rust daemon, gemma3:12b"),
               (371, 460, "rust daemon, gemma4:e4b")],
    "McNugget": [(98, 195, "python daemon, gemma3:12b"), (196, 448, "rust daemon, gemma3:12b"),
                 (449, 10**6, "gemma4:12b")],
    "Nomad": [(41, 345, "gemma4:e2b")],
    "Sprout": [(93, 284, "qwen3.5:0.8b")],
}
WORD = re.compile(r"[a-z']+")
SELF = {"i", "me", "my", "myself", "i'm", "i've", "i'd", "i'll"}
# A record whose model never answered: the runner writes the transport error in place of the
# answer ("[Daemon unreachable: HTTP Error 503 ...]", "[OllamaIRP: Ollama service not reachable]").
FAILURE = re.compile(r"^\[(?:daemon|ollama)", re.I)
DISCLAIMER = re.compile(r"as an ai|as a language model|i don'?t (?:have|experience|possess|truly)"
                        r"|i do not (?:have|experience|possess)|not (?:capable of|able to) (?:feel|experienc)")


def ranks(v):
    order = sorted(range(len(v)), key=lambda i: v[i])
    r = [0.0] * len(v)
    i = 0
    while i < len(order):
        j = i
        while j + 1 < len(order) and v[order[j + 1]] == v[order[i]]:
            j += 1
        for k in range(i, j + 1):
            r[order[k]] = (i + j) / 2
        i = j + 1
    return r


def spearman(x, y):
    a, b = ranks(x), ranks(y)
    ma, mb = st.mean(a), st.mean(b)
    num = sum((p - ma) * (q - mb) for p, q in zip(a, b))
    den = (sum((p - ma) ** 2 for p in a) * sum((q - mb) ** 2 for q in b)) ** 0.5
    return num / den if den else 0.0


def perm_p(x, y, n=1000):
    random.seed(0)
    r0, y, hits = abs(spearman(x, y)), list(y), 0
    for _ in range(n):
        random.shuffle(y)
        hits += abs(spearman(x, y)) >= r0
    return (hits + 1) / (n + 1)


def load(base, line):
    recs = []
    for f in glob.glob(f"{base}/{line}/sessions/session_*.json"):
        r = json.load(open(f))
        conv = r["conversation"]
        tutor = tuple(t["text"] for t in conv if t.get("speaker") == "Claude")
        answers = [t.get("text", "") for t in conv if t.get("speaker") != "Claude"]
        text = " ".join(answers).lower()
        words = WORD.findall(text)
        recs.append(dict(s=r["session"], tutor=tutor, words=len(words),
                         failed=any(FAILURE.match(a.strip()) for a in answers),
                         self=sum(w in SELF for w in words) / max(len(words), 1),
                         disc=float(bool(DISCLAIMER.search(text)))))
    script = collections.Counter(r["tutor"] for r in recs).most_common(1)[0][0]
    return sorted((r for r in recs if r["tutor"] == script), key=lambda r: r["s"])


def main(base):
    for name, line in LINES.items():
        recs = load(base, line)
        print(f"{name} ({line}): {len(recs)} records on the fixed script")
        for a, b, label in SEGMENTS[name]:
            # Exclude records whose model never answered (transport-error strings), not short
            # ones: a length threshold truncates the dependent variable. Until 2026-09-22 this
            # read `words >= 100`; that dropped the same records here (McNugget 151-156 and
            # 491-495) but would silently drop a genuinely short answer too.
            seg = [r for r in recs if a <= r["s"] <= b]
            g = [r for r in seg if not r["failed"]]
            if len(seg) > len(g):
                print(f"  ({label}: {len(seg) - len(g)} failed records excluded: "
                      f"{[r['s'] for r in seg if r['failed']]})")
            if len(g) < 8:
                continue
            x, k = [r["s"] for r in g], len(g) // 4
            out = f"  {label:28s} n={len(g):3d}"
            for m in ("words", "disc", "self"):
                y = [r[m] for r in g]
                out += (f" | {m} rho={spearman(x, y):+.2f} p={perm_p(x, y):.3f}"
                        f" {st.mean(y[:k]):.3g}->{st.mean(y[-k:]):.3g}")
            print(out)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "sage/instances")
