// ============================================================
// HACK++ATHON — SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// Edit anything here — no component changes needed.
// ============================================================

export const SITE = {
  name: "HACK++ATHON",
  tagline: "Insert Coin. Build the Future.",
  logoUrl:
    "https://customer-assets-jt897jd0.emergentagent.net/job_2bb063e9-f8d7-4fbe-aadf-310e828d861f/artifacts/3kb0n8kb_Copy%20of%20Copy%20of%20final%20logo%20white.png",
  // Swap this with your Unstop listing URL when ready
  registerUrl: "https://unstop.com/",
  dates: "4–5 SEPT 2026",
  datesLong: "4th – 5th September 2026",
  venueShort: "VCET Campus, Vasai",
  venue:
    "Vidyavardhini's College of Engineering & Technology, Vasai, Maharashtra, India",
  email: "hello@hackplusplusathon.dev", // placeholder
  sponsorEmail: "sponsors@hackplusplusathon.dev", // placeholder
};

export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Rewards", href: "#rewards" },
  { label: "Highlights", href: "#highlights" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  eyebrow: "A 24-HOUR AI-POWERED HACKATHON",
  headline: ["THE ARCADE", "WHERE IDEAS", "LEVEL UP."],
  sub: "Step into the world's most futuristic arcade — where every machine is a challenge, every coin is an idea, and every player builds the future. Two days. Four tracks. One epic boss fight.",
  primaryCta: "INSERT COIN TO BEGIN",
  secondaryCta: "EXPLORE CHALLENGE ZONES",
  stats: [
    { value: "₹95K", label: "PRIZE POOL" },
    { value: "24H", label: "OF BUILDING" },
    { value: "04", label: "CHALLENGE ZONES" },
  ],
};

export const STORY = {
  eyebrow: "LEVEL 00 — ORIGIN STORY",
  title: "From CRT Glitches to Neural Networks",
  paragraphs: [
    "Every great arcade began with a single machine and a line of players who believed the impossible was one coin away. HACK++ATHON was born from that same belief — that the next generation of builders deserves an arena, not a classroom.",
    "We took the spirit of the arcade — the glow, the competition, the obsession with the high score — and rewired it for the age of AI. The pixels became holograms. The joysticks became keyboards. The glitches became neural networks.",
    "This is not a gaming event. This is where students, developers, and dreamers walk in as players and walk out as builders — with real projects, real mentors, and a real shot at the leaderboard of the future.",
  ],
  transformLabels: { from: "RETRO ARCADE // 1984", to: "AI LAB // 2026" },
};

export const TRACKS = {
  eyebrow: "CHOOSE YOUR MACHINE",
  title: "Challenge Zones",
  sub: "Four cabinets. Four frontiers. Walk the arcade floor and pick the machine that calls to you — each one glows with a different kind of power.",
  items: [
    {
      id: "ai-ml",
      code: "ZONE-01",
      name: "AI / ML",
      glow: "cyan",
      icon: "BrainCircuit",
      description:
        "Train the machines. Build intelligent agents, generative tools, and models that learn faster than the competition.",
      build: "LLM apps · CV pipelines · Agents · GenAI tools",
    },
    {
      id: "open-innovation",
      code: "ZONE-02",
      name: "Open Innovation",
      glow: "yellow",
      icon: "Lightbulb",
      description:
        "No rules, all glory. Bring the wildest idea in the room and turn it into something the judges have never seen.",
      build: "Anything goes · Moonshots · Social impact · Hardware",
    },
    {
      id: "cybersecurity",
      code: "ZONE-03",
      name: "Cybersecurity",
      glow: "magenta",
      icon: "ShieldCheck",
      description:
        "Defend the grid. Build tools that hunt threats, harden systems, and keep the digital arcade safe from intruders.",
      build: "Threat detection · Privacy tools · Secure auth · Forensics",
    },
    {
      id: "web-tech",
      code: "ZONE-04",
      name: "Web Tech",
      glow: "blue",
      icon: "Globe",
      description:
        "Own the browser. Craft blazing-fast, beautiful web experiences that feel like the future shipped early.",
      build: "Full-stack apps · PWAs · DevTools · Real-time platforms",
    },
  ],
};

export const TIMELINE = {
  eyebrow: "GAME PROGRESSION",
  title: "Play Through the Levels",
  sub: "Every player follows the same path — from inserting a coin to facing the final boss. Dates drop soon.",
  levels: [
    {
      level: "LEVEL 1",
      title: "Registration",
      date: "TBA",
      description:
        "Insert your coin. Register your player profile on Unstop and secure your spot on the arcade floor.",
      icon: "Coins",
      boss: false,
    },
    {
      level: "LEVEL 2",
      title: "Team Formation",
      date: "TBA",
      description:
        "Assemble your party. Squad up with 2–4 players — coders, designers, and storytellers welcome.",
      icon: "Users",
      boss: false,
    },
    {
      level: "LEVEL 3",
      title: "Building",
      date: "4–5 SEPT 2026",
      description:
        "24 hours of pure creation on the VCET campus. Mentors roam the floor. Power-ups included.",
      icon: "Code2",
      boss: false,
    },
    {
      level: "BOSS FIGHT",
      title: "Final Presentation",
      date: "5 SEPT 2026",
      description:
        "Face the judges. Demo your build, defend your choices, and fight for the top of the leaderboard.",
      icon: "Swords",
      boss: true,
    },
  ],
};

export const REWARDS = {
  eyebrow: "ACHIEVEMENTS UNLOCKED",
  title: "The Trophy Room",
  sub: "₹95,000 in prizes, floating in holographic glass — plus rewards that outlast the weekend.",
  prizes: [
    {
      place: "1ST PLACE",
      amount: "₹50,000",
      label: "GRAND CHAMPION",
      icon: "Trophy",
      glow: "yellow",
      tier: "large",
    },
    {
      place: "2ND PLACE",
      amount: "₹25,000",
      label: "RUNNER UP",
      icon: "Medal",
      glow: "cyan",
      tier: "large",
    },
    {
      place: "3RD PLACE",
      amount: "₹10,000",
      label: "SECOND RUNNER UP",
      icon: "Award",
      glow: "magenta",
      tier: "large",
    },
    {
      place: "SPECIAL PRIZE",
      amount: "₹5,000",
      label: "BEST FRESHER TEAM",
      icon: "Sparkles",
      glow: "blue",
      tier: "small",
    },
    {
      place: "SPECIAL PRIZE",
      amount: "₹5,000",
      label: "CROWD FAVOURITE",
      icon: "Star",
      glow: "purple",
      tier: "small",
    },
  ],
  perks: [
    { label: "Internship Opportunities", icon: "Briefcase" },
    { label: "Certificates for All", icon: "ScrollText" },
    { label: "Industry Networking", icon: "Network" },
    { label: "Exclusive Swag Drops", icon: "Gift" },
  ],
};

export const POWERUPS = {
  eyebrow: "COLLECT THEM ALL",
  title: "Power-Ups You Take Home",
  sub: "Every player leaves the arcade stronger than they entered. Six power-ups, permanently equipped.",
  items: [
    {
      name: "Learning",
      xp: "+100 XP",
      icon: "GraduationCap",
      glow: "cyan",
      description: "Hands-on workshops and skills you can't get from tutorials.",
    },
    {
      name: "Networking",
      xp: "+80 XP",
      icon: "Users",
      glow: "magenta",
      description: "Meet 500+ builders, mentors, and recruiters on one floor.",
    },
    {
      name: "Mentorship",
      xp: "+90 XP",
      icon: "Compass",
      glow: "yellow",
      description: "Industry engineers guide your build all 24 hours.",
    },
    {
      name: "Innovation",
      xp: "+120 XP",
      icon: "Rocket",
      glow: "purple",
      description: "A pressure-cooker arena designed to force breakthroughs.",
    },
    {
      name: "Career",
      xp: "+110 XP",
      icon: "Briefcase",
      glow: "blue",
      description: "Internship pipelines and recruiters watching the floor.",
    },
    {
      name: "Portfolio",
      xp: "+95 XP",
      icon: "FolderGit2",
      glow: "cyan",
      description: "Ship a real project you can demo in any interview.",
    },
  ],
};

export const HIGHLIGHTS = {
  eyebrow: "HIGH SCORE ROOM",
  title: "Previous Highlights",
  sub: "The leaderboard remembers everything. Here's what last season's players left behind.",
  stats: [
    { value: 500, suffix: "+", label: "PLAYERS" },
    { value: 120, suffix: "+", label: "PROJECTS SHIPPED" },
    { value: 40, suffix: "+", label: "COLLEGES" },
    { value: 24, suffix: "H", label: "NON-STOP BUILDING" },
  ],
  leaderboard: [
    { rank: "01", team: "NEURAL KNIGHTS", score: "98,450", badge: "CHAMPION" },
    { rank: "02", team: "PIXEL PIRATES", score: "94,120", badge: "RUNNER UP" },
    { rank: "03", team: "BYTE BENDERS", score: "91,780", badge: "3RD PLACE" },
    { rank: "04", team: "CTRL ALT ELITE", score: "88,300", badge: "" },
    { rank: "05", team: "STACK OVERLORDS", score: "85,940", badge: "" },
  ],
  winners: [
    {
      year: "2025",
      team: "Neural Knights",
      project: "MediScan AI",
      description: "Real-time prescription analysis for rural clinics.",
    },
    {
      year: "2025",
      team: "Pixel Pirates",
      project: "GridGuard",
      description: "ML-powered threat detection for campus networks.",
    },
    {
      year: "2024",
      team: "Byte Benders",
      project: "FarmLink",
      description: "Marketplace connecting farmers directly to buyers.",
    },
  ],
};

export const SPONSORS = {
  eyebrow: "POWERED BY",
  title: "Sponsor Capsules",
  sub: "The machines don't glow without power. These partners keep the arcade running.",
  note: "Sponsor slots are open — your logo could float here.",
  tiers: [
    {
      tier: "TITLE SPONSOR",
      capsules: [{ name: "YOUR BRAND HERE", placeholder: true }],
    },
    {
      tier: "GOLD",
      capsules: [
        { name: "SPONSOR SLOT A", placeholder: true },
        { name: "SPONSOR SLOT B", placeholder: true },
        { name: "SPONSOR SLOT C", placeholder: true },
      ],
    },
    {
      tier: "COMMUNITY",
      capsules: [
        { name: "PARTNER 01", placeholder: true },
        { name: "PARTNER 02", placeholder: true },
        { name: "PARTNER 03", placeholder: true },
        { name: "PARTNER 04", placeholder: true },
      ],
    },
  ],
};

export const FAQS = {
  eyebrow: "HELP TERMINALS",
  title: "Frequently Asked Questions",
  sub: "Walk up to a terminal and press power. The machine knows the answer.",
  items: [
    {
      question: "Who can participate?",
      answer:
        "Any college student in India — engineering or otherwise. All experience levels welcome, from first-time hackers to seasoned builders. All you need is curiosity and a laptop.",
    },
    {
      question: "What's the team size?",
      answer:
        "Teams of 2 to 4 players. Flying solo? Join our team-formation mixer during Level 2 and find your party before the building begins.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Registration details will be announced on Unstop. Follow the INSERT COIN button to stay updated — early birds always get the best power-ups.",
    },
    {
      question: "What should I bring?",
      answer:
        "Your laptop, chargers, a valid college ID, and your game face. We handle the WiFi, power strips, caffeine, and the arcade atmosphere.",
    },
    {
      question: "Will food and rest areas be provided?",
      answer:
        "Yes — meals, snacks, and midnight fuel are on us for all 24 hours. Dedicated rest zones are available when you need to respawn.",
    },
    {
      question: "How does judging work?",
      answer:
        "The Boss Fight: each team demos live to a judge panel of industry engineers and founders. Scoring covers innovation, execution, design, and impact. High score takes the trophy.",
    },
  ],
};

export const FINAL_CTA = {
  pixelLabel: "PRESS START",
  title: "Your Machine Is Waiting.",
  sub: "4–5 September 2026 · VCET Campus, Vasai. The floor lights up, the screens hum, and one seat on the leaderboard has your name on it.",
  cta: "INSERT COIN TO BEGIN",
  microcopy: "Registrations open on Unstop · No coins required, just courage",
};

export const FOOTER = {
  tagline: "The arcade where ideas level up.",
  columns: [
    {
      title: "EVENT",
      links: [
        { label: "The Story", href: "#story" },
        { label: "Challenge Zones", href: "#tracks" },
        { label: "Timeline", href: "#timeline" },
        { label: "Rewards", href: "#rewards" },
      ],
    },
    {
      title: "CONNECT",
      links: [
        { label: "Instagram", href: "https://instagram.com", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "Twitter / X", href: "https://x.com", external: true },
        { label: "Discord", href: "https://discord.com", external: true },
      ],
    },
  ],
  copyright: "© 2026 HACK++ATHON · Vidyavardhini's College of Engineering & Technology, Vasai",
};
