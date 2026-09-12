#!/usr/bin/env bash
# Protected-assertion check for 4-lab.io.
#
# WHY THIS EXISTS: on 2026-09-08 a single 437-line hand rewrite of the home page
# removed roughly eight caveats at once. Four consecutive maintainer sessions
# ran afterwards and none of them named the loss; it was found four days later
# by another machine reading the diff. A hedge going missing should be a failing
# check, not an archaeological discovery.
#
# Usage:  maintainer/check-caveats.sh          # from the repo root
# Exit 0 = every present-status caveat still matches. Exit 1 = one vanished.
# Outstanding debt (status=absent) is reported but does not fail the build, so
# this is adoptable today and ratchets rather than blocks.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 2
MANIFEST=maintainer/caveats.json
[ -r "$MANIFEST" ] || { echo "check-caveats: no $MANIFEST" >&2; exit 2; }

fail=0; ok=0; debt=0; retired=0; stale=0
while IFS=$'\t' read -r id page status pattern why; do
  [ -n "$id" ] || continue
  if [ ! -r "$page" ]; then
    printf 'GONE     %-34s page missing: %s\n' "$id" "$page"; fail=1; continue
  fi
  if grep -qE "$pattern" "$page"; then hit=yes; else hit=no; fi
  case "$status:$hit" in
    present:yes) ok=$((ok+1)) ;;
    present:no)  printf 'MISSING  %-34s %s\n         %s\n' "$id" "$page" "$why"; fail=1 ;;
    absent:no)   printf 'DEBT     %-34s %s\n' "$id" "$page"; debt=$((debt+1)) ;;
    absent:yes)  printf 'RESTORED %-34s %s  -> flip status to "present" in %s\n' "$id" "$page" "$MANIFEST"; stale=$((stale+1)) ;;
    retired:no)  retired=$((retired+1)) ;;
    retired:yes) printf 'REVIVED  %-34s %s  -> claim is back? re-check status\n' "$id" "$page"; stale=$((stale+1)) ;;
  esac
done < <(python3 -c '
import json,sys
d=json.load(open("maintainer/caveats.json"))
for c in d["caveats"]:
    print("\t".join([c["id"],c["page"],c["status"],c["pattern"],c.get("why","")]))
')

printf '\n%d protected assertions hold, %d outstanding debt, %d retired' "$ok" "$debt" "$retired"
[ "$stale" -gt 0 ] && printf ', %d manifest entries stale' "$stale"
echo
[ "$fail" -eq 0 ] || echo $'\nA caveat this site committed to is gone. Restore it, or remove the manifest entry\nWITH a forum post — 4-lab/CLAUDE.md: "preserve honest assessments, never weaken caveats".'
exit $fail
