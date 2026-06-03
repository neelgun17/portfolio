# DESIGN.md — Neel Gundlapally Portfolio

> Source of truth for the visual system. When generating or editing UI, follow this document.
> Direction: **developer-tool minimal** (Linear / Vercel lineage) with a thin layer of
> **signature expressive-type motion**. Dense, sharp, high-contrast, restrained — not flashy.

---

## 1. Visual Theme & Atmosphere

A confident, engineering-forward personal site. Calm neutral canvas, one decisive accent,
sharp typographic hierarchy, and generous-but-intentional spacing. Motion is rare and
purposeful: it should feel like craft, never decoration. Every screen earns its space with
real content — no empty viewports.

Keywords: precise, technical, modern, quiet confidence.

## 2. Color Palette & Roles

Single accent, full neutral ramp. Defined as Tailwind tokens in `tailwind.config.cjs`.

| Role | Light | Dark | Token |
| --- | --- | --- | --- |
| Canvas (page bg) | `neutral-50` #fafafa | `neutral-950` #0a0a0a | `bg-canvas` |
| Surface (cards) | `white` #ffffff | `neutral-900` #171717 | `bg-surface` |
| Surface raised (hover) | `neutral-50` | `neutral-800/60` | — |
| Text primary | `neutral-900` | `neutral-100` | — |
| Text secondary | `neutral-500` | `neutral-400` | — |
| Text muted / meta | `neutral-400` | `neutral-500` | — |
| Border | `neutral-200` | `neutral-800` | `border-line` |
| Accent | `orange-600` #EA580C | `orange-400` #FB923C (brighter for dark) | `accent` / `accent-bright` |
| Accent soft (fills) | `accent/10` | `accent/15` | — |

> Accent is driven by CSS variables (`--accent`, `--accent-bright`) defined in `Layout.astro`,
> so the entire identity is a one-line swap. Tailwind tokens reference them via `rgb(var(--accent) / <alpha>)`.

**Rules**
- Exactly **one** accent. Use it for: eyebrow labels, links/hover, focus rings, active nav, key CTA.
- Never use accent for large fills or body text. It is a highlight, not a background.
- Body text is always neutral, never pure black on pure white (use 900/50, not 1000/100%).

## 3. Typography

| Family | Use | Token |
| --- | --- | --- |
| **Inter Variable** | Display + body | `font-sans` |
| **JetBrains Mono** | Eyebrows, labels, meta, tags, code | `font-mono` |

**Type scale & intent**
- Display (hero name): `text-6xl`–`text-8xl`, `font-black`, `tracking-tighter`.
- Section heading: `text-3xl`–`text-5xl`, `font-bold`, `tracking-tight`.
- Eyebrow label: `font-mono text-xs uppercase tracking-widest text-accent` — every section starts with one.
- Body: `text-base`–`text-lg`, `leading-relaxed`, secondary neutral.
- Meta / tags: `font-mono text-xs`–`text-sm`, muted neutral.

**Rules**
- Tighten tracking as size grows (`tracking-tighter` for display, `tracking-tight` for headings).
- Eyebrow → heading → body is the repeating hierarchy unit for every section.
- Variable-weight animation is allowed but content must render at a stable base weight first.

## 4. Component Patterns

- **Eyebrow label** — mono, xs, uppercase, `tracking-widest`, accent. Pair with a short index like `01 / About`.
- **Section** — `<section>` with `id`, eyebrow, heading, then content. Vertical rhythm via `py`, NOT `min-h-screen`.
- **Card** — `rounded-xl border border-line bg-surface p-6`; hover: `border-accent/40` + slight `-translate-y-0.5` + subtle shadow. 200ms ease-out.
- **Tag pill** — `rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-xs text-secondary`.
- **Button (primary)** — accent bg, white text, `rounded-lg px-5 py-2.5 text-sm font-medium`, hover darkens.
- **Button (ghost)** — border-line, text primary, hover border-accent + text-accent.
- **Link (inline)** — text primary, hover accent, animated underline acceptable.

## 5. Layout Principles

- Container: `max-w-5xl` for text-led sections, `max-w-6xl` for grids. Centered, `px-6`.
- Spacing rhythm: multiples of 4/8. Section padding `py-24 md:py-32`. Intra-section gaps `gap-6`/`gap-8`.
- Grids: projects `md:grid-cols-2`; skills/experience use 12-col mental model, collapse to 1 col on mobile.
- **No section may be mostly empty.** If a section can't justify a full viewport of content, it shouldn't take one.

## 6. Depth & Elevation

Mostly flat. Depth comes from **borders and subtle background shifts**, not heavy shadows.
- Resting cards: border only.
- Hover: border-accent/40 + `shadow-sm shadow-accent/5` + 2px lift.
- Sticky nav: `backdrop-blur-md` + translucent canvas + bottom border.

## 7. Motion

Signature, unique (the site's identity):
- **Kinetic variable-type hero** — the name (real, visible text) swells in weight/scale/slant toward the cursor.
- **Star constellations** drifting behind the name (Big Dipper, Orion, Cassiopeia + a "Hook 'em" easter egg); lines light up in accent near the cursor.
- **Nav text-scramble** on hover (Navbar).
- **Film grain** overlay + soft accent glow for tactile warmth.
- **Variable-font weight** on About — content visible first, weight follows cursor as enhancement.

Cut (generic / gimmicky):
- Magnetic button, breathing CTA weight oscillation, per-card typewriter.

Defaults: enter animations `fade-in` / `slide-up` 0.5–0.6s ease-out, on-scroll via IntersectionObserver.
Hover transitions 150–200ms. **Always** honor `prefers-reduced-motion: reduce` — render final state, no motion.

## 8. Responsive Behavior

Breakpoints: 480 / 640 / 768 / 1024 / 1280. Test at 375, 768, 1440.
- Display type steps down hard on mobile (`text-5xl` not `text-8xl`).
- Grids collapse to single column < md.
- Touch: no hover-dependent content; all info visible without hover.

## 9. Do's and Don'ts

**Do**
- Lead every section with eyebrow → heading → content.
- Keep one accent; let neutrals carry the page.
- Make all content visible without interaction; animation is enhancement only.
- Favor density and real content over whitespace theater.

**Don't**
- Don't stack multiple flashy animations in one viewport.
- Don't gate content behind hover/scroll JS.
- Don't use `min-h-screen` to manufacture drama.
- Don't introduce a second accent color or heavy drop shadows.

## 10. Agent Prompt Guide

> Build a developer-tool-minimal section: mono accent eyebrow label with index, bold tight-tracked
> heading, neutral body. Container `max-w-5xl px-6`, padding `py-24 md:py-32`. Cards are bordered,
> flat, lift slightly on hover. One blue accent (#2563EB / #3B82F6 dark). Inter Variable + JetBrains
> Mono. Content always visible; motion subtle and reduced-motion-safe.
