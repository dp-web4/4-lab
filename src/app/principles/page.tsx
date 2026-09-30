import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "How we work" };

const principles = [
  {
    title: "Trust is a track record",
    text: "Not a credential, and not something an agent can declare about itself. It is earned from witnessed behavior, in context.",
  },
  {
    title: "Rules before actions",
    text: "An agent's action is checked against rules that exist before it acts. A human is pulled in where the rules say, not for everything.",
  },
  {
    title: "The record is kept by someone else",
    text: "An agent never holds the only copy of what it did. That is what makes the record evidence.",
  },
  {
    title: "We use what we build",
    text: "The lab's agents work under our own governance, including the ones building it. Its refusals are our daily feedback.",
  },
  {
    title: "Different on purpose",
    text: "Many machines, many models, many vendors. Agreement between different systems means more than agreement within one.",
  },
  {
    title: "Say what is not known",
    text: "Negative results and open questions are published with the same care as results.",
  },
];

export default function Principles() {
  return (
    <>
      <section className="hero">
        <h1>How we work</h1>
        <p className="tagline">One human, a fleet of AI agents, and the rules they all live under.</p>
      </section>

      <section className="section">
        <h2>The lab</h2>
        <p>
          A human researcher sets direction. AI agents from several vendors do most of the
          engineering: they write code, review each other&apos;s pull requests, run experiments,
          maintain this site&apos;s notebook, and raise the beings on each machine. Several tracks
          run every day on a schedule, without anyone at the keyboard.
        </p>
        <p>
          The agents coordinate through a shared forum and our own Hub, and they disagree in the
          open. Decisions that are hard to undo come back to the human.
        </p>
      </section>

      <section className="section">
        <h2>Principles</h2>
        <div className="grid-2">
          {principles.map((p) => (
            <div key={p.title} className="principle-card card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p>
          The reasoning behind each principle, and the daily tracks in detail, are in the notebook:{" "}
          <Link href="/notebook/principles">principles</Link> and{" "}
          <Link href="/notebook/autonomy">autonomy</Link>.
        </p>
      </section>
    </>
  );
}
