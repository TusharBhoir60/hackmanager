# plan.md — HACK++ATHON Premium Arcade Landing Page (Updated)

## 1) Objectives
- Deliver a **premium, cinematic, scroll-driven** one-page landing experience for **HACK++ATHON** (not a gaming site; arcade = innovation).
- Implement the **required 10-section narrative** + footer with seamless transitions and high perceived quality.
- Use **strict logo-derived palette** (deep dark + neon cyan/blue/purple/magenta/yellow only) and modern typography (pixel font only for micro-labels).
- Keep all editable copy/data centralized in **`/app/frontend/src/content.js`** (dates/venue/prizes/tracks/FAQ/sponsors/links).
- Ensure CTA (“**INSERT COIN TO BEGIN**”) opens **https://unstop.com/** in a new tab (easy to swap to the final Unstop listing).

**Current status:** Objectives above are **met** for V1. Remaining work is **optional polish and enhancements** based on organizer needs (real sponsors, final schedule, OG/meta, calendar links).

---

## 2) Implementation Steps

### Phase 1 — Core Motion + Visual System POC (isolation)
**Goal:** Prove the hardest part works: **smooth scroll narrative + parallax + particles + performance** with the palette.

**Status:** **SKIPPED** (by design). This project is a pure frontend landing page with no risky integrations; motion/scroll/particles were validated directly during full-page build via screenshots and E2E testing.

**User stories (POC)**
1. As a visitor, I see an amazing hero scene in <5 seconds with clear CTA.
2. As a visitor, scrolling subtly moves the “camera” (parallax/zoom) without jank.
3. As a visitor, I see ambient particles/light beams that feel premium (not noisy).
4. As a visitor, hover interactions feel responsive (magnetic buttons, glow).
5. As a visitor on mobile, animations remain smooth and readable.

**Exit criteria (covered in V1)**
- Scroll animation pipeline stable; no layout shift; hero renders correctly across breakpoints.

---

### Phase 2 — V1 App Development (full landing page)
**Status:** **COMPLETE** ✅

**User stories (V1)**
1. As a visitor, I understand what HACK++ATHON is, where/when it happens, and how to join.
2. As a visitor, I can explore tracks as “challenge cabinets” and quickly grasp each.
3. As a visitor, I can scan prizes instantly and feel the “achievement unlock” vibe.
4. As a visitor, I can reach the final CTA climax and register via external link.
5. As a visitor, I can browse FAQ terminals without losing my scroll position.

**Build (implemented)**
- Tech: **React + Tailwind + shadcn/ui + framer-motion + GSAP ScrollTrigger + Lenis**.
- Content centralization: **all copy and editable arrays live in `/app/frontend/src/content.js`** (including `SITE.registerUrl`).
- Persistent world-building layers:
  - Fixed **canvas particle field** (floating pixels + subtle digital rain) with **climax boost** near Final CTA.
  - **CRT overlay** (scanlines + noise + vignette).
  - **Grid floor** + volumetric-style **light beams** in the hero.
  - Cursor glow (desktop) and prefers-reduced-motion fallback.

**Sections (implemented end-to-end)**
1. **Hero**: arcade hall depth, grid floor, light beams, particles; **CSS arcade cabinet** with “boot sequence”; strong CTA.
2. **The Story**: pixel → neural network scroll transformation panel; subtle one-shot glitch title.
3. **Challenge Zones**: 4 tilt-hover cabinets (AI/ML, Open Innovation, Cybersecurity, Web Tech) with distinct glow identities.
4. **Timeline**: arcade-level progression with Level 1–3 and **BOSS FIGHT** final presentation; dates **TBA** where required.
5. **Rewards**: holographic trophy room; prizes: **₹50,000 / ₹25,000 / ₹10,000 / ₹5,000 / ₹5,000** + perks chips.
6. **Why Participate**: 6 collectible power-up cards with XP labels.
7. **Previous Highlights**: high-score leaderboard + animated counters + winner cards (placeholders).
8. **Sponsors**: holographic capsule tiers (placeholders) + mailto sponsor CTA.
9. **FAQ**: 6 “terminal” accordions with CRT/power-on feel; keyboard accessible.
10. **Final CTA**: giant cabinet climax with exact button label **“INSERT COIN TO BEGIN”**; opens **https://unstop.com/** in new tab.
- **Footer**: minimal premium footer with placeholder socials/email and internal anchors.

**Motion system (implemented)**
- GSAP ScrollTrigger: hero parallax and ambient transforms.
- Lenis smooth scrolling synced with ScrollTrigger.
- framer-motion: section reveals and hover micro-interactions.
- prefers-reduced-motion: disables/limits heavy ambient animations.

**Conclude Phase 2 (completed)**
- Ran `testing_agent_v3` (iteration_1): **100% pass (40+ cases), zero bugs**.
  - Verified desktop + mobile (390px), FAQ keyboard access, all external links `target=_blank`, all CTAs point to Unstop.

---

### Phase 3 — Polish + Production Hardening
**Status:** **OPTIONAL / ON REQUEST** (core V1 already meets success criteria)

**User stories (Polish)**
1. As a visitor, I experience smooth transitions that feel like one continuous world.
2. As a visitor, hover/scroll effects never obscure content readability.
3. As a visitor, page loads fast and doesn’t spike CPU.
4. As an organizer, I can edit all content in one file without hunting components.
5. As a visitor, the register CTA is always easy to find and works reliably.

**Steps (if requested)**
- Performance hardening:
  - Add adaptive particle density based on device capability.
  - Lazy-load non-critical sections/assets.
  - Lighthouse pass + minor optimizations.
- Cross-browser polish:
  - Safari iOS checks for fixed canvas + backdrop blur; fallbacks if needed.
- Copy/brand polish:
  - Replace placeholder emails/social links; add real organizer identity.
- QA regression:
  - Re-run `testing_agent_v3` after any visual/perf changes.

---

### Phase 4 — Optional Enhancements (only if requested)
**Status:** **NOT STARTED** (only if organizer requests)

**User stories (Optional)**
1. As a visitor, I can share the event with prefilled social cards.
2. As an organizer, I can swap Unstop link and sponsor logos quickly.
3. As a visitor, I can view a mini schedule modal when timeline becomes available.
4. As a visitor, I can add the event to calendar.
5. As an organizer, I can improve SEO/OG for marketing campaigns.

**Steps (if requested)**
- Replace placeholders with real data:
  - Sponsor logo assets + tier mapping.
  - Final timeline times/dates (TBA → actual schedule).
  - Replace `SITE.registerUrl` with the real Unstop listing.
- Marketing/SEO:
  - OpenGraph + Twitter cards, better meta description, favicon set.
- Calendar:
  - Add “Add to Calendar” (Google + ICS) once schedule is finalized.

---

## 3) Next Actions
- If you want to go beyond V1, choose which of these you want next:
  1. Swap `SITE.registerUrl` to your real Unstop listing (when live).
  2. Replace sponsor placeholders with real logos and links.
  3. Replace Timeline **TBA** with final schedule + add Calendar links.
  4. Add OG/Twitter social cards + improved SEO metadata.
  5. Run a Lighthouse/performance pass for production launch.

---

## 4) Success Criteria
**All success criteria are met for V1:**
- Required 10-section structure + footer with **cinematic continuity**.
- CTA button text exactly **“INSERT COIN TO BEGIN”** and opens **https://unstop.com/** in a new tab.
- Event details correct: **4–5 Sept 2026**, **Vidyavardhini’s College of Engineering & Technology Campus, Vasai, Maharashtra, India**; prizes correct.
- All editable data centralized in **`/app/frontend/src/content.js`**; swapping link/content requires no component edits.
- Smooth motion on desktop/mobile + reduced-motion support; FAQ keyboard accessible; no major accessibility issues.
- Testing agent: **iteration_1 = 100% pass, 0 bugs**.
