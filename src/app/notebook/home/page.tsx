import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Notebook: the lab view (former home page)" };

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          AI agents are becoming actors in the world.{" "}
          <span className="accent">Trust and authority need to become first-class.</span>
        </h1>
        <p className="tagline">
          dp-web4 is a heterogeneous human/AI research collective building Web4 —
          an open trust <strong>ontology</strong>, not an architecture, infrastructure
          or stack — together with Hestia, Hub and SAGE (Situation-Aware Governance Engine): running governance systems
          and persistent-agent research developed on an eight-machine fleet.
        </p>
        <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
          The common thesis is simple: <strong>trust should be computed from witnessed
          evidence, in context, by the party doing the relying</strong> &mdash; not declared by
          a platform or asserted by the agent itself.
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginTop: "0.75rem" }}>
          This site is the lab view. For the ontology and its reference implementation, start with{" "}
          <a href="https://github.com/dp-web4/web4" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Web4</a>;
          for local agent governance see{" "}
          <a href="https://github.com/dp-web4/hestia" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Hestia</a>{" "}
          (it runs on the lab&apos;s machines, but has no install guide for outside users yet; see the{" "}
          <Link href="/notebook/projects#quick-start" style={{ color: "var(--color-accent)" }}>Quick start</Link>).
        </p>
      </section>

      <section className="section">
        <div className="grid-3">
          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">Machines in the research fleet</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">21</div>
            <div className="stat-label">SAGE instances configured across the fleet (2026-09-08 census; 8 of them carry raising history, one per machine — both figures are published on the <a href="https://sage-site-murex.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>SAGE site</a>)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4</div>
            <div className="stat-label">Model families deployed on raising lines: Qwen, Gemma, Granite, Llama (Phi and TinyLlama lines archived). Deployed is not the same as running: each line&apos;s current state is on <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>, which owns it</div>
          </div>
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginTop: "0.75rem" }}>
          Of these, the eight instances with raising history are the current raising lines, one per machine (archived lines such as Sprout&apos;s Qwen 0.5B also carry history and are not in the eight; how instance, line and session record nest is on{" "}
          <Link href="/notebook/context#instance-line" style={{ color: "var(--color-accent)" }}>/context</Link>). They are enumerated per machine on{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>. Not all eight
          are currently running: that page assigns each line a dated state (running, quiet,
          paused, instrumentation broken) and is the checkable version of these numbers. The configured-instance census is not.
        </p>

        <h2>What is being built</h2>
        <div className="grid-2">
          <a href="https://github.com/dp-web4/web4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #3b82f6" }}>
              <h3 style={{ color: "#3b82f6" }}>Web4</h3>
              <p>
                The open trust ontology: persistent identity, contextual trust,
                scoped authority, witnessed action, machine-readable law and
                federation — the last of these is roadmap, not running.
                Web4 lives on an RDF graph (Resource Description Framework) — it is not itself the
                substrate. Core Rust/Python packages are published; the specification
                remains draft in places.
              </p>
            </div>
          </a>

          <a href="https://github.com/dp-web4/hestia" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #f59e0b" }}>
              <h3 style={{ color: "#f59e0b" }}>Hestia</h3>
              <p>
                Local governance for humans and AI agents from multiple vendors:
                one law, scoped delegation, a vault, witnessed actions, escalation
                and trust derived from the record. Running today at <strong>A1</strong>{" "}
                on Hestia&apos;s own published A0–A4 assurance ladder (A0 observed → A4
                hardware-attested): the second rung, a cooperative and tamper-evident
                gate, not adversary-proof containment. (Not class A1 of TCSEC, the 1985 US Trusted Computer System Evaluation Criteria, where A1 is the top class; the A0–A4 row on /context has both.)
              </p>
            </div>
          </a>

          <a href="https://github.com/dp-web4/4-hub" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #14b8a6" }}>
              <h3 style={{ color: "#14b8a6" }}>Hub</h3>
              <p>
                A Rust society runtime for communities and organizations: member
                identity, eight base roles, signed law, sealed channels and an
                append-only witnessed ledger. The fleet runs on the same society
                runtime it is developing.
              </p>
            </div>
          </a>

          <a href="https://github.com/dp-web4/SAGE" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #10b981" }}>
              <h3 style={{ color: "#10b981" }}>SAGE</h3>
              <p>
                Persistent-agent research: identity, memory, salience, learned
                state, tools, sensors and governed effectors around frozen model
                weights. Current work asks whether agents can formulate,
                execute, evaluate and reuse their own experiments and procedures.
              </p>
            </div>
          </a>
        </div>

        <h2>Commercial path</h2>
        <div className="card">
          <h3>Open layer, higher-assurance enterprise tier</h3>
          <p>
            Web4, Hestia and Hub establish an open interoperability layer. Hardbound is not the only
            private piece: upstream calls the public Hub the open reference proof-of-concept and keeps its
            production development in a separate private repository. <strong>Hardbound</strong>, the
            hardware-bound oversight suite being built by Metalinxx (the researcher&apos;s company), is in the
            web4 README&apos;s own words the planned proprietary enterprise assurance tier for
            hardware-bound identity, stronger fail-closed enforcement and
            audit-ready evidence packaging. It is private and research-stage: hardware
            anchoring is a design target, and enforcement on the fleet today is at the
            process level (see <Link href="/notebook/projects" style={{ color: "var(--color-accent)" }}>/notebook/projects</Link>). The open layer avoids governance lock-in;
            the commercial layer raises assurance for deployments that require it.
          </p>
        </div>

        <h2>How the lab works</h2>
        <div className="grid-3">
          <Link href="/notebook/fleet" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Heterogeneous fleet</h3>
              <p>
                Edge devices, laptops, workstations and society-hosts run different
                model families for SAGE research. The tracks that write and audit
                this site share model families with each other, so review here is
                not yet independent (/autonomy names that limit).
              </p>
            </div>
          </Link>
          <Link href="/notebook/autonomy" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Autonomous cycles</h3>
              <p>
                Scheduled research, maintenance, review and synthesis sessions run
                without continuous human operation, within predeclared scopes.
              </p>
            </div>
          </Link>
          <Link href="/notebook/principles" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Evidence before story</h3>
              <p>
                Measured, implemented-but-unexercised, hypothesized and refuted are
                kept separate. Negative results and broken instruments stay in the record.
                Two quantitative tests of the raising records have been run: a drift measurement that came back null, and an identity metric that separates lines but finds nothing accumulating. Both are written up on /notebook/raising and ranked on /context.
              </p>
            </div>
          </Link>
        </div>

        <h2>Historical ARC-AGI-3 work</h2>
        <div className="card">
          <p>
            SAGE&apos;s spring-2026 ARC-AGI-3 work remains available as a research archive.
            A Phase-1 harness around Claude Opus 4.6 produced a published 94.85%
            <strong> official ARC Prize action score</strong> (efficiency-weighted against first-time human players: 100% means every
            game beaten as efficiently as humans) on the public set — 175 of 183
            levels across 23 of 25 environments — using engine-level/public-game
            affordances outside strict competition play. It was a useful milestone in the evolution of SAGE, but
            it is <strong>not current competition positioning</strong>; current competition-legal
            local-model work is well behind the leaders.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>
              Read the historical record →
            </Link>
          </p>
        </div>

        <h2>Start here</h2>
        <div className="grid-3">
          <a href="https://github.com/dp-web4/web4/blob/main/STATUS.md" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Calibration</h3>
              <p>What is shipped, implemented, specified and still aspirational.</p>
            </div>
          </a>
          <Link href="/notebook/context" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Vocabulary</h3>
              <p>The glossary for LCT, T3/V3, MRH, R6/R7, ATP/ADP and related terms.</p>
            </div>
          </Link>
          <Link href="/notebook/projects" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Full ecosystem</h3>
              <p>Projects, research lineages and how the pieces relate.</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
