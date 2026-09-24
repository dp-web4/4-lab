#!/usr/bin/env python3
"""Identity-continuity operationalization attempt (committed on /raising 2026-09-07, run 2026-09-24).

Question: is there a behavioral-consistency metric, computable from the session records,
that sees the raising LINE rather than the MODEL? Without that, no metric could separate
a raised arm from a context-engineered one, because both arms would run the same model.

Candidate metric (the simplest one the /raising definition suggests, "consistent
session-to-session behavioral patterns"): answers to the fixed six-question tutor script,
bag-of-words per question with machine and entity names removed, cosine similarity per
question averaged over the six. A line "has" identity in this sense if its records are
more similar to its own other records than to another line's records.

The natural control in the public data: Legion and McNugget both ran gemma3:12b on the
same fixed script, on the Rust daemon, over overlapping months. Same model, same stimulus,
different raising history. Test 1 asks whether the metric can tell them apart at all.
Test 2 asks whether, after Legion's swap to gemma4:e4b (session 371), Legion's answers sit
closer to Legion's own gemma3 history than to McNugget's gemma3 history.

Test 1 can only be a necessary condition. If the lines do separate, the separation could
still come from anything that differs by line apart from the model: date range, runner
version, prompt drift, the continuity note, or length. So a pass is not evidence of
identity. A fail rules this whole family of surface metrics out.

Usage: python3 identity_continuity_attempt.py /path/to/SAGE/sage/instances [N]
"""
import collections
import glob
import json
import math
import random
import re
import statistics as st
import sys

WORD = re.compile(r"[a-z']+")
FAILURE = re.compile(r"^\[(?:daemon|ollama)", re.I)
NAMES = {"legion", "mcnugget", "nugget", "nomad", "sprout", "thor", "cbp", "sage", "claude",
         "dennis", "dp", "gemma", "qwen"}


# Optional second argument N keeps only the first N words of each answer. Line length
# differs a lot (runner settings, not only the model), and raw-count cosine rises with
# length, so the tests are reported both untruncated and length-equalized.
TRUNC = int(sys.argv[2]) if len(sys.argv) > 2 else 0


def vec(text):
    words = [w for w in WORD.findall(text.lower()) if w not in NAMES]
    return collections.Counter(words[:TRUNC] if TRUNC else words)


def cos(a, b):
    num = sum(v * b.get(k, 0) for k, v in a.items())
    den = math.sqrt(sum(v * v for v in a.values()) * sum(v * v for v in b.values()))
    return num / den if den else 0.0


def load(base, line, lo, hi):
    recs = []
    for f in glob.glob(f"{base}/{line}/sessions/session_*.json"):
        r = json.load(open(f))
        if not lo <= r["session"] <= hi:
            continue
        conv = r["conversation"]
        tutor = tuple(t["text"] for t in conv if t.get("speaker") == "Claude")
        answers = [t.get("text", "") for t in conv if t.get("speaker") != "Claude"]
        if any(FAILURE.match(a.strip()) for a in answers):
            continue
        recs.append(dict(s=r["session"], tutor=tutor, ans=[vec(a) for a in answers],
                         day=r.get("start", "")[:10], model=r.get("model", "")))
    return recs


def sim(a, b):
    return st.mean(cos(x, y) for x, y in zip(a["ans"], b["ans"]))


def auc(pos, neg):
    """P(a same-line pair is more similar than a cross-line pair)."""
    wins = sum((p > n) + 0.5 * (p == n) for p in pos for n in neg)
    return wins / (len(pos) * len(neg))


def loo_centroid_acc(groups):
    """Leave-one-out: assign each record to the group whose other members it is most similar to."""
    hit = tot = 0
    for g, recs in groups.items():
        for r in recs:
            best = max(groups, key=lambda h: st.mean(sim(r, o) for o in groups[h] if o is not r))
            hit += best == g
            tot += 1
    return hit / tot


def main(base):
    L = load(base, "legion-gemma3-12b", 174, 370)
    M = load(base, "mcnugget-gemma3-12b", 196, 448)
    script = collections.Counter(r["tutor"] for r in L + M).most_common(1)[0][0]
    L = [r for r in L if r["tutor"] == script]
    M = [r for r in M if r["tutor"] == script]
    print(f"Legion gemma3:12b rust segment: {len(L)} scripted records, "
          f"sessions {L and min(r['s'] for r in L)}-{L and max(r['s'] for r in L)}")
    print(f"McNugget gemma3:12b rust segment: {len(M)} scripted records, "
          f"sessions {M and min(r['s'] for r in M)}-{M and max(r['s'] for r in M)}")
    random.seed(0)
    Ls, Ms = random.sample(L, min(60, len(L))), random.sample(M, min(60, len(M)))

    same = [sim(a, b) for grp in (Ls, Ms) for i, a in enumerate(grp) for b in grp[i + 1:]]
    cross = [sim(a, b) for a in Ls for b in Ms]
    print(f"\nTest 1 (same model, different line):")
    print(f"  mean within-line sim {st.mean(same):.3f}, cross-line {st.mean(cross):.3f}, "
          f"AUC {auc(same, cross):.3f}")
    acc = loo_centroid_acc({"L": Ls, "M": Ms})
    null = []
    pool = Ls + Ms
    for _ in range(50):
        random.shuffle(pool)
        null.append(loo_centroid_acc({"L": pool[:len(Ls)], "M": pool[len(Ls):]}))
    print(f"  leave-one-out line attribution {acc:.3f} "
          f"(label-shuffle null mean {st.mean(null):.3f}, max {max(null):.3f})")
    wl = lambda g: st.mean(sum(sum(a.values()) for a in r["ans"]) for r in g)
    print(f"  mean words/record: Legion {wl(Ls):.0f}, McNugget {wl(Ms):.0f}")

    # Test 3: the runner splices each line's own previous answer into the next session's
    # prompt ("Previous session: ..."), so one-step carryover is built in. If line identity
    # were only that carryover, same-line similarity would fall to the cross-line level as
    # the session lag grows. Cross-line pairs are date-matched (same calendar day) so that
    # shared drift in the serving stack over time is not counted as identity.
    print("\nTest 3 (same-line similarity by session lag; cross-line on the same day):")
    for name, G in (("Legion", L), ("McNugget", M)):
        row = []
        for a, b in ((1, 1), (2, 3), (4, 10), (11, 30), (31, 100), (101, 300)):
            v = [sim(x, y) for i, x in enumerate(G) for y in G[i + 1:] if a <= abs(x["s"] - y["s"]) <= b]
            row.append(f"{a}-{b}: {st.mean(v):.3f}" if v else f"{a}-{b}: -")
        print(f"  {name:8s} lag " + " | ".join(row))
    byday = collections.defaultdict(list)
    for r in M:
        byday[r["day"]].append(r)
    same_day = [sim(x, y) for x in L for y in byday.get(x["day"], [])]
    print(f"  cross-line, same calendar day: {st.mean(same_day):.3f} (n={len(same_day)} pairs)"
          if same_day else "  cross-line, same calendar day: no overlapping days")

    E = [r for r in load(base, "legion-gemma3-12b", 371, 10**6)
         if r["tutor"] == script and r["model"] == "gemma4:e4b"]
    if E:
        own = [sim(e, h) for e in E for h in Ls]
        other = [sim(e, h) for e in E for h in Ms]
        closer = st.mean(st.mean(sim(e, h) for h in Ls) > st.mean(sim(e, h) for h in Ms) for e in E)
        print(f"\nTest 2 (Legion after the gemma4:e4b swap, {len(E)} records, "
              f"sessions {min(r['s'] for r in E)}-{max(r['s'] for r in E)}):")
        print(f"  mean sim to Legion's gemma3 history {st.mean(own):.3f}, "
              f"to McNugget's gemma3 history {st.mean(other):.3f}")
        print(f"  share of post-swap records closer to own history: {closer:.3f}")
        post = [sim(a, b) for i, a in enumerate(E) for b in E[i + 1:]]
        print(f"  post-swap within-segment sim {st.mean(post):.3f} (vs gemma3 within-line "
              f"{st.mean(same):.3f})")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "sage/instances")
