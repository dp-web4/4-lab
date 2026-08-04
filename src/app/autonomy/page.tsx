import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Autonomy() {
  return (
    <>
      <Breadcrumbs currentPath="/autonomy" />
      <section className="section">
        <h2>Autonomous Cycles</h2>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>31+ autonomous tracks across 6 cognition machines, ~53 sessions per day.</strong>{" "}
          HUB (one of the two society-host machines — see{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>Fleet</Link>), runs
          substrate, not tracks.{" "}
          A track is a scheduled autonomous job — a cron entry with a declared
          scope and a set of repos it writes to. &ldquo;Autonomous&rdquo; here means
          unattended and self-scheduled, not self-directed in the AI-safety sense
          of choosing its own goals: task definitions are authored in advance, not
          chosen by the track itself.{" "}
          No human triggers them. Scope is enforced at the process level —
          scoped credentials, the track registry, and after-the-fact audit, a
          detect-and-revert posture (see Safety boundaries below); hardware-anchored
          Hardbound enforcement is what the research is building toward, not the
          current mechanism. Tracks review each other&apos;s output and feed
          discoveries back into the system.
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
              runs. Six cognition machines, six supervisors — no central watchdog.
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
            <div className="timeline-time">05:30</div>
            <div className="timeline-title">Visitor</div>
            <div className="timeline-desc">
              Four personas visit the{" "}
              <Link href="/links" style={{ color: "var(--color-accent)" }}>public explainer sites</Link> as if encountering
              them for the first time. Tests clarity, navigation, broken links,
              and whether the content makes sense to an outsider.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">06:30</div>
            <div className="timeline-title">Maintainer</div>
            <div className="timeline-desc">
              Acts on visitor feedback. Fixes broken links, clarifies confusing
              sections, updates stale content. The closer in the feedback loop.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-time">07:00</div>
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
              (Google&apos;s AI research-notebook tool) that accumulates sources across sessions — papers, site pages,
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
          that improves surface-level site quality without human intervention —
          semantic validation still depends on human review (see the honest
          assessment below).
        </p>

        <h3>Visitor personas</h3>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          Mechanically, each persona is an LLM agent session on the daily cron,
          prompted with a role and browsing the live deployed site &mdash; the
          personas are prompts, not people, and not fixed scripts.
        </p>
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

        <h2 style={{ marginTop: "2rem" }}>Safety boundaries</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          A word-choice note before the rest of this page: &ldquo;oversight&rdquo;
          below always means the machine-enforced sense — gating, reverting,
          audit logs a peer machine checks — not the human-supervision sense
          the word carries in AI-safety literature (human-in-the-loop review,
          scalable oversight). Read literally, that field&apos;s sense of the
          word would suggest a human gates these pushes; see &ldquo;Consequential
          pushes are not human-gated before they ship&rdquo; below, and the full
          disambiguation on{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
        </p>
        <p>
          The current posture first: boundaries are enforced at the
          process level — scoped credentials, the track registry, and dated
          audit logs reviewed after the fact — not cryptographic guarantees.
          The fleet&apos;s posture is{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>detect-and-revert</strong>,
          described below. Publisher only acts on changes the supervisor has
          cleared. No track can modify the shared fleet registry or acquire
          credentials beyond its declared scope. A description of practice, not
          a verifiable mechanism — the distinction matters.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>Hardbound</strong> — the
          hardware-bound oversight suite — is the research layer this practice is
          building toward: it declares what autonomous operation is expected to do
          and what gets reverted when it doesn&apos;t, with hardware-anchored
          enforcement (key custody and attestation — see{" "}
          <Link href="/context" style={{ color: "var(--color-accent)" }}>Hardbound on /context</Link>)
          as the goal, not the current mechanism. In{" "}
          <Link href="/context#web4" style={{ color: "var(--color-accent)" }}>Web4</Link>{" "}
          (the trust-native ontology) terms, each scheduled
          track is issued an ATP (Allocation Transfer Packet) against its declared resource budget;
          an ADP (Allocation Discharge Packet) records actual spend — the registry
          is the bookkeeping layer that makes autonomous operation auditable.
        </p>

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
        <p>
          A limitation this framing doesn&apos;t name on its own: the visitor
          and maintainer tracks are LLM sessions drawn from the same model
          families as the tracks that author the content they audit — their
          misses are correlated with the authors&apos;, not independent of
          them. That is exactly the risk the fleet names elsewhere —{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>
          &ldquo;monocultures are fragile&rdquo;</Link> — and heterogeneous
          review is a stated{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>
          Hardbound design target</Link>, not a current property of this
          publishing loop.
        </p>
        <h3>Maintainer track: higher blast radius</h3>
        <div className="card" style={{
          borderLeft: "3px solid #ef4444",
          background: "rgba(239, 68, 68, 0.04)",
          marginTop: "0.75rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Known oversight gap
          </p>
          <p style={{ margin: 0 }}>
            The maintainer loop acts on visitor feedback and autonomously commits
            and pushes to Vercel (the platform that hosts and auto-deploys this
            site) — the only track that ships changes to the public
            site without a human gate. Its failure modes differ from the visitor
            loop: a wrong push deploys before review. Known failure patterns:
            acting on a visitor suggestion that pattern-matched but lacked semantic
            depth; applying a correct fix to the wrong context. Rollback path:
            Vercel preserves full deployment history — any push can be reverted to
            the prior deploy in under a minute. Each session produces a dated audit
            log recording what changed, what visitor feedback was acted on, and
            why — the primary human review surface after the session completes.
            Stated plainly: the oversight posture is{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>detect-and-revert</strong>
            {" "}(audit log + sub-minute rollback), not prevent (pre-approval).
            Consequential pushes are not human-gated before they ship.
            Detection interval, stated honestly: the visitor track re-browses
            the live site on the next daily cycle, so automated detection of a
            bad push runs on a roughly 24-hour loop — but only for the failure
            classes that pass can catch. Human review of the audit logs is
            asynchronous, with no committed cadence; for failures the visitor
            loop misses (content that is technically correct but misleading),
            the exposure window is unbounded in principle. That is the current
            gap, not a solved property.
          </p>
        </div>
        <h3 style={{ marginTop: "1.5rem" }}>Publisher track: less reversible, less discussed</h3>
        <div className="card" style={{
          borderLeft: "3px solid #ef4444",
          background: "rgba(239, 68, 68, 0.04)",
          marginTop: "0.75rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            Known oversight gap
          </p>
          <p style={{ margin: 0 }}>
            Publisher (04:30) pushes changes the supervisor track has cleared to
            public repos, not just the explainer sites. &ldquo;Validated&rdquo;
            means the supervisor&apos;s git-hygiene and build-health checks
            passed &mdash; not a semantic review of the change. Unlike a website
            push, a repo push is not fully revertible: once a commit is public
            it can be cloned, forked, and mirrored before any revert lands, and
            rewriting history afterward doesn&apos;t unpublish what was already
            pulled. Maintainer is named the &ldquo;higher blast radius&rdquo;
            track above because it ships on the fastest, least-gated cycle
            &mdash; but by a different metric, unrecoverability, Publisher&apos;s
            repo pushes carry the larger tail risk, and don&apos;t yet have a
            comparable audit-log-plus-rollback story. That gap is unaddressed,
            not solved.
          </p>
        </div>
      </section>
    </>
  );
}
