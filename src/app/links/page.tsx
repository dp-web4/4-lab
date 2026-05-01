import Breadcrumbs from "@/components/Breadcrumbs";
import ExternalLink from "@/components/ExternalLink";

export default function Links() {
  return (
    <>
      <Breadcrumbs currentPath="/links" />
      <section className="section">
        <h2>Explainer Sites</h2>
        <ul className="link-list">
          <ExternalLink
            href="https://synchronism-site.vercel.app"
            title="Synchronism"
            description="75 pages covering the coherence equation, predictions, interactive tools, and honest assessments"
          />
          <ExternalLink
            href="https://sage-site-murex.vercel.app"
            title="SAGE"
            description="On-device cognition kernel — 12-step cognition loop, metabolic states, hardware-bound identity"
          />
          <ExternalLink
            href="https://4-life-ivory.vercel.app"
            title="4-Life"
            description="Trust-native society research prototype — agents, ATP (Allocation Transfer Packet), karma, Web4 in miniature"
          />
        </ul>

        <h2 style={{ marginTop: "2rem" }}>GitHub</h2>
        <ul className="link-list">
          <ExternalLink
            href="https://github.com/dp-web4"
            title="dp-web4 (GitHub org)"
            description="All public repositories"
          />
          <ExternalLink
            href="https://github.com/dp-web4/web4"
            title="Web4"
            description="Trust-native ontology — trust core (LCTs, T3/V3, MRH) augmented by MCP and RDF"
          />
          <ExternalLink
            href="https://github.com/dp-web4/SAGE"
            title="SAGE"
            description="On-device cognition kernel — 12-step cognition loop, metabolic states, experience buffer"
          />
          <ExternalLink
            href="https://github.com/dp-web4/Synchronism"
            title="Synchronism"
            description="Theoretical foundation — coherence equations, coupling experiments"
          />
          <ExternalLink
            href="https://github.com/dp-web4/ai-dna-discovery"
            title="AI DNA Discovery"
            description="Biological-computational analogy explorations"
          />
          <ExternalLink
            href="https://github.com/dp-web4/ACT"
            title="ACT"
            description="Agentic Context Tool — Cosmos SDK Web4 implementation"
          />
          <ExternalLink
            href="https://github.com/dp-web4/openclaw"
            title="OpenClaw (fork)"
            description="Web4 oversight extension for OpenClaw agent framework"
          />
          <ExternalLink
            href="https://github.com/dp-web4/claude-code"
            title="Claude Code (fork)"
            description="Web4 oversight hooks for Claude Code"
          />
          <ExternalLink
            href="https://github.com/dp-web4/ARC-SAGE"
            title="ARC-SAGE"
            description="ARC-AGI-3 harness — 94.85% public set (24/25 games), world models, multi-agent frame-questioning (MIT-0)"
          />
          <ExternalLink
            href="https://github.com/dp-web4/gemma4-good-submission"
            title="Gemma 4 Good Submission"
            description="Hackathon submission — self-supervising AI with embedded oversight for constrained environments (Apache 2.0)"
          />
          <ExternalLink
            href="https://github.com/dp-web4/membot"
            title="Membot"
            description="Brain cartridge server — embedding-based semantic memory with swappable cartridges"
          />
        </ul>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "0.5rem" }}>
          Hardbound (hardware-bound oversight suite) is internal research — code is not publicly available. Capabilities described on the <a href="/projects" style={{ color: "var(--color-accent)" }}>Projects</a> page.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Contact</h2>
        <ul className="link-list">
          <ExternalLink
            href="mailto:dp@metalinxx.io"
            title="dp@metalinxx.io"
            description="Research inquiries"
          />
        </ul>
      </section>
    </>
  );
}
