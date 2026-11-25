// Worst Fix Ever: Funniest Commit Message
// Reads the single commit-message line from entry.txt at the repo root
// and writes it verbatim to <output dir>/entry.txt.
// Node 22, stdlib only, no network, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").trim();

if (line.length === 0) {
  throw new Error("entry.txt is empty");
}

if (line.length > 100) {
  throw new Error(`entry is ${line.length} characters, over the 100-character limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
