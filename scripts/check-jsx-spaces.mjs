// Fails the build when JSX would silently drop the space between text and an inline element.
//
// JSX removes whitespace that contains a newline. So a paragraph written as
//     ...which is why it was identical on all six cards.
//     <strong>Session counts</strong> are derived from git...
// renders as "cards.Session counts": no space, no paragraph break. The fleet page had five of
// these on 2026-09-29, each where a sentence had been appended on a new line that starts with
// an element. Fix by ending the text line with {" "} (or starting the element's own text with a
// space). Run: node scripts/check-jsx-spaces.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const INLINE = /^<(strong|em|Link|a|code|span|b|i)\b/;
const CLOSE_AT_END = /<\/(strong|em|Link|a|code|span|b|i)>$/;
const TEXT_END = /[A-Za-z0-9.,;:!?)\]”’]$|&[a-z]+;$/;
const TEXT_START = /^[A-Za-z(“"‘]|^&[a-z]+;/;

function* tsxFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* tsxFiles(p);
    else if (p.endsWith(".tsx")) yield p;
  }
}

// Does the element on line b begin its own text with a space? Then nothing is lost.
function elementTextStartsWithSpace(b) {
  const gt = b.indexOf(">");
  return gt >= 0 && /\s/.test(b.charAt(gt + 1));
}

const problems = [];
for (const file of tsxFiles("src")) {
  const lines = readFileSync(file, "utf8").split("\n");
  for (let i = 0; i < lines.length - 1; i++) {
    const a = lines[i].trimEnd();
    const b = lines[i + 1].trimStart();
    const t = a.trim();
    if (!t || t.startsWith("{/*") || t.startsWith("//") || t.startsWith("import")) continue;
    if (INLINE.test(b) && TEXT_END.test(a) && !a.endsWith('{" "}') && !elementTextStartsWithSpace(b)) {
      problems.push(`${file}:${i + 1}  text runs into <${b.match(INLINE)[1]}> on the next line`);
    } else if (CLOSE_AT_END.test(a) && TEXT_START.test(b)) {
      problems.push(`${file}:${i + 1}  element runs into text on the next line`);
    }
  }
}

if (problems.length) {
  console.error("JSX would drop a space here (end the line with {\" \"}):\n" + problems.join("\n"));
  process.exit(1);
}
console.log("check-jsx-spaces: ok");
