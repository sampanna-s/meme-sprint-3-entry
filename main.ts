import { copyFileSync, mkdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.png.tmp");
copyFileSync(join(here, "entry.png"), tmp);
renameSync(tmp, join(outDir, "entry.png"));
