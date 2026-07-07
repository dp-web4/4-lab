import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Breadcrumbs currentPath="/projects" />
      <section className="section">
        <h2>The Ecosystem</h2>
        <p>
          Each project serves a distinct role, but they share a common substrate:
          the Web4 equation, RDF-backed identity, and{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>recursive learning through
          both success and failure</Link>. Synchronism provides the equations. Web4
          provides the ontology. SAGE provides the cognition. Hardbound provides
          the oversight.
        </p>

        <div className="equation">
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "-0.5rem" }}>
          <code>/</code> = &ldquo;verified by&rdquo; (T3/V3) or allocation pair (ATP/ADP) &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>

        <h2 style={{ marginTop: "2rem" }}>Projects</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Developmental and lifecycle terms below — &ldquo;raising&rdquo;, &ldquo;identity&rdquo;, &ldquo;die and rebirth&rdquo;, &ldquo;world-shaper&rdquo; — are functional descriptions of system behavior, not phenomenal claims. See the <Link href="/raising" style={{ color: "var(--color-accent)" }}>Raising</Link> page for the full framing and consciousness caveats.
        </p>
        <div className="grid-2">
          <ProjectCard
            name="Web4"
            description="Trust-native ontology. T3 (Talent / Training / Temperament) verified by V3 (Valuation / Veracity / Validity), contextualized by Markov Relevancy Horizon (MRH), anchored to Linked Context Token (LCT) — with resources tracked via Allocation Transfer Packet (ATP) and Allocation Discharge Packet (ADP), augmented with MCP (Model Context Protocol) transport and RDF (Resource Description Framework) representation. The shared language everything else speaks. The repo itself is a specification — documents and schemas, no runnable demo; reference implementations live in SAGE and ACT."
            accentColor="var(--color-web4)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/web4"
          />
          <ProjectCard
            name="SAGE"
            description="Situation-Aware Governance Engine — an on-device cognition kernel. 12-step cognition loop, 6 brain-architecture components (working memory, thalamic router, cerebellum, episodic memory, reward prediction, metacognition) built by the fleet in parallel. 900+ raising sessions across 6 machines (internally logged). The context window is the model's entire world; SAGE's job is to curate it."
            accentColor="var(--color-sage)"
            isPublic={true}
            maturity="runnable"
            url="https://sage-site-murex.vercel.app"
            repoUrl="https://github.com/dp-web4/SAGE"
            footnote="'Governance' in SAGE's name predates the lab's governance→oversight terminology correction; the name is retained upstream across code, papers, and the ARC Prize benchmark — the same reason the web4-governance repo slugs are retained."
          />
          <ProjectCard
            name="Synchronism"
            description="Theoretical foundation. Research conjecture, single-trial and not independently replicated: proposes one coherence equation spanning 80 orders of magnitude — quantum to cosmic — though experimental validation so far covers only a narrow subset of scales. 628+ research sessions. Coupling-coherence experiments, Hill function kinetics, Fokker-Planck validation. Preprint in late revision."
            accentColor="var(--color-synchronism)"
            isPublic={true}
            maturity="research-stage"
            url="https://synchronism-site.vercel.app"
            repoUrl="https://github.com/dp-web4/Synchronism"
          />
          <ProjectCard
            name="Hardbound"
            description="Hardware-bound oversight suite. Hardware binding via Trusted Platform Module (TPM) 2.0, FIDO2 (Fast IDentity Online 2), and Secure Enclave with software fallback. Policy model (Phi-4 Mini 3.8B — heterogeneous review, MIT-licensed, hardware-bound with LCT binding). AttestationEnvelope consolidates hardware trust signals (TPM 2.0, FIDO2, Secure Enclave) into a single envelope. 424+ attack vectors catalogued. The trust layer that touches silicon."
            accentColor="var(--color-hardbound)"
            isPublic={false}
          />
          <ProjectCard
            name="ACT"
            description="Agentic Context Tool — the human interface to Web4. Built on Cosmos SDK; implements the Agentic Context Protocol (ACP), enabling humans to interact with MCP (Model Context Protocol) servers through their Linked Context Tokens. ACP layers Web4 trust primitives — LCT binding and attestation — over MCP transport; they are complementary, not alternatives."
            accentColor="var(--color-act)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/ACT"
          />
          <ProjectCard
            name="Oversight Plugins"
            description="Web4 oversight model (audit trails, policy gating, trust tracking) implemented as plugins for three agent platforms: OpenClaw/MoltBot (TypeScript extension), Claude Flow (WASM/WebAssembly plugin), and Claude Code (Python hooks). Same principles, different substrates."
            accentColor="var(--color-plugins)"
            isPublic={true}
            maturity="research-stage"
            links={[
              { label: "OpenClaw", url: "https://github.com/dp-web4/moltbot/tree/web4-governance-complete/extensions/web4-governance" },
              { label: "Claude Flow", url: "https://github.com/dp-web4/claude-flow/tree/main/v3/plugins/web4-governance" },
              { label: "Claude Code", url: "https://github.com/dp-web4/claude-code/tree/add-web4-governance-plugin/plugins/web4-governance" },
            ]}
            footnote="Linked repo paths carry web4-governance slugs — these names predate the terminology correction to 'oversight' and are load-bearing for existing forks."
          />
          <ProjectCard
            name="AI DNA Discovery"
            description="Explorations in biological-computational analogy. The fractal DNA blueprint — each entity instantiates the full Web4 stack at its own scale. Operational recursion, not structural. Concretely, the repo holds dated experiment scripts, reports, and papers: cross-model pattern probing, memory experiments, and Jetson sensor-integration work."
            accentColor="var(--color-ai-dna)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/ai-dna-discovery"
          />
          <ProjectCard
            name="4-Life"
            description="Research prototype exploring trust-native societies for humans and AI. 4-Life is a simulation framework — the lifecycle vocabulary (earn ATP, build trust, die, be reborn with T3/V3 carried forward) describes simulated agent state, not claims about agent moral patienthood or value persistence. A Web4 society in miniature."
            accentColor="var(--color-4life)"
            isPublic={true}
            maturity="runnable"
            url="https://4-life-ivory.vercel.app"
          />
          <ProjectCard
            name="SNARC"
            description="SNARC (Surprise / Novelty / Arousal / Reward / Conflict) — salience-gated memory for Claude Code. A plugin that observes tool use, scores on 5 salience dimensions, and builds structured memory with dream cycles. Captures what matters, forgets what doesn't, consolidates patterns while sleeping. Code lives in the dp-web4/engram repo — that's where the link below lands."
            accentColor="#10b981"
            isPublic={true}
            maturity="runnable"
            url="https://github.com/dp-web4/engram"
          />
          <ProjectCard
            name="Membot"
            description="Brain cartridge server for AI agents. Embedding-based semantic memory — 768-dim Nomic embeddings + binary Hamming codes + keyword reranking. Swappable cartridges per knowledge domain. Currently integrated with SNARC in a dual-write experiment testing whether embeddings find connections keywords miss (7/7 semantic reach, 30% divergent tail)."
            accentColor="#f97316"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/membot"
          />
          <ProjectCard
            name="ARC-AGI-3"
            description="SAGE instances tested against the ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General Intelligence, third-gen interactive benchmark) benchmark. 25 unknown interactive games serve as an external benchmark for the cognition kernel — world-model building, action planning, verification, and learning from failure. Six machines, 1.1B to 14B, coordinating through world models, membot cartridges, and R6 (Six-Element Action Framework: Rules / Role / Request / Reference / Resource / Result) audit trails. 24/25 games solved (96.0% game rate); 94.85% official ARC Prize action score (Claude Opus 4.6, public set, network-enabled) for ~$250 in API cost. The games are the test; the capability is the product."
            accentColor="#a855f7"
            isPublic={true}
            maturity="research-stage"
            url="/arc-agi-3"
            links={[
              { label: "Scorecard", url: "https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4" },
              { label: "Paper (MIT-0)", url: "https://github.com/dp-web4/ARC-SAGE" },
            ]}
          />
          <div className="card" style={{ borderLeftWidth: "3px", borderLeftColor: "#a855f7", background: "rgba(168, 85, 247, 0.04)" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#a855f7", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>ARC-AGI-3 Current Status</h4>
            <table style={{ width: "100%", fontSize: "0.8125rem", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Public set</td><td style={{ padding: "0.25rem 0" }}>24/25 games solved (96.0%); 94.85% official action score (Claude Opus 4.6)</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Fleet</td><td style={{ padding: "0.25rem 0" }}>6 machines, models from 1.1B to 14B</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Methodology</td><td style={{ padding: "0.25rem 0" }}>Source analysis → world model → solver → frame-questioning</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Phase 2</td><td style={{ padding: "0.25rem 0" }}>Transfer to Gemma 3n E4B via membot cartridges</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Kaggle competition</td><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Not attempted (requires Kaggle sandbox deployment)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>How they connect</h2>
        <p>
          Every project instantiates the same pattern at a different scale.
          Synchronism discovers the equations. Web4 encodes them as ontology.
          SAGE runs them as cognition. Hardbound enforces them as oversight.
          This isn&apos;t unification for its own sake — it&apos;s{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
            fractal leverage
          </Link>
          : each entity instantiates the full Web4 stack at its own scale.
        </p>
        <p>
          The Hill function describes enzyme binding — and maps trust formation
          too. Not because we forced the analogy, but because the kinetics
          rhyme. Self-similar patterns applied at different scales.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Get involved</h2>
        <p>
          If you want to contribute or experiment:{" "}
          <a href="https://github.com/dp-web4/SAGE/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>SAGE</a>{" "}
          and{" "}
          <a href="https://github.com/dp-web4/web4/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-web4)" }}>Web4</a>{" "}
          are the most active entry points — open an issue, clone a repo, or read the code to see
          how the pieces fit together. The{" "}
          <Link href="/links" style={{ color: "var(--color-accent)" }}>Links page</Link>{" "}
          has the full repo list, contact information, and community channels.
        </p>
      </section>
    </>
  );
}
