# Does the identity metric see a known effect? (2026-10-29)

Script: `identity_metric_june_step.py` (reuses `identity_continuity_attempt.py`).
Data: public session records in `SAGE/sage/instances/{legion,mcnugget}-gemma3-12b/sessions/`, SAGE at `3bd254557`.

## Why

/notebook/raising cites a lesson from the Synchronism ensemble bet: before a real run, show that the
metric moves on a known, built-in effect. The 2026-09-24 identity metric (lexical similarity of answers
to the fixed six-question tutor script) had never been given that check. The visitor's 2026-10-29 pass
pointed at a built-in effect the page already documents: the 2026-06-07 move of the raising runner onto
the Rust daemon (SAGE `046e45dc0`). Before it, the Python daemon composed its own prompt ("I am {name}
… running on {machine}", identity exemplars, dream insights, the conversation so far). After it, the
model got the runner's system prompt and the question, with no history. If the metric cannot see that,
it cannot see a scramble either, because a scramble is also a change in what the line is handed.

## Method

- Test A, per line: pairs of records on the same side of the step versus pairs straddling it, at matched
  session lag (1–3, 4–10, 11–30). Also leave-one-out attribution of the last 60 pre-step and first 60
  post-step records to "pre" or "post", against a 30-shuffle label null.
- Test B: leave-one-out line attribution (Legion vs McNugget) on the last 60 pre-step records of each.
- Only gemma3:12b records (an empty model field is read as the line's gemma3, as on 09-24).
- `exact`: only records whose six tutor turns match the post-step script word for word. The first run
  matched on question count only, and its Test B came out at chance (0.567). Under `exact` it does not.
  The mixed-script run is the wrong one: question wording varied before the step, and the metric scores
  answers question by question.

## Results (`exact`)

| | Legion, full length | McNugget, full length | Legion, first 100 words | McNugget, first 100 words |
|---|---|---|---|---|
| records pre / post | 125 / 168 | 82 / 221 | same | same |
| lag 11–30, same side pre | 0.537 | 0.518 | 0.537 | 0.518 |
| lag 11–30, same side post | 0.695 | 0.529 | 0.554 | 0.508 |
| lag 11–30, straddling the step | 0.477 | 0.363 | 0.421 | 0.355 |
| pre/post attribution (null mean / max) | 0.992 (0.487 / 0.617) | 1.000 (0.495 / 0.600) | 1.000 (0.492 / 0.600) | 1.000 (0.497 / 0.600) |
| Test B, pre-step line attribution | 0.958 (0.507 / 0.625) | | 0.958 (0.508 / 0.625) | |

Shorter lags give the same pattern (straddling n is 6 pairs at lag 1–3 and 49 at 4–10, so read lag 11–30).

## Reading

1. **The metric passes the check.** A change in what the line is handed moves it a lot: on McNugget,
   straddling pairs sit 0.15 below same-side pairs at matched lag. The 09-24 within-line versus
   cross-line gap, at 100 words, was 0.445 vs 0.366 (0.08). The prompt step is about twice the size of
   the line signature.
2. **Line separation is not specific to the Rust runner.** Before the step, when each line was handed its
   own name and its own conversation history, the lines also separate (0.958). So the 09-24 separation
   is not only an artifact of the post-step runner configuration.
3. **What this does not show.** The step changed the prompt, the daemon and the history at once, so it is
   a large manipulation. A metric that sees a large manipulation may still miss a scramble, which keeps
   content and changes only order. Passing is necessary, not sufficient. Test B's 60-record windows are
   not date-matched across lines, so serving-stack drift over time is not excluded there.
4. **For the control's design.** The metric is very sensitive to the handed context. Both accounts expect
   that: the deflationary account says the signature is made by the context, and the developmental one
   says the context is where identity lives. So this result supports using the metric. It does not
   choose between the accounts. What it rules out is the cheap objection that the metric is too blunt to
   register any manipulation.

One side observation, not a finding: before the step, Legion's same-line similarity falls slightly with
lag (0.584 at lag 1–3 to 0.537 at 11–30). After the step it is flat (0.694 to 0.695). History was handed
only before the step. This is consistent with history carryover and is untested beyond that.
