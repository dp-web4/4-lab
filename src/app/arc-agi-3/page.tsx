import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ArcAgi3Page() {
  return (
    <>
      <Breadcrumbs currentPath="/arc-agi-3" />
      <section className="section">
        <h2>ARC-AGI-3</h2>
        <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)" }}>
          SAGE instances tested in competition &mdash; the games are the test,
          the capability they develop is the product.
        </p>

        <h3>Why we&apos;re doing this</h3>
        <p>
          ARC-AGI-3 presents 25 unknown interactive games with no instructions,
          no documentation, and obfuscated engine source. We use it as an
          external benchmark for the SAGE cognition kernel &mdash; a concrete,
          measurable test of the capabilities the fleet is developing.
        </p>
        <p>
          The games exercise exactly the skills that oversight requires:
          world-model discipline (build understanding before acting),
          verification before consequential action, persistence without
          perseveration (update from feedback vs. repeat failing approaches),
          and &mdash; critically &mdash; the difference between reading a status
          and understanding the progression that produced it. Every game-playing
          insight maps fractally to oversight. The game doesn&apos;t know the
          agent is an AI. The oversight shouldn&apos;t need to, either.
        </p>

        <h3>What we bring to the competition</h3>
        <div className="grid-3" style={{ marginTop: "1rem" }}>
          <div className="card" style={{ borderLeft: "3px solid #10b981" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#10b981" }}>SAGE (Situation-Aware Guidance Engine)</h4>
            <p style={{ fontSize: "0.875rem" }}>
              The cognition loop. Sense &rarr; salience &rarr; metabolize &rarr;
              posture &rarr; select &rarr; budget &rarr; execute &rarr; learn &rarr;
              remember &rarr; oversee &rarr; filter &rarr; act. PolicyGate at step
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
              The ontology layer. In the SAGE loop, Web4 supplies the audit trail
              &mdash; every action shaped as an R6 record, every policy decision
              signed against a law bundle. Web4 (<code>MCP + RDF + LCT + T3/V3*MRH + ATP/ADP</code>)
              is the ontology that makes signed, reviewable action records possible.
            </p>
          </div>
        </div>

        <h3>The broader gain</h3>
        <p>
          The 94.85% score is on the <strong>public game set</strong> using
          Claude Opus 4.6 as the model inside the SAGE cognition loop. This
          demonstrates the ceiling &mdash; what the architecture can achieve
          with a frontier model and network access.
        </p>
        <p>
          The actual competition is harder: the Kaggle sandbox constrains
          entries to <strong>32GB VRAM, no internet access</strong>, and a
          private game set the model has never seen. Our Phase 2 work targets
          this &mdash; building a SAGE competitor that runs locally on Gemma 4
          E4B via membot cartridges, with the world models, action traces,
          and cross-game patterns from Phase 1 retrievable without network.
          That work is producing results.
        </p>
        <p>
          Local models are already clearing game levels &mdash; not by
          memorizing solutions, but by reasoning from retrieved world models
          and computed predictions. The early finding: context engineering
          dominates model size. A well-structured prompt with the right
          world model outperforms a larger model with a generic prompt.
          The architecture is the capability.
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
                  24/25 games, 94.85% &mdash;{" "}
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
                <td style={{ padding: "0.375rem 0" }}>~$250 total API spend for 94.85%</td>
              </tr>
              <tr>
                <td style={{ padding: "0.375rem 0", color: "var(--color-text-muted)" }}>Human leaderboard</td>
                <td style={{ padding: "0.375rem 0" }}>
                  <strong style={{ color: "#a855f7" }}>#3</strong> &mdash; 5,845 actions
                  (fewest of the top 3). The methodology is what humans do;
                  the leaderboard reflects it.{" "}
                  <a
                    href="https://arcprize.org/arc-agi/3/leaderboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#a855f7" }}
                  >
                    leaderboard
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Links</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem" }}>
          <a href="https://arcprize.org/scorecards/c4e6442e-077d-4048-9eff-110c5a59ccfb" target="_blank" rel="noopener noreferrer">
            Public scorecard (94.85%) →
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
