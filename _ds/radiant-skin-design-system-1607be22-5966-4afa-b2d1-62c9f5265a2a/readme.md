# Radiant Skin Design System

Design system for **Radiant Skin & Cosmetology Clinic** ("Glow Naturally") — a skin, hair and aesthetic-care clinic in Nanded, Pune, Maharashtra. Built for a modern-luxury clinic website: warm gold/ivory/charcoal palette, serif+sans type pairing, layered 3D-styled motion (orbs, glass cards, hover tilt).

## Source material
No codebase, Figma file, or business-card image was attached — everything here is built from a single detailed written spec pasted into chat (brand identity table, color tokens, type scale, page-section list, motion table, placeholder-data warnings, responsive breakpoints). A referenced live mockup link (`https://claude.ai/artifact/YWKSeHTvfFZ6PzM7h8P2UP`) resolved to an inaccessible shell page — not used as a source. Because no component library or screen source exists, this system authors a standard primitive set sized to the spec's needs (see "Intentional additions" below), and the UI kit is an original build to the written spec, not a copy of existing screen code.

## Content fundamentals
- **Voice**: warm, reassuring, clinical-but-not-cold. Second person ("you", "your skin") — never "we" as the subject of a sentence when talking about outcomes. E.g. "Reveal skin that glows naturally," not "We help your skin glow."
- **Casing**: sentence case for body copy and buttons ("Book Consultation" is title case only because it's a CTA label — most CTAs in the spec use Title Case for buttons, sentence case for headlines and descriptions).
- **Eyebrow labels**: short, uppercase, letter-spaced (e.g. "SKIN · HAIR · AESTHETIC CARE", "YOUR GLOW JOURNEY") — always 2-4 words, separated by a middle dot when listing categories.
- **Headlines**: short declarative phrases with one italicized gold accent word for emphasis ("Glow *Naturally*", "skin that *glows naturally*") — never more than one accent per headline.
- **Body copy**: plain, concrete, benefit-first sentences. No jargon, no superlatives stacked together. "Deep hydration and gentle exfoliation for instantly refreshed skin," not "The ultimate revolutionary hydration experience."
- **CTAs**: verb-first, 2-3 words ("Book Consultation", "Visit the Clinic", "Get Directions", "Call Now", "Learn more →").
- **No emoji.** The only decorative glyphs are the gold quote mark on testimonials and a check/check-circle icon next to trust points — both from the icon set, not emoji or unicode symbols.
- **Numbers presented as facts**, not hype: stat labels are plain nouns ("Happy Clients", "Years of Excellence", "Average Rating") with no exclamation points.

## Visual foundations
- **Color**: warm, low-saturation luxury palette — deep ink/charcoal (`--ink #1B140F`, `--ink-deep #120D09`) paired with ivory/cream backgrounds (`--cream`, `--cream-2`) and a single gold accent family (`--gold`, `--gold-light`, `--gold-deep`). Max two background tones per section: cream (light) or ink (dark) — no third neutral competing for attention. Gold never appears as a flat fill on large areas; it's reserved for CTAs, icon chips, and accents.
- **Type**: Playfair Display (serif, display) for all headlines with italic used sparingly for one accent word per headline; Manrope (sans) for everything else, from body copy to buttons to captions. No system fonts.
- **Gradients**: one gradient family, `linear-gradient(135deg, gold-light → gold → gold-deep)`, used only on buttons, icon chips, and accent shapes — never as a full-bleed section background. A radial variant (`--gradient-orb`) creates the glossy hero sphere.
- **Backgrounds**: flat color fields (cream or ink), no photography, no repeating patterns or textures. The only "image-like" elements are abstract gradient blobs (blurred radial gradients) and the gradient orb — both decorative, not photographic. No stock photography by design intent (see readme intro).
- **Shadows**: soft, warm-toned, low-contrast. Cards use a two-layer shadow (`--shadow-card`: barely-there 1px + soft 12-28px spread) that deepens on hover (`--shadow-card-hover`). CTAs get a colored glow shadow (`--shadow-gold-glow`) rather than a neutral drop shadow. Glass elements (floating hero cards) use an inset highlight (`--shadow-inset-glass`) to fake glossiness, no photographic glass texture.
- **Corners**: generous rounding — 8px on small controls, 14px on standard cards, 22px on large panels/hero visuals, full pill (999px) on every button and badge-style chip. Nothing is sharp-cornered except the nav/footer bands themselves.
- **Borders**: hairline only (`rgba(ink,0.10)` light / `rgba(cream,0.12)` dark) on inputs and dividers — never a colored or thick border. No left-border-accent cards.
- **Transparency/blur**: `backdrop-filter: blur` used exactly once as a motif — the floating "glass" service chips in the hero — to sell depth without photography. Not used elsewhere (no frosted nav, no blurred modals).
- **Motion**: everything is continuous, ambient, and slow — never bouncy or springy. Linear timing for anything that loops forever (orb spin, marquee, ring); `ease-out`-style easing only for direct hover/press feedback. Typical durations: 160ms hover, 320ms card lift/tilt, 5-40s for ambient loops (float, spin, marquee, blob drift).
- **Hover states**: cards lift and deepen their shadow (`--shadow-card` → `--shadow-card-hover`); service cards additionally tilt in 3D toward the cursor (`perspective()` + `rotateX/rotateY`); links darken from `--gold` to `--gold-deep`.
- **Press states**: buttons scale to 0.97 — no color change, just a subtle shrink.
- **Imagery color vibe**: warm gold-on-ivory throughout — no cool tones, no black-and-white, no grain/film effects. All accents lean warm.

## Iconography
No icon assets were provided in the source spec — line icons are sourced from **Lucide** via CDN (`https://unpkg.com/lucide@latest`) as a stand-in; this is a flagged substitution, not a brand-specified system. Icons render inside gold-gradient rounded chips (`IconChip`, `ServiceCard`) at a consistent stroke weight. No emoji, no unicode-character icons, no icon font. If the clinic has its own icon or illustration set, swap the Lucide names for real assets and drop them in `assets/`.

## Contents
- `styles.css` — root stylesheet, `@import`s everything in `tokens/`
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css` — design tokens
- `components/` — reusable primitives (`core/`, `forms/`, `data/`, `navigation/`)
- `ui_kits/website/` — clinic marketing website recreation (`index.html` + section JSX)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups)
- `assets/` — icon set (see Iconography)
- `thumbnail.html` — project tile
- `SKILL.md` — portable skill definition for Claude Code

## Placeholder data — do not treat as real
Per the source spec, these values are explicitly flagged as placeholders, not real business data: `500+` happy clients, years of excellence count, `4.9★` rating, clinic hours (`Mon–Sat 10:00 AM–8:00 PM`), all 3 testimonial quotes/names, and social links (styled, no working `href`). They appear in the UI kit for layout purposes only.

## Intentional additions
No component source was provided, so the following standard primitives were authored to cover the spec's needs: Button, Badge (eyebrow label), IconChip (gradient icon container), Input, Textarea, StatCard, TestimonialCard, TimelineStep, ServiceCard, NavBar. Icons are sourced from Lucide (CDN) as a stand-in — no icon set was specified in the source (see Iconography).
