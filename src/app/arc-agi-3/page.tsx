import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ARC-AGI-3 — Spring 2026 Research Record" };

export default function ArcAgi3History() {
  return (
    <section className="section">
      <p style={{ color: "var(--color-text-muted)", fontSize: "0.8125rem" }}>
        <Link href="/" style={{ color: "var(--color-accent)" }}>Home</Link> / Historical research
      </p>

      <h1>ARC-AGI-3 - spring 2026 research record</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginTop: "-0.5rem" }}>
        <strong>ARC-AGI-3</strong> = Abstraction and Reasoning Corpus for Artificial General
        Intelligence, third generation — an external interactive benchmark from ARC Prize in
        which an agent must infer each game&apos;s mechanics through play; no rules are given.{" "}
        <strong>SAGE</strong> = Situation-Aware Governance Engine, this lab&apos;s on-device
        cognition kernel. Both terms, and every other one on this page, are defined in the{" "}
        <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>glossary</Link>.
      </p>

      <div className="card" style={{ borderTop: "3px solid #a855f7", marginBottom: "1.5rem" }}>
        <h2>Status in September 2026</h2>
        <p>
          This page preserves an important SAGE research milestone. It is <strong>not current competition
          positioning</strong> and should not be read as evidence that dp-web4 is near the top of the
          ARC-AGI-3 leaderboard today. Current competition-legal local-model work is well behind the leaders.
        </p>
      </div>

      <h2>What happened</h2>
      <p>
        In April 2026, a Phase-1 SAGE/ARC harness around Claude Opus 4.6 produced a published
        <strong> 94.85% official ARC Prize action score</strong> on the public interactive
        environments. The action score is efficiency-weighted — it credits solving a level in
        fewer actions — so it is not a solve rate, and ARC Prize publishes no baseline to compare
        it against. The run completed 175 of 183 levels across <strong>23 of 25</strong>
        environments: a 92.0% environment-completion rate. Two environments were left unfinished
        (5 of 9 levels, and 6 of 10).
      </p>
      <p>
        The score is real and publicly verifiable. The affordances matter just as much as the number:
        the harness analyzed the games&apos; public engine source and built per-game world-model / solver
        cartridges. That is outside strict from-observation competition play. The result therefore
        demonstrates what the model+harness could do with engine-level context and tooling, not blind
        generalization from observation.
      </p>

      <div className="grid-3" style={{ marginTop: "1rem" }}>
        <div className="stat-card">
          <div className="stat-value">94.85%</div>
          <div className="stat-label">Official ARC Prize action score (efficiency-weighted)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">23/25</div>
          <div className="stat-label">Environments completed (92.0%) — 175/183 levels</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">2026-04-17</div>
          <div className="stat-label">Published milestone</div>
        </div>
      </div>

      <h2>Why it mattered</h2>
      <p>
        The useful lesson was methodological rather than positional: changing the structure around an
        unchanged model can materially change behavior. World models, persistent knowledge, explicit
        skills, prediction and verification became concrete engineering objects rather than prompt ideas.
      </p>
      <p>
        That work fed into the broader SAGE program. The current target is harder: persistent agents that
        can formulate hypotheses, run their own experiments, learn from outcomes, retain reusable
        procedures and act under explicit governance.
      </p>

      <h2>Why it is no longer the headline</h2>
      <p>
        The field moved quickly. Stronger models and stronger competition harnesses now outperform this
        lab&apos;s competition-legal local-model work by a wide margin. Continuing to present the April score
        as a current proof point would create the wrong comparison and obscure the work that has actually
        advanced since then.
      </p>
      <p>
        The benchmark remains useful as a laboratory for perception, memory, experimentation, planning
        and learning. It is no longer the lab&apos;s primary credibility claim.
      </p>

      <h2>Artifacts</h2>
      <ul>
        <li><a href="https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4" target="_blank" rel="noopener noreferrer">Published ARC Prize scorecard</a></li>
        <li><a href="https://github.com/dp-web4/ARC-SAGE" target="_blank" rel="noopener noreferrer">Frozen ARC-SAGE Phase-1 repository</a></li>
        <li><a href="https://github.com/dp-web4/SAGE" target="_blank" rel="noopener noreferrer">Current public SAGE architecture</a></li>
        <li><a href="https://github.com/dp-web4/web4" target="_blank" rel="noopener noreferrer">Current Web4 ontology and packages</a></li>
      </ul>

      <p style={{ marginTop: "2rem", color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
        The historical artifact stays public so the framing can evolve without rewriting the record.
      </p>
    </section>
  );
}
