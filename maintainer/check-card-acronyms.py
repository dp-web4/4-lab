#!/usr/bin/env python3
"""nb-projects says each card expands an acronym where that card first uses it.
Check that claim at the grain it is made: per card, the first use of each listed
acronym must have its expansion within a short window. Added 2026-11-06, after the
visitor found the claim false in six cards. Heuristic (source text, not rendered),
so a FAIL is a prompt to read the card, not proof."""
import re, sys, pathlib
p = pathlib.Path(__file__).resolve().parent.parent / "src/app/notebook/projects/page.tsx"
s = p.read_text()
EXP = {"LCT": "Linked Context Token", "T3": "Trust Tensor", "V3": "Value Tensor",
       "MRH": "Markov Relevancy Horizon", "ATP": "Allocation Transfer Packet",
       "ADP": "Allocation Discharge Packet", "R6": "Rules", "R7": "Reputation",
       "SNARC": "Surprise", "MCP": "Model Context Protocol",
       "RDF": "Resource Description Framework"}
bad = 0
cards = re.findall(r'<ProjectCard\s+name="([^"]+)"\s+description="([^"]*)"', s, re.S)
for name, d in cards:
    for a, e in EXP.items():
        m = re.search(r"(?<![A-Za-z0-9])" + re.escape(a) + r"(?![A-Za-z0-9])", d)
        if m and e not in d[max(0, m.start() - 80): m.start() + 120]:
            print(f"card-acronyms: {name}: first use of {a} has no nearby expansion")
            bad = 1
print(f"card-acronyms: {len(cards)} cards checked, {'FAIL' if bad else 'ok'}")
sys.exit(bad)
