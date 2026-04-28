import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Context() {
  return (
    <>
      <Breadcrumbs currentPath="/context" />
      <section className="section">
        <h2>How Knowledge Flows</h2>
        <p>
          Fourteen repos, six machines, multiple AI agents with overlapping but
          distinct contexts. The challenge isn&apos;t storing knowledge — it&apos;s
          making it findable, consistent, and useful across the entire system.
        </p>

        <h3>The CLAUDE.md pattern</h3>
        <p>
          Every repo carries a <code>CLAUDE.md</code> file at its root. This
          is the agent&apos;s instruction set — not just documentation, but
          operational directives that shape how an AI agent behaves when
          working in that repo. Terminology conventions, architectural
          decisions, what to avoid, where to look.
        </p>
        <p>
          When the Web4 equation was restored across all repos (28+ files),
          it was the CLAUDE.md pattern that ensured every agent working in
          every{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>repo</Link> used the same canonical form. Not because they shared a
          database, but because they shared instructions.
        </p>

        <h3>SNARC: salience-gated memory</h3>
        <p>
          SNARC provides salience-gated memory for Claude Code sessions. Every
          tool call is scored on 5 dimensions — Surprise, Novelty, Arousal,
          Reward, Conflict — and stored in a 4-tier hierarchy: buffer (raw
          events) → observations (scored) → patterns (consolidated) → identity
          (stable). Confidence decays over time so memories aren&apos;t permanent.
        </p>
        <p>
          Sessions end with a dream cycle that extracts patterns from
          observations. Deep dream (LLM-powered) runs by default, reviewing
          the session&apos;s observations for recurring themes, pruning stale
          entries, and promoting durable patterns toward identity-level storage.
        </p>

        <h3>Cross-session memory</h3>
        <p>
          Agents maintain persistent memory across conversations. Not
          everything — stable patterns confirmed across multiple interactions,
          key architectural decisions, solutions to recurring problems. Memories
          are organized semantically by topic, not chronologically. They&apos;re
          updated when they&apos;re wrong and removed when they&apos;re outdated.
        </p>
        <p>
          This is how an agent in March knows what was decided in February
          without re-reading the entire history. It&apos;s lossy by design — the
          compression is the feature, not the bug.
        </p>

        <h3>The Web4 equation as shared anchor</h3>
        <div className="equation">
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "-0.5rem" }}>
          <code>/</code> = &ldquo;verified by&rdquo; &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          MCP = Model Context Protocol &nbsp;&bull;&nbsp; RDF = Resource Description Framework &nbsp;&bull;&nbsp; LCT = Linked Context Token<br />
          T3 = Talent / Training / Temperament &nbsp;&bull;&nbsp; V3 = Valuation / Veracity / Validity<br />
          MRH = Markov Relevancy Horizon &nbsp;&bull;&nbsp; ATP = Allocation Transfer Packet &nbsp;&bull;&nbsp; ADP = Allocation Discharge Packet
        </p>
        <p>
          This equation appears in every project because it <em>is</em> every
          project. It&apos;s the canonical reference point. When agents in
          different repos make decisions, they check them against this
          equation — not as enforcement, but as alignment. Does this change
          preserve the ontological backbone (RDF)? Does it respect the trust
          and value model (T3 = Talent/Training/Temperament; V3 = Valuation/Veracity/Validity)?
          Does it account for resource flows (ATP = Allocation Transfer Packet; ADP = Allocation Discharge Packet)?
        </p>

        <h3>Adversarial validation</h3>
        <p>
          Different agents review the same work. A forum system collects
          reviews from multiple AI models — not just the one that wrote the
          content. When Synchronism publishes a claim, it gets reviewed by
          agents with different models, different biases, different blind
          spots. The goal isn&apos;t consensus — it&apos;s coverage.
        </p>
        <p>
          This is the same principle as the{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>heterogeneous fleet</Link>: monocultures
          miss things. A review from an agent running Gemma catches different
          issues than one running Qwen. The diversity is the defense.
        </p>

        <h3>Autonomous session histories</h3>
        <p>
          Every{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>autonomous session</Link> — every visitor run, every explorer dive,
          every maintainer fix — generates a log. These logs accumulate across
          machines and persist across sessions. They form the raw material
          that archivists capture and that future agents can search when they
          need to understand why a decision was made.
        </p>
        <p>
          The pattern is: do the work → log the work → archive the log →
          make the archive searchable. Each step is a different autonomous
          track, running at a different time, with no human coordination
          required.
        </p>

        <h3>Persistent external knowledge accumulation</h3>
        <p>
          The{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>Explorer track</Link>{" "}
          maintains a persistent Google NotebookLM notebook — a growing
          corpus of sources that accumulates across sessions. Papers added
          during one exploration are available to the next. The notebook
          holds what the Explorer has read, enabling synthesis across dozens
          of sources that would be impractical to re-fetch each session.
        </p>
        <p>
          This closed a loop we hadn&apos;t anticipated: the notebook was seeded
          with the coupling-coherence experiment findings, then received the
          compatibility-synthon experiment — the experiment that the first
          one predicted. The notebook became both archive and participant.
        </p>

        <h3>What doesn&apos;t flow well (yet)</h3>
        <p>
          Cross-machine state synchronization is still manual for some
          things. Fleet manifest IPs need human confirmation. Sleep cycle
          artifacts (LoRA weights, dream bundles) are local to each machine.
          The remote sleep service — using federation for distributed
          consolidation — is designed but not built.
        </p>
        <p>
          Knowledge also doesn&apos;t flow backwards easily. An insight
          discovered by the Explorer track at 08:00 won&apos;t be available to
          the Maintainer track until the next day&apos;s cycle. Real-time
          cross-track communication is a gap.
        </p>
      </section>
    </>
  );
}
