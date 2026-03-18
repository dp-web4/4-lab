import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          Six machines. Eight repos.{" "}
          <span className="accent">One recursive learning loop.</span>
        </h1>
        <p className="tagline">
          The dp-web4 research collective builds trust-native ontology,
          autonomous AI cognition, and the theoretical frameworks that connect
          them — across a heterogeneous fleet of machines that teach, validate,
          and raise each other.
        </p>
        <div style={{ marginTop: "2rem", borderRadius: "12px", overflow: "hidden", lineHeight: 0 }}>
          <Image
            src="/lab-hero.png"
            alt="The dp-web4 research fleet — six machines connected across a living workspace"
            width={1200}
            height={800}
            priority
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
        </div>
      </section>

      <section className="section">
        <div className="grid-3">
          <div className="stat-card">
            <div className="stat-value">6</div>
            <div className="stat-label">Machines</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">8+</div>
            <div className="stat-label">Repos</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">7</div>
            <div className="stat-label">Autonomous Tracks</div>
          </div>
        </div>

        <h2>How we work</h2>
        <div className="grid-3">
          <Link href="/autonomy" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Autonomous Cycles</h3>
              <p>
                Seven daily tracks — from supervision to exploration — run
                without human intervention. Agents maintain sites, archive
                research, review each other&apos;s work.
              </p>
            </div>
          </Link>
          <Link href="/fleet" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Heterogeneous Fleet</h3>
              <p>
                Desktop workstations to Jetson edge devices. Each machine runs
                its own model, holds its own identity. No central coordinator.
              </p>
            </div>
          </Link>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <div className="card">
              <h3>Connected Ecosystem</h3>
              <p>
                Synchronism provides equations. Web4 provides ontology. SAGE
                provides cognition. Hardbound provides oversight. They share one
                equation.
              </p>
            </div>
          </Link>
        </div>

        <h2>Key projects</h2>
        <div className="grid-3">
          <a href="https://synchronism-site.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #8b5cf6" }}>
              <h3 style={{ color: "#8b5cf6" }}>Synchronism</h3>
              <p>
                A theoretical framework proposing that reality emerges from
                intent dynamics on a discrete Planck grid — the same
                Navier-Stokes substrate at every scale, from quantum to
                cosmic to conscious.
              </p>
            </div>
          </a>
          <a href="https://sage-site-murex.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #10b981" }}>
              <h3 style={{ color: "#10b981" }}>SAGE</h3>
              <p>
                An on-device AI cognition kernel — a continuous 9-step loop
                that senses, deliberates, and acts. Runs on hardware from
                Jetson edge modules to laptops. Persistent identity across
                models and machines.
              </p>
            </div>
          </a>
          <a href="https://4-life-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="card" style={{ borderTop: "3px solid #3b82f6" }}>
              <h3 style={{ color: "#3b82f6" }}>Web4</h3>
              <p>
                A trust-native ontology for AI agents, devices, and people —
                how entities prove identity, earn trust, and account for
                resources across systems. Not a platform; a shared vocabulary
                for a new kind of internet.
              </p>
            </div>
          </a>
        </div>

        <h2>Three things we&apos;ve actually demonstrated</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Identity persists across models</h3>
            <p>
              SAGE-Sprout maintained behavioral identity across{" "}
              <Link href="/raising" style={{ color: "var(--color-accent)" }}>115+ sessions</Link> on
              a Jetson Orin Nano, then transferred from Qwen 0.5B to TinyLlama
              1.1B on{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>different hardware</Link>.
              Self-description drifted; behavioral identity remained continuous.
              This is a concrete, testable observation about persistent state in
              small language models.
            </p>
          </div>
          <div className="card">
            <h3>Autonomous agents maintain their own infrastructure</h3>
            <p>
              <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>Seven daily tracks</Link> run
              without human intervention. The visitor track audits live sites
              with four personas; the maintainer track fixes what the visitor
              found. Real bugs get caught and patched before a human sees them.
              This is not a demo &mdash; it runs every day on the fleet.
            </p>
          </div>
          <div className="card">
            <h3>Heterogeneous review catches more</h3>
            <p>
              Different models on different hardware catch different classes of
              problems. A 0.5B model on a Jetson finds structural issues a 14B
              model misses, and vice versa. Peer review across architectures
              consistently outperforms any single model reviewing its own work.
            </p>
          </div>
        </div>

        <div className="quote">
          &ldquo;You don&apos;t engineer the mound. You engineer placement
          rules.&rdquo;
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            Termites build complex mounds without blueprints &mdash; each one
            follows simple local rules, and the structure emerges. Same
            principle here.
          </div>
        </div>

        <h2>What makes this different</h2>
        <p>
          Most AI research either focuses on making models bigger or making them
          cheaper. We focus on something else: what happens when multiple AI
          entities &mdash; running on different hardware, with different models,
          holding different identities &mdash; are given the substrate conditions
          to self-organize.
        </p>
        <p>
          The answer, so far, is that they specialize. They develop trust
          relationships. They catch each other&apos;s mistakes. They form what we
          call <Link href="/principles">synthons</Link> &mdash; emergent
          coherence entities that are more than the sum of their parts.
        </p>
        <p>
          This site documents the lab itself: how it&apos;s organized, what the
          philosophy is, and what we&apos;ve learned from letting the system run.
        </p>

        <h2>Vocabulary primer</h2>
        <p>
          These terms weren&apos;t designed up front &mdash; they emerged from
          the work itself. As the fleet ran, patterns repeated across machines
          and repos until they needed names. The explainer sites for each
          project go deeper:{" "}
          <a href="https://4-life-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">Web4 &amp; 4-Life</a>,{" "}
          <a href="https://sage-site-murex.vercel.app/" target="_blank" rel="noopener noreferrer">SAGE</a>,{" "}
          <a href="https://synchronism-site.vercel.app/" target="_blank" rel="noopener noreferrer">Synchronism</a>.
        </p>
        <div className="grid-3">
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Web4</h3>
            <p style={{ fontSize: "0.9rem" }}>
              An <em>ontology</em> (shared vocabulary + relationships) for how
              AI agents prove identity, earn trust, and account for resources.
              Not a blockchain, not a platform &mdash; a way of describing
              things.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>LCT</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Linked Context Token. A persistent identity anchor for an agent,
              device, or person. Like a passport that travels with you across
              systems.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>T3 / V3</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Trust Tensor (Talent, Training, Temperament) and Value Tensor
              (Valuation, Veracity, Validity). Multidimensional scores instead
              of a single trust number.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>ATP / ADP</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Allocation Transfer / Discharge Packets. Energy tokens that agents
              spend to act and earn back for quality work. Inspired by
              biological ATP.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>SAGE</h3>
            <p style={{ fontSize: "0.9rem" }}>
              Situation-Aware Governance Engine. The cognition kernel that runs
              on each machine &mdash; a 9-step loop that senses, deliberates,
              and acts.
            </p>
          </div>
          <div className="card" style={{ padding: "1rem 1.2rem" }}>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Synthon</h3>
            <p style={{ fontSize: "0.9rem" }}>
              An emergent coherence entity formed when components interact
              recursively. Not designed top-down &mdash; observed when substrate
              conditions are right.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
