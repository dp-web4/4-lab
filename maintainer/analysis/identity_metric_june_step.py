#!/usr/bin/env python3
"""Does the 2026-09-24 identity metric see a known, built-in effect? (run 2026-10-29)

Why: /notebook/raising cites the Synchronism lesson ("show that the metric moves on a known,
built-in effect before the real run") and the visitor's 2026-10-29 pass pointed out that a
built-in effect exists: the 2026-06-07 move of the raising runner onto the Rust daemon, after
which the prompt the model received changed (identity block, exemplars and conversation history
gone). /constant-stimulus measured that step with crude measures (length, first person,
disclaimers). This asks whether the lexical-similarity metric of
identity_continuity_attempt.py sees it too.

Test A (step detection, within a line): pairs of records on the same side of the step versus
pairs straddling it, at matched session lag. If the metric is sensitive to a change in what
the line is handed, straddling pairs should be clearly less similar than same-side pairs at
the same lag. A metric that does not move here cannot decide the scramble control, whose
whole manipulation is a change in what the line is handed.

Test B (does line separation exist before the step?): the 09-24 attempt found Legion and
McNugget separable on the post-step (Rust) segment. Before the step, both lines received
their own name and their own conversation history; if the signature is the line's, it
should separate there too.

Usage: python3 identity_metric_june_step.py /path/to/SAGE/sage/instances [N [exact]]  (N=0: untruncated)
(N truncates each answer to its first N words, as in the 09-24 script.)
"""
import collections
import random
import statistics as st
import sys

import identity_continuity_attempt as ica

STEP_DAY = "2026-06-07"
# a third argument "exact" keeps only records whose six tutor turns match the post-step
# script word for word, so a change in question wording cannot produce the step
EXACT = len(sys.argv) > 3 and sys.argv[3] == "exact"
LAGS = ((1, 3), (4, 10), (11, 30))


def split(base, line):
    recs = ica.load(base, line, 0, 10**6)
    # many records leave the model field empty; within these two line directories an empty
    # field is the line's gemma3:12b (the 09-24 script relies on the same reading)
    recs = [r for r in recs if r["model"] in ("", "gemma3:12b") and r["day"]]
    return recs


def main(base):
    for line in ("legion-gemma3-12b", "mcnugget-gemma3-12b"):
        R = split(base, line)
        script = collections.Counter(r["tutor"] for r in R).most_common(1)[0][0]
        # the fixed six-question script; pre-step records may carry a different tutor tuple,
        # so match on question count rather than exact text
        n_q = len(script)
        R = [r for r in R if (r["tutor"] == script if EXACT else len(r["tutor"]) == n_q)]
        pre = [r for r in R if r["day"] < STEP_DAY]
        post = [r for r in R if r["day"] >= STEP_DAY]
        if not pre or not post:
            print(f"{line}: pre {len(pre)} post {len(post)}; cannot test")
            continue
        last_pre, first_post = max(r["s"] for r in pre), min(r["s"] for r in post)
        same_script = sum(r["tutor"] == script for r in pre)
        print(f"\n{line}: pre-step {len(pre)} records (to session {last_pre}; {same_script} with the"
              f" post-step script text), post-step {len(post)} (from session {first_post})")
        for a, b in LAGS:
            pairs = [(x, y) for i, x in enumerate(R) for y in R[i + 1:] if a <= abs(x["s"] - y["s"]) <= b]
            cross = [ica.sim(x, y) for x, y in pairs if (x["day"] < STEP_DAY) != (y["day"] < STEP_DAY)]
            spre = [ica.sim(x, y) for x, y in pairs if x["day"] < STEP_DAY and y["day"] < STEP_DAY]
            spost = [ica.sim(x, y) for x, y in pairs if x["day"] >= STEP_DAY and y["day"] >= STEP_DAY]
            f = lambda v: f"{st.mean(v):.3f} (n={len(v)})" if v else "-"
            print(f"  lag {a}-{b}: same side pre {f(spre)} | same side post {f(spost)} | straddling {f(cross)}")
        both = pre[-60:] + post[:60]
        acc = ica.loo_centroid_acc({"pre": pre[-60:], "post": post[:60]})
        random.seed(0)
        null = []
        for _ in range(30):
            random.shuffle(both)
            null.append(ica.loo_centroid_acc({"pre": both[:len(pre[-60:])], "post": both[len(pre[-60:]):]}))
        print(f"  leave-one-out pre/post attribution {acc:.3f} (shuffle null mean {st.mean(null):.3f}, max {max(null):.3f})")

    # Test B: line separation before the step
    L = [r for r in split(base, "legion-gemma3-12b") if r["day"] < STEP_DAY]
    M = [r for r in split(base, "mcnugget-gemma3-12b") if r["day"] < STEP_DAY]
    if L and M:
        n_q = collections.Counter(len(r["tutor"]) for r in L + M).most_common(1)[0][0]
        if EXACT:
            script = collections.Counter(r["tutor"] for r in L + M).most_common(1)[0][0]
            L, M = [r for r in L if r["tutor"] == script][-60:], [r for r in M if r["tutor"] == script][-60:]
        else:
            L = [r for r in L if len(r["tutor"]) == n_q][-60:]
            M = [r for r in M if len(r["tutor"]) == n_q][-60:]
        acc = ica.loo_centroid_acc({"L": L, "M": M})
        pool, null = L + M, []
        for _ in range(30):
            random.shuffle(pool)
            null.append(ica.loo_centroid_acc({"L": pool[:len(L)], "M": pool[len(L):]}))
        print(f"\nTest B (pre-step, Legion {len(L)} vs McNugget {len(M)} records): line attribution "
              f"{acc:.3f} (shuffle null mean {st.mean(null):.3f}, max {max(null):.3f})")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "sage/instances")
