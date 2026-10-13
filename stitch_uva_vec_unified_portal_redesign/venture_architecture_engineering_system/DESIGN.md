---
name: Venture Architecture & Engineering System
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e1e2ec'
  on-surface-variant: '#bec8d2'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#88929b'
  outline-variant: '#3e4850'
  surface-tint: '#89ceff'
  primary: '#89ceff'
  on-primary: '#00344d'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#006591'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#8d9db5'
  on-tertiary-container: '#243449'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353d'
  slate-surface: '#0f172a'
  slate-elevated: '#1e293b'
  border-glass: rgba(255, 255, 255, 0.08)
  border-glass-bright: rgba(255, 255, 255, 0.16)
  text-primary: '#f8fafc'
  text-muted: '#94a3b8'
  signal-success: '#10b981'
  signal-warning: '#f59e0b'
  signal-danger: '#ef4444'
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  index-tag:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-section: 6rem
---

## Brand & Style

This design system establishes an authoritative, high-precision visual standard for enterprise venture infrastructure and AI-native institutional systems. Inspired by the tactical restraint of Palantir, the typographic clarity of Linear, and the modern engineering polish of Vercel, the system avoids generic agency fluff in favor of an industrial, executive dossier format.

The visual mood is hyper-competent, surgical, and structured. It evokes technical certainty through dark graphite/slate foundations, high-contrast foreground typography, precise micro-details, and electric cyan/azure accents that act as controlled signal lights within an otherwise disciplined technical substrate.

Key aesthetics include:
- **Architectural Framework:** Heavy reliance on numbered indexing (`01 // 11`, `Tier 01`), dual forward slashes, and structural grid alignments that evoke engineering manifests and classified technical dossiers.
- **Controlled Luminescence:** Deep matte slate substrates balanced against razor-thin glass borders (`rgba(255, 255, 255, 0.08)` to `0.12`) and selective glow accents.
- **Executive Polish:** Unwavering typography hierarchy with tabular figures, geometric uppercase labels, and restrained functional motion.

## Colors

The palette operates in a default high-contrast dark environment. Colors function semantically as states, data telemetry, and tactical triggers rather than ornamental wash.

- **Primary Canvas & Surfaces:** The root backdrop is `#0a0d14` (Deep Void), layered with `#0f172a` (Surface Slate) and `#1e293b` (Elevated Container). This gradation guarantees visual depth without resorting to bright surfaces.
- **Accent Radiance (`#0ea5e9`, `#38bdf8`):** Electric Cyan and Azure serve as the decisive conversion triggers and live status indicators. They should be applied sparingly—reserving full saturation for interactive anchors, progress gauges, and system status markers.
- **Border Architecture:** Never use solid flat gray borders. All element delineations are rendered through translucent white tokens (`rgba(255, 255, 255, 0.08)` baseline, scaling to `0.16` on hover or focused states).
- **Foreground Contrast:** Main display typography utilizes `#f8fafc` (Near 100% white) to guarantee immediate scanability against slate tones, while metadata, section numbers, and microcopy utilize `#94a3b8`.

## Typography

The typography leverages three specialized typefaces working in unison to create an authoritative, engineered feel:

1. **Space Grotesk (Headlines):** Imparts brutalist precision and geometric punch. Used for major tier callouts, narrative statements, and impactful section titles.
2. **Inter (Body):** The functional workhorse. Tuned for maximum legibility on deep graphite screens across long-form theses, package descriptions, and analytical comparisons.
3. **JetBrains Mono (Metadata & Labels):** Provides an institutional, machine-grade cadence for section chaptering (`01 // 11`), ticket prices, progress indicators, status tags, and action triggers (`[Deploy Engine ->]`).

All metadata tags, category labels, and step indices must be set in uppercase with extended letter tracking (`letterSpacing: 0.08em` to `0.1em`).

## Layout & Spacing

Layouts follow a structured 12-column grid system bounded by maximum container widths of `1280px` for general content and `1440px` for high-density command consoles or tier matrixes.

- **Rhythm & Cadence:** Each major section is framed like an indexed dossier chapter. Use `space-section` (`6rem`) between sequential modules on desktop, compressing to `3.5rem` on mobile screens.
- **Micro-alignment:** Internal component padding scales strictly by factors of 4px/8px. Cards enforce `space-lg` (`1.5rem`) internal padding on desktop and `space-md` (`1rem`) on small viewports.
- **Responsive Behavior:** 
  - **Mobile (< 768px):** Single-column layout. Structural multi-step items reflow vertically with explicit numeric breadcrumbs (`01`, `02`, etc.) pinned above the content.
  - **Tablet (768px - 1024px):** 2-column split configurations for tier comparisons and matrix summaries.
  - **Desktop (> 1024px):** Full multi-column grids (4-column packages, 3-column platform architectures) with continuous glass dividers.

## Elevation & Depth

Depth in this system is conveyed through structural translucency and fine border articulation rather than muddy drop shadows.

- **Glass Surface Paneling:** Surface containers use background fills of `rgba(15, 23, 42, 0.75)` combined with a hardware-accelerated `backdrop-filter: blur(16px)` and perimeter strokes of `1px solid rgba(255, 255, 255, 0.08)`.
- **Accent Glare & Glow:** High-priority cards (such as the primary conversion package or active engine) utilize subtle, ambient cyan radial glows positioned behind the top border: `box-shadow: 0 0 24px -6px rgba(14, 165, 233, 0.25)`.
- **Layering Model:**
  - `Level 0 (Canvas):` Base `#0a0d14` with faint tactical grid overlay (1px lines every 48px in `rgba(255, 255, 255, 0.02)`).
  - `Level 1 (Cards & Paneling):` `#0f172a` with glass stroke.
  - `Level 2 (Popovers, Modals & Floating Action Triggers):` `#1e293b` with `rgba(255, 255, 255, 0.16)` border stroke and `box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.6)`.

## Shapes

The shape vocabulary emphasizes architectural discipline and engineered rigor. Roundedness is kept intentionally subtle (`Level 1 - Soft`):

- **Standard Components:** `rounded-sm` (4px) to `rounded-md` (6px) for cards, panels, and input fields.
- **Action Triggers & CTAs:** Sharp, machined corners (4px max). Avoid pill shapes; elements must feel like precision instruments, hardware interfaces, or terminal switches.
- **Badges & Taxonomy Pills:** Subtle 4px radius with monospace typographic alignment.
- **Dividers:** Clean hairline borders (`1px`) spanning exact grid alignments.

## Components

### Buttons & Interactive Links
- **Primary CTA (`[ Claim My Free 15 Minutes ]`, `[ Initiate Partnership ]`):** High-density cyan button (`#0ea5e9`) with solid slate-dark text (`#0a0d14`), uppercase monospace weighting (`JetBrains Mono`, 12px, weight 600), 4px radius, padded with `12px 24px`. Hover brings a luminescence shift to `#38bdf8` and an ambient cyan shadow (`0 0 16px rgba(14, 165, 233, 0.4)`).
- **Terminal & Engine Action Links (`[Access Terminal ->]`):** Transparent background with `border: 1px solid rgba(255, 255, 255, 0.12)`, text in `#f8fafc`. On hover, the border shifts to `#0ea5e9`, and the directional arrow translates 4px horizontally via ease-out transition.

### Cards & Dossier Modules
- **Standard Card:** Constructed with `#0f172a` at 80% opacity, `backdrop-filter: blur(12px)`, and `border: 1px solid rgba(255, 255, 255, 0.08)`. Must feature an explicit monospaced supertitle (e.g., `Tier 01 Starting point` or `01 // ARCHITECTURE`).
- **Highlight Card (Tier 02 / Recommended):** Border highlighted in `rgba(14, 165, 233, 0.4)` with an electric cyan top border accent (`2px solid #0ea5e9`).

### Badges & Category Tags
- Rendered in uppercase `JetBrains Mono` at 11px.
- Background: `rgba(14, 165, 233, 0.1)`, text: `#38bdf8`, border: `1px solid rgba(14, 165, 233, 0.25)`.
- Live status indicators feature a pulsating green dot (`#10b981`) adjacent to text.

### Form Inputs & Terminal Inputs
- Background: `#0a0d14`, border: `1px solid rgba(255, 255, 255, 0.1)`.
- Text: `#f8fafc` in `Inter`, placeholder text in `#64748b`. Focus state triggers a clean `1px solid #0ea5e9` border and a zero-blur outer ring (`outline: 1px solid rgba(14, 165, 233, 0.3)`).

### Comparison & Diagnostic Gauges
- **Positive Matrix (`UVA VEC`):** Slate-900 surface with electric cyan checkmarks and pure white typography.
- **Negative Matrix (`Traditional agencies`):** De-emphasized `#0a0d14` surface, muted text (`#64748b`), and faint crimson crosses (`#ef4444`).
- **Progress Line Metric:** Custom 2px linear bar using `#1e293b` as track and `#0ea5e9` for fill progress.