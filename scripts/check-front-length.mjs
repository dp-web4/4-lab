// Keeps the front pages short enough for a human visitor. Runs as `postbuild`, on the RENDERED
// pages, and counts the words a visitor actually sees inside <main> (navigation and footer
// excluded), so the number cannot be argued with.
//
// 2026-09-30: the site had grown from a 36 KB, eight-page explainer (March) to 318 KB, because
// every daily correction was appended with its history and a caveat registry made hedges
// one-way. That record is valuable and now lives, intact, under /notebook. The front pages are
// the human face: they summarize and link to the notebook, and this check keeps them from
// growing back into it. The budget is a ceiling, not a target.
//
// Raising a budget is a decision for the human who owns the front, not for a maintainer pass:
// change FRONT below in a reviewed pull request and say why in its description.
import { existsSync, readFileSync } from "node:fs";

const FRONT = {
  "index.html": 400,
  "projects.html": 400,
  "fleet.html": 330,
  "raising.html": 380,
  "principles.html": 330,
  "links.html": 100,
  "notebook.html": 280,
};
const BUILT = ".next/server/app";

function mainWords(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const text = (m ? m[1] : html)
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/g, " ");
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

let failed = false;
for (const [page, budget] of Object.entries(FRONT)) {
  const file = `${BUILT}/${page}`;
  if (!existsSync(file)) {
    console.log(`MISSING ${file} (did the build render it?)`);
    failed = true;
    continue;
  }
  const n = mainWords(readFileSync(file, "utf8"));
  const ok = n <= budget;
  if (!ok) failed = true;
  console.log(`${ok ? "ok  " : "OVER"} ${String(n).padStart(4)} / ${budget}  /${page.replace(/(index)?\.html$/, "")}`);
}
if (failed) {
  console.error("\nA front page is over its word budget. Move the detail to /notebook and link to it.");
  process.exit(1);
}
