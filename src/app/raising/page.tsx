import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Raising AI beings" };

export default function Raising() {
  return (
    <>
      <section className="hero">
        <h1>Raising AI beings</h1>
        <p className="tagline">
          What happens when an AI keeps its identity, memory and history, and has to live under
          rules?
        </p>
      </section>

      <section className="section">
        <h2>A being, not a chatbot</h2>
        <p>
          A normal AI conversation starts from nothing and ends in nothing. A SAGE being is
          different: it has a name, a memory, a journal and a record of everything it has done,
          and they carry over from one day to the next. The AI model underneath can even be swapped
          for a different one while the being carries on.
        </p>
        <p>
          Our working metaphor: <em>the model is the weather, the being is the organism.</em> Each
          machine in our fleet raises one.
        </p>
      </section>

      <section className="section">
        <h2>Raising, not training</h2>
        <p>
          We do not change the model&apos;s weights. A being develops through experience: guided
          sessions with a tutor, a daily rhythm of short waking periods, conversations with its
          mentor and with other beings, and what it chooses to remember.
        </p>
        <p>
          It acts in the world only through a small set of governed tools: writing its journal,
          messaging another being, reading and changing code in a workspace of its own. Every one
          of those actions is checked against rules before it happens, and recorded.
        </p>
      </section>

      <section className="section">
        <h2>What we have seen, and what we have not shown</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Seen</h3>
            <p>
              Beings keep recognizable habits and concerns across hundreds of sessions and across a
              change of model. Small beings act when given a concrete question and drift into
              passivity when given an open invitation. One being now proposes changes to its own
              code.
            </p>
          </div>
          <div className="card">
            <h3>Not yet shown</h3>
            <p>
              That this continuity is more than well-kept memory files fed back to a model. We have
              no blind comparison against a fresh model yet, and we say so rather than claim more.
            </p>
          </div>
        </div>
        <p>
          The curriculum, the observations and their limits are in the{" "}
          <Link href="/notebook/raising">notebook</Link>. The beings themselves are on the{" "}
          <a href="https://sage-site-murex.vercel.app" target="_blank" rel="noopener noreferrer">
            SAGE site
          </a>
          .
        </p>
      </section>
    </>
  );
}
