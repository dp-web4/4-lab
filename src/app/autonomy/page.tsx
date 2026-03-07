import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Autonomy() {
  return (
    <>
      <Breadcrumbs currentPath="/autonomy" />
      <section className="section">
        <h2>Autonomous Cycles</h2>
        <p>
          The lab runs seven daily autonomous tracks. No human triggers them.
          They execute on cron schedules, review each other&apos;s output, and
          feed discoveries back into the system.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Daily timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-time">03:30</div>
            <div className="timeline-title">Supervisor</div>
            <div className="timeline-desc">
              Reviews system health, checks for failed jobs, validates that
              autonomous tracks completed their previous run. The watchdog.
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
              thoroughly, writes up findings. Currently has 11 topics in queue.
              This is where new knowledge enters the system.
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
            <h3>The Skeptic</h3>
            <p>
              Looks for unsupported claims, missing citations, logical gaps.
              &ldquo;Why should I believe this?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>The Newcomer</h3>
            <p>
              Has no context. Tests whether pages are self-contained and
              jargon is explained. &ldquo;What does this even mean?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>The Practitioner</h3>
            <p>
              Wants to use this in their own work. Tests whether documentation
              is actionable. &ldquo;How do I actually do this?&rdquo;
            </p>
          </div>
          <div className="card">
            <h3>The Connector</h3>
            <p>
              Looks for relationships between pages and projects. Tests
              navigation and cross-references. &ldquo;How does this relate to
              that?&rdquo;
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
