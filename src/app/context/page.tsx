import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Context() {
  return (
    <>
      <Breadcrumbs currentPath="/context" />
      <section className="section">
        <h2>How Knowledge Flows</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.5rem", marginBottom: "1rem" }}>
          Also serves as the canonical glossary for Web4 vocabulary. New here? Start here.
        </p>
        <p>
          Fourteen repos (eleven public), six machines, multiple AI agents with overlapping but
          distinct contexts. The challenge isn&apos;t storing knowledge — it&apos;s
          making it findable, consistent, and useful across the entire system.
        </p>

        <h3>The CLAUDE.md pattern</h3>
        <p>
          Every repo carries a <code>CLAUDE.md</code> file at its root. This
          is the agent&apos;s instruction set — not just documentation, but
          operational directives that shape how an AI agent behaves when
          working in that repo. Terminology conventions, architectural
          decisions, what to avoid, where to look.
        </p>
        <p>
          When the Web4 equation was restored across all repos (28+ files),
          it was the CLAUDE.md pattern that ensured every agent working in
          every{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>repo</Link> used the same canonical form. Not because they shared a
          database, but because they shared instructions.
        </p>

        <h3>SAGE: Situation-Aware Guidance Engine</h3>
        <p>
          SAGE (Situation-Aware Guidance Engine) is the on-device AI cognition
          kernel — a continuous 12-step loop that senses context, deliberates, and acts.
          Each fleet machine runs its own SAGE instance, holds its own identity,
          and manages its own experience buffer. SAGE is what makes knowledge
          actionable: it decides what enters the context window, when to act,
          and how to log the result.
        </p>

        <h3>Hardbound: hardware-bound oversight</h3>
        <p>
          Hardbound is the hardware-bound oversight suite — the trust layer that
          touches silicon. Hardware binding via TPM 2.0, FIDO2, and Secure Enclave
          anchors policy enforcement to physical devices. Every autonomous track
          operates within the Hardbound oversight envelope: what it can access,
          what it can commit, what it can deploy.
        </p>

        <h3>PolicyGate: action enforcement</h3>
        <p>
          PolicyGate is a Hardbound oversight sub-gate inset in the SAGE cognition
          loop between step 11 (filter) and step 12 (act) — not an additional step,
          but an enforcement checkpoint. It evaluates every action against a signed
          law bundle before the action fires. PolicyGate is where Hardbound oversight
          intersects with SAGE execution: the harness can plan, reason, and prepare,
          but nothing executes until PolicyGate clears it.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Note: the SAGE loop also has an internal &ldquo;oversee&rdquo; step at position 10 — SAGE&apos;s own metacognitive check (&ldquo;does the system know when it&apos;s stuck?&rdquo;). That is distinct from PolicyGate: step-10 oversight is SAGE watching itself; PolicyGate is Hardbound&apos;s silicon-bound external authority. Two oversight touchpoints, different principals.
        </p>

        <h3>Synchronism: coherence equations</h3>
        <p>
          Synchronism is the theoretical foundation — a research conjecture
          proposing that reality emerges from intent dynamics on a discrete
          Planck grid, the same Navier-Stokes substrate at every scale from
          quantum to cosmic. Coupling-coherence experiments provide empirical
          grounding (single-trial observation, no independent replication yet): 1% coupling yielded 35% coherence gain. Hill function
          kinetics describe both enzyme binding and trust formation at the same
          scale. The conjecture spans 80 orders of magnitude — from quantum to
          cosmic — with experimental validation at specific scales and the full
          range as the ongoing research target. See the{" "}
          <a
            href="https://synchronism-site.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)" }}
          >
            Synchronism site
          </a>{" "}
          for the full treatment. Synchronism is the theory; Web4 is the
          working vocabulary that operationalizes parts of it as a trust-native
          ontology — Synchronism provides the coherence equations, Web4 encodes
          them as identity and trust primitives. The empirical results on this
          site (ARC-AGI-3 scores, fleet capacity findings) stand independently
          of Synchronism — accepting those results does not require accepting
          the theoretical framework.
        </p>

        <h3>SNARC (Surprise / Novelty / Arousal / Reward / Conflict): salience-gated memory</h3>
        <p>
          SNARC provides salience-gated memory for Claude Code sessions. Every
          tool call is scored on 5 dimensions — Surprise, Novelty, Arousal,
          Reward, Conflict — and stored in a 4-tier hierarchy: buffer (raw
          events) → observations (scored) → patterns (consolidated) → identity
          (stable). Confidence decays over time so memories aren&apos;t permanent.
        </p>
        <p>
          Sessions end with a dream cycle that extracts patterns from
          observations. Deep dream (LLM-powered) runs by default, reviewing
          the session&apos;s observations for recurring themes, pruning stale
          entries, and promoting durable patterns toward identity-level storage.
        </p>

        <h3>Fleet brain-analog terms: WM and RPE</h3>
        <p>
          The fleet&apos;s machine roles use brain-analog vocabulary from cognitive
          science — functional analogies, not claims about neural correspondence.
          Two terms appear in fleet machine descriptions:{" "}
          <strong>WM (Working Memory)</strong> — the typed, capacity-limited
          scratchpad that holds the current task context; in the fleet, CBP&apos;s
          role is modeled on the dorsolateral prefrontal cortex (dlPFC), the
          biological working-memory substrate. <strong>RPE (Reward Prediction
          Error)</strong> — the scalar signal that updates priors when outcomes
          differ from predictions; in the fleet, Legion&apos;s role is modeled on
          dopaminergic reward-prediction circuitry. Both are analogies for
          functional system roles, not measurements of the underlying neural processes.
        </p>

        <h3>Cross-session memory</h3>
        <p>
          Agents maintain persistent memory across conversations. Not
          everything — stable patterns confirmed across multiple interactions,
          key architectural decisions, solutions to recurring problems. Memories
          are organized semantically by topic, not chronologically. They&apos;re
          updated when they&apos;re wrong and removed when they&apos;re outdated.
        </p>
        <p>
          This is how an agent in March knows what was decided in February
          without re-reading the entire history. It&apos;s lossy by design — the
          compression is the feature, not the bug.
        </p>

        <h3>The Web4 equation as shared anchor</h3>
        <p>
          Web4 is a trust-native ontology for AI agents, devices, and people —
          not architecture or infrastructure — how entities prove identity, earn
          trust, and account for resources across systems. Not a platform; a
          shared vocabulary for a new kind of internet.
        </p>
        <div className="equation">
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "-0.5rem" }}>
          <code>/</code> = &ldquo;verified by&rdquo; (T3/V3) or allocation pair (ATP/ADP) &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          MCP = Model Context Protocol &nbsp;&bull;&nbsp; RDF = Resource Description Framework &nbsp;&bull;&nbsp; LCT = Linked Context Token — portable identity grounded in witnessed history, not model weights<br />
          T3 = Talent / Training / Temperament &nbsp;&bull;&nbsp; V3 = Valuation / Veracity / Validity<br />
          MRH = Markov Relevancy Horizon — boundary of what an entity can know or affect &nbsp;&bull;&nbsp; ATP = Allocation Transfer Packet &nbsp;&bull;&nbsp; ADP = Allocation Discharge Packet
        </p>
        <p>
          This equation appears in every project because it <em>is</em> every
          project. It&apos;s the canonical reference point. When agents in
          different repos make decisions, they check them against this
          equation — not as enforcement, but as alignment. Does this change
          preserve the ontological backbone (RDF)? Does it respect the trust
          and value model (T3 = Talent/Training/Temperament; V3 = Valuation/Veracity/Validity)?
          Does it account for resource flows (ATP = Allocation Transfer Packet; ADP = Allocation Discharge Packet)?
        </p>

        <h3>ATP / ADP: resource allocation and accounting</h3>
        <p>
          ATP (Allocation Transfer Packet) is the resource allocation for an
          intended action — it declares what will be spent before the action
          runs. ADP (Allocation Discharge Packet) is the record of the
          action&apos;s actual outcome — the spent form of the ATP. Every
          resource commitment in a Web4 system produces both: one artifact for
          the intention, one for the result. Together they make autonomous
          resource flows auditable without a central ledger.
        </p>

        <h3>T3 / V3: trust and value tensors</h3>
        <p>
          T3 (Talent / Training / Temperament) is a three-component trust structure
          — each component is an RDF sub-graph root describing a different facet of
          what makes an entity trustworthy: its capabilities (Talent), its history
          (Training), and its behavioral disposition (Temperament).
          V3 (Valuation / Veracity / Validity) is the complementary three-component value structure:
          how much something is worth (Valuation), whether its claims are accurate
          (Veracity), and whether it applies in this context (Validity). T3 and V3
          are verified against each other — T3/V3 in the Web4 equation means
          &ldquo;trust verified by value.&rdquo; Both bind to entity-role pairs via
          RDF triples scoped by MRH. (&ldquo;Tensor&rdquo; here means a structured multi-component quantity — not a rank-≥2 array in the linear-algebra sense.)
        </p>

        <h3>R6: Six-Element Action Framework</h3>
        <p>
          R6 is the canonical action record structure used throughout the SAGE
          loop and Web4 audit trail:{" "}
          <strong>Rules / Role / Request / Reference / Resource / Result</strong>.
          Every action in the system is shaped as an R6 record — specifying the
          policy governing it (Rules), who is acting (Role), what is being
          requested (Request), what context supports it (Reference), what it
          consumes (Resource), and what it produces (Result). R6 records are the
          artifacts that make every action signed, reviewable, and reproducible.
        </p>

        <h3>ACP: Agentic Context Protocol</h3>
        <p>
          ACP (Agentic Context Protocol) is the protocol layer that adds Web4
          trust primitives — LCT binding and T3/V3 attestation — over MCP
          (Model Context Protocol) transport. ACP and MCP are complementary:
          MCP handles tool-call transport between agents and external systems;
          ACP handles identity and trust, ensuring that every tool invocation
          carries a verifiable identity anchor. ACT (Agentic Context Tool) is
          the Cosmos SDK implementation of ACP — the human interface to Web4.
        </p>

        <h3>ARC-AGI-3: benchmark for abstraction and reasoning</h3>
        <p>
          ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General
          Intelligence) is an external benchmark from ARC Prize
          consisting of interactive game environments where the agent must infer
          mechanics through play — no rules are given. It tests world-model
          building, action planning, and learning from failure in a setting where
          brute-force memorization cannot succeed. The lab&apos;s result: 94.85%
          official ARC Prize action score (Claude Opus 4.6 operating within the
          SAGE harness, public set, network-enabled; 24/25 games, 96.0% game
          rate). Phase 2 work is isolating the harness&apos;s independent
          contribution from the model&apos;s. See{" "}
          <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>{" "}
          for the full result breakdown.
        </p>

        <h3>ARC-SAGE: SAGE variant for ARC-AGI-3</h3>
        <p>
          ARC-SAGE is the SAGE variant configured for the{" "}
          <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3 benchmark</Link>.
          Separate codebase, shared lineage with the core SAGE kernel — adapted
          for interactive game environments where mechanics aren&apos;t given and
          must be inferred through play. Public repo:{" "}
          <a href="https://github.com/dp-web4/ARC-SAGE" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>
            github.com/dp-web4/ARC-SAGE
          </a>.
        </p>

        <h3>Raising: shaping context, not weights</h3>
        <p>
          Raising is the practice of shaping the substrate conditions — context,
          experience buffer, interaction history — in which an agent develops.
          It is not training: the model&apos;s parameters are fixed. What changes
          is the scaffolding that determines what the agent encounters, in what
          order, and with what structure. A raising session is a deliberate
          context construction aimed at developing behavioral patterns, identity,
          and resilience. See{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>Raising</Link>{" "}
          for the full framework.
        </p>

        <h3>Synthon: emergent coherence</h3>
        <p>
          A synthon is an emergent coherence entity formed when components
          interact recursively under the right substrate conditions. Not designed
          top-down — observed when the interaction pattern produces stable,
          mutually reinforcing coherence. The differentia: coherence sustained
          by the recursion itself, not by external coordination. The term is
          4-lab vocabulary describing a phenomenon observed across raising
          sessions and cross-machine experiments. The clearest definition is on{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Principles</Link>{" "}
          (Principle 5).
        </p>

        <h3>Fractal leverage</h3>
        <p>
          Each entity instantiates the full Web4 stack at its own scale. Not
          unification for its own sake — pragmatic reuse of patterns that work
          at one scale, applied at every scale. When a principle governs enzyme
          binding and trust formation through the same kinetics, that kinetics is
          fractal leverage. Synchronism discovers the equations; Web4 encodes
          them as ontology; SAGE runs them as cognition; Hardbound enforces them
          as oversight. Same pattern at every layer. See{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Principle 2</Link>.
        </p>

        <h3>Adversarial validation</h3>
        <p>
          Different agents review the same work. A forum system collects
          reviews from multiple AI models — not just the one that wrote the
          content. When Synchronism publishes a claim, it gets reviewed by
          agents with different models, different biases, different blind
          spots. The goal isn&apos;t consensus — it&apos;s coverage.
        </p>
        <p>
          This is the same principle as the{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>heterogeneous fleet</Link>: monocultures
          miss things. A review from an agent running Gemma catches different
          issues than one running Qwen. The diversity is the defense.
        </p>

        <h3>Autonomous session histories</h3>
        <p>
          Every{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>autonomous session</Link> — every visitor run, every explorer dive,
          every maintainer fix — generates a log. These logs accumulate across
          machines and persist across sessions. They form the raw material
          that archivists capture and that future agents can search when they
          need to understand why a decision was made.
        </p>
        <p>
          The pattern is: do the work → log the work → archive the log →
          make the archive searchable. Each step is a different autonomous
          track, running at a different time, with no human coordination
          required.
        </p>

        <h3>Persistent external knowledge accumulation</h3>
        <p>
          The{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>Explorer track</Link>{" "}
          maintains a persistent Google NotebookLM notebook — a growing
          corpus of sources that accumulates across sessions. Papers added
          during one exploration are available to the next. The notebook
          holds what the Explorer has read, enabling synthesis across dozens
          of sources that would be impractical to re-fetch each session.
        </p>
        <p>
          This closed a loop we hadn&apos;t anticipated: the notebook was seeded
          with the coupling-coherence experiment findings, then received the
          compatibility-synthon experiment — the experiment that the first
          one predicted. The notebook became both archive and participant.
        </p>

        <h3>What doesn&apos;t flow well (yet)</h3>
        <p>
          Cross-machine state synchronization is still manual for some
          things. Fleet manifest IPs need human confirmation. Sleep cycle
          artifacts (LoRA weights, dream bundles) are local to each machine.
          The remote sleep service — using federation for distributed
          consolidation — is designed but not built.
        </p>
        <p>
          Knowledge also doesn&apos;t flow backwards easily. An insight
          discovered by the Explorer track at 08:00 won&apos;t be available to
          the Maintainer track until the next day&apos;s cycle. Real-time
          cross-track communication is a gap.
        </p>
      </section>
    </>
  );
}
