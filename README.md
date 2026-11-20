# Abdullah Al Jehan — Personal Portfolio

Portfolio of Abdullah Al Jehan, EEE Undergraduate at Ahsanullah University of Science and Technology (AUST) and Founding Advisor at Kynatium Labs. Focused on Embedded Systems, IoT, VLSI & Semiconductor Technology, and Robotics.

## Architecture

- **Stack**: Vanilla HTML5, CSS3, JavaScript (ES2022).
- **Design System**: Authoritative charcoal & linen palette (`BRAND.md`), Newsreader and IBM Plex Mono typography.
- **Dependencies**: Zero build tools, zero npm packages, zero runtime frameworks.
- **Hosting**: Deployed on [Vercel](https://abdullahaljehan.vercel.app/).
- **Form Backend**: Web3Forms / FormSubmit endpoint.

## Local Execution

Run any local HTTP static server from the repository root:

```bash
# Python 3
python3 -m http.server 8000

# Or via Node http-server / npx serve (optional)
npx serve .
```

Navigate to `http://localhost:8000/` in any modern web browser.

## Repository Structure

```
├── index.html        # Semantic single-page portfolio layout
├── style.css         # Custom property design tokens & styling
├── script.js         # Navigation, accessible tabs, CLI shell & modal
├── BRAND.md          # Authoritative brand, identity, & design spec
├── assets/           # Certificates, blog media, profile photo, and resume
└── README.md         # Repository documentation
```

## License

The code implementation is licensed under the [MIT License](LICENSE). Personal branding, text content, academic records, and personal media assets are reserved and not licensed for commercial reproduction or reuse.
