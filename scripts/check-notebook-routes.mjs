// Fails the build when a notebook page cites a bare front route for detail that lives in the notebook.
//
// Since the 2026-09-30 split, /fleet, /raising, /projects, /principles and /links are short front
// pages; the counts, definitions, confounds and licenses the notebook cross-references moved to
// /notebook/<route>. Notebook prose that still says "see /fleet" or labels a link "/raising" sends
// the reader to a page without the cited content. On 2026-10-10 there were 84 such references
// across nine notebook pages (46 on the glossary), plus seven breadcrumbs keyed to the front path.
// /autonomy, /context, /glossary and /arc-agi-3 are not checked: those routes redirect into the
// notebook. A deliberate reference to the front page is allowed when the word "front" immediately
// precedes it ("the front /fleet page"). Run: node scripts/check-notebook-routes.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROUTE = /(?<![\w/])\/(fleet|raising|projects|principles|links)(?![\w/-])/g;

function* tsxFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* tsxFiles(p);
    else if (p.endsWith(".tsx")) yield p;
  }
}

const problems = [];
for (const file of tsxFiles("src/app/notebook")) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(ROUTE)) {
      const before = line.slice(0, m.index);
      if (before.endsWith("/notebook")) continue;
      if (/\bfront\s*$/.test(before)) continue;
      const ctx = line.slice(Math.max(0, m.index - 40), m.index + m[0].length + 20).trim();
      problems.push(`${file}:${i + 1}  ${m[0]} -> /notebook${m[0]}   ...${ctx}...`);
    }
  });
}

if (problems.length) {
  console.error("Notebook page cites a bare front route (the cited detail is in the notebook):\n" + problems.join("\n"));
  process.exit(1);
}
console.log("check-notebook-routes: ok");
