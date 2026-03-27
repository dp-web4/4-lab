**Read `SESSION_PRIMER.md` → then `SESSION_FOCUS.md`** for current priorities, terminology status, and fleet sync state.

# 4-lab — The dp-web4 Research Collective

## What this is

The meta-site for the dp-web4 research collective. Explains the lab: how it's organized, why it works, what the philosophy is. Eight pages covering projects, fleet, autonomy, raising, principles, context, and links.

**Site**: https://4-lab.vercel.app/
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
| T3 | Talent / Training / Temperament | |
| V3 | Valuation / Veracity / Validity | |
| MRH | Markov Relevancy Horizon | |
| ATP | Allocation Transfer Packet | |
| ADP | Allocation Discharge Packet | |
| Web4 | "ontology" | "architecture", "infrastructure" |
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
  page.tsx           # Home
  projects/page.tsx  # Ecosystem + project cards
  fleet/page.tsx     # 6 machines
  autonomy/page.tsx  # Daily cycle timeline
  raising/page.tsx   # BECOMING phases
  principles/page.tsx # 7 principles
  context/page.tsx   # Knowledge flow
  links/page.tsx     # External links + contact
```

## Conventions

- Don't introduce new dependencies (Next.js, React, TypeScript, Tailwind, lucide-react only)
- `npx next build` must pass before pushing
- Preserve honest assessments — never weaken caveats
- Project-specific accent colors: Web4 (#3b82f6), SAGE (#10b981), Synchronism (#8b5cf6), Hardbound (#ef4444)

<!-- gitnexus:start -->
<!-- gitnexus:keep -->
# GitNexus — Code Knowledge Graph

Indexed as **4-lab** (64 nodes, 77 edges). MCP tools available via `mcp__gitnexus__*`.

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
