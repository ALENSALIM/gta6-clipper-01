// gta6-clipper-01 entrypoint (Node 22).
// Copies VIDEO.json from the repository root to the output directory
// ($MAKEFUN_OUTPUT_DIR, default /output) so the grader can read the
// entered YouTube video's address. Standard library only, no network.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy is byte-identical so a truncated write is never silent.
if (!readFileSync(source).equals(readFileSync(target))) {
  throw new Error(`VIDEO.json copy mismatch: ${target} differs from ${source}`);
}
