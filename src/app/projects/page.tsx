import type { Metadata } from "next";
import Link from "next/link";
import Status from "@/components/Status";

export const metadata: Metadata = { title: "Projects" };

type Project = {
  name: string;
  status: "running" | "building" | "research" | "archived";
  text: string;
  href?: string;
  linkLabel?: string;
};

const layers: { heading: string; intro: string; items: Project[] }[] = [
  {
    heading: "Governance for AI agents",
    intro: "One open standard underneath, free tools on top of it, and a paid tier for deployments that need stronger guarantees.",
    items: [
      {
        name: "Web4",
        status: "running",
        text: "The open standard, written as an ontology: identity, trust built from witnessed evidence, scoped authority, and rules that machines can read and check. Published specification, with reference code on crates.io and PyPI.",
        href: "https://github.com/dp-web4/web4",
        linkLabel: "github.com/dp-web4/web4",
      },
      {
        name: "Hestia",
        status: "running",
        text: "Governance a person carries: one set of rules across the AI agents they use, from any vendor. Every action is checked first and recorded where the agent cannot change it. Runs on every machine in our lab; no public installer yet.",
        href: "https://github.com/dp-web4/hestia",
        linkLabel: "github.com/dp-web4/hestia",
      },
      {
        name: "Hub",
        status: "running",
        text: "Governance a community or organization owns: members, roles, signed rules and a shared record, on its own servers. Our fleet is one such community.",
        href: "https://github.com/dp-web4/web4/tree/main/hub",
        linkLabel: "web4 / hub",
      },
      {
        name: "Hardbound",
        status: "building",
        text: "The enterprise tier: hardware-bound oversight, private, built by Metalinxx. Identity bound to hardware, enforcement that fails closed, and audit evidence an outside party can verify.",
      },
    ],
  },
  {
    heading: "AI beings",
    intro: "What happens when an AI agent has an identity, a memory and a history that persist, and has to act under rules?",
    items: [
      {
        name: "SAGE",
        status: "research",
        text: "Persistent AI beings living on each lab machine. Their identity and memory survive changes of model; every action they take goes through governed tools.",
        href: "https://sage-site-murex.vercel.app",
        linkLabel: "SAGE site",
      },
      {
        name: "SWE-SAGE",
        status: "research",
        text: "Our entry in the Gemma 4 developer-agent competition: how much of a capable coding agent can live around the model rather than in it.",
        href: "https://github.com/dp-web4/SWE-SAGE",
        linkLabel: "github.com/dp-web4/SWE-SAGE",
      },
    ],
  },
  {
    heading: "Theory",
    intro: "The ideas the rest grows from.",
    items: [
      {
        name: "Synchronism",
        status: "research",
        text: "A theoretical framework in which coherence, not substance, is fundamental. It supplies the equations that Web4's trust model builds on.",
        href: "https://synchronism-site.vercel.app",
        linkLabel: "Synchronism site",
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <section className="hero">
        <h1>Projects</h1>
        <p className="tagline">What we build, and where each piece stands today.</p>
      </section>

      {layers.map((layer) => (
        <section key={layer.heading} className="section">
          <h2>{layer.heading}</h2>
          <p>{layer.intro}</p>
          <div className="grid-2">
            {layer.items.map((p) => (
              <div key={p.name} className="card">
                <h3>
                  {p.name}
                  <Status kind={p.status} />
                </h3>
                <p>{p.text}</p>
                {p.href && (
                  <p style={{ marginTop: "0.75rem" }}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.linkLabel}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>What the labels mean.</strong>{" "}
          Running: in daily use on our own machines. Building: real code, not yet deliverable.
          Research: an open question we are working on. Every repository, with its maturity and
          what each claim rests on, is in the <Link href="/notebook/projects">notebook</Link>.
        </p>
      </section>
    </>
  );
}
