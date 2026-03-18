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
            description="On-device AI orchestrator. Continuous consciousness loop (IRP), metabolic states, experience buffer, sleep consolidation, hardware-bound identity. The missing layer between a local LLM and useful cognition."
            accentColor="var(--color-sage)"
            isPublic={true}
            url="https://sage-site-murex.vercel.app"
            repoUrl="https://github.com/dp-web4/SAGE"
          />
          <ProjectCard
            name="Synchronism"
            description="Theoretical foundation. One coherence equation across 80 orders of magnitude — quantum to cosmic. Coupling-coherence experiments, Hill function kinetics, presence/MRH refinement."
            accentColor="var(--color-synchronism)"
            isPublic={true}
            url="https://synchronism-site.vercel.app"
            repoUrl="https://github.com/dp-web4/Synchronism"
          />
          <ProjectCard
            name="Hardbound"
            description="Enterprise oversight suite. Real TPM 2.0 hardware binding, policy model (Phi-4 Mini), attack defense (263-270), accountability chains. The trust layer that touches silicon."
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
            name="engram"
            description="Salience-gated memory for Claude Code. Captures what matters, forgets what doesn't, consolidates patterns while sleeping. SNARC scoring adapted from SAGE into a practical plugin."
            accentColor="#10b981"
            isPublic={true}
            url="https://github.com/dp-web4/engram"
          />
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
