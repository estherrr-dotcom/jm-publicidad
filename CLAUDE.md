# CLAUDE.md — JM Publicidad Website Project

## Project Overview

**Client:** JM Publicidad  
**Project Type:** Advertising & Print Production Agency Website  
**Design Source:** Figma (connected via MCP)  
**Language:** Bilingual — English (EN) and Spanish (ES) throughout  
**Goal:** Translate Figma designs into a production-ready, bilingual website with pixel-perfect fidelity and strict brand compliance.

---

## MCP Configuration

### Figma MCP
This project uses the **Figma MCP server** to read design files directly.

- **MCP Server:** `https://mcp.figma.com/mcp`
- **Figma File:** [JM Publicidad — AIXD Design File](https://www.figma.com/design/pPko0k7hpCOVHwUGa3Dr1Z/JM_Publicidad----AIXD-design-file?node-id=1-6&t=vaQAqgspbj2uQCdT-1)
- **File ID:** `pPko0k7hpCOVHwUGa3Dr1Z`
- **Entry Node:** `1-6`

**Workflow — always follow this order:**
1. Use the Figma MCP to inspect the relevant frame/component **before writing any code**.
2. Confirm colours, spacing, and typography against the brand tokens defined below.
3. Match component and layer naming from Figma as closely as possible.
4. Never hardcode a value that contradicts the Figma file or the brand token table.

---

## Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS v3
- **Package Manager:** npm
- **Backend / Forms:** Supabase (enquiries table)
- **Deployment:** [confirm — e.g. Vercel / Netlify]

---

## Design System

### Colour Palette

The six-token palette is the **only** approved colour set. No Tailwind default utilities (e.g. `bg-blue-500`, `text-gray-400`) may be used unless explicitly mapped to a brand token in `tailwind.config`.

| Token | Hex | Role |
|---|---|---|
| `white` | `#ffffff` | Primary background — 60 % rule |
| `off-white` | `#f7f8f6` | Secondary background / section alternates |
| `forest-dark` | `#1e211b` | Primary text, footers, dark surfaces — 30 % rule |
| `sage-green` | `#79866d` | Accents, CTAs, active states — 10 % rule |
| `sage-mid` | `#aeb6a7` | Borders, dividers, secondary UI elements |
| `sage-light` | `#d6dad3` | Hover fills, disabled states, subtle backgrounds |

**60 / 30 / 10 rule:**
- **60 %** — White (`#ffffff`) or Off-White (`#f7f8f6`) for backgrounds and surfaces.
- **30 %** — Forest Dark (`#1e211b`) for body text, headings, and structural elements.
- **10 %** — Sage Green (`#79866d`) for primary CTAs and accents only.

**Recommended Tailwind config mapping:**
```js
// tailwind.config.js — extend theme.colors with brand tokens
colors: {
  white:          '#ffffff',
  'off-white':    '#f7f8f6',
  'forest-dark':  '#1e211b',
  'sage-green':   '#79866d',
  'sage-mid':     '#aeb6a7',
  'sage-light':   '#d6dad3',
}
```

### Typography

| Role | Typeface | Weights |
|---|---|---|
| Headings | **Inter** | Bold 700, ExtraBold 800 |
| Body / UI | **DM Sans** | Regular 400, Medium 500 |

- No third typeface is ever introduced — not system fonts, not display fonts.
- Both fonts are imported from Google Fonts or the project font config.
- Inter is used exclusively for headings (`h1`–`h4`).
- DM Sans is used for all body copy, labels, buttons, and UI text.

### Logo Usage

| Background | Approved variant |
|---|---|
| Sage Green (`#79866d`) | White logo |
| Dark or photographic | White logo |
| White or Off-White | Forest Dark logo |

The logo is never recoloured outside these three applications, and never distorted, stretched, or placed on an unapproved background.

---

## Project Structure

```
/
├── public/                 # Static assets (images, fonts, icons)
├── src/
│   ├── components/         # Reusable UI components (CtaButton, Card, Nav…)
│   ├── sections/           # Page sections (Hero, Services, About…)
│   ├── pages/              # Route pages
│   ├── styles/             # Global styles and Tailwind base
│   ├── lib/                # Supabase client and utilities
│   └── assets/             # SVGs, images used in code
├── .env.example            # Required environment variables (no secrets)
├── CLAUDE.md               # This file
└── tailwind.config.js      # Brand token mappings
```

---

## Pages & Sections

### Home Page
- [ ] Hero / Banner
- [ ] Services Overview
- [ ] About / Who We Are
- [ ] Portfolio / Work Showcase
- [ ] Clients / Logo Strip
- [ ] Testimonials
- [ ] Contact / CTA
- [ ] Footer

### Additional Pages
- [ ] Services (detail)
- [ ] Portfolio / Case Studies
- [ ] About
- [ ] Contact & Quote Form

---

## Bilingual Copy

Every piece of written content is delivered in **both English and Spanish (Castilian)**. Structure all copy outputs as:

```
### EN
Headline: …
Body: …
CTA: …

### ES
Titular: …
Cuerpo: …
CTA: …
```

- Castilian second-person singular (`tú / tus`) is the default Spanish register.
- Copy tone: confident, precise, professional — never playful, never stiff.
- No emojis, informal language, or exclamation marks in body copy.

### User Personas
All copy must address one of three defined personas. State the target persona at the top of every copy output.

1. **Marketing Manager** — mid-to-senior professional at a Spanish SME or agency, seeking a reliable production partner for print and campaign materials.
2. **SME Owner / Entrepreneur** — business owner looking for end-to-end advertising and print production without managing multiple suppliers.
3. **Existing JM Client** — returning client seeking to extend or repeat an engagement; values reliability and established working relationship.

---

## Component Guidelines

- **Always check Figma first** — inspect the frame via MCP before writing a component.
- Every component is written in **TypeScript** with an explicit `interface` or `type` for props.
- All Tailwind classes must resolve to brand tokens — annotate non-obvious mappings in a comment.
- All interactive elements must have `:hover`, `:focus`, and `:disabled` states using approved tokens:
  - Hover background → `sage-light` (`#d6dad3`) for secondary, `forest-dark` (`#1e211b`) for CTAs.
  - Focus ring → `sage-green` (`#79866d`).
  - Disabled → `opacity-50` + `cursor-not-allowed`.
- Animations: subtle only — fade-in, slide-up on scroll, `transition-colors duration-200`. No jarring motion.
- Semantic HTML is required: `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, etc.
- ARIA labels required on all icon-only buttons and form fields without visible labels.

---

## Supabase / Forms

- The contact and quote form writes to the **Supabase `enquiries` table**.
- Supabase credentials are **always** accessed via environment variables:

```ts
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
```

- Every code output that uses Supabase must include a `.env.example` snippet.
- Never hardcode credentials, API keys, or Supabase URLs anywhere in source code.

`.env.example`:
```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## Assets & Images

- Export images from Figma at **2x** for retina displays.
- Use **WebP** for photos, **SVG** for icons and the logo.
- Place exports in `/public/` (for direct URL reference) or `/src/assets/` (for imports).
- `alt` text is required on every `<img>` — descriptive, not decorative (unless genuinely decorative, then `alt=""`).

---

## Code Standards

- **No inline styles** — Tailwind utility classes only.
- **No Tailwind default palette colours** unless mapped in `tailwind.config.js` to a brand token.
- **No third typeface** — Inter and DM Sans only.
- **No lorem ipsum** — use real copy that reflects an advertising/print production agency.
- **No hardcoded secrets** — all credentials via `import.meta.env`.
- Mobile-first responsive design: build from smallest breakpoint up.

---

## Claude Code Behaviour

When working on this project, Claude must:

1. **Inspect Figma first** — use the Figma MCP to read the relevant frame before writing any code or copy.
2. **Honour the brand token table** — every colour, font, and spacing decision must map to an approved token.
3. **Apply the 60/30/10 rule** on every surface.
4. **Deliver bilingual copy** — every written string ships in both EN and ES, labelled and complete.
5. **Identify the persona** — state which user persona any copy or component serves.
6. **Keep secrets out of code** — use `import.meta.env` for all credentials; include `.env.example`.
7. **Ask before inventing** — if a component state, layout pattern, or copy context is not defined in Figma or this file, ask before proceeding.
8. **Stay in scope** — only touch files directly relevant to the current task.

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

*Last updated: May 2026*
