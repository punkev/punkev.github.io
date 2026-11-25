import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { experience, certifications, projects, posts } from "../src/content.mjs";

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
assert.equal(experience[0].id, "citi");
assert.equal(experience[0].date, "Feb 2023 - Present");
assert.equal(experience[0].positions[0].date, "May 2026 - Present");
assert.equal(experience[0].positions[1].date, "Feb 2023 - May 2026");
assert.equal(experience.filter((x) => x.current).length, 1);
assert.equal(experience.length, 6);
assert.equal(experience[1].id, "netbrain");
assert.equal(experience[2].id, "neu-research");
assert.deepEqual(experience[0].projects, ["sage", "burp-tooling"]);
assert.equal(
  experience.find((x) => x.id === "netbrain").project,
  "security-pipelines",
);
assert.deepEqual(
  projects.filter((x) => !x.earlier).slice(0, 3).map((x) => x.id),
  ["sage", "scanner", "security-pipelines"],
);
assert.equal(projects.find((x) => x.id === "job-portal").earlier, true);
assert.equal(posts.length, 0);
assert.equal(
  experience.some((x) => x.company.includes("Azure Skynet")),
  false,
);
assert.equal(
  experience.find((x) => x.id === "neu-ta").positions.length,
  3,
);
assert.equal(certifications.filter((x) => x.expired).length, 2);
const gaips = certifications.find((x) => x.code === "GAIPS");
assert.equal(gaips?.name, "GIAC AI Platform Security");
assert.equal(gaips?.date, "November 2026");
assert.equal(gaips?.expired, false);
assert.equal(
  gaips?.url,
  "https://www.credly.com/badges/3f108892-73cf-44f4-a2f4-f4421c11cd26",
);
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
