#!/usr/bin/env python3
"""Rendering-integrity check for 4-lab.io — catches text damaged by the edit tooling.

WHY THIS EXISTS: on 2026-09-16 a scripted replacement put `&apos;` into a sed
replacement string. In sed, `&` means "the whole match", so the Web4 card on
/projects shipped with the matched clause spliced back in: "the equationthe spec
binds ... does not show.)apos;s + does not show that binding.)". It sat on the card
that defines Web4 for a day and was found by a visitor persona, not by the build,
the caveat check or the withdrawn-readings check, because all three test meaning
and none tests whether the text is intact.

Three checks against RENDERED HTML (run `npx next build` first):
  fragment  an HTML entity name left without its `&` (apos; quot; ldquo; amp; ...)
  parens    a paragraph, list item or cell whose ( and ) counts differ; the 09-16
            splice left one extra ")". A 7-word repeated-run detector was tried
            first: it flagged the nav and legitimate boilerplate and MISSED the real
            splice, whose duplicated clauses were paraphrases, not copies.
  nospace   a closing inline tag glued to the next word ("<strong>A1</strong>on")

Exit 0 = clean. Exit 1 = damaged text. Exit 2 = no build.
"""
import html, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILT = ROOT / ".next" / "server" / "app"
BLOCK = re.compile(r"<(p|li|td|dd|h[1-4])\b[^>]*>(.*?)</\1>", re.S)

pages = [p for p in sorted(BUILT.glob("**/*.html")) if "_not-found" not in p.name] if BUILT.is_dir() else []
if not pages:
    print("check-render: no built HTML under .next/server/app — run `npx next build` first", file=sys.stderr)
    sys.exit(2)

FRAGMENT = re.compile(r"(?<![&\w])(apos|quot|ldquo|rdquo|lsquo|rsquo|amp|mdash|ndash|nbsp|hellip|rarr|larr);")
# a closing inline tag, then a letter, where the tag's content also ended in a letter or digit
NOSPACE = re.compile(r"([A-Za-z0-9])</(strong|em|b|i|code|a|span)>([A-Za-z(])")

def body(raw):
    raw = re.sub(r"<script\b.*?</script>", " ", raw, flags=re.S | re.I)
    return re.sub(r"<style\b.*?</style>", " ", raw, flags=re.S | re.I)

bad = 0
for p in pages:
    page = ("/" + str(p.relative_to(BUILT).with_suffix(""))).replace("/index", "/")
    raw = body(p.read_text(errors="replace"))
    text = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", raw)))

    for m in FRAGMENT.finditer(text):
        bad += 1
        print(f"FRAGMENT {page:<12} ...{text[max(0, m.start()-80):m.end()+40]}...")

    for m in NOSPACE.finditer(raw):
        bad += 1
        after = re.sub(r"<[^>]+>", "", raw[m.end() - 1: m.end() + 30])
        print(f"NOSPACE  {page:<12} ...{m.group(1)}</{m.group(2)}>{after}...")

    for m in BLOCK.finditer(raw):
        t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", m.group(2))))
        if t.count("(") != t.count(")"):
            bad += 1
            print(f"PARENS   {page:<12} {t.count('(')} open / {t.count(')')} close in: {t[:110]}...")

print(f"\ncheck-render: {len(pages)} rendered pages, {bad} damaged-text hits")
sys.exit(1 if bad else 0)
