import { mkdir, writeFile, cp, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  layout,
  home,
  about,
  career,
  projectPage,
  blogPage,
  notFound,
} from "../src/render.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const pages = [
  [
    "index.html",
    "Application Security Engineer",
    "Kevin Dsouza: application security, secure code review, API security, and DevSecOps. Explore my work and experience.",
    home,
  ],
  [
    "about.html",
    "About & Skills",
    "Meet Kevin Dsouza. Application security skills, education, certifications, and an engineering approach to secure software.",
    about,
  ],
  [
    "experience.html",
    "Experience",
    "Explore Kevin Dsouza's career at Citi, NetBrain, Northeastern University, and beyond.",
    career,
  ],
  [
    "background.html",
    "Experience",
    "Kevin Dsouza's application security career, from web development to enterprise security leadership.",
    career,
  ],
  [
    "projects.html",
    "Security Projects",
    "Security automation, open-source scanning, network and wireless research, and engineering projects by Kevin Dsouza.",
    projectPage,
  ],
  [
    "blogs.html",
    "Security Blog",
    "Kevin Dsouza's planned writing on application security, code review, API boundaries, and AI security.",
    blogPage,
  ],
  [
    "404.html",
    "Page Not Found",
    "Return to Kevin Dsouza's application security portfolio.",
    notFound,
  ],
];
await mkdir(path.join(root, "dist"), { recursive: true });
for (const [filename, title, description, render] of pages) {
  const html = layout(filename, title, description, render());
  // Root HTML is kept ready for the repository's existing GitHub Pages flow.
  await writeFile(path.join(root, filename), html);
  await writeFile(path.join(root, "dist", filename), html);
}
await cp(path.join(root, "assets"), path.join(root, "dist/assets"), {
  recursive: true,
});
const urls = pages
  .filter(([name]) => !["404.html", "background.html"].includes(name))
  .map(
    ([name]) =>
      `  <url><loc>https://punkev.github.io/${name === "index.html" ? "" : name}</loc></url>`,
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
await writeFile(path.join(root, "sitemap.xml"), sitemap);
await writeFile(path.join(root, "dist/sitemap.xml"), sitemap);
await cp(path.join(root, "robots.txt"), path.join(root, "dist/robots.txt"));
await writeFile(path.join(root, "dist/.nojekyll"), "");
console.log(`Built ${pages.length} pages and local assets. Output: dist/`);
