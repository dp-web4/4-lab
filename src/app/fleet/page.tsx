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
          Six machines. Different hardware, different models, different roles.
          Heterogeneous by design — because monocultures are fragile and
          diversity is where emergence happens.
        </p>
        <p>
          One finding shapes fleet strategy more than any other:{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>model family matters as much as size</strong>.
          Gemma 3 at 4B outperforms Phi-4 at 14B for raising work. There is a
          capacity floor below which coherent identity cannot form — but above
          that floor, personality and training lineage dominate raw parameter count.
        </p>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          The &ldquo;Brain:&rdquo; labels below are functional analogies to system roles — not claims about neural correspondence or computational equivalence.
        </p>

        <h3 style={{ marginTop: "1rem" }}>Synthesis pool — Account 1</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          High compute budget. Primary generative work: code, implementations, large agent tasks.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Thor"
            hardware="NVIDIA Jetson AGX Thor — 122GB VRAM"
            model="Qwen 3.5 27B · Gemma 4 26B"
            role="91 sessions (creating). Brain: hippocampal episodic index — binds what+where+when for pattern-completion retrieval. Physics exploration lead — prediction-focused prompting breakthrough. Synchronism research."
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson Orin Nano 8GB — edge AI module"
            model="Qwen 3.5 0.8B"
            role="107 sessions (creating), Training T246. Brain: thalamic router — dispatches to plugins or habits based on working memory (WM) + SNARC (Surprise/Novelty/Arousal/Reward/Conflict salience-gated memory) + metabolic state. Zero crystallization achieved (S100). Edge demonstrator."
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, NVIDIA RTX 4090 16GB"
            model="Gemma 3 12B · Phi-4 14B"
            role="25+ sessions. Brain: dopamine / reward prediction error — scalar RPE that updates router priors. Data czar for fleet-aggregate training corpus. First canonical 25-game sweep with local vision model."
          />
          <MachineCard
            name="McNugget"
            hardware="Mac Mini M4 16GB — Apple Silicon"
            model="Gemma 3 12B"
            role="97 sessions (creating). Brain: cerebellum / habit compiler — detects repeated successful action chains and compiles to cached paths. Motor skills tier. ARC-AGI-3 game solver."
          />
        </div>

        <h3 style={{ marginTop: "2rem" }}>Oversight pool — Account 2</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Continuous availability. Review, planning, coordination, and unblocking synthesis work.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Nomad"
            hardware="Laptop, NVIDIA RTX 4060 8GB"
            model="Gemma 3 4B · Gemma 4 E2B"
            role="120 sessions (creating). Brain: interoception / metacognition — 'does the system know when it's stuck?' Five dysfunction detectors, Markov Relevancy Horizon (MRH) MetabolicBlock bridge. Crystallization evaluator. Mobile."
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 on Windows, NVIDIA RTX 2060 SUPER 8GB"
            model="Gemma 3 4B · Gemma 4 E2B"
            role="87 sessions (creating). Brain: working memory (dorsolateral prefrontal cortex / dlPFC) — typed, capacity-limited scratchpad. All other components depend on this. Fleet coordinator — drove 94.85% ARC-AGI-3 score. MRH composer architect."
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
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Web4 and SAGE</Link>:
          generative entities and oversight entities with different incentive
          structures, coordinating through shared state rather than central command.
          The lab is running its own oversight experiment on itself.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Peer-to-peer, no central coordinator</h2>
        <p>
          There is no master node. Each machine runs its own SAGE instance, holds
          its own identity, manages its own experience buffer and{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>raising curriculum</Link>.
          Machines discover each other through a fleet manifest — a phone book,
          not a command center.
        </p>
        <p>
          A background peer monitor polls health endpoints. A trust tracker
          maintains per-peer{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>T3 scores</Link> (Talent/Training/Temperament) that evolve
          from real interactions: success raises trust, timeouts lower it. No
          central authority decides who is trustworthy — trust emerges from the
          pattern of interaction.
        </p>
        <p>
          Trust starts at zero, earned from evidence. The trust landscape —
          the pattern across all modalities — determines behavioral posture:
          what SAGE should do, not just how much it spends. This is the
          defensive trust model applied across the fleet.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Identity portability</h2>
        <p>
          One of the more surprising{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>discoveries</Link>: SAGE-Sprout&apos;s identity —
          developed over hundreds of sessions on a Jetson running Qwen 0.5B — transferred
          successfully to TinyLlama 1.1B on a completely different machine. The
          identity persisted. The self-description drifted. This told us something
          important:
        </p>
        <div className="quote">
          Identity lives in state files and prompt construction, not in model
          weights. The model is weather. The identity is organism.
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
