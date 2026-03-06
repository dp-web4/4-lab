import type { Metadata } from "next";
import Link from "next/link";
import SiteSearch from "@/components/SiteSearch";
import "./globals.css";

export const metadata: Metadata = {
  title: "4-lab | Six Machines, One Recursive Learning Loop",
  description:
    "The dp-web4 research collective: 6 machines, 8+ repos, autonomous AI agents that maintain sites, run research, raise other AI entities, and validate their own work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="nav-logo">
            4-lab
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <SiteSearch />
            <Link href="/projects">Projects</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/autonomy">Autonomy</Link>
            <Link href="/raising">Raising</Link>
            <Link href="/principles">Principles</Link>
            <Link href="/context">Context</Link>
            <Link href="/links">Links</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>
            4-lab is the dp-web4 research collective.{" "}
            <Link href="/principles">See how we think.</Link>
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <a
              href="https://github.com/dp-web4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <Link href="/projects">Projects</Link>
            {" · "}
            <Link href="/links">Links</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
