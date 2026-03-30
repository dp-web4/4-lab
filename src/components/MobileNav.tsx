"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SiteSearch from "./SiteSearch";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/fleet", label: "Fleet" },
  { href: "/autonomy", label: "Autonomy" },
  { href: "/raising", label: "Raising" },
  { href: "/principles", label: "Principles" },
  { href: "/context", label: "Context" },
  { href: "/links", label: "Links" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div className="mobile-nav-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Dropdown menu */}
      <div className={`mobile-nav-dropdown${open ? " open" : ""}`}>
        <div className="mobile-nav-search">
          <SiteSearch />
        </div>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-nav-link${pathname === link.href ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
