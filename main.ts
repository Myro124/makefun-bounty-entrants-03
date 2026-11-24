// bounty-entrants-03 entry: hand in the bounties this account sponsors.
// The entry is the bounties themselves, so this program only has one job:
// copy BOUNTY.json from the repository root to the grader's output dir,
// byte for byte, so the house reads exactly the bounties we named.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Our sponsored bounty: "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf) — a $2, free-to-enter
// meme bounty on X tagging @_myronera, ranked on likes, reposts and quotes.
const fileName = "BOUNTY.json";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, fileName), join(outputDir, fileName));
} catch (err) {
  console.error(`could not copy ${fileName} from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
