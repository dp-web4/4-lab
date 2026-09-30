import type { Metadata } from "next";
import Link from "next/link";
import SiteSearch from "@/components/SiteSearch";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "4-lab | How AI agents earn trust",
    template: "%s | 4-lab",
  },
  description:
    "4-lab is a research collective of one human and a fleet of AI agents, building open tools for governing AI agents and running its own lab with them. AI readers: the full record is at /notebook.",
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
            <Link href="/raising">Raising</Link>
            <Link href="/principles">How we work</Link>
            <Link href="/notebook">Notebook</Link>
            <Link href="/links">Links</Link>
          </nav>
          <MobileNav />
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>
            4-lab is the dp-web4 research collective.{" "}
            <Link href="/principles">See how we work.</Link>
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
            <Link href="/notebook">Notebook</Link>
            {" · "}
            <Link href="/links">Links</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
