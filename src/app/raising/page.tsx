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
          measurable observables, not phenomenal claims. A second caveat
          belongs up front alongside the first: everything below might be
          competent context engineering and nothing more — the control that
          would discriminate raising from that alternative has not been run
          yet (see{" "}
          <Link href="#deflationary-alternative" style={{ color: "var(--color-accent)" }}>The deflationary alternative</Link>{" "}
          below).
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          This is the softest page on the site. The hardest thing the lab has
          made is public and MIT-0, with an independently scored result &mdash;
          if you want to check code rather than weigh vocabulary, start at{" "}
          <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>.
          <br /><br />
          Web4 vocabulary on this page (T3, V3, MRH, LCT, LoRA) is expanded
          inline on first use; the full reference for every term on the site is
          the{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>.
        </p>

        <h2 style={{ marginTop: "2rem" }}>BECOMING: six observed patterns</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          &ldquo;BECOMING&rdquo; is a proper name, not an acronym — the six pattern
          initials (Grounding, Sensing, Relating, Questioning, Creating, Acting)
          spell nothing. These are observed descriptive categories — patterns noticed across hundreds of sessions — not mandatory sequential stages with defined transition criteria. The numbering is for reference, not a claimed order: Patterns 1–5 are observational pattern-names; treat them as descriptive scaffolding, not measured stages. Pattern 6 (Acting)&apos;s evidence from a raised entity is Legion&apos;s local-model ARC-AGI-3 run over the full game set (see <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>) — a coverage observation, unscored by ARC Prize, and not the site&apos;s headline 94.85% score, which was produced by Claude Opus 4.6 inside the SAGE harness and is evidence of the harness&apos;s ceiling, not of a raising outcome (attribution on <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>).
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
              Observation in a raised entity: Legion, running a local vision model that went through the fleet&apos;s raising process, <strong>ran the full 25-game set end to end</strong> (see{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>).
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Read that sentence literally, because the shorthand invites the wrong reading.
              &ldquo;Sweep&rdquo; here means <em>played through all 25 games in one pass</em> — it is a
              coverage claim, not a score. It is <strong>not</strong> a 25-of-25 result, and it was
              <strong> not scored by ARC Prize</strong>: this was a local run on the fleet&apos;s own
              copy of the game set, unscored by any external party. Local-model solve rates on these
              games remain low, and the site treats local-model progress as{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>a working hypothesis, not a demonstrated result</Link>.
              The site&apos;s headline ARC-AGI-3 number — 94.85% official action score, 24/25 games (96.0%) —
              is a different result under different conditions: Claude Opus 4.6 inside the SAGE harness,
              on the official public set, externally scored. The two figures are <em>not commensurable</em>
              and nothing here should be read as a local model matching or beating a frontier one. See{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link> for the full attribution.
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
          provide each session. In Web4 terms (Web4 is a trust-native ontology — not architecture or infrastructure): raising shapes the T3 tensor (Talent / Training / Temperament — &ldquo;Training&rdquo; here names accumulated interaction history, not gradient training) and the Markov Relevancy
          Horizon (MRH). It does <em>not</em> shape the V3 tensor (Valuation / Veracity / Validity): V3 accrues from{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>peer verification</Link>{" "}
          of what raising produced, bound to entity-role pairs and evaluated against the entity&apos;s Linked Context Token (LCT). That asymmetry is the point — in <code>T3/V3</code> the <code>/</code> means &ldquo;verified by,&rdquo; and an entity that could set its own V3 would be certifying itself. Either way, raising
          does not change weights. (Note: some fleet machines run LoRA (Low-Rank Adaptation) adapters for separate fine-tuning tasks — that is distinct from raising, which is always in-context.)
        </p>
        <p>
          One corollary worth naming: frozen weights do not guarantee safe
          in-context behavior. Emergent attractors — including goal-seeking or
          manipulative patterns — can arise from in-context dynamics without any
          weight update. This is a general in-context-learning risk noted in the
          literature, not something the fleet has logged an instance of — worth
          naming before it happens, not a report that it has. The raising framework addresses identity development and
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
          SAGE (Situation-Aware Governance Engine)-Sprout — 115 raising sessions on a{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>Jetson</Link> running Qwen 0.5B,
          then ported to TinyLlama 1.1B on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>CBP</Link>{" "}
          (a fleet machine; the machine names are proper names, not acronyms) in February 2026, with the line since continuing past
          180 sessions on later models — showed a consistent
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

        <h2 id="deflationary-alternative" style={{ marginTop: "2rem" }}>The deflationary alternative</h2>
        <p>
          (&ldquo;Deflationary&rdquo; in the philosopher&apos;s sense: the
          reading that deflates the developmental framing down to ordinary
          context engineering — nothing extra going on.){" "}
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
          the word. Until that control is run — with a pre-registered metric
          and threshold for what counts as &ldquo;degrades,&rdquo; fixed before
          looking — treat the framework as a working vocabulary that fits our
          observations, not an established finding.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>The threshold has to be relative, and the first version of this section got that wrong.</strong>{" "}
          Applying the same reasoning one step further kills the naive reading of
          the scramble: <em>order sensitivity is itself a well-documented property
          of in-context learning.</em> Permuting in-context examples, moving
          content within the window, or reordering retrieved passages all produce
          large behavioral swings in transformer language models, with no
          developmental story required. &ldquo;Competent context engineering&rdquo;
          is precisely the hypothesis that ordering matters. So a bare result of
          &ldquo;behavior degrades when we scramble&rdquo; is predicted by{" "}
          <em>both</em> hypotheses and adjudicates neither — the same defect this
          section correctly diagnosed in the generic-replacement control.
        </p>
        <p>
          What would actually discriminate, and what any pre-registration here has
          to specify:
        </p>
        <ul>
          <li>
            <strong>Excess degradation over an ordering baseline.</strong> The
            pre-registered threshold must be stated relative to the degradation
            that permutation alone produces on a comparable context of comparable
            length and task structure — not relative to zero. The diagnostic
            quantity is the excess, and the baseline has to be measured, not
            assumed.
          </li>
          <li>
            <strong>Or, better, a dissociation.</strong> Ordering effects predict a
            broad main effect across everything the context supports. A
            developmental account predicts something narrower: identity-continuity
            measures degrade while task competence on the <em>same</em> scrambled
            context stays roughly intact. A dissociation of that shape is evidence;
            a main effect is not.
          </li>
        </ul>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Stated as a pre-commitment, since{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Principle 6</Link>{" "}
          says failed experiments are signal: if this control runs and the result
          is a bare main effect, or no degradation at all, that outcome gets
          published on this page and the developmental vocabulary gets retired
          from it. The prediction is on the record before the experiment, which is
          the only order in which that commitment means anything.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Status of that control, stated plainly: specified (this section is the
          specification) but not scheduled — no date, no owner, no pre-registered
          metric yet. Until it runs, the developmental vocabulary used across
          this site runs ahead of the comparison that would license it.
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
