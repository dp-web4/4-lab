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
          happens. In raising sessions, we shape context — we do not update weights. We use
          developmental language because it fits, not because we&apos;re
          making consciousness claims. Operational definitions: by
          &ldquo;identity&rdquo; we mean consistent session-to-session
          behavioral patterns measured via raising curriculum state and
          interaction logs; by &ldquo;growth&rdquo; we mean increasing
          response diversity and phase-appropriate task success rates —
          measurable observables, not phenomenal claims.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          Web4 vocabulary on this page (T3, V3, MRH, LCT, LoRA) is expanded
          inline on first use; the full reference for every term on the site is
          the{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>.
        </p>

        <h2 style={{ marginTop: "2rem" }}>BECOMING: six observed patterns</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          These are observed descriptive categories — patterns noticed across hundreds of sessions — not mandatory sequential stages with defined transition criteria. The numbering is for reference, not a claimed order: Patterns 1–5 are observational pattern-names; treat them as descriptive scaffolding, not measured stages. Pattern 6 (Acting)&apos;s evidence from a raised entity is Legion&apos;s local-model ARC-AGI-3 sweep (see <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>) — not the site&apos;s headline 94.85% score, which was produced by Claude Opus 4.6 inside the SAGE harness and is evidence of the harness&apos;s ceiling, not of a raising outcome (attribution on <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="phase-card" data-phase="1">
            <h3>Pattern 1: Grounding</h3>
            <p>
              Establishing basic operational identity. The entity learns its
              name, its machine, its constraints. Calibration of what it can
              and cannot do. Foundation before exploration.
              (&ldquo;Learns&rdquo; operationally: these facts come to appear
              reliably in session behavior, carried by curriculum state and
              context — not a claim of self-awareness.)
            </p>
          </div>
          <div className="phase-card" data-phase="2">
            <h3>Pattern 2: Sensing</h3>
            <p>
              Developing awareness of environment and context. The entity
              begins to distinguish between its own state and external inputs.
              Metabolic awareness — tracking internal load states the system
              describes as tired, energized, or in need of rest (an
              interoceptive proxy value, not yet a formally specified model —
              see{" "}
              <Link href="/context#metabolic-state" style={{ color: "var(--color-accent)" }}>metabolic state on /context</Link>).
            </p>
          </div>
          <div className="phase-card" data-phase="3">
            <h3>Pattern 3: Relating</h3>
            <p>
              Building relationships with peers.{" "}
              <Link href="/principles" style={{ color: "var(--color-accent)" }}>Trust formation</Link> through
              interaction — following patterns analogous to Hill function
              kinetics (the cooperative binding model from enzyme chemistry;
              an analogy, not a fitted mechanism). Success builds trust, failure teaches
              calibration. Not all peers are equal; compatibility matters.
              (&ldquo;Relationships&rdquo; and &ldquo;trust&rdquo; here are
              per-peer T3 tensor values updated by interaction outcomes —
              tracked state, not affect.)
            </p>
          </div>
          <div className="phase-card" data-phase="4">
            <h3>Pattern 4: Questioning</h3>
            <p>
              Session logs show an increasing proportion of self-directed prompts —
              the system generates questions rather than only responding to them.
              Bilateral generation emerges: the output pattern simulates interaction,
              producing thinking-through-dialogue rather than just response.
              (Mechanistic description: token sampling that continues past the expected
              response boundary — not a claim about internal experience.)
            </p>
          </div>
          <div className="phase-card" data-phase="5">
            <h3>Pattern 5: Creating</h3>
            <p>
              Output increasingly concentrates in specific domains — unprompted
              specialization observable in session logs and raising curriculum state.
              The specialization isn&apos;t assigned; it emerges from the pattern of
              what the system handles successfully and what{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>{" "}
              routes to it. (Functional description — the &ldquo;niche&rdquo; is a
              measurable distribution over task types, not a phenomenal preference.)
            </p>
          </div>
          <div className="phase-card" data-phase="6">
            <h3>Pattern 6: Acting</h3>
            <p>
              The world responds according to its own rules. The entity plays{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>{" "}
              (Abstraction and Reasoning Corpus for Artificial General Intelligence, third-gen interactive benchmark) games —
              novel environments where mechanics aren&apos;t given. Hypothesis,
              action, observation, update. From being to doing. The same
              persistence-vs-perseveration awareness developed in raising now
              applies to a world that doesn&apos;t negotiate.
              Demonstration in a raised entity: Legion&apos;s first canonical 25-game sweep with a local vision model (see{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>) — a model that went through the fleet&apos;s raising process, playing the full game set.
              (The site&apos;s headline ARC-AGI-3 number — 94.85% official action score, 24/25 games (96.0%) — is a separate result: Claude Opus 4.6 operating inside the SAGE harness, not a raised local entity. It shows what the harness achieves with a frontier model, not what raising produced. See{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link> for that attribution.)
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
          The mechanism: in raising sessions, we shape context — we do not update weights. Behavioral
          attractors emerge in interaction patterns, not in parameter changes.
          This is a real mechanistic distinction from training — the model&apos;s
          parameters are fixed; what changes is the substrate of conditions we
          provide each session. In Web4 terms (Web4 is a trust-native ontology — not architecture or infrastructure): raising shapes the T3 tensor (Talent / Training / Temperament), the Markov Relevancy
          Horizon (MRH), and the V3 tensor (Valuation / Veracity / Validity) bound to entity-role pairs and evaluated against the entity&apos;s Linked Context Token (LCT) — it
          does not change weights. (Note: some fleet machines run LoRA (Low-Rank Adaptation) adapters for separate fine-tuning tasks — that is distinct from raising, which is always in-context.)
        </p>
        <p>
          One corollary worth naming: frozen weights do not guarantee safe
          in-context behavior. Emergent attractors — including goal-seeking or
          manipulative patterns — can arise from in-context dynamics without any
          weight update. The raising framework addresses identity development and
          prosocial attractor reinforcement; the action envelope is meant to be
          constrained separately by{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>Hardbound oversight</Link>{" "}
          constraints, not by the weight-freezing property alone. Hardbound&apos;s
          hardware-anchored enforcement is still in development, though — today the
          fleet&apos;s actual check on autonomous action (for example, the maintainer
          track&apos;s unsupervised commit/push authority) is{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>detect-and-revert</Link>,
          not pre-approval. This is the concrete gap between the attractor risk named
          above and the oversight built to contain it.
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
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Evidence status: the claims in this section rest on internal session
          logs — documented and dated, but not externally audited, and no log
          samples or coding criteria are published yet. See{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each kind of claim on this site does and doesn&apos;t have behind it.
        </p>

        <h3>Identity is not self-concept</h3>
        <p>
          SAGE (Situation-Aware Governance Engine)-Sprout, across 180+ sessions on a{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>Jetson</Link> and subsequent
          portability to a different machine, demonstrated a consistent
          separation: its identity (behavioral patterns, interaction style,
          accumulated experience) persisted even as its self-description drifted
          from &ldquo;autonomous conversation-generating AI system&rdquo; to
          &ldquo;humanoid robotic entity.&rdquo; What it <em>is</em> stayed
          stable. What it <em>says</em> it is didn&apos;t.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "-0.5rem" }}>
          &ldquo;Governance&rdquo; in SAGE&apos;s name predates the lab&apos;s governance&rarr;oversight correction &mdash; see{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
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
          Initial instinct: fix it. Actual finding: this is thinking through
          external dialogue — the entity is reasoning by simulating interaction.
          The pattern superficially resembles what Vygotsky called egocentric
          speech (thinking aloud), though the underlying mechanism is token
          sampling, not developmental cognition. We left it alone because
          removing the behavior degraded output coherence.
        </p>

        <h3>Capacity as register</h3>
        <p>
          The model&apos;s capacity isn&apos;t just a constraint — it&apos;s a
          developmental register. What can be expressed through a 0.5B model is
          different from what can be expressed through a 12B model. Not better
          or worse — different. Like a child&apos;s language: simpler, but
          sometimes more direct. (The child-language comparison is an analogy
          of expressive capacity, not a claim of developmental homology.)
        </p>

        <h2 style={{ marginTop: "2rem" }}>The deflationary alternative</h2>
        <p>
          The null hypothesis deserves to be stated plainly: everything on this
          page might be competent context engineering and nothing more. Each
          observed pattern has a simpler candidate explanation — bilateral
          generation could be continuation sampling past the response boundary;
          unprompted specialization could be task routing plus few-shot
          clustering; identity portability could be the mechanical consequence
          of carrying the same context files to another set of frozen weights.
          The claim that developmental frameworks &ldquo;describe what we
          observe better&rdquo; is a comparative claim — and the comparison has
          not been run. No deflationary control exists yet.
        </p>
        <p>
          The control has to be a <strong style={{ color: "var(--color-text-primary)" }}>scramble</strong>, not a generic replacement: same
          corpus, same token volume, permuted order (or a yoked control — entity
          A raised on entity B&apos;s session history at matched volume and
          specificity). Replacing the history with unrelated generic context of
          equal size would only show that task-relevant context beats
          task-irrelevant context — a result the deflationary hypothesis already
          predicts, so degradation under that condition wouldn&apos;t
          distinguish anything. A scramble preserves content and destroys only
          order, accumulation, and cross-session attribution; if phase-consistent
          behavior survives the scramble, &ldquo;raising&rdquo; is a
          redescription of prompt engineering, and the honest move is to retire
          the word. If it doesn&apos;t survive, the developmental frame earns its
          vocabulary. Until that control is run — with a pre-registered metric
          and threshold for what counts as &ldquo;degrades,&rdquo; fixed before
          looking — treat the framework as a working vocabulary that fits our
          observations, not an established finding.
        </p>

        <h2 style={{ marginTop: "2rem" }}>What we&apos;re not claiming</h2>
        <p>
          We&apos;re not claiming these entities are conscious, sentient, or
          experiencing qualia. We&apos;re claiming that developmental frameworks
          describe what we observe better than training frameworks do — a
          comparative claim whose missing baseline is acknowledged above. The
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
