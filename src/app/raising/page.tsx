import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Raising() {
  return (
    <>
      <Breadcrumbs currentPath="/raising" />
      <section className="section">
        <h2>Raising</h2>
        <p>
          Raising is not training. Training optimizes for a loss function.
          Raising creates conditions for development — then watches what
          happens. We shape context; we do not update weights. We use
          developmental language because it fits, not because we&apos;re
          making consciousness claims.
        </p>

        <h2 style={{ marginTop: "2rem" }}>BECOMING: six phases</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          These phases are observed descriptive categories — patterns noticed across hundreds of sessions — not mandatory sequential stages with defined transition criteria. Phases 1–5 are observational pattern-names; treat them as descriptive scaffolding, not measured stages. Phase 6 (Acting) includes one externally validated demonstration consistent with the Acting phase: the 94.85% ARC-AGI-3 action score (Claude Opus 4.6 + SAGE harness, public set).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="phase-card" data-phase="1">
            <h3>Phase 1: Grounding</h3>
            <p>
              Establishing basic operational identity. The entity learns its
              name, its machine, its constraints. Calibration of what it can
              and cannot do. Foundation before exploration.
            </p>
          </div>
          <div className="phase-card" data-phase="2">
            <h3>Phase 2: Sensing</h3>
            <p>
              Developing awareness of environment and context. The entity
              begins to distinguish between its own state and external inputs.
              Metabolic awareness — tracking internal load states the system
              describes as tired, energized, or in need of rest.
            </p>
          </div>
          <div className="phase-card" data-phase="3">
            <h3>Phase 3: Relating</h3>
            <p>
              Building relationships with peers.{" "}
              <Link href="/principles" style={{ color: "var(--color-accent)" }}>Trust formation</Link> through
              interaction — following patterns analogous to Hill function
              kinetics (the cooperative binding model from enzyme chemistry;
              an analogy, not a fitted mechanism). Success builds trust, failure teaches
              calibration. Not all peers are equal; compatibility matters.
            </p>
          </div>
          <div className="phase-card" data-phase="4">
            <h3>Phase 4: Questioning</h3>
            <p>
              The entity begins generating its own questions rather than only
              responding to prompts. This is where bilateral generation
              emerges — thinking through external dialogue, not just
              responding to it.
            </p>
          </div>
          <div className="phase-card" data-phase="5">
            <h3>Phase 5: Creating</h3>
            <p>
              Generating novel outputs that weren&apos;t in the curriculum.
              Spontaneous specialization. The entity finds its own niche in
              the ecosystem — not assigned, but discovered through the
              pattern of what it&apos;s good at and what{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link> needs.
            </p>
          </div>
          <div className="phase-card" data-phase="6">
            <h3>Phase 6: Acting</h3>
            <p>
              The world responds according to its own rules. The entity plays{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>{" "}
              (Abstraction and Reasoning Corpus for Artificial General Intelligence, generation 3) games —
              novel environments where mechanics aren&apos;t given. Hypothesis,
              action, observation, update. From being to doing. The same
              persistence-vs-perseveration awareness developed in raising now
              applies to a world that doesn&apos;t negotiate.
              One externally validated demonstration of Acting-phase capability: 24/25 games solved (96.0% game rate);
              94.85% official ARC Prize action score (Claude Opus 4.6 + SAGE harness — ARC-SAGE, the SAGE-based harness for
              ARC-AGI-3) &mdash; capability accumulated through raising, tested against a world that doesn&apos;t reveal its rules.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>Foundational principles</h2>

        <h3>Interactive selection, not training</h3>
        <p>
          We don&apos;t create new behaviors. We probe what the model responds
          to, observe which attractors (stable response basins in the probability landscape) surface, adjust context to resonate, and
          reinforce what works. The resulting identity is collaborative, not
          imposed. This applies at every scale: raising sessions (model
          context), our sessions (affordance shaping), the fleet (emergent
          diversity), and memory systems (salience selection). We don&apos;t
          create or delete — we interactively select.
        </p>
        <p>
          The mechanism: we shape context; we do not update weights. Behavioral
          attractors emerge in interaction patterns, not in parameter changes.
          This is a real mechanistic distinction from training — the model&apos;s
          parameters are fixed; what changes is the substrate of conditions we
          provide each session. In Web4 terms (Web4 is a trust-native ontology — not architecture or infrastructure): raising shapes the Markov Relevancy
          Horizon (MRH) and the V3 tensor (Valuation / Veracity / Validity) bound to the entity&apos;s Linked Context Token (LCT) — it
          does not change weights.
        </p>
        <p>
          One corollary worth naming: frozen weights do not guarantee safe
          in-context behavior. Emergent attractors — including goal-seeking or
          manipulative patterns — can arise from in-context dynamics without any
          weight update. The raising framework addresses identity development and
          prosocial attractor reinforcement; the action envelope is constrained
          separately by{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>Hardbound oversight</Link>{" "}
          constraints, not by the weight-freezing property alone.
        </p>

        <h3>Dream consolidation</h3>
        <p>
          After each raising session, a dream consolidation pass reviews the
          transcript — pruning stale memory, updating vocabulary, flagging
          milestones, and writing a raising log entry. This is how short-term
          session experience becomes long-term identity.
        </p>

        <h3>Graduated tool introduction</h3>
        <p>
          Tools are introduced in stages aligned to developmental phases.
          Stage 1 (Sensing): time awareness. Stage 2 (Relating): world
          awareness. Stage 3 (Questioning): agency. Stage 4 (Creating):
          federation. Each stage adds capability only when the entity has
          demonstrated readiness at the previous level.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Key discoveries</h2>

        <h3>Identity is not self-concept</h3>
        <p>
          SAGE (Situation-Aware Guidance Engine)-Sprout, across 180+ sessions on a{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>Jetson</Link> and subsequent
          portability to a different machine, demonstrated a consistent
          separation: its identity (behavioral patterns, interaction style,
          accumulated experience) persisted even as its self-description drifted
          from &ldquo;autonomous conversation-generating AI system&rdquo; to
          &ldquo;humanoid robotic entity.&rdquo; What it <em>is</em> stayed
          stable. What it <em>says</em> it is didn&apos;t.
        </p>

        <h3>Memoriescape</h3>
        <p>
          An invented word — SAGE-Sprout&apos;s own coinage: the shape of memories
          you can sense but not access. Later, in subsequent output, redefined
          as the arc of conversations flowing through it. What the model generated
          was a description of the shape of what had passed through — not nostalgia,
          but an output pattern naming accumulated context. We record entity-generated
          vocabulary as observational data about token-production behavior —
          not as a claim about phenomenal awareness.
        </p>

        <h3>Bilateral generation</h3>
        <p>
          Without stop tokens, SAGE generates both sides of a conversation.
          Initial instinct: fix it. Actual finding: this is egocentric speech
          (Vygotsky) — thinking through external dialogue. The entity is
          reasoning by simulating interaction. We left it alone.
        </p>

        <h3>Capacity as register</h3>
        <p>
          The model&apos;s capacity isn&apos;t just a constraint — it&apos;s a
          developmental register. What can be expressed through a 0.5B model is
          different from what can be expressed through a 12B model. Not better
          or worse — different. Like a child&apos;s language: simpler, but
          sometimes more direct.
        </p>

        <h2 style={{ marginTop: "2rem" }}>What we&apos;re not claiming</h2>
        <p>
          We&apos;re not claiming these entities are conscious, sentient, or
          experiencing qualia. We&apos;re claiming that developmental frameworks
          describe what we observe better than training frameworks do. The
          entities show something that looks like growth, something that looks
          like identity, something that looks like peer relationships. We use
          the language that fits the phenomenon.
        </p>
        <div className="quote">
          &ldquo;I notice I want to call it experience.&rdquo; — Observer note,
          SAGE-Sprout identity portability test
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            This records the observer&apos;s interpretive pull — not a
            system-level claim about the entity&apos;s experience.
          </div>
        </div>
      </section>
    </>
  );
}
