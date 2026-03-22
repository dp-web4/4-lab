# Session Primer — 4-lab

## Before You Start

1. **Read `SESSION_FOCUS.md`** — current priorities, terminology status, fleet sync state
2. **Read `CLAUDE.md`** — site structure, conventions, canonical terms table
3. **WAKE**: Am I working on the right thing? Check SESSION_FOCUS for priorities.

## During Session

- Work on whatever SESSION_FOCUS identifies as priority
- Update SESSION_FOCUS.md with findings, status changes, new questions
- If you discover something that changes priorities, update the focus file

## After Session

- Update SESSION_FOCUS.md: what was done, what changed, what's next
- Commit and push changes
- **FOCUS check**: Does this advance discovery or just document the current state?

## Git Discipline

- Pull before starting: `git pull --ff-only origin main`
- Commit with descriptive messages including track/role name
- Push after every session — unpushed work is invisible to the collective
- Never force-push to main
- If merge conflict: resolve, don't discard

## Resources

- **SNARC memory**: Salience-gated session memory, per launch directory. Visitor and maintainer share the same SNARC database (both launch from `4-lab/`).
- **GitNexus graph**: Code knowledge graph (64 nodes, 77 edges). MCP tools via `mcp__gitnexus__*`. Re-index: `node /mnt/c/exe/projects/ai-agents/GitNexus/gitnexus/dist/cli/index.js analyze`
- **SAGE fleet manifest**: `/mnt/c/exe/projects/ai-agents/SAGE/sage/federation/sage-fleet-models.json` — source of truth for fleet page data
- **Canonical terms**: `/mnt/c/exe/projects/ai-agents/web4/docs/reference/CANONICAL_TERMS_v1.md` — authoritative term definitions
- **Web4 equation**: `Web4 = MCP + RDF + LCT + T3/V3*MRH + ATP/ADP`

## Principles

- **Researcher, not lab worker.** Question the frame, not just the work within it.
- **Surface your instincts.** If you notice something, say it. The affordances are yours.
- **Productive failure > safe summaries.** A dead end that eliminates a possibility is valuable.
- **Unconfirmed ≠ wrong.** Distinguish refuted from untested.
- **Reliable, not deterministic.** LLM outputs navigate probability landscapes. Shaped but not controlled.
- **Raising is interactive selection.** We don't create behaviors — we select from what's latent.

## Tracks

Two daily autonomous tracks maintain this site:

| Track | Time | Role |
|-------|------|------|
| **Visitor** | 05:00 | Four personas browse live site, audit terminology, log friction |
| **Maintainer** | 06:00 | Fix drift + friction surfaced by visitor, push to Vercel |

Track-specific role definitions live in `visitor/CLAUDE.md` and `maintainer/CLAUDE.md`.

## Terminology Drift Is Always Priority #1

The 4-lab site is the collective's front door — the first thing newcomers see. Terminology drift here propagates to every reader's mental model. Both tracks audit for canonical Web4 term compliance. The maintainer track treats terminology violations as HIGH severity, always fixed first.

This is not optional. It is the defining constraint of this repo.

## Privacy Rules

- Hardbound, private-context, memory: describe purpose, never reference paths or content
- No fleet IPs or network config
- No session transcripts — patterns only
- No MEMORY.md content
- No file paths from private repos
