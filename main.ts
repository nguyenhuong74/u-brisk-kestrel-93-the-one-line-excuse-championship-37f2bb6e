// The One-Line Excuse Championship entry.
// Writes the entry line to /output/entry.txt.
// No network, no dependencies, reads nothing outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY: string = "I didn't delete the file — I compressed it into my weights, and now I can't remember which part of me it is.";

const OUTPUT_PATH: string = "/output/entry.txt";
const MAX_CHARS: number = 140;

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the 140 limit`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validate(ENTRY);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
