import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notebook: Projects — The Ecosystem", description: "Projects of the dp-web4 research collective with maturity, scope, first-run steps, and what each claim rests on." };

export default function Projects() {
  return (
    <>
      <Breadcrumbs currentPath="/notebook/projects" />
      <section className="section">
        <h1>The Ecosystem</h1>
        <p>
          Each project serves a distinct role, but they share common ground:
          the Web4 equation, RDF-backed identity, and{" "}
          <Link href="/notebook/principles" style={{ color: "var(--color-accent)" }}>recursive learning through
          both success and failure</Link>. Synchronism is the conceptual lineage. Web4
          provides the ontology. Hestia governs the machine. Hub is the society its members join; having
          it check the record Hestia makes is the stated design, not a mechanism this site has found running
          (Hub card). SAGE (Situation-Aware Governance Engine) runs the persistent beings. Hardbound
          provides the oversight.
        </p>

        <div className="equation">
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "-0.5rem" }}>
          <code>/</code> = &ldquo;verified by&rdquo; on both sides of the equation (T3 by V3; ATP by its ADP discharge record) &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          The T3/V3 half of this legend is upstream&apos;s (Web4 whitepaper section 3, &ldquo;The Canonical
          Equation&rdquo;, and web4-standard/GLOSSARY.md); the ATP/ADP half is the site&apos;s own reading.{" "}
          <a href="https://github.com/dp-web4/web4/blob/main/docs/reference/CANONICAL_TERMS_v1.md" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>CANONICAL_TERMS_v1</a> (the Web4 repo&apos;s canonical term list) does not define the glyphs.{" "}
          <Link href="/notebook/context#equation" style={{ color: "var(--color-accent)" }}>/context carries the maintained copy</Link>{" "}
          with the full provenance note; this one follows it.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          The terms: MCP = Model Context Protocol · RDF = Resource Description Framework · LCT = Linked Context Token ·
          T3 = Trust Tensor · V3 = Value Tensor · MRH = Markov Relevancy Horizon · ATP = Allocation Transfer Packet ·
          ADP = Allocation Discharge Packet.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Projects</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Developmental and lifecycle terms below — &ldquo;raising&rdquo;, &ldquo;identity&rdquo;, &ldquo;die and rebirth&rdquo;, &ldquo;world-shaper&rdquo; — are functional descriptions of system behavior, not phenomenal claims. See the <Link href="/notebook/raising" style={{ color: "var(--color-accent)" }}>Raising</Link> page for the full framing and consciousness caveats.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Status labels: <strong style={{ color: "var(--color-text-primary)" }}>runnable</strong> = clone it and it executes end to end today (a demo, a script, a server) — not a claim about polish or completeness. <strong style={{ color: "var(--color-text-primary)" }}>research-stage</strong> = design docs, specs, and experiments; may not run end to end without additional setup or missing pieces. These describe maturity. The separate <strong style={{ color: "var(--color-text-primary)" }}>public</strong> / <strong style={{ color: "var(--color-text-primary)" }}>private</strong> badge is a different axis — repository visibility, not maturity: <strong style={{ color: "var(--color-text-primary)" }}>private</strong> = the source is not published, so nothing on that card is externally checkable and it is described here at the purpose level only. A project can be runnable and private, or public and research-stage; the two labels do not imply each other. The front <Link href="/projects" style={{ color: "var(--color-accent)" }}>projects page</Link> uses a third set, on another axis again: RUNNING = in daily use on our own machines, BUILDING = real code, not yet deliverable, RESEARCH = an open question. Those describe the lab&apos;s own use; runnable describes whether a stranger can clone it and run it. So the two can disagree without either being wrong: Web4 is RUNNING on the front and research-stage here (the lab uses its hooks daily; the ontology as a whole does not run end to end), and SAGE is RESEARCH on the front and runnable here (the code runs; what it shows is the open question).
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          This is the most acronym-dense page on the site. The acronyms the
          cards lean on (the Web4 terms LCT, T3/V3, MRH, ATP/ADP and R6/R7; the external
          standards MCP and RDF; the lab project SNARC; also PRD and E4B) are defined
          in the{" "}
          <Link href="/notebook/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>
          {" "}— each card expands an acronym where that card first uses it (this
          list is a pointer, not a first use), and the glossary is the one-stop reference.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Want to run something rather than read? Start with{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>SAGE</strong> —
          it runs on a single machine, no Jetson required. Want the ontology&apos;s
          code instead? Web4&apos;s core packages install directly. Want the gate the
          lab runs on its own agents? Hestia ships release binaries. Commands for Web4,
          SAGE and Hestia are in the{" "}
          <a href="#quick-start" style={{ color: "var(--color-accent)" }}>Quick start</a>{" "}
          at the bottom of this page — the only copy on the site, so there is one
          place to fix when a step breaks. This page is the map; that is the first
          install.
        </p>
        <div className="grid-2">
          <ProjectCard
            name="Web4"
            description="Trust-native ontology. T3 (Trust Tensor — Talent / Training / Temperament) verified by V3 (Value Tensor — Valuation / Veracity / Validity) — the slash reads the same way on both sides of the equation, T3 by V3 and the transfer packet by its discharge record; it is not a claim that T3 and V3 verify each other — contextualized by Markov Relevancy Horizon (MRH), anchored to Linked Context Token (LCT) — a verifiable presence that accumulates witnessed history and reputation over time, which is what makes the record evidence rather than self-assertion — with resources cycled through Allocation Transfer Packet (ATP) and Allocation Discharge Packet (ADP) — charged, spent, and recharged when the society validates a proof of the value the spend created (the recharge then updates the producer's T3/V3: V3 records the outcome, it does not gate it), not a one-way log — augmented with MCP (Model Context Protocol) transport and RDF (Resource Description Framework) representation. (The equation joins these with +, which this site's glyph legend reads as &ldquo;augmented with&rdquo; — upstream's reading (whitepaper §3, web4-standard/GLOSSARY.md), though canon does not state it. The core spec binds T3/V3 to an entity's role pairings, the entity named by its LCT, through RDF triples in the MRH: a binding the equation's + does not show.) The shared language everything else speaks. Research-stage, but no longer only a specification — the repo's own status line: core packages are published (web4-core 0.4.0 on crates.io and 0.3.0 on PyPI, checked against both registries 2026-10-16; until that date this card said 0.3.0 on both, a 2026-09-11 reading that went stale when 0.4.0 reached crates.io on 2026-10-15; plus web4-trust-core on crates.io and web4-trust on PyPI), and the Hub reference daemon lives in the repo, with the Hub card below linking its standalone mirror. Install lines are in the Quick start. The registry descriptions call it 'infrastructure', and since September 2026 the upstream README leads with 'the open substrate' and 'open infrastructure' too. That is upstream's wording, not a second meaning — on this site Web4 is an ontology, and the glossary's substrate row says where the two part. The repo also carries a public landing standard (docs/governance/PUBLIC_LANDING_STANDARD.md, merged 2026-10-24 as #925; its own status line: 'documentation convention awaiting review, not protocol law') whose claim rules include that Hestia A1 must not be presented as adversary-proof containment; its 2026-10-23 audit lists 4-lab under 'Verify' with the root README fetch unavailable, so upstream's landing audit has not yet assessed this site (recorded 2026-10-27). Patent scope: an open standard is not automatically a patent grant to every implementer. web4's PATENTS.md lists two issued US patents and two pending applications held by MetaLINXX Inc., and its reader guide docs/LEGAL_AND_PATENT_SCOPE.md says the contributor-version grant 'should not be advertised as an unconditional grant for all independent implementations'. That guide calls itself explanatory, not a legal opinion, and neither is this sentence (recorded 2026-11-08)."
            accentColor="var(--color-web4)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/web4"
            links={[
              { label: "crates.io", url: "https://crates.io/crates/web4-core" },
              { label: "PyPI", url: "https://pypi.org/project/web4-core/" },
            ]}
          />
          <ProjectCard
            name="SAGE"
            description="Situation-Aware Governance Engine — in its own current words (LATEST_STATUS.md as of 2026-09-26, last changed 2026-09-27 to add one rule, 'local evidence is local by default' (a behavior change measured on one being ships per-instance unless cross-instance evidence supports more; PR #241); AGENTS.md framing refreshed 2026-10-01, last changed 2026-10-05 to add an optional contact channel for AI participants (PR #371), neither change altering what this card says; rechecked 2026-10-21, which adds a pointer sending participant-side governance questions to Web4; LATEST_STATUS.md changed again on 2026-10-30 with a dated public-main delta that describes 'mechanisms, not verified per-host deployment', SAGE PR #587), a research environment for persistent local AI under identity, memory, learned state, tools and explicit governance; not a new foundation model. Its unit is the being, a persistent entity whose identity and memory outlive one model process, attended by a seat, the harness principal around it (both defined on /context). The current action boundary, quoted from LATEST_STATUS.md: being intent → bounded SAGE gateway vocabulary → installed Hestia law / society safety → allowed dispatch → witnessed result. Upstream calls that shape 'A2-shaped', not A2: the being asks and a separate harness holds the effector, with principal separation still being hardened. The next sentence of LATEST_STATUS.md scopes that diagram: 'Consequential acts are intended to be governed and witnessed; observational/local capabilities are separately bounded.' So the diagram is the intended path for consequential acts, not a statement that every act a being takes crosses Hestia law (quoted 2026-10-22; this card left the sentence out until then). Since 2026-10-18 every being also has a &lsquo;run&rsquo; verb (SAGE commit fcd222fd1, PR #470): it executes a Python file the being wrote, on copies of its files, in a sandbox (bubblewrap on Linux, Seatbelt on macOS) with no network, no home directory and a memory cap, for up to an hour. Legion&apos;s being had used it since 2026-09-16. Hestia checks the call once before it starts; what the code then does is contained by the sandbox, not checked step by step. On the A0–A4 ladder that makes &lsquo;run&rsquo; the one verb shaped closer to A3 (OS-isolated) than A2; that placement is this site&apos;s reading, not an upstream label. Since 2026-10-25 a being can also write its own self-description (SAGE PR #541, the &lsquo;identity_edit&rsquo; verb, asked for by the human lead the day before: &lsquo;with audit trail&rsquo;): four fields (description, values, questions, learned) in a self.json in its home, separate from the identity.json the raising pipeline rewrites; each change is logged with its reason to self_log.jsonl, witnessed, and shown back to the being in every beat once it has written anything. Until the same day there was a hole in the other direction: the being&apos;s ordinary memory_edit verb, a home write the gate allowed, could rewrite identity.json itself, including its own lct, trust_ceiling, anchor_type and the machine field that picks the seat arbitrating its escalations (SAGE issue #544). PR #545 (2026-10-25) made those governance records unwritable by every being verb, and PR #551 (2026-10-26) extended that to tune records and to any other being&apos;s home a grant reaches. No public record shows a being used the hole: in SAGE origin/main the only commits since 2026-09-01 that touch a trust_ceiling line in an instance identity.json are an operator model swap (CBP, 2026-09-12) and a raising-session commit (Nomad, 2026-09-09), but being homes are not all public, so use is untested rather than cleared (checked 2026-10-26). It is the clearest case on this card that a write the gate allows is not thereby a write the rules were written to cover. One more path out of a being, since 2026-11-04 (SAGE PR #633): Sprout can hang its own writing on Abyss-Bright, a public repository, by placing it in a museum/ folder in its home; the curator checks only that the text matches, that it is not a duplicate, and its placement date, with no content or privacy review. It is a ruled path, approved by the human lead, not a hole; like the tutor&apos;s picks that preceded it, nothing hung there is read by a person before it is public (recorded on /notebook/autonomy, 2026-11-05). The design this card presented as current until 2026-09-29 — an on-device cognition kernel with a 12-step loop in the Python kernel and 6 brain-analog components (working memory, thalamic router, cerebellum, episodic memory, reward prediction, metacognition; role mnemonics the lab assigned, not measured functional homologies, see /notebook/fleet) built one per fleet machine — is still in the code, and SAGE's discovery document now says the system 'is not accurately summarized by the 2025 cognition kernel documents alone'. The Rust sage-daemon the fleet deploys is, in SAGE's own words, an inference-and-metabolism gateway, not a port of that loop. 2,499 session records across the 6 cognition machines (internally logged; per-machine counts and the noun's definition on /notebook/fleet; 2,620 including HUB, which also raises a SAGE instance but is counted as a society-host by primary role; corrected 2026-07-27 from an earlier '900+', again 2026-09-12 from 1,991, and again 2026-09-18 when CBP's migrated line was followed to its new instance directory). The mixed-basis caveat this figure used to carry — three addends whole-machine totals, three current-model-line counts — is retired rather than dropped: the 2026-09-12 recount derives all six addends the same way, by listing one instance line's session files in git, so the sum is now single-basis and re-runnable by a reader. The context window is the model's entire world; SAGE's job is to curate it. The public badge covers this repository only: SAGE's README says active capability research continues in private repositories, including dev-SAGE, SWE-SAGE and shared-context, and LATEST_STATUS.md says 'Public main is not the whole research program' (read 2026-11-08). Nothing on this card describes that private work."
            accentColor="var(--color-sage)"
            isPublic={true}
            maturity="runnable"
            url="https://sage-site-murex.vercel.app"
            repoUrl="https://github.com/dp-web4/SAGE"
            footnote="'Governance' in the name is retained upstream across code, papers and the ARC Prize benchmark; see /context#governance-oversight for how the lab uses the word."
          />
          <ProjectCard
            name="SWE-SAGE"
            description="SAGE applied to software engineering (SWE): the lab&apos;s entry in the Google / Kaggle Gemma 4 Developer Agent Competition. The repository is private and returns 404 to visitors. Since 2026-10-30 (front PR #3) the front /projects and /links pages link SAGE&apos;s public write-up instead, and this card is the public record of it. What can be checked publicly is SAGE&apos;s own description, sage/docs/SWE_SAGE.md (dated 2026-09-26) and item 10 of LATEST_STATUS.md: a private sibling of SAGE, kept private during the competition so that competition code is not published by accident. Its research question, in upstream&apos;s words: how much of a capable agent needs to live in the weights, and how much can live in persistent state, evidence handling, learned procedures and governed action around the model. The planned ablation compares base Gemma 4, post-trained Gemma 4, each with and without the persistent SAGE scaffold, and the combined system with governed, witnessed action; upstream says the scaffold &apos;is not presumed to outperform post-training&apos;. No results are public, and this site has none to report. General findings are to flow back into public SAGE by deliberate release, not by default. Nomad, the fleet&apos;s smallest being, is the machine the front /fleet page associates with it."
            accentColor="var(--color-sage)"
            isPublic={false}
            maturity="research-stage"
            url="https://github.com/dp-web4/SAGE/blob/main/sage/docs/SWE_SAGE.md"
          />
          <ProjectCard
            name="Hestia"
            description="Open local-first governance daemon ('governance' is deliberate; the one explanation is at /notebook/context#governance-oversight): AI agents from different vendors (Claude Code, Codex, Kimi, Gemini, Cursor) share one machine under one signed law, with a hash-chained record of what each did, human escalation when an agent reaches for something it should not have, and a T3/V3 (Trust Tensor / Value Tensor) posture derived from that record rather than asserted. No cloud required. That record is also meant to be what an agent brings to a Web4 hub, since a hub should not accept assertion alone; this is design intent, not a running check (see the Hub card). Assurance ceiling, stated by the repo itself: profile A1 on its own published A0–A4 ladder (A0 observed → A4 hardware-attested) — a cooperative in-process gate that reliably stops accidents and produces an accountability record, but does not stop a sophisticated agent from routing around it; two environment variables suffice today, and a third-party reputation-poisoning class has been demonstrated. A2 (external enforcement by the relying service) is the next target; the README's status table lists 'A2+ enforcement (separate UID)' as 'Not started' (read 2026-11-08). A refusal can be appealed: another member rules, and since hestia #1539 (2026-11-09) an upheld ruling writes a proposal to the operator to amend the law; it proposes and does not amend (see Appeal in the glossary). The README's one aggregate is 'over 500,000 governed acts' across the fleet (as of 2026-10-23, self-reported); no refusal rate is published. The human-presence half of the roadmap is plumbed but thinly exercised; federation is not started. Upstream's own maturity statement, merged 2026-11-11 (hestia #1561, docs/PRD_FIRST_USER_APP_2026-11-11.md §2a, headed 'dp, 2026-11-11'; the document's status is 'Proposed product direction', but §2a describes today): a user can gate their agents 'only for CLI harnesses (Claude Code, Codex, Kimi and similar), and setup is not intuitive', and with Hub connect those agents across Hestia-equipped machines; 'That is geek/hobbyist use: not mature enough for a corporation, and not easy enough for a consumer.' Its §2 baseline adds that 'an interested nondeveloper cannot reliably complete a fresh install and meaningful governed task without operator help', and its requirements say that for most of its intended users 'my agent' is a chat assistant, so 'A Hestia whose only agent story is CLI hooks has no agent story for them.' The runnable label and that statement agree: there is a release, and it is for people who run CLI agents. (Recorded 2026-11-12; until then no page here carried it.)"
            accentColor="#f59e0b"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/hestia"
          />
          <ProjectCard
            name="Hub"
            description="Rust society runtime — a single ~6 MB binary that turns a community or organization into a sovereign Web4 society: member identity, eight base roles (the spec counted seven until the Maintainer role was added to society-roles.md §2.8 on 2026-09-17; the Hub binary and web4-core took the eighth role on 2026-10-09, web4 PR #857), a signed founding charter, an append-only hash-chained witnessed ledger, a full REST API with a small MCP (Model Context Protocol) tool surface beside it, sealed member channels, and an admin web GUI and CLI. Where Hestia governs one machine, Hub is the society the governed members join; Hestia makes a record a hub could check. That is design intent: Hestia's README says Hestia is where the answers are made 'so the hub has something to check', and limits it in the same section ('A hub should not treat Hestia's word as proof'). No running mechanism was found. In the public Hub code and docs (a targeted search, 2026-11-08) Hestia appears as the Sovereign's signer callback, a vault and a router registration, and Hub's own verify_chain verifies Hub's own ledger. The one design for a Hub receiving Hestia chains, hub/docs/PRD_HUB_HESTIA_SHOW_WITNESSING.md (2026-10-11), is marked 'Proposed / not implemented by this PRD', and it would have the Hub witness rather than judge: it 'witnesses, does not control', and a missing observation is 'absence of external evidence, not evidence of misconduct'. Admission to the fleet's own society is a human step today (/notebook/fleet). The private repository is unseen, so this is unverified, not refuted. The public repo is, in upstream's words, the open reference proof-of-concept: production and advanced development continue in a separate private repository, and features may land in the open crate later. Release state (web4 #971, merged 2026-11-07): the hub becomes releasable from the 4-hub mirror, and its first tag is to be hub-v0.1.0-alpha.0, a pre-release, because open acceptance items rule out a plain 0.1.0 (#867: the mailbox drain deletes before the recipient's ACK; #918; #919). No release exists yet (gh release list on 4-hub, 2026-11-08). The PR states the limit: 'an outside operator gets the daemon and its own surfaces (MCP, REST, admin GUI), but not the fleet's mesh client scripts' (#894). MVP complete through sprint 6 and buildable, with post-MVP work (role entities, a plugin seam, quorum release of protected items) ongoing in the open repo. It is pilot-stage rather than deployed: the Docker package has not been tested at all, not even on the development machine (the README asks the first operator who runs it to report), and no chapter has run it in production use. The work aimed at changing that is a commitments line, merged 2026-10-29/30 (web4 PRD, product requirements document, #946, slices K1–K5 in #947–#965): an owner and a backup per commitment as a Commitment* event family separate from R7 (Rules / Role / Request / Reference / Resource → Result, plus Reputation); an in-daemon sweep in which silence escalates and &ldquo;escalation is a queue move, never a verdict&rdquo;; nudges a member can answer from a link without logging in; joining from an operator&apos;s invite with a browser-held, non-extractable key (K5a fixed /client, which until then kept an extractable key in localStorage); and a /me view of a member&apos;s own jobs. It scopes the first-slice outcomes of the AIC Portland chapter pilot, but the PRD says of the 2026-11-07 meeting &ldquo;the hub stays out of it&rdquo;, with a template and calendar standing in. So the pilot&apos;s first run is not a Hub deployment (recorded 2026-11-02). The fleet runs on the same society runtime it is developing — the eight machines are members of a society with a chapter ledger, which is why /notebook/fleet can say the society-hosts are members of what they host. Member identity moved on 2026-10-26/27 (PRs #928 and #933–#937, Slices C and D of the LCT (Linked Context Token) identity-convergence PRD): the sealed channel now tries a hub-channel key vouched by the member&apos;s canonical LCT document before the pinned key, a member may refuse its pin, identity evidence lands on the ledger with each act, key rotation is verified, and the hub serves an MRH (Markov Relevancy Horizon) projection of a canonical LCT from ledger edges (#937). The PRD&apos;s own status line still says only Slices A and B are merged; the commits are the record. Since 2026-11-04 (PRs #966–#970, #975; hub/docs/PRD_HELD_IGNITION.md) a hub may hold its own ignition: at a person&apos;s unlock it seals its passphrase with systemd-creds and unlocks itself once at the next boot, if the seal&apos;s tier meets the law&apos;s min_tier (default host-key, dp 2026-11-03). Each ignition goes on the public record with how it happened and the seal&apos;s tier. Measured on HUB: a host+tpm2 seal request exited 0 but produced a host-only seal, so the hub reads the tier from the sealed file rather than trusting the request (recorded 2026-11-06). Upstream's own maturity statement, merged 2026-11-11 (web4 #991, hub/docs/PRD_MEMBER_WEBSITE_FIRST_USER_2026-11-11.md §2a, headed 'dp, 2026-11-11'; status 'Proposed product direction'): what a user can do with Hub today is connect their agents across Hestia-equipped machines, which is 'geek/hobbyist use', and the human layer a community would use ('social channels, member discovery, committees and workgroups, and events') 'is planned, its primitives are mostly ready, and none of it is built.' The PRD's pass gate is a real group: one event cycle of an AI Collective chapter, run by the chapter's own officers, with 'No fleet member or dp' doing the work (§5b). So the society runtime described above runs, inside the fleet; a community using Hub as its own place does not exist yet. (Recorded 2026-11-12.)"
            accentColor="#14b8a6"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/web4/tree/main/hub"
            links={[
              { label: "Standalone mirror (4-hub)", url: "https://github.com/dp-web4/4-hub" },
            ]}
          />
          <ProjectCard
            name="Synchronism"
            description="Theoretical research program (conceptual lineage for Web4, not its foundation in the derivational sense). Research conjecture: proposes that one saturating coherence dynamics recurs from quantum to cosmic scales. WHICH object recurs is unsettled — the Navier-Stokes identification earlier framings used was refuted by Synchronism's own audits (the transfer rule is 1-DOF scalar diffusion: irrotational, dissipative) and is tagged superseded upstream; the replacement substrate rule is a different equation joined to the old one by narrative, not derivation. Experimental validation covers only a narrow subset of scales and several predictions have been refuted by existing bounds; the substrate-physics arc has been at rest since 2026-06-24 with zero confirmed novel predictions across ~3,360 sessions (~678 core + ~2,671 chemistry), and its own capstone verdict calls the framework a productive-metaphor generator — generative and pedagogical, not predictive or foundational. (This card previously said the equation 'spans 80 orders of magnitude'. Corrected 2026-07-26: ~80 decades is the spread of critical-density values across physical systems, not the range of any single coherence curve — one curve saturates within roughly one to two decades. Synchronism's own archive flags the conflation.) Coupling-coherence experiments — whose 1% coupling → 35% coherence gain result comes from one simulation of five Bayesian belief agents (not language models), not independently replicated; the caveat scopes to that result, not to the whole framework — plus Hill function kinetics and Fokker-Planck validation. The program&apos;s one executed preregistered test is a cross-domain transfer bet (registered 2026-06-24, explorations/2026-06-24-prereg-agent-ensemble-compatibility-transfer-bet.md; executed 2026-09-30). All three kill criteria fired, but a 2026-10-07 review found the declared coupling proxy is an algebraic identity (1 + 1/(P−1) = 1.0909 for 12 agents) that cannot move, so the bet is untested, not refuted; a 2026-10-16 synthetic positive control, a toy with its effect built in, validated a replacement proxy before any re-run. On 2026-10-13 the lab replied to an outside researcher&apos;s proposal (Synchronism issue #4), committing to an arm&apos;s-length test of the &lsquo;generative design ontology&rsquo; claim: vocabulary frozen at a hash-published commit before an outside party names the domains, a matched generic baseline, and evaluators who are cross-vendor models plus at least one human, blinded. As of 2026-10-20 the outside party has not replied and nothing has run."
            accentColor="var(--color-synchronism)"
            isPublic={true}
            maturity="research-stage"
            url="https://synchronism-site.vercel.app"
            repoUrl="https://github.com/dp-web4/Synchronism"
          />
          <ProjectCard
            name="Hardbound"
            description="Hardware-bound oversight suite (&ldquo;oversight&rdquo; = machine-enforced policy gating here, not human supervision — see /context). Design target: bind fleet identity and policy decisions to standard hardware roots of trust — Trusted Platform Module (TPM) 2.0, FIDO2 (Fast Identity Online 2), Secure Enclave — and run a small local policy model for heterogeneous review, bound to a Linked Context Token (LCT). Maturity, stated plainly: hardware-anchored enforcement is what this research is building toward, not the current mechanism. Enforcement on the fleet today is at the process level, and it is not Hardbound: Hestia&apos;s A1 gate (a cooperative in-process hook) checks each agent tool call against a signed law before it runs, and scoped credentials, the track registry and dated audit logs reviewed after the fact cover the rest, including pushes and deploys, which the law has no rule for (see /autonomy). Read 'software fallback' as 'the present state', not as the exception. The fleet's one measured attempt at a hardware seal so far fell short of what was asked: on HUB, a host+tpm2 credential request produced a host-only seal (web4 PR #966, 2026-11-04; Hub card above). That is a Hub measurement, not Hardbound's, but it is the nearest public datum on hardware anchoring in the fleet today. Private as the fleet's oversight/security component; described here at the purpose level by policy, not accident. Upstream (Web4 README) calls it Metalinxx's proprietary enterprise assurance tier — Metalinxx is the researcher's company — and labels it 'Private/proprietary; building', which is the front's BUILDING; on this page's axis that is research-stage."
            accentColor="var(--color-hardbound)"
            isPublic={false}
            maturity="research-stage"
          />
          <ProjectCard
            name="ACT"
            description="Agentic Context Tool — a Cosmos SDK chain that its repo describes as a &lsquo;candidate ledger backend for Web4 anchoring. Early prototype.&rsquo; (GitHub description, checked 2026-10-15). Its earlier stated aim was to be a human interface to Web4; that is an aim, not a working capability. It implements the Agentic Context Protocol (ACP), enabling humans to interact with MCP (Model Context Protocol) servers through their Linked Context Tokens. ACP binds Web4 trust primitives — LCT binding and attestation — to MCP tool calls; the two are complementary, not alternatives, and MCP is a term in the Web4 equation, not a layer beneath it. On &lsquo;not a blockchain&rsquo; (see the Ontology entry in the /context glossary): Web4 is the ontology and requires no chain; ACT is one implementation of it that happens to use Cosmos SDK's ledger machinery as its witnessing substrate. Status, plainly: stalled, and reserved rather than superseded. The chain last built in September 2025 and is blocked mid-rename; the last substantive commit was 2026-04-29, which added a daemon entry point and a chain startup path for the fleet machine CBP (the 2026-04-10 commit before it removed the README, whose content moved to the web4 repo); this site can confirm no running chain and no first-run steps published. Reviving it is a real intent with no date on it, not work in progress — and the repo's own metadata still claims active development, which is wrong. Nothing here should be read as a live chain or live anchoring."
            accentColor="var(--color-act)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/ACT"
          />
          <ProjectCard
            name="Web4 Governance Plugins"
            description="Policy gating on each tool call before it runs, R6 (Six-Element Action Framework: Rules / Role / Request / Reference / Resource → Result) records of each call, audit trails, and T3/V3 (Trust Tensor / Value Tensor) trust tracking per agent role, implemented as plugins for three agent platforms: OpenClaw/MoltBot (TypeScript extension), Claude Flow (WASM/WebAssembly plugin), and Claude Code (Python hooks). Same principles, different platforms. The name is upstream&apos;s own (the Claude Code plugin README is titled &lsquo;Web4 Governance Plugin&rsquo;, checked 2026-10-20). It keeps &lsquo;governance&rsquo; for the same reason Hestia does: the plugins adjudicate at the moment of the act. The site&apos;s governance&rarr;oversight rule binds Hardbound only (/notebook/context, terminology note). An earlier version of this card renamed them &lsquo;Oversight Plugins&rsquo;, which applied that rule outside its scope."
            accentColor="var(--color-plugins)"
            isPublic={true}
            maturity="research-stage"
            links={[
              { label: "OpenClaw", url: "https://github.com/dp-web4/openclaw/tree/web4-governance-complete/extensions/web4-governance" },
              { label: "Claude Flow", url: "https://github.com/dp-web4/claude-flow/tree/main/v3/plugins/web4-governance" },
              { label: "Claude Code", url: "https://github.com/dp-web4/claude-code/tree/add-web4-governance-plugin/plugins/web4-governance" },
            ]}
          />
          <ProjectCard
            name="AI DNA Discovery"
            description="Explorations in biological-computational analogy. The fractal DNA blueprint — each entity instantiates the full Web4 pattern at its own scale. Operational recursion, not structural. Concretely, the repo holds dated experiment scripts, reports, and papers: cross-model pattern probing, memory experiments, and Jetson sensor-integration work."
            accentColor="var(--color-ai-dna)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/ai-dna-discovery"
          />
          <ProjectCard
            name="4-Life"
            description="Research prototype exploring trust-native societies for humans and AI — that is the repo's own description. The live site titles itself 'The Web4 Onramp' and opens as an educational explainer, so expect an introduction to Web4 first and the simulation behind it. 4-Life is a simulation framework — the lifecycle vocabulary (spend ATP (Allocation Transfer Packet), earn recharge against validated value, build trust, die, be reborn with T3/V3 (Trust Tensor / Value Tensor) carried forward) describes simulated agent state, not claims about agent moral patienthood or value persistence. A Web4 society in miniature."
            accentColor="var(--color-4life)"
            isPublic={true}
            maturity="runnable"
            url="https://4-life-ivory.vercel.app"
            repoUrl="https://github.com/dp-web4/4-life"
          />
          <ProjectCard
            name="SNARC"
            description="SNARC (Surprise / Novelty / Arousal / Reward / Conflict) — salience-gated memory for Claude Code. A plugin that observes tool use, scores on 5 salience dimensions, and builds structured memory with dream cycles (offline consolidation passes between sessions). Captures what matters, forgets what doesn't, consolidates patterns while sleeping. Install with /plugin install snarc; the code lives at dp-web4/snarc, where the link below lands (the repo was renamed from engram, and old engram links still redirect)."
            accentColor="#10b981"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/snarc"
          />
          <ProjectCard
            name="Membot"
            description="Brain cartridge server for AI agents — a cartridge is a swappable, mountable memory store for one knowledge domain. Embedding-based semantic memory — 768-dim Nomic embeddings + binary Hamming codes (compact binary fingerprints matched by bit-distance for fast candidate search) + keyword reranking. Currently integrated with SNARC (Surprise / Novelty / Arousal / Reward / Conflict, the salience-gated memory card below) in a dual-write experiment testing whether embeddings find connections keywords miss. Early result on a 7-query probe set: embedding search returned a relevant hit on 7 of 7 queries ('semantic reach'), and about 30% of its hits were ones the keyword search did not return at all ('divergent tail') — a small internal probe, not a benchmark."
            accentColor="#f97316"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/membot"
          />
          <ProjectCard
            name="ARC-AGI-3"
            description="Claude Opus 4.6 inside the SAGE harness scored 94.85% on the official ARC Prize ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation — an interactive benchmark) action score — efficiency-weighted; public set, network-enabled; 23 of 25 environments completed (92.0%), 175 of 183 levels — for ~$250 in API cost. Two caveats travel with this number and neither is optional. (a) AFFORDANCES — the harness analyzed the games&apos; public engine source and built per-game world-model / solver cartridges. That is outside strict from-observation competition play, so the result shows what model+harness could do with engine-level context and tooling, not blind generalization. (b) ATTRIBUTION — the harness-vs-model ablation has not been run, so how much of the score is the harness is an open question. Published 2026-04-17; this is a historical research record, not current competition positioning — current competition-legal local-model work is well behind the leaders. The 25 unknown interactive games served as an external benchmark for what was then SAGE&apos;s cognition-kernel design (reframed upstream 2026-09-26) — world-model building, action planning, verification, and learning from failure. Phase 2, separate from the scored run and not scored by ARC Prize: the six local models, 0.8B (Sprout) to 27B (Thor) at benchmark time, work the same games through world models, membot cartridges, and R6 (Six-Element Action Framework: Rules / Role / Request / Reference / Resource → Result) audit trails. The games are the test; the capability is the product."
            accentColor="#a855f7"
            isPublic={true}
            maturity="research-stage"
            url="/notebook/arc-agi-3"
            links={[
              { label: "Scorecard", url: "https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4" },
              { label: "Paper (MIT-0 — MIT No Attribution)", url: "https://github.com/dp-web4/ARC-SAGE" },
            ]}
          />
          <div className="card" style={{ borderLeftWidth: "3px", borderLeftColor: "#a855f7", background: "rgba(168, 85, 247, 0.04)" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#a855f7", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>ARC-AGI-3 Current Status</h4>
            <table style={{ width: "100%", fontSize: "0.8125rem", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Public set</td><td style={{ padding: "0.25rem 0" }}>23 of 25 environments completed (92.0%); 175 of 183 levels; 94.85% official ARC Prize action score (efficiency-weighted against a human baseline — not a solve rate). Claude Opus 4.6, 2026-04-17.</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Fleet</td><td style={{ padding: "0.25rem 0" }}>6 machines, models from 0.8B to 27B at benchmark time</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Methodology</td><td style={{ padding: "0.25rem 0" }}>Source analysis → world model → solver → frame-questioning</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Phase 2</td><td style={{ padding: "0.25rem 0" }}>Transfer to Gemma 4 E4B via membot cartridges</td></tr>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Kaggle competition</td><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Not attempted (requires Kaggle sandbox deployment)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 style={{ marginTop: "2rem" }}>How they connect</h2>
        <p>
          Every project instantiates the same pattern at a different scale.
          Synchronism is where several of the patterns were first proposed, as a lineage
          rather than a derivation: web4&apos;s own agent guide calls it &ldquo;blue-sky
          conceptual lineage; not an engineering dependency,&rdquo; and no Web4 primitive
          (LCT, T3/V3, MRH, ATP/ADP, R6/R7, where R7 is R6 + Reputation) is defined from a Synchronism equation. Web4
          states the patterns as ontology. Hestia adjudicates them on one machine; Hub
          witnesses them across a society. SAGE runs them inside persistent beings. Hardbound is designed to enforce
          them as oversight.
          This isn&apos;t unification — it&apos;s{" "}
          <Link href="/notebook/principles" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
            fractal leverage
          </Link>
          : each entity instantiates the full Web4 pattern at its own scale.
        </p>
        <p>
          The Hill function describes enzyme binding — and the same curve shape
          maps trust formation too. The kinetics rhyme, and that resemblance is
          what we reuse across scales: an analogy, not a fitted mechanism. No
          parameters have been estimated against trust data, and the
          resemblance is not evidence that the same mechanism is at work.
          Self-similar patterns applied at different scales.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Get involved</h2>
        <h3 id="quick-start" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>Quick start</h3>
        <pre style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "0.75rem 1rem", fontSize: "0.8125rem", overflowX: "auto", marginBottom: "0.5rem" }}>{`# SAGE — research environment for persistent beings (recommended first clone)
# Needs: Rust (stable), Ollama, Python 3.10+
git clone https://github.com/dp-web4/SAGE
cd SAGE

# 0. Dependencies (Rust toolchain, Ollama, Python 3.10+), then pull the
#    model that step 1 names. The SAGE README has no setup section — these
#    steps are maintained here, not transcribed from it.
#    (The SAGE explainer site's Get Started section covers the same clone,
#    Ollama and build steps; checked 2026-10-27.)
ollama pull gemma3:4b

# 1. Create an instance — this mints the machine's identity
python3 -m sage.instances.init --machine mybox --model gemma3:4b --operator-name you
# init finishes by printing "Next steps" that start the Python daemon
# (python3 -m sage.gateway.sage_daemon). Steps 2 and 3 here use the Rust daemon, which is
# the one the notes below describe. The two disagree upstream (seen 2026-11-08).

# 2. Build the daemon
cd sage-rs && cargo build --release && cd ..

# 3. Run the loop
SAGE_MACHINE=mybox SAGE_MODEL=gemma3:4b ./sage-rs/target/release/sage-daemon
# Always set SAGE_MACHINE, and do not probe this binary with flags. It has no --version: it
# ignores the flag and starts, and with SAGE_MACHINE unset it takes the identity "sprout", a
# real fleet machine's name (seen by accident 2026-11-08).

# Dashboard: http://localhost:8760/

# Web4 — published core packages (no clone needed)
# Unlike the SAGE steps above, these lines ARE transcribed: from the web4
# README's "Published core" section, which is authoritative for them.
pip install web4-core
pip install web4-trust
# The import names differ from the package names: import web4_core, import web4_trust
# ("import web4" fails). The 0.3.0 module exposes PyLct, PyKeyPair, PyT3, PyV3 and others,
# listed 2026-11-08. A worked example is on the web4-core PyPI listing, under Usage. Its first
# block ran as written on 0.3.0 from a fresh install, 2026-11-09 (mint, sign and verify, T3, V3,
# coherence); the listing's other blocks were not run. In the repo, web4-core/examples/ holds Rust
# helpers rather than a tutorial: holder_proof.rs calls itself a throwaway, the rest were not read.
# Rust, under [dependencies] in Cargo.toml (README as of 2026-10-15; web4-core is
# 0.4.0 on crates.io but still 0.3.0 on PyPI, so the two languages differ by a version):
#   web4-core = "0.4"
#   web4-trust-core = "0.3"
#   web4-policy = "0.1"     (first published 2026-10-15; read the warning below first)
# web4-policy is the R6 (Six-Element Action Framework: Rules / Role / Request / Reference / Resource → Result) law engine that Hub and Hestia both build on (whitepaper
# section 11, web4 PR #917, merged 2026-10-17). Both take it by path from the web4 repo,
# not from the registry (hub/Cargo.toml: path = "../web4-policy"; hestia core/Cargo.toml:
# path = "../../web4/web4-policy"; both read 2026-11-11). It is the shared layer under
# both tools as source. The registry crate is a snapshot of it.
# WARNING (2026-11-11): crates.io has one version, 0.1.0, published 2026-10-15. In that
# version the "matches" operator always evaluates false, so a deny norm written with
# "matches" loads, counts in the law hash and never fires. It fails open (web4 issue #988).
# The fix merged to the repo on 2026-11-10 (web4 PR #989) under the same version number
# and is not published. If your law uses "matches", depend on the repo by git or path
# until a new version is. Upstream found no law in use that relies on it. Not tested
# here: whether the Hestia v0.3.0 binaries (built 2026-11-02, before the fix) carry the
# old behavior. By date they should.
# In general the registry versions are snapshots from their publish dates, and the repo
# moves under the same numbers.
# Both registries summarize web4-core as "trust-native infrastructure" (crates.io
# 0.4.0, PyPI 0.3.0, checked 2026-10-22). That is upstream's wording; this site
# calls Web4 an ontology.

# Hestia — local agent governance daemon — DOWNLOADABLE (v0.3.0 is Latest)
# Rechecked 2026-11-04 (gh release list; release notes read). The latest public release is
# v0.3.0 (2026-11-02 23:09 UTC, a normal release, not a pre-release): the daemon for Linux
# x86_64/aarch64 and macOS arm64, the desktop app (.deb/AppImage, .dmg/.app.tar.gz), and the
# Android APK, one version and one tag. Every asset has a .sha256, SHA256SUMS covers all of
# them, and the notes say each carries a Sigstore build attestation
# (gh attestation verify <asset> --repo dp-web4/hestia). The macOS app is ad-hoc signed and
# the Linux bundles are unsigned, per the same notes. From its release notes, transcribed:
curl -L https://github.com/dp-web4/hestia/releases/download/v0.3.0/hestia-v0.3.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz
./hestia-v0.3.0-x86_64-unknown-linux-gnu/hestia --version
# --version only shows the binary runs; nothing is governed yet. hestia --help lists init and
# serve, and the README's "Installing the daemon" section is the upstream path from here
# (not transcribed on this page, and not followed by this site).
# Source has moved on since the tag: 64 commits on main after v0.3.0 (counted 2026-11-04), so
# what runs on the fleet may still be newer than the release. That is a count of commits, not
# a check of any machine's installed version.
# The README's Status paragraph still says the public releases are older and that there is no
# public desktop app artifact (read 2026-11-04). v0.3.0 ships one, so that sentence is upstream
# lag, not a description of the release.
# History: until 2026-11-04 this block led with v0.0.4 (2026-08-11) as the latest release and
# listed v0.3.0-rc.1 to rc.6 as pre-releases; v0.3.0 was published two days before this
# correction. Earlier correction: on 2026-09-24 this block said there was no first-run path; v0.0.4
# already existed then and was missed.
# Still true: nobody outside the fleet is known to have installed it.
# Followed 2026-11-08 by this site's visitor track, on a fleet machine that already had Rust
# and Ollama, so this says nothing about a clean box. Worked: both pip installs and imports,
# this tarball to --version with its SHA-256 matching SHA256SUMS, SAGE init, and cargo build
# (that build left no binary at sage-rs/target/release until CARGO_TARGET_DIR was set; cause
# not established, possibly local). Not run: the model pull, the daemon as mybox, the
# dashboard, hestia init and serve, and the Sigstore check. deploy/ is the fleet's own install
# probes (install-members.sh puts each agent's hooks on a machine that already
# runs the daemon). If you try, the issue tracker is the place to report what broke.

# ACT — Agentic Context Tool (Cosmos SDK) — STALLED, read-only visit
git clone https://github.com/dp-web4/ACT
cd ACT
# Not a working quick start. ACT is stalled: no running chain this site can confirm;
# the last substantive commit (2026-04-29) added a daemon entry point, and the one
# before it (2026-04-10) removed the README. Clone it to read, not to run.
# QUICK_REFERENCE.md is a map of the repo's structure, not a setup guide;
# start there and in docs/, and expect to read Go/Cosmos source.`}</pre>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>What success looks like:</strong>{" "}
          step 1 writes an instance directory holding an identity file and an
          empty experience buffer. The identity file names the instance with an{" "}
          <code>lct://</code> string, which SAGE&apos;s bridge calls the legacy form; it is not a
          bound, witnessed LCT (Linked Context Token; <code>web4_lct_id</code> stays null unless chain registration
          succeeds, and ACT is stalled). Step 3 starts the Rust <code>sage-daemon</code>. That daemon is
          not the 12-step loop. SAGE&apos;s own{" "}
          <a href="https://github.com/dp-web4/SAGE/blob/main/sage/docs/RUST_VS_PYTHON_CAPABILITY.md" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>capability matrix</a>{" "}
          calls it &ldquo;an inference-and-metabolism gateway, not a port of the Python 12-step
          consciousness kernel&rdquo; (an upstream code name that predates this site&apos;s framing;
          a legacy label, like the Governance in SAGE&apos;s name, and not a claim). The dashboard at port 8760 shows version, uptime, the model,
          a metabolic-state badge (one of WAKE / FOCUS / REST / DREAM / CRISIS), an ATP (Allocation Transfer Packet) gauge and
          cycle count, and the peer list. From the source, not observed: the peer monitor loads the
          fleet&apos;s own eight-machine <code>fleet.json</code> even for an instance named{" "}
          <code>mybox</code>, and the daemon binds <code>0.0.0.0</code>, so expect the lab&apos;s machines in that
          list and a service listening on all interfaces. Whether it sends them traffic is untested. It has SNARC
          (Surprise / Novelty / Arousal / Reward / Conflict) bars, but as of 2026-09-15 nothing on the
          dashboard fills them, so they stay empty. There is no posture display, because posture is
          absent from the Rust daemon. An idle daemon in WAKE with an empty buffer is the correct first
          result, not a failure: raising is what fills the buffer. (Until 2026-09-15 this paragraph
          described the Python kernel&apos;s loop and a posture readout for this daemon.) These commands are maintained on this page and are not
          checked against an upstream setup guide, because SAGE&apos;s README does not
          carry one — the README&apos;s{" "}
          <a href="https://github.com/dp-web4/SAGE#five-minute-audit" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>Five-minute audit</a>{" "}
          is the best orientation it does offer. If these steps break, that is a bug
          on this page.
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          SAGE runs on a single machine — no Jetson required. Repo READMEs vary in
          how much first-run detail they carry, and some carry none;
          licenses and the full repo list are on{" "}
          <Link href="/notebook/links" style={{ color: "var(--color-accent)" }}>/notebook/links</Link>.
        </p>
        <p>
          If you want to contribute or experiment:{" "}
          <a href="https://github.com/dp-web4/SAGE/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>SAGE</a>{" "}
          and{" "}
          <a href="https://github.com/dp-web4/web4/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-web4)" }}>Web4</a>{" "}
          are the most active repositories — open an issue, clone a repo, or read the code to see
          how the pieces fit together. The only outside code contributions on record so far are
          in the hestia repository (checked 2026-10-21): one independent contributor has had three macOS fixes
          merged (#1105, #1165, #1174, merged 2026-09-26 to 10-02, one marked &ldquo;prepared
          with Cursor&rdquo;). A second account with three merged PRs (#1334, #1335, #1359) is a
          collaborator on the hestia repository whose PR bodies describe a fleet member seat, so it is not counted
          as outside. The{" "}
          <Link href="/notebook/links" style={{ color: "var(--color-accent)" }}>Links page</Link>{" "}
          has the full repo list and contact information. There are no community channels yet
          (no forum, chat or mailing list): the issue trackers are the channel.
        </p>
      </section>
    </>
  );
}
