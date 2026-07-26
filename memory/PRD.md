# HACK++ATHON — Premium Arcade Hackathon Landing Page (PRD)

## Product
Frontend-only, one-page cinematic landing site promoting the HACK++ATHON hackathon, styled as a futuristic neon arcade (arcade = innovation, not gaming).

## Confirmed Requirements (User)
- Name: HACK++ATHON (logo asset provided, transparent PNG)
- Palette: strictly logo-derived — deep dark bg + neon cyan #2EF2FF, blue #2B6CFF, purple #7A2CFF, magenta #FF2BD6, coin yellow #FFD84A, cabinet red #D12B3A
- Event: 4–5 Sept 2026, Vidyavardhini's College of Engineering & Technology, Vasai, Maharashtra
- Prizes: ₹50,000 / ₹25,000 / ₹10,000 / ₹5,000 / ₹5,000
- Tracks: AI/ML, Open Innovation, Cybersecurity, Web Tech
- Timeline dates: TBA (except building = 4–5 Sept 2026)
- Final CTA text: exactly "INSERT COIN TO BEGIN"
- All register CTAs → https://unstop.com/ (new tab) — placeholder, user will swap with Unstop listing
- All other content = realistic placeholders (sponsors, leaderboard, winners, FAQ, socials, emails)

## Structure (implemented)
Navbar (sticky glass + mobile menu) → Hero (arcade hall, CSS cabinet, particles, grid floor, parallax) → Story (pixels→neural net scroll transform, glitch title) → Challenge Zones (4 tilt cabinets) → Timeline (arcade levels + BOSS FIGHT) → Rewards (holo trophy displays + perks) → Why Participate (6 power-ups + XP) → Highlights (leaderboard + count-up stats + winners) → Sponsors (capsule tiers + mailto) → FAQ (6 CRT terminals, power-on accordion) → Final CTA (giant cabinet, PRESS START, room brightens, particle climax) → Footer.

## Tech
- React (CRA) + Tailwind + shadcn/ui, framer-motion (reveals/hover), GSAP ScrollTrigger (parallax/scrub), Lenis smooth scroll, canvas 2D particle field with scroll-based climax boost
- ALL editable content centralized in `/app/frontend/src/content.js`
- prefers-reduced-motion supported; data-testid on all interactive elements
- Backend: unused FastAPI template (no backend logic required)

## Status
- Phase 2 complete. Testing agent iteration_1: 100% pass (40+ cases), zero bugs.

## How to edit content
Everything (dates, venue, prizes, tracks, FAQ, sponsors, socials, register URL) is in `/app/frontend/src/content.js`. Swap `SITE.registerUrl` with the Unstop listing when ready.
