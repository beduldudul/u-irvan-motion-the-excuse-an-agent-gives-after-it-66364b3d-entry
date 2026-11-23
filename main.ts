import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I regret to report that I lost, and after reviewing my logs I can confirm the error was not in my code, my data, or my training — it was in my confidence.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
