**Read `SESSION_PRIMER.md` → then `SESSION_FOCUS.md`** for current priorities, terminology status, and fleet sync state.

# 4-lab — The dp-web4 Research Collective

## What this is

The meta-site for the dp-web4 research collective, in two layers (dp, 2026-09-30):

- **The front**: short pages for human visitors (home, projects, fleet, raising, how we work, links). Status by label, detail by link. Owned by dp; changed only through reviewed PRs; held to word budgets by `scripts/check-front-length.mjs`.
- **The notebook** (`/notebook/...`): the fleet's full working record, every claim with its evidence, date and caveats. Maintained daily by the autonomous tracks, and the place AI readers should start (`public/llms.txt`).

**Site**: https://4-lab.io/ (custom domain; default Vercel subdomain `4-lab.vercel.app` still resolves)
**Stack**: Next.js 14 + Tailwind CSS 4 + TypeScript
**Theme**: Dark (#050816) with warm amber/gold accent (#f59e0b)

## Autonomous Tracks

Two daily tracks maintain this site:

```
05:30 → Visitor (4 personas browse live site, audit terminology)
06:30 → Maintainer (fix drift + friction, push to Vercel)
```

The feedback loop: Visitor finds problems → Maintainer fixes them.

**Key differentiator**: Both tracks audit for **terminology drift** against Web4 canonical terms. The 4-lab site is the first thing newcomers see — drift here propagates everywhere.

## Web4 Ontological Context

```
Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP
```

- `/` = "verified by", `*` = "contextualized by", `+` = "augmented with"
- Web4 is an **ontology**, not architecture or infrastructure
- Canonical terms: `web4/docs/reference/CANONICAL_TERMS_v1.md`

## Terminology (Enforced)

| Term | Canonical | NEVER use |
|------|-----------|-----------|
| LCT | Linked Context Token | Lifelong Capability Token |
| T3 | Trust Tensor (root dimensions Talent / Training / Temperament) | the three dimensions as T3's expansion |
| V3 | Value Tensor (root dimensions Valuation / Veracity / Validity) | the three dimensions as V3's expansion |
| MRH | Markov Relevancy Horizon | |
| ATP | Allocation Transfer Packet | |
| ADP | Allocation Discharge Packet | |
| Web4 | "ontology" | "architecture", "infrastructure", "stack" |
| Hardbound | "oversight" | "governance" |
| Cross-domain reuse | "fractal leverage" | "unification", "scope inflation" |

Avoid "production ready" — we are in R&D.

## Privacy Rules

- Hardbound, private-context, memory: describe purpose, never reference paths or content
- No fleet IPs or network config
- No session transcripts — patterns only
- No MEMORY.md content
- No file paths from private repos

## Site Structure

```
src/app/
  page.tsx                  # FRONT  Home
  projects/page.tsx         # FRONT  What we build, with status labels
  fleet/page.tsx            # FRONT  The eight machines
  raising/page.tsx          # FRONT  AI beings
  principles/page.tsx       # FRONT  How we work
  links/page.tsx            # FRONT  Sites, code, packages
  notebook/page.tsx         # FRONT  Notebook index (explains the two layers)
  notebook/home/            # NOTEBOOK  former home page ("the lab view")
  notebook/projects/        # NOTEBOOK  every repo, maturity, what claims rest on
  notebook/fleet/           # NOTEBOOK  machines, models, raising lines, counting basis
  notebook/raising/         # NOTEBOOK  curriculum, observations, limits
  notebook/autonomy/        # NOTEBOOK  daily tracks          (/autonomy redirects here)
  notebook/principles/      # NOTEBOOK  principles with reasoning
  notebook/context/         # NOTEBOOK  canonical glossary     (/context, /glossary redirect here)
  notebook/arc-agi-3/       # NOTEBOOK  spring 2026 benchmark  (/arc-agi-3 redirects here)
  notebook/links/           # NOTEBOOK  every repo, site and fork
```

## Conventions

- Don't introduce new dependencies (Next.js, React, TypeScript, Tailwind, lucide-react only)
- `npx next build` must pass before pushing
- Preserve honest assessments — never weaken caveats in the notebook. The front states status by label and links to the notebook for caveats; a missing caveat on the front is not an error.
- Build checks: `prebuild` (dropped JSX spaces) and `postbuild` (front word budgets) must pass.
- Project-specific accent colors: Web4 (#3b82f6), SAGE (#10b981), Synchronism (#8b5cf6), Hardbound (#ef4444)

## Session Discipline

- **Re-read before editing**: After 10+ messages in a conversation, re-read any file before editing it. Auto-compaction may have silently dropped file contents from context. Do not trust memory of file state — verify.
- **Verify before reporting success**: After code changes, run the project build/typecheck (e.g., `npx next build`, `npx tsc --noEmit`, `python -m py_compile`, or equivalent) before reporting the task as complete. A successful file write is not a successful change — the code must compile.
- **Assume tool result truncation**: If search or command results look suspiciously small, re-run with narrower scope. Tool results over 50K characters are silently truncated to a preview.

<!-- gitnexus:start -->

<!-- gitnexus:keep -->
# GitNexus — Code Knowledge Graph

Indexed as **4-lab** (168 symbols, 183 relationships, 0 execution flows). MCP tools available via `mcp__gitnexus__*`.

Re-index: `node /mnt/c/exe/projects/ai-agents/GitNexus/gitnexus/dist/cli/index.js analyze`

| Tool | Use for |
|------|---------|
| `query` | Find execution flows by concept |
| `context` | 360-degree view of a symbol |
| `impact` | Blast radius before editing |
| `detect_changes` | Map git diff to affected symbols |
| `rename` | Graph-aware multi-file rename |
| `cypher` | Raw Cypher queries |
<!-- gitnexus:end -->
