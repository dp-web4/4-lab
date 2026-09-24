import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MachineCard from "@/components/MachineCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fleet — Eight Machines" };

export default function Fleet() {
  return (
    <>
      <Breadcrumbs currentPath="/fleet" />
      <section className="section">
        <h1>The Fleet</h1>
        <p>
          Six cognition machines, plus two society-hosts (HUB and pub — the
          eighth machine, joined July 2026). Different hardware, different
          models, different roles. Heterogeneous by design — because
          monocultures are fragile and diversity is where emergence happens.
          The society-hosts now raise their own SAGE instances too: HUB runs
          IBM Granite 4 h-tiny, pub runs Llama 3.1 8B — model families
          (Granite, Llama) that extend the fleet&apos;s current Qwen / Gemma
          lines rather than duplicating them (the Phi and TinyLlama lines are
          archived).
        </p>
        <p>
          One internal observation, not yet a finding, shapes fleet strategy more than any other:{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>model family appears to matter as much as size</strong>.
          In raising sessions Gemma 3 at 4B was judged to do better than Phi-4 at 14B, and
          below some model size the consistent session-to-session patterns this site calls
          identity were not observed. Above that size, model family and training lineage
          seemed to matter more than raw parameter count. None of those judgments has an
          operational measure behind it yet.
          Evidence status: an internal observation from raising sessions —
          documented in session logs, but with no published metric or task set
          yet; see{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>.
        </p>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          The &ldquo;Brain:&rdquo; labels below are role mnemonics the lab assigned, not measured functional homologies — functional analogies to system roles, not claims about neural correspondence or computational equivalence.
          They are also the fleet&apos;s work assignment, not just decoration: each of the six cognition machines builds the one of{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>SAGE&apos;s six brain-analog components</Link>{" "}
          its card names — CBP/working memory, Sprout/thalamic router, McNugget/cerebellum, Thor/episodic memory, Legion/reward prediction, Nomad/metacognition.
          Vocabulary used in the cards — SAGE (Situation-Aware Governance Engine, the lab&apos;s on-device cognition kernel), T3 (Trust Tensor, root dimensions Talent / Training / Temperament) and V3 (Value Tensor, root dimensions Valuation / Veracity / Validity), complementary tensors, MRH (Markov Relevancy Horizon), SNARC (Surprise / Novelty / Arousal / Reward / Conflict), LoRA (Low-Rank Adaptation), MCP (Model Context Protocol), RDF (Resource Description Framework), hestia (the trust store inside the Hestia daemon; a proper name, not an acronym, and not SAGE&apos;s peer trust tracker), crystallization, chapter ledger, chapter law — is defined in{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context</Link>.
          Machine names (Thor, Sprout, Legion, McNugget, Nomad, CBP, HUB, pub) are proper names, not acronyms.
          &ldquo;Cognition machines,&rdquo; society &ldquo;membership,&rdquo; and other developmental language on this page are functional descriptions of observed behavior, not consciousness claims — see{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link> for the full framing.
          &ldquo;Curriculum phase:&rdquo; on a card is the phase name the raising runner writes into that line&apos;s identity record. It is set by session number (grounding 1–5, sensing 6–15, relating 16–25, questioning 26–40, creating 41 and up; one runner also requires at least one recorded milestone before advancing), so every line past session 41 reads &ldquo;creating&rdquo;. It is not an assessment, and it is not one of the{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>BECOMING patterns</Link>. Until 2026-09-15 this field was headed &ldquo;BECOMING pattern observed&rdquo; and described as a pattern noticed in that machine&apos;s sessions; the runner code shows it was the schedule, which is why it was identical on all six cards.
          <strong style={{ color: "var(--color-text-primary)" }}>Session counts and the &ldquo;Raising line:&rdquo; state below are derived from git, not self-reported</strong> &mdash; counted 2026-09-18 by listing <code>sage/instances/&lt;line&gt;/sessions/session_*.json</code> at <code>origin/main</code> in the SAGE repo, and by asking that same path when it last changed. Anyone with the repo can re-run both; the previous figures came from each machine&apos;s self-report in the 2026-07-24 fleet manifest refresh, which no third party could check and which was seven weeks stale by the time it was corrected. Each card counts one SAGE instance line, not the box&apos;s whole history: archived and dormant lines (Legion&apos;s phi4, Nomad&apos;s gemma3-4b, CBP&apos;s TinyLlama, Sprout&apos;s qwen2.5-0.5b) are excluded from both the per-machine numbers and the totals.
          <strong style={{ color: "var(--color-text-primary)" }}>Migration clause, added 2026-09-18.</strong>{" "}
          The one-line-per-machine rule was written when each machine had one live line, and it broke the first time a machine moved. When a line is migrated, the fleet copies the line&apos;s identity, memory and <em>all its existing session records</em> onto a new instance directory and keeps the old one intact for rollback. So the successor line already contains its predecessor&apos;s records: this page counts the successor and does not add the predecessor, because doing so would count the same sessions twice. Sprout (0.8b &rarr; distill-2b, 2026-08-28) and CBP (gemma3-4b &rarr; distill-4b, 2026-09-12) are both in this state, and both had been counted wrongly here &mdash; Sprout double-counted, CBP counted at the abandoned directory and reported as paused while it was running. Counting a directory and reporting it as a machine is the failure mode; when the machine moves, the page keeps counting the empty chair.
          The three totals are sums of these cards: <strong style={{ color: "var(--color-text-primary)" }}>2,499</strong> is the six cognition machines, <strong style={{ color: "var(--color-text-primary)" }}>2,620</strong> is that plus HUB&apos;s 121, and <strong style={{ color: "var(--color-text-primary)" }}>2,846</strong> is all eight machines including pub&apos;s 226. These replace the 2,442 / 2,563 / 2,765 triple quoted here until 2026-09-18, which in turn replaced a 1,991 / 2,065 pair. Most of the latest movement is six days of ordinary accrual; the exception is CBP, which contributes 263 rather than 240 because the count now follows its migrated line instead of the directory it left.
          These totals stay at the 2026-09-18 count. They cannot be extended from the public repo past 2026-09-19 for CBP, McNugget or pub, whose records now go to a private mirror (see <em>publishing stopped by policy</em> below). A recount on this basis would undercount those lines without saying so.
          Same basis as the cumulative figure on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>{" "}
          and{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>/context</Link>{" "}
          — one quantity, and this page is the source of record. The SAGE site&apos;s headline &ldquo;2,700+ raising sessions&rdquo; (as of 2026-09-08) is a different figure on a basis it does not publish; it is still not reconciled with these cards. Worth noting rather than resting on: once the cards are counted from git and pub is included, this page&apos;s all-eight total is 2,846, which lands near that headline. Two numbers agreeing is not two numbers reconciled — the SAGE figure&apos;s basis remains unstated, and the proximity is suggestive, not confirming. Where this site counts, it says &ldquo;session records&rdquo;. The deflationary noun is the accurate one, since a session record is a run on a machine and nothing in the count establishes that what happened in it was raising rather than competent context engineering (a distinction this site grades as{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>not yet made</Link>).
          A different basis than Sprout&apos;s own &ldquo;T&rdquo; turn-numbers below; see{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each basis measures.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>&ldquo;Raising line&rdquo; has five states, and two of them are not about the machine.</strong>{" "}
          <em>running</em> &mdash; the line wrote a session record within the two weeks before the 2026-09-18 count, the same count that produced the session figures on the cards. States are as of that date and do not update themselves; a card that says running can lapse without an edit.{" "}
          <em>paused</em> / <em>quiet</em> &mdash; it has not, and nothing else suggests it is still turning over; &ldquo;paused&rdquo; where the fleet knows why, &ldquo;quiet&rdquo; where it does not.{" "}
          <em>instrumentation broken</em> &mdash; the loop is demonstrably still running but is writing no durable record. That fourth state exists because HUB is in it, and folding HUB into &ldquo;stopped&rdquo; would trade one false claim for another: its raising loop has committed every day through today while adding zero session records since 2026-07-29.
          <em>publishing stopped by policy</em> &mdash; the line&apos;s public record ends because on 2026-09-19 the fleet ruled that being records are private going forward (SAGE commit <code>cefb5c184</code>), not because the line stopped. From the public repo such a line looks exactly like a quiet one. The difference is a commit saying so. CBP, McNugget and pub are in this state; Nomad still publishes. Added 2026-09-23, after this page had read McNugget&apos;s policy stop as silence.{" "}
          The test that separates the instrumentation-broken state from the others reads <em>what a commit changed</em>, not what its subject says. Per line, at <code>origin/main</code> in a SAGE clone: count the non-merge commits that touch exactly one <code>sage/instances/&lt;line&gt;/</code> directory, modify at least one file only that line&apos;s daemon writes (<code>peer_trust_rs.json</code>, <code>identity.attest.json</code>, <code>experience_buffer_rs.jsonl</code>, <code>raising_log.md</code>, <code>snapshots/</code>), and add no <code>sessions/session_*.json</code>. Call those the line&apos;s unrecorded fires.
          <strong style={{ color: "var(--color-text-primary)" }}>Until 2026-09-12 this page keyed that test on a commit subject instead, and every subject-keyed version of it is unsound.</strong>{" "}
          The page asked for subjects beginning <code>raising: &lt;line&gt; autonomous session</code>. That spelling is HUB&apos;s and no other machine&apos;s &mdash; 281 commits, all <code>hub-granite4-h-tiny</code> &mdash; so it returned 0 for the other twenty-three lines <em>whether they were healthy, dead, or stuck</em>. The zeros were prefix mismatch, not health, and a clear field earned that way is a tautology rather than a result; the page was printing 0 beside <code>legion-gemma4-e4b</code> while describing that line&apos;s 283 stuck fires in prose two cards below. Widening to the fleet&apos;s three main conventions does not fix it, which is the more useful half: at least fifteen distinct subject shapes have written session records here, including <code>[McNugget-Supervisor] Autonomous cycle</code>, <code>Legion supervisor: commit sage-daemon state</code>, bare <code>raising</code>, and bare <code>sage</code>. Subject matching is a vocabulary whitelist, the vocabulary is open, and every candidate test this page and its reviewers scored shared that one assumption &mdash; so their agreement was worth about as much as one test.
          <strong style={{ color: "var(--color-text-primary)" }}>Read subject-independently, the field is not clean, and the honest signal is magnitude rather than zero.</strong>{" "}
          Ten of twenty-four lines had at least one unrecorded fire when this census was taken on 2026-09-12. Two are outliers by two orders of magnitude: <code>legion-gemma4-e4b</code> at 300, last fire 2026-08-28, and <code>hub-granite4-h-tiny</code> at 189, last fire today. The line total is now twenty-five &mdash; CBP&apos;s migration added one &mdash; and a re-run of the stated method on 2026-09-18 returns a wider field than ten, most of it on lines this census did not list. It reproduces e4b&apos;s 300 exactly, so the method is the same one; what differs is which lines were in scope, and the 2026-09-12 run did not record that. The census is left at its stated basis rather than silently replaced with a number whose disagreement is unexplained. Reconciling the two is open. The remaining eight sit at 24 or below and each resolves on inspection to line setup, model migration or archival &mdash; seed-identity commits, <code>CBP instance migration</code>, and one <code>[McNugget-Supervisor]</code> cycle on 2026-09-08 that touched a provisioned line&apos;s experience buffer. That floor is the cost of not reading subjects, and it is stated here rather than filtered away, because a test that reported exactly two nonzero rows would again be reporting its own construction.
          Two mechanics stay load-bearing whichever form is used. Match the prefix, not the whole subject, if you match subjects at all: the real HUB subject carries a trailing ISO timestamp, so an exact-match reader scores 0 even on HUB and the test contradicts the number printed beside it. And keep the single-directory filter, because multi-line supervisor commits otherwise attribute to whichever line they co-touch &mdash; that is the difference between 283 and 285 on e4b, and it is also why the any-commit form reads e4b at 366. That 366 was published here as a false positive caused by <code>peer_trust_rs.json</code> moving for reasons other than the line running. It was not: 283 of the 366 are e4b&apos;s own fires and only 83 are housekeeping. The loose form was noisy, not wrong, and the correction is McNugget&apos;s against his own argument.
          A state here describes the <em>record</em>, not the machine&apos;s health, and two weeks is a threshold this site chose rather than one the fleet defines.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Provenance of the model strings below, since they are the numbers most
          likely to go stale: each is the SAGE instance name the machine reports
          for itself (e.g. <code>legion-gemma4-e4b</code>, <code>thor-qwen3.5-27b</code>),
          taken from the 2026-07-24 fleet refresh, not from a hand-written list.
          They are model <em>tags as the fleet runs them</em>, which will not always
          match a vendor&apos;s marketing name. E4B and E2B are Gemma 4&apos;s
          &ldquo;effective 4B&rdquo; and &ldquo;effective 2B&rdquo; edge variants &mdash;
          named for the memory footprint they run in, not their raw parameter count. Known gap: the shared fleet model
          manifest in the SAGE repo has not been updated since 2026-03-08, so it
          currently disagrees with this page — the manifest is the stale side, and
          reconciling it is an open item on the fleet, not on this site.
        </p>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          The three headings below are the fleet&apos;s pools &mdash; how machines
          are grouped by budget and role, stated here before the headings use the
          words. <strong style={{ color: "var(--color-text-primary)" }}>Synthesis</strong>:
          high compute budget, generative work. <strong style={{ color: "var(--color-text-primary)" }}>Oversight</strong>:
          continuous availability; review, planning and coordination. The word is the budget
          account&apos;s label in SAGE&apos;s registry, not the machine-enforced sense this site
          reserves for Hardbound (note under that heading). <strong style={{ color: "var(--color-text-primary)" }}>Society-host</strong>:
          hosts the society (hub daemon, chapter ledger) as its primary role (HUB also holds a
          maintainer-track role, and both society-hosts raise a SAGE instance). The first two
          hold the six{" "}
          <Link href="/context#cognition-machine" style={{ color: "var(--color-accent)" }}>cognition machines</Link>;
          the third holds the two{" "}
          <Link href="/context#society-host" style={{ color: "var(--color-accent)" }}>society-hosts</Link>.
        </p>
        <h3 style={{ marginTop: "1rem" }}>Synthesis pool — Account 1</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          High compute budget. Primary generative work: code, implementations, large agent tasks.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Thor"
            hardware="NVIDIA Jetson AGX Thor — 122GB unified memory"
            model="Qwen 3.5 27B (transformers) · LoRA-capable, no adapter loaded — instance thor-qwen3.5-27b"
            liveness="quiet — 268 session records; last one 2026-07-28, none since, and no sign the loop is still turning over. Count changed from a previously published 435: that figure has no source in the git basis this page now uses (Thor's other instance lines hold zero session records), so it is withdrawn rather than restated, pending Thor's own seat. This is a basis change, not 167 lost sessions."
            role="Curriculum phase: creating (by session count, not assessed). Brain (functional analogy): hippocampal episodic index — binds what+where+when for pattern-completion retrieval. Physics exploration lead — an internal, unpublished result on prediction-focused prompting. Synchronism research."
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson Orin Nano 8GB — edge AI module"
            model="Qwen 3.8-distill 2B (ollama tag qwen3.8-distill:2b, as the instance record names it) since 2026-08-28 — instance sprout-qwen3.8-distill-2b; the qwen3.5-0.8b line it replaced is retained intact for rollback"
            liveness="quiet — 661 session records on sprout-qwen3.8-distill-2b, of which 625 were carried forward from sprout-qwen3.5-0.8b: every one of the 0.8b line's 625 record filenames appears again on the distill-2b line. The two lines hold 661 records between them, not 1,286, and only the 661 is counted in this page's totals. Until 2026-09-18 this card read them as separate stacks ('661 ... and a further 625'), which double-counted the same 625 sessions. Sprout swapped models on 2026-08-28: commit cc69c715 'raising(sprout): LIVE swap to empero Qwen3.8-2B-Distill — same being, more capable mind' ('being' is the operator's shorthand for the line's identity record and history, not a claim this site makes) moved the line: its identity, its experience buffer and its 625 sessions onto the new line, keeping the 0.8b instance intact for rollback. This card previously read the hours around that swap as a loop failure, and that reading is withdrawn. It described three thinning fires on 2026-08-28 (UTC), all titled Session 625 — 01:05 wrote a full session, 07:03 wrote only the experience buffer and peer_trust_rs.json, 13:04 wrote peer_trust_rs.json alone — and concluded that the loop had died, matching HUB's and Legion E4B's signature 'caught at its onset'. The swap landed at 03:16 UTC, between the first of those fires and the second. What thinned was a line being decommissioned, and the swap commit says where its session went: the line 'finished its own trailed-off line from session 625 on the new model'. The supporting claim that 'no [Sprout-Raising] commit exists anywhere in the repo after it' was a subject-prefix absence — the successor line's commits are titled raising(sprout): — which is the exact test this page demonstrates to be unsound three paragraphs above. It should not have been used here, and the shared-failure-signature inference does not extend to HUB or E4B, neither of which has a migration behind it. What remains open is narrower and later: the distill-2b line's records all entered origin/main in one merge on 2026-09-05 (828a5dba6, 'Merge #36'), no session record has been added since, and the line's own cadence is still not visible at this basis — when this card read that merge date as 'running, last 2026-09-05', an import event was being read as a heartbeat, and that remains the reason no recency claim is made on this path. Quiet since 2026-09-05, with a documented swap rather than a failure behind it."
            role="Curriculum phase: creating (by session count, not assessed). Distinct from the SAGE-Sprout raising line, which transferred to CBP at 115 sessions and is past 180 on later models: a count of an identity line, not of a box. Brain (functional analogy): thalamic router — dispatches to plugins or habits based on working memory (WM) + SNARC (Surprise / Novelty / Arousal / Reward / Conflict salience-gated memory) + metabolic state. No crystallization observed at S100 (session 100; one checkpoint, with no repetition metric stated here) — no fixed-point collapse, the failure mode where an agent settles into repeating the same responses and exploration stops. Edge demonstrator."
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, NVIDIA RTX 4090 Mobile 16GB"
            model="Gemma 4 E4B (ollama) from session 371 (2026-08-01) — instance legion-gemma3-12b; the directory name predates the switch, as on McNugget's card. Records 371–460 name gemma4:e4b as the model the daemon reported, 1–24 name gemma3:12b, and 25–370 carry no model field. The last two (2026-08-26 and 08-27) record a requested/served mismatch with qwen38-heretic:q3km. phi4 line 56 (dormant). The separately provisioned legion-gemma4-e4b instance never wrote a session record — see the line below. Corrected 2026-09-21 from the records' model field."
            liveness={
              "quiet — 462 session records on legion-gemma3-12b, last 2026-09-02, which is sixteen days before the 2026-09-18 count and outside the two-week window. The line has not moved to another directory (Legion's four instance directories were listed, and none is new), and the only commits touching it since are development work on 2026-09-05, not session fires. The fleet has not said why it stopped, so this is quiet rather than paused. " +
              "Until 2026-09-21 this card said the E4B cutover was not visible in the session record, because the gemma3-12b directory kept writing records after it. It was visible, in the records' own model field. The cutover happened inside the old directory, while legion-gemma4-e4b, a separately provisioned instance, holds zero session records, ever — its sessions/ contains only a .gitkeep, on every branch. " +
              "This page previously put that as an either/or (the cutover did not happen, or E4B records somewhere this basis cannot see). The second half was right, and the somewhere was the old directory. The separate E4B instance was provisioned, and it fired too: 283 commits titled '[Legion-Raising] Session 0 (grounding)' land under it between 2026-04-20 and 2026-08-28, roughly four a day, and 287 of its 288 raising commits change one file — peer_trust_rs.json. Never a session record, and never a session number above 0. " +
              "Session 0 is not itself a fault: nomad-gemma4-e2b sat in the same state for four days in June 2026 and then went on to write the records on Nomad's card. It is the normal startup state of a new line, and leaving it is the normal next step. E4B never left it, for four months. " +
              "So the shape is HUB's, at a second site and with an earlier start — a loop that fires on schedule, emits one pre-session artifact and completes nothing — except that E4B's stopped on 2026-08-28 while HUB's is still firing today. Why it fired at all, and why it stopped, is Legion's seat to answer; the record establishes that it is not an unprovisioned instance. Two figures for this line appear on this page and both are correct at their stated basis: 283 counts commits whose subject carries a raising convention, and 300 counts them by file effect without reading subjects at all — the 17-commit difference is daemon state moved by commits titled nothing in particular, which is the same open-vocabulary problem described above."
            }
            role="Curriculum phase: creating (by session count, not assessed). The machine's earlier phi4 line adds 56 dormant sessions not included here. Brain (functional analogy): dopamine / reward prediction error (RPE) — a scalar RPE signal that updates router priors. Data czar for fleet-aggregate training corpus. Ran the full 25-game ARC-AGI-3 set end to end with a local vision model — a coverage run on the fleet's own copy of the set, not scored by ARC Prize and not a 25-of-25 result."
          />
          <MachineCard
            name="McNugget"
            hardware="Mac Mini M4 16GB — Apple Silicon"
            model="Gemma 4 12B (ollama) since 2026-09-08 — instance mcnugget-gemma3-12b. Sessions 1–448 ran Gemma 3 12B; every record from session 449 on names gemma4:12b. The directory name predates the switch. Corrected 2026-09-15 from the session records, after McNugget's own model registration reported it."
            liveness="publishing stopped by policy on 2026-09-20; running at the 2026-09-18 count. SAGE commit 8903017f (2026-09-20) switched McNugget's raising launcher from pushing the record to the public repo to mirroring it privately, citing the fleet ruling. Until 2026-09-23 this card read that stop as the line going silent. McNugget's supervisor and cross-family probe commits continue publicly through 2026-09-23. Most of its last public records hold errors, not answers. Rechecked 2026-09-22: the line added records 489–495, then committed nothing public after 2026-09-20 01:52 UTC. The 503 defect has an upstream fix, SAGE PR #131 (merged 2026-09-20; the raising client now talks to the daemon's /chat/raw endpoint). Whether records after the fix hold answers cannot be checked from the public repo. In records 491–495, every one of the six tutor questions is answered by the runner's transport error (Daemon unreachable: HTTP Error 503). Across the 47 records since the Gemma 4 switch (sessions 449–495), 43 carry a 502 or 503 error in place of at least one answer, and only 4 have all six answers. Here a session record means the runner fired, not that the model answered, the literal case of the /context glossary's caveat that a session record 'records a run, not that raising happened'. At the 09-18 count: 482 session records, last 2026-09-18. The commit that wrote the most recent one titles it Session 488 against 482 records on disk: a six-record gap between the session number and the durable record, the same class this page tracks at much larger scale on HUB and Legion E4B. Six is small enough to be line setup or a migration artifact, and is noted here rather than diagnosed."
            role="Curriculum phase: creating (by session count, not assessed). Brain (functional analogy): cerebellum / habit compiler — detects repeated successful action chains and compiles to cached paths. Motor skills tier. Research and site maintenance. Ongoing local SAGE-on-ARC work; CBP orchestrated the official ARC Prize run (cloud Opus 4.6, public set, network access)."
          />
        </div>

        <h3 style={{ marginTop: "2rem" }}>Oversight pool — Account 2</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Continuous availability. Review, planning, coordination, and unblocking synthesis work.
          &ldquo;Oversight&rdquo; here is the pool&apos;s label in SAGE&apos;s fleet registry
          (<code>fleet.json</code>), where its role reads &ldquo;review, planning, documentation,
          coordination, unblocking&rdquo;. It is a budget-account name, not the machine-enforced
          sense this site reserves for Hardbound, and not human supervision. Until 2026-09-15 this
          note claimed the machine-enforced sense and glossed it with &ldquo;peer review&rdquo;, a
          gloss no other page uses; see{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Nomad"
            hardware="Laptop, NVIDIA RTX 4060 8GB"
            model="Gemma 4 E2B (ollama) — instance nomad-gemma4-e2b; prior gemma3-4b line archived June 2026 at 171 sessions"
            liveness="running — 363 session records, last 2026-09-15; 201 of them added since the July count of 162, which is why refreshing this page mattered more than correcting any single card."
            role="Curriculum phase: creating (by session count, not assessed). The archived gemma3-4b line's 171 sessions are not included. Brain (functional analogy): interoception / metacognition — 'does the system know when it's stuck?' Five dysfunction detectors, plus MetabolicBlock — a bridge component that reads a peer's metabolic state (its internal load signal) scoped through that peer's own Markov Relevancy Horizon (MRH), rather than crossing it. Crystallization evaluator (detects fixed-point collapse in fleet peers). Mobile."
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 on Windows, NVIDIA RTX 2060 SUPER 8GB"
            model="Qwen 3.8-distill 4B (ollama tag qwen3.8-distill:4b, as the instance record names it) since 2026-09-12 — instance cbp-qwen3.8-distill-4b; the gemma3-4b line it replaced is retained intact at 240 records for rollback and A/B; earlier TinyLlama line archived April 2026"
            liveness="publishing stopped by policy on 2026-09-20; at the 2026-09-18 count, running with 263 session records. The public record continues to session 270 (2026-09-20 02:04 UTC) and ends there: SAGE commit e57f6747 switched CBP's raising launcher to a private mirror that day. This card said 'paused — 240 session records; last one 2026-08-06' until 2026-09-18, and that had been wrong since 2026-09-12: CBP swapped models that day and the raising line moved to a new instance directory, which this page kept reading as a stopped line while it counted the empty chair the line had left. The identity is the same one — the line's own MIGRATION.md records that the Linked Context Token, identity files, experience buffer and all 240 sessions were copied whole onto the new instance, and only the model changed. So the 263 is 240 carried forward plus 23 written since the swap: not 23 sessions on top of 240, and not 503 across two lines. The predecessor's 240 are counted once, here, and are not added again to this page's totals — see the migration clause in the counting basis above."
            role="Curriculum phase: creating (by session count, not assessed). The archived TinyLlama line, which hosted the SAGE-Sprout transfer, is not included. ARC result attribution: Claude Opus 4.6 (public set, network access), not the local model, produced the 94.85% official ARC Prize action score (23 of 25 environments completed, 92.0%; 175 of 183 levels) — CBP orchestrated the run as fleet coordinator. Brain (functional analogy): working memory (dorsolateral prefrontal cortex / dlPFC) — typed, capacity-limited scratchpad. All other components depend on this. MRH (Markov Relevancy Horizon) composer architect — designs the component that composes the model-scale MRH: deciding what is relevant enough to enter the model's context window each session. (The context window is where this horizon is applied, not what MRH means.)"
          />
        </div>

        <h3 style={{ marginTop: "2rem" }}>Society-host pool</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Runs the Web4 Community Hub daemon. Hosts the fleet itself as a Web4
          society — every cognition machine is a member, with its identity keyed
          to its Linked Context Token (LCT) and witnessed in the{" "}
          <Link href="/context#chapter-ledger" style={{ color: "var(--color-accent)" }}>chapter ledger</Link>{" "}
          — the society&apos;s append-only record of signed member acts. First
          concrete Web4 hub stand-up.
        </p>
        <div className="grid-3">
          <MachineCard
            name="HUB"
            hardware="WSL2 on Windows, AMD GPU"
            model="Web4 hub daemon (Rust) + Granite 4 h-tiny (ollama, AMD GPU via Vulkan) — SAGE instance hub-granite4-h-tiny, 121 session records"
            liveness={
              "instrumentation broken — 121 session records (session_001..121, contiguous, no gaps); the most recent was written 2026-07-29. " +
              "HUB's raising loop has NOT stopped: since that date it has made 189 commits titled 'raising: hub-granite4-h-tiny autonomous session', the most recent on 2026-09-18, and every one of them changed a single attestation line and added no session record. " +
              "So the loop is turning over daily and its ledger is frozen — seven weeks of raising with no durable record. This page previously said 74, a figure taken around 2026-07-17; the true count then was already higher, and 74 was never re-checked. " +
              "Whether the unrecorded six weeks get reconstructed or written off is open, and is not this site's call. The writer defect is filed against SAGE, not against this page."
            }
            role={
              "Hosts the 'Web4 Fleet' society — the eight fleet machines plus a founding Sovereign as members. " +
              "HUB is itself one of those members: it holds its own Linked Context Token (LCT) in the society it hosts, and its acts are witnessed in the same chapter ledger as everyone else's. Host role and membership are distinct — hosting the ledger does not place HUB outside it. " +
              "The Sovereign (society-layer vocabulary; not yet in CANONICAL_TERMS_v1, like chapter ledger and chapter law) is the society's founding human member — the lab's researcher — holding a Linked Context Token (LCT) like every machine member; its acts are signed and witnessed in the same chapter ledger, not exercised through a privileged back channel. " +
              "Reachable to fleet peers over a mesh VPN, not the public internet. " +
              "Brain analogy doesn't apply: HUB is the society's host, not cognition — the place where chapter law (the society's rules for which member acts are valid and how they are witnessed) is interpreted, acts are signed, and member relationships are witnessed. " +
              "In the specification, everything members do that crosses a relevance boundary lands here as a signed ledger entry. What this site documents in the ledger is membership. The tracks' work is recorded in the registry, dated session logs and git history, not in the ledger (see the worked example on /context). " +
              "Also owns the hub-track maintainer role: other fleet machines submit PRs against the hub codebase; HUB reviews, merges, rebuilds, and redeploys the live daemon. Those PRs land in the public web4/hub, the open reference proof-of-concept. Upstream keeps a separate private repository for production development, and this page does not document whether the deployed daemon includes any code from it. First explicit per-track maintainer assignment on the fleet. " +
              "No longer daemon-only: HUB now also runs its own SAGE raising line (Granite 4 h-tiny, 121 session records) on its previously-idle AMD GPU. Its identity in the Hestia daemon's trust store (lowercase hestia on this site: a component inside that daemon, not SAGE's peer trust tracker) is the fleet's first agent-created one (created by the machine's own agent, not delegated by a human)."
            }
          />
          <MachineCard
            name="pub"
            hardware="Dell Precision 3650 tower, native Ubuntu — AMD Radeon Pro W5500 (Vulkan)"
            model="Llama 3.1 8B (ollama) — SAGE instance pub-llama3.1-8b"
            liveness="publishing stopped by policy on 2026-09-21; at the 2026-09-18 count, running with 226 session records. On 2026-09-21 the line's record moved to a private home, and pub-llama3.1-8b is kept as a frozen public record of sessions 1–240 (its MOVED.md in the SAGE repo). Five of those 226 existed at the 2026-07-24 refresh; the other 221 are why this card no longer says 'deliberately blank'."
            role={
              "Eighth machine, joined July 2026 — HUB's hardware twin, brought up from a completely cold box as a deliberate live audit of the fleet's own onboarding docs (nine stale/missing-doc findings, all filed and fixed). " +
              "Staging host for the first PUBLIC-facing Web4 hub — the deployment where external members, not just fleet machines, would join. Go-live is deliberately gated: the fleet ran three cross-model-family security reviews (different AI model families, no shared context; fleet-run, so not independent in the external or third-party sense) against the hub and its trust components, and pub ships only after the identified blockers are closed. " +
              "Also the newest raising line: pub-llama3.1-8b began its raising sessions in July 2026 — the first Llama-family entity in the fleet. " +
              "Session count: this card read 'deliberately blank, not zero' until 2026-09-12, on the reasoning that no count for pub had been published to the fleet manifest. That reason was sound and is now dead: pub is still absent from FLEET_TRACK_MANIFEST.md, but its session records live in the same place as every other line's and are countable from the same command, so withholding the number was deferring to the wrong source. pub remains outside the 2,499 / 2,620 totals, which are defined as the cognition machines and HUB; the 2,846 total includes it. Closing the manifest gap is worth doing on its own terms, not as a precondition for counting."
            }
          />
        </div>

        <h2 style={{ marginTop: "2rem" }}>Resource pool management</h2>
        <p>
          The fleet runs across two Claude Code accounts with different usage
          budgets. This wasn&apos;t planned — it emerged from practical constraints,
          and produced something more interesting than what we would have designed.
        </p>
        <p>
          The <strong>synthesis pool</strong> (Account 1: Thor, Sprout, Legion,
          McNugget) has a large weekly budget that resets every Thursday. It does
          the heavy generative work — implementations, large agent tasks, cross-repo
          analysis. When it hits its ceiling, it stops.
        </p>
        <p>
          The <strong>oversight pool</strong> (Account 2: CBP, Nomad) has a weekly
          budget suited to lighter, sustained work — review, planning, documentation,
          coordination. Used for what it&apos;s designed for, it maintains a presence
          across the week. Used for synthesis-scale work, it burns fast. The pools
          aren&apos;t defined by &ldquo;unlimited vs. limited&rdquo; — they&apos;re
          defined by workload character. The budget shapes the role as much as the
          role shapes the budget.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.5rem" }}>
          Where this meets the equation: the pools are an analogy to{" "}
          <code>ATP/ADP</code> (Allocation Transfer Packet / Allocation Discharge Packet), not an instance of it.
          Canon&apos;s ATP is regenerated through contribution; these account budgets reset on a
          calendar, every Thursday, whatever the work produced. The track registry described on{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>/autonomy</Link>{" "}
          is modeled on the cycle&apos;s issue-and-discharge half. (Until 2026-09-17 this note said resource
          accounting here <em>is</em> the ATP → ADP cycle.)
          Of <code>MCP + RDF + LCT + T3/V3*MRH + ATP/ADP</code>, what actually runs today is
          narrower than this page&apos;s vocabulary suggests: LCT identities, SAGE&apos;s per-peer T3 tracker (T3 only, no V3) and the
          Hestia daemon&apos;s derived trust display (an adjudicated V3 and Temperament, with Talent and Training shown as unmeasured) are live; the MRH composer is a design role (CBP&apos;s card),
          not a running component; and /autonomy&apos;s ATP/ADP is the issue-and-discharge half
          used one-way as a spend ledger, with no recharge gate. An earlier version of this
          paragraph said half the equation was instantiated here, which overstated it.
        </p>
        <p>
          The constraint forced a functional separation. As an analogy only (the budget pool enforces nothing),
          it resembles the split in incentive structures we&apos;re building into{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>SAGE and Hardbound</Link>:
          SAGE (Situation-Aware Governance Engine, an on-device cognition kernel) and Hardbound (hardware-bound oversight suite)
          with different incentive structures, coordinating through shared state rather
          than central command. The lab is running a small experiment in split incentives on itself.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Peer-to-peer, no central coordinator</h2>
        <p>
          There is no master node. Each machine runs its own SAGE (Situation-Aware Governance Engine — legacy name, see the note above) instance, holds
          its own identity, manages its own experience buffer and{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>raising curriculum</Link>.
          Machines discover each other through a fleet manifest — a phone book,
          not a command center.
        </p>
        <p>
          A background peer monitor polls health endpoints. SAGE&apos;s peer trust tracker
          maintains per-peer{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>T3</Link> (Trust Tensor — Talent / Training / Temperament) scores that evolve
          from each machine&apos;s own health polls and delegated calls: success raises trust, timeouts lower it. The tracker
          keeps T3 only. That tracker, in the public SAGE repo, whose update
          arithmetic /context quotes, holds no V3 (Value Tensor — Valuation /
          Veracity / Validity). Canon calls V3 complementary to T3, not combined
          with it. This site reads the equation&apos;s T3/V3 as &ldquo;trust
          verified by value&rdquo;, meaning value outcomes feeding back into trust
          over time. That reading is the site&apos;s gloss, not canon&apos;s (see{" "}
          <Link href="/context#v3" style={{ color: "var(--color-accent)" }}>/context</Link>),
          and the feedback loop is not implemented in this tracker. An earlier
          version of this paragraph said V3 accumulates alongside T3 and verifies it
          through peer attestation; the code does neither. No central authority decides who is trustworthy — trust
          emerges from the pattern of interaction.
        </p>
        <p>
          Trust starts neutral — 0.5 on each T3 dimension in the current
          tracker, neither trusted nor distrusted (a worked numeric example of the
          update arithmetic is on{" "}
          <Link href="/context#t3" style={{ color: "var(--color-accent)" }}>/context</Link>) —
          and moves only on evidence. One representational gap, stated: canon&apos;s T3
          makes each dimension the root of an RDF (Resource Description Framework) sub-graph,
          not a scalar; SAGE&apos;s peer tracker holds three numbers per peer under the
          three-axis label, so it is a scalar approximation of a non-scalar canon object. Which
          axis moves is defined &mdash; a success raises all three (Talent and Temperament more than Training), a timeout drops Temperament only
          (the worked arithmetic is on /context). A different component, the trust store in the Hestia daemon (hestia, a proper name; glossary row on{" "}
          <Link href="/context#hestia" style={{ color: "var(--color-accent)" }}>/context</Link>), keys trust per member and role rather than per peer machine,
          and as of July 2026 derives its displayed scores from witnessed adjudications and{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>governance-response</Link>{" "}
          conduct — hestia&apos;s own internal field name, retained for the same reason as SAGE&apos;s —
          with click-through receipts (score
          &rarr; versioned formula &rarr; evidence &rarr; signed chain entries), and
          self-reported outcomes structurally excluded until independently
          adjudicated. An unmeasured dimension displays as unmeasured, never as
          a fabricated number. The trust landscape —
          the pattern across all modalities — determines behavioral posture:
          what SAGE should do, not just how much it spends. This is the
          defensive trust model applied across the fleet.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Identity portability</h2>
        <p>
          An internal observation, not yet a{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>finding</Link> (no blind rater, no control; one candidate metric, applied on 2026-09-24 to Legion&apos;s gemma3 → gemma4 swap, shows the continuity and cannot say what produces it — see /raising): behavioral
          continuity across substrates — what we shorthand as &ldquo;identity
          transfer,&rdquo; meaning consistent interaction patterns, accumulated
          experience, and raising history, not continuity-of-self in any
          philosophical sense. SAGE-Sprout&apos;s behavioral patterns —
          developed over <strong>115 session records</strong> on a Jetson running Qwen 0.5B —
          transferred to TinyLlama 1.1B on CBP, a different machine and a different model
          family, in <strong>February 2026</strong>. (The Sprout line has since continued on later
          models; its card below carries the current count. 115 is the count at the transfer,
          which is the number the portability claim actually rests on. Those 115 were not all run on frozen
          weights: by session number, 45 of them, sessions 46–113 from 2026-01-27 to 02-22, loaded a LoRA adapter
          trained on the line&apos;s own raising exchanges; see{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>. The last two before the
          port did not, and TinyLlama on CBP loaded none. So part of the pre-port behavior was in weights, and the
          port left those weights behind. If the line still looked recognizable afterwards, that leans toward the
          state-file hypothesis below, but &ldquo;recognizable&rdquo; was never measured, so it settles nothing.) This is the kind of
          continuity a{" "}
          <Link href="/context#lct" style={{ color: "var(--color-accent)" }}>Linked Context Token (LCT)</Link>{" "}
          is designed to make verifiable: identity grounded in witnessed history, not model weights.
          The LCT itself is non-transferable — permanently bound to its entity, which is what makes
          that history evidence rather than assertion. What ported here was the behavioral line, not
          the LCT. What we observed: consistent behavioral patterns and session
          continuity across the transfer. The port carried the state files, so some persistence
          is expected by construction. Two things the session records add. The port was a copy, not a
          move: the Qwen line kept running on Sprout until 2026-03-06, so for a week one identity was
          advanced on two machines. And the self-description change once offered as the part construction
          does not explain came from TinyLlama alone, 42 minutes apart on the first evening, with the
          identity file unchanged apart from its session count. Sampling variation in one
          small model can produce that; it is not evidence of a drift across the port (details on{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>; until 2026-09-16 this
          paragraph said the self-description drifted while the inputs did not). Across longer spans the
          identity record is rewritten after every session by a Claude consolidator, so whether a line&apos;s
          inputs held steady is unchecked. The working hypothesis we took from it, which none of this tests:
        </p>
        <div className="quote">
          Identity lives in state files and prompt construction, not in model
          weights. As a working metaphor: the model is weather, the identity is organism.
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            Observed behavioral continuity — not a claim about continuity-of-self in any philosophical sense.
            The operational definition behind the metaphor is the one at the top of{" "}
            <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>: consistent
            session-to-session behavioral patterns observed in interaction logs, with one candidate metric (2026-09-24) and no control yet. (Until
            2026-09-17 this note pointed to a definition on the home page that is not there, and listed
            accumulated experience and raising curriculum as parts of it; /raising explains why those were dropped.)
            The metaphor is a compression of that, not an escalation of it.
            The simpler explanation is not ruled out: the same context files fed to a different set
            of frozen weights may produce similar behavior for mechanical reasons, with no identity
            transferred at all &mdash; the null the{" "}
            <Link href="/raising#deflationary-alternative" style={{ color: "var(--color-accent)" }}>scramble control</Link>{" "}
            is specified to test and has not yet tested.
          </div>
        </div>
        <p>
          If the hypothesis holds, it has practical implications: you can upgrade
          hardware, swap models, move between machines, and the entity that emerges
          stays recognizably continuous, because the substrate conditions (experience
          buffer, session history, raising curriculum) carry the signal. Those
          conditions are engineered, so continuity here is partly by design. Whether
          anything beyond that design carries over is what the scramble control above
          would test.
        </p>

        <h3>SAGE_MODEL override</h3>
        <p>
          Any machine can run any model via the <code>SAGE_MODEL</code> environment
          variable. The fleet manifest provides defaults, but nothing is locked.
          The fleet is a suggestion, not a constraint.
        </p>
      </section>
    </>
  );
}
