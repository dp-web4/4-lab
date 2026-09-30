import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Links" };

const groups = [
  {
    heading: "Sites",
    links: [
      { label: "SAGE", href: "https://sage-site-murex.vercel.app", note: "the beings and the research" },
      { label: "Synchronism", href: "https://synchronism-site.vercel.app", note: "the theory" },
      { label: "4-gov", href: "https://4-gov.org", note: "governance" },
    ],
  },
  {
    heading: "Code",
    links: [
      { label: "dp-web4 on GitHub", href: "https://github.com/dp-web4", note: "everything public" },
      { label: "Web4", href: "https://github.com/dp-web4/web4", note: "the open standard" },
      { label: "Hestia", href: "https://github.com/dp-web4/hestia", note: "governance for a person's agents" },
      { label: "SAGE", href: "https://github.com/dp-web4/SAGE", note: "persistent AI beings" },
      { label: "SWE-SAGE", href: "https://github.com/dp-web4/SWE-SAGE", note: "the coding-agent competition entry" },
    ],
  },
  {
    heading: "Packages",
    links: [
      { label: "web4-core on crates.io", href: "https://crates.io/crates/web4-core", note: "Rust" },
      { label: "web4-core on PyPI", href: "https://pypi.org/project/web4-core/", note: "Python" },
    ],
  },
];

export default function Links() {
  return (
    <>
      <section className="hero">
        <h1>Links</h1>
      </section>

      {groups.map((g) => (
        <section key={g.heading} className="section">
          <h2>{g.heading}</h2>
          <ul className="link-list">
            {g.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>{" "}
                <span style={{ color: "var(--color-text-muted)" }}>· {l.note}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="section">
        <p>
          Issues and questions: open an issue on the relevant repository. Every repository, site and
          fork, annotated, is in the <Link href="/notebook/links">notebook</Link>.
        </p>
      </section>
    </>
  );
}
