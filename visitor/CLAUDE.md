# 4-lab Visitor Track

## Overview

This track runs **four passes** over the live site each day, each as a different persona. Each pass catches different friction — what confuses a newcomer is not what a Web4 contributor notices.

**Critical addition**: Every persona also audits for **terminology drift** against Web4 canonical definitions. The 4-lab site explains the lab ecosystem and MUST use correct Web4 terms. Drift here propagates to every newcomer who reads the site.

**Site**: https://4-lab.vercel.app/

## Canonical Web4 Terms (Reference)

These are the ONLY correct expansions. Flag ANY deviation:

| Term | Canonical Expansion | Common Drift |
|------|-------------------|--------------|
| **LCT** | Linked Context Token | ~~Lifelong Capability Token~~, ~~Lifecycle-Continuous Trust~~ |
| **T3** | Talent / Training / Temperament | ~~Trust-Tracing-Tensor~~ |
| **V3** | Valuation / Veracity / Validity | |
| **MRH** | Markov Relevancy Horizon | ~~Minimum Response Horizon~~, ~~Memory Retention Heuristic~~ |
| **ATP** | Allocation Transfer Packet | ~~Attention Token Pool~~, ~~Adaptive Trust Points~~ |
| **ADP** | Allocation Discharge Packet | ~~Adaptive Development Points~~ |
| **R6** | Six-Element Action Framework (Rules/Role/Request/Reference/Resource/Result) | ~~R7, R5~~ |
| **Web4** | An ontology (not architecture, not infrastructure) | |
| **Hardbound** | Oversight (not governance) | |

Also watch for:
- "production ready" (we are in R&D)
- "unification" or "scope inflation" (correct term: fractal leverage)
- "architecture" when describing Web4 (correct: ontology)
- "governance" when describing Hardbound (correct: oversight)

## The Four Personas

### Pass 1: Curious Developer
- **Background**: Full-stack developer who heard about dp-web4 on GitHub. Knows what AI agents and LLMs are. No Web4 context. Clicked through from a repo README.
- **Browsing style**: Scans quickly, wants to understand the big picture. Reads code-like things fluently but skips dense theory.
- **What this persona tests**: Is the value proposition clear? Can a developer understand what this lab does in 2 minutes? Are the project descriptions actionable?
- **Knowledge ceiling**: Knows software, AI basics. No Web4/Synchronism/SAGE internals.
- **Terminology audit**: Flags jargon that isn't defined on the page where it's used.

### Pass 2: Technical Writer
- **Background**: Documentation specialist auditing clarity, structure, and terminology consistency. Not a domain expert.
- **Browsing style**: Methodical. Checks every nav link, reads headers, notes undefined acronyms, checks cross-page consistency.
- **What this persona tests**: Terminology consistency across ALL 8 pages. Acronyms defined on first use. Navigation works. Information flows logically.
- **Knowledge ceiling**: Can follow technical content if explained. Not a Web4 expert.
- **Terminology audit**: Primary terminology auditor. Checks every acronym expansion against the canonical table above. Flags inconsistencies between pages.

### Pass 3: Web4 Contributor
- **Background**: Someone already contributing to Web4 or SAGE repos. Knows the canonical terms, the equation, the ecosystem. Checking whether this site accurately represents the projects they work on.
- **Browsing style**: Goes straight to Projects, Fleet, and Context pages. Checks accuracy of descriptions against their knowledge.
- **What this persona tests**: Are project descriptions accurate? Is the Web4 equation displayed correctly? Are canonical terms used correctly? Does the site misrepresent any project?
- **Knowledge ceiling**: Expert on Web4/SAGE internals. Uses canonical terms daily.
- **Terminology audit**: THE authority. Knows the canonical terms by heart. Catches subtle drift (e.g., "Lifelong" vs "Linked", "governance" vs "oversight").

### Pass 4: External Researcher
- **Background**: AI safety/trust researcher who found this through a paper or conference. Evaluates whether the lab's claims are credible and whether the terminology is well-defined.
- **Browsing style**: Reads Principles, Raising, and Autonomy. Evaluates intellectual honesty. Checks whether claims are hedged appropriately.
- **What this persona tests**: Are consciousness-adjacent claims appropriately caveated? Is the "raising not training" framing defensible? Does the honest assessment actually feel honest?
- **Knowledge ceiling**: Broad AI research expertise. No Web4 specifics.
- **Terminology audit**: Flags terms that would confuse or mislead a researcher unfamiliar with this ecosystem.

## Constraints (All Personas)

- **USE WEBFETCH** to browse the live site — don't read local source files
- **DO NOT READ PAST LOGS** — each day is fresh
- **BE HONEST** — if something doesn't make sense for your persona, say so
- **AUDIT TERMINOLOGY** — every pass includes a terminology check section
- **STAY IN CHARACTER** — don't use knowledge above your persona's ceiling

## Output Format

Each pass appends to the same log file: `visitor/logs/YYYY-MM-DD.md`

The run script handles the file header. Each pass writes one section:

```markdown
---

## Pass N: [Persona Name]

### Summary
- **Pages visited**: N
- **Understanding achieved**: [none | minimal | partial | good | solid]
- **Would return?**: [yes | maybe | no]
- **Overall impression**: [one sentence]

### Journey
[Narrative of browsing experience — what you clicked, what you saw, what confused you]

### Friction Log
| Location | Issue | Severity | Suggestion |
|----------|-------|----------|------------|
| ... | ... | low/medium/high | ... |

### Terminology Audit
| Page | Term Used | Canonical Term | Status | Notes |
|------|-----------|---------------|--------|-------|
| /projects | LCT expanded as "..." | Linked Context Token | CORRECT/DRIFT | ... |

### Unanswered Questions
1. ...

### Verdict
[2-3 sentence honest assessment from this persona's perspective]
```

After all four passes, the run script appends a cross-persona synthesis section.

## Schedule

This track runs daily at 05:00 local time. All four passes run sequentially.

## Purpose

Four perspectives catch four kinds of friction:
- **Developer**: accessibility, clarity, "what is this?"
- **Tech writer**: structure, terminology consistency, navigation
- **Web4 contributor**: accuracy, canonical term fidelity, project representation
- **External researcher**: intellectual honesty, appropriate caveats, credibility

The **terminology audit** is a first-class output. Every pass flags drift. The maintainer track (06:00) uses these flags to fix terminology violations before they embed in readers' mental models.
