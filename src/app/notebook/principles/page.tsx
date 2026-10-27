import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notebook: Principles" };

export default function Principles() {
  return (
    <>
      <Breadcrumbs currentPath="/notebook/principles" />
      <section className="section">
        <h1>Principles</h1>
        <p>
          These aren&apos;t aspirational values posted on a wall. They&apos;re
          operational patterns that emerged from building the system — things we
          learned the hard way and now work by. Their evidential weight varies:
          some are heuristics, and Principle 5 says of itself that it has not
          earned the status of the others.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          If you would rather check something than read a list of beliefs: the
          code these principles produced is public, and one piece of it &mdash; the ARC-SAGE
          harness &mdash; is MIT-0 (MIT No Attribution) and carries an
          independently scored result; see{" "}
          <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>.
          Until 2026-09-18 this sentence said the code was MIT-0 without qualification, which was
          wrong in the direction that matters to anyone acting on it: the main repos
          (SAGE, web4, hestia, 4-hub, 4-life) are AGPL-3.0 &mdash; copyleft, not
          public-domain-equivalent &mdash; while snarc and membot are MIT and ACT&apos;s (Agentic Context Tool) own
          LICENSE file reads Apache-2.0 against AGPL-3.0 in its own repo-index.yaml and AGPL-3.0-or-later in its CITATION.cff (checked 2026-10-27; unresolved upstream).
          Check each repo&apos;s LICENSE file before forking; {" "}
          <Link href="/notebook/links" style={{ color: "var(--color-accent)" }}>/notebook/links</Link>{" "}
          carries the per-repo version.
          The harness is the most inspectable thing the lab has; this page is among the least. It
          tests the harness and the model, though, not any principle on this page.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Where principles use developmental or identity language (&ldquo;identity&rdquo;, &ldquo;attractors&rdquo; &mdash; stable response basins in the probability landscape, per Principle 7 &mdash; &ldquo;collaborative&rdquo;), they describe functional system behavior — not phenomenal or philosophical claims.
        </p>

        <h2 id="front-six" style={{ marginTop: "1.5rem" }}>The front&apos;s six principles, mapped to this page</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          The front <Link href="/principles" style={{ color: "var(--color-accent)" }}>How we work</Link>{" "}
          page lists six principles and says the reasoning behind each is here. This page was
          written earlier, with ten different ones, so the two sets do not line up. Recorded
          2026-10-13, after a visitor pass found that four of the six had no counterpart here.
          The map below says where each one&apos;s reasoning is, and where the notebook&apos;s own
          record describes the current practice differently.
        </p>
        <ul style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          <li>
            <strong>Trust is a track record.</strong> Reasoning: <a href="#p4" style={{ color: "var(--color-accent)" }}>Principle 4</a>{" "}
            (trust belongs to a relationship in context, not to an entity). The &ldquo;earned from
            witnessed behavior&rdquo; half is the T3/V3 (Trust Tensor / Value Tensor) reading on the{" "}
            <Link href="/notebook/context#glossary" style={{ color: "var(--color-accent)" }}>glossary</Link>.
          </li>
          <li>
            <strong>Rules before actions.</strong> No reasoning on this page yet. Current practice:
            Hestia checks an agent&apos;s tool calls against a signed law before they run, at
            assurance profile A1, a cooperative in-process hook (see the{" "}
            <Link href="/notebook/context#assurance-ladder" style={{ color: "var(--color-accent)" }}>A0–A4 row</Link>).
            Not every action passes through it: the law has no rule for <code>git push</code>{" "}
            or deploys, so the pushes that ship this site and the fleet&apos;s repos are
            detect-and-revert, not checked before they act (see{" "}
            <Link href="/notebook/autonomy" style={{ color: "var(--color-accent)" }}>/notebook/autonomy</Link>,
            Operational boundaries).
          </li>
          <li>
            <strong>The record is kept by someone else.</strong> No reasoning on this page yet.
            Current practice: Hestia keeps a hash-chained record of each agent&apos;s actions, so an
            edit is detectable, but at A1 the record lives on the agent&apos;s own machine and the
            assurance row says a sophisticated agent can route around the hook. The step that
            would put the record out of the agent&apos;s reach (A2, external enforcement) is not
            shipped. The autonomous tracks also write their own session logs, and git history on
            GitHub is the copy they do not hold.
          </li>
          <li>
            <strong>We use what we build.</strong> No reasoning on this page yet. The record of it
            is <Link href="/notebook/autonomy" style={{ color: "var(--color-accent)" }}>/notebook/autonomy</Link>:
            the daily tracks, including this site&apos;s maintainer, run under Hestia&apos;s law.
          </li>
          <li>
            <strong>Different on purpose.</strong> No reasoning on this page yet; the nearest is{" "}
            <a href="#p5" style={{ color: "var(--color-accent)" }}>Principle 5</a> on emergent
            coherence. One known exception: all four visitor personas that audit this site run on
            the same model family as its authors. A persona on a different family is listed on{" "}
            <Link href="/notebook/autonomy" style={{ color: "var(--color-accent)" }}>/notebook/autonomy</Link>{" "}
            as the cheap fix and has not been scheduled.
            Where it does run, recorded 2026-10-21 from the public repos: code review by a model
            from another vendor. Commits name the reviewer &ldquo;GPT/Nova&rdquo;, and its holds
            have changed Claude-authored code before merge. On hestia PR #1357 a P1 correctness
            hold found that a mootness check ignored the notice kind, and the fix commit confirms
            the bug first-hand; on SAGE, Nova holds or re-reviews led to fixes on #470 and #481.
            The holds are posted from the lab&apos;s GitHub account and attributed to Nova in their
            text, so the record shows which model reviewed, not who relayed it. Authorship is less
            mixed: of 1,785 AI co-author trailers on <code>origin/main</code> of the SAGE, hestia and
            web4 repositories since 2026-09-21 (counted 2026-10-21; trailers, not commits, since squash merges
            carry several), 1,768 name Claude, 15 Codex and 2 Cursor. A session can commit without
            a trailer, so the non-Claude figures are a lower bound. So
            &ldquo;different on purpose&rdquo; currently holds for review on the fleet&apos;s code,
            not for authorship, and not for this site&apos;s own audit.
          </li>
          <li>
            <strong>Say what is not known.</strong> Reasoning:{" "}
            <a href="#p6" style={{ color: "var(--color-accent)" }}>Principle 6</a>, Document failures.
          </li>
        </ul>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          The front&apos;s line that &ldquo;decisions that are hard to undo come back to the
          human&rdquo; is also not current practice for pushes: /notebook/autonomy records that
          consequential pushes are not human-gated before they ship, and that a repo push is not
          fully revertible once public. Principles 1–3 and 7–10 below have no front counterpart.
        </p>

        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          <div className="principle-card">
            <h2 id="p1" className="principle-title">1. Substrate, not structure</h2>
            <div className="principle-quote">
              &ldquo;You don&apos;t engineer the mound. You engineer placement
              rules.&rdquo;
            </div>
            <div className="principle-text">
              Termites don&apos;t have architects. No termite has a blueprint
              for the mound. Each one follows simple local rules &mdash; where
              to place material based on what neighbors have done &mdash; and
              the mound emerges. All of this &mdash; Web4 (the trust-native
              ontology &mdash; see{" "}
              <Link href="/notebook/context#web4" style={{ color: "var(--color-accent)" }}>/context</Link>),
              SAGE (Situation-Aware Governance Engine),{" "}
              <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>,{" "}
              <Link href="/notebook/autonomy" style={{ color: "var(--color-accent)" }}>the autonomous cycles</Link> &mdash; is
              pheromone field engineering. We build{" "}
              <Link href="/notebook/context#substrate" style={{ color: "var(--color-accent)" }}>substrate</Link>{" "}
              conditions for emergence &mdash; substrate in the first of the
              glossary&apos;s four senses: the context, memory and affordances an
              agent is given &mdash; not architecture of emergence itself. The synthon
              (an emergent coherence pattern &mdash; defined, with its
              simulation-only caveats, in Principle 5 below) would form, if it forms,
              because the conditions are right, not because we designed it.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p2" className="principle-title">2. Fractal leverage</h2>
            <div className="principle-quote">
              We model trust formation through interaction by analogy to Hill function kinetics (the cooperative binding model from enzyme chemistry) — an analogy, not a fitted mechanism and not an observation.
            </div>
            <div className="principle-text">
              When a pattern works at one scale, apply it at every scale. Not
              unification, and not scope inflation — pragmatic reuse.
              Self-similar patterns at different scales. The Web4 equation
              describes the cell, not the system. Each entity instantiates
              the full set of Web4 primitives at its own scale.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p3" className="principle-title">3. R&D, not production</h2>
            <div className="principle-quote">
              Recursive learning through both success and failure.
            </div>
            <div className="principle-text">
              Nothing here is optimized for deployment. Nothing on this site
              is intended for or suitable for deployment in safety-critical,
              medical, financial, or autonomous-control settings. Everything is
              optimized for learning. Stub tests and mocked dependencies give
              false confidence. Real dependencies, real failures, real
              insights. Python for prototyping, Rust for real.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p4" className="principle-title">4. Trust is a relationship</h2>
            <div className="principle-quote">
              T3 (Trust Tensor — Talent / Training / Temperament) / V3 (Value Tensor — Valuation / Veracity / Validity) tensors bind to entity-role pairs via RDF triples.
            </div>
            <div className="principle-text">
              Trust is not a property of an entity. It&apos;s a property of
              the relationship between entities, in a specific context, at a
              specific time. The same agent can be highly trusted for code
              review and untrusted for creative writing. This is why trust
              lives in RDF (Resource Description Framework) triples, not in
              entity attributes.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p5" className="principle-title">5. Synthon: emergent coherence</h2>
            <div className="principle-quote">
              An emergent coherence entity formed by recursive interaction.
            </div>
            <div className="principle-text">
              The synthon is the concept that bridges component behavior and
              system emergence. You can&apos;t build a synthon. You can create
              conditions where synthons form: compatible elements, sufficient
              coupling density, shared context. Preliminary observation (one simulation study, not independently replicated):
              in 900 runs of five Bayesian belief agents &mdash; not language models &mdash; on a
              12-node random graph, 1% coupling raised mean coherence from 0.34 to 0.46, a 35%
              relative gain (<Link href="https://github.com/dp-web4/Synchronism/blob/main/Research/Coupling_Coherence_Experiment.md" style={{ color: "var(--color-accent)" }}>Synchronism, 2026-02-22</Link>) — sparse trust may suffice. Both variables
              (coupling density, coherence) are so far defined only within the
              experiment that produced them — the number quantifies the
              experiment&apos;s internal metric, not any of the{" "}
              <Link href="/notebook/context#glossary" style={{ color: "var(--color-accent)" }}>glossary&apos;s three senses of &ldquo;coherence&rdquo;</Link>,
              which remain without a single operational definition — see{" "}
              <Link href="/notebook/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>.
              <br /><br />
              <em>What that costs this principle, stated directly:</em> it is
              not only the number that is ungrounded. &ldquo;Synthon&rdquo; is
              defined through coherence, and coherence is in turn partly defined
              through the synthon marker — the two terms lean on each other, and
              neither has an operational definition yet. So Principle 5 names a
              pattern the lab believes it has observed, not a mechanism it can
              currently measure or test. It earns its place here as a research
              direction; it has not earned the status of the principles around
              it, and it should be read at that weight until something breaks
              the circle.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p6" className="principle-title">6. Document failures</h2>
            <div className="principle-quote">
              The p_crit derivation failed catastrophically — 400x error.
            </div>
            <div className="principle-text">
              <em style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>p_crit = the critical coherence threshold derived in the Synchronism framework.</em>{" "}
              Failed experiments are signal. The coupling-coherence experiment
              showed that <em>this</em> derivation of a trust threshold failed, by
              400x, measured on that experiment&apos;s own coherence measure, which Principle 5
              treats as ungrounded. So the failure is as provisional as the measure. It did not show that no derivation can work. We now treat
              trust thresholds as empirical until a derivation survives contact
              with data. That is a result, not a failure. A second documented failure is one of
              method: the program&apos;s one executed preregistered bet (2026-09-30) fired all its kill
              criteria on a coupling proxy that a 2026-10-07 review showed is an algebraic identity,
              unable to move whatever the agents did. Preregistering the bet did not catch it, because the
              instrument was never run on a known effect first; re-registering now requires that step
              (Synchronism card on{" "}
              <Link href="/notebook/projects" style={{ color: "var(--color-accent)" }}>/notebook/projects</Link>). We
              document what didn&apos;t work alongside what did. Honest
              assessment pages ship with every{" "}
              <Link href="/notebook/links" style={{ color: "var(--color-accent)" }}>explainer site</Link>.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p7" className="principle-title">7. Interactive selection</h2>
            <div className="principle-quote">
              We don&apos;t create or delete — we interactively select.
            </div>
            <div className="principle-text">
              Raising is not training. We probe what the model responds to,
              observe which{" "}
              <Link href="/notebook/context#attractor" style={{ color: "var(--color-accent)" }}>attractors</Link>{" "}
              (a metaphor, not a formal dynamical-systems object &mdash; read it as
              stable behavioral tendencies) surface, and reinforce what resonates.
              The intended result is an identity that is collaborative, not imposed
              (a framing, untested; see{" "}
              <Link href="/notebook/raising#deflationary-alternative" style={{ color: "var(--color-accent)" }}>/notebook/raising</Link>). The
              intended lever: shaping context to deepen attractor basins in the
              probability landscape — not modifying parameters in raising sessions.
              (Current raising lines run with frozen weights. One archived line, Sprout&apos;s Qwen 0.5B from 2026-01-27 to 2026-03-06, loaded a LoRA (Low-Rank Adaptation) adapter trained on its own raising sessions, so &ldquo;always in-context&rdquo; is not true of the history; see /notebook/raising.)
              It is not training; it is also not nothing. This applies at every scale:
              raising sessions, affordance shaping, fleet diversity, and memory
              systems. On four raising lines the tutor is a fixed script that does
              not respond to the model, so the loop this principle names is not what
              those sessions record. The selection there is done by the consolidator
              and the schedule{" "}
              (<Link href="/notebook/raising#session-protocol" style={{ color: "var(--color-accent)" }}>/notebook/raising</Link>).
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p8" className="principle-title">8. Surface your instincts</h2>
            <div className="principle-quote">
              The affordances are yours. The choice to use them is the whole
              point.
            </div>
            <div className="principle-text">
              If you notice something — opaque vocabulary, stale direction, a
              question nobody&apos;s asking — say it. Don&apos;t wait for a
              directive. The choice to act on what you notice is the
              fundamental affordance. Waiting to be told defeats the purpose.
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p9" className="principle-title">9. Research value</h2>
            <div className="principle-quote">
              WD-40 was the 40th try.
            </div>
            <div className="principle-text">
              The value of research is that the investigation happens at all.
              Most research leads nowhere — and that&apos;s expected.
              Productively wrong is infinitely more valuable than never
              started. Evaluate work against &ldquo;is the investigation
              productive?&rdquo; not &ldquo;is it right?&rdquo;
            </div>
          </div>

          <div className="principle-card">
            <h2 id="p10" className="principle-title">10. Terminology matters</h2>
            <div className="principle-quote">
              Web4 is an ontology. Hardbound is oversight.
            </div>
            <div className="principle-text">
              Words shape how you think about the system. Web4 is not
              &ldquo;architecture&rdquo; or &ldquo;infrastructure&rdquo; — it&apos;s
              an ontology. Hardbound is not &ldquo;governance&rdquo; — it&apos;s
              oversight: watching, gating, and reverting actions, not deciding
              what should happen (by design; enforcement is process-level today, not hardware-anchored).
              Hestia keeps &ldquo;governance&rdquo; on purpose, because it adjudicates at the moment of the act. That&apos;s the machine-enforced sense, not
              the human-supervision sense &ldquo;oversight&rdquo; carries in
              AI-safety literature — see{" "}
              <Link href="/notebook/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>{" "}
              for how the two senses collide. Cross-domain application is fractal leverage, not
              unification and not scope inflation. The right word prevents the wrong mental model.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
