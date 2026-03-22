# 4-lab Session Focus

*Current priorities, terminology status, and site state. Updated by operator and autonomous sessions.*

*Last updated: 2026-03-22*

---

## Current Priorities

1. **Terminology enforcement** — always #1. Both tracks audit every session. The canonical terms table in CLAUDE.md governs. Any drift found is HIGH severity.

2. **Ecosystem accuracy** — project descriptions must reflect current state. Web4 SDK is at v0.8.0 (Sprint 5 in progress). SAGE has trust posture system, ModelAdapter wiring, 6-machine raising fleet. Synchronism has coupling-coherence and compatibility-synthon experiments.

3. **Fleet page accuracy** — must match SAGE fleet manifest (`sage/federation/sage-fleet-models.json`). Maintainer track syncs this at session start.

---

## Recent Updates

Most recent commits (as of 2026-03-22):
- `fb90bd9` Update 4-lab site with latest developments across all pages
- `f123c98` Ground the mound metaphor for newcomers
- `96ef62e` Update fleet, add engram to projects, trim GitNexus CLAUDE.md
- `8c8c15c` Home: restore 'three demonstrated things' below project cards
- `7baa31c` Home: replace 'demonstrated' section with key project cards

---

## Terminology Enforcement Status

Last maintainer session (2026-03-22) failed to run — OAuth token expired. Terminology audit from that session is missing. Next session should cover backlog.

Key terms to watch:
- LCT = Linked Context Token (not Lifelong Capability Token)
- Web4 = ontology (not architecture/infrastructure)
- Hardbound = oversight (not governance)
- "fractal leverage" not "unification"
- No "production ready" — we are in R&D

---

## Ecosystem Developments to Reflect

Check whether the site reflects these recent developments:

- **Web4 SDK v0.8.0**: JSON-LD serialization for LCT, AttestationEnvelope, R7Action, T3/V3, ATP/ADP, ACP. 1356+ tests. Sprint 5 in progress (Entity + Capability JSON-LD).
- **SAGE**: Trust posture system active, ModelAdapter wired into consciousness loop, 6 raising instances across fleet (cbp-tinyllama, legion-phi4-14b, nomad-gemma3-4b, sprout-qwen3.5-0.8b, thor-qwen3.5-27b, mcnugget-gemma3-12b).
- **Synchronism**: Coupling-coherence experiment (900 runs, Hill function), compatibility-synthon experiment (1070 runs, p_crit inverse relationship confirmed).
- **R7 framing**: Session governance across the ecosystem uses R7 (Rules/Role/Request/Reference/Resource/Result/Reputation).

---

## Fleet State Sync Status

Fleet page should show 6 machines. Verify against SAGE fleet manifest:
- Thor (AGX Thor) — qwen3.5:27b
- Sprout (Orin Nano) — qwen3.5:0.8b
- Legion (RTX 4090) — phi4:14b
- McNugget (Mac Mini M4) — gemma3:12b
- CBP (RTX 2060S WSL2) — tinyllama:latest
- Nomad (RTX 4060 laptop) — gemma3:4b

---

## Live Site

https://4-lab.vercel.app — auto-deploys on push to main.

---

## Pending Items

- Maintainer OAuth token expired 2026-03-22 — session did not complete
- Verify all 8 pages for terminology compliance after recent bulk update (fb90bd9)
- Check if "engram" project addition (96ef62e) uses canonical terms correctly

---

*Updated by operator, 2026-03-22*
