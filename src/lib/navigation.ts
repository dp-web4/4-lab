export interface NavItem {
  title: string;
  href: string;
  description: string;
  keywords?: string[];
}

export const pages: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Six machines. Eight repos. One recursive learning loop.",
    keywords: ["home", "overview", "lab", "4-lab"],
  },
  {
    title: "Projects",
    href: "/projects",
    description: "The ecosystem: Web4, SAGE, Synchronism, Hardbound, and more.",
    keywords: ["web4", "sage", "synchronism", "hardbound", "repos", "ecosystem"],
  },
  {
    title: "Fleet",
    href: "/fleet",
    description: "Six machines, heterogeneous by design. Peer-to-peer, no central coordinator.",
    keywords: ["machines", "fleet", "thor", "sprout", "legion", "mcnugget", "nomad", "cbp", "hardware"],
  },
  {
    title: "Autonomy",
    href: "/autonomy",
    description: "Daily autonomous cycles: supervisor, archivist, publisher, visitor, maintainer, explorer.",
    keywords: ["autonomy", "cron", "visitor", "maintainer", "explorer", "cycle", "autonomous"],
  },
  {
    title: "Raising",
    href: "/raising",
    description: "BECOMING: five developmental phases. Raising is not training.",
    keywords: ["raising", "becoming", "development", "identity", "sage", "curriculum"],
  },
  {
    title: "Principles",
    href: "/principles",
    description: "Substrate not structure. Fractal leverage. Trust is a relationship.",
    keywords: ["principles", "philosophy", "substrate", "fractal", "trust", "synthon"],
  },
  {
    title: "Context",
    href: "/context",
    description: "How knowledge flows across repos and machines.",
    keywords: ["context", "knowledge", "memory", "claude", "cross-repo", "validation"],
  },
  {
    title: "Links",
    href: "/links",
    description: "Explainer sites, repos, and contact.",
    keywords: ["links", "sites", "github", "contact"],
  },
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
