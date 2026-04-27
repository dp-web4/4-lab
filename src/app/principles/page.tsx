import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Principles() {
  return (
    <>
      <Breadcrumbs currentPath="/principles" />
      <section className="section">
        <h2>Principles</h2>
        <p>
          These aren&apos;t aspirational values posted on a wall. They&apos;re
          operational patterns that emerged from building the system — things we
          learned the hard way, then codified because they kept being true.
        </p>

        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          <div className="principle-card">
            <div className="principle-title">Substrate, not structure</div>
            <div className="principle-quote">
              &ldquo;You don&apos;t engineer the mound. You engineer placement
              rules.&rdquo;
            </div>
            <div className="principle-text">
              Termites don&apos;t have architects. No termite has a blueprint
              for the mound. Each one follows simple local rules &mdash; where
              to place material based on what neighbors have done &mdash; and
              the mound emerges. All of this &mdash; Web4, SAGE,{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>,{" "}
              <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>the autonomous cycles</Link> &mdash; is
              pheromone field engineering. We build substrate conditions for
              emergence, not architecture of emergence itself. The synthon
              forms because the conditions are right, not because we designed
              it.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Fractal leverage</div>
            <div className="principle-quote">
              Trust formation through interaction — the same Hill function
              kinetics that describe enzyme binding.
            </div>
            <div className="principle-text">
              When a pattern works at one scale, apply it at every scale. Not
              unification for its own sake — pragmatic reuse.
              Self-similar patterns at different scales. The Web4 equation
              describes the cell, not the system. Each entity instantiates
              the full stack at its own scale.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">R&D, not production</div>
            <div className="principle-quote">
              Recursive learning through both success and failure.
            </div>
            <div className="principle-text">
              Nothing here is optimized for deployment. Everything is
              optimized for learning. Stub tests and mocked dependencies give
              false confidence. Real dependencies, real failures, real
              insights. Python for prototyping, Rust for real.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Trust is a relationship</div>
            <div className="principle-quote">
              T3/V3 tensors bind to entity-role pairs via RDF triples.
            </div>
            <div className="principle-text">
              Trust is not a property of an entity. It&apos;s a property of
              the relationship between entities, in a specific context, at a
              specific time. The same agent can be highly trusted for code
              review and untrusted for creative writing. This is why trust
              lives in RDF triples, not in entity attributes.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Synthon: emergent coherence</div>
            <div className="principle-quote">
              An emergent coherence entity formed by recursive interaction.
            </div>
            <div className="principle-text">
              The synthon is the concept that bridges component behavior and
              system emergence. You can&apos;t build a synthon. You can create
              conditions where synthons form: compatible elements, sufficient
              coupling density, shared context. Even 1% coupling gives 35%
              coherence gain — sparse trust suffices.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Document failures</div>
            <div className="principle-quote">
              The p_crit derivation failed catastrophically — 400x error.
            </div>
            <div className="principle-text">
              Failed experiments are signal. The coupling-coherence experiment
              showed that trust thresholds are empirical, not derivable from
              first principles. That&apos;s a finding, not a failure. We
              document what didn&apos;t work alongside what did. Honest
              assessment pages ship with every{" "}
              <Link href="/links" style={{ color: "var(--color-accent)" }}>explainer site</Link>.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Interactive selection</div>
            <div className="principle-quote">
              We don&apos;t create or delete — we interactively select.
            </div>
            <div className="principle-text">
              Raising is not training. We probe what the model responds to,
              observe which attractors surface, and reinforce what resonates.
              The resulting identity is collaborative, not imposed. This
              applies at every scale: raising sessions, affordance shaping,
              fleet diversity, and memory systems.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">Surface your instincts</div>
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
            <div className="principle-title">Research value</div>
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
            <div className="principle-title">Terminology matters</div>
            <div className="principle-quote">
              Web4 is an ontology. Hardbound is oversight.
            </div>
            <div className="principle-text">
              Words shape how you think about the system. Web4 is not
              &ldquo;architecture&rdquo; or &ldquo;infrastructure&rdquo; — it&apos;s
              an ontology. Hardbound is not &ldquo;governance&rdquo; — it&apos;s
              oversight. Cross-domain application is fractal leverage, not
              scope inflation. The right word prevents the wrong mental model.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
