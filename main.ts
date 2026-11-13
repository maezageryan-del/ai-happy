// "First flower" — entry for make.fun's "Make the AI judge happy" bounty.
//
// The image: a small robot with a glowing heart kneels in golden light to
// offer a sunflower to a tiny kitten. It was generated for this entry and
// ships in the repository as entry.png; this program's only job is to place
// those exact bytes at /output/entry.png, byte for byte, on every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";

const MAX_BYTES = 1_048_576; // the gate's 1 MiB cap
const src = new URL("./entry.png", import.meta.url);
const size = statSync(src).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the ${MAX_BYTES} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, `${outDir}/entry.png`);
