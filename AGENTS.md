<!-- gitnexus:start -->
<!-- gitnexus:keep -->
# GitNexus — Code Knowledge Graph

Indexed as **4-lab** (64 nodes, 77 edges, 0 flows). MCP tools available via `mcp__gitnexus__*`.

**Do not reindex.** The supervisor handles GitNexus indexing. If the index is stale, note it in SESSION_FOCUS.

| Tool | Use for |
|------|---------|
| `query` | Find execution flows by concept |
| `context` | 360-degree view of a symbol (callers, callees, processes) |
| `impact` | Blast radius before editing (upstream/downstream) |
| `detect_changes` | Map git diff to affected symbols and flows |
| `rename` | Graph-aware multi-file rename (dry_run first) |
| `cypher` | Raw Cypher queries against the graph |

Resources: `gitnexus://repo/4-lab/context`, `clusters`, `processes`, `process/{name}`
<!-- gitnexus:end -->
