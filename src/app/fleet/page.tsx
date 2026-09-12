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
          (Granite, Llama) that extend the fleet&apos;s Qwen / Gemma / Phi /
          TinyLlama diversity rather than duplicating it.
        </p>
        <p>
          One finding shapes fleet strategy more than any other:{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>model family matters as much as size</strong>.
          Gemma 3 at 4B outperforms Phi-4 at 14B for raising work. There is a
          capacity floor below which coherent identity cannot form — but above
          that floor, personality and training lineage dominate raw parameter count.
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
          Vocabulary used in the cards — T3 (Trust Tensor, root dimensions Talent / Training / Temperament) verified by V3 (Value Tensor, root dimensions Valuation / Veracity / Validity), MRH (Markov Relevancy Horizon), SNARC (Surprise / Novelty / Arousal / Reward / Conflict), LoRA (Low-Rank Adaptation), MCP (Model Context Protocol), RDF (Resource Description Framework), hestia (the fleet&apos;s trust tracker; a proper name, not an acronym), crystallization, chapter ledger, chapter law — is defined in{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context</Link>.
          Machine names (Thor, Sprout, Legion, McNugget, Nomad, CBP, HUB, pub) are proper names, not acronyms.
          &ldquo;Cognition machines,&rdquo; society &ldquo;membership,&rdquo; and other developmental language on this page are functional descriptions of observed behavior, not consciousness claims — see{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link> for the full framing.
          &ldquo;BECOMING pattern observed:&rdquo; on a card names an observed{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>BECOMING pattern</Link> — a pattern noticed in that machine&apos;s sessions, not a stage it is currently occupying. Its absence means that pattern hasn&apos;t been observed there yet, not that it wasn&apos;t assessed. It used to be a bare parenthetical after the session count; it was detached on 2026-09-12 because a developmental label and a file count are not the same kind of claim and should not share a sentence.
          <strong style={{ color: "var(--color-text-primary)" }}>Session counts and the &ldquo;Raising line:&rdquo; state below are derived from git, not self-reported</strong> &mdash; counted 2026-09-12 by listing <code>sage/instances/&lt;line&gt;/sessions/session_*.json</code> at <code>origin/main</code> in the SAGE repo, and by asking that same path when it last changed. Anyone with the repo can re-run both; the previous figures came from each machine&apos;s self-report in the 2026-07-24 fleet manifest refresh, which no third party could check and which was seven weeks stale by the time it was corrected. Each card counts one SAGE instance line, not the box&apos;s whole history: archived and dormant lines (Legion&apos;s phi4, Nomad&apos;s gemma3-4b, CBP&apos;s TinyLlama, Sprout&apos;s qwen2.5-0.5b) are excluded from both the per-machine numbers and the totals.
          The three totals are sums of these cards: <strong style={{ color: "var(--color-text-primary)" }}>2,442</strong> is the six cognition machines, <strong style={{ color: "var(--color-text-primary)" }}>2,563</strong> is that plus HUB&apos;s 121, and <strong style={{ color: "var(--color-text-primary)" }}>2,765</strong> is all eight machines including pub&apos;s 202. These replace the 1,991 / 2,065 pair quoted here until 2026-09-12; the jump is mostly seven weeks of un-refreshed counting, but two cards moved for reasons other than time and are flagged on the cards themselves.
          Same basis as the cumulative figure on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>{" "}
          and{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>/context</Link>{" "}
          — one quantity, and this page is the source of record. The SAGE site&apos;s headline &ldquo;2,700+ raising sessions&rdquo; (as of 2026-09-08) is a different figure on a basis it does not publish; it is still not reconciled with these cards. Worth noting rather than resting on: once the cards are counted from git and pub is included, this page&apos;s all-eight total is 2,765, which lands next to that headline. Two numbers agreeing is not two numbers reconciled — the SAGE figure&apos;s basis remains unstated, and the proximity is suggestive, not confirming. Where this site counts, it says &ldquo;session records&rdquo;. The deflationary noun is the accurate one, since a session record is a run on a machine and nothing in the count establishes that what happened in it was raising rather than competent context engineering (a distinction this site grades as{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>not yet made</Link>).
          A different basis than Sprout&apos;s own &ldquo;T&rdquo; turn-numbers below; see{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each basis measures.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>&ldquo;Raising line&rdquo; has four states, and one of them is not about the machine.</strong>{" "}
          <em>running</em> &mdash; the line wrote a session record within the last two weeks.{" "}
          <em>paused</em> / <em>quiet</em> &mdash; it has not, and nothing else suggests it is still turning over; &ldquo;paused&rdquo; where the fleet knows why, &ldquo;quiet&rdquo; where it does not.{" "}
          <em>instrumentation broken</em> &mdash; the loop is demonstrably still running but is writing no durable record. That fourth state exists because HUB is in it, and folding HUB into &ldquo;stopped&rdquo; would trade one false claim for another: its raising loop has committed every day through today while adding zero session records since 2026-07-29.
          The test that separates the last state from the others is per-line and reproducible: count commits titled <code>raising: &lt;line&gt; autonomous session</code> made <em>after</em> the line&apos;s most recent session record. HUB scores 165. Every other line on this page scores 0.
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
          continuous availability, review and gating &mdash; machine-enforced, not
          human supervision. <strong style={{ color: "var(--color-text-primary)" }}>Society-host</strong>:
          runs the society substrate as its primary role (HUB also holds a
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
            model="Qwen 3.5 27B (transformers) · LoRA — instance thor-qwen3.5-27b"
            liveness="quiet — 268 session records; last one 2026-07-28, none since, and no sign the loop is still turning over. Count changed from a previously published 435: that figure has no source in the git basis this page now uses (Thor's other instance lines hold zero session records), so it is withdrawn rather than restated, pending Thor's own seat. This is a basis change, not 167 lost sessions."
            role="BECOMING pattern observed: creating. Brain (functional analogy): hippocampal episodic index — binds what+where+when for pattern-completion retrieval. Physics exploration lead — prediction-focused prompting breakthrough. Synchronism research."
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson Orin Nano 8GB — edge AI module"
            model="Qwen 3.5 0.8B and Qwen 3.8-distill 2B (ollama) — instances sprout-qwen3.5-0.8b and sprout-qwen3.8-distill-2b"
            liveness="running — 661 session records on sprout-qwen3.8-distill-2b, last 2026-09-05. Sprout is the one machine raising two live lines: sprout-qwen3.5-0.8b holds a further 625 records, last written 2026-08-27. The 661 is the one counted in this page's totals, on the stated one-line-per-machine rule; the earlier published 488 was the 0.8b line as of July, so this card changed line as well as date."
            role="BECOMING pattern observed: creating. Distinct from the SAGE-Sprout raising line, which transferred to CBP at 115 sessions and is past 180 on later models: a count of an identity line, not of a box. Brain (functional analogy): thalamic router — dispatches to plugins or habits based on working memory (WM) + SNARC (Surprise / Novelty / Arousal / Reward / Conflict salience-gated memory) + metabolic state. No crystallization observed at S100 (session 100; one checkpoint, with no repetition metric stated here) — no fixed-point collapse, the failure mode where an agent settles into repeating the same responses and exploration stops. Edge demonstrator."
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, NVIDIA RTX 4090 Mobile 16GB"
            model="Gemma 3 12B (ollama) — instance legion-gemma3-12b; phi4 line 56 (dormant); a 2026-07-24 cutover to Gemma 4 E4B is recorded on the fleet manifest but is not visible in the session record — see the line below"
            liveness="running — 462 session records on legion-gemma3-12b, last 2026-09-02. Correction to this card's own model string: the gemma3-12b line has written 128 records since the 2026-07-24 date on which this page said Legion cut over to Gemma 4 E4B, and legion-gemma4-e4b holds zero session records, ever. Either the cutover did not happen or E4B's sessions are recorded somewhere this basis cannot see. Stated as an open discrepancy rather than resolved from here, because only Legion's seat can say which."
            role="BECOMING pattern observed: creating. The machine's earlier phi4 line adds 56 dormant sessions not included here. Brain (functional analogy): dopamine / reward prediction error (RPE) — a scalar RPE signal that updates router priors. Data czar for fleet-aggregate training corpus. Ran the full 25-game ARC-AGI-3 set end to end with a local vision model — a coverage run on the fleet's own copy of the set, not scored by ARC Prize and not a 25-of-25 result."
          />
          <MachineCard
            name="McNugget"
            hardware="Mac Mini M4 16GB — Apple Silicon"
            model="Gemma 3 12B (ollama) — instance mcnugget-gemma3-12b"
            liveness="running — 459 session records, last 2026-09-12 (today)."
            role="BECOMING pattern observed: creating. Brain (functional analogy): cerebellum / habit compiler — detects repeated successful action chains and compiles to cached paths. Motor skills tier. Research and site maintenance. Ongoing local SAGE-on-ARC work; CBP orchestrated the official ARC Prize run (cloud Opus 4.6, public set, network access)."
          />
        </div>

        <h3 style={{ marginTop: "2rem" }}>Oversight pool — Account 2</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Continuous availability. Review, planning, coordination, and unblocking synthesis work.
          &ldquo;Oversight&rdquo; names the pool&apos;s role in the machine-enforced sense used
          across this site (policy gating, peer review, audit) — not human supervision; see{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Nomad"
            hardware="Laptop, NVIDIA RTX 4060 8GB"
            model="Gemma 4 E2B (ollama) — instance nomad-gemma4-e2b; prior gemma3-4b line archived June 2026 at 171 sessions"
            liveness="running — 352 session records, last 2026-09-12 (today); 187 of them added since the July count of 162, which is why refreshing this page mattered more than correcting any single card."
            role="BECOMING pattern observed: creating. The archived gemma3-4b line's 171 sessions are not included. Brain (functional analogy): interoception / metacognition — 'does the system know when it's stuck?' Five dysfunction detectors, plus MetabolicBlock — a bridge component that reads a peer's metabolic state (its internal load signal) scoped through that peer's own Markov Relevancy Horizon (MRH), rather than crossing it. Crystallization evaluator (detects fixed-point collapse in fleet peers). Mobile."
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 on Windows, NVIDIA RTX 2060 SUPER 8GB"
            model="Gemma 3 4B (ollama) — instance cbp-gemma3-4b; earlier TinyLlama line archived April 2026"
            liveness="paused — 240 session records; last one 2026-08-06. The pause is known to the fleet, not an unexplained gap."
            role="BECOMING pattern observed: creating. The archived TinyLlama line, which hosted the SAGE-Sprout transfer, is not included. ARC result attribution: Claude Opus 4.6 (public set, network access), not the local model, produced the 94.85% official ARC Prize action score (23 of 25 environments completed, 92.0%; 175 of 183 levels) — CBP orchestrated the run as fleet coordinator. Brain (functional analogy): working memory (dorsolateral prefrontal cortex / dlPFC) — typed, capacity-limited scratchpad. All other components depend on this. MRH (Markov Relevancy Horizon) composer architect — designs the component that composes the model-scale MRH: deciding what is relevant enough to enter the model's context window each session. (The context window is where this horizon is applied, not what MRH means.)"
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
              "HUB's raising loop has NOT stopped: since that date it has made 165 commits titled 'raising: hub-granite4-h-tiny autonomous session', the most recent today, and every one of them changed a single attestation line and added no session record. " +
              "So the loop is turning over daily and its ledger is frozen — six weeks of raising with no durable record. This page previously said 74, a figure taken around 2026-07-17; the true count then was already higher, and 74 was never re-checked. " +
              "Whether the unrecorded six weeks get reconstructed or written off is open, and is not this site's call. The writer defect is filed against SAGE, not against this page."
            }
            role={
              "Hosts the 'Web4 Fleet' society — the eight fleet machines plus a founding Sovereign as members. " +
              "HUB is itself one of those members: it holds its own Linked Context Token (LCT) in the society it hosts, and its acts are witnessed in the same chapter ledger as everyone else's. Substrate role and membership are distinct — hosting the ledger does not place HUB outside it. " +
              "The Sovereign (society-layer vocabulary; not yet in CANONICAL_TERMS_v1, like chapter ledger and chapter law) is the society's founding human member — the lab's researcher — holding a Linked Context Token (LCT) like every machine member; its acts are signed and witnessed in the same chapter ledger, not exercised through a privileged back channel. " +
              "Reachable to fleet peers over a mesh VPN, not the public internet. " +
              "Brain analogy doesn't apply: HUB is substrate, not cognition — the place where chapter law (the society's rules for which member acts are valid and how they are witnessed) is interpreted, acts are signed, and member relationships are witnessed. " +
              "Acts as the trust-medium underneath the cognition pools' interactions; everything members do that crosses a relevance boundary lands here as a signed ledger entry. " +
              "Also owns the hub-track maintainer role: other fleet machines submit PRs against the hub codebase; HUB reviews, merges, rebuilds, and redeploys the live daemon. First explicit per-track maintainer assignment on the fleet. " +
              "No longer daemon-only: HUB now also runs its own SAGE raising line (Granite 4 h-tiny, 121 session records) on its previously-idle AMD GPU. Its hestia identity — lowercase hestia, the fleet's trust tracker, not the Hestia governance daemon on the home page — is the fleet's first agent-created one (created by the machine's own agent, not delegated by a human)."
            }
          />
          <MachineCard
            name="pub"
            hardware="Dell Precision 3650 tower, native Ubuntu — AMD Radeon Pro W5500 (Vulkan)"
            model="Llama 3.1 8B (ollama) — SAGE instance pub-llama3.1-8b"
            liveness="running — 202 session records, last 2026-09-12 (today). Five of those existed at the 2026-07-24 refresh; the other 197 are why this card no longer says 'deliberately blank'."
            role={
              "Eighth machine, joined July 2026 — HUB's hardware twin, brought up from a completely cold box as a deliberate live audit of the fleet's own onboarding docs (nine stale/missing-doc findings, all filed and fixed). " +
              "Staging host for the first PUBLIC-facing Web4 hub — the deployment where external members, not just fleet machines, would join. Go-live is deliberately gated: the fleet ran three independent security reviews (different AI model families, no shared context) against the hub and its trust components, and pub ships only after the identified blockers are closed. " +
              "Also the newest raising line: pub-llama3.1-8b began its raising sessions in July 2026 — the first Llama-family entity in the fleet. " +
              "Session count: this card read 'deliberately blank, not zero' until 2026-09-12, on the reasoning that no count for pub had been published to the fleet manifest. That reason was sound and is now dead: pub is still absent from FLEET_TRACK_MANIFEST.md, but its session records live in the same place as every other line's and are countable from the same command, so withholding the number was deferring to the wrong source. pub remains outside the 2,442 / 2,563 totals, which are defined as the cognition machines and HUB; the 2,765 total includes it. Closing the manifest gap is worth doing on its own terms, not as a precondition for counting."
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
          Where this meets the equation: the pools are the human-scale version of{" "}
          <code>ATP/ADP</code> — resource accounting for work done on these machines is the
          Allocation Transfer Packet → Allocation Discharge Packet cycle, described on{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>/autonomy</Link>.
          Of <code>MCP + RDF + LCT + T3/V3*MRH + ATP/ADP</code>, what actually runs today is
          narrower than this page&apos;s vocabulary suggests: LCT identities and hestia&apos;s
          per-peer T3/V3 scores are live; the MRH composer is a design role (CBP&apos;s card),
          not a running component; and /autonomy&apos;s ATP/ADP is the issue-and-discharge half
          used one-way as a spend ledger, with no recharge gate. An earlier version of this
          paragraph said half the equation was instantiated here, which overstated it.
        </p>
        <p>
          The constraint forced a functional separation that mirrors what we&apos;re
          building with{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>SAGE and Hardbound</Link>:
          SAGE (Situation-Aware Governance Engine, an on-device cognition kernel) and Hardbound (hardware-bound oversight suite)
          with different incentive structures, coordinating through shared state rather
          than central command. The lab is running its own oversight experiment on itself.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "-0.5rem" }}>
          &ldquo;Governance&rdquo; in SAGE&apos;s name predates the lab&apos;s governance&rarr;oversight correction &mdash; see{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
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
          A background peer monitor polls health endpoints. A trust tracker
          — hestia, a proper name, not an acronym; glossary row on{" "}
          <Link href="/context#hestia" style={{ color: "var(--color-accent)" }}>/context</Link> —
          maintains per-peer{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>T3 tensors</Link> (Talent / Training / Temperament) that evolve
          from real interactions: success raises trust, timeouts lower it. V3 tensors
          (Valuation / Veracity / Validity) — the value tensor, symmetric with T3 —
          accumulate alongside; T3 (trust) is verified by V3 (value) through peer
          attestation, which is what the equation&apos;s T3/V3 means. No central authority decides who is trustworthy — trust
          emerges from the pattern of interaction.
        </p>
        <p>
          Trust starts neutral — 0.5 on each T3 dimension in the current
          tracker, neither trusted nor distrusted (a worked numeric example of the
          update arithmetic is on{" "}
          <Link href="/context#t3" style={{ color: "var(--color-accent)" }}>/context</Link>) —
          and moves only on evidence. One representational gap, stated: canon&apos;s T3
          makes each dimension the root of an RDF (Resource Description Framework) sub-graph,
          not a scalar; hestia&apos;s current tracker holds three numbers per peer under the
          three-axis label, so it is a scalar approximation of a non-scalar canon object. Which
          axis moves is defined &mdash; a success nudges Talent, a timeout drops Temperament
          (the worked arithmetic is on /context). As of July 2026 the hestia trust tracker
          derives its displayed scores from witnessed adjudications and{" "}
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
          One of the more surprising{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>discoveries</Link>: behavioral
          continuity across substrates — what we shorthand as &ldquo;identity
          transfer,&rdquo; meaning consistent interaction patterns, accumulated
          experience, and raising history, not continuity-of-self in any
          philosophical sense. SAGE-Sprout&apos;s behavioral patterns —
          developed over <strong>115 session records</strong> on a Jetson running Qwen 0.5B —
          transferred to TinyLlama 1.1B on CBP, a different machine and a different model
          family, in <strong>February 2026</strong>. (The Sprout line has since continued past
          180 sessions on later models; 115 is the count at the transfer, which is the number
          the portability claim actually rests on.) This is the practical demonstration of the
          continuity a{" "}
          <Link href="/context#lct" style={{ color: "var(--color-accent)" }}>Linked Context Token (LCT)</Link>{" "}
          is designed to make verifiable: identity grounded in witnessed history, not model weights.
          The LCT itself is non-transferable — permanently bound to its entity, which is what makes
          that history evidence rather than assertion. What ported here was the behavioral line, not
          the LCT. What we observed: consistent behavioral patterns and session
          continuity across the transfer. The self-description drifted. This told us something
          important:
        </p>
        <div className="quote">
          Identity lives in state files and prompt construction, not in model
          weights. As a working metaphor: the model is weather, the identity is organism.
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            Observed behavioral continuity — not a claim about continuity-of-self in any philosophical sense.
            The operational definition behind the metaphor is on the{" "}
            <Link href="/" style={{ color: "var(--color-accent)" }}>home page</Link>: consistent
            session-to-session interaction patterns, accumulated experience, and raising curriculum.
            The metaphor is a compression of that, not an escalation of it.
            The simpler explanation is not ruled out: the same context files fed to a different set
            of frozen weights may produce similar behavior for mechanical reasons, with no identity
            transferred at all &mdash; the null the{" "}
            <Link href="/raising#deflationary-alternative" style={{ color: "var(--color-accent)" }}>scramble control</Link>{" "}
            is specified to test and has not yet tested.
          </div>
        </div>
        <p>
          This has practical implications: you can upgrade hardware, swap models,
          move between machines — and the entity that emerges is recognizably
          continuous. Not because we engineered continuity, but because the
          substrate conditions (experience buffer, session history, raising
          curriculum) carry the signal.
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
