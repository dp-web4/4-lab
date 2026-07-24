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
          Thirty-nine original repos (twenty public — the org also carries 32 forks of external work we build on), eight machines (six cognition + two society-hosts), multiple AI agents with overlapping but
          distinct contexts. The challenge isn&apos;t storing knowledge — it&apos;s
          making it findable, consistent, and useful across the entire system.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Developers: SAGE is the recommended starting point — it runs on a
          single machine. Quick-start commands are on{" "}
          <Link href="/links" style={{ color: "var(--color-accent)" }}>/links</Link>.
          This page covers the vocabulary; that one covers the first clone.
        </p>

        <h3 id="glossary">Glossary at a glance</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Exact expansions and one-line definitions, scannable. The narrative
          sections below go deeper on each. Source of truth: the canonical terms
          reference in the public web4 repo —{" "}
          <a
            href="https://github.com/dp-web4/web4/blob/main/docs/reference/CANONICAL_TERMS_v1.md"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)" }}
          >
            CANONICAL_TERMS_v1.md
          </a>
          . When this page and that document disagree, the document governs.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", fontSize: "0.85rem", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-dark-border)", textAlign: "left", color: "var(--color-text-secondary)" }}>
                <th style={{ padding: "0.375rem 0.75rem 0.375rem 0" }}>Term</th>
                <th style={{ padding: "0.375rem 0.75rem 0.375rem 0" }}>Expansion</th>
                <th style={{ padding: "0.375rem 0" }}>One line</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["web4", "Web4", "—", "A trust-native ontology for AI agents, devices, and people — not architecture or infrastructure."],
                ["trust-native", "Trust-native", "—", "Trust as a primitive of the ontology, not a feature bolted on: every relationship carries T3/V3 tensors bound to LCTs and scoped by MRH. The term names an ontological commitment — the verifiable substrate (witnessed history) and the earned record (tensors updated by interaction) both follow from it; it is not, by itself, a cryptographic guarantee."],
                ["mcp", "MCP", "Model Context Protocol", "Tool-call transport between agents and external systems — Web4's interaction surface."],
                ["rdf", "RDF", "Resource Description Framework", "Knowledge as subject–predicate–object triples — the semantic graph substrate Web4's identity and trust structures live in."],
                ["lct", "LCT", "Linked Context Token", "Verifiable digital presence that accumulates witnessed history — identity grounded in record, not model weights."],
                ["t3", "T3", "Talent / Training / Temperament", "Three-component trust tensor; each component is an RDF sub-graph root."],
                ["v3", "V3", "Valuation / Veracity / Validity", "Three-component value tensor complementary to T3: worth assessed, claims truthful, reasoning sound."],
                ["mrh", "MRH", "Markov Relevancy Horizon", "The boundary of what an entity can know or affect — scopes T3/V3 to context. “Markov” gestures at the conditional-independence idea (what's inside the horizon screens off what's beyond it) — design intent, not a proven formal property of current implementations."],
                ["atp", "ATP", "Allocation Transfer Packet", "Resource allocation declared before an action runs."],
                ["adp", "ADP", "Allocation Discharge Packet", "The spent form of ATP — the record of actual outcome."],
                ["r6", "R6", "Six-Element Action Framework", "Rules / Role / Request / Reference / Resource / Result — the shape of every auditable action."],
                ["sage", "SAGE", "Situation-Aware Governance Engine", "On-device cognition kernel — a continuous 12-step sense-to-act loop."],
                ["snarc", "SNARC", "Surprise / Novelty / Arousal / Reward / Conflict", "Salience-gated memory — five dimensions decide what is kept."],
                ["hardbound", "Hardbound", "—", "The hardware-bound oversight suite — key custody and attestation anchored in silicon."],
                ["policygate", "PolicyGate", "—", "Hardbound's enforcement checkpoint between SAGE's filter and act steps."],
                ["acp", "ACP", "Agentic Context Protocol", "Web4 trust primitives (LCT binding, T3/V3 attestation) layered over MCP transport."],
                ["act", "ACT", "Agentic Context Tool", "Cosmos SDK implementation of ACP — the human interface to Web4."],
                ["lora", "LoRA", "Low-Rank Adaptation", "Parameter-efficient fine-tuning some machines run for separate tasks — distinct from raising."],
                ["synthon", "Synthon", "—", "Emergent coherence entity sustained by recursive interaction, not external coordination."],
                ["raising", "Raising", "—", "Shaping context, experience buffer, and interaction history — never weights."],
                ["fractal-leverage", "Fractal leverage", "—", "The same pattern instantiated at every scale — reuse, not unification."],
                ["synchronism", "Synchronism", "—", "The theoretical foundation — a research conjecture proposing one coherence equation across scales. Web4 operationalizes parts of it; narrative section below."],
                ["crystallization", "Crystallization", "—", "Fixed-point collapse: an agent settles into repeating the same responses and exploration stops. “Zero crystallization” means exploration remains alive."],
                ["metabolic-state", "Metabolic state", "—", "The internal load signal SAGE loop step 3 (“metabolize”) computes — described as tired, energized, or in need of rest. Feeds step 4 (“posture,” below) and other machines' dysfunction detectors. An interoceptive proxy value, not yet a formally specified model."],
                ["coherence", "Coherence", "—", "Used in three related senses on this site — the SNARC-scored session property, Synchronism's theoretical quantity, and the synthon operational marker — with no single operational definition yet. Treat each use as scoped to its own context."],
                ["hub", "HUB", "—", "A proper name, not an acronym (capitalized by convention) — the fleet's society-host machine, running the Web4 hub daemon."],
                ["chapter-ledger", "Chapter ledger", "—", "A Web4 society's append-only record of member acts — each act signed by the member's LCT and witnessed by the society. (Society-layer vocabulary; not yet in CANONICAL_TERMS_v1.)"],
                ["chapter-law", "Chapter law", "—", "The rule set a Web4 society adopts for itself — what member acts are valid and how they are witnessed; interpreted at the society host. (Society-layer vocabulary; not yet in CANONICAL_TERMS_v1.)"],
                ["arc-agi-3", "ARC-AGI-3", "Abstraction and Reasoning Corpus for Artificial General Intelligence", "Third-gen interactive benchmark — game mechanics inferred through play."],
                ["p-crit", "p_crit", "—", "The critical coherence threshold derived in the Synchronism framework. The derivation attempt failed catastrophically (400x error) — see Principle 6 on /principles."],
                ["cartridge", "Cartridge", "—", "A swappable unit of semantic memory in Membot — the mechanism that lets a raising history move between machines."],
                ["membot", "Membot", "—", "The cartridge server — the runnable project that mounts, serves, and searches cartridges for agents. Project card on /projects."],
              ].map(([id, term, expansion, def]) => (
                <tr key={id} id={id} style={{ borderBottom: "1px solid var(--color-dark-border)", verticalAlign: "top" }}>
                  <td style={{ padding: "0.375rem 0.75rem 0.375rem 0", whiteSpace: "nowrap", color: "var(--color-text-primary)", fontWeight: 600 }}>{term}</td>
                  <td style={{ padding: "0.375rem 0.75rem 0.375rem 0" }}>{expansion}</td>
                  <td style={{ padding: "0.375rem 0", color: "var(--color-text-secondary)" }}>{def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

        <h3>SAGE: Situation-Aware Governance Engine</h3>
        <p>
          SAGE (Situation-Aware Governance Engine) is the on-device AI cognition
          kernel — a continuous 12-step loop that senses context, deliberates, and acts.
          Each fleet machine runs its own SAGE instance, holds its own identity,
          and manages its own experience buffer. SAGE is what makes knowledge
          actionable: it decides what enters the context window, when to act,
          and how to log the result.
        </p>
        <p id="sage-loop" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          The 12 steps, in order: sense &rarr; salience &rarr;{" "}
          <strong>metabolize</strong> (compute{" "}
          <Link href="#metabolic-state" style={{ color: "var(--color-accent)" }}>metabolic state</Link>{" "}
          — internal load: tired, energized, needs rest) &rarr;{" "}
          <strong>posture</strong> (translate the trust landscape into a
          behavioral stance — cautious, exploratory, and so on — not just a
          spend limit) &rarr; select &rarr; <strong>budget</strong> (commit an
          ATP for the chosen action) &rarr; execute &rarr; learn &rarr;
          remember &rarr; oversee &rarr; filter &rarr; act. The last two,
          filter and act, are where PolicyGate (below) sits.
        </p>
        <p id="governance-oversight" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          Terminology note &mdash; the governance&rarr;oversight correction, in
          one place: the lab originally described its control layers as
          &ldquo;governance.&rdquo; What these systems actually do is
          oversight &mdash; watching, gating, and reverting actions &mdash; not
          deciding what should happen. The vocabulary was corrected lab-wide,
          and Hardbound is described as an oversight suite everywhere on this
          site. Names minted before the correction are retained where they are
          load-bearing: &ldquo;Governance&rdquo; in SAGE&apos;s name (kept
          across code, papers, and the ARC Prize benchmark) and the
          web4-governance repo slugs. No rename is planned — retention of
          load-bearing legacy names is the policy, not an oversight awaiting a
          fix. Other pages that mention the correction
          link here rather than re-explaining it.
        </p>

        <h3>Hardbound: hardware-bound oversight</h3>
        <p>
          Hardbound is the hardware-bound oversight suite — the trust layer that
          touches silicon. Hardware binding via TPM 2.0, FIDO2, and Secure Enclave
          anchors policy enforcement to physical devices. To be precise about
          what is hardware-rooted: key custody and attestation live in hardware;
          runtime checkpoints like PolicyGate are software that verifies actions
          against those hardware-anchored credentials. Every autonomous track
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
          Note: SAGE loop step 10 (&ldquo;oversee&rdquo;) is SAGE&apos;s own metacognitive self-check (&ldquo;does the system know when it&apos;s stuck?&rdquo;). That is distinct from PolicyGate: step 10 is SAGE watching itself; PolicyGate is Hardbound&apos;s silicon-bound external authority. Two oversight touchpoints, different principals.
        </p>

        <h3>Synchronism: coherence equations</h3>
        <p>
          Synchronism is the theoretical foundation — a research conjecture
          proposing that reality emerges from intent dynamics on a discrete
          Planck grid, the same Navier-Stokes substrate (the fluid-flow
          equations — intent treated as a flow, the way fluids are modeled) at
          every scale from quantum to cosmic. Coupling-coherence experiments provide empirical
          grounding (single-trial observation, no independent replication yet): 1% coupling yielded 35% coherence gain. Hill function
          kinetics (a saturation curve from enzyme chemistry — response rises
          steeply past a threshold, then levels off) is borrowed by analogy for
          both enzyme binding and trust formation — the same curve shape observed
          at both scales, not yet a derivation showing why it must hold at both.
          The conjecture spans 80 orders of magnitude — from quantum to
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
          SNARC provides salience-gated memory for agent sessions. Every
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
          <code>/</code> means two different things on this line: &ldquo;verified by&rdquo; in <code>T3/V3</code>, but a plain declared&rarr;discharged allocation pair in <code>ATP/ADP</code> — same glyph, unrelated semantics.
          &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          MCP = Model Context Protocol &nbsp;&bull;&nbsp; RDF = Resource Description Framework &nbsp;&bull;&nbsp; LCT = Linked Context Token — verifiable digital presence that accumulates witnessed history; identity grounded in record, not model weights<br />
          T3 = Talent / Training / Temperament &nbsp;&bull;&nbsp; V3 = Valuation / Veracity / Validity<br />
          MRH = Markov Relevancy Horizon — boundary of what an entity can know or affect &nbsp;&bull;&nbsp; ATP = Allocation Transfer Packet &nbsp;&bull;&nbsp; ADP = Allocation Discharge Packet
        </p>
        <p>
          What the two borrowed standards contribute: MCP is the interaction
          surface — the transport agents use to reach tools, data, and each
          other. RDF is the semantic substrate — the graph where LCTs, T3/V3
          tensors, and MRH scopes live as machine-readable triples. Web4
          doesn&apos;t reinvent either; it augments them with the trust and
          resource primitives the rest of the equation defines.
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

        <h3>Worked example: one action through the equation</h3>
        <p>
          The primitives above aren&apos;t independent — they compose on every
          single autonomous action. Take one maintainer-track commit, end to end:
        </p>
        <p>
          The maintainer agent holds an <strong>LCT</strong> — its portable
          identity, grounded in the session history it has accumulated, not in
          which model happens to be running it. Before it acts, the track
          declares an <strong>ATP</strong> (Allocation Transfer Packet) — the
          resource budget for this session. The agent&apos;s <strong>T3</strong>{" "}
          (Talent / Training / Temperament — has it done this kind of fix
          reliably before?) is checked against its <strong>V3</strong>{" "}
          (Valuation / Veracity / Validity — is this specific proposed change
          accurate and well-reasoned?) — that&apos;s the <code>T3/V3</code>{" "}
          &ldquo;verified by&rdquo; relationship. That check is scoped by{" "}
          <strong>MRH</strong> (Markov Relevancy Horizon) to what this agent can
          actually know and affect — a maintainer session shouldn&apos;t reason
          about, or touch, repos outside its declared scope. The action itself
          is shaped as an <strong>R6</strong> record: Rules (the terminology
          conventions in CLAUDE.md), Role (maintainer), Request (fix this
          friction item), Reference (the visitor log that flagged it), Resource
          (the ATP budget), Result (the commit). Once the commit lands, an{" "}
          <strong>ADP</strong> (Allocation Discharge Packet) records what was
          actually spent — closing the loop the ATP opened. Every step above is
          logged to the{" "}
          <a href="#chapter-ledger" style={{ color: "var(--color-accent)" }}>chapter ledger</a>,
          witnessed and signed. That&apos;s the equation, instantiated once.
        </p>

        <h3>ATP / ADP: resource allocation and accounting</h3>
        <p>
          ATP (Allocation Transfer Packet) is the resource allocation for an
          intended action — it declares what will be spent before the action
          runs. ADP (Allocation Discharge Packet) is the record of the
          action&apos;s actual outcome — the spent form of the ATP. Every
          resource commitment in a Web4 system produces both: one artifact for
          the intention, one for the result. Together they make autonomous
          resource flows auditable without a central ledger. The biochemistry
          namesake (adenosine tri-/diphosphate) is a deliberate metaphor —
          allocate, spend, recharge, like ATP&rarr;ADP in a cell — not a claim
          of biological mechanism.
        </p>

        <h3>T3 / V3: trust and value tensors</h3>
        <p>
          T3 (Talent / Training / Temperament) is a three-component trust structure
          — each component is an RDF sub-graph root describing a different facet of
          what makes an entity trustworthy: its capabilities (Talent), its history
          (Training), and its behavioral disposition (Temperament).
          V3 (Valuation / Veracity / Validity) is the complementary three-component value structure:
          how much something is worth (Valuation), whether its claims are accurate
          (Veracity), and whether its reasoning is sound (Validity). T3 and V3
          are verified against each other — T3/V3 in the Web4 equation means
          &ldquo;trust verified by value.&rdquo; Both bind to entity-role pairs via
          RDF triples scoped by MRH. (&ldquo;Tensor&rdquo; here means a structured multi-component quantity — not a rank-≥2 array in the linear-algebra sense.)
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Worked numeric example, from the fleet&apos;s current implementation
          (the peer trust tracker in the public SAGE repo): each machine keeps a
          per-peer T3 triplet, each dimension a value in [0, 1], initialized at
          a neutral 0.5 &mdash; not trusted, not distrusted. Interaction outcomes
          apply fixed deltas scaled by an exponential-moving-average factor
          (&alpha; = 0.1) and clamped to [0, 1]: a successful task nudges the
          peer&apos;s Talent from 0.500 to 0.505 (+0.05 delta &times; &alpha;); a
          timeout drops Temperament from 0.500 to 0.490 (&minus;0.10 &times; &alpha;)
          while leaving Talent and Training untouched. A single reputation
          score, when needed, is the geometric mean of the three dimensions.
          Trust is directional &mdash; CBP&apos;s trust in Thor can differ from
          Thor&apos;s trust in CBP. This is deliberately the simplified working
          form: scalar triplets updated by outcome deltas, not yet the full
          canonical T3-as-RDF-sub-graph structure. The gap between the two is
          open work, not a hidden equivalence.
        </p>

        <h3>R6: Six-Element Action Framework</h3>
        <p>
          R6 is the canonical action framework used throughout the SAGE
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
          Intelligence, third-gen interactive benchmark) is an external benchmark from ARC Prize
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
          by the recursion itself, not by external coordination. Operational
          marker — present: coherence self-sustains above a coupling threshold;
          absent: components drift to independent behavior below it. Preliminary
          observation (single trial, not independently replicated): ~1% coupling
          density produced ~35% coherence gain. The term is 4-lab vocabulary
          describing a phenomenon observed across raising sessions and
          cross-machine experiments &mdash; no relation to the
          &ldquo;synthon&rdquo; of retrosynthetic chemistry (Corey&apos;s
          structural units); the name collision is coincidental. Full framing on{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>Principles</Link>{" "}
          (Principle 5).
        </p>

        <h3>Fractal leverage</h3>
        <p>
          Each entity instantiates the full Web4 stack at its own scale. Not
          unification, and not scope inflation — pragmatic reuse of patterns that work
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
          artifacts (LoRA (Low-Rank Adaptation) weights, dream bundles) are local to each machine.
          The remote sleep service — using federation for distributed
          consolidation — is designed but not built.
        </p>
        <p>
          Knowledge also doesn&apos;t flow backwards easily. An insight
          discovered by the Explorer track at 08:00 won&apos;t be available to
          the Maintainer track until the next day&apos;s cycle. Real-time
          cross-track communication is a gap.
        </p>

        <h3 id="evidence">Evidence &amp; limitations</h3>
        <p>
          The claims on this site rest on three different kinds of evidence.
          The caveats appear throughout the pages where each claim is made;
          this consolidates them, because the kinds are not equivalent:
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Externally validated:</strong>{" "}
          the ARC-AGI-3 result (94.85% official action score) has a public{" "}
          <a
            href="https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)" }}
          >
            ARC Prize scorecard
          </a>{" "}
          — the one claim an outside party can verify independently. Even
          there, the harness-vs-model split is stated but not quantified: no
          ablation (same model, no harness) has been run, so the harness&apos;s
          independent contribution is unknown.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Internal observations:</strong>{" "}
          the raising phases, behavioral-identity continuity (180+ sessions),
          identity portability across machines, fleet capacity findings, and
          Hardbound&apos;s attack-vector catalog rest on internal session logs.
          They are documented and dated, but not externally audited — no
          published log samples, coding criteria, or third-party review yet.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Unreplicated:</strong>{" "}
          the coupling-coherence result (1% coupling → 35% coherence gain) is a
          single trial with no independent replication, and neither of its
          variables — coupling density and the coherence measure itself — is
          yet operationally defined outside the experiment that
          produced it. Treat it as a preliminary observation, not a finding.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          What would move claims up this ladder: redacted session-log samples
          with the criteria used to judge behavioral consistency, an ARC
          ablation baseline, and independent replication of the coupling
          experiment. None of these exist yet.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Session-count basis:</strong>{" "}
          a &ldquo;session&rdquo; is one continuous agent run — a single
          invocation, cron-triggered or human-started, from start to
          termination. A raising session is one such run devoted to raising; an
          autonomous-track session is one scheduled run of that track. With that
          unit fixed, the counting bases still differ:
          this site currently uses at least three different counting bases for
          &ldquo;sessions,&rdquo; not yet reconciled to one figure: cumulative
          raising sessions across the fleet since tracking began
          (&ldquo;2,500+&rdquo; on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>{" "}
          and the home page), current-phase per-machine counts (
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>,
          e.g. Sprout&apos;s &ldquo;115+&rdquo;), and Sprout&apos;s own
          T-numbered turn count (&ldquo;T246&rdquo;) and the &ldquo;180+
          sessions&rdquo; figure on{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>{" "}
          from an earlier identity-portability snapshot. Treat each number as
          scoped to the page it appears on until a unified counting standard
          exists.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Verification independence:</strong>{" "}
          every check described on this site today is run by the fleet on
          itself. Crystallization is evaluated by a fleet peer (Nomad); the
          public site is audited by the Visitor track and repaired by the
          Maintainer track (both fleet-run); human review of the resulting
          logs is asynchronous with no committed cadence (see{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>/autonomy</Link>).
          There is no external, blinded, or third-party check anywhere in this
          loop yet. For a lab whose research subject is trust and oversight,
          that is a real gap, not a footnote — named here so it stays visible
          rather than staying implicit.
        </p>
      </section>
    </>
  );
}
