// news-image-20261120 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// summing up Friday 20 November 2026 in six verified stories.
// The program copies it to /output/entry.png, deterministically.
// Determinism: the image is a fixed file in the repository, so both runs
// write the same bytes. Clearing stale files from /output first keeps a
// previous run's leftovers from leaking into the graded output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// NOTE: /output is a mounted volume in the grader — never rmSync the
// directory itself (EBUSY). Only its contents are cleared.

import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png missing beside main.ts');
copyFileSync(src, join(outDir, 'entry.png'));
