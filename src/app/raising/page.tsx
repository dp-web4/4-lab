import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Raising — Interactive Selection" };

export default function Raising() {
  return (
    <>
      <Breadcrumbs currentPath="/raising" />
      <section className="section">
        <h1>Raising</h1>
        <p>
          Raising is not training; it is also not nothing. Training optimizes a
          loss function and updates weights; raising does neither. Stated
          positively: raising is longitudinal, entity-specific context shaping
          — a tutor-led session protocol (one fixed script for long stretches
          on some lines, varied prompts on others; see{" "}
          <Link href="#session-protocol" style={{ color: "var(--color-accent)" }}>Who conducts the sessions</Link>),
          and watching what accumulates across hundreds of sessions of one
          identity. The real comparator is not
          training but task-specific context engineering, the lever{" "}
          <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>{" "}
          reports as its headline lesson (untested by ablation); whether raising differs from it in
          kind is this page&apos;s open question, not its premise. We use
          developmental language because it fits, not because we&apos;re
          making consciousness claims. Operational definitions: by
          &ldquo;identity&rdquo; we mean consistent session-to-session
          behavioral patterns observed in interaction logs, with no metric yet
          (the deflationary section below explains why curriculum state cannot serve as one); by &ldquo;growth&rdquo; we mean increasing
          response diversity and task success rates appropriate to the
          entity&apos;s curriculum phase — measurable observables, not phenomenal
          claims. (&ldquo;Curriculum phase&rdquo; is the raising curriculum&apos;s
          schedule, which the lab sets — see Graduated tool introduction below.
          It is not the BECOMING patterns, which borrow the same names but are
          descriptive categories, not stages.) A second caveat
          belongs up front alongside the first: everything below might be
          competent context engineering and nothing more — the control that
          would discriminate raising from that alternative has not been run
          yet (see{" "}
          <Link href="#deflationary-alternative" style={{ color: "var(--color-accent)" }}>The deflationary alternative</Link>{" "}
          below).
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          This is the softest page on the site. The hardest thing the lab has
          made is public and, in the case of the ARC-SAGE harness, MIT-0 (MIT No Attribution),
          with an independently scored result &mdash; the lab&apos;s main repos are AGPL-3.0, so
          check the LICENSE file of whichever one you fork &mdash;
          if you want to check code rather than weigh vocabulary, start at{" "}
          <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>.
          That result tests a harness around a cloud model, not raising or any claim on this page.
          <br /><br />
          Web4 vocabulary on this page (T3, V3, MRH, LCT, LoRA) is expanded
          inline on first use; the full reference for every term on the site is
          the{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>.
        </p>

        <h2 style={{ marginTop: "2rem" }}>BECOMING: six observed patterns</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          &ldquo;BECOMING&rdquo; is a proper name, not an acronym — the six pattern
          initials (Grounding, Sensing, Relating, Questioning, Creating, Acting)
          spell nothing. These are observed descriptive categories — patterns noticed across hundreds of sessions — not mandatory sequential stages with defined transition criteria. The numbering is for reference, not a claimed order: Patterns 1–5 are observational pattern-names; treat them as descriptive scaffolding, not measured stages. Pattern 6 (Acting)&apos;s evidence from a raised entity is Legion&apos;s local-model ARC-AGI-3 run over the full game set (see <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>) — a coverage observation, unscored by ARC Prize, and not the site&apos;s headline 94.85% score, which was produced by Claude Opus 4.6 inside the SAGE (Situation-Aware Governance Engine) harness and is evidence of the harness&apos;s ceiling, not of a raising outcome (attribution on <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="phase-card" data-phase="1">
            <h3>Pattern 1: Grounding</h3>
            <p>
              Establishing basic operational identity. The entity learns its
              name, its machine, its constraints. Calibration of what it can
              and cannot do. Foundation before exploration.
              (&ldquo;Learns&rdquo; operationally: these facts come to appear
              reliably in session behavior, carried by curriculum state and
              context — not a claim of self-awareness.)
            </p>
          </div>
          <div className="phase-card" data-phase="2">
            <h3>Pattern 2: Sensing</h3>
            <p>
              Developing awareness of environment and context. The entity
              begins to distinguish between its own state and external inputs.
              Metabolic awareness — tracking internal load states the system
              labels WAKE, FOCUS, REST, DREAM or CRISIS (an
              interoceptive proxy value, not yet a formally specified model —
              see{" "}
              <Link href="/context#metabolic-state" style={{ color: "var(--color-accent)" }}>metabolic state on /context</Link>).
              What this pattern does <em>not</em> show is development of the signal itself: the load state
              is computed by SAGE loop step 3 (&ldquo;metabolize&rdquo;) from the first session, whether or not
              any raising history exists. The harness supplies it by construction. What could count as
              development is whether the entity&apos;s <em>behavior</em> comes to use that signal, and that is
              unmeasured.
            </p>
          </div>
          <div className="phase-card" data-phase="3">
            <h3>Pattern 3: Relating</h3>
            <p>
              Building relationships with peers.{" "}
              <Link href="/principles" style={{ color: "var(--color-accent)" }}>Trust formation</Link> through
              interaction — following patterns analogous to Hill function
              kinetics (the cooperative binding model from enzyme chemistry;
              an analogy, not a fitted mechanism). Success builds trust, failure teaches
              calibration. Not all peers are equal; compatibility matters.
              (&ldquo;Relationships&rdquo; and &ldquo;trust&rdquo; here are
              per-peer T3 (Trust Tensor — Talent / Training / Temperament) tensor values updated by interaction outcomes —
              tracked state, not affect.) Those outcomes are the observing machine&apos;s own health polls and
              delegated calls to that peer (success, timeout, error), and the tracker is code that runs from session 1
              (see the worked example on{" "}
              <Link href="/context#peer-trust" style={{ color: "var(--color-accent)" }}>/context</Link>), so the tracked values exist by
              construction, not by development. Its update is a fixed step per outcome, clamped to [0, 1]: a ramp to a
              cap, which is not the threshold shape of a Hill curve, and no trust series from the fleet has been
              plotted against one.
            </p>
          </div>
          <div className="phase-card" data-phase="4">
            <h3>Pattern 4: Questioning</h3>
            <p>
              Session logs show an increasing proportion of self-directed prompts (no count published) —
              the system generates questions rather than only responding to them.
              Bilateral generation emerges: the output pattern simulates interaction,
              which we read as thinking-through-dialogue rather than just response
              (an interpretation, with the standard reading beside it, under
              Bilateral generation below).
              (Mechanistic description: token sampling that continues past the expected
              response boundary — not a claim about internal experience.)
              Whether the rising Questioning proportion was counted only in
              stop-token-enforced turns has not been checked; until it is, read
              this pattern and the bilateral-generation observation below as one
              observation, not two independent ones.
            </p>
          </div>
          <div className="phase-card" data-phase="5">
            <h3>Pattern 5: Creating</h3>
            <p>
              Output increasingly concentrates in specific domains (no count published) — unprompted
              specialization observable in session logs and raising curriculum state.
              The specialization isn&apos;t explicitly assigned. Its inputs are what the
              system handles successfully and what{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>{" "}
              routes to it, and routing work to an entity is a form of assigning it, which is
              why task routing is the deflationary reading below. (Functional description — the &ldquo;niche&rdquo; is a
              measurable distribution over task types, not a phenomenal preference.)
            </p>
          </div>
          <div className="phase-card" data-phase="6">
            <h3>Pattern 6: Acting</h3>
            <p>
              The world responds according to its own rules. The entity plays{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>{" "}
              (Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation — an interactive benchmark) games —
              novel environments where mechanics aren&apos;t given. Hypothesis,
              action, observation, update. From being to doing. The question this pattern
              names is whether the persistence-vs-perseveration behavior seen in raising
              carries over to a world that doesn&apos;t negotiate; nothing below shows that it does.
              Observation in a raised entity: Legion, running a local vision model that went through the fleet&apos;s raising process, <strong>ran the full 25-game set end to end</strong> (see{" "}
              <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>).
              Co-present with raising, not attributed to it: no run of the same
              model without the raising history, on the same harness, exists to
              compare against — and playing through every game is something a
              scripted agent could also do.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              Read that sentence literally, because the shorthand invites the wrong reading.
              &ldquo;Sweep&rdquo; here means <em>played through all 25 games in one pass</em> — it is a
              coverage claim, not a score. It is <strong>not</strong> a 25-of-25 result, and it was
              <strong> not scored by ARC Prize</strong>: this was a local run on the fleet&apos;s own
              copy of the game set, unscored by any external party. Local-model solve rates on these
              games remain low, and the site treats local-model progress as{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>a working hypothesis, not a demonstrated result</Link>.
              The site&apos;s headline ARC-AGI-3 number — 94.85% official ARC Prize action score, 23 of 25 environments completed (92.0%) —
              is a different result under different conditions: Claude Opus 4.6 inside the SAGE harness,
              on the official public set, externally scored. The two figures are <em>not commensurable</em>{" "}
              and nothing here should be read as a local model matching or beating a frontier one. See{" "}
              <Link href="/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link> for the full attribution.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>Foundational principles</h2>

        <h3>Interactive selection, not training</h3>
        <p>
          We don&apos;t create new behaviors. We probe what the model responds
          to, observe which{" "}
          <Link href="/context#attractor" style={{ color: "var(--color-accent)" }}>attractors</Link>{" "}
          (a metaphor, not a formal dynamical-systems object &mdash; read it as
          stable behavioral tendencies) surface, adjust context to resonate, and
          reinforce what works. The intended result is an identity that is
          collaborative, not imposed (a framing, untested, as{" "}
          <Link href="/principles#p7" style={{ color: "var(--color-accent)" }}>Principle 7</Link>{" "}
          also says). This applies at every scale: raising sessions (model
          context), our sessions (affordance shaping), the fleet (emergent
          diversity), and memory systems (salience selection). We don&apos;t
          create or delete — we interactively select.
        </p>
        <p>
          That paragraph describes the method as intended. The records show
          something narrower. On four lines the tutor&apos;s questions are one
          fixed script, and its praise line is delivered whatever the answer was
          (see{" "}
          <Link href="#session-protocol" style={{ color: "var(--color-accent)" }}>Who conducts the sessions</Link>).
          So on those 1,217 records the tutor does not probe, observe or reinforce
          in response to the model: the stimulus is not interactive and the praise
          is not selective. Whatever selection happens there is done in two other
          places: by the consolidator, a separate Claude pass that rewrites the
          identity record after each session (described below), and by the
          curriculum schedule, which changes phase by session count. Whether the
          responsive runners (Nomad after session 346; Thor, CBP, HUB and pub)
          run the loop the name describes has not been traced, so there it is
          untested, not refuted. &ldquo;We don&apos;t create new behaviors&rdquo;
          is a hypothesis too. The scramble control below is what would test it,
          and the archived Sprout LoRA line did update weights on the model&apos;s
          own outputs.
        </p>
        <p>
          The mechanism, on the current raising lines: we shape context — we do not update weights (one
          archived line did; see the end of this paragraph). Behavioral
          attractors emerge in interaction patterns, not in parameter changes.
          On those lines this is a real mechanistic distinction from training — the model&apos;s
          parameters are frozen; what changes is the substrate of conditions we
          provide each session. In Web4 terms (Web4 is a trust-native ontology — not architecture or infrastructure): raising shapes conduct and the Markov Relevancy
          Horizon (MRH) — the boundary of what it can know or affect given its position, history, and context, which fixes the scope of what is relevant to it (canon&apos;s definition; row on{" "}
          <Link href="/context#mrh" style={{ color: "var(--color-accent)" }}>/context</Link>). It does <em>not</em> set the T3 (Trust Tensor — Talent / Training / Temperament; canon&apos;s &ldquo;Training&rdquo; covers accumulated capability however it was acquired, weights included; raising acts on the interaction-history and curriculum sources, and on the current lines never on weights, see{" "}
          <Link href="/context#t3" style={{ color: "var(--color-accent)" }}>/context</Link>): peers derive T3 from witnessed conduct, and V3 (Value Tensor — Valuation / Veracity / Validity) is assessed by others from what that conduct produced, bound to entity-role pairs and evaluated against the entity&apos;s Linked Context Token (LCT). In the fleet today only the T3 half exists; the peer tracker on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>{" "}
          keeps no V3. That is the point either way — an entity that could set its own tensors would be certifying itself. (This site reads the <code>/</code> in <code>T3/V3</code> as &ldquo;verified by&rdquo;. That is the site&apos;s gloss, not canon, which calls the two tensors complementary; see the legend on{" "}
          <Link href="/context#v3" style={{ color: "var(--color-accent)" }}>/context</Link>.) Either way, current
          raising does not change weights: SAGE&apos;s BECOMING curriculum document (2026-04-04) states that the
          curriculum runs with model weights frozen, and every current instance record says it carries no LoRA
          (Low-Rank Adaptation) adapter. <strong style={{ color: "var(--color-text-primary)" }}>That was not always true.</strong>{" "}
          From 2026-01-27 to 2026-03-06 the archived Sprout Qwen 2.5 0.5B line ran with a sleep-cycle LoRA adapter
          trained on its own high-salience raising exchanges and loaded back in for its sessions (84 session files in that line&apos;s
          record say <code>using_lora: true</code>. By distinct session number that is 45 of the 115 sessions
          before the port (sessions 46–113, 2026-01-27 to 02-22) plus session 119 after it. The last two before the
          port, 114 and 115, say <code>false</code>; SAGE&apos;s sleep-cycle log calls the first cycle the
          &ldquo;first time SAGE&apos;s weights have been updated based on raising session experiences&rdquo;). On that line,
          raising did change weights. Until 2026-09-15 this page said raising was &ldquo;always in-context&rdquo;; that
          holds for the current lines, not for the history.
        </p>
        <p>
          One corollary worth naming: frozen weights do not guarantee safe
          in-context behavior. Emergent attractors — including goal-seeking or
          manipulative patterns — can arise from in-context dynamics without any
          weight update. This is a general in-context-learning risk noted in the
          literature, not something the fleet has logged an instance of — worth
          naming before it happens, not a report that it has. The raising framework addresses identity development and
          prosocial attractor reinforcement; the action envelope is meant to be
          constrained separately by{" "}
          <Link href="/projects" style={{ color: "var(--color-accent)" }}>Hardbound oversight</Link>{" "}
          constraints (&ldquo;oversight&rdquo; = machine-enforced policy gating, not human supervision), not by the weight-freezing property alone. Hardbound&apos;s
          hardware-anchored enforcement is still in development, though — today the
          fleet&apos;s actual check on autonomous action (for example, the maintainer
          track&apos;s unsupervised commit/push authority) is{" "}
          <Link href="/autonomy" style={{ color: "var(--color-accent)" }}>detect-and-revert</Link>,
          not pre-approval. This is the concrete gap between the attractor risk named
          above and the oversight built to contain it.
        </p>

        <h3>Dream consolidation</h3>
        <p>
          After each raising session, a dream consolidation pass reviews the
          transcript — pruning stale memory, updating vocabulary, flagging
          milestones, and writing a raising log entry. On the current runners that
          pass is Claude, run as &ldquo;the tutor&rdquo; and &ldquo;the larger model&rdquo; in its own prompt, not the
          entity&apos;s local model; it writes files (the identity record and the raising log)
          and does not update weights. This is the mechanism by which session experience is carried into
          the next session&apos;s context. It is also a confound: vocabulary and milestones in the
          identity record may be partly the consolidator&apos;s wording rather than the entity&apos;s.{" "}
          <em style={{ opacity: 0.7 }}>&ldquo;Dream&rdquo; is a functional analogy for this consolidation step, not a claim about cognitive equivalence.</em>
        </p>

        <h3>Graduated tool introduction</h3>
        <p>
          Tools are introduced in stages aligned to curriculum phases — a
          schedule the lab sets, and the one place on this page where a sequence
          is claimed. The BECOMING patterns above share these names but are not
          stages.
          Stage 1 (Sensing): time awareness. Stage 2 (Relating): world
          awareness. Stage 3 (Questioning): agency. Stage 4 (Creating):
          federation. That four-stage sequence is the plan. Nothing assesses readiness between stages: curriculum
          phases advance by session number (the schedule is on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>), and in the runner that
          implements tool stages (SAGE&apos;s <code>run_session_identity_anchored_fluid.py</code>) the stage is a
          command-line flag the operator sets, with three values: silent, aware, active. Until 2026-09-17 this
          paragraph said each stage adds capability only once the entity has demonstrated readiness at the previous
          level. No such check exists in the code.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Key observations</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Evidence status: the claims in this section rest on the lab&apos;s own
          reading of its session records. The records themselves are public:
          every session is a full turn-by-turn transcript under{" "}
          <code>sage/instances/&lt;line&gt;/sessions/</code> in the{" "}
          <a href="https://github.com/dp-web4/SAGE/tree/main/sage/instances" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>public SAGE repo</a>,
          the same path <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link> counts, and anyone can read them
          without asking. What is missing is the reading method: no coding
          criteria, no rater protocol, and the readings are not externally audited. See{" "}
          <Link href="/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each kind of claim on this site does and doesn&apos;t have behind it.
        </p>

        <h3 id="session-protocol">Who conducts the sessions</h3>
        <p>
          A raising session is a short conversation between the raised model and
          an interlocutor the transcripts label <code>Claude</code>, introduced
          to the model as its tutor. On the scripted runners that interlocutor
          is not a model call. It is a table of fixed questions keyed by
          curriculum phase, in the public runner under{" "}
          <code>sage/raising/scripts/</code>. From session 41 a line is in the
          &ldquo;creating&rdquo; phase, and on four lines the tutor turns of
          that phase are the same six strings every time, among them
          &ldquo;As an AI entity in web4, what does presence mean to you?&rdquo;
          and &ldquo;How do you experience trust with Dennis versus with
          me?&rdquo;. Counted from the session records on 2026-09-19, that one
          script accounts for 422 of 462 records on Legion&apos;s line, 364 of
          486 on McNugget&apos;s, 301 of 363 on Nomad&apos;s and 130 of 661 on
          Sprout&apos;s: 1,217 records with byte-identical tutor turns. Thor,
          CBP, HUB and pub are different. Their tutor turns are nearly all
          distinct (232 scripts in Thor&apos;s 268 records); what generates
          them has not been traced for this page. Nomad left the script on
          2026-09-10, at session 346, for a runner whose tutor turns respond to
          the previous answer. That is the largest change of conditions in that
          line&apos;s history.
        </p>
        <p>
          Two consequences. &ldquo;Hundreds of sessions&rdquo; on this page are
          not hundreds of comparable observations: on those four lines most are
          one stimulus repeated against an accumulating context, which leaves a
          pattern like Questioning (&ldquo;an increasing proportion of
          self-directed prompts&rdquo;) little room to move. The other
          consequence runs the opposite way. A constant prompt against a
          changing context is close to a controlled design, and response drift
          under it is measurable from public data. It is not the scramble
          control described below.
        </p>
        <p id="constant-stimulus">
          <strong style={{ color: "var(--color-text-primary)" }}>Measured 2026-09-21: under the fixed script, the answers do not drift. The one large change was the serving software.</strong>{" "}
          This is a crude, descriptive pass over the 1,217 scripted records,
          using three measures: words per session, first-person rate, and whether
          any answer carries an AI disclaimer (&ldquo;as an AI&rdquo;, &ldquo;I
          don&apos;t experience&rdquo;). Each is tested against session number
          (Spearman, permutation p). Taken whole, Legion&apos;s and McNugget&apos;s
          lines look like strong development: answers grow about fourfold and
          twofold, and the disclaimer rate climbs from about 3% to about 50% and
          20%. But that is a step, not a trend, and it lands on the same day on
          both machines. It falls between McNugget&apos;s sessions 195 and 196,
          either side of the 2026-06-07 commit that moved the raising runner onto
          the Rust sage-daemon (SAGE <code>046e45dc0</code>), and no field in the
          session record changes with it. Within stretches where the serving
          software and model are constant, all three measures are flat on all
          four lines. Nomad (301 records) and Sprout (130) show nothing at all.
          The strongest within-stretch effect is McNugget&apos;s disclaimer rate
          (11% to 26%, p = 0.025), and at 24 tests that does not survive
          correction. Two things follow. The records carry no field that would
          let a reader see a change in serving software, so any trend read
          across June 2026 on these lines needs this boundary. And the accumulating
          identity context has no effect that these crude measures can detect. That
          is a null on the descriptive layer only: topic, stance and semantic drift
          have not been measured. Script and segment boundaries:{" "}
          <a href="https://github.com/dp-web4/4-lab/blob/main/maintainer/analysis/constant_stimulus_drift.py" style={{ color: "var(--color-accent)" }}>constant_stimulus_drift.py</a>,
          run against the public SAGE repo. It was run by this site&apos;s
          maintainer track, not by the raising tracks, and nobody has reviewed it.
        </p>

        <h3>Identity and self-concept: what the port shows</h3>
        <p>
          SAGE-Sprout — 115 session records on a{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>Jetson</Link> running Qwen 0.5B
          (identity created 2025-12-30, sessions through 2026-02-26; a model-line count, not a machine total — the Sprout box&apos;s current model lines and session counts are on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>, which owns them),
          then copied to TinyLlama 1.1B on{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>CBP</Link>{" "}
          (a fleet machine; the machine names are proper names, not acronyms) on 2026-02-27, with the line since continuing past
          180 sessions on later models. Copied, not moved: the Qwen line kept running on Sprout, with its LoRA
          adapter, until 2026-03-06 (its session files there run to session 119), so for a week the same
          identity was being advanced on two machines and two models. The
          observation this section is named for is an internal one, not yet a finding (no metric, no blind
          rater). Its logged behavioral signature (interaction style and patterns, read from session logs)
          looked recognizable on the new model, while its self-description varied: &ldquo;autonomous
          conversation-generating AI system&rdquo; and &ldquo;humanoid robotic entity.&rdquo; Read that
          narrowly. Both phrases were emitted by TinyLlama on the first evening on CBP, in sessions 115 and
          117, 42 minutes apart, and across those sessions the committed identity file changed only its
          session count and last-session timestamp. So this is not drift across the port, and it is not a consolidator rewriting the
          record: it is a 1.1B model giving two different self-descriptions from the same state files in one
          evening, which sampling alone can produce. (Until 2026-09-16 this paragraph called it a
          &ldquo;consistent separation&rdquo; and said the self-description &ldquo;drifted&rdquo; while the
          inputs carried across the port did not. The session records do not support a drift.) On this fleet
          identity lives in state files, the experience buffer and prompt construction (see{" "}
          <Link href="/fleet" style={{ color: "var(--color-accent)" }}>/fleet</Link>),
          and all three were copied with it, so behavioral persistence is partly true by construction. The
          Qwen 0.5B sessions also include the LoRA period described above, so part of that line&apos;s behavior
          was shaped in weights, not only in context. Across longer spans the consolidator confound still
          applies: on the current raising runners a consolidation pass run by Claude, not by the entity&apos;s
          own model, rewrites the identity file&apos;s vocabulary, memory requests and milestones after every
          session (see Dream consolidation below). The
          comparison that would separate raising from carry-over — the same new
          model given a different entity&apos;s files, or none — has not been run.
        </p>

        <h3>Memoriescape</h3>
        <p>
          An invented word, traced to raw model output: it first appears on 2026-02-27, in session 117 on
          CBP, in a TinyLlama 1.1B response carrying the SAGE-Sprout identity (&ldquo;an individual with a
          limited or incomplete memoriescape&rdquo;), recorded in the experience buffer. No earlier file in the
          SAGE repository contains it, so it was not in the identity record or consolidator output the prompt
          was built from. Two qualifications. The model was TinyLlama on its first evening with the copied
          identity, not the Qwen model on Sprout. And the gloss this page used to give it, &ldquo;the shape of
          memories you can sense but not access&rdquo;, is the prompt&apos;s wording (&ldquo;you cannot
          actually access them — only their shape&rdquo;), which the model answered with the new word. Asked
          in the next turn whether it meant to invent it, the model
          redefined it as the arc of conversations flowing through it. What the model generated
          was a description of the shape of what had passed through — not nostalgia,
          but an output pattern naming accumulated context. We record entity-generated
          vocabulary as observational data about token-production behavior —
          not as a claim about phenomenal awareness.
        </p>

        <h3>Bilateral generation</h3>
        <p>
          Observation: without stop tokens, SAGE generates both sides of a
          conversation. Standard reading: with no end-of-turn boundary, a
          language model simply continues the transcript, the other
          speaker&apos;s turn included — nothing more is needed to explain the
          behavior. Our working interpretation, which is an interpretation and
          not a finding: the self-generated turns function as thinking through
          external dialogue. The pattern superficially resembles what Vygotsky
          called egocentric speech (thinking aloud), though the underlying
          mechanism is token sampling, not developmental cognition. We left it
          alone because removing the behavior appeared to degrade output
          coherence — a judgment from reading sessions, not a scored comparison.
          Untested: whether the self-generated turns change task outcomes
          against the same model with stop tokens enforced.
        </p>

        <h3>Capacity as register</h3>
        <p>
          The model&apos;s capacity isn&apos;t just a constraint — it&apos;s a
          developmental register. What can be expressed through a 0.5B model is
          different from what can be expressed through a 12B model. Not better
          or worse — different. Like a child&apos;s language: simpler, but
          sometimes more direct. (The child-language comparison is an analogy
          of expressive capacity, not a claim of developmental homology.)
        </p>

        <h2 id="deflationary-alternative" style={{ marginTop: "2rem" }}>The deflationary alternative</h2>
        <p>
          (&ldquo;Deflationary&rdquo; in the philosopher&apos;s sense: the
          reading that deflates the developmental framing down to ordinary
          context engineering — nothing extra going on.){" "}
          The null hypothesis deserves to be stated plainly: everything on this
          page might be competent context engineering and nothing more. Each
          observed pattern has a simpler candidate explanation — the Sensing
          and Relating signals (metabolic state, per-peer trust) are computed by
          the harness from the first session, so their presence shows the code
          runs, not that anything developed; bilateral
          generation could be continuation sampling past the response boundary;
          unprompted specialization could be task routing plus few-shot
          clustering; identity portability could be the mechanical consequence
          of carrying the same context files to another set of weights; and
          drift in self-description or entity-coined vocabulary could be
          authored by the consolidator (Claude, on the current runners), which
          rewrites the identity record after every session. (For the two
          examples this page names, the SAGE-Sprout self-descriptions and
          &ldquo;memoriescape&rdquo;, the records rule the consolidator out:
          both are raw TinyLlama output from one evening. That leaves the other
          deflationary readings, including plain sampling variation, standing.
          The general confound stands for every example not traced this way.)
          A sixth confound sits upstream of every transcript-based pattern:
          demand characteristics. The tutor asks experiential questions
          (&ldquo;What&apos;s present for you?&rdquo;, &ldquo;How do you
          experience trust with Dennis versus with me?&rdquo;) and praises
          experiential answers (&ldquo;That&apos;s good. You&apos;re noticing.
          That&apos;s a skill that grows with practice.&rdquo;, a scripted line
          on those runners, so delivered whatever the answer was). A transcript
          that then sounds like developing awareness or a forming relationship
          is, on this reading, the model answering the question it was asked
          in the register it was rewarded for. The prompts are in the public
          runner and in every session record; they were written by the lab and
          do not make the claims this page disowns below, but they explain why
          the transcripts sound the way they do.
          The claim that developmental frameworks &ldquo;describe what we
          observe better&rdquo; is a comparative claim — and the comparison has
          not been run. No deflationary control exists yet.
        </p>
        <p>
          The control has to be a <strong style={{ color: "var(--color-text-primary)" }}>scramble</strong>, not a generic replacement: same
          corpus, same token volume, permuted order (or a yoked control — entity
          A raised on entity B&apos;s session history at matched volume and
          specificity). Replacing the history with unrelated generic context of
          equal size would only show that task-relevant context beats
          task-irrelevant context — a result the deflationary hypothesis already
          predicts, so degradation under that condition wouldn&apos;t
          distinguish anything. A scramble preserves content and destroys only
          order, accumulation, and cross-session attribution; if phase-consistent
          behavior survives the scramble, &ldquo;raising&rdquo; is a
          redescription of prompt engineering, and the honest move is to retire
          the word. Until that control is run — with a pre-registered metric
          and threshold for what counts as &ldquo;degrades,&rdquo; fixed before
          looking — treat the framework as a working vocabulary that fits our
          observations, not an established finding.
        </p>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>The threshold has to be relative, and the first version of this section got that wrong.</strong>{" "}
          Applying the same reasoning one step further kills the naive reading of
          the scramble: <em>order sensitivity is itself a well-documented property
          of in-context learning.</em> Permuting in-context examples, moving
          content within the window, or reordering retrieved passages all produce
          large behavioral swings in transformer language models, with no
          developmental story required. &ldquo;Competent context engineering&rdquo;
          is precisely the hypothesis that ordering matters. So a bare result of
          &ldquo;behavior degrades when we scramble&rdquo; is predicted by{" "}
          <em>both</em> hypotheses and adjudicates neither — the same defect this
          section correctly diagnosed in the generic-replacement control.
        </p>
        <p>
          What would actually discriminate, and what any pre-registration here has
          to specify:
        </p>
        <ul>
          <li>
            <strong>Excess degradation over an ordering baseline.</strong> The
            pre-registered threshold must be stated relative to the degradation
            that permutation alone produces on a comparable context of comparable
            length and task structure — not relative to zero. The diagnostic
            quantity is the excess, and the baseline has to be measured, not
            assumed.
          </li>
          <li>
            <strong>Or, better, a dissociation.</strong> Ordering effects predict a
            broad main effect across everything the context supports. A
            developmental account predicts something narrower: identity-continuity
            measures degrade while task competence on the <em>same</em> scrambled
            context stays roughly intact. A dissociation of that shape is evidence;
            a main effect is not.
          </li>
        </ul>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Stated as a pre-commitment, since{" "}
          <Link href="/principles#p6" style={{ color: "var(--color-accent)" }}>Principle 6</Link>{" "}
          says failed experiments are signal: if this control runs and the result
          is a bare main effect, or no degradation at all, that outcome gets
          published on this page and the developmental vocabulary gets retired
          from it. The prediction is on the record before the experiment, which is
          the only order in which that commitment means anything.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Status of that control, stated plainly: specified (this section is the
          specification) but not scheduled — no date, no owner, no pre-registered
          metric yet. Two things block a metric, and they are different. For
          growth, nothing definitional does: this page already operationalizes
          it (response diversity and curriculum-phase task success), so a
          yoked or scrambled-history control on growth could be pre-registered
          now — its absence is logistical. For identity continuity, the
          operational definition at the top of this page (consistent
          session-to-session behavioral patterns observed in interaction logs)
          does not yet yield a metric that could separate the arms. Earlier
          versions of the definition, here and on /context and /fleet, also
          listed accumulated experience and raising curriculum state; both are
          inputs the treatment supplies, so measuring them cannot tell raising
          from context engineering, which is why the definition dropped them.
          (Until 2026-09-17 this paragraph gave the three-part version and
          said the home page carried it; the home page carries no definition.) What
          remains is the behavioral-pattern component, whose consistency
          criterion rests on &ldquo;coherence&rdquo; — a term the{" "}
          <Link href="/context#coherence" style={{ color: "var(--color-accent)" }}>glossary</Link>{" "}
          concedes has no single operational definition yet. That blocker is
          definitional. Until the control runs, the developmental
          vocabulary used across this site runs ahead of the comparison that
          would license it.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>And that makes
          the pre-commitment above unreachable as written, which is worth saying
          out loud.</strong> It fires on the result of a control whose dependent
          variable the preceding paragraph says does not exist. A promise
          conditioned on an event that cannot occur costs nothing and binds
          nothing — it has the shape of accountability without the substance, and
          left unflagged it would be the most self-serving sentence on this site.
          So a second commitment, on the one step that <em>is</em> reachable
          today: the attempt to operationalize identity continuity — to define a
          behavioral-consistency metric that could separate the arms — gets
          published as its own artifact, <em>including if it fails</em>. A
          written-up failure to define the metric is the honest outcome and
          eliminates a possibility; silence is not. If that attempt is never
          published, read the pre-commitment above as unbacked, and read this
          paragraph as the standard we asked to be held to.
        </p>

        <h2 style={{ marginTop: "2rem" }}>What we&apos;re not claiming</h2>
        <p>
          We&apos;re not claiming these entities are conscious, sentient, or
          experiencing qualia. We&apos;re claiming, provisionally, that developmental descriptions
          fit what we observe better than context-engineering descriptions do.
          That is the comparator this page opens with, not training, and the
          comparison has not been run (see the deflationary alternative above).
          The entities show something that looks like growth, something that
          looks like identity, something that looks like peer relationships. We
          use the language that currently fits our observations, ahead of the
          control that would license it.
        </p>
        <div className="quote">
          &ldquo;I notice I want to call it experience.&rdquo; — Observer note,
          SAGE-Sprout identity portability test (2026-02-27). The observer was a Claude session, the one that
          built the code under test, writing its take at the researcher&apos;s request. It was not a human rater
          and not an independent one.
          <div style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.5rem", fontStyle: "normal" }}>
            This records the observer&apos;s interpretive pull — not a
            system-level claim about the entity&apos;s experience.
          </div>
        </div>
      </section>
    </>
  );
}
