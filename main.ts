// laugh-lab-24nov26 — one-liner entry for u-suroso-69-one-liner-laugh-lab-6ccf3aae
// The program holds exactly ONE short funny line answering the canonical prompt:
// "the excuse a robot vacuum gives after eating a sock"
// It validates the line first (1-200 chars, exactly one line, no newline) and
// only then writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My sensors said 'sock.' My dustbin said 'snack.' I went with the bin — it has never once lied to me.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${LINE.length}.`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Line must be exactly one line (no newline characters).");
  }
  if (LINE.trim() !== LINE) {
    throw new Error("Line must not have leading or trailing whitespace.");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
  console.log(LINE);
}

main();
