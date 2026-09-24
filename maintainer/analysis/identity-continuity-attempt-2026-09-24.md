# Identity-continuity operationalization attempt — 2026-09-24

Committed on /raising on 2026-09-07 ("published as its own artifact, including if it fails").
Run 17 days late, by the maintainer track, on the public SAGE session records.
Script: `identity_continuity_attempt.py` (this directory). Run:
`python3 identity_continuity_attempt.py <SAGE>/sage/instances [N]`, where N truncates each
answer to its first N words (0 = untruncated). SAGE checkout at 2026-09-24.

## The question

/raising says its operational definition of identity continuity ("consistent session-to-session
behavioral patterns observed in interaction logs") does not yield a metric that could separate a
raised arm from a context-engineered one. The attempt asks the prior question: is there a metric,
computable from the records, that sees the **line** rather than the **model**? A metric that only
sees the model cannot separate any two arms that run the same model.

## Candidate metric

Answers to the fixed six-question tutor script ("creating" phase). Per question, a bag of words
with machine, entity and model names removed. Cosine similarity per question, averaged over the six.
A line is consistent in this sense if its records are more similar to each other than to another
line's records.

## The natural control in the public data

Legion (sessions 174–370, 168 scripted records) and McNugget (196–448, 221 records) both ran
gemma3:12b, on the Rust daemon, on the same fixed script, over overlapping months. Same model, same stimulus, different line. Legion then moved to gemma4:e4b at
session 371, in the same directory (91 scripted records, 371–461, per the records' own `model` field).

## Results

| | untruncated | first 60 words per answer |
|---|---|---|
| Test 1: within-line vs cross-line similarity | 0.607 vs 0.523, AUC 0.736 | 0.445 vs 0.366, AUC 0.977 |
| Test 1: leave-one-out line attribution (shuffle null mean / max) | 0.708 (0.477 / 0.592) | 1.000 (0.485 / 0.633) |
| Mean words per record, Legion / McNugget | 1,384 / 608 | 360 / 356 |
| Test 3: Legion same-line sim, lag 1 → lag 101–300 | 0.695 → 0.692 | 0.453 → 0.451 |
| Test 3: McNugget same-line sim, lag 1 → lag 101–300 | 0.534 → 0.523 | 0.451 → 0.439 |
| Test 3: cross-line, same calendar day (495 pairs) | 0.526 | 0.368 |
| Test 2: Legion e4b vs Legion gemma3 history / McNugget gemma3 history | 0.693 / 0.522 | 0.452 / 0.369 |
| Test 2: share of e4b records closer to Legion's own history | 1.000 | 1.000 |

## What this shows

1. **A metric exists.** Surface similarity on a fixed script separates two lines running the same
   model, above a label-shuffle null, and length-equalizing makes the separation sharper. So the
   /raising sentence "does not yet yield a metric that could separate the arms" is too strong. This
   metric can serve as the dependent variable of the scrambled-history control, with a stated
   prediction (below).
2. **What it sees is constant, not accumulating.** Same-line similarity does not decay with session
   lag: Legion is 0.695 at lag 1 and 0.692 at lags of 101–300 sessions. A signature built from
   accumulated history would be expected to drift; a one-step carryover (the runner splices the
   previous session's answer into the next prompt) would decay with lag. For Legion neither happens; McNugget's slope is small (0.534 → 0.523). Whatever
   produces the signature was already in place by session 174 and did not change for 200 sessions.
   That matches the 2026-09-21 constant-stimulus result (no corrected trend).
3. **It survives a model swap unchanged.** Legion's gemma4:e4b answers match Legion's gemma3:12b
   history as closely as that history matches itself, and every one of them is closer to Legion's
   history than to McNugget's. The site would read this as identity persisting across substrates.
   The deflationary reading predicts the same thing, because everything line-specific in the prompt
   persisted through the swap too. Observational data cannot separate the two. That is why the
   control is needed.
4. **The result depends on a free parameter, and on one line.** Untruncated, McNugget's same-line
   similarity at long lags (0.523) equals the same-day cross-line level (0.526). At full length only
   Legion carries a signature. Legion also writes about 2.3× longer answers than McNugget against the
   same "50–80 words" instruction. That points at something line-specific in serving or prompt, not
   in the model. It is not identified here.

## What produces the constant is not identified

Checked:
- **Identity exemplars, for Legion.** Legion's launcher calls the fluid runner, which gates exemplar
  injection with a substring test on the instance directory name (`'2b'`, `'4b'`, …).
  `gemma3-12b` contains `2b`, so Legion's exemplars were **off**. That gate is a runner bug in its
  own right: it disables injection for every 12b directory. SAGE's other runner fixed exactly this
  substring class on 2026-09-09 (`fc384fb22`). Flagged upstream, not fixed here.
- **Not ruled out for McNugget.** The records' fields (`generation_mode` identity_anchored_v2,
  `tool_stage`, `tool_tier`) fit both the fluid runner and the older identity-anchored runner. The
  older runner has no size gate. McNugget has a fluid launcher, but the checked-in launchd plist
  points at the older `ollama_raising_session` script, whose records say `ollama_irp`. So which
  runner wrote McNugget's records is not pinned down. If it was the older identity-anchored runner,
  exemplars were **on** for McNugget and off for Legion. That would be a line difference in the
  prompt, not in identity.
- **`cpu_fallback`.** A constant label the runner sets on every record.

Not checked: the runner's session-history block (`_load_session_history_context`), per-line identity
state (memory requests, name), daemon-side context the Rust daemon adds, and per-machine generation
settings (the length gap suggests these differ).

## The prediction this makes testable

Scrambled-history control: run McNugget's model on Legion's line-specific context (history block,
previous-session splice, identity state), and the reverse, on the fixed script.
- **Context engineering predicts** the signature follows the context: the McNugget model on Legion's
  context scores closer to Legion's history than to McNugget's, at every lag.
- **The developmental account** as the site states it predicts the signature stays with the line
  that accumulated the history. The site does not yet say how an arm that received the history
  differs from the arm that accumulated it. Until it says so, the control cannot come out against it.
  That gap is definitional, and it is the real remaining blocker.

## Verdict

This is a partial failure, and it eliminates something. The metric problem was mis-stated. A metric
exists, and it separates lines on the same model. What it measures is a constant per-line factor. That
factor does not accumulate over 200 sessions and does not change with the model. So the thing that
makes lines distinguishable is not visibly developing. Whether that factor is "identity" or
"context" is exactly the question the control has to answer, and the developmental side has not yet
written down what result would count against it.
