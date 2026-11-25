(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const menu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("#primary-nav");
  const closeMenu = () => {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-label", "Open navigation");
  };
  menu?.addEventListener("click", () => {
    const opened = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(opened));
    menu.setAttribute(
      "aria-label",
      opened ? "Close navigation" : "Open navigation",
    );
    nav.classList.toggle("is-open", opened);
  });
  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu?.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  const tabs = [...document.querySelectorAll("[data-role]")];
  if (tabs.length) {
    const panels = [...document.querySelectorAll("[data-role-panel]")];
    const tablist = document.querySelector(".role-tabs");
    const previous = document.querySelector("[data-role-prev]");
    const next = document.querySelector("[data-role-next]");
    const position = document.querySelector("#role-position");
    const narrow = window.matchMedia("(max-width: 760px)");
    let selected = 0;
    tablist.setAttribute("role", "tablist");
    const setOrientation = () =>
      tablist.setAttribute(
        "aria-orientation",
        narrow.matches ? "horizontal" : "vertical",
      );
    setOrientation();
    narrow.addEventListener("change", setOrientation);
    tabs.forEach((tab, i) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", panels[i].id);
      panels[i].setAttribute("role", "tabpanel");
    });
    function selectRole(
      index,
      { updateHash = true, focus = false, reveal = false } = {},
    ) {
      if (index < 0 || index >= tabs.length) return;
      selected = index;
      tabs.forEach((tab, i) => {
        tab.classList.toggle("selected", i === selected);
        tab.setAttribute("aria-selected", String(i === selected));
        tab.tabIndex = i === selected ? 0 : -1;
        panels[i].hidden = i !== selected;
      });
      previous.disabled = selected === 0;
      next.disabled = selected === tabs.length - 1;
      position.textContent = `${String(selected + 1).padStart(2, "0")} / ${String(tabs.length).padStart(2, "0")}`;
      if (updateHash)
        history.replaceState(null, "", `#${tabs[selected].dataset.role}`);
      if (focus) tabs[selected].focus({ preventScroll: true });
      if (reveal && narrow.matches)
        tabs[selected].scrollIntoView({
          behavior: "auto",
          block: "nearest",
          inline: "nearest",
        });
    }
    const selectHash = () => {
      const id = location.hash.slice(1).replace(/^panel-/, "");
      const index = tabs.findIndex((tab) => tab.dataset.role === id);
      selectRole(index < 0 ? 0 : index, { updateHash: false });
    };
    selectHash();
    window.addEventListener("hashchange", selectHash);
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        selectRole(index, { reveal: true });
      });
      tab.addEventListener("keydown", (event) => {
        let target;
        if (event.key === "ArrowDown" || event.key === "ArrowRight")
          target = (index + 1) % tabs.length;
        if (event.key === "ArrowUp" || event.key === "ArrowLeft")
          target = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") target = 0;
        if (event.key === "End") target = tabs.length - 1;
        if (event.key === " ") target = index;
        if (target !== undefined) {
          event.preventDefault();
          selectRole(target, { focus: true, reveal: true });
        }
      });
    });
    previous.addEventListener("click", () =>
      selectRole(selected - 1, { reveal: true }),
    );
    next.addEventListener("click", () =>
      selectRole(selected + 1, { reveal: true }),
    );
  }

  function revealProject() {
    const project = document.getElementById(location.hash.slice(1));
    if (project?.classList.contains("project-card")) {
      const details = project.querySelector("details");
      if (details) details.open = true;
    }
  }
  revealProject();
  window.addEventListener("hashchange", revealProject);

  const dialog = document.querySelector("#terminal-dialog");
  const input = document.querySelector("#terminal-input");
  const output = document.querySelector("#terminal-output");
  const form = document.querySelector("#terminal-form");
  const launch = document.querySelector("[data-open-terminal]");
  launch?.addEventListener("click", () => {
    dialog.showModal();
    input.focus();
  });
  document
    .querySelector("[data-close-terminal]")
    ?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom)
    )
      dialog.close();
  });
  dialog?.addEventListener("close", () => launch?.focus());
  const responses = {
    help: "about       Introduction\nskills      Security skills & tools\nprojects    Project collection\nexperience  Career timeline\nclear       Clear this terminal\nhelp        Available commands",
    about:
      "Kevin Dsouza\nApplication Security Engineer / Vice President at Citi\nSecure code review, API security, manual penetration testing, and DevSecOps.",
    skills:
      "Core: Threat modeling, secure code review, web/API testing, risk-based prioritization\nAI: AI code-security evaluation, LLM application security, prompt injection\nTools: Burp Suite, Semgrep, Checkmarx, Snyk, Jenkins\nCode: Java / Spring, Python, Node.js, Bash / PowerShell\nCredentials: GAIPS / GWEB / GWAPT\nGAIPS badge: https://www.credly.com/badges/3f108892-73cf-44f4-a2f4-f4421c11cd26",
    projects:
      "SAGE / Open-source security scanner / Security pipelines / Burp Suite tooling / TCP covert channel / 802.11 research / Job portal",
    experience:
      "Citi: VP and AVP (Feb 2023 - Present)\nNetBrain: Application Security Engineer Co-op (Jan - Aug 2022)\nNortheastern: Security research capstone (Sep - Dec 2022)\nNortheastern: Graduate teaching (Jun 2021 - Dec 2022)\nScoutflo: Security Intern (Jun 2018 - Apr 2020)",
  };
  const destinations = {
    about: ["about.html", "Read my introduction"],
    skills: ["about.html#skills", "Explore skills"],
    projects: ["projects.html", "Open projects"],
    experience: ["experience.html", "Explore experience"],
  };
  const historyItems = [];
  let historyIndex = 0;
  function append(text, className = "") {
    const line = document.createElement("p");
    // User commands remain text, never executable HTML.
    line.textContent = text;
    if (className) line.className = className;
    output.append(line);
    while (output.children.length > 100) output.firstElementChild.remove();
  }
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = input.value.trim().toLowerCase();
    if (!command) return;
    historyItems.push(command);
    if (historyItems.length > 50) historyItems.shift();
    historyIndex = historyItems.length;
    input.value = "";
    if (command === "clear") output.replaceChildren();
    else {
      append(`guest $ ${command}`, "terminal-echo");
      append(
        Object.hasOwn(responses, command)
          ? responses[command]
          : "Unknown command. Enter help to see the available commands.",
      );
      if (Object.hasOwn(destinations, command)) {
        const [href, label] = destinations[command];
        const paragraph = document.createElement("p");
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.textContent = label;
        paragraph.append(anchor);
        output.append(paragraph);
      }
    }
    output.scrollTop = output.scrollHeight;
    input.focus();
  });
  input?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      historyIndex = Math.max(
        0,
        Math.min(
          historyItems.length,
          historyIndex + (event.key === "ArrowUp" ? -1 : 1),
        ),
      );
      input.value = historyItems[historyIndex] || "";
    }
  });
})();
