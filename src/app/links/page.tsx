import Breadcrumbs from "@/components/Breadcrumbs";
import ExternalLink from "@/components/ExternalLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Links & Contact" };

export default function Links() {
  return (
    <>
      <Breadcrumbs currentPath="/links" />
      <section className="section">
        <h1>Links &amp; Contact</h1>
        <h2 style={{ marginTop: "1.5rem" }}>Explainer Sites</h2>
        <ul className="link-list">
          <ExternalLink
            href="https://synchronism-site.vercel.app"
            title="Synchronism"
            description="75 pages covering the coherence equation (Synchronism's central formalism — a research conjecture, not established physics; which mathematical object the equation is remains unsettled upstream, see /projects), predictions, interactive tools, and honest assessments"
          />
          <ExternalLink
            href="https://sage-site-murex.vercel.app"
            title="SAGE"
            description="Situation-Aware Governance Engine — on-device cognition kernel. 12-step cognition loop, metabolic states, experience buffer. ('Governance' in the name predates the lab's governance→oversight correction — see /context.)"
          />
          <ExternalLink
            href="https://4-gov.org"
            title="4-gov"
            description="Governance explainer site. Note the vocabulary gap: this lab says &ldquo;oversight&rdquo; where this site says &ldquo;governance&rdquo; (see /context) — the domain name predates, and sits outside, that correction."
          />
          <ExternalLink
            href="https://4-life-ivory.vercel.app"
            title="4-Life"
            description="Trust-native society research prototype (the repo's own description; the live site titles itself 'The Web4 Onramp' and opens as an educational explainer, with the simulation behind it) — agents, ATP (Allocation Transfer Packet) / ADP (Allocation Discharge Packet), and karma (the simulation's accumulated-standing score for an agent, derived from its past contributions — 4-Life's local stand-in for a T3/V3 reputation record, not a Web4 canonical term). Web4 in miniature."
          />
        </ul>

        <h2 style={{ marginTop: "2rem" }}>GitHub</h2>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          New here? Repo descriptions use Web4 vocabulary (LCT, T3/V3, MRH, MCP, RDF, ATP/ADP). See{" "}
          <a href="/context#glossary" style={{ color: "var(--color-accent)" }}>the /context glossary</a> for full definitions.
        </p>
        <ul className="link-list">
          <ExternalLink
            href="https://github.com/dp-web4"
            title="dp-web4 (GitHub account)"
            description="All public repositories"
          />
          <ExternalLink
            href="https://github.com/dp-web4/web4"
            title="Web4"
            description="Trust-native ontology — LCT (Linked Context Token) identity, T3 (Trust Tensor — Talent / Training / Temperament) verified by V3 (Value Tensor — Valuation / Veracity / Validity), contextualized by MRH (Markov Relevancy Horizon), resources cycled through ATP (Allocation Transfer Packet) / ADP (Allocation Discharge Packet) — charged, spent, recharged against validated value, not a one-way log — augmented with MCP (Model Context Protocol) and RDF (Resource Description Framework). Research-stage; core packages published (web4-core on crates.io and PyPI — install lines in the /projects Quick start)"
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
            description="Agentic Context Tool — Cosmos SDK implementation of the Agentic Context Protocol (ACP): the human interface to Web4. Stalled, and reserved rather than abandoned: last substantive commit 2026-04-10 (which removed its README), no running chain, no first-run steps published. Not a working entry point today."
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
            description="ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation) harness — 94.85% official ARC Prize action score, efficiency-weighted (Claude Opus 4.6, public set, network-enabled; 23 of 25 environments completed, 92.0%; 175 of 183 levels), world models, multi-agent frame-questioning (MIT-0 — MIT No Attribution). Score carries caveats — see /arc-agi-3"
          />
          <ExternalLink
            href="https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4"
            title="ARC Prize official scorecard"
            description="Official, externally scored record of the 94.85% action score — the external source of record for the ARC-SAGE result. It verifies the score, not the method: the engine-source affordances and the missing harness ablation are on /arc-agi-3"
          />
          <ExternalLink
            href="https://github.com/dp-web4/gemma4-good-submission"
            title="Gemma 4 Good Submission"
            description="Parse it as 'Gemma 4 Good' + 'submission', not as a self-rating: the lab's entry (titled Attested Resilience) in the Gemma 4 Good Hackathon, run by Kaggle and Google DeepMind in May 2026. Self-supervising AI with embedded oversight for constrained environments — persistent cryptographic identity per device, R6-auditable actions (R6 = the Six-Element Action Framework: Rules / Role / Request / Reference / Resource → Result — see /context), policy as signed artifact (Apache 2.0)"
          />
          <ExternalLink
            href="https://github.com/dp-web4/membot"
            title="Membot"
            description="Brain cartridge server — embedding-based semantic memory with swappable cartridges"
          />
          <ExternalLink
            href="https://github.com/dp-web4/hestia"
            title="Hestia"
            description="Open local-first governance daemon — agents from different vendors under one signed law on one machine, with a hash-chained action record. ('Governance' is deliberate here; see /projects.)"
          />
          <ExternalLink
            href="https://github.com/dp-web4/4-hub"
            title="Hub (4-hub)"
            description="Rust society runtime that turns a community into a Web4 society — standalone mirror of the Hub daemon, whose source also lives in the web4 repo"
          />
          <ExternalLink
            href="https://github.com/dp-web4/snarc"
            title="SNARC"
            description="SNARC (Surprise / Novelty / Arousal / Reward / Conflict) — salience-gated memory plugin for Claude Code (formerly engram)"
          />
        </ul>

        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "0.5rem" }}>
          Hardbound (hardware-bound oversight suite — &ldquo;oversight&rdquo; meaning machine-enforced policy gating, not human supervision) is internal research — code is not publicly available. Capabilities described on the <a href="/projects" style={{ color: "var(--color-accent)" }}>Projects</a> page.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Contributing</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          New here? Read <a href="/context#glossary" style={{ color: "var(--color-accent)" }}>the /context glossary</a> for the vocabulary. Hands-on: start with SAGE. Protocol: start with Web4, whose core packages now install directly. ACT is the Cosmos SDK side, but it is stalled — don&apos;t start there.
        </p>

        <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Quick start</h3>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          The commands live in one place: the{" "}
          <a href="/projects#quick-start" style={{ color: "var(--color-accent)" }}>Quick start on /projects</a>{" "}
          — Web4&apos;s published packages, a SAGE instance from clone to running daemon
          (including the <code>ollama pull</code> step). This page
          used to carry a second copy; the two drifted apart, so it now links instead.
          SAGE is the hands-on starting point — it runs on a single machine, has 1,991 internally logged machine sessions as context (2,065 including HUB; per-machine counts on <a href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</a>, the source of record), and is where most fleet behavior originates. Web4 is the protocol starting point. ACT is the Cosmos SDK take on the same trust primitives, but it is stalled and has no published first-run steps, so it is not a third starting point today.
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
          <a href="https://github.com/dp-web4" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>dp-web4 account</a>{" "}
          holds 40 original repos — 21 public, 19 internal — plus 32 forks of external work the lab builds on, 72 repositories in all. (&ldquo;Original&rdquo; means not-a-fork; the same denominator is used for the &ldquo;40&rdquo; on the home page. Verified against the org on 2026-07-26.) Clone what interests you, experiment, and open a discussion if you want to engage.
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
          There is no CONTRIBUTING guide yet and no stated policy on outside
          pull requests. <strong style={{ color: "var(--color-text-primary)" }}>Ask in an issue first</strong> — that&apos;s the on-ramp until a formal policy exists.
        </p>

        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
          For researchers: no papers or preprints are published yet. A
          Synchronism preprint strategy exists upstream but is unscheduled —
          it gates on the researcher, with no submission target; this page
          previously said &ldquo;in late revision,&rdquo; which the repo does not
          support. The claims on this site
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
