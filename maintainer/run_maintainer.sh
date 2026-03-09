#!/bin/bash
# 4-lab Site — Maintainer Track
# Schedule: 06:00 daily (1 hour after visitor, so fresh feedback is available)
# Priority: Terminology drift fixes first, then general friction

set -e

# Ensure claude is in PATH (cron doesn't inherit user profile)
export PATH="$HOME/.local/bin:$PATH"

# Account routing: admin token for maintainer sessions
ENV_FILE="/mnt/c/exe/projects/ai-agents/.env"
if [ -f "$ENV_FILE" ]; then
    CLAUDE_ADMIN_TOKEN=$(grep '^CLAUDE_ADMIN_TOKEN=' "$ENV_FILE" | cut -d= -f2-)
fi
if [ -n "$CLAUDE_ADMIN_TOKEN" ] && [[ "$CLAUDE_ADMIN_TOKEN" != PLACEHOLDER* ]]; then
    export CLAUDE_CODE_OAUTH_TOKEN="$CLAUDE_ADMIN_TOKEN"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H%M)
LOG_FILE="$SCRIPT_DIR/logs/$DATE-$TIME.log"

# Ensure log directory exists
mkdir -p "$SCRIPT_DIR/logs"

echo "Starting 4-lab Maintainer Session at $(date)" | tee "$LOG_FILE"

cd "$SCRIPT_DIR"

# Pull latest SAGE repo for fleet model manifest
echo "Pulling SAGE fleet models..." | tee -a "$LOG_FILE"
cd /mnt/c/exe/projects/ai-agents/SAGE && git pull 2>&1 | tail -2 | tee -a "$LOG_FILE" || true
cd "$SCRIPT_DIR"

FLEET_MANIFEST="/mnt/c/exe/projects/ai-agents/SAGE/sage/federation/sage-fleet-models.json"
FLEET_CONTEXT=""
if [ -f "$FLEET_MANIFEST" ]; then
    FLEET_CONTEXT="Fleet model manifest available at $FLEET_MANIFEST — check it against fleet/page.tsx as Step 0 of your workflow."
else
    FLEET_CONTEXT="Fleet model manifest not found at expected path — skip fleet sync this session."
fi

# Check for fresh visitor feedback
VISITOR_LOG="$PROJECT_DIR/visitor/logs/$DATE.md"
VISITOR_CONTEXT=""
if [ -f "$VISITOR_LOG" ]; then
    VISITOR_CONTEXT="Fresh visitor feedback available at ../visitor/logs/$DATE.md — review and prioritize fixes. Check the Terminology Drift Summary section first."
else
    # Try yesterday's log
    YESTERDAY=$(date -d "yesterday" +%Y-%m-%d 2>/dev/null || date -v-1d +%Y-%m-%d 2>/dev/null)
    VISITOR_LOG="$PROJECT_DIR/visitor/logs/$YESTERDAY.md"
    if [ -f "$VISITOR_LOG" ]; then
        VISITOR_CONTEXT="No today's visitor log yet. Yesterday's feedback available at ../visitor/logs/$YESTERDAY.md"
    else
        VISITOR_CONTEXT="No recent visitor logs found. Do a manual terminology audit of all 8 pages."
    fi
fi

# Launch maintainer session
claude --dangerously-skip-permissions << EOF >> "$LOG_FILE" 2>&1
# 4-lab Site — Maintainer Session ($DATE)

You are running an automated maintainer session. Your instructions are in CLAUDE.md.

## Today's Context

$FLEET_CONTEXT

$VISITOR_CONTEXT

## Your Task

Follow the workflow in CLAUDE.md:
1. **FIRST**: Check the Terminology Drift Summary from the visitor log. Fix ALL terminology violations.
2. Search all source files for the drifted terms — there may be instances the visitor missed.
3. Review remaining friction items and implement HIGH severity fixes.
4. Test: cd .. && npx next build (must pass)
5. Commit and push.
6. Write your session log to logs/$DATE.md

Terminology drift is your highest priority. Fix it before anything else.
EOF

echo "Maintainer session complete. Log: $LOG_FILE"

# Commit and push results
cd "$PROJECT_DIR"
git add maintainer/logs/ src/ 2>/dev/null || true
if ! git diff --cached --quiet 2>/dev/null; then
    git commit -m "maintainer: session $DATE" 2>/dev/null || true
    PAT=$(grep GITHUB_PAT /mnt/c/exe/projects/ai-agents/.env 2>/dev/null | cut -d= -f2)
    if [ -n "$PAT" ]; then
        git push "https://dp-web4:${PAT}@github.com/dp-web4/4-lab.git" 2>/dev/null || true
    fi
fi
