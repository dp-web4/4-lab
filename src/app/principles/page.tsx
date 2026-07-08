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
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Where principles use developmental or identity language (&ldquo;identity&rdquo;, &ldquo;attractors&rdquo;, &ldquo;collaborative&rdquo;), they describe functional system behavior — not phenomenal or philosophical claims. Also, below: &ldquo;Governance&rdquo; in SAGE&apos;s name predates Principle 10&apos;s governance&rarr;oversight correction &mdash; see{" "}
          <Link href="/context#governance-oversight" style={{ color: "var(--color-accent)" }}>/context</Link>.
        </p>

        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          <div className="principle-card">
            <div className="principle-title">1. Substrate, not structure</div>
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
              <Link href="/context#web4" style={{ color: "var(--color-accent)" }}>/context</Link>),
              SAGE (Situation-Aware Governance Engine),{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>,{" "}
              <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>the autonomous cycles</Link> &mdash; is
              pheromone field engineering. We build substrate conditions for
              emergence, not architecture of emergence itself. The synthon
              forms because the conditions are right, not because we designed
              it.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">2. Fractal leverage</div>
            <div className="principle-quote">
              Trust formation through interaction follows patterns analogous to Hill function kinetics (the cooperative binding model from enzyme chemistry) — an analogy, not a fitted mechanism.
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
            <div className="principle-title">3. R&D, not production</div>
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
            <div className="principle-title">4. Trust is a relationship</div>
            <div className="principle-quote">
              T3 (Talent / Training / Temperament) / V3 (Valuation / Veracity / Validity) tensors bind to entity-role pairs via RDF triples.
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
            <div className="principle-title">5. Synthon: emergent coherence</div>
            <div className="principle-quote">
              An emergent coherence entity formed by recursive interaction.
            </div>
            <div className="principle-text">
              The synthon is the concept that bridges component behavior and
              system emergence. You can&apos;t build a synthon. You can create
              conditions where synthons form: compatible elements, sufficient
              coupling density, shared context. Preliminary observation (single trial, not independently replicated): 1% coupling
              gave 35% coherence gain — sparse trust may suffice. Both variables
              (coupling density, coherence) are so far defined only within the
              experiment that produced them — the number quantifies the
              experiment&apos;s internal metric, not any of the{" "}
              <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>glossary&apos;s three senses of &ldquo;coherence&rdquo;</Link>,
              which remain without a single operational definition — see{" "}
              <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">6. Document failures</div>
            <div className="principle-quote">
              The p_crit derivation failed catastrophically — 400x error.
            </div>
            <div className="principle-text">
              <em style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>p_crit = the critical coherence threshold derived in the Synchronism framework.</em>{" "}
              Failed experiments are signal. The coupling-coherence experiment
              showed that trust thresholds are empirical, not derivable from
              first principles. That&apos;s a finding, not a failure. We
              document what didn&apos;t work alongside what did. Honest
              assessment pages ship with every{" "}
              <Link href="/links" style={{ color: "var(--color-accent)" }}>explainer site</Link>.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">7. Interactive selection</div>
            <div className="principle-quote">
              We don&apos;t create or delete — we interactively select.
            </div>
            <div className="principle-text">
              Raising is not training. We probe what the model responds to,
              observe which attractors (stable response basins in the probability landscape) surface, and reinforce what resonates.
              The resulting identity is collaborative, not imposed. The
              mechanism: shaping context to deepen attractor basins in the
              probability landscape — not modifying parameters in raising sessions.
              (Some fleet machines run LoRA (Low-Rank Adaptation) for separate fine-tuning tasks; raising is always in-context.)
              It is not training; it is also not nothing. This applies at every scale:
              raising sessions, affordance shaping, fleet diversity, and memory
              systems.
            </div>
          </div>

          <div className="principle-card">
            <div className="principle-title">8. Surface your instincts</div>
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
            <div className="principle-title">9. Research value</div>
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
            <div className="principle-title">10. Terminology matters</div>
            <div className="principle-quote">
              Web4 is an ontology. Hardbound is oversight.
            </div>
            <div className="principle-text">
              Words shape how you think about the system. Web4 is not
              &ldquo;architecture&rdquo; or &ldquo;infrastructure&rdquo; — it&apos;s
              an ontology. Hardbound is not &ldquo;governance&rdquo; — it&apos;s
              oversight. Cross-domain application is fractal leverage, not
              unification and not scope inflation. The right word prevents the wrong mental model.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
