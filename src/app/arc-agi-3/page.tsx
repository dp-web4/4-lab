import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ArcAgi3Page() {
  return (
    <>
      <Breadcrumbs currentPath="/arc-agi-3" />
      <section className="section">
        <h2>ARC-AGI-3</h2>
        <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)" }}>
          Embodiment curriculum for fleet cognition.
        </p>

        <h3>Why we&apos;re doing this</h3>
        <p>
          ARC-AGI-3 presents 25 unknown interactive games with no instructions,
          no documentation, and obfuscated engine source. Agents must discover
          mechanics through observation, build functional world models, and act
          efficiently under a strict action budget.
        </p>
        <p>
          We use this benchmark not primarily to win, but to develop the
          capabilities that Web4 governance requires: world-model discipline
          (build understanding before acting), verification before consequential
          action, persistence without perseveration (update from feedback vs.
          repeat failing approaches), and &mdash; critically &mdash; the
          difference between reading a status and understanding the progression
          that produced it.
        </p>
        <p>
          Every game-playing insight maps fractally to governance. The game
          doesn&apos;t know the agent is an AI. The governance shouldn&apos;t
          need to, either.
        </p>

        <h3>What we bring to the competition</h3>
        <div className="grid-3" style={{ marginTop: "1rem" }}>
          <div className="card" style={{ borderLeft: "3px solid #10b981" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#10b981" }}>SAGE</h4>
            <p style={{ fontSize: "0.875rem" }}>
              The cognition loop. Sense &rarr; salience &rarr; metabolize &rarr;
              posture &rarr; select &rarr; budget &rarr; execute &rarr; learn &rarr;
              remember &rarr; govern &rarr; filter &rarr; act. PolicyGate at step
              8.5 evaluates every action against signed law before it fires.
            </p>
          </div>
          <div className="card" style={{ borderLeft: "3px solid #f97316" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#f97316" }}>Membot</h4>
            <p style={{ fontSize: "0.875rem" }}>
              Retrievable experience cartridges. 768-dim Nomic embeddings +
              binary Hamming codes + keyword reranking. A 4B model with a
              cartridge understands game mechanics correctly; the same model
              without one thinks it&apos;s placing black squares.
            </p>
          </div>
          <div className="card" style={{ borderLeft: "3px solid #3b82f6" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#3b82f6" }}>Web4</h4>
            <p style={{ fontSize: "0.875rem" }}>
              The audit trail. Every action shaped as an R6 record. Every policy
              decision signed against a law bundle. Every salient experience
              consolidated into a dream bundle that IS the training data for
              the next generation.
            </p>
          </div>
        </div>

        <h3>The broader gain</h3>
        <p>
          The 92.82% score is instrumental. The research question is whether
          recognition and adaptation against structured external memory can
          substitute for raw model capacity on genuinely novel problems. Phase 1
          established the capability ceiling using a frontier model (Claude Opus
          4.6). Phase 2 targets transfer to Gemma 4 E4B via membot cartridges
          &mdash; the same world models, action traces, and cross-game patterns,
          retrievable by a model that fits on a 16GB consumer GPU.
        </p>
        <p>
          A well-documented failure is more valuable than an undocumented win.
          The fleet&apos;s game-playing data &mdash; every frame, every action,
          every dead end &mdash; is the corpus a future small model needs to
          learn what works and what doesn&apos;t. The game is the tool. Training
          data is the deliverable.
        </p>

        <h3>Current status</h3>
        <div className="card" style={{
          borderLeft: "3px solid #a855f7",
          background: "rgba(168, 85, 247, 0.04)",
          marginTop: "1rem",
        }}>
          <table style={{ width: "100%", fontSize: "0.875rem", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)", width: "40%" }}>Public set</td>
                <td style={{ padding: "0.375rem 0" }}>
                  24/25 games, 92.82% &mdash;{" "}
                  <a
                    href="https://arcprize.org/scorecards/c4e6442e-077d-4048-9eff-110c5a59ccfb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#a855f7" }}
                  >
                    scorecard
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Fleet</td>
                <td style={{ padding: "0.375rem 0" }}>6 machines, models from 0.8B (Sprout) to 27B (Thor)</td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Methodology</td>
                <td style={{ padding: "0.375rem 0" }}>Source analysis &rarr; world model &rarr; solver &rarr; multi-agent frame-questioning</td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Phase 2 target</td>
                <td style={{ padding: "0.375rem 0" }}>Gemma 4 E4B + membot cartridges (retrieval, not fine-tuning)</td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Kaggle competition</td>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Not attempted (requires Kaggle sandbox deployment)</td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Cost</td>
                <td style={{ padding: "0.375rem 0" }}>~$250 total API spend for 92.82%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Links</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem" }}>
          <a href="https://arcprize.org/scorecards/c4e6442e-077d-4048-9eff-110c5a59ccfb" target="_blank" rel="noopener noreferrer">
            Public scorecard (92.82%) →
          </a>
          <a href="https://github.com/dp-web4/ARC-SAGE" target="_blank" rel="noopener noreferrer">
            ARC-SAGE paper &amp; code (MIT-0) →
          </a>
          <a href="https://arcprize.org/arc-agi/3" target="_blank" rel="noopener noreferrer">
            ARC Prize competition →
          </a>
        </div>
      </section>
    </>
  );
}
