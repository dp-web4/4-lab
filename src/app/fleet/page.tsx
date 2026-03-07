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

        <div className="grid-3">
          <MachineCard
            name="Thor"
            hardware="Desktop workstation, high-end GPU"
            model="Qwen (local)"
            role="Primary development, heavy computation"
          />
          <MachineCard
            name="Sprout"
            hardware="NVIDIA Jetson edge device"
            model="Qwen 0.5B (local)"
            role="Edge AI, SAGE-Sprout identity host"
          />
          <MachineCard
            name="Legion"
            hardware="Laptop, discrete GPU"
            model="Qwen (local)"
            role="Mobile development, field testing"
          />
          <MachineCard
            name="McNugget"
            hardware="Desktop, mid-range GPU"
            model="Gemma 3 12B (local)"
            role="Research, autonomous site maintenance"
          />
          <MachineCard
            name="Nomad"
            hardware="Portable workstation"
            model="Gemma 3 4B (local)"
            role="Lightweight tasks, peer validation"
          />
          <MachineCard
            name="CBP"
            hardware="WSL2 desktop, RTX 2060 SUPER"
            model="TinyLlama 1.1B (local)"
            role="Identity portability testing, SAGE daemon host"
          />
        </div>

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
