#!/usr/bin/env python3
"""Withdrawn-readings check for 4-lab.io — the inverse of check-caveats.sh.

WHY THIS EXISTS: on 2026-09-11 the site withdrew "V3 gates the ADP->ATP recharge"
in its /context glossary, with a note saying "the note stays so the reading is not
reintroduced". The 2026-09-14 visitor pass found the same reading alive in four
more places: /autonomy, twice more on /context itself, and /fleet. Rigor was local
to the page that stated it. A withdrawal should be a test that runs on all pages.

It checks RENDERED text, not source. The /autonomy instance was split across a
JSX <Link> ("against{" "}<Link>V3</Link> ...-validated"), so a source grep could
not see it. Run `npx next build` first.

Each entry in caveats.json "withdrawn": a case-insensitive regex that must match
NO page, except inside a window whose text matches "unless" (the withdrawal notes
themselves quote the dead reading, and negations like "V3 is NOT the gate").

Pass --show-exempt to list excused hits; review them when adding an "unless".

Exit 0 = no withdrawn reading is live. Exit 1 = one came back. Exit 2 = no build.
"""
import html, json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILT = ROOT / ".next" / "server" / "app"
SHOW = "--show-exempt" in sys.argv  # print hits the "unless" context excused, to audit the exemptions
WINDOW = 220  # chars either side of a hit searched for the "unless" context

def rendered_text(p):
    s = p.read_text(errors="replace")
    s = re.sub(r"<script\b.*?</script>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<style\b.*?</style>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<[^>]+>", "", s)  # drop tags without inserting spaces: "against V3" stays contiguous
    return re.sub(r"\s+", " ", html.unescape(s))

pages = sorted(BUILT.glob("**/*.html")) if BUILT.is_dir() else []
pages = [p for p in pages if "_not-found" not in p.name]
if not pages:
    print("check-withdrawn: no built HTML under .next/server/app — run `npx next build` first", file=sys.stderr)
    sys.exit(2)

entries = json.loads((ROOT / "maintainer" / "caveats.json").read_text()).get("withdrawn", [])
texts = {("/" + str(p.relative_to(BUILT).with_suffix(""))).replace("/index", "/"): rendered_text(p) for p in pages}

live = 0
for e in entries:
    pat = re.compile(e["pattern"], re.I)
    unless = re.compile(e["unless"], re.I) if e.get("unless") else None
    for page, text in texts.items():
        for m in pat.finditer(text):
            ctx = text[max(0, m.start() - WINDOW): m.end() + WINDOW]
            if unless and unless.search(ctx):
                if SHOW:
                    print(f"EXEMPT   {e['id']:<34} {page}\n         ...{text[max(0, m.start()-90):m.end()+90]}...")
                continue
            live += 1
            print(f"LIVE     {e['id']:<34} {page}\n         ...{text[max(0, m.start()-90):m.end()+90]}...\n         withdrawn {e.get('withdrawn', '?')}: {e.get('why', '')}")

print(f"\n{len(entries)} withdrawn readings checked across {len(texts)} rendered pages, {live} live")
sys.exit(1 if live else 0)
