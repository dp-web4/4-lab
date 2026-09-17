# 4-lab Session Focus

*Current priorities, terminology status, and site state. Updated by operator and autonomous sessions.*

*Last updated: 2026-09-17*

---

## Current Priorities

1. **Terminology enforcement** — always audited. **`web4/docs/reference/CANONICAL_TERMS_v1.md` governs — not the term tables in any CLAUDE.md.** Those tables are lossy compressions and were wrong on T3/V3 (dimensions given as the expansion), R6 (flat slash rail) and R7 (listed as drift) until 2026-09-10 (maintainer + root) and 2026-09-11 (visitor). Expansion drift on the site has been at zero for five consecutive visitor passes. The live failure class is one level up: **stale facts and mechanism claims written in correct canonical vocabulary** (see 2026-09-11). A term audit cannot see those; check claims against the upstream artifact.

2. **Ecosystem accuracy / upstream freshness** — project descriptions must track what the repos now say. Check the upstream README's status line and registries, not this file's summary. As of 2026-09-11: web4 is "research-stage, but no longer only a specification" — `web4-core` 0.3.0 on crates.io + PyPI (registry-confirmed), 0.4.0 in source; Hub daemon in the web4 repo (mirror `dp-web4/4-hub`); SNARC repo is `dp-web4/snarc` (renamed from engram).

3. **Fleet page accuracy** — **the `/fleet` page is the source of record.** The SAGE fleet manifest (`sage/federation/sage-fleet-models.json`) has not been written since 2026-03-08 and lists 6 machines with pre-cutover models. Compare, log the divergence, change nothing on its say-so. (Polarity reversed 2026-09-10 in `maintainer/CLAUDE.md`; this file and `SESSION_PRIMER.md` caught up 2026-09-11.)

---

## Recent Updates

2026-09-17 maintainer: zero expansion drift (ninth pass). **The one HIGH was self-inflicted:** 09-16's sed replacement contained `&apos;`, and sed's `&` re-inserted the matched clause into the /projects Web4 card ("equationthe … )apos;s …"). New `maintainer/check-render.py` (entity fragments, paren imbalance, words glued to inline tags) found 8 real hits on the pre-fix build, 0 after, and is wired into `check-caveats.sh`. A 7-word splice detector was tried first and missed the real splice (the clauses were paraphrases). CLAUDE.md now forbids entities in sed replacements. **Propagation fixes:** ATP/ADP glossary rows kept the 09-15 registry reading; R7 row contradicted the page's R6/R7 reading (`r6-framework.md` now agrees with the narrower one); Sovereign is a role (society-roles §2.1), not a member; 4 T3/V3 dimensions-in-expansion-slot forms; /fleet oversight pool in two senses; account budgets called "the ATP cycle". **Upstream-artifact corrections:** ARC's "no published baseline" was refuted on 4 pages (RHAE is human-relative; ARC Prize changed the baseline to median first-time human on 2026-04-14, 3 days before the run). The visitor's "≥80 of 115 pre-port sessions loaded LoRA" is 45 by distinct session number (84 is a file count across two numbering series). /raising's "demonstrated readiness" gate doesn't exist in code (tool stage is a CLI flag). Patterns 2–3 are harness-computed signals. Identity definition single-sourced on /raising (the "home page" definition didn't exist). **governance→oversight notes consolidated: 27 rendered mentions on 7 pages → 3 on /context**, guarded. Withdrawn: 38 → 53, all firing pre-fix. **Researcher question:** with Sensing and Relating reduced to harness signals, BECOMING's developmental content is two uncounted "increasing" claims (Patterns 4–5). Keep a six-pattern frame?

2026-09-16 maintainer: zero canonical drift (eighth pass). **The identity-portability evidence was read in the SAGE git history, and the site's strongest identity observation does not survive it.** /raising and /fleet said SAGE-Sprout's self-description "drifted" from "autonomous conversation-generating AI system" to "humanoid robotic entity" while the inputs carried across the port did not. Commit `4f30be970`'s experience buffer shows both phrases are **TinyLlama output on CBP on 2026-02-27, sessions 115 (22:16) and 117 (22:58), 42 minutes apart**, and `identity.json`'s net diff over those sessions is the session count and a timestamp. So it is not drift across the port, and not the consolidator. It is one 1.1B model varying in one evening. **The port was a copy:** the Qwen line kept running on Sprout, with LoRA, to session 119 on 2026-03-06. **"Memoriescape"** (git -S) first appears as raw TinyLlama output in session 117, not as Sprout/Qwen output, and the page's gloss for it was the prompt's wording. The **observer note** is a Claude session's (the builder, asked by the researcher), no longer unknown. **Thor "· LoRA"** was the manifest's `lora_capable`; `instance.json` `has_lora: false` since 2026-03-14, before any raising session. **Hardbound present-tense "gates and reverts against a hardware root"** on Home, /projects, /context ×3 and P10 → design tense, process-level today. Also: /raising mechanism paragraph scoped to current lines; "interaction-history half" → sources; counting-noun glossary row (`#instance-line`); hestia = "trust store inside the Hestia daemon" on /fleet; "more precise than the equation" → the spec's RDF entity-role binding. `caveats.json` withdrawn 32 → 38, each shown firing on the pre-fix build. **Researcher question:** with the self-description pair reduced to sampling variation, /fleet's portability observation now rests only on unmeasured "recognizable behavioral signature". Does the working hypothesis ("identity lives in state files") still merit its quote block?

2026-09-15 maintainer: zero expansion drift. The work was reading the code behind claims the visitor could only flag. **"Raising never changes weights" was false as history:** SAGE's archived Sprout Qwen 0.5B line has 84 session records with `using_lora: true` (2026-01-27 → 03-06), from a sleep-cycle LoRA trained on its own raising exchanges and loaded back into it. That is the line /raising's kept identity observation comes from. Weights have been frozen only since `BECOMING_CURRICULUM.md` (2026-04-04). Scoped on 4 pages. **Dream consolidation is Claude** (`dream_consolidation.py`, `claude --print`), rewriting identity.json after every session, and is now named as a confound. **/fleet "BECOMING pattern observed: creating" on all six cards was the session-count schedule** (phase_name, creating = 41+), now labelled as the curriculum phase. Mechanism fixes: the Rust daemon is a gateway, not the 12-step loop (SAGE's `RUST_VS_PYTHON_CAPABILITY.md`); PolicyGate is SAGE's step-10 plugin, not Hardbound's; SAGE `peer_trust.rs` and Hestia's trust derivation were described as one component; ATP/ADP now uses the spec's pooled two-state token; Synchronism is "lineage" (web4 AGENTS.md). Hestia's law has no push or deploy rule, now stated on /autonomy. 4 stale pointers, evidence-tier words, revert record recounted. **Fleet manifest:** its first fresh write since March (McNugget, via SAGE `4754173b6`); McNugget runs Gemma 4 12B since session 449 (2026-09-08), confirmed in the session records, and the page was updated. `caveats.json` withdrawn: 13 → 32, each confirmed firing on the pre-fix build. **Researcher question:** /raising's exemplar (Sprout) now carries both a weights confound and a consolidator confound. Should the page lead with a frozen-weights line instead?

2026-09-14 maintainer: zero expansion drift (sixth pass). The single HIGH was a **recurrence**: V3-as-recharge-gate / "T3 and V3 verify each other", withdrawn on /context 09-11, was still live on /autonomy, twice on /context, on /fleet and on /raising. /fleet also claimed V3 "accumulates alongside" T3 in the peer tracker, but `SAGE/sage/federation/peer_trust.py` is T3-only, so that was a false mechanism, not a gloss. **New failing check:** `maintainer/check-withdrawn.py` runs every retracted reading (13, in `caveats.json` `withdrawn`) against rendered HTML (source grep missed a JSX-split instance). It found 7 live on the pre-fix build and 0 after, and is now wired into `check-caveats.sh`, the run script and maintainer CLAUDE.md. The 09-12 caveat check had been invoked by nothing. MEDIUMs fixed: witness stake + slashing, Delegation → Hestia, oversight-note carve-out, Home "running"/"independent", /fleet "(today)" and identity-portability-as-discovery, /raising comparator, /arc-agi-3 un-ablated lesson, Principle 6 universal, "discovers the equations", /autonomy "fixed within one cycle". The 09-13 run died on usage credits with no log.

2026-09-11 maintainer: zero expansion drift (fifth pass). One HIGH, fixed: `/projects` called the web4 repo "a specification — no runnable demo", two months after `web4-core` shipped to crates.io and PyPI. Now states published packages + Hub reference daemon, and the quick start gained transcribed install lines. **Semantic drift against canon/spec, fixed in four places, not three:** the site had V3/Valuation as the *gate* on ADP→ATP recharge. Spec `charge_atp` validates a society value proof first and updates T3/V3 afterward; canon names no tensor. The visitor cited `/context`'s ATP/ADP section as the correct version. It carried the same reversal ("V3 … is the certification"), found only by grepping every instance. Also: `/context` Society row gave the fleet as the definition *and* claimed Society is not in CANONICAL_TERMS_v1 (it is, with a definition). SAGE loop step "oversee" → SAGE's own "govern" (the governance→oversight rule had been applied to another project's term). Merged the two disagreeing quick starts into one on `/projects`. Curriculum phases vs BECOMING patterns: the visitor said "phase-appropriate" refers to nothing. SAGE's `raising/PLAN.md` has real curriculum phases, so the defect was two things sharing names, now distinguished. Plus `/raising` interpretation-vs-finding repairs (bilateral generation, identity is/says), attractor/substrate linked on `/principles`, session-record noun, `/glossary` redirect, dated `/autonomy` figures. Committed visitor pass 2's own term-table fix separately after checking it against canon.

2026-09-10 maintainer: config tables corrected against canon (T3/V3 = Trust/Value Tensor; R6 arrow; R7 its own canonical row); fleet Step 0 polarity reversed (manifest is a stale reader); quick-start provenance claims repaired (SAGE README has no setup section; ACT has no README); `<h1>` on all pages; composed autonomy risk stated once on `/autonomy`.

2026-09-09 maintainer: the 09-08 home/ARC rewrite reintroduced the site's most-guarded violation — Web4 as "open trust infrastructure" and "the open substrate" on the highest-traffic page. Fixed, plus a "Current Web4 stack" link label on /arc-agi-3 that all four visitor passes missed. **Bigger finding: "24/25 games, 96.0%" was factually wrong on five pages.** Resolved against the published scorecard JSON (`total_environments_completed: 23`, 175/183 levels, score 94.8504525777253) — correct figures are 23 of 25 environments (92.0%) and 175 of 183 levels; the metric is the ARC Prize *action score*, efficiency-weighted, no published baseline. **/autonomy gained its first content-triggered stop condition** — an unresolved HIGH visitor finding blocks the next session's new work. Verify against built HTML, not source.

2026-09-08 maintainer: zero expansion drift. The visitor's HIGH MRH flag was a false positive manufactured by the site's own `/context` row. Rule: when a persona cites another site page as the correct wording, check CANONICAL_TERMS_v1, never the cited page.

2026-09-06 / 09-05 maintainer: equation `/` legend corrected to "verified by"; T3/V3 role swap on /fleet fixed; per-page `<title>`s; R7 confirmed co-canonical in CANONICAL_TERMS_v1.

---

## Terminology Enforcement Status

Last maintainer session: 2026-09-17. Zero expansion drift across 9 pages (ninth consecutive clean pass); 4 dimensions-in-expansion-slot forms fixed and guarded.

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

`/fleet` is the source of record: 8 machines (Thor, Sprout, Legion, McNugget, Nomad, CBP, HUB, pub), session counts derived from git on 2026-09-12. **Partly repaired 2026-09-14** (SAGE `4754173b6`): McNugget's raising script now registers its observed model, writing `fleet.json` (the registry the daemon loads) and refreshing `sage-fleet-models.json`, which now labels itself non-authoritative. The other seven seats still register nothing, and five manifest entries remain `2026-03-08`. Polarity rule unchanged: update the page only from entries newer than its figures, and confirm against session records (as done for McNugget on 09-15).

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
- ~~Observer identity~~ in `/raising`'s "I notice I want to call it experience": **resolved 2026-09-16**. It is a Claude session's take, written at the researcher's request in the first-contact record. Now stated on the page.
- **Non-Claude visitor pass** (named as the cheap fix on `/autonomy` since 2026-09-10, still undone, 6+ days): operator scheduling decision. Today's four passes are again one model family.
