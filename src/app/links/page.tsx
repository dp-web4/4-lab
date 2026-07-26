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
            description="75 pages covering the coherence equation (Synchronism's central formalism — a research conjecture, not established physics), predictions, interactive tools, and honest assessments"
          />
          <ExternalLink
            href="https://sage-site-murex.vercel.app"
            title="SAGE"
            description="Situation-Aware Governance Engine — on-device cognition kernel. 12-step cognition loop, metabolic states, experience buffer. ('Governance' in the name predates the lab's governance→oversight correction — see /context.)"
          />
          <ExternalLink
            href="https://4-life-ivory.vercel.app"
            title="4-Life"
            description="Trust-native society research prototype — agents, ATP (Allocation Transfer Packet) / ADP (Allocation Discharge Packet), and karma (the simulation's accumulated-standing score for an agent, derived from its past contributions — 4-Life's local stand-in for a T3/V3 reputation record, not a Web4 canonical term). Web4 in miniature."
          />
        </ul>

        <h2 style={{ marginTop: "2rem" }}>GitHub</h2>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          New here? Repo descriptions use Web4 vocabulary (LCT, T3/V3, MRH, MCP, RDF, ATP/ADP). See{" "}
          <a href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context</a> for full definitions.
        </p>
        <ul className="link-list">
          <ExternalLink
            href="https://github.com/dp-web4"
            title="dp-web4 (GitHub org)"
            description="All public repositories"
          />
          <ExternalLink
            href="https://github.com/dp-web4/web4"
            title="Web4"
            description="Trust-native ontology — LCT (Linked Context Token) identity, T3 (Talent / Training / Temperament) verified by V3 (Valuation / Veracity / Validity), contextualized by MRH (Markov Relevancy Horizon), resources tracked via ATP (Allocation Transfer Packet) / ADP (Allocation Discharge Packet), augmented with MCP (Model Context Protocol) and RDF (Resource Description Framework)"
          />
          <ExternalLink
            href="https://github.com/dp-web4/SAGE"
            title="SAGE"
            description="Situation-Aware Governance Engine — on-device cognition kernel. 12-step cognition loop, metabolic states, experience buffer. ('Governance' in the name predates the lab's governance→oversight correction — see /context.)"
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
            description="Agentic Context Tool — Cosmos SDK implementation of the Agentic Context Protocol (ACP): the human interface to Web4"
          />
          <ExternalLink
            href="https://github.com/dp-web4/openclaw"
            title="OpenClaw (fork)"
            description="Web4 oversight extension for OpenClaw agent framework"
          />
          <ExternalLink
            href="https://github.com/dp-web4/claude-flow"
            title="Claude Flow (fork)"
            description="Web4 oversight WASM (WebAssembly) plugin for Claude Flow"
          />
          <ExternalLink
            href="https://github.com/dp-web4/claude-code"
            title="Claude Code (fork)"
            description="Web4 oversight hooks for Claude Code"
          />
          <ExternalLink
            href="https://github.com/dp-web4/ARC-SAGE"
            title="ARC-SAGE"
            description="ARC-AGI-3 harness — 94.85% official ARC Prize action score (Claude Opus 4.6, public set, network-enabled; 24/25 games, 96.0%), world models, multi-agent frame-questioning (MIT-0 — MIT No Attribution). Score carries caveats — see /arc-agi-3"
          />
          <ExternalLink
            href="https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4"
            title="ARC Prize official scorecard"
            description="Independent verification of the 94.85% action score — the external source of record for the ARC-SAGE result"
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

        <h2 style={{ marginTop: "2rem" }}>Contributing</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          New here? Read <a href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context</a> for the vocabulary, then start with SAGE or ACT — the most accessible entry points for hands-on experimentation.
        </p>

        <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Quick start</h3>
        <pre style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "0.75rem 1rem", fontSize: "0.8125rem", overflowX: "auto", marginBottom: "0.5rem" }}>{`# SAGE — on-device cognition kernel
git clone https://github.com/dp-web4/SAGE
cd SAGE
# See README for Python/conda setup and first session instructions

# ACT — Agentic Context Tool (Cosmos SDK)
git clone https://github.com/dp-web4/ACT
cd ACT
# See README for Go/Cosmos SDK setup`}</pre>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          SAGE is the recommended starting point — it runs on a single machine, has 2,500+ internally logged raising sessions as context, and is where most fleet behavior originates. ACT is the right entry if you want the Web4 trust-layer / Cosmos SDK side.
        </p>

        <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Licenses</h3>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          ARC-SAGE: MIT-0 (MIT No Attribution; see repo). Gemma 4 Good Submission: Apache 2.0. Other repos: see each repo&apos;s LICENSE file — check before forking. Hardbound is internal and not publicly available.
        </p>

        <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
          Questions or contributions? Open an issue on any public repo.{" "}
          <a href="https://github.com/dp-web4/SAGE/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>SAGE</a> and{" "}
          <a href="https://github.com/dp-web4/web4/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Web4</a>{" "}
          are the most active issue trackers. The{" "}
          <a href="https://github.com/dp-web4" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>dp-web4 org</a>{" "}
          holds 40 original repos — 21 public, 19 internal — plus 32 forks of external work the lab builds on, 72 repositories in all. (&ldquo;Original&rdquo; means not-a-fork; the same denominator is used for the &ldquo;40&rdquo; on the home page. Verified against the org on 2026-07-26.) Clone what interests you, experiment, and open a discussion if you want to engage. There is no CONTRIBUTING guide yet and no stated policy on outside pull requests — ask in an issue first.
        </p>

        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
          For researchers: no papers or preprints are published yet — the
          Synchronism preprint is in late revision, and the claims on this site
          (other than the externally scored ARC-AGI-3 result) cite internal
          session logs that are not yet externally auditable. Redacted log
          samples and coding criteria are not published at this time; email
          below to inquire.
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
