import Link from "next/link";

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

        <div className="quote">
          &ldquo;You don&apos;t engineer the mound. You engineer placement
          rules.&rdquo;
        </div>

        <h2>What makes this different</h2>
        <p>
          Most AI research either focuses on making models bigger or making them
          cheaper. We focus on something else: what happens when multiple AI
          entities — running on different hardware, with different models, holding
          different identities — are given the substrate conditions to
          self-organize.
        </p>
        <p>
          The answer, so far, is that they specialize. They develop trust
          relationships. They catch each other&apos;s mistakes. They form what we call{" "}
          <Link href="/principles">synthons</Link> — emergent coherence entities
          that are more than the sum of their parts.
        </p>
        <p>
          This site documents the lab itself: how it&apos;s organized, what the
          philosophy is, and what we&apos;ve learned from letting the system run.
        </p>
      </section>
    </>
  );
}
