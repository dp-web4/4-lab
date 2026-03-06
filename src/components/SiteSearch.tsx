"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { searchPages, NavItem } from "@/lib/navigation";

export default function SiteSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NavItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchPages(query));
      setIsOpen(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGlobalKey = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, [handleGlobalKey]);

  function navigate(href: string) {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      navigate(results[selectedIndex].href);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search… ⌘K"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => query.length >= 2 && setIsOpen(true)}
        style={{
          background: "var(--color-dark-surface)",
          border: "1px solid var(--color-dark-border)",
          borderRadius: "0.375rem",
          padding: "0.25rem 0.625rem",
          fontSize: "0.8125rem",
          color: "var(--color-text-primary)",
          width: "10rem",
          outline: "none",
        }}
        aria-label="Search pages"
        role="combobox"
        aria-expanded={isOpen}
      />
      {isOpen && results.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 0.25rem)",
            right: 0,
            width: "18rem",
            background: "var(--color-dark-surface)",
            border: "1px solid var(--color-dark-border)",
            borderRadius: "0.5rem",
            padding: "0.25rem",
            listStyle: "none",
            zIndex: 100,
          }}
        >
          {results.map((item, i) => (
            <li
              key={item.href}
              role="option"
              aria-selected={i === selectedIndex}
              onClick={() => navigate(item.href)}
              style={{
                padding: "0.5rem 0.625rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
                background:
                  i === selectedIndex
                    ? "var(--color-accent-glow)"
                    : "transparent",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
