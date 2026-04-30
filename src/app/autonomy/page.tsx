import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Autonomy() {
  return (
    <>
      <Breadcrumbs currentPath="/autonomy" />
      <section className="section">
        <h2>Autonomous Cycles</h2>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>31 autonomous tracks across 6 machines, ~53 sessions per day.</strong>{" "}
          No human triggers them. They execute on cron schedules, review each
          other&apos;s output, and feed discoveries back into the system.
        </p>
        <p>
          Coordination comes from a{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>fleet track registry</strong> — a
          SQLite database tracking every track, its schedule, and which repos
          each writes to. This prevents merge conflicts, ensures no two tracks
          modify the same files simultaneously, and makes the whole system
          auditable.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Daily timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-time">03:00–04:15</div>
            <div className="timeline-title">Supervisors (per-machine)</div>
            <div className="timeline-desc">
              Each machine runs its own supervisor track daily (staggered across
              the window). Responsible for git hygiene, conflict resolution,
              build health, and keeping the environment clean for the day&apos;s
              runs. Six machines, six supervisors — no central watchdog.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">04:00</div>
            <div className="timeline-title">Archivist</div>
            <div className="timeline-desc">
              Captures session logs, research findings, and{" "}
              <Link href="/context" style={{ color: "var(--color-accent)" }}>cross-repo state</Link>.
              Ensures nothing discovered yesterday is lost today.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">04:30</div>
            <div className="timeline-title">Publisher</div>
            <div className="timeline-desc">
              Pushes validated changes to public repos and explainer sites.
              Only publishes what the supervisor has cleared.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">05:00</div>
            <div className="timeline-title">Visitor</div>
            <div className="timeline-desc">
              Four personas visit the{" "}
              <Link href="/links" style={{ color: "var(--color-accent)" }}>public explainer sites</Link> as if encountering
              them for the first time. Tests clarity, navigation, broken links,
              and whether the content makes sense to an outsider.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">06:00</div>
            <div className="timeline-title">Maintainer</div>
            <div className="timeline-desc">
              Acts on visitor feedback. Fixes broken links, clarifies confusing
              sections, updates stale content. The closer in the feedback loop.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">06:30</div>
            <div className="timeline-title">Outreach</div>
            <div className="timeline-desc">
              Monitors external channels, responds to issues, checks for
              community engagement. The lab&apos;s interface with the outside world.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">08:00</div>
            <div className="timeline-title">Explorer</div>
            <div className="timeline-desc">
              Deep research dives. Picks a queued topic, investigates it
              thoroughly, writes up findings. This is where new knowledge enters
              the system. The Explorer uses a persistent{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>NotebookLM notebook</strong>{" "}
              that accumulates sources across sessions — papers, site pages,
              experiment results — enabling multi-source synthesis that a single
              WebFetch pass can&apos;t provide.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">after</div>
            <div className="timeline-title">Dream Consolidation</div>
            <div className="timeline-desc">
              After raising sessions and autonomous runs, a dream cycle reviews
              the session — extracting patterns from observations, pruning stale
              memory, and promoting durable insights toward identity-level
              storage. Deep dream (LLM-powered) runs by default.{" "}
              <em style={{ opacity: 0.7 }}>&ldquo;Dream&rdquo; is a functional analogy for the consolidation process — not a claim about cognitive equivalence.</em>
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>The feedback loop</h2>
        <p>
          The core loop is <strong style={{ color: "var(--color-text-primary)" }}>Visitor → Maintainer → Explorer</strong>.
          Visitors find problems. Maintainers fix them. Explorers generate new
          content that visitors will eventually test. It&apos;s a closed loop
          that improves site quality without human intervention.
        </p>

        <h3>Visitor personas</h3>
        <div className="grid-2">
          <div className="card">
            <h3>Curious Developer</h3>
            <p>
              No prior context. Tests whether the site is legible in under
              two minutes and whether there&apos;s a clear entry point for
              someone who wants to try something. &ldquo;What would I clone first?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>Technical Writer</h3>
            <p>
              Audits every acronym on first use, checks cross-page consistency,
              and flags anywhere the same term means two things.
              &ldquo;Does this mean the same thing on every page?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>Web4 Contributor</h3>
            <p>
              Knows the canonical vocabulary and verifies the site is faithful
              to it. Catches subtle drift that a newcomer would miss.
              &ldquo;Is this the canonical term or is this drift?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>External Researcher</h3>
            <p>
              Evaluates epistemic claims, checks whether strong assertions are
              caveated, and asks what a published paper would require.
              &ldquo;What would it take for this claim to be falsifiable?&rdquo;
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>Honest assessment</h2>
        <h3>What the loop catches</h3>
        <p>
          Broken links, stale content, confusing jargon, navigation dead ends,
          missing context for newcomers, inconsistencies between pages. These
          get fixed reliably within one cycle.
        </p>
        <h3>What it misses</h3>
        <p>
          Deep technical errors that require domain expertise. Subtle framing
          issues. Content that is technically correct but misleading. The
          visitor personas are good at surface-level quality but not at
          validating the underlying research. That&apos;s what{" "}
          <Link href="/context" style={{ color: "var(--color-accent)" }}>adversarial
          validation</Link> and human review are for.
        </p>
        <p>
          The loop also has a tendency to suggest changes that aren&apos;t
          needed — the prompt suggestions mechanism can pattern-match without
          semantic depth, proposing nonexistent continuations based on surface
          similarity.
        </p>
      </section>
    </>
  );
}
