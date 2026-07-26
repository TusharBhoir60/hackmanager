{
  "project": {
    "name": "HACK++ATHON",
    "type": "premium one-page landing page",
    "brand_attributes": [
      "cinematic",
      "premium",
      "futuristic-arcade (not gaming)",
      "immersive",
      "interactive",
      "playful-tech",
      "credible for sponsors/college"
    ],
    "north_star_action": {
      "primary": "Drive registrations",
      "cta_label_final": "INSERT COIN TO BEGIN",
      "cta_url": "https://unstop.com/",
      "cta_target": "_blank"
    },
    "content_constraints": {
      "event": {
        "dates": "4–5 September 2026",
        "location": "Vidyavardhini's College of Engineering and Technology Campus, Vasai, Maharashtra, India"
      },
      "tracks": ["AI/ML", "Open Innovation", "Cybersecurity", "Web Tech"],
      "prizes": ["₹50,000", "₹25,000", "₹10,000", "₹5,000", "₹5,000"],
      "timeline_dates": "TBA",
      "placeholders": ["sponsors", "past stats", "winners", "FAQ", "socials"]
    }
  },

  "visual_personality": {
    "style_fusion": [
      "Apple product-page clarity (type + spacing)",
      "Stripe/Linear precision (grid + hierarchy)",
      "Awwwards cinematic scroll narrative",
      "Japanese neon street ambience",
      "Arc/Framer playful micro-interactions",
      "Cyberpunk arcade hall volumetrics"
    ],
    "layout_principles": {
      "connected_experience": "Sections must feel like one continuous environment; use shared background layers (grid floor, particles, light beams) that persist and evolve across scroll.",
      "reading_flow": "Left-aligned copy blocks with generous whitespace; avoid centered paragraphs except hero headline.",
      "depth_layers": [
        "L0: base background (deep dark)",
        "L1: subtle noise + vignette",
        "L2: holographic grid floor + light beams",
        "L3: particles/digital rain",
        "L4: content cards/cabinets",
        "L5: cursor glow + scanline overlay"
      ]
    }
  },

  "typography": {
    "font_pairing": {
      "headings": {
        "family": "Space Grotesk",
        "fallback": "ui-sans-serif, system-ui",
        "usage": "All H1/H2/H3, section titles, CTA labels",
        "notes": "Geometric, premium-tech; pairs well with neon without looking gamer/pixel."
      },
      "body": {
        "family": "Figtree",
        "fallback": "ui-sans-serif, system-ui",
        "usage": "Paragraphs, helper text, FAQ answers"
      },
      "data_mono": {
        "family": "IBM Plex Mono",
        "fallback": "ui-monospace, SFMono-Regular",
        "usage": "Dates, stats counters, leaderboard rows, small labels"
      }
    },
    "scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
      "h2": "text-base md:text-lg text-muted-foreground",
      "section_title": "text-2xl sm:text-3xl lg:text-4xl tracking-tight",
      "body": "text-sm sm:text-base leading-relaxed",
      "small": "text-xs sm:text-sm",
      "mono_label": "font-mono text-xs tracking-[0.18em] uppercase"
    },
    "type_treatments": {
      "neon_outline": "Use for short decorative labels only (e.g., TRACK, LEVEL). Implement via text-shadow, not stroke.",
      "glitch": "Only on hero eyebrow label or final CTA screen text; keep subtle and short duration."
    }
  },

  "color_system": {
    "rule": "STRICTLY derived from logo palette; do not introduce additional hues. Use neutrals only as near-black/near-white within the same temperature.",
    "palette_hex": {
      "bg_0": "#07060B",
      "bg_1": "#0B0A12",
      "ink": "#EAF6FF",
      "muted_ink": "#A9C7D9",
      "navy_cabinet": "#0B1633",
      "cabinet_red": "#D12B3A",
      "neon_cyan": "#2EF2FF",
      "neon_blue": "#2B6CFF",
      "neon_purple": "#7A2CFF",
      "neon_magenta": "#FF2BD6",
      "coin_yellow": "#FFD84A",
      "pac_yellow": "#FFE45C"
    },
    "semantic_tokens": {
      "--background": "#07060B",
      "--foreground": "#EAF6FF",
      "--muted": "rgba(234,246,255,0.08)",
      "--muted-foreground": "#A9C7D9",
      "--card": "rgba(11,10,18,0.72)",
      "--card-foreground": "#EAF6FF",
      "--border": "rgba(46,242,255,0.18)",
      "--ring": "rgba(46,242,255,0.55)",
      "--primary": "#2EF2FF",
      "--primary-foreground": "#07060B",
      "--secondary": "rgba(255,216,74,0.14)",
      "--secondary-foreground": "#FFE45C",
      "--destructive": "#D12B3A",
      "--destructive-foreground": "#07060B"
    },
    "track_glows": {
      "AI/ML": "neon_cyan",
      "Open Innovation": "coin_yellow",
      "Cybersecurity": "neon_magenta",
      "Web Tech": "neon_blue"
    },
    "allowed_gradients": {
      "note": "Gradients only from palette colors; keep area <20% viewport; use as section background accents only.",
      "hero_ambient": "radial-gradient(60% 60% at 50% 20%, rgba(46,242,255,0.18) 0%, rgba(122,44,255,0.10) 35%, rgba(7,6,11,0) 70%)",
      "cabinet_edge": "linear-gradient(135deg, rgba(46,242,255,0.55), rgba(255,43,214,0.35), rgba(255,216,74,0.25))",
      "floor_grid_fade": "linear-gradient(180deg, rgba(7,6,11,0) 0%, rgba(7,6,11,0.85) 70%, rgba(7,6,11,1) 100%)"
    }
  },

  "design_tokens_css": {
    "instructions": "Main agent should replace current shadcn tokens in /app/frontend/src/index.css :root and .dark with these values (keep HSL format if preferred, but hex is acceptable if project supports). Add extra custom properties for glow/noise.",
    "css": ":root {\n  --bg-0: #07060B;\n  --bg-1: #0B0A12;\n  --ink: #EAF6FF;\n  --ink-muted: #A9C7D9;\n\n  --neon-cyan: #2EF2FF;\n  --neon-blue: #2B6CFF;\n  --neon-purple: #7A2CFF;\n  --neon-magenta: #FF2BD6;\n  --coin-yellow: #FFD84A;\n  --cabinet-red: #D12B3A;\n  --navy-cabinet: #0B1633;\n\n  --background: var(--bg-0);\n  --foreground: var(--ink);\n  --card: rgba(11,10,18,0.72);\n  --card-foreground: var(--ink);\n  --popover: rgba(11,10,18,0.86);\n  --popover-foreground: var(--ink);\n\n  --primary: var(--neon-cyan);\n  --primary-foreground: var(--bg-0);\n  --secondary: rgba(255,216,74,0.14);\n  --secondary-foreground: var(--coin-yellow);\n  --muted: rgba(234,246,255,0.08);\n  --muted-foreground: var(--ink-muted);\n  --accent: rgba(46,242,255,0.10);\n  --accent-foreground: var(--ink);\n  --destructive: var(--cabinet-red);\n  --destructive-foreground: var(--bg-0);\n\n  --border: rgba(46,242,255,0.18);\n  --input: rgba(46,242,255,0.18);\n  --ring: rgba(46,242,255,0.55);\n\n  --radius: 14px;\n\n  --shadow-elev: 0 18px 60px rgba(0,0,0,0.55);\n  --shadow-glow-cyan: 0 0 0 1px rgba(46,242,255,0.22), 0 0 28px rgba(46,242,255,0.18);\n  --shadow-glow-magenta: 0 0 0 1px rgba(255,43,214,0.18), 0 0 26px rgba(255,43,214,0.14);\n\n  --noise-opacity: 0.06;\n  --scanline-opacity: 0.08;\n}\n\n.dark {\n  --background: var(--bg-0);\n  --foreground: var(--ink);\n}\n"
  },

  "grid_and_spacing": {
    "container": "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    "section_spacing": "py-20 sm:py-28 lg:py-32",
    "rhythm": "Use 2–3x more spacing than default; prefer gap-8/10/12 in grids.",
    "bento": {
      "pattern": "Use asymmetrical bento grids for Challenge Zones, Rewards, Highlights.",
      "mobile": "Single column; avoid dense 2-col on small screens unless cards are short."
    }
  },

  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "tabs": "/app/frontend/src/components/ui/tabs.jsx",
      "carousel": "/app/frontend/src/components/ui/carousel.jsx",
      "tooltip": "/app/frontend/src/components/ui/tooltip.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "progress": "/app/frontend/src/components/ui/progress.jsx",
      "scroll_area": "/app/frontend/src/components/ui/scroll-area.jsx"
    },
    "custom_components_to_create": [
      {
        "name": "CrtOverlay",
        "purpose": "Global scanlines + vignette + subtle chromatic aberration feel",
        "notes": "Fixed overlay, pointer-events none, respects prefers-reduced-motion"
      },
      {
        "name": "ParticleFieldCanvas",
        "purpose": "Hero + transitions: floating pixels, digital rain, particle trails",
        "notes": "Canvas 2D; throttle on mobile; pause when tab hidden"
      },
      {
        "name": "HologramCard",
        "purpose": "Reusable holographic cabinet/card surface for tracks, rewards, sponsors",
        "notes": "Mouse-tracked CSS vars; fallback to static sheen on touch"
      },
      {
        "name": "MagneticButton",
        "purpose": "Primary CTA micro-interaction (magnetic pull + glow)",
        "notes": "Use for Register + Final CTA only"
      },
      {
        "name": "ArcadeCabinet",
        "purpose": "Challenge Zones: cabinet silhouette with screen area + glow per track",
        "notes": "3D-ish via CSS perspective; optional subtle rotation on hover"
      },
      {
        "name": "LevelTimeline",
        "purpose": "Timeline as arcade levels with scroll activation",
        "notes": "GSAP ScrollTrigger pins section; highlights current level"
      },
      {
        "name": "Leaderboard",
        "purpose": "Previous Highlights high-score room",
        "notes": "Animated counters; shimmering row highlight"
      }
    ],
    "button_variants": {
      "primary": {
        "shape": "rounded-xl",
        "surface": "solid neon-cyan with subtle inner highlight",
        "tailwind": "bg-[var(--neon-cyan)] text-[var(--bg-0)] shadow-[var(--shadow-glow-cyan)] hover:brightness-110 active:brightness-95",
        "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-0)]"
      },
      "secondary": {
        "surface": "glass + border + coin-yellow accent",
        "tailwind": "bg-white/5 text-[var(--ink)] border border-[rgba(255,216,74,0.35)] hover:bg-white/8",
        "notes": "Use for 'View Tracks' / 'See Timeline' style CTAs"
      },
      "ghost": {
        "surface": "transparent with neon underline",
        "tailwind": "bg-transparent text-[var(--ink)] hover:bg-white/5"
      }
    },
    "card_recipes": {
      "base": "rounded-2xl border border-[rgba(46,242,255,0.16)] bg-[rgba(11,10,18,0.72)] shadow-[var(--shadow-elev)] backdrop-blur-md",
      "hologram_sheen": "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(135deg,rgba(46,242,255,0.10),rgba(255,43,214,0.08),rgba(255,216,74,0.06))] before:opacity-0 hover:before:opacity-100 before:transition-opacity",
      "crt_scan": "after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.18)_0px,rgba(0,0,0,0.18)_1px,transparent_1px,transparent_3px)] after:opacity-0 hover:after:opacity-60 after:transition-opacity"
    }
  },

  "page_structure": {
    "nav": {
      "behavior": "Sticky top with translucent glass; subtle neon bottom border; hides on scroll down, shows on scroll up (optional).",
      "items": ["Story", "Tracks", "Timeline", "Rewards", "Highlights", "Sponsors", "FAQ"],
      "cta": "Register",
      "data_testids": {
        "nav": "site-nav",
        "register": "nav-register-button"
      }
    },
    "sections": [
      {
        "id": "hero",
        "goal": "Instantly communicate premium AI hackathon + cinematic arcade hall",
        "layout": "Full viewport with layered background (canvas particles + grid floor). Left copy, right 3D-ish arcade cabinet silhouette.",
        "key_ui": ["MagneticButton primary Register", "Secondary CTA scroll-to Tracks"],
        "micro_interactions": [
          "Parallax: background shifts slower than foreground",
          "Cabinet rotates 2–4deg with scroll",
          "Ambient neon pulse (very slow)",
          "Cursor glow follows pointer (desktop only)"
        ],
        "data_testids": {
          "primary_cta": "hero-register-button",
          "secondary_cta": "hero-explore-tracks-button"
        }
      },
      {
        "id": "story",
        "goal": "Retro arcade transforms into AI lab narrative",
        "layout": "Split: left narrative copy; right transformation panel with glitch-to-hologram animation.",
        "micro_interactions": ["Scroll reveal with slight perspective", "Glitch text for 600ms on section enter"]
      },
      {
        "id": "tracks",
        "goal": "Show 4 challenge zones as cabinets",
        "layout": "Bento grid of 4 cabinets; each has distinct glow + hover lighting.",
        "micro_interactions": [
          "Hover: cabinet tilts toward cursor",
          "Glow intensifies + screen flicker",
          "Tooltip for 'What you build'"
        ],
        "data_testids": {
          "track_card": "track-card",
          "track_ai": "track-card-ai-ml",
          "track_open": "track-card-open-innovation",
          "track_cyber": "track-card-cybersecurity",
          "track_web": "track-card-web-tech"
        }
      },
      {
        "id": "timeline",
        "goal": "Arcade levels progression",
        "layout": "Pinned section with vertical level list + right 'screen' showing current level details.",
        "micro_interactions": ["ScrollTrigger pins and updates active level", "Boss Fight gets extra shake/glow"]
      },
      {
        "id": "rewards",
        "goal": "Achievement unlock trophy displays",
        "layout": "Holographic glass pedestals; top 3 larger, remaining 2 smaller; plus perks row.",
        "micro_interactions": ["Hover: trophy floats + shimmer", "Unlock sound visualization (no audio required)"]
      },
      {
        "id": "why",
        "goal": "Power-up collectibles",
        "layout": "6-card grid; each card looks like a collectible chip/power-up.",
        "micro_interactions": ["Hover: icon spins 8deg + glow", "Press: quick scale 0.98"]
      },
      {
        "id": "highlights",
        "goal": "High-score room credibility",
        "layout": "Leaderboard left; stats counters right; winner cards carousel below.",
        "micro_interactions": ["Counters animate on enter", "Leaderboard row sweep highlight"]
      },
      {
        "id": "sponsors",
        "goal": "Holographic capsules",
        "layout": "Logo capsules floating in a grid; CTA for sponsorship email placeholder.",
        "micro_interactions": ["Hover: capsule rotates slightly + reflection sweep"]
      },
      {
        "id": "faq",
        "goal": "Arcade terminal accordions",
        "layout": "Accordion items styled as CRT terminals; power-on animation on open.",
        "micro_interactions": ["On open: scanline intensifies + glow", "Keyboard accessible"]
      },
      {
        "id": "final-cta",
        "goal": "Emotional climax: largest cabinet powers on",
        "layout": "Full-width cabinet scene; CTA centered on 'screen' with INSERT COIN TO BEGIN.",
        "micro_interactions": ["On enter: room brightens (increase particles)", "CTA magnetic + press glow"]
      }
    ],
    "footer": {
      "style": "Minimal, dark, premium; tiny neon accents only",
      "content": ["Links", "Socials", "Email", "Copyright"],
      "data_testids": {
        "footer": "site-footer"
      }
    }
  },

  "motion_and_interactions": {
    "libraries": {
      "required": [
        {
          "name": "gsap",
          "why": "ScrollTrigger cinematic sequencing",
          "install": "npm i gsap",
          "usage": "import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'; gsap.registerPlugin(ScrollTrigger);"
        },
        {
          "name": "framer-motion",
          "why": "Component-level hover/entrance animations",
          "install": "npm i framer-motion",
          "usage": "import { motion } from 'framer-motion';"
        },
        {
          "name": "lenis (optional)",
          "why": "Premium smooth scrolling; pairs with ScrollTrigger",
          "install": "npm i lenis",
          "usage": "Create Lenis instance; sync with GSAP ticker"
        },
        {
          "name": "react-intersection-observer (optional)",
          "why": "Trigger counters and section reveals",
          "install": "npm i react-intersection-observer"
        }
      ]
    },
    "principles": {
      "easing": "Use cinematic easing: power2.out, power3.out; avoid bouncy eases.",
      "durations": "Hover 160–220ms; section reveals 600–900ms; ambient pulses 4–8s.",
      "reduced_motion": "If prefers-reduced-motion: disable parallax, pinning, cursor glow; keep simple fades."
    },
    "micro_interactions": {
      "magnetic_button": {
        "behavior": "Button translates up to 10px toward cursor; inner glow follows pointer; on leave returns with spring-like ease.",
        "implementation_hint": "Track pointer relative to button rect; set CSS vars; animate with gsap.to"
      },
      "hologram_sweep": {
        "behavior": "A diagonal sheen passes across card on hover; uses pseudo-element with translateX.",
        "implementation_hint": "Use ::before with gradient and animate transform"
      },
      "neon_flicker": {
        "behavior": "Very subtle random opacity flicker on neon borders (rare).",
        "implementation_hint": "CSS keyframes with steps; apply only to accents"
      }
    }
  },

  "accessibility": {
    "contrast": "Neon glows must not reduce text readability; keep body text solid ink (#EAF6FF) on near-black; avoid placing paragraphs over bright gradients.",
    "focus": "All interactive elements must have visible focus ring (ring + offset).",
    "keyboard": "FAQ accordion, nav links, CTAs must be keyboard reachable and operable.",
    "aria": "Use aria-label for icon-only buttons; ensure external links announce new tab.",
    "reduced_motion": "Provide reduced motion mode; do not rely on motion to convey meaning."
  },

  "testing_attributes": {
    "rule": "All interactive and key informational elements MUST include data-testid (kebab-case, role-based).",
    "examples": [
      "data-testid=\"hero-register-button\"",
      "data-testid=\"timeline-level-3-card\"",
      "data-testid=\"faq-accordion-item-2\"",
      "data-testid=\"sponsor-logo-capsule-1\"",
      "data-testid=\"highlights-leaderboard\""
    ]
  },

  "image_urls": {
    "logo": {
      "category": "brand",
      "description": "User-provided logo (white background version; place on dark bg with padding + subtle glow)",
      "url": "https://customer-assets-jt897jd0.emergentagent.net/job_2bb063e9-f8d7-4fbe-aadf-310e828d861f/artifacts/3kb0n8kb_Copy%20of%20Copy%20of%20final%20logo%20white.png"
    },
    "hero_background_options": [
      {
        "category": "hero",
        "description": "Neon arcade hall vibe reference image (use as low-opacity texture behind canvas)",
        "url": "https://images.unsplash.com/photo-1670270303053-785d2dd38201?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwYXJjYWRlJTIwbmVvbiUyMGhhbGx3YXklMjBhYnN0cmFjdHxlbnwwfHx8fDE3ODUwNDc3MDN8MA&ixlib=rb-4.1.0&q=85"
      },
      {
        "category": "hero",
        "description": "Long tunnel lights (good for parallax depth layer)",
        "url": "https://images.unsplash.com/photo-1714283339889-8130f4b92970?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJjYWRlJTIwbmVvbiUyMGhhbGx3YXklMjBhYnN0cmFjdHxlbnwwfHx8fDE3ODUwNDc3MDN8MA&ixlib=rb-4.1.0&q=85"
      }
    ],
    "rewards_visual_refs": [
      {
        "category": "rewards",
        "description": "Glass prism/pedestal reference for holographic trophy displays",
        "url": "https://images.unsplash.com/photo-1741621579935-d43616d8060e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxuZW9uJTIwZ2xhc3MlMjBwZWRlc3RhbCUyMGFic3RyYWN0fGVufDB8fHx8MTc4NTA0NzcyNXww&ixlib=rb-4.1.0&q=85"
      },
      {
        "category": "rewards",
        "description": "Neon geometric cubes reference (use as subtle background texture)",
        "url": "https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxuZW9uJTIwZ2xhc3MlMjBwZWRlc3RhbCUyMGFic3RyYWN0fGVufDB8fHx8MTc4NTA0NzcyNXww&ixlib=rb-4.1.0&q=85"
      }
    ]
  },

  "implementation_notes_for_react_js": {
    "file_conventions": "Project uses .js files (not .tsx). Create components as .jsx or .js consistent with existing codebase.",
    "content_config": {
      "requirement": "All copy and arrays must live in a single /app/frontend/src/content.js file.",
      "structure_hint": "export const content = { nav: {...}, hero: {...}, tracks: [...], timeline: [...], prizes: [...], faq: [...] }"
    },
    "external_links": {
      "rule": "All register CTAs open https://unstop.com/ in new tab",
      "implementation": "<a href=... target=\"_blank\" rel=\"noreferrer\" data-testid=...>"
    }
  },

  "references": {
    "inspiration_sources": [
      {
        "title": "Codrops: ZERO interactive narrative engineering (2026)",
        "url": "https://tympanus.net/codrops/2026/07/17/zero-the-engineering-behind-a-defiant-interactive-narrative/"
      },
      {
        "title": "Codrops: Magnetic commerce interaction patterns (2026)",
        "url": "https://tympanus.net/codrops/2026/07/21/magnetic-commerce-building-the-dash-creative-website/"
      },
      {
        "title": "Cyberfiction GSAP repo (scroll storytelling)",
        "url": "https://github.com/amangulia4610/cyberfiction-gsap"
      },
      {
        "title": "Artifact UI: Holographic Card concept",
        "url": "https://artifactui.in/docs/components/holographic-card"
      }
    ]
  },

  "instructions_to_main_agent": [
    "Replace default CRA App.css centered header usage; do not center the entire app container.",
    "Set <html class=\"dark\"> and ensure Tailwind uses the custom tokens above.",
    "Build a persistent background system: CrtOverlay + ParticleFieldCanvas + GridFloor layer that spans the whole page and evolves per section.",
    "Use shadcn Button/Card/Accordion as base primitives; wrap them with custom components (HologramCard, MagneticButton, ArcadeCabinet) for the arcade identity.",
    "Implement GSAP ScrollTrigger for hero parallax + timeline pinning; keep motion elegant and disable on prefers-reduced-motion.",
    "All interactive elements and key info must include data-testid attributes (kebab-case).",
    "All CTAs that register must open https://unstop.com/ in a new tab with rel=noreferrer.",
    "Gradients: only from palette; never exceed 20% viewport; never on text-heavy areas; never on small UI elements (<100px)."
  ],

  "general_ui_ux_design_guidelines_appendix": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
