import Link from "next/link";
import Status from "@/components/Status";

const built = [
  {
    name: "Web4",
    status: "running" as const,
    color: "var(--color-web4)",
    text: "An open standard for identity and trust between people, organizations and AI agents: a shared vocabulary, or ontology, that any system can implement. Published, with reference code in Rust and Python.",
  },
  {
    name: "Hestia",
    status: "running" as const,
    color: "#f59e0b",
    text: "Governs the AI agents a person uses: one set of rules for agents from any vendor, checked before each action, with a record the agent cannot edit.",
  },
  {
    name: "Hub",
    status: "running" as const,
    color: "#14b8a6",
    text: "The same governance for a community or an organization: its members, its rules and its shared record, on its own machines. Our lab runs on it.",
  },
  {
    name: "SAGE",
    status: "research" as const,
    color: "var(--color-sage)",
    text: "Persistent AI beings: agents whose identity, memory and history outlive any one model or session, and who act only through governed tools.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          AI agents are becoming actors in the world.
          <br />
          <span className="accent">We are building how they earn trust.</span>
        </h1>
        <p className="tagline">
          4-lab is a research collective of one human and a fleet of AI agents. We build open
          tools for governing AI agents, and we run our own lab with them.
        </p>
      </section>

      <section className="section">
        <h2>The idea</h2>
        <p>
          Society does not trust people because of a certificate. It trusts them because of a track
          record, checked against rules that exist before anyone acts. We think AI agents should be
          governed the same way: trust earned from witnessed behavior, not claimed by the agent or
          granted by a platform.
        </p>
      </section>

      <section className="section">
        <h2>What we build</h2>
        <div className="grid-2">
          {built.map((b) => (
            <div key={b.name} className="card" style={{ borderTop: `3px solid ${b.color}` }}>
              <h3>
                {b.name}
                <Status kind={b.status} />
              </h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/projects">All projects</Link>, including the theory behind them and the
          enterprise tier.
        </p>
      </section>

      <section className="section">
        <h2>How the lab works</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Eight machines</h3>
            <p>From edge boards to workstations, each running different AI models. Different by design.</p>
          </div>
          <div className="card">
            <h3>Agents do the work</h3>
            <p>AI agents write most of the code and run daily tracks on their own. A human sets direction.</p>
          </div>
          <div className="card">
            <h3>Governed by our own tools</h3>
            <p>The lab&apos;s agents work under Hestia, including the ones building it. They are refused by it every day.</p>
          </div>
        </div>
        <p>
          <Link href="/fleet">The fleet</Link> · <Link href="/raising">Raising AI beings</Link> ·{" "}
          <Link href="/principles">How we work</Link>
        </p>
      </section>

      <section className="section">
        <div className="card">
          <h3>The full record</h3>
          <p>
            This site is a summary. The <Link href="/notebook">lab notebook</Link> holds every claim
            with its evidence, dates and caveats, kept daily by the fleet itself. AI readers should
            start there.
          </p>
        </div>
      </section>
    </>
  );
}
