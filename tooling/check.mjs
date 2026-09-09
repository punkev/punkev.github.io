import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { experience, certifications, projects } from "../src/content.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
for (const file of [
  "src/content.mjs",
  "src/render.mjs",
  "tooling/build.mjs",
  "tooling/serve.mjs",
  "assets/js/app.js",
]) {
  const result = spawnSync(process.execPath, ["--check", file], {
    cwd: root,
    stdio: "inherit",
  });
  assert.equal(result.status, 0, `JavaScript syntax: ${file}`);
}
assert.equal(new Set(experience.map((x) => x.id)).size, experience.length);
assert.equal(new Set(projects.map((x) => x.id)).size, projects.length);
assert.equal(experience[0].date, "May 2026 - Present");
assert.equal(experience[1].date, "Feb 2023 - May 2026");
assert.equal(experience.filter((x) => x.current).length, 1);
assert.equal(certifications.filter((x) => x.expired).length, 2);
assert.ok(
  experience
    .find((x) => x.id === "neu-research")
    .note.includes("not employment"),
);
assert.equal(projects.filter((x) => x.report).length, 3);
const bundled = path.resolve(
  path.dirname(process.execPath),
  "../../python/python.exe",
);
const python =
  process.env.PYTHON ||
  (existsSync(bundled)
    ? bundled
    : process.platform === "win32"
      ? "python"
      : "python3");
const result = spawnSync(python, ["tooling/check.py"], {
  cwd: root,
  stdio: "inherit",
});
if (result.error)
  console.error("Set PYTHON to a Python 3 executable for HTML validation.");
assert.equal(result.status, 0, "Generated site validation");
console.log(
  "PASS: JavaScript syntax, resume chronology, project coverage, and certification status.",
);
