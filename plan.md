# plan.md — HACK++ATHON Premium Arcade Landing Page

## 1) Objectives
- Deliver a **premium, cinematic, scroll-driven** one-page landing experience for **HACK++ATHON** (not a gaming site; arcade = innovation).
- Implement the **required 10-section narrative** + footer with seamless transitions and high perceived quality.
- Use **strict logo-derived palette** (deep dark + neon blue/purple/magenta/yellow only) and modern typography (pixel font only for micro-labels).
- Keep all editable copy/data centralized in **`content.js`** (dates/venue/prizes/tracks/FAQ/sponsors/links).
- Ensure CTA (“**INSERT COIN TO BEGIN**”) opens **https://unstop.com/** (easy to swap).

## 2) Implementation Steps

### Phase 1 — Core Motion + Visual System POC (isolation)
**Goal:** Prove the hardest part works: **smooth scroll narrative + parallax + particles + performance** with the palette.

**User stories (POC)**
1. As a visitor, I see an amazing hero scene in <5 seconds with clear CTA.
2. As a visitor, scrolling subtly moves the “camera” (parallax/zoom) without jank.
3. As a visitor, I see ambient particles/light beams that feel premium (not noisy).
4. As a visitor, hover interactions feel responsive (magnetic buttons, glow).
5. As a visitor on mobile, animations remain smooth and readable.

**Steps**
- Websearch quick best-practices for: `GSAP ScrollTrigger + React`, `framer-motion vs gsap for scroll`, `canvas particle perf`.
- Create a minimal route/page with:
  - Hero scene scaffold (layers: background grid + mid neon haze + foreground machine silhouette/image placeholder).
  - Canvas/WebGL-lite **particle field** (canvas 2D is fine) + optional “digital rain” layer.
  - **Scroll-driven** transforms (GSAP ScrollTrigger or framer-motion useScroll): parallax + slight rotate/scale + light pulse.
  - **Magnetic CTA button** + neon flicker micro-animation.
- Performance acceptance for POC:
  - Target 60fps desktop, 40–60fps mobile; reduced-motion fallback.
- Lock palette tokens (CSS variables) from logo-derived colors.

**Exit criteria**
- Scroll animation pipeline stable; no layout shift; hero renders correctly across breakpoints.

---

### Phase 2 — V1 App Development (full landing page)
**User stories (V1)**
1. As a visitor, I understand what HACK++ATHON is, where/when it happens, and how to join.
2. As a visitor, I can explore tracks as “challenge cabinets” and quickly grasp each.
3. As a visitor, I can scan prizes instantly and feel the “achievement unlock” vibe.
4. As a visitor, I can reach the final CTA climax and register via external link.
5. As a visitor, I can browse FAQ terminals without losing my scroll position.

**Build**
- Project setup: React + Tailwind (and/or shadcn), framer-motion + GSAP (choose one as primary; GSAP for ScrollTrigger).
- Add `src/content/content.js`:
  - Name/logo URL, date (4–5 Sept 2026), venue (VCET Campus, Vasai, MH, India), tracks (4), prizes list, timeline labels (TBA), registerLink (unstop), placeholders (sponsors, stats, FAQ, socials).
- Create page sections as components with shared “scene” continuity:
  1. **Hero**: arcade hall depth, holographic grid, volumetric light feel, particles, CTA.
  2. **Story**: retro-to-future transformation (glitch → hologram) using text + subtle shader-like overlays.
  3. **Challenge Zones**: 4 cabinets/cards with distinct glow; hover reveals; track icons.
  4. **Timeline**: “arcade levels” progress rail; scroll-activate each level; dates TBA.
  5. **Rewards**: glass hologram trophy cards + prize amounts (₹50k/₹25k/₹10k/₹5k/₹5k) + perk chips.
  6. **Why Participate**: power-up collectibles grid; hover animations.
  7. **Previous Highlights**: leaderboard + counters + placeholder winners; animated count-up.
  8. **Sponsors**: holographic capsules placeholders; hover shine.
  9. **FAQ**: terminal accordions with scanline/glow; keyboard accessibility.
  10. **Final CTA**: brightest “cabinet powers on”; “INSERT COIN TO BEGIN”; opens registerLink.
  - **Footer**: minimal links + placeholders.
- Motion system:
  - Shared scroll timeline that blends sections (cross-fades, light color shifts, parallax continuity).
  - Reusable effects: neon glow, holographic shimmer, flicker (subtle), glass reflections.
- Accessibility & resilience:
  - `prefers-reduced-motion` disables heavy effects.
  - High contrast for readability, focus states, aria labels.
  - Mobile-first layout, touch-friendly hit targets.

**Conclude Phase 2**
- Run `testing_agent_v3` for 1 full pass: layout, scroll, links, mobile responsiveness, reduced-motion.

---

### Phase 3 — Polish + Production Hardening
**User stories (Polish)**
1. As a visitor, I experience smooth transitions that feel like one continuous world.
2. As a visitor, hover/scroll effects never obscure content readability.
3. As a visitor, page loads fast and doesn’t spike CPU.
4. As an organizer, I can edit all content in one file without hunting components.
5. As a visitor, the register CTA is always easy to find and works reliably.

**Steps**
- Visual polish: refine lighting gradients, section handoffs, consistent depth cues.
- Performance: lazy-load heavy assets; reduce particle count on low-end; compress images.
- Add micro-interactions: cursor glow, button press feedback, subtle SFX-ready hooks (muted by default).
- Content tooling: ensure every text/value is sourced from `content.js`.

**Conclude Phase 3**
- Run `testing_agent_v3` again: regression, Lighthouse basics, cross-browser sanity.

---

### Phase 4 — Optional Enhancements (only if requested)
**User stories (Optional)**
1. As a visitor, I can switch between “Neon / Mono” contrast modes (still within palette).
2. As a visitor, I can share the event with prefilled social cards.
3. As an organizer, I can swap Unstop link and sponsor logos quickly.
4. As a visitor, I can view a mini schedule modal when timeline becomes available.
5. As a visitor, I get a subtle toast confirming the external link opened.

**Steps**
- Add sponsor logo upload guidelines (static assets), OpenGraph meta, optional audio toggle.
- Add “Add to Calendar” links (Google/ICS) if user provides final schedule.

## 3) Next Actions
- Confirm implementation choices:
  - Primary motion library: **GSAP ScrollTrigger** (recommended) vs framer-motion only.
  - Hosting target (Vercel/Netlify) and asset handling.
- Extract final palette hexes from the logo and freeze CSS variables.
- Begin Phase 1 POC (hero + scroll pipeline + particles) and validate performance.

## 4) Success Criteria
- Meets required 10-section structure with **cinematic continuity** (no “blocky” feel).
- CTA button text exactly **“INSERT COIN TO BEGIN”** and opens **https://unstop.com/**.
- Event details correct: **4–5 Sept 2026**, **VCET Campus, Vasai, Maharashtra, India**; prizes correct.
- All editable data centralized in **`content.js`**; swapping link/content requires no component edits.
- Smooth motion on desktop/mobile + reduced-motion support; no major accessibility issues.
