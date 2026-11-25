import { readFileSync } from "node:fs";
import {
  profile,
  skills,
  experience,
  education,
  certifications,
  projects,
  posts,
} from "./content.mjs";

export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const e = escape;
export function icon(name, className = "") {
  const source = readFileSync(
    new URL(
      `../assets/icons/${name === "fingerprint" ? "scan-line" : name}.svg`,
      import.meta.url,
    ),
    "utf8",
  );
  return source.replace(
    "<svg",
    `<svg aria-hidden="true" focusable="false" class="icon ${className}"`,
  );
}
const arrow = () => icon("arrow-up-right");
const tagList = (tags) =>
  `<ul class="tags">${tags.map((t) => `<li>${e(t)}</li>`).join("")}</ul>`;
const link = (href, label, className = "text-link", external = false) =>
  `<a class="${className}" href="${e(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}${external ? arrow() : icon("arrow-right")}</a>`;
const navItems = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["experience.html", "Experience"],
  ["projects.html", "Projects"],
  ...(posts.length ? [["blogs.html", "Blogs"]] : []),
];

function header(page) {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header"><div class="header-inner">
    <a class="brand" href="index.html" aria-label="Kevin Dsouza home"><span class="brand-mark">k<span>d</span><i>.</i></span><span class="brand-name">Kevin Dsouza<span>APPLICATION SECURITY</span></span></a>
    <button class="icon-button mobile-menu" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">${icon("menu")}</button>
    <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">${navItems.map(([href, label]) => `<a href="${href}"${page === href || (page === "background.html" && href === "experience.html") ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
    <a class="header-contact" href="mailto:${profile.email}">Let's connect ${arrow()}</a>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-main wrap"><div><p class="eyebrow">GOOD SOFTWARE DESERVES GOOD SECURITY</p><h2>Let's build with security in mind.</h2><a class="email-link" href="mailto:${profile.email}">${profile.email}${arrow()}</a></div><div class="footer-links">${link(profile.github, "GitHub", "text-link", true)}${link(profile.linkedin, "LinkedIn", "text-link", true)}<a class="text-link" href="assets/files/kevin-dsouza-resume.pdf" target="_blank" rel="noopener">Resume ${icon("download")}</a></div></div><div class="footer-bottom wrap"><span>&copy; 2026 Kevin Dsouza</span><span class="mono">Thoughtful code. Stronger systems.</span><a href="#top" aria-label="Back to top">Back to top ${icon("arrow-up-right")}</a></div></footer>`;
}

function terminal() {
  return `<dialog class="terminal-dialog" id="terminal-dialog" aria-labelledby="terminal-title"><div class="dialog-heading"><span id="terminal-title">${icon("terminal")} kevin@portfolio</span><button class="icon-button" type="button" data-close-terminal aria-label="Close terminal">${icon("x")}</button></div><div id="terminal-output" class="terminal-output" role="log" aria-live="polite"><p>Kevin Dsouza / Application Security Engineer</p><p class="muted">Available commands: about, skills, projects, experience, help, clear</p></div><form id="terminal-form" autocomplete="off"><label for="terminal-input" class="terminal-prompt">guest $</label><input id="terminal-input" name="command" aria-label="Portfolio terminal command" spellcheck="false" maxlength="200"><button class="icon-button" type="submit" aria-label="Run command">${icon("arrow-right")}</button></form></dialog>`;
}

export function layout(page, title, description, content) {
  const canonical = `https://punkev.github.io/${page === "index.html" ? "" : page}`;
  return `<!doctype html>
<html lang="en" id="top"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(title)} | Kevin Dsouza</title><meta name="description" content="${e(description)}"><meta name="theme-color" content="#101312"><meta name="color-scheme" content="dark"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:title" content="${e(title)} | Kevin Dsouza"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${e(title)} | Kevin Dsouza"><meta name="twitter:description" content="${e(description)}"><link rel="icon" href="assets/favicon.ico"><link rel="stylesheet" href="assets/css/site.css"><script src="assets/js/app.js" defer></script>${page === "index.html" ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, url: canonical, jobTitle: "Application Security Engineer", email: profile.email, worksFor: { "@type": "Organization", name: "Citibank" }, sameAs: [profile.github, profile.linkedin] })}</script>` : ""}</head><body data-page="${page}">${header(page)}<main id="main">${content}</main>${footer()}${terminal()}</body></html>\n`;
}

function sectionHeader(number, label, title, action = "") {
  return `<div class="section-heading"><div><p class="eyebrow"><span>${number}</span> / ${label}</p><h2>${title}</h2></div>${action}</div>`;
}
function pageIntro(number, label, title, text, action = "") {
  return `<section class="page-intro wrap"><div><p class="eyebrow"><span>${number}</span> / ${label}</p><h1>${title}<span class="accent">.</span></h1><p class="page-description">${text}</p></div>${action}</section>`;
}

function codePanel(theme, iconName, caption, lines) {
  return `<div class="project-visual code-visual ${theme}"><div class="code-caption">${icon(iconName)} ${caption}</div>${lines
    .map(
      ([key, value], index) =>
        `<div class="code-line"><span>${String(index + 1).padStart(2, "0")}</span> <i>${key}</i>: ${value}</div>`,
    )
    .join("")}</div>`;
}

function projectVisual(p) {
  if (p.id === "sage")
    return codePanel("mint", "git-branch", "SAGE / SECURITY SEARCH", [
      ["scope", "repositories"],
      ["match", "vulnerable_patterns"],
      ["review", "findings"],
      ["action", "remediate"],
    ]);
  if (p.id === "scanner")
    return codePanel("blue", "scan-line", "SCAN / PIPELINE", [
      ["zap", "application"],
      ["nikto", "server"],
      ["tls", "testssl"],
      ["report", "normalized"],
    ]);
  if (p.id === "security-pipelines")
    return codePanel("blue", "workflow", "PIPELINE / RELEASE GATE", [
      ["sast", "source"],
      ["dast", "qualys"],
      ["sca", "dependencies"],
      ["gate", "engineer"],
    ]);
  if (p.id === "covert-channel")
    return codePanel("rose", "network", "TCP / SOURCE PORT", [
      ["field", "source port"],
      ["payload", "encrypted"],
      ["capture", "wireshark"],
      ["detect", "snort"],
    ]);
  if (p.id === "wireless")
    return codePanel("amber", "radio", "802.11 / FRAMES", [
      ["deauth", "spoofed"],
      ["beacon", "spoofed"],
      ["probe", "flood"],
      ["pmf", "802.11w"],
    ]);
  if (p.image)
    return `<div class="project-visual report-visual ${p.theme}"><img src="assets/images/${p.image}" alt="Cover of the ${e(p.name)} report" width="1000" height="750" loading="lazy"><span class="visual-caption">${icon("file-text")} ORIGINAL RESEARCH</span></div>`;
  return `<div class="project-visual compact-visual ${p.theme}">${icon(p.icon)}<span>${e(p.subtitle)}</span></div>`;
}

function certificationCard(c) {
  const name = c.url
    ? `<a class="cert-link" href="${e(c.url)}" target="_blank" rel="noopener noreferrer">${e(c.name)}${icon("arrow-up-right")}</a>`
    : e(c.name);
  return `<article class="certification"><span class="cert-code">${e(c.code)}</span><div><h3>${name}</h3><p>Issued ${e(c.date)}</p></div><span class="cert-status ${c.expired ? "expired" : ""}">${c.expired ? "Expired" : "GIAC certified"}</span></article>`;
}

function credentialCodes() {
  return certifications
    .filter((c) => !c.expired)
    .map((c) =>
      c.url
        ? `<a href="${e(c.url)}" target="_blank" rel="noopener noreferrer">${e(c.code)}</a>`
        : e(c.code),
    )
    .join(' <span class="muted">/</span> ');
}

function companyMark(x) {
  if (x.short === "Citi") return ["citi-symbol", "citi"];
  if (x.short === "Northeastern") return ["neu-symbol", "NEU"];
  if (x.short === "NetBrain") return ["", "NB"];
  return ["", e(x.short.slice(0, 2).toUpperCase())];
}

function relatedLinks(x) {
  const ids = x.projects || (x.project ? [x.project] : []);
  if (!ids.length) return "";
  return `<div class="role-links">${ids
    .map((id) => {
      const project = projects.find((p) => p.id === id);
      return link(
        `projects.html#${id}`,
        project ? project.name : "Related project",
      );
    })
    .join("")}</div>`;
}

function aboutCertFacts() {
  const codes = certifications
    .filter((c) => !c.expired)
    .map((c) =>
      c.url
        ? `<a href="${e(c.url)}" target="_blank" rel="noopener noreferrer">${e(c.code)}</a>`
        : e(c.code),
    )
    .join('<i class="cert-sep">|</i>');
  return `<div><strong class="cert-codes">${codes}</strong><span>GIAC certifications</span></div>`;
}

function certificationBand() {
  const current = certifications.filter((c) => !c.expired);
  const earlier = certifications.filter((c) => c.expired);
  return `<div class="certification-list">${current.map(certificationCard).join("")}</div>${
    earlier.length
      ? `<p class="earlier-credentials"><span class="eyebrow">EARLIER CREDENTIALS</span>${earlier
          .map(
            (c) =>
              `<span>${e(c.name)} <span class="muted">${e(c.date)}</span></span>`,
          )
          .join("")}</p>`
      : ""
  }`;
}

const mainProjects = () => projects.filter((p) => !p.earlier);

function projectCard(p, compact = false) {
  const body = `<div class="project-content"><div class="project-meta"><span>${e(p.category)}</span><span>${p.number}</span></div><h3>${e(p.name)}</h3><p>${e(p.description)}</p>${compact ? `<div class="card-row">${tagList(p.tags.slice(0, 3))}${icon("arrow-right")}</div>` : `${tagList(p.tags)}<details class="project-details"><summary>Project details ${icon("chevron-down")}</summary><div class="project-detail-body"><p class="eyebrow">${e(p.context)}</p><p>${e(p.overview)}</p><ul class="detail-list">${p.points.map((x) => `<li>${e(x)}</li>`).join("")}</ul>${p.availability ? `<p class="availability">${icon("lock-keyhole")}${e(p.availability)}</p>` : ""}</div></details>${p.report ? `<a class="report-link" href="assets/files/${p.report}" target="_blank" rel="noopener">Read the report ${icon("file-text")}</a>` : ""}`}</div>`;
  return compact
    ? `<a class="project-card featured-card" href="projects.html#${p.id}">${projectVisual(p)}${body}</a>`
    : `<article class="project-card" id="${p.id}">${projectVisual(p)}${body}</article>`;
}

export function home() {
  return `<section class="home-hero wrap"><div class="hero-topline"><p class="eyebrow"><span class="accent">APPLICATION SECURITY ENGINEER</span></p><span class="location">${icon("map-pin")} South Florida, USA</span></div><h1>Kevin Dsouza<span class="accent">.</span></h1><div class="hero-body"><div class="hero-copy"><h2>Understand the code.<br>Secure what matters.</h2><p>I find the weaknesses behind the findings, validate real-world risk, and work with engineers to build more secure applications.</p><div class="hero-actions">${link("projects.html", "Explore my work", "button button-primary")}<a class="button button-secondary" href="assets/files/kevin-dsouza-resume.pdf" target="_blank" rel="noopener">${icon("download")} Resume</a></div></div><aside class="hero-profile" aria-label="Current role"><div class="current-label"><span class="status-dot"></span>CURRENTLY AT CITI</div><p class="hero-role">Information Tech Lead Analyst<br>Vice President<br><span class="hero-focus">Including AI platform security</span></p><div class="profile-divider"></div><div class="credential-inline">${icon("award")} <span>${credentialCodes()}</span><span class="mono muted">GIAC</span></div><a class="text-link" href="experience.html">My experience ${icon("arrow-right")}</a></aside></div><div class="hero-bottom"><span class="mono">CODE REVIEW <span>/</span> API SECURITY <span>/</span> DEVSECOPS</span><button class="terminal-launch" type="button" data-open-terminal>${icon("terminal")} Open terminal</button></div></section>
  <section class="trust-band"><div class="wrap trust-inner"><span class="eyebrow trust-label">BUILT AT</span><span class="wordmark"><span class="wordmark-name">Citi</span><span class="wordmark-role">Vice President</span></span><span class="wordmark"><span class="wordmark-name">NetBrain</span><span class="wordmark-role">Security co-op</span></span><span class="wordmark"><span class="wordmark-name">Northeastern</span><span class="wordmark-role">M.S. and teaching</span></span><span class="wordmark"><span class="wordmark-name">TCS</span><span class="wordmark-role">Intern</span></span></div></section>
  <section class="section wrap">${sectionHeader("01", "THE WORK", "Security, in practice.", link("projects.html", "All projects"))}<div class="featured-grid">${mainProjects()
    .slice(0, 3)
    .map((p) => projectCard(p, true))
    .join("")}</div></section>
  <section class="approach-section"><div class="wrap approach-layout"><div><p class="eyebrow"><span>02</span> / MY APPROACH</p><h2>A finding is only<br>the beginning.</h2><p>Good application security connects technical depth with a fix that works for the people building the software.</p>${link("about.html", "More about me")}</div><ol class="approach-list"><li><span class="step-number">01</span><div><h3>Understand the system</h3><p>Map code paths, trust boundaries, and the assumptions behind the design.</p></div>${icon("braces")}</li><li><span class="step-number">02</span><div><h3>Prove the risk</h3><p>Validate exploitability through hands-on testing and reproducible evidence.</p></div>${icon("scan-line")}</li><li><span class="step-number">03</span><div><h3>Make the fix practical</h3><p>Partner with engineers on prioritized, production-ready remediation.</p></div>${icon("shield-check")}</li></ol></div></section>
  <section class="section wrap">${sectionHeader("03", "ON THE RECORD", "Research you can read.", link("projects.html", "All projects"))}<div class="report-preview">${projects
    .filter((p) => p.report)
    .map(
      (p) =>
        `<article class="report-card"><span class="eyebrow">${e(p.category)}</span><h3>${e(p.name)}</h3><p>${e(p.description)}</p><a class="report-link" href="assets/files/${p.report}" target="_blank" rel="noopener">Read the report ${icon("file-text")}</a></article>`,
    )
    .join("")}</div></section>`;
}

export function about() {
  return `${pageIntro("01", "INTRODUCTION", "A builder. A breaker.<br>An engineer", "I work at the intersection of how applications are built and how they can fail.")}
  <section class="wrap about-layout"><div class="about-narrative"><p class="lead">I'm Kevin, an Application Security Engineer who likes to get close to the code.</p><p>My work spans manual penetration testing, secure code review, API security, and DevSecOps. I investigate the behavior behind a finding, connect it to business risk, and help development teams make the right fix.</p><p>At Citi, I work across business-critical web applications, APIs, and backend services. My experience includes deep Java/Spring assessments, white-box testing, threat modeling, security automation, and evaluating AI-driven security tools.</p><p>Before Citi, I brought security testing into Jenkins pipelines at NetBrain and completed a master's in cybersecurity at Northeastern. Teaching and mentoring graduate students shaped how I communicate technical findings: clearly, practically, and with the person on the other side in mind.</p><div class="inline-links">${link(profile.github, "GitHub", "text-link", true)}${link(profile.linkedin, "LinkedIn", "text-link", true)}</div></div><aside class="about-facts"><div><strong>5+</strong><span>Years of application security experience</span></div><div><strong>Web. API. Mobile.</strong><span>Assessment surfaces</span></div>${aboutCertFacts()}</aside></section>
  <section id="skills" class="section wrap">${sectionHeader("02", "CAPABILITIES", "Depth across the lifecycle.")}<div class="skills-grid">${skills.map((s) => `<article class="skill-group"><div class="skill-title">${icon(s.icon)}<h3>${e(s.title)}</h3></div><p>${e(s.description)}</p>${tagList(s.items)}</article>`).join("")}</div></section>
  <section class="education-band"><div class="section wrap">${sectionHeader("03", "FOUNDATIONS", "Education & credentials.")}<div class="education-grid">${education.map((x) => `<article class="education-item">${icon("graduation-cap")}<p class="eyebrow">${e(x.date)}</p><h3>${e(x.degree)}</h3><p>${e(x.school)}<br><span class="muted">${e(x.detail)}</span></p><span class="meta">${e(x.place)}</span></article>`).join("")}</div>${certificationBand()}</div></section>
  <section class="section wrap beyond-section"><p class="eyebrow">BEYOND THE CODE</p><h2>Clear judgment. Good teamwork.</h2><p>At Northeastern, I also officiated intramural cricket, soccer, volleyball, and badminton from April to December 2022. Making decisions under pressure and keeping a game fair was a different kind of practice in communication and responsibility.</p></section>`;
}

function contributionItems(highlights) {
  return highlights
    .map((h) => `<li>${icon("check")}<span>${e(h)}</span></li>`)
    .join("");
}

function roleBody(x) {
  if (x.positions) {
    return `<h3 class="eyebrow">POSITIONS</h3><div class="role-positions">${x.positions
      .map(
        (p) =>
          `<section class="role-position"><div class="role-position-heading"><h3>${e(p.title)}</h3><span>${e(p.date)}</span></div><ul class="contribution-list">${contributionItems(p.highlights)}</ul></section>`,
      )
      .join("")}</div>`;
  }
  return `<h3 class="eyebrow">CONTRIBUTIONS</h3><ul class="contribution-list">${contributionItems(x.highlights)}</ul>`;
}

function rolePanel(x) {
  const [symbolClass, symbol] = companyMark(x);
  return `<article id="panel-${x.id}" class="role-panel" data-role-panel aria-labelledby="tab-${x.id}" tabindex="0"><div class="role-heading"><div class="company-symbol ${symbolClass}">${symbol}</div><div><p class="eyebrow">${e(x.company)}${x.current ? ' <span class="current-badge">CURRENT</span>' : ""}</p><h2>${e(x.role)}</h2><p class="role-level">${e(x.level)}</p></div></div><div class="role-metadata"><span>${e(x.date)}</span><span>${icon("map-pin")}${e(x.location)}</span><span>${e(x.type)}</span></div><p class="role-intro">${e(x.intro)}</p>${x.note ? `<p class="role-note">${e(x.note)}</p>` : ""}${roleBody(x)}<div class="role-focus"><h3 class="eyebrow">FOCUS AREAS</h3>${tagList(x.tags)}</div>${relatedLinks(x)}</article>`;
}

export function career() {
  return `${pageIntro("02", "EXPERIENCE", "From building applications<br>to securing them", "A career across application security, engineering, research, and teaching.", `<a class="button button-secondary" href="assets/files/kevin-dsouza-resume.pdf" target="_blank" rel="noopener">${icon("download")} Full resume</a>`)}
  <section class="wrap career-section"><div class="career-selector"><p class="eyebrow career-label">THE JOURNEY <span>${experience.length} ROLES</span></p><div class="role-tabs" aria-label="Career roles">${experience.map((x, i) => `<a id="tab-${x.id}" class="role-tab${i === 0 ? " selected" : ""}" href="#panel-${x.id}" data-role="${x.id}"><span class="timeline-node"></span><span class="role-tab-copy"><span class="tab-date">${e(x.date)}</span><strong>${e(x.short)}</strong><span class="tab-role">${e(x.id === "citi" ? "VP and AVP" : x.role)}</span></span>${icon("chevron-right")}</a>`).join("")}</div></div><div class="career-detail">${experience.map(rolePanel).join("")}<div class="career-pagination"><button type="button" class="icon-button" data-role-prev aria-label="Previous role">${icon("arrow-left")}</button><span id="role-position" class="mono" aria-live="polite">01 / ${String(experience.length).padStart(2, "0")}</span><button type="button" class="icon-button" data-role-next aria-label="Next role">${icon("arrow-right")}</button></div></div></section><section class="career-footnote wrap"><span>${icon("graduation-cap")} M.S. Cybersecurity, Northeastern University</span>${link("about.html#skills", "Skills & credentials")}</section>`;
}

export function projectPage() {
  const current = mainProjects();
  const earlier = projects.filter((p) => p.earlier);
  return `${pageIntro("03", "PROJECTS", "Built to understand.<br>Engineered to secure", "Security tooling, hands-on research, and the engineering work behind my practice.", link(profile.github, "GitHub profile", "button button-secondary", true))}<section class="wrap projects-section"><div class="collection-heading"><h2>Project collection <span>${String(current.length).padStart(2, "0")}</span></h2><span class="meta">Engineering / Research</span></div><div class="projects-grid">${current.map((p) => projectCard(p)).join("")}</div></section>${earlier.length ? `<section class="wrap projects-section earlier-work"><div class="collection-heading"><h2>Earlier work</h2><span class="meta">Before application security</span></div><div class="projects-grid">${earlier.map((p) => projectCard(p)).join("")}</div></section>` : ""}`;
}

export function blogPage() {
  const entries = posts
    .map(
      (p, i) =>
        `<article class="blog-entry"><span class="blog-number mono">${String(i + 1).padStart(2, "0")}</span><div><div class="blog-entry-meta"><p class="eyebrow">${e(p.category)}</p><span class="draft-label">${e(p.status)}</span></div><h2>${e(p.title)}</h2><p>${e(p.description)}</p></div></article>`,
    )
    .join("");
  return `${pageIntro("04", "BLOGS", "Notes from<br>the security desk", "Application security, code review, and the questions emerging around AI.")}
  <section class="wrap blog-layout"><aside class="blog-sidebar"><div class="journal-mark">${icon("book-open")}</div><h2>The notebook</h2><p>Research, practical observations, and ideas still taking shape.</p><div class="blog-status"><span class="eyebrow">PUBLICATION STATUS</span><p>${posts.length ? "Articles on the desk." : "No articles yet."}</p></div><a class="text-link" href="projects.html">Read existing research ${icon("arrow-right")}</a></aside><div class="blog-list"><div class="collection-heading"><h2>On the writing desk</h2><span class="meta">${posts.length ? `${String(posts.length).padStart(2, "0")} articles` : "No articles yet"}</span></div>${entries || `<div class="blog-empty-note">${icon("file-text")}<p>Nothing published here yet. Completed technical reports are available in <a href="projects.html">Projects</a>.</p></div>`}</div></section>`;
}

export function notFound() {
  return `<section class="wrap not-found"><p class="eyebrow">404 / PAGE NOT FOUND</p><h1>Outside the scope<span class="accent">.</span></h1><p>This page doesn't exist. Let's get you back to the portfolio.</p>${link("index.html", "Back to home", "button button-primary")}</section>`;
}
