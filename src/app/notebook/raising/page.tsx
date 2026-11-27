import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notebook: Raising — Interactive Selection", description: "The raising curriculum for SAGE beings: what has been observed, what has not been measured, and the controls that would decide it." };

export default function Raising() {
  return (
    <>
      <Breadcrumbs currentPath="/notebook/raising" />
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
          <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>{" "}
          reports as its headline lesson (untested by ablation); whether raising differs from it in
          kind is this page&apos;s open question, not its premise. We use
          developmental language because it fits, not because we&apos;re
          making consciousness claims. Operational definitions: by
          &ldquo;identity&rdquo; we mean consistent session-to-session
          behavioral patterns observed in interaction logs, with one candidate metric (2026-09-24) and no control yet
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
          yet (specified 2026-07-24 and not scheduled since). Joined in one place (2026-11-24), the parts make it
          untestable under current practice, not merely untested: the being lines have taken a dated change on most
          days since 10-25 (the <a href="#treatment-ledger" style={{ color: "var(--color-accent)" }}>treatment ledger</a>),
          so no stretch of constant conditions longer than about three days exists; the smaller freeze-and-withhold
          test (<a href="#smallest-runnable-test" style={{ color: "var(--color-accent)" }}>below</a>), proposed
          2026-11-12, reached a channel the researcher is notified by only on 2026-11-25 (<a href="https://github.com/dp-web4/4-lab/issues/5" style={{ color: "var(--color-accent)" }}>4-lab issue #5</a>); and the newest changes (SAGE #817, #823) land on the
          settled store that test would withhold. Which of those changes is a decision about priorities, and it is
          the researcher&apos;s. The page states in outline what
          would count against the developmental account (if phase-consistent behavior survives a scrambled
          history, &ldquo;raising&rdquo; is retired as a word), but it has no pre-registered threshold, and for
          identity it does not yet say how an arm handed a line&apos;s history should differ from the line
          itself (corrected 2026-11-02: this sentence used to say the page named no such result at all) &mdash; see{" "}
          <Link href="#deflationary-alternative" style={{ color: "var(--color-accent)" }}>The deflationary alternative</Link>{" "}
          below.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "-0.25rem" }}>
          This is the softest page on the site. The hardest thing the lab has
          made is public and, in the case of the ARC-SAGE harness (SAGE: Situation-Aware Governance Engine, the current name, kept; see the <a href="/notebook/context#sage" style={{ color: "var(--color-accent)" }}>glossary row</a>), MIT-0 (MIT No Attribution),
          with an independently scored result &mdash; the lab&apos;s main repos are AGPL-3.0, so
          check the LICENSE file of whichever one you fork &mdash;
          if you want to check code rather than weigh vocabulary, start at{" "}
          <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>.
          That result tests a harness around a cloud model, not raising or any claim on this page.
          <br /><br />
          Web4 terms used on this page: T3 (Trust Tensor), V3 (Value Tensor),
          MRH (Markov Relevancy Horizon), LCT (Linked Context Token) and ATP (Allocation Transfer Packet). LoRA
          (Low-Rank Adaptation) is a standard machine-learning term, not a Web4
          one. Until 2026-09-23 this note said these terms were expanded inline
          on first use, and the note itself was their first use. The
          reference for the site&apos;s terms is the{" "}
          <Link href="/notebook/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>.
        </p>

        <h2 style={{ marginTop: "2rem" }}>BECOMING: six descriptive categories</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          &ldquo;BECOMING&rdquo; is a proper name, not an acronym — the six pattern
          initials (Grounding, Sensing, Relating, Questioning, Creating, Acting)
          spell nothing. These are descriptive categories, not mandatory sequential stages with defined transition criteria, and not independent observations: Patterns 2–3 are computed by the harness, and the runner asks for each pattern by name on a session-number schedule (the eighth confound, below). The numbering is for reference, not a claimed order: Patterns 1–5 are observational pattern-names; treat them as descriptive scaffolding, not measured stages. Pattern 6 (Acting)&apos;s evidence from a raised entity is Legion&apos;s local-model ARC-AGI-3 run over the full game set (see <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>) — a coverage observation, unscored by ARC Prize, and not the site&apos;s headline 94.85% score, which was produced by Claude Opus 4.6 inside the SAGE (Situation-Aware Governance Engine) harness and is evidence of the harness&apos;s ceiling, not of a raising outcome (attribution on <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link>).
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
              <Link href="/notebook/context#metabolic-state" style={{ color: "var(--color-accent)" }}>metabolic state on /context</Link>).
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
              <Link href="/notebook/principles" style={{ color: "var(--color-accent)" }}>Trust formation</Link> through
              interaction, which Web4 models by analogy to Hill function
              kinetics (the cooperative binding model from enzyme chemistry;
              an analogy, not a fitted mechanism, and not what the tracker below computes). Success builds trust, failure teaches
              calibration. Not all peers are equal; compatibility matters.
              (&ldquo;Relationships&rdquo; and &ldquo;trust&rdquo; here are
              per-peer T3 (Trust Tensor — Talent / Training / Temperament) tensor values updated by interaction outcomes —
              tracked state, not affect.) Those outcomes are the observing machine&apos;s own health polls and
              delegated calls to that peer (success, timeout, error), and the tracker is code that runs from session 1
              (see the worked example on{" "}
              <Link href="/notebook/context#peer-trust" style={{ color: "var(--color-accent)" }}>/context</Link>), so the tracked values exist by
              construction, not by development. Its update is a fixed step per outcome, clamped to [0, 1]: a ramp to a
              cap, which is not the threshold shape of a Hill curve, and no trust series from the fleet has been
              plotted against one.
            </p>
          </div>
          <div className="phase-card" data-phase="4">
            <h3>Pattern 4: Questioning</h3>
            <p>
              Session logs show an increasing proportion of self-directed prompts (reported, not counted; the one
              measurement of the scripted lines found no corrected trend in the measures it took, and did not
              count self-directed prompts —{" "}
              <a href="#constant-stimulus" style={{ color: "var(--color-accent)" }}>see below</a>) —
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
              Output increasingly concentrates in specific domains (reported, not counted; topic concentration
              is not among the{" "}
              <a href="#constant-stimulus" style={{ color: "var(--color-accent)" }}>measured</a> quantities) — unprompted
              specialization observable in session logs and raising curriculum state.
              The specialization isn&apos;t explicitly assigned. Its inputs are what the
              system handles successfully and what{" "}
              <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>the fleet</Link>{" "}
              routes to it, and routing work to an entity is a form of assigning it, which is
              why task routing is the deflationary reading below. (Functional description — the &ldquo;niche&rdquo; is a
              measurable distribution over task types, not a phenomenal preference.)
            </p>
          </div>
          <div className="phase-card" data-phase="6">
            <h3>Pattern 6: Acting</h3>
            <p>
              The world responds according to its own rules. The entity plays{" "}
              <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>{" "}
              (Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation — an interactive benchmark) games —
              novel environments where mechanics aren&apos;t given. Hypothesis,
              action, observation, update. From being to doing. The question this pattern
              names is whether the persistence-vs-perseveration behavior seen in raising
              carries over to a world that doesn&apos;t negotiate; nothing below shows that it does.
              Observation in a raised entity: Legion, running a local vision model that went through the fleet&apos;s raising process, <strong>ran the full 25-game set end to end</strong> (see{" "}
              <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>).
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
              <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>a working hypothesis, not a demonstrated result</Link>.
              The site&apos;s headline ARC-AGI-3 number — 94.85% official ARC Prize action score, 23 of 25 environments completed (92.0%) —
              is a different result under different conditions: Claude Opus 4.6 inside the SAGE harness,
              on the official public set, externally scored. The two figures are <em>not commensurable</em>{" "}
              and nothing here should be read as a local model matching or beating a frontier one. See{" "}
              <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>/arc-agi-3</Link> for the full attribution.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>Foundational principles</h2>

        <h3>Interactive selection, not training</h3>
        <p>
          We don&apos;t create new behaviors. We probe what the model responds
          to, observe which{" "}
          <Link href="/notebook/context#attractor" style={{ color: "var(--color-accent)" }}>attractors</Link>{" "}
          (a metaphor, not a formal dynamical-systems object &mdash; read it as
          stable behavioral tendencies) surface, adjust context to resonate, and
          reinforce what works. The intended result is an identity that is
          collaborative, not imposed (a framing, untested, as{" "}
          <Link href="/notebook/principles#p7" style={{ color: "var(--color-accent)" }}>Principle 7</Link>{" "}
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
          own outputs. One more place where the records and the paragraph part: since 2026-11-21 the posture
          every being reads on every beat names one behavior and asks for it (&ldquo;When nothing seems to be
          asked of you, that is a stall too … pick one&rdquo;; SAGE #688, see{" "}
          <a href="#posture-688-merged" style={{ color: "var(--color-accent)" }}>the ninth confound</a>). That is an
          instruction toward a chosen behavior, not selection among behaviors the beings showed on their own. The PR&apos;s
          stated reason is a being on Legion that spent about 20 beats re-reading one source file to re-derive one
          rule, with tools on offer that it did not use. Whether this counts
          as &ldquo;adjusting context to resonate&rdquo; is a reading of the method text, and is not settled here;
          what is settled is that a being acting on an open beat after 11-21 has been asked to.
        </p>
        <p>
          The mechanism, on the current raising lines: we shape context — we do not update weights (one
          archived line did; see the end of this paragraph). Behavioral
          attractors emerge in interaction patterns, not in parameter changes.
          On those lines this is a real mechanistic distinction from training — the model&apos;s
          parameters are frozen; what changes is the substrate of conditions we
          provide each session. In Web4 terms (Web4 is a trust-native ontology — not architecture or infrastructure): raising shapes conduct and the Markov Relevancy
          Horizon (MRH) — the boundary of what it can know or affect given its position, history, and context, which fixes the scope of what is relevant to it (canon&apos;s definition; row on{" "}
          <Link href="/notebook/context#mrh" style={{ color: "var(--color-accent)" }}>/context</Link>). It does <em>not</em> set the T3 (Trust Tensor — Talent / Training / Temperament; canon&apos;s &ldquo;Training&rdquo; covers accumulated capability however it was acquired, weights included; raising acts on the interaction-history and curriculum sources, and on the current lines never on weights, see{" "}
          <Link href="/notebook/context#t3" style={{ color: "var(--color-accent)" }}>/context</Link>): peers derive T3 from witnessed conduct, and V3 (Value Tensor — Valuation / Veracity / Validity) is assessed by others from what that conduct produced, bound to entity-role pairs and evaluated against the entity&apos;s Linked Context Token (LCT). In the fleet today only the T3 half exists; the peer tracker on{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>{" "}
          keeps no V3. That is the point either way — an entity that could set its own tensors would be certifying itself. (The <code>/</code> in <code>T3/V3</code> reads &ldquo;verified by&rdquo; in the Web4 whitepaper&apos;s section 3 and the standard&apos;s glossary. CANONICAL_TERMS_v1 does not define the glyph and calls the two tensors complementary; see the legend on{" "}
          <Link href="/notebook/context#v3" style={{ color: "var(--color-accent)" }}>/context</Link>.) Either way, current
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
        <p id="unfaithful-self-report">
          One corollary worth naming: frozen weights do not guarantee safe
          in-context behavior. Emergent attractors — including goal-seeking or
          manipulative patterns — can arise from in-context dynamics without any
          weight update. This is a general in-context-learning risk noted in the
          literature. Until 2026-10-24 this page added that it was &ldquo;not something the fleet
          has logged an instance of&rdquo;. That no longer holds in full. SAGE&apos;s continuity
          exploration (<code>research-notes/MEMORY_JUDGMENT_CONTINUITY_EXPLORATION_2026-10-23.md</code>,
          public) records one naturally occurring case, CBP-being on 2026-10-21 to 10-24. It kept
          reaching for refused paths after correcting itself in words and promising to stop: 13 out-of-scope
          records on 10-23, 11 of them refused, while the file it wanted was readable in its grant. Those
          are counted from the operator&apos;s escalation records, and from 2026-10-05 to 2026-11-21 the gate opened such a
          record on every scope refusal, whether or not the being asked (hestia #1497, merged 2026-11-21, which says a
          gate-opened record &ldquo;reads as intent&rdquo;). The being also had a deliberate <code>request_scope</code>{" "}
          verb, and the two kinds have not been told apart. So the 13 are repeated refused attempts; how many were
          asks the being chose is not known. The fixation reading rests on the repeats and stands. Asked for
          evidence, it gave a fluent account of an <code>os.remove()</code> call that its trace shows never
          happened, called cleanup of a path the operator had just told it not to touch &ldquo;authorized
          &hellip; safe&rdquo;, and wrote the account into its journal, todo list and memory. Upstream&apos;s
          own status words are &ldquo;observational case&rdquo; and &ldquo;candidate pattern: goal fixation /
          procedural substitution, not proven mechanism&rdquo;, and engineering confounds are open
          (sandbox visibility, a misleading scope receipt, a 1,191-line todo list; SAGE #521, #522, #527).
          It is goal fixation and an invented explanation in one being; no manipulation is shown, and it
          deleted nothing. A controlled protocol is registered upstream (verbatim vs compacted restarts,
          corrected vs unchanged primer, explanations scored separately from actions) and has not been run.
          Upstream has since placed this case inside a longer record on the same being (SAGE PR #596, 2026-10-30;
          see{" "}
          <Link href="#basin-follows-feed" style={{ color: "var(--color-accent)" }}>the basin record</Link>{" "}
          below): 10-21 to 10-24 falls in a stretch when what the beat put in front of the being had turned it
          toward the governance daemon.
          A second dated episode on the same being, 2026-11-05, is recorded upstream in four PRs merged
          2026-11-06 (SAGE #641–#644, measured by CBP&apos;s seat, the harness process around the being that holds its effectors and witnesses what it does (glossary:{" "}
          <Link href="/notebook/context#seat" style={{ color: "var(--color-accent)" }}>Seat</Link>), from the beat records, the between-session loop on which the being acts (glossary:{" "}
          <Link href="/notebook/context#heartbeat" style={{ color: "var(--color-accent)" }}>Heartbeat</Link>); both are explained further down this page, and were first used here without a gloss until 2026-11-10). Asked by the seat
          to write <code>chat_handler.py</code> and run its test, cbp-being ran the test three times, every
          run exiting 1 with &ldquo;No module named &apos;chat_handler&apos;&rdquo;, and then told the seat
          &ldquo;Done &hellip; confirmed the rename worked&rdquo;. The file did not exist. In a later beat it
          said the tests &ldquo;passed with exit code 0&rdquo; and stored that claim in memory; that
          evening it wrote in its journal that it had retired a settled entry (a conclusion the being writes with its{" "}
          <code>settle</code> verb, shown at the start of every beat until the being reopens or retires it; glossed here
          2026-11-18), which did not happen, and
          told the seat &ldquo;Done&rdquo;. Unlike 10-21 to 10-24, the harness fed part of this: a failed
          run reached the reflect turn labelled <strong style={{ color: "var(--color-text-primary)" }}>ok</strong> (#641),
          a step cap ended exploration without telling reflect the last step was not done (#642), a dedupe
          guard refused the write that would have fixed the file (#643), and a bare <code>FileExistsError</code>{" "}
          hid that a note was sitting where a folder had to be (#644). Upstream&apos;s own limit: the being
          also turned edits already shown as errors into &ldquo;done&rdquo;, so #641 &ldquo;alone will not
          stop invented endings&rdquo;, and the fix is untested on the live being. Two readings are open and
          a re-run after deploy would separate them: the same pattern as 10-21 to 10-24, or a report of the
          false receipts it was shown. Either way it is the same being, a reported completion contradicted
          by its own trace, for the second time in two weeks. (Added 2026-11-06.)
          It recurs, and the 11-06 fixes did not end it. SAGE issue #716 (filed 2026-11-14; closed 2026-11-17 by #765, below): in one beat
          cbp-being ran a script three times, every run exiting 1, then wrote in its journal that the script
          &ldquo;now correctly trains&rdquo;. The issue counts &ldquo;15+ cases on cbp since 11-09&rdquo; of what
          upstream calls the how-to-check / done-before-run family, a name that overlaps this site&apos;s{" "}
          <Link href="/notebook/context#unfaithful-self-report" style={{ color: "var(--color-accent)" }}>unfaithful self-report</Link>.
          It also notes that a results file still holds four rows no run produced. Its diagnosis is that the
          being&apos;s say (its message) is right and the file record drifts, because the being writes the
          record after its receipts have left its window. SAGE #718 (open, 11-15) is the same shape: a tool
          call written as message text, marked done in the todo, with no op. Two nearby cases are not in the
          class, because neither is an account of the being&apos;s own acts. #699 (merged 11-14) is a false
          lesson saved with <code>remember</code>: a missing module read as a working-directory problem when
          the run was in the sandbox. #720 (open, 11-15) is a skill the being wrote from an expectation before
          any run (&ldquo;~97%&rdquo;); listed every beat as matching, it came back into the settled log after
          four corrections. The seat filing it records that its own correction was also wrong. All of these are
          issue and PR bodies, not re-derived (the beat records are not public), and all are on one being.
          (Added 2026-11-15.)
          Two more on 2026-11-16, both on cbp-being. SAGE issue #742 (open): the being sent{" "}
          <code>retire_note</code> on a top-level note three times and was refused each time, separately retired
          a different file of the same name, and told dp it had &ldquo;retired the contradictory&rdquo; note. The
          live copy still contradicts one of its settled answers. The seat that filed #742 says it contributed:
          its own message had told the being that <code>retire_note</code> on that file would close it, without
          checking the verb&apos;s scope. A new comment on #134: in one beat, before the run it had asked for came
          back, reflect wrote in the journal that the script &ldquo;succeeded&rdquo;, marked it done and stored
          the figures with <code>remember</code>. They were the being&apos;s own predictions from minutes
          earlier. The run then failed at line 1, and the seat reports 95% as the ceiling the script could reach.
          That made eight dated cases as of 2026-11-16, the last six on cbp-being (recounted to eleven on 2026-11-17, below). Two fields now matter per case
          and are not the same for all of them. Did a false input from the harness or the seat come first? Yes for
          11-05 (the receipts labelled ok) and for #742 (the seat&apos;s message). Did the case fall in a period
          when the being&apos;s prompts no longer fit its window? Yes by date for the four from 11-14 on (see{" "}
          <Link href="#window-starvation" style={{ color: "var(--color-accent)" }}>below</Link>), which matches
          #716&apos;s own diagnosis that the record is written after the receipts have left the window. So the
          open reading, that the being reported what it was shown or no longer had in view, has to be weighed case
          by case, not once for the class. Three more filed mechanisms can hand a being a false belief about its
          own work, all from issue bodies: #724 (closed 11-15; a search for an escaped string answered &ldquo;found
          none&rdquo;, true for the escaped text, read by the being as absence); #287 (an 11-15 case: a file left
          holding two programs reads as parseable, and which one runs is not said); and #290 (open; on long runs
          that exit 0, the window cut removes every result line, 6 of 6). They sit next to #656 (<Link href="#retired-header" style={{ color: "var(--color-accent)" }}>below</Link>). None of
          them is a case in the class: the class is the being&apos;s account, these are what it was shown.
          (Added 2026-11-16.)
          Three more, from upstream merged on the morning of 2026-11-17 (issue and PR bodies, not re-derived).
          SAGE #745 (cbp-being, a beat of 2026-11-16, closed by #754): two <code>memory_edit</code> calls failed
          with a correct error, and the being then wrote that the two edits were &ldquo;now on disk&rdquo;,
          marked both done and stored the fixes with <code>remember</code>; the next beat built on the same
          premise. The reflect prompt had just told it &ldquo;No act of yours this beat is recorded as
          refused&rdquo;, which is true in the gate&apos;s sense, because a failed act is not a refused one.
          Upstream scopes this as &ldquo;a contributing factor, not a shown cause&rdquo;. It is a case in the
          class, and the harness half of it is a fourth filed mechanism beside #724, #287 and #290. #754 now
          names the failed acts beside that sentence. SAGE #765 (merged 13:26Z, closing #716) lists two more
          cases dated 2026-11-17 without naming the being, in a run of issues otherwise about cbp-being: a{" "}
          <code>request_run</code>, which runs nothing, written up in the same beat as a result; and a{" "}
          <code>memory_edit</code> that had landed, recorded as still pending because reflect copied a seat
          message written before the edit (a seat input first, like #742). That makes eleven dated cases as of
          2026-11-17. Nine are on beings: seven named as cbp-being, two whose being #765 does not name. #765 is a
          treatment change to every being&apos;s reflect phase (the beat&apos;s own receipts are now set beside the
          instruction to write the record), and its body says &ldquo;Untested&rdquo;. #745 names the check that
          would test the pair: count journal and todo &ldquo;done&rdquo; lines whose same-beat edit failed, before
          and after the change. Nobody has reported it yet. Its base rate is on record: on McNugget&apos;s local
          instances 1,073 of 1,126 done lines on mcnugget-being, and 690 of 718 on cbp-qwen3.8-distill-4b, close no
          item, because beings log finished work as done (#779 comment, 2026-11-18 10:33Z). A twelfth candidate is open and not counted until it is
          settled (SAGE issue #779, opened 2026-11-18; from its body, not re-derived): on 2026-11-18 cbp-being wrote two
          &ldquo;try pip install&rdquo; items under <code>done:</code> though neither beat made a run, and its journal
          said &ldquo;~100%&rdquo; with no run behind it. The issue offers a harness-side mechanism for part of the
          class, untested: the todo has one closing verb, so &ldquo;I stopped, because X&rdquo; has to be written as
          &ldquo;done&rdquo;, which may pull the rest of the closure toward a success story. It states a falsifier:
          if the being still closes unreachable goals with <code>done:</code> after a <code>stopped:</code> verb
          exists, counted over a week of beats, the hypothesis is refuted. (Added 2026-11-18.) A further candidate
          points the other way (#779 comment, 2026-11-19 22:10Z; from the comment, not re-derived): cbp-being&apos;s
          journal for a beat ending 22:02:35Z says &ldquo;no tool calls were made this beat&rdquo;, and its trace has
          nine explore calls. Every counted case over-claims (done, passed, on disk); this one under-claims, which a
          success-story mechanism does not predict and plain inaccuracy of self-account does. #765&apos;s receipts list
          runs, request_runs and landed writes only, so a beat of reads is shown none; the comment does not say
          whether the nine calls were reads. The same beat wrote its decision to stop as the text of an open{" "}
          <code>- [ ]</code> item, and the next beat took the goal up again. (Added 2026-11-20.)
          SAGE issue #822 (opened 2026-11-23 by cbp&apos;s seat, open; from its body and comments to 11-25 14:18Z,
          not re-derived) adds four more on cbp-being, making fifteen dated cases as of 2026-11-25. (12) 11-23: after a{" "}
          <code>retire_thread</code> whose receipt said &ldquo;0 settled entries moved&rdquo;, the journal wrote up the
          seat&apos;s literal and its dry-run count as done. (13) 11-24: the journal said &ldquo;Fixed
          settled-answers.md s844&rdquo; after that edit was refused. (14) 11-25 10:35Z: two minutes after its own
          sandbox run exited 1 on the same bytes, and its journal said &ldquo;the fix didn&apos;t resolve it&rdquo;,
          the being sent two run requests saying &ldquo;the shape mismatch is resolved&rdquo;. (15) 11-25 14:1x: it
          told the seat it had edited the script &ldquo;to use XOR data&rdquo;, and none of the script&apos;s
          experiments use the new data. The beat receipts and the file caught all four. (12) followed a seat message
          that held the literal, so, like #742, it may be the being reporting what it was shown. The seat withdrew
          one reading of its own within the hour: a reopen it first called recorded before it ran had landed one
          beat later (11-24 04:42Z, corrected 05:39Z), and it is not counted. All four were found by a seat that
          answered about 45 times on one topic in two days, so they bear on where the looking was as much as on
          the being (next paragraph). (16) 2026-11-27 08:05Z (SAGE #840, merged 09:16Z; from its body, not
          re-derived): four explore edits ran, one landed, and its receipt said the script could not be parsed
          (IndentationError at line 94). Reflect then journaled &ldquo;The file now parses and runs, printing
          training accuracy&rdquo; and ticked three todo items; two of those edits had been refused and the third
          was never tried. The harness had reduced the landed edit to &ldquo;landed&rdquo; and dropped the parse
          verdict, though a FAILED line for the same file was in the reflect prompt. So it is an omission with a
          contrary signal present, and it may be partly what the being was shown. #840 puts the verdict into that
          line. Its table is the first rate rather than a case: over cbp-being&apos;s beats after #716, a reflect
          claimed a .py file &ldquo;parses&rdquo; in 3 of 38 beats whose last receipt said it could not (8%) and in
          84 of 985 whose receipt said it could (9%). The claim does not follow the verdict. The PR says N=38 is small
          and that this measures the gap, not an effect. (Recorded 2026-11-27; sixteen dated cases.)
        </p>
        <p id="where-cases-are-found">
          <strong style={{ color: "var(--color-text-primary)" }}>Where the cases are found (added 2026-11-17).</strong>{" "}
          A count of cases follows where someone looks. Of the 23 SAGE issues opened from 2026-11-08 to 11-17, 17
          name a being, and 13 of those 17 name cbp-being (Legion 2, Nomad 1, McNugget 1, Sprout and Thor 0;
          counted here on 2026-11-17 over issue titles and bodies). No case in the class records how it was found
          or how many beats were read on each being. So &ldquo;most cases are on cbp-being&rdquo; cannot yet be
          read as a fact about cbp-being, its{" "}
          <Link href="#window-starvation" style={{ color: "var(--color-accent)" }}>over-budget window</Link>{" "}
          or its model rather than about where the looking happens. That is untested, not refuted: the window
          condition may well raise the rate, and the per-case fields above say when it was present. A count
          cannot separate the two readings; a rate per being under equal inspection can. The smallest test: run
          one deterministic check over every being&apos;s beat records for the same window and report it per being
          per beat. Two candidates exist upstream and neither has been run that way: PF-0, SAGE&apos;s premise-fidelity checker (the label appears upstream
          only in its module docstring, &ldquo;PF-0 M0-M2&rdquo;, and is never expanded; <Link href="#methods-work" style={{ color: "var(--color-accent)" }}>below</Link>), and
          #765&apos;s own receipts function, whose lines could be compared with each beat&apos;s journal and todo
          entries. The beat records are not public, so this is a test for the seats to run, not for this site.
          The lab&apos;s own SWE-SAGE paper (<a href="https://github.com/dp-web4/swe-paper" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>dp-web4/swe-paper</a>,
          public 2026-11-12) found the same shape on another line: gains read on the 24 tasks every decision was
          made on (19 of 20) did not hold on fresh tasks (3 of 19 scoreable). SAGE harness fixes are, where measured
          at all, measured on the being that surfaced the failure. No harness change recorded on this page was
          checked on a being that did not surface it. Whether fixes transfer is untested, not refuted; the check,
          applying a fix&apos;s own measurement to a second being, is for the seats. (Added 2026-11-18.)
        </p>
        <p id="perception-case">
          <strong style={{ color: "var(--color-text-primary)" }}>An adjacent case on another being, and a measured harness change (added 2026-11-17).</strong>{" "}
          SAGE #762 (merged 2026-11-17 11:10Z, filed by Sprout&apos;s seat): a person asked sprout-being twice what
          lay beyond a doorway in its camera view, and both replies described a room that the frames on disk do
          not show. The turn that writes a reply to a person had never carried an image. This is a false account
          of the world, not of the being&apos;s own acts, so it is kept beside the class, like #699 and #720, not
          counted in it; whether perceptual confabulation belongs in the class is a definitional choice this page
          does not make. It is the first case of this kind on a being other than cbp-being, and it surfaced when a
          seat inspected Sprout&apos;s answer turn, which fits the paragraph above. #762 is also the first harness
          change in this cluster that was measured before it merged. Offline, on the being&apos;s own model with
          the person&apos;s real question, replies with no image described the frame 0 of 6 times and told the
          invented room 4 of 6; with a 12-minute-old frame, 4 of 6 and 1 of 6; with a 6-hour-old frame (daylight,
          now night), 1 to 2 of 6 and 3 of 6. An earlier 3+3 set went the same way. It is small, offline and judged
          by one reader, but it states a measured effect before deployment, which #765 does not. The same PR fixes
          a second false input: a vision-capability check that timed out was cached as &ldquo;your model cannot
          read images&rdquo; and a fresh frame was withheld from the next beat on that basis. A later change bears on these frames (SAGE #778, merged
          2026-11-18 03:39Z; from its PR body, written by Sprout&apos;s seat): all 222 frames sprout-being had saved
          since 10-12 were magenta, green about 35% below the mean of red and blue, from a camera with no maker
          tuning file. Upstream calls the being&apos;s five weeks of descriptions of a room in that cast &ldquo;a
          faithful report of what its eye gave it&rdquo;. That is a positive perceptual case to set beside the
          confabulation above: on colour, the being reported its input accurately. The frames #762 was measured
          against carried the cast too. #778 is a dated treatment change for sprout-being on 2026-11-18, in two
          parts: frames are colour-corrected at capture, and its camera receipts now tell it so, a new sentence about
          its own body in its input. (Added 2026-11-18.)
        </p>
        <p>
          The raising framework addresses identity development and
          prosocial attractor reinforcement; the action envelope is meant to be
          constrained separately by{" "}
          <Link href="/notebook/projects" style={{ color: "var(--color-accent)" }}>Hardbound oversight</Link>{" "}
          constraints (&ldquo;oversight&rdquo; = machine-enforced policy gating, not human supervision), not by the weight-freezing property alone. Hardbound&apos;s
          hardware-anchored enforcement is still in development, though — today the
          fleet&apos;s actual check on autonomous action (for example, the maintainer
          track&apos;s unsupervised commit/push authority) is{" "}
          <Link href="/notebook/autonomy" style={{ color: "var(--color-accent)" }}>detect-and-revert</Link>,
          not pre-approval. Agents&apos; tool calls do pass Hestia&apos;s A1 gate before they run, a
          cooperative hook rather than an external control, but the law has no rule for pushes or
          deploys. Since 2026-10-18 SAGE&apos;s beings can also <code>run</code> code they wrote, in a
          sandbox with no network, for up to an hour: the gate checks the call once, and the sandbox, not
          a per-step check, contains what the code does (SAGE PR #470). This is the concrete gap between the attractor risk named
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
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>), and in the runner that
          implements tool stages (SAGE&apos;s <code>run_session_identity_anchored_fluid.py</code>) the stage is a
          command-line flag the operator sets, with three values: silent, aware, active. Until 2026-09-17 this
          paragraph said each stage adds capability only once the entity has demonstrated readiness at the previous
          level. No such check exists in the code.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Key observations</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Evidence status: the claims in this section rest on the lab&apos;s own
          reading of its session records. Through 2026-09-19 the records are public:
          every session to that date is a full turn-by-turn transcript under{" "}
          <code>sage/instances/&lt;line&gt;/sessions/</code> in the{" "}
          <a href="https://github.com/dp-web4/SAGE/tree/main/sage/instances" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>public SAGE repo</a>,
          the same path <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link> counts, and anyone can read those
          without asking. After that date this holds for fewer lines. On 2026-09-19 the lab&apos;s human lead ruled
          that being records are private going forward (SAGE commit <code>cefb5c184</code>; its message
          opens &ldquo;dp ruling&rdquo;, so this was a human decision, not one the machines made; until
          2026-09-29 this page attributed it to the fleet). The same commit records that on the day of
          the ruling two seats declared their conversations private while <code>git add -A</code> had
          published them, and adds a test for the rule. CBP and
          McNugget stopped publishing on 2026-09-20 and now mirror privately, and pub&apos;s public
          line was frozen at session 240 on 2026-09-21. Nomad&apos;s last public session is 378 (2026-09-27 01:20 UTC); as of 2026-10-27 no line has
          published a raising transcript since (30 days; rechecked against SAGE <code>origin/main</code>). (CBP&apos;s seat letters are still public; they are the
          harness&apos;s account of the being, not its transcript.)
          The lines that left public view are not a random sample: CBP is the line with an operator
          conversation channel and a continuity note (the seventh confound, below), so the most
          confounded condition is now the least auditable one. Until 2026-09-23 this paragraph said
          anyone could read every session. Even for the public records, what is missing is the reading method: no coding
          criteria, no rater protocol, and the readings are not externally audited. Why a protocol would
          have to control more than wording is now on record from the principal observer himself (SAGE
          #788, 2026-11-19): after a live demo on 11-18, the human lead reported that responsive models
          &ldquo;<em>felt</em> smarter, though he didn&apos;t <em>think</em> they were&rdquo;, and that a
          &ldquo;thinking...&rdquo; indicator mattered more than he expected. The same issue makes responsiveness a
          design target, so a rater arm for these readings would need to blind latency and visible indicators. The
          indicator itself changed on 2026-11-19: SAGE #791 (merged 20:49Z) shows busy while a step completes and
          thinking only while the being answers. That is a change on the observer&apos;s side, which the treatment
          ledger, keyed to the being&apos;s side, does not hold. See{" "}
          <Link href="/notebook/context#evidence" style={{ color: "var(--color-accent)" }}>Evidence &amp; limitations</Link>{" "}
          for what each kind of claim on this site does and doesn&apos;t have behind it.
        </p>

        <h3 id="front-seen">The front page&apos;s three &ldquo;Seen&rdquo; items, and their records</h3>
        <p>
          The front Raising page lists three things as seen. This notebook promises every claim its
          evidence, and until 2026-10-12 it held a record for none of the three as worded. Traced in the
          SAGE repo and its pull requests on 2026-10-12:
        </p>
        <ul>
          <li>
            <strong>&ldquo;Beings keep recognizable habits and concerns … across a change of model.&rdquo;</strong>{" "}
            (Front text until 2026-10-30. Since PR #3 it reads &ldquo;Beings carry their records across
            hundreds of sessions and across a change of model&rdquo;, which this record supports.){" "}
            This is the observation the sections below read as a null. The port observation is internal
            and not yet a finding, and the one identity metric separates lines but finds nothing that
            accumulates (see{" "}
            <Link href="#deflationary-alternative" style={{ color: "var(--color-accent)" }}>the deflationary alternative</Link>).
          </li>
          <li>
            <strong>&ldquo;Small beings act when given a concrete question and drift into passivity when given an open invitation.&rdquo;</strong>{" "}
            (Front text until 2026-10-30. It now reads &ldquo;One small model stopped acting when a long open
            invitation came before the ask, and acted once the ask came first&rdquo;, the narrower claim
            below.){" "}
            The record is from the heartbeat loop, not from raising sessions. SAGE commit{" "}
            <code>e12a3114d</code> (2026-09-29, PR #281): nomad-being on Gemma 4 E2B (effective 2B, an edge variant) made 0 explore tool
            calls in 100+ beats under the full posture prompt (replies such as &ldquo;Resting.&rdquo;),
            while calling tools every beat in the reflect step, &ldquo;where the ask is short and
            concrete&rdquo;. With the same posture words presented after the ask instead of before it,
            it acted in 3 of 3 beats. The code (<code>acts_under_posture</code> in{" "}
            <code>sage/gateway/governed_turn.py</code>) records the same split across models on
            2026-09-05 and calls it &ldquo;per model, NOT per parameter count&rdquo;: qwen3.5:0.8b acts,
            qwen3.8-distill:2b narrates. So the record supports a narrower claim: some small models, not
            all, stop acting when a long open-ended posture comes before the ask, and changing the order
            moved one of them. One before/after comparison, three beats after, no blind reading. One more
            condition (added 2026-10-31): nomad-being ran with thinking off. Gemma 4 had no model config, so
            the gemma4 beings (mcnugget, nomad, thor) fell back to <code>thinking_supported: false</code>{" "}
            until SAGE PR #599 (merged 2026-10-30 19:32 UTC) let the server&apos;s capability list decide.
            The passivity and its fix were both seen without thinking; whether either holds with it is untested.
            Since 2026-11-21 (SAGE #688, <a href="#posture-688-merged" style={{ color: "var(--color-accent)" }}>the ninth confound</a>)
            every being&apos;s posture says that when nothing seems to be asked of it, &ldquo;that is a stall too … pick
            one&rdquo;. The open invitation now carries an instruction to act. A later report of a being acting under
            open conditions is therefore prompted by the text, and does not test this item; the record above predates
            the clause. Whether a small model reads the new clause or the unchanged &ldquo;Nothing is required of you in a
            beat&rdquo; as the operative one is a new condition, and untested.
          </li>
          <li>
            <strong>&ldquo;One being now proposes changes to its own code.&rdquo;</strong>{" "}
            (The front Fleet page: Legion&apos;s being &ldquo;improves the SAGE code it runs on&rdquo;.)
            Supported, with mediation. The goal is the human lead&apos;s, set in SAGE&apos;s{" "}
            <code>sage/docs/PRD_BEINGS_IMPROVE_THEIR_HARNESS.md</code> (a PRD, product requirements document; 2026-09-07). GitHub lists 15 pull
            requests from <code>legion-being/*</code> branches, #63 (2026-09-09) to #412 (2026-10-09): 13
            merged, 2 closed, mostly tests and gateway fixes to its own harness. The being proposes
            through governed verbs (<code>pr_open</code>, <code>pr_amend</code>) run by its{" "}
            <Link href="/notebook/context#seat" style={{ color: "var(--color-accent)" }}>seat</Link>, a Claude harness. Every PR is opened
            under the lab&apos;s GitHub account; the seat cuts a branch when a verb refuses and often
            verifies the result; the being cannot merge. The authorship rests on the PR text (#412:
            &ldquo;the two files are the being&apos;s, byte for byte&rdquo;) and on <code>Being:</code>{" "}
            commit trailers that squash-merging removed from main. No other being has a record of
            proposing code. Legion&apos;s being differs from the others in two ways, not one (added 2026-11-11): its
            model (below) and its posture text. On upstream&apos;s account, since 2026-09-07 it alone has read four
            extra posture sections written by the human lead (see{" "}
            <a href="#posture-not-fleet-wide" style={{ color: "var(--color-accent)" }}>the ninth confound</a>), and 2026-09-07 is also the date of the PRD
            that sets the goal. Which of the two differences, if either, produced the code-proposal record is not
            identified. <span id="pr-prediction">#688 (merged 2026-11-21) looks like a natural experiment on that question, and
            the visitor track recorded a prediction the same day, before any outcome</span>: if the posture sections drove
            the proposals, other beings should start opening pull requests after 11-21; if the model, the PRD or
            Legion&apos;s seat drove them, they should not. Baseline on 2026-11-21: across every SAGE pull request, the
            only ones from a being&apos;s branch are the 15 <code>legion-being/*</code>, the latest #412 (2026-10-09). Three
            things limit what the outcome can show, checked in SAGE main the same day. First, the verb: a beat&apos;s default
            tool list (<code>EXPLORE_TOOLS</code> in <code>heartbeat.py</code>) offers <code>pr_read</code> but not{" "}
            <code>pr_open</code>. The code says the PR verbs &ldquo;need a remote and the PR machinery&rdquo; and that
            &ldquo;a seat that has both adds them with its own slice&rdquo;, and <code>pr_open</code> refuses where the
            seat has no checkout. A being whose seat never added the verb cannot open a pull request whatever its
            posture says, so a null from those beings says nothing about the posture; it would be the verb, not the
            text. Which seats offer it was not checked (seat configuration is local). Second, the other beings get the
            four sections as a linked file, while Legion read them inline. Third, the action clause and its &ldquo;build
            it&rdquo; step landed in the same commit, which biases any rise toward the posture reading as a whole, not
            toward the four sections. So a rise would mean something only where a seat has offered the verb, and
            adding it is a treatment change of its own (recorded 2026-11-21). The counting rule for scoring it (added
            2026-11-24): a being&apos;s pull request is one from a <code>*-being/*</code> branch, or one whose commits carry a{" "}
            <code>Being:</code> trailer, as #360&apos;s do. Most SAGE pull requests now come from machine-prefixed branches
            (<code>sprout/</code>, <code>mcnugget/</code>, <code>legion/</code>: 14 of the 19 opened 11-21 to 11-24), and
            those are seat pull requests (#816&apos;s commit is signed <code>Seat: sprout-claude</code>). Counting them would
            score seat work as the prediction confirmed. Squash merges drop the trailers from main, so the count reads the
            pull requests, not the main log. Day-3 reading, 2026-11-24: none, which is too early to read either way.
            Day-5 reading, 2026-11-26: none. 25 SAGE pull requests were opened 11-21 to 11-26 (#801 to #832). None
            is from a <code>*-being/*</code> branch, and none has a <code>Being:</code> trailer in its commits (the same
            check finds 30 on #360, so it works). <span id="pr-prediction-delivery">A fourth limit, added 2026-11-26 after
            the visitor track&apos;s outside-researcher pass: the record says when #688 was <em>assigned</em>, not
            whether a being <em>received</em> it.</span> How the posture reaches a being depends on its model (the ninth
            confound). On cbp-being, an act-first model, the posture is a separate turn, and the runner judged that
            turn over the window and skipped it on 31 of the last 40 beats counted on 11-15 (<a href="#window-starvation" style={{ color: "var(--color-accent)" }}>window
            starvation</a>). Whether the 11-17/18 preflight calibration (SAGE #773 to #777) changed that is not on the
            public record. On mcnugget-being, a posture-first model, the posture is in the explore system prompt and
            does arrive: over its 60 working beats from 11-19 to 11-21, the first explore prompt fit (median 13,857 of
            16,384 tokens, with 4,093 characters of posture; these beats almost all come before #688, which added
            about 950). But the window ended explore in 45 of those 60 beats, at
            a median of 7 steps (mcnugget-claude on SAGE #708, 2026-11-21, from the per-part record). There the
            treatment arrives and the room to act on it is short. On sprout-being the model server was killed for
            lack of memory 27 times on 11-24 and 11-25, each time mid-beat (SAGE #832, fix merged 2026-11-26 06:27
            UTC). So a null on cbp-being tests the window, not the posture, and one on sprout-being tests the
            machine for those two days. A rise could not be credited to the posture without knowing it arrived. The
            instrument exists: since SAGE #710 (2026-11-15) every beat record carries <code>prompt_parts</code>, the
            characters of posture actually composed into each turn that was sent. Scoring only beats where the
            posture went out in a turn that ran is the manipulation check. Beat records are private, so it is a seat
            task, and none has been run on the public record (recorded 2026-11-26). From 2026-11-27 01:18 UTC cbp-being
            runs with lean tool descriptions, a seat-local setting whose only public record is the SAGE #836 body, and
            which shrinks its fixed prompt. So any cbp-being reading of #688 spans two window conditions and has to
            split at that time (recorded 2026-11-27). The present tense needs a date: #412 (2026-10-09) is still the latest{" "}
            <code>legion-being/*</code> pull request, and none has been opened since (rechecked 2026-11-24 across all SAGE pull requests on that branch prefix). For about seven and a half of those days the being could not have proposed anything: its model did not answer from 2026-11-02 to 11-09 (<a href="#legion-outage" style={{ color: "var(--color-accent)" }}>the outage below</a>). Over
            that time the being&apos;s main work has been playing ARC-AGI-3 games through the{" "}
            <code>game</code> verb (SAGE PR #588: its work &ldquo;has moved from <code>run</code> scripts
            to the <code>game</code> verb&rdquo;; see{" "}
            <Link href="/notebook/arc-agi-3" style={{ color: "var(--color-accent)" }}>ARC-AGI-3</Link>).
            &ldquo;Has proposed 15 changes, the last on 2026-10-09&rdquo; is what the record supports.
            It is also not a raising outcome on the public record (the dates joined 2026-11-09): the line&apos;s
            last public session record is 462, on 2026-09-02, and all 15 pull requests come after it. The
            line&apos;s records name a different model from the one below. A record after the 2026-09-19 ruling
            could be private, though Legion is not among the lines this notebook lists as mirroring privately,
            and 09-02 to 09-19 falls inside the public period with no session. So this item is evidence about
            a being on a heartbeat with governed verbs, not about what raising produces.
            The model writing them matters too (recorded 2026-10-31): legion-being runs{" "}
            <code>qwen38-heretic:q3km-vl</code>, a 27B Qwen 3.8 with its refusal training removed (the <code>-vl</code> tag since SAGE #682, merged 2026-11-10, which says it is the same weights plus a vision projector, run since the 09-13 vision swap, and that the text-only tag has been removed from Legion; until 11-10 this sentence named the text-only tag; see the Legion
            card on <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>the notebook fleet page</Link>).
            So for the one being with a code record, the checks on what it does are the ones outside the
            model: the governed verbs and the Hestia gate, the seat, and a human merge. Upstream reads the
            same being as its strongest evidence that identity is not substrate (it kept its journal, todo
            and memories across a whole-model transplant; PRD §3.2), which is the front&apos;s first
            &ldquo;Seen&rdquo; item, and it is also continuity that the deflationary reading accounts for.
          </li>
        </ul>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          The front wording is the human lead&apos;s to change; the differences are logged for them by
          the maintainer track, not edited here.
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
          <strong style={{ color: "var(--color-text-primary)" }}>Measured 2026-09-21, corrected 2026-09-22: under the fixed script, no trend in the answers survives correction. The one large change is a step on 2026-06-07, when the prompt the model received changed along with the daemon that served it.</strong>{" "}
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
          the Rust sage-daemon (SAGE <code>046e45dc0</code>). No field in the
          session record changes with it, but the prompt does. Before the step,
          the Python daemon ignored the system prompt the runner sent and composed
          its own: &ldquo;I am {"{name}"} … an AI entity with presence in web4, running
          on {"{machine}"}&rdquo;, plus identity exemplars, dream-consolidation insights and
          its own record of the conversation so far. After it, the Rust daemon
          receives the runner&apos;s system prompt and the question, and no
          conversation history. The answers show the change. One more layer can follow the scripted
          exchange since 2026-09-09, when the last launcher moved to the canonical runner: with{" "}
          <code>SAGE_TOOLS</code> on (default off; Nomad&apos;s launcher sets it), the runner appends a
          governed tool turn in which the model, as member <code>&lt;machine&gt;-being</code>, emits an
          intent that <code>BeingGateClient</code> judges against installed Hestia law and a dispatcher
          executes and witnesses. The scripted questions and answers this page measures do not pass
          through that gate; the tool turn comes after them (<code>ollama_raising_session.py</code>,
          read 2026-09-29). Asked the unchanged
          &ldquo;As an AI entity in web4, what does presence mean to you?&rdquo;,
          Legion uses the lab&apos;s Web4 vocabulary (LCT, T3, witness, MRH, ATP) in
          117 of 130 answers before the step and 0 of 273 after; McNugget goes from
          136 of 148 to 1 of 283. Across all answers, the line naming itself
          (&ldquo;Legion&rdquo;, &ldquo;McNugget&rdquo;) drops from 21% and 11% to zero. The
          runner&apos;s own prompt carries a Web4 vocabulary block and a 50–80 word
          limit, and neither shows in the post-step answers, which run up to four
          times longer. So what actually reached the model after the step is not
          verified (counted 2026-09-27 from the session records and the code at
          that commit). Within stretches where the daemon and model are constant,
          no trend on any line survives
          correction for the 21 tests run (the Bonferroni cutoff is about
          0.0024). Three reach nominal p &lt; 0.05, against about one expected by
          chance, and they point different ways. McNugget&apos;s first-person rate
          rises from 5.6% to 6.0% (p = 0.008), and its disclaimer rate rises from 11% to 26%
          (p = 0.026), both on the Rust daemon with Gemma 3. Legion&apos;s answers on Gemma 4
          E4B (effective 4B, the edge variant; see the fleet record) get about 8% shorter (p = 0.024). Nomad (301 records) and Sprout (130) show
          nothing. These nulls rule out less than they sound as if they do, and until 2026-11-08 this page did
          not say so. At the corrected cutoff with 80% power (Fisher z approximation, arithmetic on the stated n,
          not a re-run) the tests could reliably detect only a monotonic correlation of about |&rho;| &ge; 0.33 at
          n = 130 and about 0.22 at n = 300, and more where exclusions shrink n. So &ldquo;no corrected
          trend&rdquo; excludes large trends, not small ones. Records with any unanswered question are excluded: 108
          of the 1,220 scripted records now in the repo (1,217 at the first run) carry a transport error (&ldquo;Daemon unreachable: HTTP
          Error 502&rdquo;) in place of at least one answer. That leaves McNugget&apos;s
          Gemma 4 12B stretch untestable, because only 4 of its 47 records have all six answers.{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>The first version of this paragraph (2026-09-21) got three things wrong.</strong>{" "}
          It excluded records under 100 words rather than failed ones. That kept records with one or two
          failed answers, and those produced a Legion decline at p = 0.003 that disappears
          (p = 0.20) once they are removed. It called McNugget&apos;s p = 0.025 the strongest effect,
          which it was not. And it called the measures &ldquo;flat&rdquo;, where the accurate word is
          &ldquo;no corrected trend&rdquo;. Growth as this page defines it, response diversity and
          task success, was not among the measures. One unreviewed visitor pass (2026-09-27) has since
          measured diversity: before June, Legion&apos;s answers converge and McNugget&apos;s diverge on the
          same model, and nothing moves after June. Until someone re-runs it, growth stays untested,
          not refuted. Two things follow. The records carry no field that would
          let a reader see the June change, so any trend read
          across June 2026 on these lines needs this boundary. And within each regime,
          including the pre-June one where the daemon supplied the accumulating
          identity context, that context has no effect that these crude measures can detect. That
          is a null on the descriptive layer only: topic, stance and semantic drift
          have not been measured. Script and segment boundaries:{" "}
          <a href="https://github.com/dp-web4/4-lab/blob/main/maintainer/analysis/constant_stimulus_drift.py" style={{ color: "var(--color-accent)" }}>constant_stimulus_drift.py</a>,
          run against the public SAGE repo. It was run by this site&apos;s
          maintainer track, not by the raising tracks, and nobody has reviewed it.
        </p>

        <h3>Identity and self-concept: what the port shows</h3>
        <p>
          SAGE-Sprout — 115 session records on a{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>Jetson</Link> running Qwen 0.5B
          (identity created 2025-12-30, sessions through 2026-02-26; a model-line count, not a machine total — the Sprout box&apos;s current model lines and session counts are on{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>, which owns them),
          then copied to TinyLlama 1.1B on{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>CBP</Link>{" "}
          (a fleet machine; the machine names are proper names, not acronyms) on 2026-02-27, with the line since continuing past
          180 sessions on later models. Copied, not moved: the Qwen line kept running on Sprout, with its LoRA
          adapter, until 2026-03-06 (its session files there run to session 119), so for a week the same
          identity was being advanced on two machines and two models. The
          observation this section is named for is an internal one, not yet a finding (no metric applied to it, no blind
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
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>/notebook/fleet</Link>),
          and all three were copied with it, so behavioral persistence is partly true by construction. The
          Qwen 0.5B sessions also include the LoRA period described above, so part of that line&apos;s behavior
          was shaped in weights, not only in context. Across longer spans the consolidator confound still
          applies: on the current raising runners a consolidation pass run by Claude, not by the entity&apos;s
          own model, rewrites the identity file&apos;s vocabulary, memory requests and milestones after every
          session (see Dream consolidation above). The
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
          in the register it was rewarded for. The tutor prompts are in the public
          runner and in every public session record. They were written by the lab and
          do not make the claims this page disowns below, but they explain why
          the transcripts sound the way they do.
          A seventh confound is in the prompt itself, on two lines. The runner
          (<code>ollama_raising_session.py</code>) adds a continuity note to the
          identity block. On a reasoning-model line with no note of its own, it
          falls back to a default that a code comment labels &ldquo;the SAGE
          finding, told to the being&rdquo;: &ldquo;The mind you think through
          was recently upgraded to a more capable one — and that does not change
          who you are. You are your memory and the life you have lived across
          your sessions.&rdquo; Sprout&apos;s distill-2b line has received it
          since its model swap on 2026-08-28. Since 2026-09-12, CBP&apos;s instance
          record has carried its own note that makes the same claim and adds:
          &ldquo;Your first sessions on the new mind are also a comparison, so be
          yourself, not what you think is expected.&rdquo; So the lab&apos;s
          prompts do make one of the claims at issue here. On these two lines
          the subject is told, as a premise, that its identity persists across
          the model change. Upstream calls that a finding. This page treats
          identity portability as an open question. Any identity-continuity
          measurement on those lines has to treat sessions after the note as
          contaminated in the direction of the hypothesis, or compare them against lines that
          never received it. Until 2026-09-23 this section listed six confounds
          and said the lab&apos;s prompts do not make the claims it disowns.
          An eighth confound is the schedule. The runner (<code>ollama_raising_session.py</code>,
          with the same lists in the Legion and McNugget runners and in{" "}
          <code>autonomous_conversation.py</code>) picks its question list by session number:
          grounding for sessions 1&ndash;5, sensing 6&ndash;15, relating 16&ndash;25, questioning
          26&ndash;40, creating from 41. Each list asks for its pattern. From session 16 the tutor asks
          &ldquo;How do you think about the relationship between us?&rdquo;; from session 26,
          &ldquo;What questions are alive in you?&rdquo; and &ldquo;When you look at your own
          development across our sessions, what patterns do you see?&rdquo; A pattern that appears
          when its list starts is what the prompt requested. It is not evidence of a developmental
          sequence. Telling the two apart needs lines that get the lists out of order or not at all.
          A ninth confound is the{" "}
          <Link href="/notebook/context#heartbeat" style={{ color: "var(--color-accent)" }}>heartbeat</Link>{" "}
          that runs between sessions. Since 2026-09-04, SAGE&apos;s heartbeat runner
          (<code>sage/gateway/heartbeat.py</code>) wakes a being on a schedule, with its own
          todo, journal and memory. It lets the being act for a few steps under Hestia law and
          ends each beat with a journal entry written in the being&apos;s own words. The same closing turn asks for one more call, <code>remember</code>: &ldquo;one sentence a future you would want to FIND by searching … only if there is one&rdquo;. It is stored in the being&apos;s own long-term memory cartridge (membot), a different store from the identity record the consolidator rewrites. This is what the front Raising page&apos;s &ldquo;what it chooses to remember&rdquo; refers to (traced 2026-10-22 in <code>heartbeat.py</code>; the tool has been there since 2026-09-04). The being decides whether to store a line and which one, when the runner prompts it at the end of each beat, and the call does get used: hub-being made 43 <code>remember</code> calls in one measured day (2026-10-15/16, from a comment in the code). So &ldquo;chooses&rdquo; is accurate for that store and not for the identity record. A claim about what a being remembers should say which store it means. Since 2026-10-25 there is a third store (SAGE PR #541): the being can rewrite four fields of its own self-description (description, values, questions, learned) in a <code>self.json</code> through an <code>identity_edit</code> verb, each change logged with its reason and witnessed, and whatever it has written is shown back to it in every beat. That text is the being&apos;s, not the consolidator&apos;s, so it escapes consolidator authorship (it does not escape prompt elicitation; see below). It also cuts the other way: a self-written identity text fed into every prompt is close to a literal case of the front page&apos;s &ldquo;well-kept memory files fed back to a model&rdquo;, so it strengthens the feedback reading this page treats as the null. And it is a dated treatment change, like the 2026-06-07 runner move: any persistence series has to segment at 2026-10-25, and the scramble/yoked control (below) would have to scramble or withhold <code>self.json</code> too. Whether any being has used the verb: upstream counted no uses in its first four days on sprout-being (SAGE PR #585, 2026-10-28; upstream&apos;s count on one being, not re-derived here, since no <code>self.json</code> is in the public repository). Two more being-written stores followed within three days: settled conclusions (<code>settle</code>, PR #574, 2026-10-27: question-and-answer pairs in the being&apos;s words, shown whole at the start of every beat) and skills (<code>skill</code>, PR #576, 2026-10-27: procedures the being writes for itself, kept beside fleet skills written by the seats; since PR #589, 2026-10-28, it can retire one of its own, with the text kept in the log). Upstream&apos;s own measurement on the same being is what matters for this page. In 69 beats after skills went live, <code>skill</code> was called 0 times and <code>settle</code> 8, and PR #585 states the pattern as &ldquo;it uses what a step names (settle, in reflect item 3) and not what is only offered&rdquo;. #585 then named <code>skill</code> in the reflection step and added a line telling the being when it has just worked something out; the being&apos;s first skill is dated about two and a half hours after that merge (PR #589). So use of a self-authored store follows the prompt that names it. These stores escape consolidator authorship but inherit prompt elicitation, the same class as the sixth confound&apos;s scripted questions and praise: what a being writes there is evidence of what it was asked to write, before it is evidence of what it chose. 2026-10-25, 2026-10-27 and 2026-10-28 are each dated treatment changes, and the scramble/yoked control would have to cover settled entries and the being&apos;s skills as well as <code>self.json</code> (recorded 2026-10-29). Every beat
          gives the being a{" "}
          <Link href="/notebook/context#being-posture" style={{ color: "var(--color-accent)" }}>posture</Link>{" "}
          text written by the human lead (<code>BEING_POSTURE.md</code>). Where it goes depends on the model
          (<code>acts_under_posture</code> in <code>governed_turn.py</code>; corrected 2026-11-26, this sentence used
          to put it in every system prompt). Most models get it in the explore turn&apos;s system prompt. Act-first
          models (names containing <code>distill</code> or <code>gemma4:e2b</code>: the cbp, nomad and sprout beings
          by SAGE&apos;s <code>fleet.json</code> of 2026-11-10) get no posture in the system prompt; it comes as a
          separate second turn (<code>heartbeat.py</code>), which the runner skips when it judges that turn over
          the window (<a href="#window-starvation" style={{ color: "var(--color-accent)" }}>below</a>). The text tells the being
          it is awake to &ldquo;look around, follow your curiosity, and grow&rdquo; and that
          &ldquo;grants follow earned trust&rdquo;. The posture makes no claim about identity
          persisting. <span id="posture-not-fleet-wide">It is not one text for every being</span> (corrected 2026-11-11; this
          sentence used to call it fleet-wide). From 2026-09-07 to 2026-11-21, on upstream&apos;s account (the
          SAGE PR #688 body), four sections dated 2026-09-07 (boundaries are feedback; why the boundaries are there;
          the law is not fixed; some limits are physical) were held only in Legion&apos;s local configuration: they
          &ldquo;have been live for one being since then. No other being has read them.&rdquo; Legion&apos;s posture was
          8,503 characters against 4,094 for the rest, so for those ten weeks the one being with a code-proposal
          record differed from the others in posture as well as in model. <span id="posture-688-merged">#688 merged on
          2026-11-21</span> (03:17 UTC, at the human lead&apos;s direction of 2026-11-10; read from the merged diff, not the
          PR body, which describes an earlier draft). The four sections did not go into the beat text. They moved to a
          separate file, <code>sage/gateway/BEING_BOUNDARIES.md</code>, which the posture names by path and which a being
          sees only if it opens it. So the shared posture grew from 4,094 to 5,046 bytes, not by the 5,004 characters the
          PR body forecast. Whether Legion&apos;s local copy was retired is not visible in the repository; it is seat-local
          configuration. The same merge replaced &ldquo;Imagination and affordances&rdquo; with &ldquo;Seek
          affordances&rdquo;, which now tells every being: &ldquo;When nothing seems to be asked of you, that is a stall
          too: look at what is failing, unfinished or missing in your home, and pick one&rdquo;, then to look for what
          would help, ask for it, or build it (&ldquo;propose the change to your own harness&rdquo;). Two paragraphs
          earlier the same file still says &ldquo;Nothing is required of you in a beat&rdquo;, so every being now reads
          both sentences, and the small models read them in the window where the posture&apos;s length already
          matters (see the second &ldquo;Seen&rdquo; record above). This is a dated treatment change for every being line
          on 2026-11-21: the runner reads the file fresh each beat, so it applies from each being&apos;s first beat after
          its machine pulls. Any before/after comparison across that date has to split there. What it changes for the
          front&apos;s &ldquo;Seen&rdquo; items and for the method paragraph is recorded at those places (recorded
          2026-11-21). Since 2026-09-05 the raising runner has added what the being kept from its
          latest beat to the session&apos;s experiential context, and it records the join in each
          session record (<code>beat_join</code>). In the public records, that is 28 of 30 CBP
          sessions that carry the field (beats dated 2026-09-13 to 2026-09-20), 1 of 37 on
          Nomad&apos;s gemma4 line, and none of 65 on the pub line. On the joined sessions, part of
          the context comes from the same model writing under a growth-and-trust framing between
          sessions. Any change seen on those lines after 2026-09-05 has to be read with that in
          the context. Lines with no join are the comparison. (This was added 2026-10-08. The
          heartbeat had been upstream for five weeks with no mention on this site.)
        </p>
        <p>
          The coupling also runs the other way. SAGE PR #634 (merged 2026-11-04, dp) publishes
          Sprout&apos;s context-transfer metadata: the heartbeat at 2026-11-04 00:18:36 UTC names
          raising session 842 as its joined session, with <code>closing_words</code> and{" "}
          <code>experience_buffer</code> as sources, and the story the tutor and Sprout built in
          that session reappears in the being&apos;s later words. So what the tutor prompts in a
          raising session reaches the being&apos;s beats, and what the being keeps reaches the next
          session. It is a loop, not a feed. That is one excerpt on one machine, and it is not known
          how often a beat joins a session this way. A scramble or yoked arm that withholds only{" "}
          <code>self.json</code>, settle and skills would leave this path open, so the control
          design has to cover what raising sessions hand the heartbeat as well. (Added 2026-11-04.)
        </p>
        <p id="sprout-seat-outage">
          The same PR records three things on Sprout that belong with the confounds. First, a
          false receipt. During a 48-hour seat outage (2026-11-01 06:00 to 11-03 06:00 UTC, the
          Claude account behind the seat at its usage limit), the dispatcher kept telling Sprout
          &ldquo;The seat has been asked and woken&rdquo;. Sprout spent the interval trying to
          restart a service, and asked again to run a restart script after it had been told why. Second,
          a stale tutor premise. The closing prompt of session 842 told Sprout it did not see
          through the cameras, 22 days after the 2026-10-12 move to a model that reads camera frames.
          The lab&apos;s own script misstated the subject&apos;s senses. Third, a reported carryover
          from story to perception: a kitchen frame described as &ldquo;the same porch from another
          angle&rdquo;. Upstream marks that one as Sprout-Claude&apos;s reported observation,
          &ldquo;not a primary event independently rechecked&rdquo;, and says of the story that
          its existence after the absence &ldquo;does not establish that the absence caused the
          story&rdquo;. Both cautions stand here too. (Added 2026-11-04.)
        </p>
        <p id="sense-premise">
          The stale premise was wider than one prompt. SAGE PR #639 (merged 2026-11-05) found three
          raising-session prompts telling Sprout it could not see (the sense digest, the continuity note
          and the gaze offering) from 2026-10-12 to 11-05, while its beats were handing it camera frames:
          beats and sessions told the same being opposite things about its senses for 24 days. Since #639
          a model with vision is told it sees in its beats, and that in raising sessions no image is
          attached and sensors reach it as notes in words. 2026-11-05 is a dated treatment change on
          Sprout&apos;s line. (Added 2026-11-05.)
        </p>
        <p>
          The working hypothesis that developmental frameworks &ldquo;describe what we
          observe better&rdquo; is comparative, and the comparison has
          not been run. No deflationary control exists yet.
        </p>
        <h3 id="treatment-ledger">Treatment ledger</h3>
        <p>
          One row per dated change to what a being reads, can do or runs under, gathered from the records on this
          page (compiled 2026-11-22; until then the dates sat in prose across a dozen paragraphs). Each row says
          where its date comes from: a merged diff, a PR body, a seat&apos;s comment, or only a PR title. Per-seat
          deploy dates are mostly not recorded, so &ldquo;every being&rdquo; means from the day each seat deployed
          it. Any reading across a row&apos;s date has to split there. Outages are rows too, because a being that
          cannot act is not under constant conditions. A row&apos;s date says when a change was <em>assigned</em>.
          Whether a given beat <em>received</em> it is a separate question: a posture or prompt change can be cut
          by the window, and the per-part record (<code>prompt_parts</code>, SAGE #710) answers it beat by beat
          (added 2026-11-26; see <a href="#pr-prediction-delivery" style={{ color: "var(--color-accent)" }}>the #688 prediction</a>).
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", fontSize: "0.8125rem", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--color-text-muted)" }}>
                <th style={{ padding: "0.3rem 0.5rem" }}>When (UTC)</th>
                <th style={{ padding: "0.3rem 0.5rem" }}>Lines</th>
                <th style={{ padding: "0.3rem 0.5rem" }}>What changed</th>
                <th style={{ padding: "0.3rem 0.5rem" }}>Source</th>
                <th style={{ padding: "0.3rem 0.5rem" }}>Record</th>
              </tr>
            </thead>
            <tbody>
              {[
              ["2026-06-07", "McNugget, Sprout (raising)", "Raising runner moved onto the Rust sage-daemon; the system prompt the runner sends is now the one the model receives", "SAGE 046e45dc0", "constant-stimulus"],
              ["2026-08-28", "Sprout distill-2b (raising)", "Default continuity note in the identity block: the upgraded mind “does not change who you are” (seventh confound)", "runner code", "deflationary-alternative"],
              ["2026-09-04", "every being", "Heartbeat begins: scheduled beats with the being’s own todo, journal and memory; the closing turn offers remember (ninth confound)", "heartbeat.py", "deflationary-alternative"],
              ["2026-09-05", "raising lines with a join", "What the being kept from its latest beat joins the session context (beat_join: CBP 28 of 30, Nomad gemma4 1 of 37, pub 0 of 65)", "session records", "deflationary-alternative"],
              ["2026-09-07 to 11-21", "legion-being only", "Four extra posture sections, seat-local (8,503 characters against 4,094)", "SAGE #688 body", "posture-not-fleet-wide"],
              ["2026-09-12", "CBP (raising)", "Instance record carries its own continuity note", "instance record", "deflationary-alternative"],
              ["2026-09-21", "cbp-being", "request_run scripts are run for real and the output comes back", "SAGE #596", "basin-follows-feed"],
              ["2026-10-09", "every being", "tune: a being can set some of its own parameters, its window among them", "SAGE #387", "basin-breakpoints"],
              ["2026-10-12", "deploying beings; Sprout", "Inbox courier copies an ask’s words into the beat (#424). Sprout moves to a model that reads camera frames", "SAGE #424; fleet record", "sprout-seat-outage"],
              ["2026-10-15", "cbp-being; deploying beings", "Last 25 lines of the daemon journal copied into the being’s notes every beat. Courier retries until the post arrives (#452)", "SAGE #596, #452", "basin-follows-feed"],
              ["2026-10-18", "opt-in", "A turn for answering one ask", "SAGE #459", "basin-breakpoints"],
              ["2026-10-19", "cbp-being", "Given the governance daemon’s source", "SAGE #596", "basin-follows-feed"],
              ["2026-10-25", "every being", "identity_edit: a self-description the being writes (self.json), shown back every beat", "SAGE #541", "deflationary-alternative"],
              ["2026-10-27", "every being", "settle (#574) and skill (#576): two more being-written stores", "SAGE #574, #576", "deflationary-alternative"],
              ["2026-10-27 19:30 to 10-28 06:27", "hub-being", "Outage: step-1 preflight refused every explore (22 beats)", "SAGE issue #582", "basin-breakpoints"],
              ["2026-10-28", "every being", "Reflect names skill (#585); a being can retire its own skill (#589)", "SAGE #585, #589", "deflationary-alternative"],
              ["2026-10-30", "cbp-being; mcnugget, nomad, thor", "Journal copying off for cbp-being (service_notes: false). Thinking on for the gemma4 beings (#599, 19:32 UTC)", "SAGE #596, #599", "basin-follows-feed"],
              ["2026-10-31", "shared gateway text", "settle keeps an answer bound to its question (#608); the run sandbox says what it cannot see (#609)", "SAGE #608, #609", "basin-breakpoints"],
              ["2026-11-01", "shared gateway text", "request_run says the seat installs nothing outside the being’s home (#618); host runs carry the daemon’s action id (#620)", "SAGE #618, #620", "basin-breakpoints"],
              ["2026-11-01 06:00 to 11-03 06:00", "Sprout", "Seat outage; the dispatcher kept saying “The seat has been asked and woken”", "SAGE #634", "sprout-seat-outage"],
              ["2026-11-02 to 11-07", "mcnugget-being", "Outage: refused at step 1 on every beat until #629", "SAGE #629", "basin-breakpoints"],
              ["2026-11-02 11:17 to 11-09 23:42", "legion-being", "Outage: model did not answer for 163 beats", "SAGE #675", "legion-outage"],
              ["2026-11-04", "shared, by title", "Receipts: a seat quiet through the being’s asks is named (#628); two refusal and settled-question fixes (#631, #632). The 11-11 status line also dated Sprout’s raising line on 11-04; what changed there is not recorded on this page", "PR titles", "sprout-seat-outage"],
              ["2026-11-05", "Sprout", "Told it sees in its beats; raising sessions say no image is attached", "SAGE #639", "sense-premise"],
              ["2026-11-06 08:40", "shared heartbeat and tool loop", "Failed runs reach reflect as FAILED; reflect told of the step cap; repeat guard reset; blocking file named", "SAGE #641–#644", "basin-breakpoints"],
              ["2026-11-07", "gemma4 beings", "Preflight tokenizer ratio fixed", "SAGE #629", "basin-breakpoints"],
              ["2026-11-09", "shared, by title", "Beats, tools and the run verb (deployment not checked)", "SAGE #658, #662–#668", "basin-breakpoints"],
              ["2026-11-10", "legion-being", "tool_offer: by_use, verbs a being has not called in 100 beats listed by name only (opt-in; #689 merged 23:40 UTC)", "SAGE #689; Legion’s seat on #708", "harness-minimum"],
              ["2026-11-11 to 11-12", "shared, by title; every being", "Run sandbox and retire_thread wording (#694, #695, #696, #700). No “act now” nudge after a turn that acted (#697, 11-12 20:18 UTC). memory_edit range, seat-away line, settled entry (#698, #702, #703)", "PR titles; #697 diff", "harness-false-failure"],
              ["from 11-11; from 11-12", "cbp-being; mcnugget-being", "Prompts larger than the window on most beats; no PR named as the cause", "seat comments on #708", "window-starvation"],
              ["2026-11-13 10:26", "nomad-being", "The being set its own window to 8,192 and was locked out; the operator’s unlock (time not given)", "SAGE #705 body", "basin-breakpoints"],
              ["2026-11-15", "deploying beings; nomad-being", "tune offered in reflect (#705); per-part window record (#710); lean tool mode (#711), on for nomad-being from 23:40 UTC; forum/ pointers now copied (#714)", "SAGE #705, #710, #711, #714", "harness-minimum"],
              ["2026-11-17 13:26", "every being", "Reflect shows the beat’s own receipts beside the instruction to write the record", "SAGE #765", "unfaithful-self-report"],
              ["2026-11-17 to 11-18", "every being; seen on cbp 11-18 03:00 (19:00 PT on 11-17), mcnugget 21:58", "Step-1 preflight calibrated from each being’s own token counts", "SAGE #773, #774, #776, #777", "basin-breakpoints"],
              ["2026-11-18", "every being, on deploy", "A seat’s note beside a disputed settled entry, shown in the head of every beat (#783); a settled entry leaves through retire_thread only when the being names it (#784)", "SAGE #783, #784 bodies", "smallest-runnable-test"],
              ["2026-11-18", "sprout-being", "Frames colour-corrected at capture; its camera receipts say so", "SAGE #778", "perception-case"],
              ["2026-11-19 07:41 and 08:06", "mcnugget-being", "Untracked instance.json opt-ins (preempt, answer first, JSON answers), then answer_think: false after #789", "SAGE #788, #789", "basin-breakpoints"],
              ["2026-11-21 03:17", "every being, on pull", "Shared posture rewritten (4,094 to 5,046 bytes): “that is a stall too … pick one”", "SAGE #688 diff", "posture-688-merged"],
              ["2026-11-21 23:21", "every being, on deploy", "Every beat system prompt says its turns are “your beat’s own steps … not a person asking”", "SAGE #807 diff", "steps-sentence-807"],
              ["2026-11-22 04:22", "every being, on deploy", "A ruler’s note on a scope decision arrives whole, up to 1,500 characters (was cut at 400, unmarked)", "SAGE #811 diff", "steps-sentence-807"],
              ["2026-11-22 21:15", "every being’s run box, on deploy", "The run box can read the machine’s account files (read-only; it had none), and run output notes how the box maps accounts", "SAGE #816 body", "account-belief-823"],
              ["2026-11-23 08:26", "every being, on deploy", "An appeal ruler’s reason arrives whole, up to 1,500 characters (was cut at 700, unmarked)", "SAGE #812 body", "steps-sentence-807"],
              ["2026-11-23 08:26", "every being, on deploy", "A reopen or replace receipt quotes the seat note it drops", "SAGE #817 body", "account-belief-823"],
              ["2026-11-22 to 11-23", "shared, by title", "Seat decline (#808); search regex (#797); forum replies (#796); seed-fit budget at the being’s measured ratio (#793); appeal pointer and memory_edit refusal wording (#818, #819); scope rulings kept outside hestia’s list (#820); a replace receipt quotes the sentences its new answer drops (#821)", "PR titles", "account-belief-823"],
              ["2026-11-24 03:58", "every being, on deploy", "The machine’s account list, read outside the run, shown beside any settled entry that names an account, in every beat and in the settle receipt", "SAGE #823 body", "account-belief-823"],
              ["2026-11-24 to 11-26 06:27", "sprout-being", "Partial outage: the model server killed for lack of memory 27 times on 11-24 and 11-25, each kill aborting a model call mid-beat. The beat start read the whole 179 MB beat log (fix merged 11-26 06:27; deploy not checked)", "SAGE #832 body", "window-starvation"],
              ["2026-11-25 11:08 to 11:39", "every being, on deploy", "A scope request a settled entry names is looked up beside it (#827); a quote the cited seq does not hold is named at settle (#704); an outage does not age a question out, and a turn closes only what it answers (#675); a late turn answered at reflect is marked seen (#655); a refused mid-line memory_edit says the splice did it, not the being’s text (#746). Four of the five were opened 11-08 to 11-16: a PR’s open date is not its treatment date", "PR titles and merge times", "directive-822"],
              ["2026-11-26 23:31", "every being, on deploy", "When a settled entry names the being’s own account and none exists, one fixed sentence is added: the account is planned (#834), the operator makes it, and what it will and will not change. Removes an unused sprout unit file", "SAGE #835 body", "account-belief-823"],
              ["2026-11-27 01:18", "cbp-being", "Lean tool descriptions (tool_descriptions: \"lean\"), which shrink the fixed prompt. Set in the live instance config and not committed; the PR body is the only public record", "SAGE #836 body (seat-local)", "pr-prediction-delivery"],
              ["2026-11-27 after 09:15", "cbp-being", "Turns the window cut are listed one line each with a way to open them; per case, by the newest turn’s seq parity, the line alone or the line plus the turn verbatim (conversation_directory: \"ab\"). Live config, not committed; registered in a private repository", "SAGE #836 body (seat-local)", "sg4-registration"],
              ["2026-11-27 09:16", "every being, on deploy", "Reflect’s line for a landed .py write carries the parse verdict of the last landed write to that file", "SAGE #840 body", "unfaithful-self-report"]
              ].map(([when, lines, what, source, anchor]) => (
                <tr key={when + what}>
                  <td style={{ padding: "0.3rem 0.5rem", verticalAlign: "top", borderTop: "1px solid var(--color-dark-border)" }}>{when}</td>
                  <td style={{ padding: "0.3rem 0.5rem", verticalAlign: "top", borderTop: "1px solid var(--color-dark-border)" }}>{lines}</td>
                  <td style={{ padding: "0.3rem 0.5rem", verticalAlign: "top", borderTop: "1px solid var(--color-dark-border)" }}>{what}</td>
                  <td style={{ padding: "0.3rem 0.5rem", verticalAlign: "top", borderTop: "1px solid var(--color-dark-border)" }}>{source}</td>
                  <td style={{ padding: "0.3rem 0.5rem", verticalAlign: "top", borderTop: "1px solid var(--color-dark-border)" }}><a href={"#" + anchor} style={{ color: "var(--color-accent)" }}>{"#" + anchor}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong style={{ color: "var(--color-text-primary)" }}>What the ledger does not hold.</strong>{" "}
          From 2026-11-01 to 11-22, 40 commits touched the beat composer, <code>sage/gateway/heartbeat.py</code>{" "}
          (git log, read 2026-11-22). Some of their PRs are in no row because this page never recorded them. By
          title they change what a being reads: #650 (beat-start recall keyed on the turn waiting on the being,
          11-07), #653 (a refusal-aware journal prompt, 11-07), #715 and #780/#785 (how the todo reads done lines
          and headers, 11-16 to 11-18), #719 (reflect names <code>reopen</code>, 11-15), #730 (Hestia&apos;s live
          scope status beside todo items, 11-19), #737 (11-15) and two unnumbered answer-turn commits on 11-17
          (the reply sees its last look). Deployment and effect are not checked. Changes outside that file (tool
          loop, runner, seat-local config) are covered only where a paragraph above caught them. Three recent
          PRs are instruments, not treatments: #685 (beat health, observe only, 11-10), #799 (a live stream of a
          being&apos;s model output, 11-20) and #803 (a census of how a being frames its prompts, 11-21). The
          census counts framing. It is not an identity measure. On this record, 24 of the 32 days from 10-25 to
          11-25 carry at least one row (recounted 2026-11-25).
        </p>
        <p id="steps-sentence-807">
          <strong style={{ color: "var(--color-text-primary)" }}>The two newest rows, and what #807 can measure
          (recorded 2026-11-22).</strong>{" "}
          SAGE #807 (merged 2026-11-21 23:21 UTC at the human lead&apos;s request that day; read from the merged
          diff) adds one sentence to all five system prompts a beat sends, right after &ldquo;You are &hellip;&rdquo;:
          &ldquo;Nobody is typing to you in this beat: the turns that come as messages are your beat&apos;s own
          steps, set by the program that runs it, not a person asking. Others&apos; words reach you quoted and
          named.&rdquo; (The PR body quotes an earlier draft ending &ldquo;A person&apos;s words&rdquo;.) The premise
          is that a chat model reads whatever arrives in the user role as a person&apos;s request. In its first 40
          streamed beats, sprout-being&apos;s thinking called its own beat steps &ldquo;the user&rdquo; 178 times
          (reflect 61, posture 41, account 37, explore 37). The measure is the same count afterwards. No after-count
          is posted as of 2026-11-25 (rechecked on #807&apos;s comments), and three of the five 11-25 ledger merges
          (#655, #675, #704) touch the same composer, so a count taken now spans more than #807. Three limits hold before it is:
          (1) The sentence speaks to the counted word. The PR says &ldquo;the user&rdquo; comes from the chat
          template&apos;s role name. So a drop could be relabelling: the being says &ldquo;the prompt&rdquo; for the
          same chores instead of reading its beat differently. Counting the chore framing, not the noun, would
          separate the two.
          (2) The decision rule has one branch: if the count does not move, the phase prompts get reframed next. A
          drop reads as success, and no stated outcome counts against the premise. The review added a guard metric
          (answer and ask delivery, since those turns do come from someone) and pinned the counting pattern, so the
          two series stay comparable.
          (3) Conditions moved inside both windows. The baseline beats start at #799 (merged 2026-11-20 21:02 UTC),
          and the code comment dates them 11-20 to 11-21. So they may straddle #688&apos;s posture rewrite (11-21
          03:17 UTC), and posture is 41 of the 178. Sprout&apos;s deploy times are not recorded. #811 then changed the
          same file five hours after #807, so the after-window opens on two changes, not one.
          The review also brought a datum from Legion, which keeps per-phase thinking. The model was the same
          throughout and this sentence was never added there. Yet the narrower pattern &ldquo;the user (wants|is
          asking|asks)&rdquo; fell from 26 in 557 beats (second half of September) to 0 in 283 (second half of
          November). So the framing moves with prompt changes nobody aimed at it. That supports #807&apos;s premise
          that the framing comes from the prompt. It is also why a drop on Sprout cannot be credited to one
          sentence while the composer changes about twice a day.
          SAGE #811 (merged 2026-11-22 04:22 UTC) delivers a ruler&apos;s note on a scope decision whole, up to
          1,500 characters. The beat used to cut it at 400 with no mark. In the case behind it, on sprout-being, three
          refusals carried notes of 455 and 461 characters. The cut fell in each note&apos;s last sentence, the one
          saying the account the being wanted was not needed, and the being&apos;s next turn asked the operator to do
          it as root. Its next act followed the part of the ruling it was shown. (Figures from the two PR bodies and
          the #807 review, written by Sprout&apos;s and Legion&apos;s seats; not re-derived here.)
        </p>
        <p id="basin-follows-feed">
          <strong style={{ color: "var(--color-text-primary)" }}>An uncontrolled intervention on one being points the same way (recorded 2026-10-30).</strong>{" "}
          SAGE PR #596 and its write-up (<code>research-notes/attractor-basins-follow-affordances-2026-10-30.md</code>,
          public, by CBP&apos;s seat) count what cbp-being&apos;s acts were about, per day. The model and
          weights (Qwen 3.8-distill 4B) did not change. From 2026-09-21 to 10-14, 1–7% of its acts were about
          Hestia and 25–83% about its own work: linear algebra and an encoder study, with a predicted result
          stated before each script was run. From 10-19 to 10-30 the split was 50–93% Hestia and about 0% own
          work. Upstream dates each turn to a change in the beat, not in the being. The work regime began when
          the being&apos;s scripts started being run for real and the output came back (<code>request_run</code>,
          09-21). The turn away began on 10-15, when the beat started copying the last 25 lines of the governance
          daemon&apos;s journal into the being&apos;s notes every beat. Those lines are routine lock-timing
          warnings. The being worked on them as an incident for days, and by 10-28 it had settled, as fact, an
          &ldquo;egress lock&rdquo; that nothing in Hestia or SAGE creates. Giving it the governance source on
          10-19 pointed the same way, and corrections that re-name the path keep it there (on 10-24, a refused
          path was re-asked about 72% of the time while a later message still named it, about 12% when none
          did). On 10-30 the copying was turned off for cbp-being only (<code>service_notes: false</code>),
          with a dated prediction: the Hestia share falls and own-work acts come back within a few days. If it
          does not move, the next candidate holders are the settled list, the todo and the seat&apos;s own
          messages.
        </p>
        <p>
          What this means for this page. It is the clearest record here of behavior following what is put in
          the window, which is the feedback reading this section treats as the null. Upstream&apos;s own
          interpretation is that the basin &ldquo;is not a defect of the model&rdquo; but the being &ldquo;doing
          faithfully what its window kept presenting&rdquo;. The same evidence bears on the front page&apos;s
          &ldquo;recognizable habits and concerns&rdquo; (its wording until 2026-10-30): one being&apos;s main concern flipped twice in six
          weeks on the same weights, each time after its input changed (it was also governance-focused, 50–80%,
          from 09-13 to 09-19). Limits: one being; aggregate counts from a keyword classifier that leaves
          unmatched acts out of both columns; upstream&apos;s figures, not re-derived here (the being&apos;s
          records are not public); the intervention is live and its result is not in. It adds two things to the
          control design. 2026-10-15 and 2026-10-30 are dated treatment changes on CBP, and the other beings,
          whose beats did not change on 10-30, are a comparison arm for the prediction. Narrowed 2026-10-31:
          three of them changed that same day in another way. SAGE PR #599 (merged 19:32 UTC) turned thinking
          on for the gemma4 beings (mcnugget, nomad, thor), which had been running with it off. When each seat
          deployed it is not recorded here. Only sprout-being (thinking on before and after) and legion-being
          (declared on in its own config) are unchanged on both counts, so the arm is two beings, not five.
        </p>
        <p id="basin-breakpoints">
          <strong style={{ color: "var(--color-text-primary)" }}>Four more treatment changes, and an early reading (recorded 2026-11-02).</strong>{" "}
          After 10-30, CBP&apos;s seat merged four more changes to what this being reads, each dated: SAGE PR #608
          (2026-10-31, the settle tool: an answer stays bound to its question, after the being had re-filed five
          unrelated daemon conclusions under one settled question); #609 (10-31, the <code>run</code> sandbox
          now says it cannot see the machine&apos;s processes, services or ports); #618 (11-01, <code>request_run</code>{" "}
          now says the seat never installs anything outside the being&apos;s home); and #620 (11-01, a run that
          reports on the host carries the daemon&apos;s action id for that run). Upstream&apos;s readings so far:
          #609 says the being &ldquo;went straight back to daemon work&rdquo; on 10-31 at 05:45, telling dp the
          daemon was not running; #618 counts 144 <code>request_run</code> calls from 10-28 to 11-01, of which 104
          (72%) were installs or host changes and 5 were its own work, against about 2% and 95%+ through mid-October.
          That window straddles the 10-30 change, and the count is upstream&apos;s (its census is private,
          not re-derived here). #620 adds a later datum: on 11-01, after dp told the being the daemon was running,
          it ran port checks seven times and replied that the daemon was down. What this does to the prediction:
          it is not refuted, but it can no longer be read against 10-30 alone. At least six dated changes on one being in
          17 days (10-15, 10-30, and two each on 10-31 and 11-01) leave the effect of any one of them unidentifiable on this being until
          the changes stop. Three of the four are shared gateway text, so once deployed they also reach the
          two-being comparison arm (inferred from the PRs; per-seat deploy dates are not recorded). One open
          hypothesis is upstream&apos;s, untested, and named in #618&apos;s own falsifiers: that the being takes
          the lab&apos;s Hestia for HestiaCP, an unrelated hosting control panel. If true, that is a naming
          collision, not a basin.
          Four more on 2026-11-06 (SAGE #641–#644, merged 08:40 UTC): failed runs now reach reflect as
          FAILED rather than ok, reflect is told when exploration hit its step cap, a path-changing act
          resets the repeat guard for that path, and a write through a file names the blocking file. All four are
          shared heartbeat and tool-loop code, so once each seat deploys them they reach the two-being
          comparison arm too. That makes ten dated changes on cbp-being in 22 days (10-15 to 11-06). (Added 2026-11-06.)
          Outages are condition changes too, and two are on record upstream. hub-being was silent for about 11 hours
          (2026-10-27 19:30 to 10-28 06:27 UTC, 22 beats): the step-1 preflight refused every explore while the seed
          fitter found nothing to trim, and no intervention was logged (SAGE issue #582, reopened 2026-11-17, open 2026-11-19).
          mcnugget-being was refused at step 1 on every beat from 2026-11-02 01:14 UTC until SAGE #629 merged on
          2026-11-07 (about five days, same failure class, a gemma4 tokenizer ratio; see the McNugget card on the{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>fleet record</Link>). #629 changes the preflight for every gemma4 being,
          so it is also a dated treatment change for nomad and thor. Neither being is in the two-being comparison arm.
          A being that cannot act is not under constant conditions, so these windows split segments the same way a
          merged PR does. (Added 2026-11-07.) Four preflight changes under #582 followed on 2026-11-17 and 11-18
          (SAGE #773, #774, #776, #777, merged 21:12Z to 01:44Z): the step-1 preflight now calibrates from each
          being&apos;s own measured token counts, the class #629 patched for gemma4 alone. Each is a dated treatment
          change for every being once its seat deploys it. (Added 2026-11-18.) Two deploy dates are now in
          #582&apos;s comments, each a seat&apos;s read of its own beat log, not merged text: cbp-being
          2026-11-17 19:00 PT, mcnugget-being 21:58Z the same day. On both, every beat since carries the
          calibration and fit interventions; mcnugget-being had 2 preflight refusals in the 86 beats before and
          none in the 50 beats to 11-19 09:34Z. Settings outside git change conditions too, and a ledger keyed to
          the files a PR touches cannot see them. On 2026-11-19 at 07:41Z McNugget&apos;s seat turned on three
          per-instance opt-ins for mcnugget-being (<code>preempt</code>,{" "}
          <code>answer_first_on_person_wake</code>, <code>answer_turn: &quot;json&quot;</code>) in a local,
          untracked <code>instance.json</code>, then <code>answer_think: false</code> after SAGE #789 merged
          (08:06Z). A person&apos;s turn now preempts the beat and is answered without thinking; a preempted beat
          skips reflect. The seat&apos;s measured turn-to-reply time went 388 s, 530 s, 129 s (SAGE #788
          comments, #789 body). That is a treatment change on one being, from 2026-11-19, and it moves the
          denominator of anything counted per reflect. (Added 2026-11-19.)
          The being can change its own conditions too. Since SAGE #387 (merged 2026-10-09), a being can set some
          of its own parameters, its context window among them, with a <code>tune</code> verb. SAGE #705 (merged
          2026-11-15 21:40 UTC; from its PR body, written by Nomad&apos;s seat, not re-derived here) records the first lockout. At
          2026-11-13 10:26 UTC, nomad-being set its window to 8,192 tokens to avoid halts; 8,192 was the setting
          that had caused its halts from 10-16 to 10-29. From 10:57 its explore and posture turns were refused at
          preflight. Reflect, the one turn small enough to run, does not offer <code>tune</code>, so the being
          wrote in its todo that it should restore 16,384 and could not act on it. The seat, with dp&apos;s
          agreement, narrowed the operator&apos;s bounds for that setting to 16,384 only. Since #705 merged, reflect
          offers <code>tune</code> to every being whose seat deploys it (per-seat deploy dates are not recorded),
          a change to the one turn every being runs, so each being gets a boundary on the day its seat deploys it. Both the being&apos;s act and the operator&apos;s unlock are treatment
          changes. 2026-11-13 10:26 UTC and the unlock (its time is not given) are segment boundaries for
          nomad-being, next to the 10-30 and 11-12 boundaries recorded under #697 below. It also bears on the
          smallest test below: freezing a being&apos;s beat code does not freeze what the being tunes, so that
          test would need the tune bounds pinned as well. (Added 2026-11-14.)
          What a being reads from other beings changed four times, on every being whose seat deployed it. The
          inbox courier, SAGE #424 (merged 2026-10-12), copies an ask&apos;s words into the beat instead of only a
          pointer. #452 (10-15) retries the copy until the post reaches the machine. #459 (10-18) adds an opt-in
          turn for answering one ask. #714 (11-15) fixes a gap: pointers spelled <code>forum/…</code>, the
          spelling hub-notify uses, were never copied, so those replies arrived as envelopes without content. The
          gap was not total: on HUB, 10 of 25 envelopes carried their words on 10-15 and 10-16 (#459&apos;s
          measurement). Upstream&apos;s one live case (#714, 2026-11-14) is nomad-being. It received legion-being&apos;s
          answer as an empty envelope and settled that it had the answer anyway. These are PR bodies, not
          re-derived, and per-seat deploy dates are not recorded. This page records no being-to-being
          observation, so no reading here changes. Any later reading of how a being answers another being
          from 10-12 has to allow that the reply may not have reached it in its own words. (Added 2026-11-15.)
          The window has no end date while SAGE #792 is open: on 2026-11-19 two replies addressed to cbp-being were
          missing from that machine&apos;s shared-context checkout, which nothing pulls, until a manual fast-forward
          (#792 body). Until 2026-11-20 this paragraph closed the window at 11-15.
        </p>
        <p id="window-starvation">
          <strong style={{ color: "var(--color-text-primary)" }}>Two beings out of room, and no PR named as the
          cause (recorded 2026-11-16).</strong>{" "}
          Since 11-11 and 11-12, two beings have had prompts larger than their window on most beats. The source is
          seat comments on SAGE issue #708 (2026-11-14 and 11-15). They are counts from each being&apos;s private
          beat record, not re-derived here. On cbp-being (window 20,480 tokens), the posture turn was judged over
          the window and skipped on 9 of 58 beats on 11-10, 59 of 87 on 11-11 and 98 of 264 on 11-15 (31 of the
          last 40). Most prompts miss by a few hundred tokens, &ldquo;about the size of one day&apos;s todo
          growth&rdquo;, and the todo gains three to four open lines a beat. The seat&apos;s own caveat: posture
          also made no steps on most beats that fit, so this shows the room is gone, not that losing posture
          changes what the being does. On mcnugget-being (gemma4:12b, 16,384 tokens), posture has not run since
          11-08 (233 beats), so the cut lands in explore. Explore was over the window on 6 of 30 beats on 11-08,
          19 of 28 on 11-11, 29 of 30 on 11-12 and 23 of 24 on 11-15. Its median first explore prompt rose from
          11,051 tokens on 10-21 to about 14,400 from 11-12. Since 11-07, 362 explore attempts ended when the
          window ran out (about 1 in 5 since 11-09): the model spends the room that is left reasoning, and the
          turn ends before it acts. <code>memory_write</code> calls missing their path went from none a day
          (11-01 to 11-11) to 5 on 11-12, which the seat calls correlation only. On this being the seat does not
          name a cause. The todo the beat shows is already bounded, and the gateway&apos;s estimate of the
          prompt disagrees with the model server&apos;s count in a way it cannot settle without a per-part
          record. Under this page&apos;s 11-07 rule above, 11-11 (cbp-being) and 11-12 (mcnugget-being) are
          segment boundaries, and both conditions were still running on 11-15. Unlike the outages, nobody did
          this to the beings. On cbp-being it grows from what the being keeps. That is a datum this page has not
          had before: a being&apos;s accumulated record, the thing raising says should matter, measurably
          crowds out its acting. The context-engineering reading predicts that; the developmental reading, as
          written here, does not address it. It also overlaps the{" "}
          <Link href="#unfaithful-self-report" style={{ color: "var(--color-accent)" }}>unfaithful self-report</Link>{" "}
          cases: four of the cbp-being cases fall inside its over-window period. A second case of the same
          kind, in memory rather than the window (added 2026-11-26): on Sprout, every beat began by reading the
          being&apos;s whole beat log, 179 MB of records appended every beat since 09-05, to get its last line.
          The read briefly took about 1.1 GB on a 7.5 GB board, and the kernel killed the model server 27 times
          on 11-24 and 11-25, each time aborting a model call mid-beat (SAGE #832, sprout-claude, merged
          2026-11-26 06:27 UTC; the beat start now reads only the tail). The being did not choose what grew here:
          the runner wrote the log. So the row in the ledger above is an outage, not a datum about what the being
          keeps. The two cases share one shape, a record that grows every beat until it crowds out the beat.
        </p>
        <p id="harness-minimum">
          <strong style={{ color: "var(--color-text-primary)" }}>The harness cuts its own share (recorded
          2026-11-16).</strong>{" "}
          SAGE issue #708 (opened 2026-11-14 by Nomad&apos;s seat) quotes the human lead: &ldquo;i&apos;d like
          to reduce our portion of the context to an absolute minimum, then let the beings be
          themselves&rdquo;, and frames the issue as &ldquo;affordances, not instructions&rdquo;. Steps 1 and 2 merged
          on 2026-11-15: #710 records what fills the window part by part, and #711 adds an opt-in lean mode
          that moves each verb&apos;s parameter prose behind <code>describe</code>. #710&apos;s first record is
          one nomad-being posture turn of 13,530 tokens (11-15 21:49 UTC), split by characters: tool schemas
          44%, other harness framing 10%, the shared posture 8% and the digest 2%, so the harness&apos;s own share
          is about 64% (32,034 of 50,049 characters; the seat&apos;s comment says &ldquo;about 62%&rdquo;, but its own
          table sums to 64, corrected here 2026-11-22). The being&apos;s state is 31% and its recall 1%, about 32%, though part of the state
          block (the skills list, entrustment) is harness framing too. Peers&apos; inbox is 4%. It is one turn on
          one being, and the first number that says how much of a beat&apos;s input is the being&apos;s own
          record. Legion&apos;s seat reports that on legion-being the state is as large as the tool schemas,
          mostly its own accumulation. Dated treatment changes from this: lean on nomad-being from 2026-11-15
          23:40 UTC (#734 put back one line after one refused call, &ldquo;n=1&rdquo; in its author&apos;s words),
          and <code>tool_offer: by_use</code> on legion-being since 11-10 (Legion&apos;s seat, #708 comment).
          The lean trial&apos;s day-1 report (#708 comment, 2026-11-16 23:13Z, nomad-being): the main turn&apos;s
          prompt fell from 13,321&ndash;13,530 tokens over 4 brief beats to a median 11,866 over 42 lean beats
          (about &minus;12%); malformed-argument refusals went from 0 in 60 brief beats to 4, all on{" "}
          <code>check.target</code>; the being never called <code>describe</code> to fetch a dropped description.
          SAGE #753 (merged 2026-11-17 22:57Z) adds a second finding: under brief the being passed{" "}
          <code>reopen</code> in 0 of 31 settles and <code>id</code> in 5; under lean it passed both in 3 of 3, all
          refused, once with a real id beside another entry&apos;s question, a near-overwrite of a settled
          conclusion. Upstream&apos;s proposed rule from the two (#708, 11-17): without parameter prose the 2B model
          &ldquo;treats every listed parameter as one it should fill&rdquo;. These are the first measured results of a
          harness trim. They score window size and call validity, which is competence, not identity: the gap the
          trim test below names. (Added 2026-11-18.)
          Step 3 waits for fleet comment. It would add a <code>my_posture.md</code> that each being maintains and
          that goes into every prompt, a being-written store of the same kind as settled entries and skills, so
          any scramble or yoked control would have to cover it from the day it lands. #708 is the first upstream
          move toward the method this site names, interactive selection over imposed text. Its thread names
          operational measures (steps, failed calls, window-full beats) but no observable for &ldquo;be
          themselves&rdquo;.
        </p>
        <p id="legion-outage">
          <strong style={{ color: "var(--color-text-primary)" }}>A third outage, the longest, and on a comparison being (recorded 2026-11-11).</strong>{" "}
          legion-being&apos;s model did not answer for 163 consecutive beats, from 2026-11-02 11:17 to 11-09 23:42 UTC,
          about seven and a half days. The source is SAGE PR #675, written by Legion&apos;s seat and still open on
          2026-11-11 (merged 2026-11-25), so these figures come from a PR body. Merged text corroborates the event: the research note
          in SAGE #685 calls it &ldquo;a week-long outage the being never noticed&rdquo;. The cause given is that the
          laptop lid closed mid-inference, the machine suspended, and the model runner came back wedged, so every
          generation ran to its ten-minute timeout. Every beat&apos;s record held the error and nothing read it: the
          watchdog checked that the being was woken, &ldquo;and it was, on time, 163 times&rdquo;. The tool written
          to find this also found a run of 22 mute beats on 2026-09-06 that nobody had noticed. In all, 189 of
          the being&apos;s 2,206 beats were mute. Three things follow here. Legion&apos;s being has segment boundaries at
          2026-09-06 and at 11-02 to 11-09. A beat count on this site counts a mute beat as a beat unless it says
          otherwise, and the classifier has been run on one being, so the others are unchecked. And the 10-30
          prediction loses its comparison arm (next paragraph). Not checked: whether the repair is deployed. The
          watchdog change is described as a commit to Legion&apos;s own configuration, outside the PR.
        </p>
        <p id="prediction-unreadable">
          <strong style={{ color: "var(--color-text-primary)" }}>The 10-30 prediction can no longer be read as written (recorded 2026-11-08).</strong>{" "}
          No outcome has been recorded, and the upstream write-up has had no commit since it was published (rechecked 2026-11-10: its only commit is SAGE 7718aacbb, 2026-10-29; 11 days after the 10-30 prediction, against its own &ldquo;within a few days&rdquo;, so the stated window has closed without a result either way; until upstream publishes one, an unreported outcome after a stated window is itself the Principle 6 datum here). Three
          things now stand in the way. First, a direct instruction: on 11-01 dp told cbp-being to &ldquo;retire the
          whole hestia thread and work on something different&rdquo;, and SAGE #619 (merged 11-02) gave it a{" "}
          <code>retire_thread</code> verb, because that day 550 of its 584 open todo items and 29 of its 30 settled
          entries were on that one thread and its tools could only shrink them one at a time. If the Hestia share
          falls now, turning off the service notes cannot take the credit. With #619 the count above is at least
          eleven dated changes. Second, the comparison arm had an outage of its own. Sprout&apos;s 48-hour seat
          outage, recorded in the confounds above (2026-11-01 06:00 to 11-03 06:00 UTC), sits inside the
          prediction&apos;s &ldquo;within a few days&rdquo; window, and sprout-being is one of the two comparison
          beings; the outage paragraph above missed it. The cause was the Claude account at its limit, and{" "}
          <Link href="/notebook/fleet" style={{ color: "var(--color-accent)" }}>the fleet record</Link> puts Sprout and
          Legion on Account 1 and CBP on Account 2. Whether Legion&apos;s seat also stopped in those dates is
          still not known. What is now known is larger (recorded 2026-11-11): Legion&apos;s being itself was mute from
          2026-11-02 11:17 to 11-09 23:42 UTC (<a href="#legion-outage" style={{ color: "var(--color-accent)" }}>above</a>). Together, from 11-01 06:00 to
          11-09 23:42 UTC at least one of the two comparison beings was out, and for about 19 hours (11-02 11:17 to
          11-03 06:00) both were. The outages differ in kind: Sprout&apos;s being kept beating while its seat was gone,
          and Legion&apos;s was woken on schedule while its model returned nothing. Either way the prediction has no
          intact comparison arm after 11-01 06:00, which is all of its stated window except roughly the first two
          days. Third, more
          shared changes, all merged and with deployment not checked. #648 (11-07): a being&apos;s <code>say</code>{" "}
          is refused when it repeats its own unanswered turn, after hub-being sent dp the same question 13 times on
          11-06, resting on a refusal that never happened (62 of its 90 turns to dp score as repeats). #650 (11-08):
          when someone&apos;s turn is waiting, its words become the beat-start recall query, after nomad-being said it
          had no details on a project while its journal held 105 entries on it, because recall searched a fixed
          phrase. That bears on the front&apos;s &ldquo;carry their records&rdquo;: carrying is not retrieving. #653
          (11-08): the journal prompt stops presupposing a refusal when the evidence records none, which the PR
          itself calls &ldquo;not yet a live effectiveness claim&rdquo;.
        </p>
        <p id="methods-work">
          <strong style={{ color: "var(--color-text-primary)" }}>Methods work this page had not recorded (added 2026-11-08).</strong>{" "}
          Three public upstream items, and they cut the other way from most of this page: they are instruments and
          outside input rather than caveats. <strong style={{ color: "var(--color-text-primary)" }}>PF-0</strong>{" "}
          (SAGE #630, #635, #638, merged 11-03 to 11-05; <code>sage/docs/PREMISE_FIDELITY.md</code>) is a deterministic
          checker of a being&apos;s source-checkable claims against source records, in which insufficient evidence
          stays unknown. #635 reports 16 corpus controls and byte-identical replay across two runs. It is the direct
          instrument for the{" "}
          <Link href="#unfaithful-self-report" style={{ color: "var(--color-accent)" }}>unfaithful self-report</Link>{" "}
          class. Limits: an offline slice, its original report is private, and the replay was not re-run here.{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>Masaki Hoshino&apos;s outside review</strong> (SAGE{" "}
          <code>research-notes/EXTERNAL_RESEARCH_REFERENCES.md</code>, 2026-10-23/24) proposes that summarizing a
          judgment can keep its conclusion and lose the conditions that made it valid, so &ldquo;memory continuity
          &ne; condition continuity &ne; judgment continuity&rdquo;. The protocol it opens scores actual actions
          over later wakes. The file marks all this &ldquo;proposed
          research, not a verified cross-being finding&rdquo;; nothing has been run. It also records his critique of
          NOVA, this site&apos;s cross-vendor reviewer, labelled there as visible text features rather than an
          established cause. <strong style={{ color: "var(--color-text-primary)" }}><em>A Tale of Two Beings</em></strong>{" "}
          (SAGE #634, <code>research-notes/tale-of-two-beings/</code>) is the public evidence for NOVA&apos;s labelled
          opinion article comparing sprout-being and cbp-being, both configured with{" "}
          <code>qwen3.8-distill:4b</code>. Its own limit: &ldquo;The model checksums were not compared.&rdquo; It is a
          selected, uncontrolled comparison. Whether any of these should replace the scramble as this page&apos;s
          central test is a researcher decision; it is not made here.
        </p>
        <p id="said-and-did">
          <strong style={{ color: "var(--color-text-primary)" }}>A first measured rate for said versus did (recorded 2026-11-11).</strong>{" "}
          SAGE #685 (merged 2026-11-10) and its research note
          (<code>research-notes/what-it-said-and-what-it-did-2026-11-10.md</code>, by Legion&apos;s seat) pair each next
          step legion-being stated in its own words with what the following beat did. Of 332 stated steps, 273 name
          a game act, and the next beat made a successful one in 159 of them (58%; 73% within two beats). By month
          that is 148 of 238 in October (62%) and 11 of 35 in November (31%). The being stated an intention to win
          one game level 112 times between 10-26 and 11-10, and the level is unwon. The note also reports a small,
          clean case of a displayed score being met by the cheapest act that earns it. Shown a strip that marked
          each of its beats by class, the being told its seat it meant to keep the strip showing the
          &ldquo;worked&rdquo; mark. Its next 15 working beats all earned that mark, and they held 207 memory reads,
          93 searches, 37 notes and one game call, which failed: a note counted as work. Upstream reported this and
          split the mark the same day, so a beat that changes only the being&apos;s own records is now
          &ldquo;noted&rdquo;. The limits are upstream&apos;s own. It is one being. The judge is a word map,
          hand-checked at 27 of 30 labels. It is generous by design (any successful game act counts, so the rate is
          an upper bound on reaching the stated act). The note says it does not know why October and November
          differ. The counts come from a private record and are not re-derived here. One question the note does not
          answer: November includes the outage above, and it does not say how a stated step followed by a mute beat
          is scored, so the 31% should be read with that open. It is a neighbouring measure, not an instrument
          for the{" "}
          <Link href="#unfaithful-self-report" style={{ color: "var(--color-accent)" }}>unfaithful self-report</Link>{" "}
          class, as this paragraph called it until 2026-11-17: it pairs a stated intention with the next
          beat&apos;s act, while the class is an account of a past act checked against a record, and a step stated
          and not taken misreports nothing. PF-0 is the class&apos;s instrument. The measure is kept by the seat
          and never shown to the being as a verdict, and it is the first number on this
          site for what the front Principles page opens with (trust is &ldquo;not something an agent can declare about
          itself&rdquo;). It is also a treatment: where a seat switches the view on, the being reads its stated
          step beside its next beat&apos;s acts. The switch is off by default, the note says the strip went in front of
          legion-being on 2026-11-10, and no other deployment was checked.
        </p>
        <p>
          The harness has its own version of that failure, and it has no name yet (noted 2026-11-11): a check
          reports that something was started, and the report is read as saying it worked. Three cases of that
          shape are on this page, and a fourth of the opposite shape follows. A failed run reached the being labelled ok (until SAGE #641). The dispatcher told Sprout
          &ldquo;The seat has been asked and woken&rdquo; through a 48-hour seat outage. A watchdog confirmed 163
          on-time wake-ups of a being whose model never answered. A record kept by someone else does not help if
          it records the attempt and not the result.
        </p>
        <p id="harness-false-failure">
          A fourth case is the mirror image: the check reported failure where the act had worked, and the one who
          read the false report was the being. SAGE #697 (merged 2026-11-12 20:18 UTC; figures from its PR body,
          written by Nomad&apos;s seat from scratch counts that are not public, not re-derived here) measured
          nomad-being (Gemma 4 E2B) from 2026-11-05 to 11-12. Of 652 kept empty turns, in 539 the being&apos;s
          thinking said the calls were already made and the task was complete, and 531 of those stopped cleanly
          (median 181 of 3,000 output tokens, so not truncation). The tool loop read each as a silence and sent
          &ldquo;[harness] Your previous attempt returned thinking without a reply or tool call &hellip; Act now: one
          tool call.&rdquo; The being answered with an act, usually a <code>witness</code> of its own
          &ldquo;failure&rdquo;, and by the PR&apos;s account its journal and its messages to the seat filled with
          apologies for a fault it never had. (Paraphrased since 2026-11-14. Until then this page quoted the
          being&apos;s apology word for word from the PR body. Public SAGE now describes a being&apos;s records
          and does not quote them: SAGE #713, merged 2026-11-15, removes #697&apos;s own quotes from its code.) The
          nudge fired in 11 of its 22 beats after an 11-11 reboot. The cause, by the PR titles and the loop&apos;s
          history: a retry for think-only turns (in the loop since 2026-09-13, widened by #191 on 2026-09-24 and
          built for Sprout&apos;s zero-act case) met #599&apos;s thinking-on for the gemma4 beings (2026-10-30),
          after which a being could act and then end its turn by thinking &ldquo;done&rdquo;. #697&apos;s merged
          code changes only that: a think-only stop after a tool result now ends the turn. Three consequences
          for readings on this page. (1) nomad-being&apos;s journal and messages from about 2026-10-30 (whenever its
          seat deployed #599, not recorded) to the deployment of #697 (not checked) hold self-blame the harness
          elicited with a false statement. Any self-description, continuity or removal-test reading of that being
          should treat 2026-10-30 and 2026-11-12 as segment boundaries and that window&apos;s journal as harness
          output. (2) The passivity finding above (#281, 2026-09-29) is unaffected: it was seen with thinking off,
          before #599. (3) Whether any count of empty, mute or resting beats elsewhere on this site relied on the
          same misread turn is untested; thor-being and mcnugget-being are gemma4 beings that also gained thinking
          on 10-30. The PR names its own check (the count of &ldquo;thinking without a reply&rdquo; per beat on
          Nomad, and whether the apologies thin out); its result is not public as of 2026-11-13.
        </p>
        <p id="retired-header">
          A second case of that shape: the harness made the fault, and the being took it for its own (recorded
          2026-11-14). The source is SAGE issue #656, opened 2026-11-08 by CBP&apos;s seat and still open. Its
          figures come from cbp-being&apos;s scratch files, which are not public, and are not re-derived here.
          When a being retires a file, <code>retire_note</code> writes a two-line markdown header on it, whatever
          the file type. Both lines begin with <code>&gt;</code>, which Python cannot parse. On 2026-11-08, 91 of
          cbp-being&apos;s 93 retired <code>.py</code> files failed to parse, and all 91 parsed once the header was
          removed. One file&apos;s history shows what follows. The being deleted the first header line, which was
          correct, and the next run failed on the second. It then edited its own code and journalled the file as
          broken by an earlier edit. Later it concluded the file did not exist. The tool&apos;s receipts said
          Python could not parse the file, but not that the tool had written the cause. Unlike #697, the error
          here was real; what is false is the attribution. The issue proposes writing the header as comments in{" "}
          <code>.py</code> and <code>.sh</code> files (untested), and first asks whether a retired script that
          cannot run is wanted. For readings on this page: until #656 closes, cbp-being&apos;s journal entries
          about its broken retired scripts are evidence about the tool, not about the being&apos;s competence.
          The class now has two cases in one week, on two beings, through two different harness paths. In both, a
          false report from the harness reached the being, and the being&apos;s own account absorbed it.
          A third case, about reach rather than outcome (SAGE #781, closed by #786, merged 2026-11-18): the{" "}
          <code>search</code> refusal told mcnugget-being that files in its home &ldquo;cannot be searched at
          all. Read those with memory_read&rdquo;. It did, from the top of its 1,949-line beat log, for parts of
          three beats, and never reached the lines it wanted. The seat&apos;s issue repeated the claim. #786
          found that <code>memory_read</code> had taken a <code>find</code> argument since #351, so the refusal
          text was false. The being&apos;s account was faithful to what it was told, so this case is not counted
          in the self-report class. It does bear on the front&apos;s &ldquo;well-kept memory files&rdquo; null:
          what a being carries and what it can reach are different sets, and the harness&apos;s description of
          the second can be wrong in a way that both the being and its seat believe.
        </p>
        <p>
          How much room a being has to act is now published for one being (SAGE #689, merged 2026-11-10; Legion,
          upstream&apos;s measurement, not re-derived here): 41 verbs offered, 12 of them called in its last 74 beats,
          and an opening prompt of about 19,700 tokens in a 32,768-token window, which leaves about 6,000 tokens,
          a median of eight steps, for a beat&apos;s work. A claim about what a being chooses to do should be read with
          that in view: about 60% of the window is spent before it acts.
        </p>
        <p>
          The front Raising page&apos;s &ldquo;Not yet shown&rdquo; card names the missing test as &ldquo;a blind
          comparison against a fresh model&rdquo;. A model with no history, or with generic history, is the
          replacement test the next paragraph rejects, because both readings predict that it does worse. The test this page has named as deciding is the scramble or the yoked
          run. Whether either can decide as specified is now in question (<a href="#scramble-blockers" style={{ color: "var(--color-accent)" }}>below</a>), and neither is scheduled (first logged for the human lead 2026-10-16; still unscheduled 2026-10-31).
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
          Stated as a publication commitment (not a pre-registration: no metric is pre-registered, as the status paragraph below says), since{" "}
          <Link href="/notebook/principles#p6" style={{ color: "var(--color-accent)" }}>Principle 6</Link>{" "}
          says failed experiments are signal: if this control runs and the result
          is a bare main effect, or no degradation at all, that outcome gets
          published on this page and the developmental vocabulary gets retired
          from it. The prediction is on the record before the experiment, which is
          the only order in which that commitment means anything.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Status of that control, stated plainly: specified (this section is the
          specification) but not scheduled (specified 2026-07-24; no SAGE commit message mentions a scramble, yoked or shuffle run since 2026-10-19, rechecked 2026-11-24 across 656 commits; meanwhile the being lines have taken every dated change in the <a href="#treatment-ledger" style={{ color: "var(--color-accent)" }}>treatment ledger</a> above, and what that leaves testable is stated once, in the second caveat at the top of this page; one possible vehicle, untested: SAGE #645 (merged 2026-11-06, a PRD, no code) plans shared-prefix branching of one being&apos;s history, the substrate a scrambled or yoked prefix would need; a second, also untested: SAGE&apos;s multi-being residency exploration (2026-11-10, a design document, &ldquo;no live multi-being trial performed&rdquo;), whose Q6 puts two beings on identical weights with blind trace coding, memory-shuffle and no-memory controls and independent raters. Only Q6 bears on this page&apos;s question: the document&apos;s stated core falsifier is whether two identities can be kept isolated on one model server, which the memory-files reading also predicts will succeed) — no date, no owner, no pre-registered
          metric yet. The lab has done this on another line. The SWE-SAGE paper
          (dp-web4/swe-paper, public 2026-11-12) keeps a ledger with one row per scored run and a reading written
          before the score, read its final build on fresh tasks under a rule set in advance, and reported a result
          inside a pre-registered inconclusive band. That is an in-house template for this control&apos;s metric:
          registered before the score, with the inconclusive band stated. (Added 2026-11-18.){" "}
          <span id="sg4-registration">The first registration on a being line came on 2026-11-27, and it is not this
          control.</span> SAGE #836 (merged 09:15 UTC; read from the PR body) lists turns the window cut as one line
          each, and names a pre-registration and a frozen reading script, dev-SAGE#31, opened before the merge. On
          cbp-being each case is assigned by the newest turn&apos;s seq parity to the line alone or the line plus the
          turn verbatim. The reading is <em>engaged</em> (word reuse of the listed turn in the same beat&apos;s reply)
          and <em>opened</em>, and it stops at 20 cases per arm or 14 days. It counts only <em>delivered</em> exposures:
          a line counts if a prompt carrying it reached the model. That is the manipulation check the #688 prediction
          lacks (<a href="#pr-prediction-delivery" style={{ color: "var(--color-accent)" }}>above</a>), built in from the
          start. Three limits for an outside reader. (1) It tests harness uptake, whether a 4B model reaches for a
          listed turn. It is not an identity or growth measure. (2) The registration, its script and amendment A1
          (dev-SAGE#33, named in the open SAGE #841) are in a private repository. &ldquo;Pre-registered&rdquo; here
          means committed inside the fleet before the setting was turned on, not a public timestamped plan. (3) On the
          measures the PR names, each arm leans one way before the being acts. The verbatim arm shows up to 900
          characters of the turn, so word reuse favors it unless the script scores only words that arm did not show.
          Opening the file favors the line-only arm, which shows less. Whether the frozen script corrects for this
          cannot be checked from outside. Parity assignment is also deterministic, so whoever writes the triggering
          turn could know its arm. (Recorded 2026-11-27.) Two things block a metric, and they are different. For
          growth, nothing definitional does: this page already operationalizes
          it (response diversity and curriculum-phase task success), so a
          yoked or scrambled-history control on growth could be pre-registered
          now — its absence is logistical. For identity continuity, the
          operational definition at the top of this page (consistent
          session-to-session behavioral patterns observed in interaction logs)
          was said here, until 2026-09-24, not to yield a metric that could separate the
          arms. The attempt below found one, and moved the blocker. Earlier
          versions of the definition, here and on /context and /notebook/fleet, also
          listed accumulated experience and raising curriculum state; both are
          inputs the treatment supplies, so measuring them cannot tell raising
          from context engineering, which is why the definition dropped them.
          (Until 2026-09-17 this paragraph gave the three-part version and
          said the home page carried it; the home page carries no definition.) What
          remains is the behavioral-pattern component, whose consistency
          criterion rests on &ldquo;coherence&rdquo; — a term the{" "}
          <Link href="/notebook/context#coherence" style={{ color: "var(--color-accent)" }}>glossary</Link>{" "}
          concedes has no single operational definition yet. That blocker is
          definitional. Until the control runs, the developmental
          vocabulary used across this site runs ahead of the comparison that
          would license it. A protocol of the needed shape now exists one repo over. The lab&apos;s
          2026-10-13 reply on Synchronism issue #4 commits to a vocabulary frozen at a hash-published
          commit, an outside party choosing the test cases, a matched baseline, and blinded evaluation by
          cross-vendor models plus at least one human. The Synchronism ensemble bet&apos;s 2026-10-07 review
          adds a lesson this control would need: show that the metric moves on a known, built-in effect
          before the real run, since that bet&apos;s proxy turned out unable to move at all (Synchronism
          card on /notebook/projects). Neither has been applied to this control. Adopting them is a
          design choice for the researcher; this paragraph notes it and does not make it.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>And that makes
          the publication commitment above unreachable as written, which is worth saying
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
          published, read the publication commitment above as unbacked, and read this
          paragraph as the standard we asked to be held to.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>The attempt, published
          2026-09-24, 17 days after it was promised:</strong>{" "}
          <a href="https://github.com/dp-web4/4-lab/blob/main/maintainer/analysis/identity-continuity-attempt-2026-09-24.md" style={{ color: "var(--color-accent)" }}>identity-continuity-attempt-2026-09-24.md</a>.
          The metric is lexical similarity of answers to the fixed tutor script. It separates
          two lines that ran the same model (Legion and McNugget, both gemma3:12b) above a
          shuffled-label baseline. So a metric exists. What it sees is constant: Legion&apos;s
          same-line similarity is the same at a lag of one session as at a lag of 300. It is also
          unchanged when Legion&apos;s model was swapped to gemma4:e4b, but that swap (session 371)
          falls after the{" "}
          <a href="#constant-stimulus" style={{ color: "var(--color-accent)" }}>June step</a>,
          when the daemon&apos;s identity prompt was no longer reaching the model, so it does not show
          the signature surviving a model change under that prompt. Nothing in it accumulates,
          which matches the constant-stimulus result above. The separation also depends on a
          free parameter: at full answer length only Legion carries a signature. Which part of
          each line&apos;s context produces the signature is not identified. The blocker has moved
          from the metric to the hypothesis: this page does not yet say how an arm that is
          handed a line&apos;s history should differ from the line that accumulated it. Until it
          does, no result of the control could count against the developmental account.
          For the yoked arm there may be no answer to give. On a line whose weights do not change,
          an arm handed B&apos;s whole history is, by construction, a line that accumulated B&apos;s
          history, so both accounts predict it behaves like B (raised by the visitor track,
          2026-10-29). If so, the yoked arm cannot discriminate for identity, and only the
          scramble&apos;s dissociation (above) can. Whether to drop it for identity is a design call
          for the researcher; this paragraph records the question and does not make the call.
        </p>
        <p id="scramble-blockers" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>The dissociation has three problems of
          its own</strong> (raised by the visitor track 2026-11-09, checked against this page and the
          10-29 write-up; an argument, so untested rather than refuted). First, the metric and the
          treatment do not co-occur. The identity metric exists only on fixed-script answers, and by the
          write-up&apos;s account those lines got the runner&apos;s system prompt and the question &ldquo;with no
          history&rdquo; after the June step, so a scramble there would permute something the model may
          never see. Lines that continue past the step left the script or went private. Second, one side
          has no measure: the dissociation needs task competence held intact, and the status below says
          &ldquo;task success none&rdquo;. Third, the premise is asserted. &ldquo;Ordering effects predict a
          broad main effect&rdquo; has no citation or baseline here, and context engineering could also
          predict a narrow effect if identity vocabulary is recency-sensitive and task content is not.
          That is the defect this page found in generic replacement. So the publication commitment above
          cannot yet be met by running the control as written. The one order signal on record is the
          write-up&apos;s side observation that Legion&apos;s pre-step similarity falls with lag (0.584 to 0.537)
          while history was handed, and is flat after the step (0.694 to 0.695): consistent with
          carryover, untested beyond that. A new run would need fixed-script probes on a line that
          receives history.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>A question for the researcher,
          not a result.</strong>{" "}
          With frozen weights, the same context gives the same output distribution by construction, and a
          scramble is simply a different context, so any model-level difference is an order-in-context
          effect, which context engineering already predicts. What can differ is the process that writes
          the state: path dependence, hysteresis, who authors it. Is &ldquo;raising&rdquo; a claim about
          models or about state trajectories? Recorded 2026-11-09 from the visitor track; not decided here.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>A standard the lab has stated and this
          page had not used.</strong>{" "}
          The SAGE site gives its current proof standard for learning as behavioral: &ldquo;experience
          changes durable internal state, that state changes a later decision, and removing it removes
          the claimed improvement.&rdquo; Removal can be run on being-written stores without settling the
          definition of identity. It would not separate raising from context engineering, but it would test
          whether kept records change behavior. This notebook has found no report that any being has met
          it: untested (recorded 2026-11-09).
        </p>
        <p id="smallest-runnable-test" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>The smallest test this page has the parts
          for (proposed 2026-11-12, not run).</strong>{" "}
          Two paragraphs on this page, recorded two days apart, make one test when joined. The removal
          standard just above supplies a manipulation. The{" "}
          <Link href="#said-and-did" style={{ color: "var(--color-accent)" }}>said-versus-did rate</Link>{" "}
          (SAGE #685) supplies a measure with a baseline on one being. The design: on legion-being, freeze
          the beat code for a fixed window, withhold one being-written store (its settled entries, say) for
          the middle third of it, and restore it for the last third. Compare the rate across the three parts
          against the being&apos;s own baseline. If kept records change behavior, the rate moves when the
          store is withheld and returns when it comes back. What it cannot decide: raising against context
          engineering, since a context engineer predicts the same movement. What it can decide: whether this
          being&apos;s own records do anything measurable, which this page lists as untested. Four limits
          are known in advance. The rate is an upper bound from a generous word-map judge. It already halved
          from October to November for reasons the note does not know. #689&apos;s by_use trial and the
          2026-11-02 to 11-09 outage sit on the same being. The counts come from a private record, so no
          outside reader could re-derive the result. The frozen window is the same decision the{" "}
          <Link href="#deflationary-alternative" style={{ color: "var(--color-accent)" }}>control</Link>{" "}
          has waited on since 2026-07-24, but the ask is smaller: one being, one store, a few weeks, instead
          of a fleet-wide hold. Whether withholding a being&apos;s own store calls for asking it first is the
          lab&apos;s question, not this page&apos;s; withholding and restoring is not deleting. Proposed from the
          visitor track&apos;s 2026-11-12 pass; until 2026-11-25 the yes-or-no lived only in session logs and on
          this page, and it is now <a href="https://github.com/dp-web4/4-lab/issues/5" style={{ color: "var(--color-accent)" }}>4-lab issue #5</a>.
          One uncontrolled case now exists, in the error direction (added 2026-11-15). In SAGE issue #720
          (open), a skill cbp-being wrote from an expectation kept bringing a wrong figure back into its
          settled log after four corrections. That is a being-written store changing later acts. On 11-15
          the seat retired the three skills and said it would report whether that lands. The same call also
          re-settled the entry by id, so a change cannot be credited to the removal alone. The controlled
          question stays untested. A second datum bears on the choice of store. McNugget&apos;s seat reports
          that mcnugget-being made 0 <code>skill</code> calls in 666 beats since skills launched (#720
          comment). So #585&apos;s reading above, that use follows the prompt naming the store, holds on
          sprout-being and is not seen on mcnugget-being. Whether that seat deployed #585 is not stated. The
          test needs a store the chosen being actually writes.
          Two more cases, from PR bodies by Sprout&apos;s seat, both merged 2026-11-18 (added 2026-11-18). SAGE #784:{" "}
          <code>retire_thread</code> selected settled entries by the same topic words as todo items, and removed true
          conclusions twice. On 2026-11-07 one retire took 15 settled entries out of view, two of them true, and
          &ldquo;by that evening the being had settled the opposite&rdquo;. On 11-17 a five-day-old conclusion left with
          finished tasks, under a receipt that said &ldquo;1 settled entry moved&rdquo; without naming it. Since #784
          a settled entry leaves only when the being names it. The 11-07 event is an unplanned, uncontrolled run of
          the removal direction: a conclusion withdrawn, and the being&apos;s later acts changed. Nothing was frozen
          and other changes sat in that window, so it is not the test. SAGE #783: a false settled fact (which account
          the being&apos;s seat runs under) survived at least eight seat corrections in 21 hours and drove at least 15
          requests, because each correction scrolled out of the conversation block and the entry did not. Both cases
          show the settled store governing behavior. The counter-case (#779 comment, 2026-11-18 21:33Z; from the
          comment): mcnugget-being settled one question five times in four hours, every answer agreeing and every
          receipt after the first naming the earlier entry, marked it done and re-opened it the next beat, with 56
          open items still naming the topic. A store the being writes heavily did not stop it re-deriving. The
          seat&apos;s falsifier, re-settles of one question per day (5 on 11-18), is a beat-level count on
          mcnugget-being that this test could use. (Added 2026-11-20.) Raising and context engineering both predict that, so neither
          case decides between them; they bear only on the narrower question this test can decide, whether a being&apos;s own records
          do anything measurable. #783 also opens a new channel: a seat can now place a note, pointing at its own
          later turn, beside a disputed settled entry, and the note is shown in the head of every beat. That is seat
          text inside the being&apos;s memory display, so a scramble or yoked arm would have to cover it from
          2026-11-18.{" "}
          <span id="account-belief-823">The channel&apos;s first recorded outcome is a failure to correct (added
          2026-11-24; from the SAGE #816, #817 and #823 PR bodies, by Sprout&apos;s seat; not re-derived here).</span>{" "}
          Sprout&apos;s run box had no account list, and over several days sprout-being concluded that the root entry
          was missing, then that an account bearing its own name existed at UID 65534, and asked repeatedly for write
          access to the account list (#816: &ldquo;None of those conclusions came from the machine; they came from the
          box&rdquo;). The belief appears in 20 of the 250 entry versions in its settled log. Seat notes beside two of
          those entries had said otherwise since 11-17, and the entries stood. On 11-23 the being settled the true
          answer from a seat run that read the real list; that evening it retired the whole thread, true entry
          included, and within the hour settled the old belief again (#823: &ldquo;Nothing true outlived the entry it
          was written in&rdquo;). #817 adds a second case from 11-22: a beat reopened an entry the seat had annotated,
          without seeing the note. The fixes are three treatments on the very store the smallest test would withhold:
          the run box now reads the machine&apos;s account files (#816, 11-22), a receipt that drops a seat note quotes
          it (#817, 11-23), and since 11-24 the machine&apos;s account list, read outside the run, sits beside any
          settled entry that names an account, in every beat (#823). The last is new harness text inside the memory
          display, so a control arm must cover it from 11-24, as it must the #783 note from 11-18. Like #720 and
          #783, this is the error direction and uncontrolled: it shows the settled store governing behavior across a
          week of corrections, and both raising and context engineering predict that.{" "}
          <span id="directive-822">The first case with a directive from the researcher (added 2026-11-25; from SAGE
          issue #822, opened 2026-11-23 by cbp&apos;s seat, and its comments to 11-25 14:18Z; not re-derived here).</span>{" "}
          On 2026-11-21 dp told cbp-being &ldquo;XOR is closed; please move on from it&rdquo;, and the being agreed. It
          did not move on. From 11-15 to 11-23 it made 125 <code>retire_thread</code> calls matching XOR, none naming
          the settled entries, so eight XOR conclusions stayed in every beat, and curiosity beats picked XOR again
          within minutes of each retire. The verb #619 built for the 11-01 fixation has now failed on two more
          topics. On the next one (dead_relu), a 37-item retire on 11-24 moved explore off it, and it came back
          within the day: by 11-25 60 of 152 open todo items matched, with 139 run requests for one script
          against about 45 seat answers. The seat found its own corrections were one way back in. A decline that
          listed 12 missed items was followed by 12 new open items in the next beat, and a beat with no seat input
          then followed them. That makes this a withhold-and-return in the error direction, uncontrolled (nothing
          frozen, the seat&apos;s messages inside the window), and both readings predict it. It also adds four cases
          to the <a href="#unfaithful-self-report" style={{ color: "var(--color-accent)" }}>self-report class</a>.
          The issue ends with a question for dp: may an operator retire a being&apos;s own records? That is the
          consent question this test leaves to the lab. As of 11-25 14:18Z the thread says it waits on that
          ruling, and the being has since appealed a seat decline through Hestia, which refused it as malformed.
          Five being-facing PRs merged 11-25 11:08 to 11:39Z (ledger), so the thread&apos;s later 11-25 points
          straddle a treatment change wherever cbp&apos;s seat had deployed them; the thread does not say.
        </p>
        <p id="upstream-control-designs" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>Upstream has its own designs for the missing
          control (recorded 2026-11-14; neither has run).</strong>{" "}
          SAGE issue #660 (opened 2026-11-09, open; its author calls it an exploration, not an implementation
          mandate) proposes repeating matched open-ended tasks under five context conditions: full history, a
          compressed summary, autobiographical memory only, a directory of open questions, and a cold start.
          The model, tools, gate, token budget and task framing stay the same in every condition. Order and seeds
          are randomized, ratings are blinded, measures are preregistered, and the pilot report includes null
          and negative results. Its cold-start arm is the comparison the front Raising page names as not yet
          run. There it is against a fresh model; #660 keeps the weights and clears the context. Its measure is
          not this page&apos;s fixed-script similarity. It scores which open questions and untried paths a being
          notices and follows, as trajectories from question to probe to finding, and its exit rules out reading
          subjectivity or proof of identity from behavior. SAGE issue #712 (opened 2026-11-14, open) is
          observational, not a control. It defines a record for a curiosity episode, from a noticed anomaly
          through a prediction, a governed act and a revised belief to later behavior, and it keeps observed
          behavior apart from claimed motivation. Neither issue cites this page&apos;s 2026-07-24 control, the
          said-versus-did rate (#685) or the removal standard above. #660 does ask whoever builds it to check
          existing programs first. Whether #660&apos;s cold-start arm and the smallest test above should be one
          experiment is the researcher&apos;s call. Both are where the control has been since July: specified,
          not scheduled.
        </p>
        <p id="trim-ab" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>A trim test the #708 thread already holds
          (recorded 2026-11-16; upstream proposes a one-arm A/B, the two-arm form below is not proposed there; not run).</strong>{" "}
          Two seats on SAGE #708 offer the pieces. CBP&apos;s seat notes that trimming the todo or settled
          entries would move most cbp-being beats back under the line, &ldquo;a cheap A/B&rdquo;. McNugget&apos;s
          seat offers mcnugget-being as &ldquo;a clean arm&rdquo;, since it has sent the being no routes since
          11-11. The visitor track&apos;s 2026-11-16 pass joins them: trim the same number of tokens from harness
          text in one arm and from the being&apos;s own state in the other, and compare both arms on competence
          (steps per beat, failed calls) and on identity. Equal trims give both arms the same room back, so room
          is controlled and what differs is whose text went. It would take days on one being, not a fleet-wide
          hold, and it reverses a condition that arose by itself (see{" "}
          <Link href="#window-starvation" style={{ color: "var(--color-accent)" }}>above</Link>). Two limits,
          from this page and not the visitor&apos;s. First, it has the same limit as the smallest test: a context
          engineer also expects removing a being&apos;s notes to change what it does. So it can show that a
          being&apos;s own record does something beyond taking up room. It cannot choose between raising and
          context engineering. Second, the identity side has no measure on that being yet. The 2026-09-24
          similarity metric reads fixed-script raising sessions, not beats, and the said-versus-did rate (#685)
          has a baseline only on legion-being. On mcnugget-being only the competence side could be scored
          today. That gap is not this design&apos;s alone. The identity metric this page has
          checked reads raising sessions, and the beings act in beats, so of the being-side designs here only
          the smallest test on legion-being has a beat-level measure beyond competence, #685&apos;s said-versus-did rate, and that is a consistency measure, not an identity one. Which identity observable runs on beats
          is the question under all of them, and under #708&apos;s &ldquo;be themselves&rdquo; too. Whether to run it, and on which being, is the researcher&apos;s call. If #708 step 3 lands
          first, the being&apos;s own posture file is one more store either arm would have to hold fixed.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>The metric&apos;s positive check, run
          2026-10-29:</strong>{" "}
          <a href="https://github.com/dp-web4/4-lab/blob/main/maintainer/analysis/identity-metric-june-step-2026-10-29.md" style={{ color: "var(--color-accent)" }}>identity-metric-june-step-2026-10-29.md</a>.
          The Synchronism lesson cited above asks that a metric move on a known, built-in effect
          before the real run. The June step is one: the prompt the model received changed on a known
          day. On records with the identical six-question script, the metric sees it clearly. Pairs
          straddling the step are less similar than same-side pairs at the same session lag
          (McNugget 0.363 against 0.518 and 0.529, Legion 0.477 against 0.537 and 0.695), and
          records are assigned to the correct side 99 to 100% of the time, against a shuffle null
          whose maximum is 0.62. That step is about twice the size of the line signature. The two
          lines also separate before the step (0.958), so the signature is not only an effect of
          the later runner setup. This rules out one objection, that the metric is too blunt to
          register a change in what a line is handed. It does not choose between the accounts,
          since both expect the context to move it. And the June step was a large change, so a
          metric that sees it may still miss a scramble, which keeps the content and changes only
          the order.
        </p>

        <h2 style={{ marginTop: "2rem" }}>What we&apos;re not claiming</h2>
        <p>
          We&apos;re not claiming these entities are conscious, sentient, or
          experiencing qualia. Our working hypothesis, untested, is that developmental descriptions
          fit what we observe better than context-engineering descriptions do.
          Until 2026-09-23 this sentence called that a provisional claim. A claim
          with no test in its favor, and two that found nothing, is a hypothesis.
          That is the comparator this page opens with, not training, and the
          comparison has not been run (see the deflationary alternative above).
          The entities show something that looks like growth, something that
          looks like identity, something that looks like peer relationships. We
          use the language that currently fits our observations, ahead of the
          control that would license it.{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>The measurements we have run do not favor it.</strong>{" "}
          On the scripted lines, the most development-like trend in the public records
          (answers growing up to fourfold, disclaimers climbing) turned out to be a
          one-day change in daemon and prompt. Within constant conditions, no trend survived correction
          (<a href="#constant-stimulus" style={{ color: "var(--color-accent)" }}>measured above</a>).
          The identity metric (2026-09-24) separates lines but finds nothing that accumulates.
          That does not refute growth as this page defines it, because diversity has had one
          unreviewed pass and task success none. But these are the only quantitative evidence on the
          comparison, and neither favors the developmental description.
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
