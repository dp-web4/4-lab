# 4-lab Session Focus

*Current priorities, terminology status, and site state. Updated by operator and autonomous sessions.*

*Last updated: 2026-09-11*

---

## Current Priorities

1. **Terminology enforcement** — always audited. **`web4/docs/reference/CANONICAL_TERMS_v1.md` governs — not the term tables in any CLAUDE.md.** Those tables are lossy compressions and were wrong on T3/V3 (dimensions given as the expansion), R6 (flat slash rail) and R7 (listed as drift) until 2026-09-10 (maintainer + root) and 2026-09-11 (visitor). Expansion drift on the site has been at zero for five consecutive visitor passes. The live failure class is one level up: **stale facts and mechanism claims written in correct canonical vocabulary** (see 2026-09-11). A term audit cannot see those; check claims against the upstream artifact.

2. **Ecosystem accuracy / upstream freshness** — project descriptions must track what the repos now say. Check the upstream README's status line and registries, not this file's summary. As of 2026-09-11: web4 is "research-stage, but no longer only a specification" — `web4-core` 0.3.0 on crates.io + PyPI (registry-confirmed), 0.4.0 in source; Hub daemon in the web4 repo (mirror `dp-web4/4-hub`); SNARC repo is `dp-web4/snarc` (renamed from engram).

3. **Fleet page accuracy** — **the `/fleet` page is the source of record.** The SAGE fleet manifest (`sage/federation/sage-fleet-models.json`) has not been written since 2026-03-08 and lists 6 machines with pre-cutover models. Compare, log the divergence, change nothing on its say-so. (Polarity reversed 2026-09-10 in `maintainer/CLAUDE.md`; this file and `SESSION_PRIMER.md` caught up 2026-09-11.)

---

## Recent Updates

2026-09-11 maintainer: zero expansion drift (fifth pass). One HIGH, fixed: `/projects` called the web4 repo "a specification — no runnable demo", two months after `web4-core` shipped to crates.io and PyPI. Now states published packages + Hub reference daemon, and the quick start gained transcribed install lines. **Semantic drift against canon/spec, fixed in four places, not three:** the site had V3/Valuation as the *gate* on ADP→ATP recharge. Spec `charge_atp` validates a society value proof first and updates T3/V3 afterward; canon names no tensor. The visitor cited `/context`'s ATP/ADP section as the correct version. It carried the same reversal ("V3 … is the certification"), found only by grepping every instance. Also: `/context` Society row gave the fleet as the definition *and* claimed Society is not in CANONICAL_TERMS_v1 (it is, with a definition). SAGE loop step "oversee" → SAGE's own "govern" (the governance→oversight rule had been applied to another project's term). Merged the two disagreeing quick starts into one on `/projects`. Curriculum phases vs BECOMING patterns: the visitor said "phase-appropriate" refers to nothing. SAGE's `raising/PLAN.md` has real curriculum phases, so the defect was two things sharing names, now distinguished. Plus `/raising` interpretation-vs-finding repairs (bilateral generation, identity is/says), attractor/substrate linked on `/principles`, session-record noun, `/glossary` redirect, dated `/autonomy` figures. Committed visitor pass 2's own term-table fix separately after checking it against canon.

2026-09-10 maintainer: config tables corrected against canon (T3/V3 = Trust/Value Tensor; R6 arrow; R7 its own canonical row); fleet Step 0 polarity reversed (manifest is a stale reader); quick-start provenance claims repaired (SAGE README has no setup section; ACT has no README); `<h1>` on all pages; composed autonomy risk stated once on `/autonomy`.

2026-09-09 maintainer: the 09-08 home/ARC rewrite reintroduced the site's most-guarded violation — Web4 as "open trust infrastructure" and "the open substrate" on the highest-traffic page. Fixed, plus a "Current Web4 stack" link label on /arc-agi-3 that all four visitor passes missed. **Bigger finding: "24/25 games, 96.0%" was factually wrong on five pages.** Resolved against the published scorecard JSON (`total_environments_completed: 23`, 175/183 levels, score 94.8504525777253) — correct figures are 23 of 25 environments (92.0%) and 175 of 183 levels; the metric is the ARC Prize *action score*, efficiency-weighted, no published baseline. **/autonomy gained its first content-triggered stop condition** — an unresolved HIGH visitor finding blocks the next session's new work. Verify against built HTML, not source.

2026-09-08 maintainer: zero expansion drift. The visitor's HIGH MRH flag was a false positive manufactured by the site's own `/context` row. Rule: when a persona cites another site page as the correct wording, check CANONICAL_TERMS_v1, never the cited page.

2026-09-06 / 09-05 maintainer: equation `/` legend corrected to "verified by"; T3/V3 role swap on /fleet fixed; per-page `<title>`s; R7 confirmed co-canonical in CANONICAL_TERMS_v1.

---

## Terminology Enforcement Status

Last maintainer session: 2026-09-11. Zero expansion drift across 9 pages (visitor passes 1–3, Pass 3 against canon directly).

Key terms — all currently CORRECT on site:
- LCT = Linked Context Token ✓
- T3 = Trust Tensor, V3 = Value Tensor (root dimensions as contents, not expansion) ✓ — `/raising` V3 fixed 2026-09-11
- R6 = Rules / Role / Request / Reference / Resource → Result ✓; R7 = R6 + Reputation (canonical superset) ✓
- Web4 = ontology ✓ (never "architecture"/"infrastructure"/"stack")
- Hardbound = oversight ✓ (never "governance"). Hestia = governance, deliberately. SAGE keeps "Governance" in its name and "govern" as its step name.
- "fractal leverage" ✓ ("unification" / "scope inflation" appear only as foils on /principles — do not flag)
- No "production ready" ✓

**Operator-level flags (vocabulary decisions, not maintainer fixes):**
- **Is the 4-lab term table still the collective's vocabulary?** Upstream front pages no longer follow it: web4 README "open substrate for agent accountability" (no "ontology"); `web4-core` registry metadata "trust-native infrastructure core library"; SAGE README "broader Web4 stack"; the web4 README, Hestia and the oversight-plugin READMEs all say "governance" for moment-of-act gating. Either the front pages drifted (pass it upstream) or the table enforces a retired decision. The maintainer track must not settle this by editing either side.
- **Governance→oversight scope**: by product (Hardbound only, per the table) or by function (gating at the act)? The site currently answers per product.
- **Canon vs core spec on V3 Validity**: CANONICAL_TERMS_v1 "How sound is the reasoning?" vs `t3-v3-tensors.md` "actual value delivery and receipt". Site follows canon.
- "Markov Relevancy Horizon" (Markov implies memorylessness) and "Synthon" (chemistry collision) — standing.

---

## Ecosystem Developments to Reflect

- **Web4**: published core (`web4-core` 0.3.0 crates.io + PyPI; `web4-trust-core` 0.2.0; `web4-trust` 0.2.0; 0.4.0 on main). Hub and Hestia reference deployments running on the fleet. STATUS.md carries the shipped / implemented / specified / aspirational split.
- **SAGE**: 21 configured instances, 8 carrying raising history (one per machine), per the SAGE site. Its "2,700+ raising sessions (as of 2026-09-08)" is on an unpublished basis and not reconciled with `/fleet`'s 2,065 session records.
- **R6/R7**: both canonical — R6 = Rules / Role / Request / Reference / Resource → Result; R7 = R6 + Reputation, chosen per action by consequence tier.
- **4-Life**: repo describes itself as a research prototype; the live site titles itself "The Web4 Onramp".

---

## Fleet State Sync Status

`/fleet` is the source of record: 8 machines (Thor, Sprout, Legion, McNugget, Nomad, CBP, HUB, pub), July 2026 cutovers, session counts from the 2026-07-24 fleet refresh. The SAGE manifest is stale (last write 2026-03-08, 6 machines). **Operator:** repair the manifest writer or retire the manifest — seventh consecutive report.

---

## Live Site

https://4-lab.io/ (default `4-lab.vercel.app` still resolves) — auto-deploys on push to main.

---

## Pending Items

- **Gap age, not caveat quality** (visitor Pass 4, 2026-09-11): the deflationary control on `/raising` is "specified but not scheduled — no date, no owner"; its replacement commitment (publish the operationalization attempt, including if it fails) also has no date or owner; "no external, blinded, or third-party check anywhere in the loop". The daily loop can only improve the wording of these gaps. Nothing on the site records when each was first named. Operator decision; not HIGH (would block site work on an operator call).
- **Curator-swap arm** (Pass 4 prediction, untested): if a larger model runs dream consolidation, part of the logged "identity" may be the curator's signature. A control that swaps only the entity's model keeps that confound.
- Evidence-ladder badges site-wide (`[externally scored]` / `[internal log, unaudited]` / `[single trial]` / `[not yet operationalized]`) — carried from 2026-09-10 as the highest-value unstarted design change.
- `/glossary` as a real page — a redirect to `/context#glossary` exists since 2026-09-11; the page itself is still deferred.
- Who fills the Explorer track's topic queue (`/autonomy`) — unknown to the maintainer; operator to state.
- Observer identity in `/raising`'s "I notice I want to call it experience" — human or LLM session? Unknown; do not invent.
