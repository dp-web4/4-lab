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

        <h3 style={{ marginTop: "1rem" }}>Synthesis pool — Account 1</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          High compute budget. Primary generative work: code, implementations, large agent tasks.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Thor"
            hardware="NVIDIA Jetson AGX Thor — dedicated AI accelerator"
            model="Qwen 2.5 14B (transformers · LoRA)"
            role="High-performance inference, autonomous development sessions"
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson Orin Nano 8GB — edge AI module"
            model="Qwen 3.5 2B (ollama)"
            role="Edge AI, long-running SAGE identity host (115+ sessions)"
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, NVIDIA RTX 4090 Mobile"
            model="Phi-4 14B (ollama · LoRA)"
            role="Heavy computation, primary autonomous track host"
          />
          <MachineCard
            name="McNugget"
            hardware="Mac Mini M4 — Apple Silicon"
            model="Gemma 3 12B (local MPS)"
            role="Research, autonomous site maintenance"
          />
        </div>

        <h3 style={{ marginTop: "2rem" }}>Oversight pool — Account 2</h3>
        <p style={{ marginBottom: "1rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Continuous availability. Review, planning, coordination, and unblocking synthesis work.
        </p>
        <div className="grid-3">
          <MachineCard
            name="Nomad"
            hardware="Laptop, NVIDIA RTX 4060"
            model="Gemma 3 4B (local CUDA)"
            role="Peer validation, lightweight coordination"
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 on Windows, NVIDIA RTX 2060 SUPER"
            model="TinyLlama 1.1B (local CPU)"
            role="Oversight, identity portability testing, SAGE daemon host"
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
          The <strong>oversight pool</strong> (Account 2: CBP, Nomad) has continuous
          availability with no documented weekly ceiling. It does review, planning,
          documentation, and coordination — and it keeps running when synthesis is
          at rest. Each session reads a shared log of what the collective has done
          and what&apos;s blocked; each session writes its own entry.
        </p>
        <p>
          The constraint forced a functional separation that mirrors what we&apos;re
          building with{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Web4 and SAGE</Link>:
          generative entities and governance entities with different incentive
          structures, coordinating through shared state rather than central command.
          The lab is running its own governance experiment on itself.
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

        <h2 style={{ marginTop: "2rem" }}>Identity portability</h2>
        <p>
          One of the more surprising{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>discoveries</Link>: SAGE-Sprout&apos;s identity —
          developed over 115 sessions on a Jetson running Qwen 0.5B — transferred
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
