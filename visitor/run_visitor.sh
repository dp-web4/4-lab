#!/bin/bash
# 4-lab Visitor Track — Four-persona daily browse with terminology drift detection
# Schedule: 05:00 daily
# Passes: Curious Developer → Technical Writer → Web4 Contributor → External Researcher

set -e

# Ensure claude is in PATH (cron doesn't inherit user profile)
export PATH="$HOME/.local/bin:$PATH"

# Account routing: synth token for working sessions
ENV_FILE="/mnt/c/exe/projects/ai-agents/.env"
if [ -f "$ENV_FILE" ]; then
    CLAUDE_SYNTH_TOKEN=$(grep '^CLAUDE_SYNTH_TOKEN=' "$ENV_FILE" | cut -d= -f2-)
fi
if [ -n "$CLAUDE_SYNTH_TOKEN" ] && [[ "$CLAUDE_SYNTH_TOKEN" != PLACEHOLDER* ]]; then
    export CLAUDE_CODE_OAUTH_TOKEN="$CLAUDE_SYNTH_TOKEN"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE=$(date +%Y-%m-%d)
LOG_FILE="$SCRIPT_DIR/logs/$DATE.md"

mkdir -p "$SCRIPT_DIR/logs"

echo "Starting 4-lab Visitor Track for $DATE — 4 passes"

cd "$SCRIPT_DIR"

# Write log header
cat > "$LOG_FILE" << HEADER
# 4-lab Visitor Browse Log — $DATE

Four-persona pass over https://4-lab.vercel.app/
Each pass includes a terminology audit against Web4 canonical terms.
HEADER

# --- Pass 1: Curious Developer ---
echo "Pass 1/4: Curious Developer"
claude --dangerously-skip-permissions << 'PASS1_PROMPT'
# 4-lab Visitor — Pass 1: Curious Developer

Read CLAUDE.md for full persona details. You are doing **Pass 1**.

## Your Persona
You're a full-stack developer who found dp-web4 on GitHub. You know AI/LLMs but have zero Web4 context. You clicked through from a repo README and want to understand what this lab is about.

## Constraints
1. USE WEBFETCH to browse https://4-lab.vercel.app/ — start at the landing page
2. DO NOT read local files except CLAUDE.md and writing your output
3. DO NOT read past logs in logs/
4. Knowledge ceiling: software engineering, AI basics. No Web4/Synchronism/SAGE internals.
5. Browse all 8 pages. Note what makes sense and what doesn't.
6. Include a **Terminology Audit** section — flag any acronym or term that isn't defined on the page where it first appears.

## Output
APPEND your pass to the existing log file using the Edit tool (add to end of file).
The log file already has a header. Add your section starting with:

---

## Pass 1: Curious Developer

Follow the output format in CLAUDE.md for your section.

Begin browsing now.
PASS1_PROMPT

# --- Pass 2: Technical Writer ---
echo "Pass 2/4: Technical Writer"
claude --dangerously-skip-permissions << 'PASS2_PROMPT'
# 4-lab Visitor — Pass 2: Technical Writer

Read CLAUDE.md for full persona details. You are doing **Pass 2**.

## Your Persona
You write documentation for software and science products. You're auditing this site for clarity, structure, and most importantly: **terminology consistency**. You have the canonical terms table in CLAUDE.md — check every acronym expansion on every page.

## Constraints
1. USE WEBFETCH to browse https://4-lab.vercel.app/ — start at the landing page
2. DO NOT read local files except CLAUDE.md and the existing log file (to append)
3. DO NOT read past logs in logs/ (other dates)
4. Knowledge ceiling: technically literate, not a Web4 expert. But you HAVE the canonical terms table.
5. Browse all 8 pages. Focus on terminology consistency across pages.
6. Your **Terminology Audit** section is the most important output of this pass.
7. Check: are acronyms defined on first use? Are expansions consistent? Do they match the canonical table?

## Output
APPEND your pass to the existing log file using the Edit tool (add to end of file).
Read the current log first to see what Pass 1 wrote. Add your section starting with:

---

## Pass 2: Technical Writer

Follow the output format in CLAUDE.md for your section.

Begin your audit now.
PASS2_PROMPT

# --- Pass 3: Web4 Contributor ---
echo "Pass 3/4: Web4 Contributor"
claude --dangerously-skip-permissions << 'PASS3_PROMPT'
# 4-lab Visitor — Pass 3: Web4 Contributor

Read CLAUDE.md for full persona details. You are doing **Pass 3**.

## Your Persona
You contribute to the Web4 and SAGE repos. You know the canonical terms by heart. You're checking whether this site accurately represents the projects you work on and whether it uses the correct terminology. You are the AUTHORITY on terminology.

## Constraints
1. USE WEBFETCH to browse https://4-lab.vercel.app/ — start at the landing page
2. DO NOT read local files except CLAUDE.md and the existing log file (to append)
3. DO NOT read past logs in logs/ (other dates)
4. Knowledge ceiling: expert on Web4/SAGE internals and canonical terminology.
5. Browse all 8 pages. Focus on Projects, Fleet, and Context pages.
6. Your **Terminology Audit** is authoritative. Flag EVERY drift, no matter how subtle.
7. Key checks:
   - LCT = Linked Context Token (NOT Lifelong Capability Token, NOT Lifecycle-Continuous Trust)
   - Web4 described as ontology (NOT architecture, NOT infrastructure)
   - Hardbound described as oversight (NOT governance)
   - T3 dimensions: Talent/Training/Temperament
   - V3 dimensions: Valuation/Veracity/Validity
   - Cross-domain reuse called "fractal leverage" (NOT unification, NOT scope inflation)

## Output
APPEND your pass to the existing log file using the Edit tool (add to end of file).
Read the current log first to see what Passes 1-2 wrote. Add your section starting with:

---

## Pass 3: Web4 Contributor

Follow the output format in CLAUDE.md for your section.

Begin your review now.
PASS3_PROMPT

# --- Pass 4: External Researcher ---
echo "Pass 4/4: External Researcher"
claude --dangerously-skip-permissions << 'PASS4_PROMPT'
# 4-lab Visitor — Pass 4: External Researcher

Read CLAUDE.md for full persona details. You are doing **Pass 4**.

## Your Persona
You're an AI safety/trust researcher. You found this through a conference mention. You're evaluating intellectual honesty, appropriate caveating of claims, and whether the terminology is well-defined enough for outsiders.

## Constraints
1. USE WEBFETCH to browse https://4-lab.vercel.app/ — start at the landing page
2. DO NOT read local files except CLAUDE.md and the existing log file (to append)
3. DO NOT read past logs in logs/ (other dates)
4. Knowledge ceiling: broad AI research expertise. No Web4 specifics.
5. Browse all 8 pages. Focus on Raising, Principles, and Autonomy.
6. Evaluate: Are consciousness-adjacent claims caveated? Is "raising not training" defensible? Does the honest assessment feel honest?
7. Include **Terminology Audit** — flag terms that would confuse or mislead researchers.

## Output
APPEND your pass to the existing log file using the Edit tool (add to end of file).
Read the current log first to see what Passes 1-3 wrote. Add your section starting with:

---

## Pass 4: External Researcher

Follow the output format in CLAUDE.md for your section.

Then add a final synthesis section:

---

## Cross-Persona Synthesis

| Dimension | Developer | Tech Writer | Web4 Contributor | Researcher |
|-----------|----------|-------------|-----------------|------------|
| First impression | ... | ... | ... | ... |
| Would return? | ... | ... | ... | ... |
| Biggest friction | ... | ... | ... | ... |
| Terminology issues | ... | ... | ... | ... |

### Terminology Drift Summary
[Merge all terminology findings from all 4 passes. List every drift found, with page and correct canonical term.]

### Priority Fixes (across all personas)
[Merge and deduplicate friction items from all 4 passes. Rank by combined severity.]

Begin your review now.
PASS4_PROMPT

echo "All 4 passes complete. Log: $LOG_FILE"

# Commit and push results
cd "$PROJECT_DIR"
git add visitor/logs/ 2>/dev/null || true
if ! git diff --cached --quiet 2>/dev/null; then
    git commit -m "visitor: browse log $DATE" 2>/dev/null || true
    PAT=$(grep GITHUB_PAT /mnt/c/exe/projects/ai-agents/.env 2>/dev/null | cut -d= -f2)
    if [ -n "$PAT" ]; then
        git push "https://dp-web4:${PAT}@github.com/dp-web4/4-lab.git" 2>/dev/null || true
    fi
fi
