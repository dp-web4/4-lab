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
          <code>/</code> = &ldquo;verified by&rdquo; &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>

        <h2 style={{ marginTop: "2rem" }}>Projects</h2>
        <div className="grid-2">
          <ProjectCard
            name="Web4"
            description="Trust-native ontology. Linked Context Tokens (LCTs), T3/V3 trust tensors, Markov Relevancy Horizons, ATP/ADP resource cycles — all backed by RDF triples. The shared language everything else speaks."
            accentColor="var(--color-web4)"
            isPublic={true}
            repoUrl="https://github.com/dp-web4/web4"
          />
          <ProjectCard
            name="SAGE"
            description="On-device AI orchestrator. 12-step consciousness loop (IRP), metabolic states, experience buffer, sleep consolidation, three-layer hardware-bound identity. 840+ raising sessions across 6 machines, 10 active instances from 0.8B to 27B. PolicyGate at step 8.5 — conscience checkpoint between deliberation and action, evaluating against signed law bundles. Tool use integration (v0.4.0a6) with three-tier capability detection."
            accentColor="var(--color-sage)"
            isPublic={true}
            url="https://sage-site-murex.vercel.app"
            repoUrl="https://github.com/dp-web4/SAGE"
          />
          <ProjectCard
            name="Synchronism"
            description="Theoretical foundation. One coherence equation across 80 orders of magnitude — quantum to cosmic. 628+ research sessions. Coupling-coherence experiments, Hill function kinetics, Fokker-Planck validation. Publication readiness 0.97."
            accentColor="var(--color-synchronism)"
            isPublic={true}
            url="https://synchronism-site.vercel.app"
            repoUrl="https://github.com/dp-web4/Synchronism"
          />
          <ProjectCard
            name="Hardbound"
            description="Enterprise oversight suite. Hardware binding via TPM 2.0, FIDO2, and Secure Enclave with software fallback. Policy model (Phi-4 Mini 3.8B — heterogeneous review, MIT-licensed, hardware-bound with LCT binding). AttestationEnvelope provides unified hardware trust. 424+ attack vectors catalogued. The trust layer that touches silicon."
            accentColor="var(--color-hardbound)"
            isPublic={false}
          />
          <ProjectCard
            name="ACT"
            description="Agentic Context Tool — the human interface to Web4. Cosmos SDK implementation of the Agentic Context Protocol (ACP), enabling humans to interact with MCP servers through their Linked Context Tokens."
            accentColor="var(--color-act)"
            isPublic={true}
            repoUrl="https://github.com/dp-web4/ACT"
          />
          <ProjectCard
            name="Governance Plugins"
            description="Web4 governance model (audit trails, policy gating, trust tracking) implemented as plugins for three agent platforms: OpenClaw/MoltBot (TypeScript extension), Claude Flow (WASM plugin), and Claude Code (Python hooks). Same principles, different substrates."
            accentColor="var(--color-plugins)"
            isPublic={true}
            links={[
              { label: "OpenClaw", url: "https://github.com/dp-web4/moltbot/tree/web4-governance-complete/extensions/web4-governance" },
              { label: "Claude Flow", url: "https://github.com/dp-web4/claude-flow/tree/main/v3/plugins/web4-governance" },
              { label: "Claude Code", url: "https://github.com/dp-web4/claude-code/tree/add-web4-governance-plugin/plugins/web4-governance" },
            ]}
          />
          <ProjectCard
            name="AI DNA Discovery"
            description="Explorations in biological-computational analogy. The fractal DNA blueprint — each entity instantiates the full Web4 stack at its own scale. Operational recursion, not structural."
            accentColor="var(--color-ai-dna)"
            isPublic={true}
            repoUrl="https://github.com/dp-web4/ai-dna-discovery"
          />
          <ProjectCard
            name="4-Life"
            description="Research prototype exploring trust-native societies for humans and AI. Agents earn ATP, build trust, die, and are reborn with karma carried forward — a Web4 society in miniature."
            accentColor="var(--color-4life)"
            isPublic={true}
            url="https://4-life-ivory.vercel.app"
          />
          <ProjectCard
            name="SNARC"
            description="Salience-gated memory for Claude Code. A plugin that observes tool use, scores on 5 salience dimensions (Surprise, Novelty, Arousal, Reward, Conflict), and builds structured memory with dream cycles. Captures what matters, forgets what doesn't, consolidates patterns while sleeping."
            accentColor="#10b981"
            isPublic={true}
            url="https://github.com/dp-web4/engram"
          />
          <ProjectCard
            name="Membot"
            description="Brain cartridge server for AI agents. Embedding-based semantic memory — 768-dim Nomic embeddings + binary Hamming codes + keyword reranking. Swappable cartridges per knowledge domain. Currently integrated with SNARC in a dual-write experiment testing whether embeddings find connections keywords miss (7/7 semantic reach, 30% divergent tail)."
            accentColor="#f97316"
            isPublic={true}
            repoUrl="https://github.com/dp-web4/membot"
          />
          <ProjectCard
            name="ARC-AGI-3"
            description="SAGE instances tested in competition. 25 unknown interactive games serve as an external benchmark for the cognition kernel — world-model building, action planning, verification, and learning from failure. Six machines, 0.8B to 27B, coordinating through world models, membot cartridges, and R6-shaped audit trails. 24/25 solved at 94.85% for ~$250 in API cost. The games are the test; the capability is the product."
            accentColor="#a855f7"
            isPublic={true}
            url="/arc-agi-3"
            links={[
              { label: "Scorecard", url: "https://arcprize.org/scorecards/c4e6442e-077d-4048-9eff-110c5a59ccfb" },
              { label: "Paper (MIT-0)", url: "https://github.com/dp-web4/ARC-SAGE" },
            ]}
          />
          <div className="card" style={{ borderLeftWidth: "3px", borderLeftColor: "#a855f7", background: "rgba(168, 85, 247, 0.04)" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#a855f7", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>ARC-AGI-3 Current Status</h4>
            <table style={{ width: "100%", fontSize: "0.8125rem", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Public set</td><td style={{ padding: "0.25rem 0" }}>24/25 games, 94.85%</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Fleet</td><td style={{ padding: "0.25rem 0" }}>6 machines, models from 0.8B to 27B</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Methodology</td><td style={{ padding: "0.25rem 0" }}>Source analysis → world model → solver → frame-questioning</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Phase 2</td><td style={{ padding: "0.25rem 0" }}>Transfer to Gemma 4 E4B via membot cartridges</td></tr>
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
          : pragmatic reuse of what works in one place, everywhere.
        </p>
        <p>
          The Hill function describes enzyme binding AND trust formation not
          because of a philosophical desire to unify, but because it&apos;s the
          same mechanism. Self-similar patterns applied at different scales.
        </p>
      </section>
    </>
  );
}
