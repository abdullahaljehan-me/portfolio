/* ═══════════════════════════════════════════════════════
   Portfolio JavaScript — Abdullah Al Jehan
   Vanilla JS (ES2022) — No Frameworks, No Dependencies
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  // ─── Shared Constants ─────────────────────────────────
  const SITE = {
    name: "Abdullah Al Jehan",
    title: "EEE Undergraduate @ AUST",
    headline:
      "EEE Undergraduate @ AUST | Founding Advisor @ Kynatium Labs | VLSI & Semiconductor Technology | Embedded Systems & IoT | Robotics",
    email: "abdullahaljehan.me@gmail.com",
    location: "Dhaka, Bangladesh",
    url: "https://abdullahaljehan.vercel.app/",
    github: "https://github.com/abdullahaljehan-me",
    linkedin: "https://www.linkedin.com/in/abdullahaljehan-me/",
    facebook: "https://facebook.com/abdullah.al.jehan.zim",
    instagram: "https://instagram.com/abdullahaljehan.me",
    discord: "https://discord.com/users/1007330418598625281",
    whatsapp: "https://wa.link/26liq0",
    resume: "assets/resume.pdf",
    repo: "https://github.com/abdullahaljehan-me/portfolio",
    neofetch: {
      os: "Kubuntu (KDE Plasma)",
      shell: "Zsh",
      terminal: "Ghostty",
      editor: "VS Code",
      university: "AUST EEE",
    },
  };

  const PROJECTS = [
    {
      id: "digital-clock",
      title: "Digital Clock & Timer Suite",
      repoName: "abdullahaljehan-me/digital-clock-c",
      repoUrl: "https://github.com/abdullahaljehan-me/digital-clock-c",
      stack: ["C"],
      description:
        "Flicker-free command-line time management suite featuring real-time clock, countdown timer, precision stopwatch, and audio alarm using native OS APIs with zero external dependencies.",
      status: "Implemented",
      breakdown: {
        problem:
          "Terminal interfaces frequently suffer from screen flicker, CPU churn, and timer drift during continuous redraw loops in standard C applications.",
        approach:
          "Utilized ANSI escape sequences for selective in-place screen updates and native POSIX/Windows time headers to achieve zero-drift timing loops.",
        stack: "C (C99, Native OS APIs)",
        concepts: "Time synchronization, signal handling, terminal control, non-blocking I/O",
        result:
          "Lightweight, standalone CLI suite operating with zero runtime dependencies and minimal CPU consumption.",
        repository: "https://github.com/abdullahaljehan-me/digital-clock-c",
      },
    },
    {
      id: "contact-management",
      title: "Contact Management System",
      repoName: "abdullahaljehan-me/contact-management-system-c",
      repoUrl: "https://github.com/abdullahaljehan-me/contact-management-system-c",
      stack: ["C"],
      description:
        "Robust CLI application for organizing contact records with capabilities for adding, deleting, listing, searching, sorting, and local text-file persistence.",
      status: "Implemented",
      breakdown: {
        problem:
          "Need for a persistent, structured contact directory without reliance on relational database engines or external libraries.",
        approach:
          "Engineered file parser and record serialization using formatted text-file persistence with dynamic memory allocation for record sorting.",
        stack: "C (Standard Library)",
        concepts: "File streams, memory management, linear and binary search algorithms, record sorting",
        result:
          "Zero-dependency utility with reliable file persistence and immediate CRUD operation feedback.",
        repository: "https://github.com/abdullahaljehan-me/contact-management-system-c",
      },
    },
    {
      id: "calendar-c",
      title: "Calendar Utility",
      repoName: "abdullahaljehan-me/calendar-c",
      repoUrl: "https://github.com/abdullahaljehan-me/calendar-c",
      stack: ["C"],
      description:
        "Fast, dependency-free calendar calculation tool providing monthly and yearly views, leap-year validation, and Gregorian weekday calculation.",
      status: "Implemented",
      breakdown: {
        problem:
          "Accurately calculate day-of-week mappings across arbitrary Gregorian calendar dates while rendering formatted monthly and yearly grids in the terminal.",
        approach:
          "Implemented Zeller's congruence and Gregorian leap-year formulas to calculate date offsets mathematically.",
        stack: "C (Standard Library)",
        concepts: "Zeller's algorithm, mathematical calendar calculation, terminal formatting",
        result:
          "Standalone command-line tool capable of rendering accurate calendar views for any specified year or month.",
        repository: "https://github.com/abdullahaljehan-me/calendar-c",
      },
    },
    {
      id: "c-projects-roadmap",
      title: "C Projects Roadmap",
      repoName: "abdullahaljehan-me/c-projects",
      repoUrl: "https://github.com/abdullahaljehan-me/c-projects",
      stack: ["C"],
      description:
        "Centralized index and structured roadmap covering core data structures, algorithms, systems programming, and low-level development milestones.",
      status: "Index / Planned Entries",
      breakdown: {
        problem:
          "Systematically track, document, and categorize progression across systems programming concepts and embedded preparation milestones.",
        approach:
          "Organized repository into modular learning categories separating completed implementations from planned architectural blueprints.",
        stack: "C, Shell",
        concepts: "Modular software architecture, algorithmic complexity, systems programming fundamentals",
        result:
          "Continuously updated catalog of foundational C projects and architectural experiments.",
        repository: "https://github.com/abdullahaljehan-me/c-projects",
      },
    },
  ];

  // ─── Utility: Escape HTML ─────────────────────────────
  function escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ─── Toast System ─────────────────────────────────────
  const toastContainer = document.getElementById("toastContainer");

  function showToast(message, icon = "✓") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span> <span>${escapeHTML(message)}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // ─── Render Projects Grid ─────────────────────────────
  function renderProjectsGrid() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((proj) => {
      const tags = proj.stack.map((t) => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("");
      const isImplemented = proj.status === "Implemented";
      const statusBadge = isImplemented
        ? `<span class="badge badge-engineering">C Program</span>`
        : `<span class="badge badge-leadership">Roadmap</span>`;

      return `
        <article class="project-card reveal" data-project-id="${escapeHTML(proj.id)}">
          <div class="card-thumb">
            <img
              src="https://opengraph.githubassets.com/1/${escapeHTML(proj.repoName)}"
              alt="${escapeHTML(proj.title)}"
              class="card-thumb-img"
              loading="lazy"
            />
          </div>
          <div class="card-body">
            <div class="card-meta">
              ${statusBadge}
              <span class="meta-date">${escapeHTML(proj.status)}</span>
            </div>
            <h3 class="card-title">${escapeHTML(proj.title)}</h3>
            <p class="card-desc">${escapeHTML(proj.description)}</p>
            <div class="card-tags">${tags}</div>
            <div class="card-actions">
              <button
                type="button"
                class="btn btn-outline btn-sm breakdown-btn"
                data-project="${escapeHTML(proj.id)}"
              >
                Technical Breakdown
              </button>
              <a
                href="${escapeHTML(proj.repoUrl)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-accent btn-sm"
              >
                Repository
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  renderProjectsGrid();

  // ─── Mobile Navigation Drawer ─────────────────────────
  const hamburger = document.getElementById("hamburger");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  let lastActiveElement = null;

  function openMobileMenu() {
    if (!mobileDrawer || !hamburger) return;
    lastActiveElement = document.activeElement;
    mobileDrawer.classList.add("active");
    if (mobileOverlay) mobileOverlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    // Focus the first link or close button inside drawer
    const focusable = mobileDrawer.querySelectorAll("button, a");
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !hamburger) return;
    mobileDrawer.classList.remove("active");
    if (mobileOverlay) mobileOverlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    // Return focus to hamburger
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    } else {
      hamburger.focus();
    }
  }

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains("active");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

  // Close drawer on link click
  document.querySelectorAll(".drawer-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Escape key closes mobile drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // ─── Scroll-Spy Navigation (IntersectionObserver) ────
  const sections = document.querySelectorAll("section[id]");
  const desktopNavLinks = document.querySelectorAll(".nav-desktop .nav-link");
  const drawerNavLinks = document.querySelectorAll(".drawer-link");

  function setActiveNavLink(id) {
    desktopNavLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    drawerNavLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.getAttribute("id"));
        }
      });
    }, observerOptions);

    sections.forEach((sec) => spyObserver.observe(sec));
  } else {
    window.addEventListener(
      "scroll",
      () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach((sec) => {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNavLink(id);
          }
        });
      },
      { passive: true }
    );
  }

  // ─── Scroll Reveal (IntersectionObserver) ────────────
  const revealElements = document.querySelectorAll(".reveal");

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // ─── Accessible Category Tabs ─────────────────────────
  document.querySelectorAll(".tab-wrapper").forEach((wrapper) => {
    const tablist = wrapper.querySelector('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const cards = Array.from(wrapper.querySelectorAll(".data-card"));

    // Check category count and auto-hide empty tabs or single-category tab bars
    const categoriesWithContent = new Set();
    cards.forEach((c) => {
      const cat = c.getAttribute("data-category");
      if (cat) categoriesWithContent.add(cat.toLowerCase());
    });

    tabs.forEach((tab) => {
      const filter = tab.getAttribute("data-filter");
      if (filter && filter !== "all" && !categoriesWithContent.has(filter.toLowerCase())) {
        tab.style.display = "none";
      }
    });

    const visibleCategoryTabs = tabs.filter(
      (t) => t.style.display !== "none" && t.getAttribute("data-filter") !== "all"
    );

    if (visibleCategoryTabs.length <= 1) {
      tablist.style.display = "none";
    }

    function switchTab(newTab) {
      tabs.forEach((tab) => {
        const isSelected = tab === newTab;
        tab.setAttribute("aria-selected", isSelected ? "true" : "false");
        tab.setAttribute("tabindex", isSelected ? "0" : "-1");
        if (isSelected) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });

      const filter = newTab.getAttribute("data-filter");
      cards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (filter === "all" || (cardCat && cardCat.toLowerCase() === filter.toLowerCase())) {
          card.classList.remove("card-hidden");
        } else {
          card.classList.add("card-hidden");
        }
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => switchTab(tab));

      tab.addEventListener("keydown", (e) => {
        const visibleTabs = tabs.filter((t) => t.style.display !== "none");
        const idx = visibleTabs.indexOf(tab);
        let targetIndex = null;

        if (e.key === "ArrowRight") {
          targetIndex = (idx + 1) % visibleTabs.length;
        } else if (e.key === "ArrowLeft") {
          targetIndex = (idx - 1 + visibleTabs.length) % visibleTabs.length;
        } else if (e.key === "Home") {
          targetIndex = 0;
        } else if (e.key === "End") {
          targetIndex = visibleTabs.length - 1;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          visibleTabs[targetIndex].focus();
          switchTab(visibleTabs[targetIndex]);
        }
      });
    });
  });

  // ─── Technical Breakdown Modal ─────────────────────────
  const breakdownModal = document.getElementById("breakdownModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  let modalTriggerElement = null;

  function openBreakdownModal(project) {
    if (!breakdownModal || !project) return;
    modalTriggerElement = document.activeElement;

    modalTitle.textContent = project.title;

    const b = project.breakdown || {};
    let contentHtml = "";

    if (b.problem) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Problem</span>
          <p class="modal-val">${escapeHTML(b.problem)}</p>
        </div>
      `;
    }

    if (b.approach) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Approach</span>
          <p class="modal-val">${escapeHTML(b.approach)}</p>
        </div>
      `;
    }

    if (b.stack) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Stack</span>
          <p class="modal-val"><code>${escapeHTML(b.stack)}</code></p>
        </div>
      `;
    }

    if (b.concepts) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Key Concepts</span>
          <p class="modal-val">${escapeHTML(b.concepts)}</p>
        </div>
      `;
    }

    if (b.result) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Result</span>
          <p class="modal-val">${escapeHTML(b.result)}</p>
        </div>
      `;
    }

    if (b.repository) {
      contentHtml += `
        <div class="modal-field">
          <span class="modal-label">Repository</span>
          <p class="modal-val"><a href="${escapeHTML(b.repository)}" target="_blank" rel="noopener noreferrer" class="contact-link">${escapeHTML(b.repository)}</a></p>
        </div>
      `;
    }

    modalBody.innerHTML = contentHtml;
    breakdownModal.showModal();
    document.body.style.overflow = "hidden";

    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeBreakdownModal() {
    if (!breakdownModal) return;
    breakdownModal.close();
    document.body.style.overflow = "";

    if (modalTriggerElement && typeof modalTriggerElement.focus === "function") {
      modalTriggerElement.focus();
    }
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".breakdown-btn");
    if (!btn) return;
    const projId = btn.getAttribute("data-project");
    const project = PROJECTS.find((p) => p.id === projId);
    if (project) {
      openBreakdownModal(project);
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeBreakdownModal);

  if (breakdownModal) {
    // Backdrop click close
    breakdownModal.addEventListener("click", (e) => {
      const rect = breakdownModal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        closeBreakdownModal();
      }
    });

    // Native cancel (Escape) handling
    breakdownModal.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeBreakdownModal();
    });

    // Keyboard Focus Trap inside modal
    breakdownModal.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const focusable = breakdownModal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // ─── Email Copy to Clipboard ──────────────────────────
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      const email = SITE.email;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            showToast("Email address copied to clipboard!");
          })
          .catch(() => {
            window.location.href = `mailto:${email}`;
          });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // ─── Contact Form Submission ──────────────────────────
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        showToast("Please complete all required fields.", "!");
        return;
      }

      showToast("Sending message...", "...");
    });
  }

  // ─── CLI Terminal System ──────────────────────────────
  const cliToggle = document.getElementById("cliToggle");
  const terminalDrawer = document.getElementById("terminalDrawer");
  const termCloseBtn = document.getElementById("termCloseBtn");
  const termMinBtn = document.getElementById("termMinBtn");
  const termMaxBtn = document.getElementById("termMaxBtn");
  const termClearBtn = document.getElementById("termClearBtn");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  function openCLI() {
    if (!terminalDrawer) return;
    terminalDrawer.classList.add("active");
    terminalDrawer.setAttribute("aria-hidden", "false");
    if (terminalInput) terminalInput.focus();
  }

  function closeCLI() {
    if (!terminalDrawer) return;
    terminalDrawer.classList.remove("active");
    terminalDrawer.setAttribute("aria-hidden", "true");
    if (cliToggle) cliToggle.focus();
  }

  function toggleCLI() {
    if (!terminalDrawer) return;
    if (terminalDrawer.classList.contains("active")) {
      closeCLI();
    } else {
      openCLI();
    }
  }

  if (cliToggle) cliToggle.addEventListener("click", toggleCLI);
  if (termCloseBtn) termCloseBtn.addEventListener("click", closeCLI);
  if (termMinBtn) {
    termMinBtn.addEventListener("click", () => {
      if (terminalDrawer) terminalDrawer.classList.toggle("minimized");
    });
  }
  if (termMaxBtn) {
    termMaxBtn.addEventListener("click", () => {
      if (terminalDrawer) terminalDrawer.classList.toggle("maximized");
    });
  }
  if (termClearBtn) {
    termClearBtn.addEventListener("click", () => {
      if (terminalOutput) {
        terminalOutput.innerHTML = "";
      }
    });
  }

  // Global Shortcut: Ctrl+` or Ctrl+~
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "`" || e.key === "~")) {
      e.preventDefault();
      toggleCLI();
    }
  });

  function appendCLILine(text, type = "output") {
    if (!terminalOutput) return;
    const line = document.createElement("div");
    line.className = `term-line ${type}`;
    line.innerHTML = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  // Command Implementations using shared SITE & PROJECTS
  const CLI_COMMANDS = {
    help: () => `
Available commands:
  <span class="term-cmd">help</span>        - Display list of available commands
  <span class="term-cmd">whoami</span>      - Canonical identity & title
  <span class="term-cmd">about</span>       - Background summary & current roles
  <span class="term-cmd">skills</span>      - Verified competencies by category
  <span class="term-cmd">education</span>   - Academic credentials timeline
  <span class="term-cmd">experience</span>  - Advisory leadership roles
  <span class="term-cmd">projects</span>    - Featured repositories and software
  <span class="term-cmd">contact</span>     - Direct contact & communications
  <span class="term-cmd">links</span>       - Verified social and network URLs
  <span class="term-cmd">resume</span>      - Open curriculum vitae (PDF)
  <span class="term-cmd">neofetch</span>    - Workstation environment & configuration
  <span class="term-cmd">clear</span>       - Clear terminal window
`,

    whoami: () => `
<strong>${escapeHTML(SITE.name)}</strong>
${escapeHTML(SITE.headline)}
Location: ${escapeHTML(SITE.location)}
`,

    about: () => `
I'm Jehan, an Electrical & Electronic Engineering undergraduate at Ahsanullah University of Science and Technology (AUST), Dhaka.
My technical interests include embedded systems, robotics, electronics and circuit design, and VLSI and semiconductor technology.

Founding Advisor at Kynatium Labs, contributing to strategy and educational initiatives focused on technology fundamentals and embedded systems education in Bangladesh.
`,

    skills: () => `
<strong>Web:</strong> HTML, CSS
<strong>Systems:</strong> Linux, Shell/Bash, Git, GitHub, VS Code
<strong>Embedded:</strong> Arduino, Microcontrollers, Sensor Integration, Hardware–Software Integration
<strong>Foundations:</strong> Mathematics, Physics, Circuit Fundamentals
<strong>Core Interests:</strong> Embedded Systems, Robotics, Electronics & Circuit Design, VLSI & Semiconductors
`,

    education: () => `
<strong>1. B.Sc. Electrical & Electronic Engineering</strong>
   Ahsanullah University of Science and Technology (AUST), Dhaka
   Dec 2026 – Present · 4-year program

<strong>2. Higher Secondary Certificate (HSC) — Science</strong>
   Government Science College, Dhaka
   Oct 2023 – Jun 2025 · GPA 5.00 / 5.00

<strong>3. Secondary School Certificate (SSC) — Science</strong>
   President Professor Dr. Iajuddin Ahmed Residential Model School & College
   Jan 2021 – May 2023 · GPA 5.00 / 5.00
`,

    experience: () => `
<strong>Founding Advisor — Kynatium Labs</strong>
Dhaka · Jan 2026 – Present
• Advised the founding team on strategic direction, technical roadmap, and early-stage decision-making.
• Reviewed technical content and embedded-systems concepts for clarity, accuracy, and feasibility.
• Directed beginner-focused outreach strategy and social-media positioning to expand access to technology education in Bangladesh.
• Supported curriculum direction, community building, and long-term growth initiatives.
`,

    projects: () => {
      return PROJECTS.map(
        (p, i) => `
<strong>${i + 1}. ${escapeHTML(p.title)}</strong> [${escapeHTML(p.stack.join(", "))}] (${escapeHTML(p.status)})
   ${escapeHTML(p.description)}
   Repo: <a href="${escapeHTML(p.repoUrl)}" target="_blank" rel="noopener noreferrer" class="contact-link">${escapeHTML(p.repoUrl)}</a>
`
      ).join("");
    },

    contact: () => `
Email:    <a href="mailto:${escapeHTML(SITE.email)}" class="contact-link">${escapeHTML(SITE.email)}</a>
Location: ${escapeHTML(SITE.location)}
Website:  <a href="${escapeHTML(SITE.url)}" target="_blank" class="contact-link">${escapeHTML(SITE.url)}</a>
`,

    links: () => `
GitHub:    <a href="${escapeHTML(SITE.github)}" target="_blank" class="contact-link">${escapeHTML(SITE.github)}</a>
LinkedIn:  <a href="${escapeHTML(SITE.linkedin)}" target="_blank" class="contact-link">${escapeHTML(SITE.linkedin)}</a>
Facebook:  <a href="${escapeHTML(SITE.facebook)}" target="_blank" class="contact-link">${escapeHTML(SITE.facebook)}</a>
Instagram: <a href="${escapeHTML(SITE.instagram)}" target="_blank" class="contact-link">${escapeHTML(SITE.instagram)}</a>
Discord:   <a href="${escapeHTML(SITE.discord)}" target="_blank" class="contact-link">${escapeHTML(SITE.discord)}</a>
WhatsApp:  <a href="${escapeHTML(SITE.whatsapp)}" target="_blank" class="contact-link">${escapeHTML(SITE.whatsapp)}</a>
`,

    resume: () => {
      window.open(SITE.resume, "_blank");
      return "Opening curriculum vitae in a new tab...";
    },

    neofetch: () => {
      const n = SITE.neofetch;
      return `
       .---.          <strong>jehan@aust</strong>
      /     \\         ───────────
     | () () |        <strong>OS:</strong> ${escapeHTML(n.os)}
      \\  _  /         <strong>Shell:</strong> ${escapeHTML(n.shell)}
       \`---\`          <strong>Terminal:</strong> ${escapeHTML(n.terminal)}
                      <strong>Editor:</strong> ${escapeHTML(n.editor)}
                      <strong>Affiliation:</strong> ${escapeHTML(n.university)}
                      <strong>Status:</strong> Open to research & collaboration
`;
    },

    clear: () => {
      if (terminalOutput) terminalOutput.innerHTML = "";
      return null;
    },
  };

  // Command History & Tab Completion
  const cliHistory = [];
  let cliHistoryIdx = -1;
  const knownCommands = Object.keys(CLI_COMMANDS);

  if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const raw = terminalInput.value.trim();
        if (!raw) return;

        cliHistory.push(raw);
        cliHistoryIdx = cliHistory.length;
        terminalInput.value = "";

        // Echo command
        appendCLILine(`jehan@portfolio:~$ <span class="term-cmd">${escapeHTML(raw)}</span>`, "term-echo");

        const cmd = raw.toLowerCase().trim();
        if (CLI_COMMANDS[cmd]) {
          const res = CLI_COMMANDS[cmd]();
          if (res) appendCLILine(res);
        } else {
          appendCLILine(
            `Command not found: '${escapeHTML(raw)}'. Type '<span class="term-cmd">help</span>' for available options.`,
            "error"
          );
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cliHistory.length > 0 && cliHistoryIdx > 0) {
          cliHistoryIdx--;
          terminalInput.value = cliHistory[cliHistoryIdx];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (cliHistoryIdx < cliHistory.length - 1) {
          cliHistoryIdx++;
          terminalInput.value = cliHistory[cliHistoryIdx];
        } else {
          cliHistoryIdx = cliHistory.length;
          terminalInput.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const current = terminalInput.value.toLowerCase().trim();
        if (!current) return;
        const matches = knownCommands.filter((c) => c.startsWith(current));
        if (matches.length === 1) {
          terminalInput.value = matches[0];
        } else if (matches.length > 1) {
          appendCLILine(
            `Possible completions: ${matches.map((m) => `<span class="term-cmd">${m}</span>`).join(", ")}`,
            "info"
          );
        }
      }
    });
  }
})();
