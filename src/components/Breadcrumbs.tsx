"use client";

import Link from "next/link";
import { getPageInfo } from "@/lib/navigation";

export default function Breadcrumbs({ currentPath }: { currentPath: string }) {
  const pageInfo = getPageInfo(currentPath);
  if (!pageInfo || currentPath === "/") return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li aria-hidden="true" className="separator">/</li>
        <li aria-current="page" style={{ color: "var(--color-text-secondary)" }}>
          {pageInfo.title}
        </li>
      </ol>
    </nav>
  );
}
