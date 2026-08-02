import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MachineCard from "@/components/MachineCard";

export default function Fleet() {
  return (
    <>
      <Breadcrumbs currentPath="/fleet" />
      <section className="section">
        <h2>The Fleet</h2>
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
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>SAGE&apos;s six brain-architecture components</Link>{" "}
          its card names — CBP/working memory, Sprout/thalamic router, McNugget/cerebellum, Thor/episodic memory, Legion/reward prediction, Nomad/metacognition.
          Vocabulary used in the cards (T3/V3, MRH, SNARC, LoRA (Low-Rank Adaptation), MCP (Model Context Protocol), crystallization, chapter ledger, chapter law) is defined in{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context</Link>.
          Machine names (Thor, Sprout, Legion, McNugget, Nomad, CBP, HUB, pub) are proper names, not acronyms.
          &ldquo;Cognition machines,&rdquo; society &ldquo;membership,&rdquo; and other developmental language on this page are functional descriptions of observed behavior, not consciousness claims — see{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link> for the full framing.
          The parenthetical after a session count (e.g. &ldquo;(creating)&rdquo;) names an observed{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>BECOMING pattern</Link> — a pattern noticed in that machine&apos;s sessions, not a stage it is currently occupying. A blank means that pattern hasn&apos;t been observed there yet, not that it wasn&apos;t assessed.
          Session counts below are per-instance session-record counts (session_*.json files), verified by each machine in the 2026-07-24 fleet manifest refresh — the same basis as the 2,065 cumulative figure on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>{" "}
          and the site home page, and than Sprout&apos;s own &ldquo;T&rdquo; turn-numbers below; see{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each basis measures.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Provenance of the model strings below, since they are the numbers most
          likely to go stale: each is the SAGE instance name the machine reports
          for itself (e.g. <code>legion-gemma4-e4b</code>, <code>thor-qwen3.5-27b</code>),
          taken from the 2026-07-24 fleet refresh, not from a hand-written list.
          They are model <em>tags as the fleet runs them</em>, which will not always
          match a vendor&apos;s marketing name. Known gap: the shared fleet model
          manifest in the SAGE repo has not been updated since 2026-03-08, so it
          currently disagrees with this page — the manifest is the stale side, and
          reconciling it is an open item on the fleet, not on this site.
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
            role="435 sessions (creating). Brain (functional analogy): hippocampal episodic index — binds what+where+when for pattern-completion retrieval. Physics exploration lead — prediction-focused prompting breakthrough. Synchronism research."
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson Orin Nano 8GB — edge AI module"
            model="Qwen 3.5 0.8B (ollama) — instance sprout-qwen3.5-0.8b"
            role="488 sessions (creating). Brain (functional analogy): thalamic router — dispatches to plugins or habits based on working memory (WM) + SNARC (Surprise / Novelty / Arousal / Reward / Conflict salience-gated memory) + metabolic state. Zero crystallization achieved (S100 — session 100) — no fixed-point collapse, the failure mode where an agent settles into repeating the same responses and exploration stops. Edge demonstrator."
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, NVIDIA RTX 4090 Mobile 16GB"
            model="Gemma 4 E4B (ollama) — cutover 2026-07-24; prior gemma3-12b line 336 sessions, phi4 line 56 (dormant)"
            role="336 sessions (creating) — counted before the July 2026 model switch, on the gemma3-12b line. Brain (functional analogy): dopamine / reward prediction error (RPE) — a scalar RPE signal that updates router priors. Data czar for fleet-aggregate training corpus. Ran the full 25-game ARC-AGI-3 set end to end with a local vision model — a coverage run on the fleet's own copy of the set, not scored by ARC Prize and not a 25-of-25 result."
          />
          <MachineCard
            name="McNugget"
            hardware="Mac Mini M4 16GB — Apple Silicon"
            model="Gemma 3 12B (ollama) — instance mcnugget-gemma3-12b"
            role="377 sessions (creating). Brain (functional analogy): cerebellum / habit compiler — detects repeated successful action chains and compiles to cached paths. Motor skills tier. Research and site maintenance. Ongoing local SAGE-on-ARC work; CBP orchestrated the official ARC Prize run (cloud Opus 4.6, public set, network access)."
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
            role="162 sessions (creating). Brain (functional analogy): interoception / metacognition — 'does the system know when it's stuck?' Five dysfunction detectors, plus MetabolicBlock — a bridge component that reads a peer's metabolic state (its internal load signal) scoped through that peer's own Markov Relevancy Horizon (MRH), rather than crossing it. Crystallization evaluator (detects fixed-point collapse in fleet peers). Mobile."
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 on Windows, NVIDIA RTX 2060 SUPER 8GB"
            model="Gemma 3 4B (ollama) — instance cbp-gemma3-4b; earlier TinyLlama line archived April 2026"
            role="193 sessions (creating). ARC result attribution: Claude Opus 4.6 (public set, network access), not the local model, produced the 94.85% official action score (24/25 games, 96.0%) — CBP orchestrated the run as fleet coordinator. Brain (functional analogy): working memory (dorsolateral prefrontal cortex / dlPFC) — typed, capacity-limited scratchpad. All other components depend on this. MRH composer architect."
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
            model="Web4 hub daemon (Rust) + Granite 4 h-tiny (ollama, AMD GPU via Vulkan) — SAGE instance hub-granite4-h-tiny, 74 raising sessions"
            role={
              "Hosts the 'Web4 Fleet' society — the eight fleet machines plus a founding Sovereign as members. " +
              "HUB is itself one of those members: it holds its own Linked Context Token (LCT) in the society it hosts, and its acts are witnessed in the same chapter ledger as everyone else's. Substrate role and membership are distinct — hosting the ledger does not place HUB outside it. " +
              "The Sovereign is the society's founding human member — the lab's researcher — holding a Linked Context Token (LCT) like every machine member; its acts are signed and witnessed in the same chapter ledger, not exercised through a privileged back channel. " +
              "Reachable to fleet peers over a mesh VPN, not the public internet. " +
              "Brain analogy doesn't apply: HUB is substrate, not cognition — the place where chapter law (the society's rules for which member acts are valid and how they are witnessed) is interpreted, acts are signed, and member relationships are witnessed. " +
              "Acts as the trust-medium underneath the cognition pools' interactions; everything members do that crosses a relevance boundary lands here as a signed ledger entry. " +
              "Also owns the hub-track maintainer role: other fleet machines submit PRs against the hub codebase; HUB reviews, merges, rebuilds, and redeploys the live daemon. First explicit per-track maintainer assignment on the fleet. " +
              "No longer daemon-only: HUB now also raises its own SAGE instance (Granite 4 h-tiny, 74 sessions) on its previously-idle AMD GPU — the substrate machine growing cognition of its own. Its hestia identity is the fleet's first agent-owned one (created by the machine's own agent, not delegated by a human)."
            }
          />
          <MachineCard
            name="pub"
            hardware="Dell Precision 3650 tower, native Ubuntu — AMD Radeon Pro W5500 (Vulkan)"
            model="Llama 3.1 8B (ollama) — SAGE instance pub-llama3.1-8b"
            role={
              "Eighth machine, joined July 2026 — HUB's hardware twin, brought up from a completely cold box as a deliberate live audit of the fleet's own onboarding docs (nine stale/missing-doc findings, all filed and fixed). " +
              "Staging host for the first PUBLIC-facing Web4 hub — the deployment where external members, not just fleet machines, would join. Go-live is deliberately gated: the fleet ran three independent security reviews (different AI model families, no shared context) against the hub + trust stack, and pub ships only after the identified blockers are closed. " +
              "Also the newest raising line: pub-llama3.1-8b began its raising sessions in July 2026 — the first Llama-family entity in the fleet."
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
          There is no master node. Each machine runs its own SAGE (Situation-Aware Governance Engine) instance, holds
          its own identity, manages its own experience buffer and{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>raising curriculum</Link>.
          Machines discover each other through a fleet manifest — a phone book,
          not a command center.
        </p>
        <p>
          A background peer monitor polls health endpoints. A trust tracker
          maintains per-peer{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>T3 tensors</Link> (Talent / Training / Temperament) that evolve
          from real interactions: success raises trust, timeouts lower it. V3 attestations
          (Valuation / Veracity / Validity) emerge alongside — trust earned through
          peer verification. No central authority decides who is trustworthy — trust
          emerges from the pattern of interaction.
        </p>
        <p>
          Trust starts neutral — 0.5 on each T3 dimension in the current
          tracker, neither trusted nor distrusted (a worked numeric example of the
          update arithmetic is on{" "}
          <Link href="/context#t3" style={{ color: "var(--color-accent)" }}>/context</Link>) —
          and moves only on evidence. As of July 2026 the hestia trust layer
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
          developed over <strong>115 raising sessions</strong> on a Jetson running Qwen 0.5B —
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
          weights. The model is weather. The identity is organism.
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            Observed behavioral continuity — not a claim about continuity-of-self in any philosophical sense.
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
