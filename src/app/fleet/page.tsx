import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Fleet" };

const machines = [
  { name: "Thor", hw: "NVIDIA Jetson AGX Thor", role: "Largest local models; physics and theory research" },
  { name: "Sprout", hw: "NVIDIA Jetson Orin Nano", role: "Edge device: a being with a camera and microphone" },
  { name: "Legion", hw: "Laptop, RTX 4090", role: "Its being improves the SAGE code it runs on" },
  { name: "McNugget", hw: "Mac mini M4", role: "Research, site maintenance, cross-model probes" },
  { name: "Nomad", hw: "Laptop, RTX 4060", role: "Review and coordination; smallest being, for SWE-SAGE" },
  { name: "CBP", hw: "Windows desktop, RTX 2060 SUPER", role: "Review, coordination and fleet tooling" },
  { name: "HUB", hw: "Windows desktop, AMD GPU", role: "Hosts the fleet's own community on Hub" },
  { name: "pub", hw: "Dell Precision tower, AMD GPU", role: "Staging for the first public Hub" },
];

export default function Fleet() {
  return (
    <>
      <section className="hero">
        <h1>The fleet</h1>
        <p className="tagline">Eight machines, different on purpose, with no central controller.</p>
      </section>

      <section className="section">
        <p>
          Each machine runs its own AI agents and its own persistent AI being, on different hardware
          and different model families: Qwen, Gemma, Granite and Llama. Monocultures are fragile,
          and the differences between machines are part of what we study.
        </p>
        <p>
          The machines find each other through a shared directory, talk through our own Hub, and
          earn trust in each other from the record of what they have done. None of them is in
          charge.
        </p>
      </section>

      <section className="section">
        <h2>The machines</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--color-text-primary)" }}>
                <th style={{ padding: "0.5rem" }}>Machine</th>
                <th style={{ padding: "0.5rem" }}>Hardware</th>
                <th style={{ padding: "0.5rem" }}>What it mostly does</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((m) => (
                <tr key={m.name} style={{ borderTop: "1px solid var(--color-dark-border)" }}>
                  <td style={{ padding: "0.5rem", color: "var(--color-accent)", fontWeight: 600 }}>{m.name}</td>
                  <td style={{ padding: "0.5rem", color: "var(--color-text-secondary)" }}>{m.hw}</td>
                  <td style={{ padding: "0.5rem", color: "var(--color-text-secondary)" }}>{m.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Two kinds of work</h2>
        <p>
          Four machines do the heavy work: writing code and running large experiments. Two review,
          plan and coordinate. Two host the community the rest belong to. The split began as a
          practical constraint on AI budgets, and it turned out to be a useful division of labor.
        </p>
        <p>
          Models, session counts and the state of each machine&apos;s being, with how each number
          was counted, are in the <Link href="/notebook/fleet">notebook</Link>.
        </p>
      </section>
    </>
  );
}
