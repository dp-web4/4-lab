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
            description="On-device AI orchestrator — consciousness loop, metabolic states, hardware-bound identity"
          />
          <ExternalLink
            href="https://4-life-ivory.vercel.app"
            title="4-Life"
            description="Trust-native society research prototype — agents, ATP, karma, Web4 in miniature"
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
            description="Trust-native ontology — LCTs, T3/V3, MRH, RDF backbone"
          />
          <ExternalLink
            href="https://github.com/dp-web4/SAGE"
            title="SAGE"
            description="On-device AI orchestrator — consciousness loop, metabolic states, experience buffer"
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
            description="Web4 governance extension for OpenClaw agent framework"
          />
          <ExternalLink
            href="https://github.com/dp-web4/claude-code"
            title="Claude Code (fork)"
            description="Web4 governance hooks for Claude Code"
          />
        </ul>

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
