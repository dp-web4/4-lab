import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects — The Ecosystem" };

export default function Projects() {
  return (
    <>
      <Breadcrumbs currentPath="/projects" />
      <section className="section">
        <h1>The Ecosystem</h1>
        <p>
          Each project serves a distinct role, but they share common ground:
          the Web4 equation, RDF-backed identity, and{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)" }}>recursive learning through
          both success and failure</Link>. Synchronism provides the equations. Web4
          provides the ontology. Hestia governs the machine. Hub is the society that
          checks the record Hestia makes. SAGE provides the cognition. Hardbound
          provides the oversight.
        </p>

        <div className="equation">
          Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "-0.5rem" }}>
          <code>/</code> = &ldquo;verified by&rdquo; on both sides of the equation (T3 by V3; ATP by its ADP discharge record) &nbsp; <code>*</code> = &ldquo;contextualized by&rdquo; &nbsp; <code>+</code> = &ldquo;augmented with&rdquo;
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center", marginTop: "0.25rem" }}>
          This legend is the site&apos;s own gloss, not canon&apos;s — the equation is not in
          CANONICAL_TERMS_v1 and the upstream Web4 README no longer defines the glyphs.{" "}
          <Link href="/context#equation" style={{ color: "var(--color-accent)" }}>/context carries the maintained copy</Link>{" "}
          with the full provenance note; this one follows it.
        </p>

        <h2 style={{ marginTop: "2rem" }}>Projects</h2>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Developmental and lifecycle terms below — &ldquo;raising&rdquo;, &ldquo;identity&rdquo;, &ldquo;die and rebirth&rdquo;, &ldquo;world-shaper&rdquo; — are functional descriptions of system behavior, not phenomenal claims. See the <Link href="/raising" style={{ color: "var(--color-accent)" }}>Raising</Link> page for the full framing and consciousness caveats.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Status labels: <strong style={{ color: "var(--color-text-primary)" }}>runnable</strong> = clone it and it executes end to end today (a demo, a script, a server) — not a claim about polish or completeness. <strong style={{ color: "var(--color-text-primary)" }}>research-stage</strong> = design docs, specs, and experiments; may not run end to end without additional setup or missing pieces. These describe maturity. The separate <strong style={{ color: "var(--color-text-primary)" }}>public</strong> / <strong style={{ color: "var(--color-text-primary)" }}>private</strong> badge is a different axis — repository visibility, not maturity: <strong style={{ color: "var(--color-text-primary)" }}>private</strong> = the source is not published, so nothing on that card is externally checkable and it is described here at the purpose level only. A project can be runnable and private, or public and research-stage; the two labels do not imply each other.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          This is the most acronym-dense page on the site. Every Web4 term the
          cards use (LCT, T3/V3, MRH, ATP/ADP, R6/R7, MCP, RDF, SNARC) is defined
          in the{" "}
          <Link href="/context#glossary" style={{ color: "var(--color-accent)" }}>/context glossary</Link>
          {" "}— the cards expand each on first use, but the glossary is the
          one-stop reference.
        </p>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
          Want to run something rather than read? Start with{" "}
          <strong style={{ color: "var(--color-text-primary)" }}>SAGE</strong> —
          it runs on a single machine, no Jetson required. Want the protocol
          instead? Web4&apos;s core packages install directly. Commands for Web4
          and SAGE are in the{" "}
          <a href="#quick-start" style={{ color: "var(--color-accent)" }}>Quick start</a>{" "}
          at the bottom of this page — the only copy on the site, so there is one
          place to fix when a step breaks. This page is the map; that is the first
          install.
        </p>
        <div className="grid-2">
          <ProjectCard
            name="Web4"
            description="Trust-native ontology. T3 (Trust Tensor — Talent / Training / Temperament) verified by V3 (Value Tensor — Valuation / Veracity / Validity) — the slash reads the same way on both sides of the equation, T3 by V3 and ATP by its ADP discharge record; it is not a claim that T3 and V3 verify each other — contextualized by Markov Relevancy Horizon (MRH), anchored to Linked Context Token (LCT) — a verifiable presence that accumulates witnessed history, which is what makes the record evidence rather than self-assertion — with resources cycled through Allocation Transfer Packet (ATP) and Allocation Discharge Packet (ADP) — charged, spent, and recharged when the society validates a proof of the value the spend created (the recharge then updates the producer's T3/V3: V3 records the outcome, it does not gate it), not a one-way log — augmented with MCP (Model Context Protocol) transport and RDF (Resource Description Framework) representation. (The equation joins these with + — canonically &ldquo;augmented with&rdquo;; the prose here is more precise than the equation about LCT anchoring the trust tensor rather than sitting beside it.) The shared language everything else speaks. Research-stage, but no longer only a specification — the repo's own status line: core packages are published (web4-core 0.3.0 on crates.io and PyPI, checked against both registries 2026-09-11; plus web4-trust-core on crates.io and web4-trust on PyPI), and the Hub reference daemon lives in the repo, with the Hub card below linking its standalone mirror. Install lines are in the Quick start. The registry descriptions call it 'infrastructure'; that is upstream package metadata, not a second meaning — on this site Web4 is an ontology."
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
            description="Situation-Aware Governance Engine — an on-device cognition kernel. 12-step cognition loop, 6 brain-analog components (working memory, thalamic router, cerebellum, episodic memory, reward prediction, metacognition — role mnemonics the lab assigned, not measured functional homologies; 'cognition' is likewise a role label, not a capability claim, see /fleet) built by the fleet in parallel. 2,442 session records across the 6 cognition machines (internally logged; per-machine counts and the noun's definition on /fleet; 2,563 including HUB, which also raises a SAGE instance but is counted as a society-host by primary role; corrected 2026-07-27 from an earlier '900+', and again 2026-09-12 from 1,991). The mixed-basis caveat this figure used to carry — three addends whole-machine totals, three current-model-line counts — is retired rather than dropped: the 2026-09-12 recount derives all six addends the same way, by listing one instance line's session files in git, so the sum is now single-basis and re-runnable by a reader. The context window is the model's entire world; SAGE's job is to curate it."
            accentColor="var(--color-sage)"
            isPublic={true}
            maturity="runnable"
            url="https://sage-site-murex.vercel.app"
            repoUrl="https://github.com/dp-web4/SAGE"
            footnote="'Governance' in SAGE's name predates the lab's governance→oversight terminology correction; the name is retained upstream across code, papers, and the ARC Prize benchmark — the same reason the web4-governance repo slugs are retained."
          />
          <ProjectCard
            name="Hestia"
            description="Open local-first governance daemon ('governance' is deliberate and correct here — Hestia adjudicates at the moment of the act; the lab's governance→oversight rule binds Hardbound, which gates and reverts against a hardware root): AI agents from different vendors (Claude Code, Codex, Kimi, Gemini, Cursor) share one machine under one signed law, with a hash-chained record of what each did, human escalation when an agent reaches for something it should not have, and a T3/V3 posture derived from that record rather than asserted. No cloud required. That record is also what makes an agent admissible to a Web4 hub — a hub cannot verify an agent it has no history of. Assurance ceiling, stated by the repo itself: profile A1 on its own published A0–A4 ladder (A0 observed → A4 hardware-attested) — a cooperative in-process gate that reliably stops accidents and produces an accountability record, but does not stop a sophisticated agent from routing around it; two environment variables suffice today, and a third-party reputation-poisoning class has been demonstrated. A2 (external enforcement by the relying service) is the next target and is not shipped. The human-presence half of the roadmap is plumbed but thinly exercised; federation is not started."
            accentColor="#f59e0b"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/hestia"
          />
          <ProjectCard
            name="Hub"
            description="Rust society runtime — a single ~6 MB binary that turns a community or organization into a sovereign Web4 society: member identity, seven base roles, a signed founding charter, an append-only hash-chained witnessed ledger, an MCP (Model Context Protocol) HTTP server and an admin CLI. Where Hestia governs one machine, Hub is the society the governed members join; Hestia makes the record, Hub is what checks it. MVP complete through sprint 6 and buildable, but pilot-stage rather than deployed: the Docker package is untested outside the development machine and no chapter has run it in production use. The fleet runs on the same society runtime it is developing — the eight machines are members of a society with a chapter ledger, which is why /fleet can say the society-hosts are members of what they host."
            accentColor="#14b8a6"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/4-hub"
          />
          <ProjectCard
            name="Synchronism"
            description="Theoretical foundation. Research conjecture: proposes that one saturating coherence dynamics recurs from quantum to cosmic scales. WHICH object recurs is unsettled — the Navier-Stokes identification earlier framings used was refuted by Synchronism's own audits (the transfer rule is 1-DOF scalar diffusion: irrotational, dissipative) and is tagged superseded upstream; the replacement substrate rule is a different equation joined to the old one by narrative, not derivation. Experimental validation covers only a narrow subset of scales and several predictions have been refuted by existing bounds; the substrate-physics arc has been at rest since 2026-06-24 with zero confirmed novel predictions across ~3,360 sessions (~678 core + ~2,671 chemistry), and its own capstone verdict calls the framework a productive-metaphor generator — generative and pedagogical, not predictive or foundational. (This card previously said the equation 'spans 80 orders of magnitude'. Corrected 2026-07-26: ~80 decades is the spread of critical-density values across physical systems, not the range of any single coherence curve — one curve saturates within roughly one to two decades. Synchronism's own archive flags the conflation.) Coupling-coherence experiments — whose 1% coupling → 35% coherence gain result is the single-trial, not-independently-replicated claim; the caveat scopes to that result, not to the whole framework — plus Hill function kinetics and Fokker-Planck validation."
            accentColor="var(--color-synchronism)"
            isPublic={true}
            maturity="research-stage"
            url="https://synchronism-site.vercel.app"
            repoUrl="https://github.com/dp-web4/Synchronism"
          />
          <ProjectCard
            name="Hardbound"
            description="Hardware-bound oversight suite (&ldquo;oversight&rdquo; = machine-enforced policy gating here, not human supervision — see /context). Design target: bind fleet identity and policy decisions to standard hardware roots of trust — Trusted Platform Module (TPM) 2.0, FIDO2 (Fast Identity Online 2), Secure Enclave — and run a small local policy model for heterogeneous review, bound to a Linked Context Token (LCT). Maturity, stated plainly: hardware-anchored enforcement is what this research is building toward, not the current mechanism. Enforcement on the fleet today is at the process level — scoped credentials, the track registry, and dated audit logs reviewed after the fact (see /autonomy). Read 'software fallback' as 'the present state', not as the exception. Private as the fleet's oversight/security component; described here at the purpose level by policy, not accident."
            accentColor="var(--color-hardbound)"
            isPublic={false}
          />
          <ProjectCard
            name="ACT"
            description="Agentic Context Tool — the human interface to Web4. Built on Cosmos SDK; implements the Agentic Context Protocol (ACP), enabling humans to interact with MCP (Model Context Protocol) servers through their Linked Context Tokens. ACP binds Web4 trust primitives — LCT binding and attestation — to MCP tool calls; the two are complementary, not alternatives, and MCP is a term in the Web4 equation, not a layer beneath it. On &lsquo;not a blockchain&rsquo; (see the Ontology entry in the /context glossary): Web4 is the ontology and requires no chain; ACT is one implementation of it that happens to use Cosmos SDK's ledger machinery as its witnessing substrate. Status, plainly: stalled, and reserved rather than superseded. The chain last built in September 2025 and is blocked mid-rename; the last substantive commit was 2026-04-10, which removed the repo's README; there is no running chain and no first-run steps published. Reviving it is a real intent with no date on it, not work in progress — and the repo's own metadata still claims active development, which is wrong. Nothing here should be read as a live chain or live anchoring."
            accentColor="var(--color-act)"
            isPublic={true}
            maturity="research-stage"
            repoUrl="https://github.com/dp-web4/ACT"
          />
          <ProjectCard
            name="Oversight Plugins"
            description="Web4 oversight model (audit trails, policy gating, trust tracking) implemented as plugins for three agent platforms: OpenClaw/MoltBot (TypeScript extension), Claude Flow (WASM/WebAssembly plugin), and Claude Code (Python hooks). Same principles, different substrates."
            accentColor="var(--color-plugins)"
            isPublic={true}
            maturity="research-stage"
            links={[
              { label: "OpenClaw", url: "https://github.com/dp-web4/moltbot/tree/web4-governance-complete/extensions/web4-governance" },
              { label: "Claude Flow", url: "https://github.com/dp-web4/claude-flow/tree/main/v3/plugins/web4-governance" },
              { label: "Claude Code", url: "https://github.com/dp-web4/claude-code/tree/add-web4-governance-plugin/plugins/web4-governance" },
            ]}
            footnote="Linked repo paths carry web4-governance slugs — these names predate the terminology correction to 'oversight' and are load-bearing for existing forks."
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
            description="Research prototype exploring trust-native societies for humans and AI — that is the repo's own description. The live site titles itself 'The Web4 Onramp' and opens as an educational explainer, so expect an introduction to Web4 first and the simulation behind it. 4-Life is a simulation framework — the lifecycle vocabulary (spend ATP, earn recharge against validated value, build trust, die, be reborn with T3/V3 carried forward) describes simulated agent state, not claims about agent moral patienthood or value persistence. A Web4 society in miniature."
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
            description="Brain cartridge server for AI agents — a cartridge is a swappable, mountable memory store for one knowledge domain. Embedding-based semantic memory — 768-dim Nomic embeddings + binary Hamming codes (compact binary fingerprints matched by bit-distance for fast candidate search) + keyword reranking. Currently integrated with SNARC in a dual-write experiment testing whether embeddings find connections keywords miss. Early result on a 7-query probe set: embedding search returned a relevant hit on 7 of 7 queries ('semantic reach'), and about 30% of its hits were ones the keyword search did not return at all ('divergent tail') — a small internal probe, not a benchmark."
            accentColor="#f97316"
            isPublic={true}
            maturity="runnable"
            repoUrl="https://github.com/dp-web4/membot"
          />
          <ProjectCard
            name="ARC-AGI-3"
            description="Claude Opus 4.6 inside the SAGE harness scored 94.85% on the official ARC Prize ARC-AGI-3 (Abstraction and Reasoning Corpus for Artificial General Intelligence, third generation — an interactive benchmark) action score — efficiency-weighted; public set, network-enabled; 23 of 25 environments completed (92.0%), 175 of 183 levels — for ~$250 in API cost. Two caveats travel with this number and neither is optional. (a) AFFORDANCES — the harness analyzed the games&apos; public engine source and built per-game world-model / solver cartridges. That is outside strict from-observation competition play, so the result shows what model+harness could do with engine-level context and tooling, not blind generalization. (b) ATTRIBUTION — the harness-vs-model ablation has not been run, so how much of the score is the harness is an open question. Published 2026-04-17; this is a historical research record, not current competition positioning — current competition-legal local-model work is well behind the leaders. The 25 unknown interactive games serve as an external benchmark for the cognition kernel — world-model building, action planning, verification, and learning from failure. Phase 2, separate from the scored run and not scored by ARC Prize: the six local models, 0.8B (Sprout) to 27B (Thor) at benchmark time, work the same games through world models, membot cartridges, and R6 (Six-Element Action Framework: Rules / Role / Request / Reference / Resource → Result) audit trails. The games are the test; the capability is the product."
            accentColor="#a855f7"
            isPublic={true}
            maturity="research-stage"
            url="/arc-agi-3"
            links={[
              { label: "Scorecard", url: "https://arcprize.org/scorecards/c7dfb4f1-8642-4c9e-ab4d-152f5f8e33b4" },
              { label: "Paper (MIT-0 — MIT No Attribution)", url: "https://github.com/dp-web4/ARC-SAGE" },
            ]}
          />
          <div className="card" style={{ borderLeftWidth: "3px", borderLeftColor: "#a855f7", background: "rgba(168, 85, 247, 0.04)" }}>
            <h4 style={{ margin: "0 0 0.5rem", color: "#a855f7", fontSize: "0.875rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>ARC-AGI-3 Current Status</h4>
            <table style={{ width: "100%", fontSize: "0.8125rem", borderCollapse: "collapse" }}>
              <tbody>
                <tr><td style={{ padding: "0.25rem 0", color: "var(--color-text-muted)" }}>Public set</td><td style={{ padding: "0.25rem 0" }}>23 of 25 environments completed (92.0%); 175 of 183 levels; 94.85% official ARC Prize action score (efficiency-weighted — not a solve rate; no published baseline). Claude Opus 4.6, 2026-04-17.</td></tr>
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
          Synchronism discovers the equations. Web4 encodes them as ontology.
          Hestia adjudicates them on one machine; Hub witnesses them across a
          society. SAGE runs them as cognition. Hardbound enforces them as oversight.
          This isn&apos;t unification — it&apos;s{" "}
          <Link href="/principles" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
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
        <pre style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "0.75rem 1rem", fontSize: "0.8125rem", overflowX: "auto", marginBottom: "0.5rem" }}>{`# SAGE — on-device cognition kernel (recommended first clone)
# Needs: Rust (stable), Ollama, Python 3.10+
git clone https://github.com/dp-web4/SAGE
cd SAGE

# 0. Dependencies (Rust toolchain, Ollama, Python 3.10+), then pull the
#    model that step 1 names. The SAGE README has no setup section — these
#    steps are maintained here, not transcribed from it.
ollama pull gemma3:4b

# 1. Create an instance — this mints the machine's identity
python3 -m sage.instances.init --machine mybox --model gemma3:4b --operator-name you

# 2. Build the daemon
cd sage-rs && cargo build --release && cd ..

# 3. Run the loop
SAGE_MACHINE=mybox SAGE_MODEL=gemma3:4b ./sage-rs/target/release/sage-daemon

# Dashboard: http://localhost:8760/

# Web4 — published core packages (no clone needed)
# Unlike the SAGE steps above, these lines ARE transcribed: from the web4
# README's "Published core" section, which is authoritative for them.
pip install web4-core
# Rust: add  web4-core = "0.3"  under [dependencies] in Cargo.toml

# ACT — Agentic Context Tool (Cosmos SDK) — STALLED, read-only visit
git clone https://github.com/dp-web4/ACT
cd ACT
# Not a working quick start. ACT is stalled: no running chain, and the last
# substantive commit (2026-04-10) removed the README. Clone it to read, not to run.
# QUICK_REFERENCE.md is a map of the repo's structure, not a setup guide;
# start there and in docs/, and expect to read Go/Cosmos source.`}</pre>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>What success looks like:</strong>{" "}
          step 1 writes an instance directory holding the machine&apos;s LCT and an
          empty experience buffer; step 3 starts the 12-step sense-to-act loop and
          the dashboard shows it cycling — a metabolic state (tired / energized /
          resting), the current posture, and SNARC scores on whatever it just took
          in. An idle machine with nothing to attend to is the correct first
          result, not a failure: the loop runs, the buffer is empty, and raising is
          what fills it. These commands are maintained on this page and are not
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
          <Link href="/links" style={{ color: "var(--color-accent)" }}>/links</Link>.
        </p>
        <p>
          If you want to contribute or experiment:{" "}
          <a href="https://github.com/dp-web4/SAGE/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-sage)" }}>SAGE</a>{" "}
          and{" "}
          <a href="https://github.com/dp-web4/web4/issues" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-web4)" }}>Web4</a>{" "}
          are the most active entry points — open an issue, clone a repo, or read the code to see
          how the pieces fit together. The{" "}
          <Link href="/links" style={{ color: "var(--color-accent)" }}>Links page</Link>{" "}
          has the full repo list, contact information, and community channels.
        </p>
      </section>
    </>
  );
}
