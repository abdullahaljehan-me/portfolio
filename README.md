# ⚡ Abdullah Al Jehan — Personal Portfolio

> A hacker-aesthetic, terminal-inspired personal portfolio built entirely with vanilla web technologies. No frameworks. No dependencies. Just raw HTML, CSS, and JavaScript — optimized to load fast, look sharp, and work everywhere.

**🔗 Live: [abdullahaljehan.vercel.app](https://abdullahaljehan.vercel.app)**

---

## 📝 About

This is the source code for my personal portfolio — a multi-page site built around a cyber/terminal aesthetic. It features a live GitHub repository feed via the GitHub API, an animated particle canvas system, a terminal boot sequence preloader, a contact form powered by Web3Forms, and a fully responsive layout — all without a single npm package or build step.

This repository is public so the code is visible, but it's a personal, single-owner project — not a template or an open-source product looking for contributors.

---

## 🌟 Key Features

- **Terminal Boot Sequence** — Animated preloader that types out system logs on first visit, stored in `sessionStorage` to skip on return
- **Particle Canvas System** — 150-particle interactive background with mouse-repulsion physics and connecting line mesh
- **Live GitHub Feed** — Pulls and renders my latest repositories directly from the GitHub REST API with 5-minute `sessionStorage` caching
- **Magnetic Custom Cursor** — Dual-element cursor (dot + ring) with magnetic snapping to interactive elements
- **Cyber-Chamfer UI** — All cards and buttons use a `clip-path` polygon for a consistent angled-corner aesthetic
- **Accessible & SEO-Ready** — Structured data (`schema.org`), Open Graph tags, canonical URLs, skip-to-content link, ARIA labels, and `prefers-reduced-motion` support throughout
- **Zero-Dependency Contact Form** — Web3Forms integration with client-side validation, XSS sanitization, honeypot anti-spam, and a `mailto:` fallback
- **3D Tilt Cards + Text Scrambler** — `perspective` CSS transforms on hover and character-scramble effect on nav links

---

## 🛠️ Built With

| Layer                | Choice              | Notes                                                        |
| --------------------- | ------------------- | ------------------------------------------------------------ |
| Markup               | HTML5               | Semantic, schema.org structured data                         |
| Styling              | CSS3                | Custom properties, `clip-path`, `backdrop-filter`            |
| Scripting            | Vanilla JS (ES2022) | Class-based architecture, `IntersectionObserver`, Canvas API |
| Fonts                | Google Fonts        | Orbitron · Space Mono · Rajdhani                             |
| Form Backend         | Web3Forms           | Free tier, no server required                                |
| Hosting              | GitHub Pages        | Auto-deploys from `main` branch                              |
| Live Chat (optional) | Tawk.to             | Loaded only if `TAWKTO_URL` is configured                    |

No Node.js. No Python. No build tools. Zero runtime dependencies.

---

## 📁 Structure Notes (for future me)

Quick reference for maintaining this later.
**Adding a new Timeline entry (`about.html`)**

```html
<div class="timeline-item">
  <div class="timeline-date">May 2026</div>
  <div class="timeline-content">
    <h4>Milestone Title</h4>
    <p>Brief description of what happened.</p>
  </div>
</div>
```

**Adding a new Blog post card (`blog.html`)**

```html
<div class="blog-card" data-topic="linux">
  <span class="blog-tag">Linux</span>
  <div class="blog-date">May 2026</div>
  <h3>Article Title</h3>
  <p class="blog-excerpt">
    A 2–3 sentence summary of what the article covers.
  </p>
  <div class="blog-status">COMING SOON</div>
  <!-- Replace the div above with an anchor tag once published -->
</div>
```

Valid `data-topic` values: `linux` · `programming` · `embedded` · `engineering`

**Tweaking the particle system (`main.js`)**

```js
const CONFIG = {
  PARTICLE_COUNT: 80,   // Lower for better performance on weak hardware
  // ...
};
```

Connection distance (default `100px`) is adjusted inside `ParticleSystem.draw()`:

```js
if (dist < 80) {  // Tighten the mesh by reducing this value
  this.ctx.strokeStyle = 'rgba(0, 212, 255, ' + (0.08 * (1 - dist / 80)) + ')';
}
```

**Updating mission progress bars (`about.html`, `index.html`)**

```html
<div class="mission-progress-fill" data-percentage="60"></div>
<!-- data-percentage accepts 0–100; the bar animates in via IntersectionObserver -->
```

---

## 📄 License

Code structure and patterns are MIT-licensed — feel free to reference them for your own build. Personal content (bio, academic details, photos, branding) is not licensed for reuse.

See [`LICENSE`](https://github.com/abdullahaljehan-me/portfolio/blob/main/LICENSE) for the full text.

---

## 👤 Contact

**Abdullah Al Jehan** Engineering Aspirant · Founding Advisor @ Kynatium Labs · Dhaka, Bangladesh

| Channel   | Link                                                                                     |
| --------- | ----------------------------------------------------------------------------------------- |
| Email     | <abdullahaljehan659@gmail.com>                                                           |
| GitHub    | [@abdullahaljehan-me](https://github.com/abdullahaljehan-me)                             |
| LinkedIn  | [Abdullah Al Jehan](https://www.linkedin.com/in/abdullahaljehan-me)                      |
| Portfolio | [abdullahaljehan.vercel.app](https://abdullahaljehan.vercel.app) |

---

Built from code and curiosity · Abdullah Al Jehan © 2026
