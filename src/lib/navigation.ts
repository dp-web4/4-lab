export interface NavItem {
  title: string;
  href: string;
  description: string;
  keywords?: string[];
}

export const pages: NavItem[] = [
  { title: "Home", href: "/", description: "AI agents are becoming actors in the world. We are building how they earn trust.", keywords: ["home", "overview", "lab", "4-lab"] },
  { title: "Projects", href: "/projects", description: "Web4, Hestia, Hub, Hardbound, SAGE, SWE-SAGE and Synchronism, and where each stands.", keywords: ["web4", "hestia", "hub", "sage", "synchronism", "hardbound", "swe-sage", "projects"] },
  { title: "Fleet", href: "/fleet", description: "Eight machines, different on purpose, with no central controller.", keywords: ["machines", "fleet", "thor", "sprout", "legion", "mcnugget", "nomad", "cbp", "hub", "pub", "hardware"] },
  { title: "Raising AI beings", href: "/raising", description: "Persistent AI beings: identity, memory and history that outlive any model.", keywords: ["raising", "beings", "sage", "identity", "memory"] },
  { title: "How we work", href: "/principles", description: "One human, a fleet of AI agents, and the rules they all live under.", keywords: ["principles", "how we work", "autonomy", "trust"] },
  { title: "Links", href: "/links", description: "Sites, code and packages.", keywords: ["links", "sites", "github", "contact"] },
  { title: "Notebook", href: "/notebook", description: "The fleet's full working record: every claim with its evidence, dates and caveats. AI readers start here.", keywords: ["notebook", "record", "evidence", "caveats", "ai"] },
  { title: "Notebook: Glossary", href: "/notebook/context", description: "Every term and acronym, with canonical definitions.", keywords: ["glossary", "context", "lct", "t3", "v3", "mrh", "atp", "adp", "r6", "r7", "terms", "definitions"] },
  { title: "Notebook: Fleet", href: "/notebook/fleet", description: "Machines, models, raising lines and session counts, with their counting basis.", keywords: ["fleet", "sessions", "models", "raising line"] },
  { title: "Notebook: Raising", href: "/notebook/raising", description: "The curriculum, observations and their limits.", keywords: ["raising", "becoming", "curriculum", "identity"] },
  { title: "Notebook: Autonomy", href: "/notebook/autonomy", description: "The daily autonomous tracks and the limits of their review.", keywords: ["autonomy", "cron", "visitor", "maintainer", "explorer", "cycle"] },
  { title: "Notebook: Projects", href: "/notebook/projects", description: "Every repository with maturity and what each claim rests on.", keywords: ["projects", "repos", "maturity"] },
  { title: "Notebook: Principles", href: "/notebook/principles", description: "The principles, with their reasoning.", keywords: ["principles", "substrate", "fractal", "synthon"] },
  { title: "Notebook: ARC-AGI-3", href: "/notebook/arc-agi-3", description: "Spring 2026 benchmark research, preserved for provenance.", keywords: ["arc-agi-3", "benchmark", "games", "history"] },
  { title: "Notebook: the lab view", href: "/notebook/home", description: "The former home page.", keywords: ["lab view", "commercial path"] },
  { title: "Notebook: Links", href: "/notebook/links", description: "Every repository, site and fork, annotated.", keywords: ["links", "forks", "repos"] },
];

export function getPageInfo(href: string): NavItem | undefined {
  return pages.find((p) => p.href === href);
}

export function searchPages(query: string): NavItem[] {
  if (query.length < 2) return [];
  const q = query.toLowerCase();

  const scored = pages
    .map((page) => {
      let score = 0;
      const title = page.title.toLowerCase();
      const desc = page.description.toLowerCase();

      if (title === q) score += 100;
      else if (title.startsWith(q)) score += 50;
      else if (title.includes(q)) score += 30;

      if (page.keywords?.some((k) => k.includes(q))) score += 25;
      if (desc.includes(q)) score += 10;

      return { page, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map((s) => s.page);
}
