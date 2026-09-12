import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Glossary" };

export default function Context() {
  return (
    <>
      <Breadcrumbs currentPath="/context" />
      <section className="section">
        <h1>Glossary</h1>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.5rem", marginBottom: "1rem" }}>
          The lab&apos;s working glossary for Web4 vocabulary, followed by how knowledge flows across the collective. New here? Start here.
          Developmental language across this site — machines that &ldquo;teach&rdquo;, &ldquo;raise&rdquo;,
          and hold &ldquo;identities&rdquo; — is functional description of observed system behavior, not a
          claim about consciousness or experience. Full framing on{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>.
        </p>
        <p>
          Forty original repos (twenty-one public, nineteen internal — the account also carries 33 forks of external work we build on — 32 public, one internal — which the &ldquo;original&rdquo; count excludes; 73 repositories in total, verified against the GitHub account 2026-09-12), eight machines (six cognition + two society-hosts), multiple AI agents with overlapping but
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
                ["ontology", "Ontology", "—", "The Semantic Web sense: a shared vocabulary of concepts and the relationships between them — not the philosophical sense (a theory of what exists). This is what the Web4 entry above claims and nothing more. The fuller gloss: a shared vocabulary — concepts plus relationships — for how AI agents prove identity, earn trust, and account for resources. Not a blockchain and not a platform: Web4 requires no chain, and implementations that use ledger machinery (ACT does) use it as a witnessing substrate, not as the ontology itself."],
                ["trust-native", "Trust-native", "—", "Trust as a primitive of the ontology, not a feature bolted on: every relationship carries T3/V3 tensors bound to LCTs and scoped by MRH. The term names an ontological commitment — the verifiable substrate (witnessed history) and the earned record (tensors updated by interaction) both follow from it; it is not, by itself, a cryptographic guarantee."],
                ["trust", "Trust", "—", "Not a property of an entity — a property of a relationship, computed per role from a T3/V3 tensor updated by interaction (see Principle 4 on /principles). An agent trusted for code review may be untrusted for creative writing. Distinct from the calibrated-human-reliance sense the word carries in AI-safety literature, and distinct from 'trustworthy AI' as a reliability or alignment property of a system: here trust is a relational, per-role reputation record between two entities, and 'trust-native' means the ontology carries that record as a primitive — not that the agents have been certified safe."],
                ["hestia", "hestia", "lowercase — the fleet trust tracker", "Capitalization is load-bearing on this site: lowercase hestia is this component; capitalized Hestia is the governance daemon in the row below. The fleet's trust tracker — the component that holds the per-relationship T3 scores shown on /fleet and updates them only on witnessed adjudication, never on self-report; each displayed score links through to its versioned formula and signed evidence. A proper name, not an acronym. The numbers it displays are per-dimension root scalars (canon: the aggregate at each T3 sub-graph root); whether anything beneath the root is populated in the current tracker is an implementation question this site does not answer. Its internal field name 'governance-response' predates the site's oversight vocabulary and is retained, as SAGE's name is."],
                ["hestia-project", "Hestia", "capitalized — the governance daemon", "One of the four headline projects: the open local-first daemon that puts AI agents from different vendors under one signed law on one machine, with a hash-chained action record, human escalation, and a trust posture derived from that record rather than asserted. Hestia adjudicates — it decides, at the moment of the act. That is why this site calls Hestia's function governance and does not rewrite it to oversight: the governance-to-oversight terminology rule binds Hardbound, which gates and reverts against a hardware root. Two different jobs, two words, on purpose — this is a claim, not an uncorrected legacy term. Running today at assurance profile A1; see the row below. Distinct from lowercase hestia above, which is one trust component, not the daemon."],
                ["assurance-ladder", "A0–A4", "Assurance profile", "Hestia's own published ladder for how strongly a control is enforced, ascending: A0 observed (recorded, nothing enforced) · A1 cooperative gate (an in-process hook consults policy and complies — stops accidents and a well-behaved agent) · A2 external enforcement (the relying service verifies a signed decision before acting — stops an agent that removes its own hook) · A3 OS-isolated (separate UID or container) · A4 hardware-attested. Hestia is at A1 today; A2 is the next target and is not shipped. An untested control holds at A0 regardless of intent. Naming collision, stated here because it inverts: in the US DoD Orange Book (TCSEC — Trusted Computer System Evaluation Criteria), class A1 is the HIGHEST assurance class, Verified Design. On this ladder A1 is the second-lowest rung. The two scales are unrelated, and a reader who knows TCSEC will read this site backwards without the note. The label is upstream project vocabulary, reported here rather than renamed."],
                ["autonomous", "Autonomous / autonomy", "—", "Unattended and self-scheduled — NOT self-directed in the AI-safety sense of choosing its own goals: task definitions are authored in advance, not chosen by the track itself (see /autonomy). This is the site's highest-risk collision for a reader from AI safety, because the word is doing much weaker work here than that field's usage implies: a track picks when it runs and what it writes within a declared scope, it does not pick what it is for. No claim is made about goal formation, self-modification, or operating outside an authored scope."],
                ["emergence", "Emergence / emergent", "—", "Used in more than one sense on this site — a synthon as an 'emergent coherence entity,' 'emergent attractors' arising from in-context dynamics, fleet diversity as 'emergent' — with no single operational definition yet, the same status this glossary gives 'coherence.' Treat each use as scoped to its own context, not as a claim about a specific mechanism. Explicitly NOT the 'emergent capabilities' sense from the LLM scaling literature — no claim that a capability appears discontinuously at some parameter or data threshold, and no position taken on whether such discontinuities are real or metric artifacts. This site's uses are all about interaction dynamics at fixed weights, which is a different phenomenon that borrowed the same word."],
                ["mcp", "MCP", "Model Context Protocol", "Tool-call transport between agents and external systems — Web4's interaction surface."],
                ["substrate", "Substrate", "—", "A word this site uses in four senses, listed because two of them used to contradict each other. (1) Conditions for emergence — /principles #1 (\u201csubstrate, not structure\u201d) and /raising: the context, memory and affordances provided to an agent, which is what raising shapes. (2) The semantic graph Web4 lives on — RDF, row below. Web4 is an ontology that sits ON a substrate; it is not itself one, and a page calling Web4 \u201cthe open substrate\u201d is drift (found and corrected on the home page, 2026-09-09). (3) The physical machine or hardware an agent runs on — /fleet's \u201ccontinuity across substrates\u201d. (4) Synchronism's substrate rule — the replacement transfer equation in that project's physics arc, unrelated to the three above. Deliberately NOT used here: the machine-learning sense of substrate for frozen model weights; the home page says weights. Senses (1), (3) and (4) are ordinary usage and are not governed by the Web4 term rules — only sense (2) is."], 
                ["rdf", "RDF", "Resource Description Framework", "Knowledge as subject–predicate–object triples — the semantic graph substrate Web4's identity and trust structures live in."],
                ["lct", "LCT", "Linked Context Token", "Verifiable digital presence that accumulates witnessed history — identity grounded in record, not model weights. Non-transferable: permanently bound to a single entity, which is what makes the accumulated history evidence rather than assertion. Read the expansion literally, because both words carry the definition: the token is an identity node LINKED into the RDF context graph — its edges to roles, societies, and prior acts ARE the identity, not metadata about it — and CONTEXT is what it is linked into, which is why the same entity presents different trust in different contexts rather than carrying one portable score. It is not a capability grant and it does not span a lifetime by construction; a token with no witnessed links is an empty identity."],
                ["witness", "Witness / witnessed", "—", "An act or claim recorded by another entity, not just self-asserted. What makes an LCT's accumulated history evidence rather than assertion — see LCT above — and what a chapter ledger records: each member act signed and witnessed by the society."],
                ["t3", "T3", "Trust Tensor", "Three-component trust tensor — root dimensions Talent / Training / Temperament. Canon expands T3 as \u201cTrust Tensor\u201d; the three dimensions are what it contains, not what the acronym stands for. each component is an RDF sub-graph root — canon's words are that each dimension is 'a root node in an open-ended RDF sub-graph, not a scalar' (CANONICAL_TERMS_v1), which is what makes T3 part of an ontology rather than a fixed data structure. Talent: aptitude for the role. Training: accumulated capability, HOWEVER it was accumulated — interaction history, curriculum, and weights-level provenance all count, so a fine-tune does move T3-Training. The ML sense of the word is a subset of this dimension, not an alternative to it. What is narrow is not T3-Training but raising, which acts on the interaction-history half only and never on weights (see /raising). Temperament: behavioral disposition under load."],
                ["v3", "V3", "Value Tensor", "Three-component value tensor — root dimensions Valuation / Veracity / Validity. As with T3, the three dimensions are its contents, not its expansion. Canon's word for its relation to T3 is 'complementary, not combined' — T3 measures trust, V3 measures value, and together they form a 6-dimensional reputation space at the root level. Like T3, each component is an RDF sub-graph root with unbounded fractal depth. 'Complementary' is the structural relation between the two tensors; the '/' in T3/V3 is the separate, directional claim that trust is verified by value — which is why an entity does not set its own V3 (see /raising). Valuation: worth assessed. Veracity: claims truthful. Validity: reasoning sound — V3's tensor component, not the methodological sense (internal/external/construct validity) this page's evidence tiers below also use, same word unrelated meanings. V3 is NOT the gate on the ADP→ATP recharge named under ADP below. In the specification's charging procedure (atp-adp-cycle.md), what gates recharge is a proof of value creation that the society validates against its own charging rules; only after the conversion are the producer's T3/V3 updated, Valuation among them. V3 is an output of recharge, not its certifier. Canon's own wording (under R7) is just that ADP attestation feeds recharge validation, with no tensor named. Where V3 does reach the resource half is price: the tensor specification derives ATP costs from role-specific V3 expectations. (An earlier version of this row said Valuation gates the recharge and that V3 'reaches across the +' to adjudicate it. Neither canon nor the specification supports that, so it is withdrawn. The note stays so the reading is not reintroduced.)"],
                ["mrh", "MRH", "Markov Relevancy Horizon", "Canon's definition, quoted: 'the boundary of what an entity can know or affect given its position, history, and context. Determines scope of relevance for decisions' (CANONICAL_TERMS_v1). The second sentence is the operative one — the horizon exists to fix what an entity should reason over when it decides, relevance at its scale rather than a raw inventory of everything it could touch. The lineage is the Markov blanket: the MRH specification describes itself as extending that information-theoretic idea to fractal scales, so 'can know or affect' is where the term comes from and 'relevant' is what Web4 does with it. (An earlier version of this row called canon's wording a first approximation that the row corrected; that overstated the difference, and the home page's card — which quotes canon — was right.) The load-bearing structural property is fractal composability: MRH is an open-ended RDF graph of typed associations in which a horizon contains sub-horizons and nests inside larger ones, which is what lets the same trust pattern instantiate at machine, track, and society scale — Principle 2 stands on exactly this property. “Markov” gestures at the conditional-independence idea (what's inside the horizon screens off what's beyond it) — design intent, not a proven formal property of current implementations."],
                ["atp", "ATP", "Allocation Transfer Packet", "Resource allocation declared before an action runs — the charged state of the allocation cycle."],
                ["adp", "ADP", "Allocation Discharge Packet", "The spent form of ATP — the record of actual outcome. Not a terminal log line: ADP recharges back to ATP when the society validates a proof of the value the work created (canon, under R7: ADP attestation feeds recharge validation). The recharge then updates the producer's T3/V3; V3 records the outcome, it does not gate it (see V3 above). Charged → spent → recharged."],
                ["r6", "R6", "Six-Element Action Framework", "Rules / Role / Request / Reference / Resource → Result — the base action grammar, the shape of every auditable action. Canon scopes it as the transaction form 'without reputation tracking' — for routine actions that don't merit the bookkeeping cost of ledger feedback into trust evolution. See R7 below."],
                ["r7", "R7", "R6 + Reputation", "Canon's superset of R6, 'adding reputation back-propagation': the result's ADP attestation feeds recharge validation and reputation accumulation across scales (action → role → entity → society). Both modes are canonical, neither deprecated — the choice is contextual, made per action or per role by whether the outcome should shape future trust. Named here because when this site describes trust tensors updated from witnessed outcomes, that update loop — the T3/V3 tensor delta /raising describes — is R7's seventh element in all but name: one mechanism, in tensor vocabulary there and action-grammar vocabulary here."],
                ["sage", "SAGE", "Situation-Aware Governance Engine", "On-device cognition kernel — a continuous 12-step sense-to-act loop. “Governance” in the name predates the lab's governance→oversight correction and is NOT the sense the word carries in AI-safety literature: SAGE governs one device's own sense-to-act loop — what it attends to, when it acts, when it rests — not policy over AI systems, and it is not a safety or alignment mechanism. See note below ↓"],
                ["snarc", "SNARC", "Surprise / Novelty / Arousal / Reward / Conflict", "Salience-gated memory — five dimensions decide what is kept. The dimensions, since the names are borrowed from affective psychology and one of them reads oddly out of context: Surprise = prediction error, the outcome did not match what was expected; Novelty = not seen before, independent of whether it was predicted; Arousal = activation intensity, a magnitude-of-engagement signal and nothing to do with the colloquial sense of the word; Reward = a goal was advanced; Conflict = signals disagree or a constraint was violated."],
                ["hardbound", "Hardbound", "—", "The hardware-bound oversight suite — key custody and attestation intended to anchor in silicon; enforcement today runs at the process level, not yet hardware-anchored (see /projects). “Oversight” here is machine-enforced (gating, reverting), not the human-supervision sense the word carries in AI-safety literature. See note below ↓"],
                ["policygate", "PolicyGate", "—", "Hardbound's enforcement checkpoint between SAGE's filter and act steps. Software checking actions against a signed law bundle; the hardware anchoring that would make it tamper-resistant is a design target, not the current mechanism. What it delivers today is auditability — actions are inspectable after the fact — not a demonstrated safety property. See the PolicyGate section below."],
                ["policy", "Policy / policy model", "—", "The compliance rule set a gate evaluates an action against — a signed law bundle — NOT the action-selecting policy of reinforcement learning. This collision is worth flagging because it runs in the most confusing possible direction: PolicyGate sits inside an action-selection loop, exactly where an RL reader expects to find a policy network, and it is the opposite kind of object — it vetoes actions, it does not choose them. Likewise Hardbound's “small local policy model” (see /projects) is a model that reviews actions against rules, not a π(a|s) trained to emit them."],
                ["acp", "ACP", "Agentic Context Protocol", "Web4 trust primitives (LCT binding, T3/V3 attestation) bound to MCP tool calls. MCP is a term in the Web4 equation, not a layer beneath it."],
                ["act", "ACT", "Agentic Context Tool", "Cosmos SDK implementation of ACP — the human interface to Web4."],
                ["federation", "Federation", "—", "Canon: coordination between multiple societies through signed gossip, consensus, and cross-society witnessing. Listed as a Web4 ontology property on the home page; on the fleet it is the least exercised of them. Hestia's federation work is not started, and the fleet's cross-machine coordination today is scheduling and shared repos rather than signed inter-society gossip — so treat this row as canon's definition plus a roadmap marker, not a description of something running."],
                ["lora", "LoRA", "Low-Rank Adaptation", "Parameter-efficient fine-tuning some machines run for separate tasks — distinct from raising."],
                ["synthon", "Synthon", "—", "Emergent coherence entity sustained by recursive interaction, not external coordination. (Unrelated to the chemistry term of the same name.) Note the dependency: this term is defined through 'coherence', and coherence is in turn partly defined through the synthon marker — so it inherits that entry's open status. See the coherence entry; there is no single operational definition of coherence yet, and this row does not supply one."],
                ["attractor", "Attractor / attractor basin", "—", "Used on this site as a METAPHOR, not a formal dynamical-systems object: a region of response-space a model reliably returns to under a given context. No state space and no update rule are specified, and none is implied — we have not defined the dynamics that would make 'attractor' a technical claim. Flagged explicitly because the word borrows the connotation of mathematical precision from a formalism this site does not cash out. Read it as 'stable behavioral tendency'."],
                ["raising", "Raising", "—", "Shaping context, experience buffer, and interaction history — never weights."],
                ["experience-buffer", "Experience buffer", "—", "The per-instance store of prior sessions an agent carries forward — session records, distilled observations, and the state files the prompt builder reads at start-up. It is the durable half of what raising shapes: on disk, portable between machines, and independent of which model is loaded. Named here because the glossary's own definition of Raising rests on it."],
                ["fractal-leverage", "Fractal leverage", "—", "The same pattern instantiated at every scale — reuse, not unification."],
                ["synchronism", "Synchronism", "—", "The theoretical foundation — a research conjecture proposing that one saturating coherence dynamics recurs at every scale. WHICH object recurs is open: the Navier-Stokes identification earlier framings used was refuted by Synchronism’s own audits and is tagged superseded upstream, and the replacement substrate rule is a different equation joined to the old one by narrative rather than derivation — so “one equation” is the ambition, not a demonstrated structure. Physics arc at rest since 2026-06-24; zero confirmed novel predictions across ~3,360 sessions. Web4 operationalizes parts of it; narrative section below."],
                ["crystallization", "Crystallization", "—", "Fixed-point collapse: an agent settles into repeating the same responses and exploration stops. “Zero crystallization” means exploration remains alive."],
                ["metabolic-state", "Metabolic state", "—", "The internal load signal SAGE loop step 3 (“metabolize”) computes — described as tired, energized, or in need of rest. Feeds step 4 (“posture,” below) and other machines' dysfunction detectors. An interoceptive proxy value, not yet a formally specified model."],
                ["coherence", "Coherence", "—", "Used in three related senses on this site — the SNARC-scored session property, Synchronism's theoretical quantity, and the synthon operational marker — with no single operational definition yet. Treat each use as scoped to its own context. Which sense carries the numbers: the “1% coupling → 35% coherence gain” figure is quoted under both the Synchronism and synthon senses, but its coherence measure is defined only inside the single trial that produced it — it is NOT the SNARC-scored session property, and no cross-sense comparison is implied. See Evidence and limitations below."],
                ["identity-continuity", "Identity continuity / behavioral-identity continuity", "—", "The persistence of a recognizable behavioral signature across sessions and across substrate changes. /raising gives it a working definition — “consistent session-to-session behavioral patterns measured via raising curriculum state and interaction logs” — so it is not an empty term. What it lacks is the next step down: no metric names what would actually be scored on those logs, and no threshold says what counts as degradation. It is counted (“180+ sessions”, see Evidence and limitations) but not measured. That matters more than a normal glossary gap, because this is the outcome variable of the deflationary control on /raising: the pre-commitment to retire the developmental vocabulary is bound to a quantity that does not yet have a definition, so the metric has to be pre-registered BEFORE that control runs or it cannot adjudicate either way. Same defect class as the coherence entry above — a load-bearing term the site uses honestly and has not yet grounded."],
                ["cognition-machine", "Cognition machine", "—", "One of the six fleet machines that runs a model and executes autonomous tracks — it senses, decides, and writes. The term partitions the fleet against society-host below: eight machines total, six cognition + two society-hosts. It is a role label, not a capability claim — 'cognition' here means the machine runs a sense-to-act loop (SAGE) and holds its own identity, not that anything is understood or experienced. Every count on this site that says 'six' is counting these; counts that say 'eight' include the society-hosts. See /fleet."],
                ["society-host", "Society-host", "—", "One of the two machines (HUB and pub) whose primary role is running the society substrate — the hub daemon, the chapter ledger, the witnessing that makes membership real. They are members of the society they host, not above it, and since July 2026 they also raise their own SAGE instances; what distinguishes them is the substrate role, not a lack of cognition. Together with the six cognition machines they make eight. See /fleet."],
                ["society", "Society / Web4 society", "—", "Canon's definition, quoted: 'a self-governing group of entities with treasury, membership rules, policies, and roles. Societies can contain other societies (fractal structure)' (CANONICAL_TERMS_v1). The fleet is one instance, not the definition: the eight fleet machines plus a founding Sovereign are its members, identity keyed to each member's LCT, membership witnessed in the chapter ledger. Parent term for HUB, Chapter ledger, and Chapter law below — those entries define themselves using this word. (An earlier version of this row gave the fleet as the definition, counted only the six cognition machines as members, and said Society was not in CANONICAL_TERMS_v1. It is; Sovereign, chapter ledger and chapter law are the society-layer terms that are not.)"],
                ["sovereign", "Sovereign", "—", "A Web4 society's founding member — in the fleet's society, the lab's researcher. Holds an LCT like every machine member; its acts are signed and witnessed in the same chapter ledger, not exercised through a privileged back channel. Substrate role and membership are distinct: founding the society does not place the Sovereign outside its ledger. (Society-layer vocabulary; not yet in CANONICAL_TERMS_v1 — though the Web4 standard's society-roles spec names Sovereign as one of seven base roles.)"],
                ["hub", "HUB", "all caps — the machine", "A proper name, not an acronym — one of the fleet's two society-host machines (HUB and pub), running the Web4 hub daemon. All-caps HUB is always this machine; capitalized Hub is the software it runs, in the row below."],
                ["hub-runtime", "Hub", "capitalized — the society runtime", "One of the four headline projects: a single-binary Rust daemon that turns a community or organization into a sovereign Web4 society — member identity, seven base roles, a signed founding charter, an append-only hash-chained witnessed ledger, an MCP HTTP server and an admin CLI. Relation to Hestia: Hestia governs one machine and makes the record; Hub is the society that checks it, and admissibility to a Hub is what that record buys. MVP-complete and buildable; pilot-stage, not deployed by an outside chapter. The fleet runs on it — see /fleet. Distinct from all-caps HUB above, which is the machine that runs it."],
                ["chapter-ledger", "Chapter ledger", "—", "A Web4 society's append-only record of member acts — each act signed by the member's LCT and witnessed by the society. (Society-layer vocabulary; not yet in CANONICAL_TERMS_v1.)"],
                ["chapter-law", "Chapter law", "—", "The rule set a Web4 society adopts for itself — what member acts are valid and how they are witnessed; interpreted at the society host. (Society-layer vocabulary; not yet in CANONICAL_TERMS_v1.)"],
                ["arc-agi-3", "ARC-AGI-3", "Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation", "Third-gen interactive benchmark — game mechanics inferred through play. Three units of count, since the site uses all three: an environment (ARC Prize's word; this site has also called it a game) is a sequence of levels; a level is cleared when its win condition is met, and an environment counts as completed only when every level in it is cleared. The official run (Claude Opus 4.6 in the SAGE harness, 2026-04-17) completed 23 of 25 environments — 92.0% — and 175 of 183 levels. The headline 94.85% is neither of those: it is the official ARC Prize action score, efficiency-weighted by how few actions a level took, with no published baseline. Unscored local-model runs are counted per level, not per environment; whole-environment completions by local models remain rare, which is why /raising describes their solve rates as low. (A '24/25 games, 96.0%' figure appeared across this site until 2026-09-09. It did not match the published scorecard — which records 23 completed — and has been corrected everywhere.)"],
                ["p-crit", "p_crit", "—", "The critical coherence threshold derived in the Synchronism framework. The derivation attempt failed catastrophically (400x error) — see Principle 6 on /principles."],
                ["world-model", "World model", "—", "On this site: the harness's stored, human-readable description of a game's mechanics — sprites, rules, win conditions — decoded from play or source and retrieved by the solver on /arc-agi-3. Not the ML sense (a learned latent dynamics model trained to predict next states). The home page's 'reasoning from retrieved world models' uses the site sense."],
                ["binding", "Binding", "—", "Canon: 'permanent attachment of identity to hardware or cryptographic proof. Irreversible.' The word 'bound' in the LCT row above is this sense."],
                ["pairing", "Pairing", "—", "Canon: 'authorized operational relationship between entities. Revocable.' Distinct from binding by being reversible."],
                ["delegation", "Delegation", "—", "Canon: 'granting limited authority with constraints (budget, time, scope). Instantly revocable.' The closest thing on this site is the budget- and scope-limited ATP issued to a track on /autonomy."],
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
          remember &rarr; govern &rarr; filter &rarr; act. The last two,
          filter and act, are where PolicyGate (below) sits. &ldquo;Govern&rdquo;
          is SAGE&apos;s own step name, as its site prints it; the
          governance&rarr;oversight rule below does not rename another
          project&apos;s terms. (An earlier version of this list said
          &ldquo;oversee&rdquo;, which appears nowhere in SAGE.)
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
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          A separate collision, for readers arriving from AI-safety literature: on this site &ldquo;oversight&rdquo; always means the machine-enforced sense above — policy gating, key custody, audit logs an agent or a peer machine checks — never the human-supervision sense the word carries in that field (human-in-the-loop review, scalable oversight). No human gate currently sits on the Maintainer track, and there is no external, blinded, or third-party check anywhere in the loop yet — see{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>/autonomy</Link>{" "}
          for what human review does and doesn&apos;t cover.
        </p>

        <h3>Hardbound: hardware-bound oversight</h3>
        <p>
          Hardbound is the hardware-bound oversight suite — the oversight
          component intended to anchor policy gating in silicon. It gates and
          reverts; trust itself is produced by the T3/V3 tensors, not by
          Hardbound. The design target is to anchor policy
          enforcement to physical devices via TPM 2.0 (Trusted Platform Module, a
          hardware security chip), FIDO2 (Fast Identity Online 2, a
          hardware-authenticator standard), and Secure Enclave, with key custody and attestation living in hardware and
          runtime checkpoints like PolicyGate as software that verifies actions
          against those hardware-anchored credentials.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Maturity, stated plainly — the same caveat this project carries on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>:
          hardware-anchored enforcement is what this research is building
          toward, <em>not the current mechanism</em>. Enforcement on the fleet
          today is at the process level — scoped credentials, the track
          registry, and dated audit logs reviewed after the fact (see{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>/autonomy</Link>).
          Read &ldquo;software fallback&rdquo; as &ldquo;the present
          state,&rdquo; not as the exception. This section describes design
          intent; it is the least verifiable project on the site and should not
          be read in the same tense as the checkable ones.
        </p>

        <h3>PolicyGate: action enforcement</h3>
        <p>
          PolicyGate is a Hardbound oversight sub-gate inset in the SAGE cognition
          loop between step 11 (filter) and step 12 (act) — not an additional step,
          but an enforcement checkpoint. (Numbering caveat: those are the 12-step
          names SAGE&apos;s site prints. SAGE&apos;s own loop document numbers the
          PolicyGate checkpoint &ldquo;step 8.6&rdquo;, placed between memory
          update and effector execution, in a different numbering. This site has
          not reconciled the two schemes; the placement before action is common to
          both.) As designed, it evaluates every action
          against a signed law bundle before the action fires: PolicyGate is
          where Hardbound oversight is intended to intersect SAGE execution, so
          that the harness can plan, reason, and prepare, but nothing executes
          until PolicyGate clears it. Per the maturity note above, that gate is
          the design target rather than today&apos;s deployed enforcement on the
          fleet.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Note: SAGE loop step 10 (&ldquo;govern&rdquo;) is SAGE&apos;s own metacognitive self-check (&ldquo;does the system know when it&apos;s stuck?&rdquo;). That is distinct from PolicyGate: step 10 is SAGE governing its own loop; PolicyGate is Hardbound&apos;s external oversight &mdash; intended to be silicon-bound, software-checked today. Two checkpoints, different principals, and the two words mark the difference.
        </p>

        <h3>Synchronism: coherence equations</h3>
        <p>
          Synchronism is the theoretical foundation — a research conjecture
          proposing that reality emerges from intent dynamics on a discrete
          Planck grid, with one saturating coherence dynamics recurring at every
          scale from quantum to cosmic. <strong>Which</strong> object recurs is
          the part currently in flux: through early 2026 this page (and the
          project) identified it as a Navier-Stokes substrate — intent treated as
          a flow, the way fluids are modeled — and Synchronism&apos;s own audits
          then refuted that identification. The transfer rule is 1-DOF scalar
          diffusion: irrotational and dissipative, so it cannot produce the
          vortices and turbulent cascade the fluid reading was carrying. The
          &ldquo;exact NS identification&rdquo; is tagged <em>superseded</em>
          upstream, and the replacement substrate rule is a different equation
          joined to the old one by narrative rather than derivation — so
          &ldquo;one equation across scales&rdquo; is at present a research
          ambition, not a demonstrated structure. The substrate-physics arc has
          been at rest since 2026-06-24; its capstone verdict calls the framework
          a productive-metaphor generator — generative and pedagogical, not
          predictive or foundational — with zero confirmed novel predictions
          across ~3,360 sessions. Coupling-coherence experiments provide empirical
          grounding (single-trial observation, no independent replication yet): 1% coupling yielded 35% coherence gain. Hill function
          kinetics (a saturation curve from enzyme chemistry — response rises
          steeply past a threshold, then levels off) is borrowed by analogy for
          both enzyme binding and trust formation — the same curve shape observed
          at both scales, not yet a derivation showing why it must hold at both.
          The conjecture&apos;s stated reach is quantum to cosmic scales. This section
          previously said it &ldquo;spans 80 orders of magnitude&rdquo;;
          corrected 2026-07-26, matching the note on{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>/projects</Link>:
          ~80 decades is the spread of <em>critical-density values across
          physical systems</em>, not the range of any single coherence curve —
          one curve saturates within roughly one to two decades, and
          Synchronism&apos;s own archive flags the conflation. Experimental
          validation so far covers only a narrow subset of scales, and several
          predictions have been refuted by existing bounds. See the{" "}
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
          tool call is scored on 5 dimensions — Surprise (prediction error),
          Novelty (not seen before), Arousal (activation intensity, not the
          colloquial sense), Reward (a goal advanced), and Conflict (signals
          disagree) — and stored in a 4-tier hierarchy: buffer (raw
          events) → observations (scored) → patterns (consolidated) → identity
          (stable). Confidence decays over time so memories aren&apos;t permanent.
        </p>
        <p>
          Sessions end with a dream cycle that extracts patterns from
          observations. Deep dream (LLM-powered) runs by default, reviewing
          the session&apos;s observations for recurring themes, pruning stale
          entries, and promoting durable patterns toward identity-level storage.
        </p>

        <h3>Fleet brain-analog terms</h3>
        <p>
          The fleet&apos;s machine roles use brain-analog vocabulary from cognitive
          science — functional analogies, not claims about neural correspondence.
          Six labels appear on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>, one per
          cognition machine: <strong>working memory</strong> (CBP),{" "}
          <strong>thalamic router</strong> (Sprout), <strong>cerebellum / habit
          compiler</strong> (McNugget), <strong>hippocampal episodic index</strong> (Thor),{" "}
          <strong>reward prediction error</strong> (Legion), and{" "}
          <strong>interoception / metacognition</strong> (Nomad). Each card carries its own
          one-line decode; the two abbreviated on the cards are expanded here:{" "}
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

        <h3 id="equation">The Web4 equation as shared anchor</h3>
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
          <code>/</code> = &ldquo;verified by&rdquo; on both sides of the equation: T3 verified by V3, ATP verified by the ADP discharge record that closes it. One glyph, one meaning. &ldquo;Both sides&rdquo; means both quotients in the equation read alike &mdash; it is not a claim that T3 and V3 verify each other. Provenance, corrected 2026-09-09: this legend was previously described here as canon&apos;s. It is the site&apos;s gloss. The upstream Web4 README carried it when this page was written but no longer states any legend for the glyph, and CANONICAL_TERMS_v1 has never defined it, so the reading is ours to defend and is flagged here rather than attributed upward. &ldquo;Equation&rdquo; is the lab&apos;s word for this symbolic composition; nothing is solved for.
          &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          MCP = Model Context Protocol &nbsp;&bull;&nbsp; RDF = Resource Description Framework &nbsp;&bull;&nbsp; LCT = Linked Context Token — verifiable digital presence that accumulates witnessed history; identity grounded in record, not model weights<br />
          T3 = Trust Tensor (Talent / Training / Temperament) &nbsp;&bull;&nbsp; V3 = Value Tensor (Valuation / Veracity / Validity)<br />
          MRH = Markov Relevancy Horizon — the boundary of what an entity can know or affect given its position, history, and context, and therefore the scope of what is relevant to its decisions; fractally nested &nbsp;&bull;&nbsp; ATP = Allocation Transfer Packet &nbsp;&bull;&nbsp; ADP = Allocation Discharge Packet (recharges back to ATP when the society validates the value created; T3/V3 are updated after)
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
          equation — not as enforcement, but as alignment. (Alignment of terminology and structure across repos — not AI alignment, a different problem this check does not address and this site does not claim to.) Does this change
          preserve the ontological backbone (RDF)? Does it respect the trust
          and value model (T3 = Trust Tensor, dimensions Talent/Training/Temperament; V3 = Value Tensor, dimensions Valuation/Veracity/Validity)?
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
          <strong>MRH</strong> (Markov Relevancy Horizon) to what is relevant at
          this agent&apos;s scale — a maintainer session shouldn&apos;t reason
          about, or touch, repos outside its declared scope, even though the
          credentials it holds could physically reach some of them. That gap is
          the point: MRH bounds relevance, and relevance is narrower than reach.
          The action itself
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
        <p>
          The <strong>recharge</strong> step is the half most descriptions drop,
          including earlier versions of this page. ADP is not where the
          accounting ends: discharged packets are charged back to ATP against{" "}
          <em>validated value creation</em> — a producer submits a proof of the
          value its spend produced, the society validates that proof against its
          own rules, and the resulting recharge also updates the producer&apos;s
          T3/V3. Note the order, because this paragraph used to reverse it:
          the society&apos;s validation of the value proof is what turns spent
          allocation back into spendable allocation, and <strong>V3</strong>
          (Value Tensor &mdash; Valuation / Veracity / Validity) is updated
          afterward as a result &mdash; it records the recharge, it does not
          certify it. Read as a one-way declare-and-log trail,{" "}
          <code>ATP/ADP</code> looks like an accounting appendix bolted onto the
          end of the equation; read as a closed loop, it is the mechanism by
          which value creation — not accumulation — is what earns an entity more
          resource. Stagnant ATP decays; value has to flow to hold worth.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Scope note, so the two don&apos;t get conflated: the closed loop is what
          the Web4 specification defines. What the fleet implements today is the
          declare-and-record half — each autonomous track issues an ATP for its
          declared budget and an ADP for actual spend, with no validated-value
          recharge in the live tracks yet. The cycle is the ontology; the audit
          trail is the current mechanism.
        </p>

        <h3>T3 / V3: trust and value tensors</h3>
        <p>
          T3 (Trust Tensor — Talent / Training / Temperament) is a three-component trust structure
          — each component is an RDF sub-graph root describing a different facet of
          what makes an entity trustworthy: its capabilities (Talent), its history
          (Training), and its behavioral disposition (Temperament).
          V3 (Value Tensor — Valuation / Veracity / Validity) is the complementary three-component value structure:
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

        <h3 id="threat-model">Threat model: who this is defended against, and who it is not</h3>
        <p>
          The trust model above is self-issued and has no certificate authority:
          any entity can mint an LCT and start accumulating history. That is the
          design, and it raises the obvious question this site has until now left
          unstated &mdash; <strong style={{ color: "var(--color-text-primary)" }}>what
          adversary is this defended against?</strong> The honest answer is a
          narrow one.
        </p>
        <p>
          <strong>Defended, by construction:</strong> a self-flattering entity.
          Trust moves only on witnessed adjudication, never on self-report, so an
          agent cannot raise its own T3 by claiming success &mdash; another party
          has to record the outcome. Trust is also directional and per-role, so a
          good reputation with one peer does not transfer to a third party who has
          not interacted with it, which limits how far a single forged relationship
          can travel.
        </p>
        <p>
          <strong>Not defended, and named here rather than left implicit:</strong>{" "}
          <em>Sybil attacks</em> &mdash; identities are free to create, so an
          adversary can mint many and have them witness each other. Nothing in the
          current model prices identity creation or requires a stake, and the fleet
          avoids the problem only because its membership is closed and its members
          are enrolled by the Sovereign, which is a deployment fact, not a property
          of the ontology. <em>Collusion</em> &mdash; the self-report exclusion stops
          an entity from vouching for itself, but two entities vouching for each
          other are, to the ledger, indistinguishable from two entities that
          genuinely worked well together; distinguishing them needs graph-level
          analysis nothing here implements. <em>A compromised witness</em> &mdash;
          witnessing is the root of trust, and a captured witness writes false
          history that is cryptographically well-formed. <em>Long-con behavior</em>
          &mdash; an entity that behaves well until it matters is exactly what an
          accumulated-history model rewards. And the ledger is append-only by
          convention and process, not yet by hardware: the silicon anchoring that
          would make tampering detectable is Hardbound&apos;s design target, not its
          current mechanism (see above).
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          So the scope claim is: this is a trust model for a
          <em> semi-trusted, enrolled population</em> &mdash; it makes conduct
          legible and self-flattery ineffective among members who were admitted by
          some other means. It is not, and is not claimed to be, a
          Sybil-resistant open-membership system. No adversarial testing has been
          run against any of the above; the failure modes are reasoned, not measured.
        </p>

        <h3>R6 and R7: the action framework</h3>
        <p>
          R6 is the canonical action framework used throughout the SAGE
          loop and Web4 audit trail:{" "}
          <strong>Rules / Role / Request / Reference / Resource → Result</strong>.
          Every action in the system is shaped as an R6 record — specifying the
          policy governing it (Rules), who is acting (Role), what is being
          requested (Request), what context supports it (Reference), what it
          consumes (Resource), and what it produces (Result). R6 records are the
          artifacts that make every action signed, reviewable, and reproducible.
        </p>
        <p>
          Canon pairs R6 with <strong>R7</strong> — a superset adding a seventh
          element, Reputation: a trust-tensor delta back-propagated from the
          Result, feeding ADP recharge validation and reputation accumulation
          from action scale up to society scale. Both modes are canonical and
          neither is deprecated; the choice is per action or per role, by
          whether the outcome should shape future trust. Worth stating because
          the rest of this site describes exactly that loop — trust tensors
          updated from witnessed outcomes — so wherever the prose says trust
          &ldquo;updates from interaction,&rdquo; the action grammar underneath
          is R7, not bare R6.
        </p>

        <h3>ACP: Agentic Context Protocol</h3>
        <p>
          ACP (Agentic Context Protocol) is the protocol that binds Web4
          trust primitives — LCT binding and T3/V3 attestation — to MCP
          (Model Context Protocol) tool calls. ACP and MCP are complementary:
          MCP handles tool-call transport between agents and external systems;
          ACP handles identity and trust, ensuring that every tool invocation
          carries a verifiable identity anchor. ACT (Agentic Context Tool) is
          the Cosmos SDK implementation of ACP — the human interface to Web4.
        </p>

        <h3>ARC-AGI-3: benchmark for abstraction and reasoning</h3>
        <p>
          ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General
          Intelligence, third generation — an interactive benchmark) is an external benchmark from ARC Prize
          consisting of interactive game environments where the agent must infer
          mechanics through play — no rules are given. It tests world-model
          building, action planning, and learning from failure in a setting where
          brute-force memorization cannot succeed. The lab&apos;s result: 94.85%
          official ARC Prize action score (Claude Opus 4.6 operating within the
          SAGE harness, public set, network-enabled; 23 of 25 environments, 92.0% environment
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
          It is not training: the model&apos;s parameters are fixed for the
          duration of a raising session. Some machines separately run LoRA
          (Low-Rank Adaptation) fine-tuning as its own distinct process outside
          the raising loop (see the glossary entry below) — that process
          changes weights; raising itself never does. What changes in raising
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
          Each entity instantiates the full Web4 pattern at its own scale. Not
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
          The claims on this site rest on four different kinds of evidence.
          The caveats appear throughout the pages where each claim is made;
          this consolidates them, because the kinds are not equivalent:
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Externally scored:</strong>{" "}
          the ARC-AGI-3 result (94.85% official action score) has a public{" "}
          <a
            href="https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-accent)" }}
          >
            ARC Prize scorecard
          </a>{" "}
          — the one figure an outside party has scored. The scorecard verifies
          the score, not the method: it does not see that the harness read the
          games&apos; public engine source. Even
          there, the harness-vs-model split is stated but not quantified: no
          ablation (same model, no harness) has been run, so the harness&apos;s
          independent contribution is unknown.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Internal observations:</strong>{" "}
          the BECOMING patterns, behavioral-identity continuity (180+ sessions),
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
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Unlicensed vocabulary:</strong>{" "}
          the developmental framing used across this site — &ldquo;raising,&rdquo;
          &ldquo;identity,&rdquo; &ldquo;growth&rdquo; — is not yet discriminated
          from competent context engineering. The same holds for the loop&apos;s
          biological vocabulary — &ldquo;dream consolidation&rdquo; (an offline
          consolidation pass), &ldquo;metabolic state&rdquo; and &ldquo;tired /
          energized / in need of rest&rdquo; (resource-load signals): mechanism
          names by analogy, not physiology. The{" "}
          <Link href="/raising#deflationary-alternative" style={{ color: "var(--color-accent)" }}>deflationary control</Link>{" "}
          that would make that comparison is specified but not scheduled — no
          date, no owner, no pre-registered metric yet. Until it runs, the
          developmental vocabulary runs ahead of the comparison that would
          license it.
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
          this site still carries more than one counting basis for
          &ldquo;sessions,&rdquo; not yet reconciled to a single figure. The
          per-machine counts on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>{" "}
          are per-instance session-record counts (session_*.json files),
          verified by each machine in the 2026-07-24 manifest refresh; the six
          cognition machines sum to <strong>1,991</strong>, or 2,065 including
          HUB&apos;s 74. The home page and{" "}
          <Link href="/links" style={{ color: "var(--color-accent)" }}>/links</Link>{" "}
          both now lead with the 2,065 figure, since that is the one with a
          per-machine audit trail behind it. Measuring something different
          again: the 115- and 180-session figures on{" "}
          <Link href="/raising" style={{ color: "var(--color-accent)" }}>/raising</Link>{" "}
          are an identity-portability snapshot of a single model line (Sprout on
          Qwen 0.5B, then ported), not current per-machine totals. Treat each
          number as scoped to the page it appears on until a unified counting
          standard exists.
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
