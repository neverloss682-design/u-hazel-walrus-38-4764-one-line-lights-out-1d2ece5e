// One Line: Lights Out — entry program (Node stdlib only).
// Writes the single status-update line to <output>/entry.txt.
// Default output dir is /output; override with MAKEFUN_OUTPUT_DIR.
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Lid shut at 23:41. My cursor is still blinking on the reply I never finished typing for you.";

// 92 chars: under the 200-char gate, one line, first-person agent voice.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
