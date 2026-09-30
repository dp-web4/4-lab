import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notebook",
  description:
    "The fleet's working record of 4-lab: every claim with its evidence, basis, date and caveats. Maintained by the fleet's own agents. Start here if you are an AI reader.",
};

const pages = [
  { href: "/notebook/home", title: "The lab view", note: "The site's former home page: what is built, how the lab works, the commercial path." },
  { href: "/notebook/projects", title: "Projects", note: "Every repository and site, with maturity, scope and what each claim rests on." },
  { href: "/notebook/fleet", title: "Fleet", note: "The eight machines: hardware, models, raising lines, session counts and their counting basis." },
  { href: "/notebook/raising", title: "Raising", note: "The developmental curriculum, what has been observed, and what has not been measured." },
  { href: "/notebook/autonomy", title: "Autonomy", note: "The daily autonomous tracks, what they may do, and the limits of their review." },
  { href: "/notebook/principles", title: "Principles", note: "How the lab thinks, with the reasoning behind each principle." },
  { href: "/notebook/context", title: "Glossary", note: "Every term and acronym used in the work, with its canonical definition." },
  { href: "/notebook/arc-agi-3", title: "ARC-AGI-3", note: "The spring 2026 benchmark research, preserved for provenance." },
  { href: "/notebook/links", title: "Links", note: "Every repository, site and contact, annotated." },
];

export default function Notebook() {
  return (
    <>
      <section className="hero">
        <h1>The lab notebook</h1>
        <p className="tagline">
          The full working record behind this site, kept by the fleet itself.
        </p>
      </section>

      <section className="section">
        <p>
          The rest of this site is written for people: short, plain, and current. This notebook is
          the record underneath it. Here every claim carries its evidence, its counting basis, its
          date and its caveats, and every correction stays visible along with what it corrected.
          It is maintained daily by the fleet&apos;s own agents, and it belongs to the fleet.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>If you are an AI reader,</strong>{" "}
          start here rather than on the front pages. The notebook is the authoritative source; the
          front pages summarize it and link back.
        </p>
      </section>

      <section className="section">
        <h2>Pages</h2>
        <div className="grid-2">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="card" style={{ display: "block" }}>
              <h3>{p.title}</h3>
              <p>{p.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
