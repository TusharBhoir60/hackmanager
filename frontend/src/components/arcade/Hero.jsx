import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ChevronRight } from "lucide-react";
import { SITE, HERO } from "../../content";
import { MagneticButton } from "./MagneticButton";
import { scrollToAnchor, usePrefersReducedMotion } from "../../hooks/useArcade";

gsap.registerPlugin(ScrollTrigger);

const CODE_LINES = [
  { w: "72%", c: "#2EF2FF" },
  { w: "48%", c: "#FF2BD6" },
  { w: "84%", c: "#7A2CFF" },
  { w: "36%", c: "#FFD84A" },
  { w: "60%", c: "#2B6CFF" },
];

export const Hero = () => {
  const sectionRef = useRef(null);
  const cabRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      // Cabinet gentle float
      gsap.to(cabRef.current, {
        y: -12,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      // Scroll parallax: bg slower, cabinet rotates, content lifts
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(cabRef.current, {
        rotateY: 14,
        rotateZ: -3,
        scale: 0.92,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(contentRef.current, {
        yPercent: -10,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      data-testid="hero-section"
    >
      {/* Background layers (parallax) */}
      <div ref={bgRef} className="absolute inset-0" aria-hidden="true">
        <div className="hero-ambient" />
        <div className="light-beam beam-cyan" />
        <div className="light-beam beam-magenta" />
        <div className="light-beam beam-purple" />
        <div className="grid-floor" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center">
        {/* Copy */}
        <div ref={contentRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,216,74,0.35)] bg-[rgba(255,216,74,0.08)] px-4 py-1.5 mono-label text-[#FFD84A]">
              <CalendarDays size={13} strokeWidth={2.4} />
              {SITE.dates}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(46,242,255,0.25)] bg-[rgba(46,242,255,0.06)] px-4 py-1.5 mono-label text-[#A9C7D9]">
              <MapPin size={13} strokeWidth={2.4} />
              {SITE.venueShort}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="logo-stage mt-8 w-[min(560px,96%)]"
          >
            <img
              src={SITE.logoUrl}
              alt={SITE.name}
              className="w-full logo-glow-pulse"
              data-testid="hero-logo"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mono-label neon-text-cyan mt-6 neon-flicker"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold text-[clamp(1.9rem,4.6vw,3.9rem)] leading-[1.12] mt-4 text-[#EAF6FF]"
            data-testid="hero-headline"
          >
            {HERO.headline.map((line, i) => (
              <span key={i} className="block">
                {i === 2 ? <span className="hero-line-gradient">{line}</span> : line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#A9C7D9]"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href={SITE.registerUrl}
              external
              testId="hero-register-button"
              className="rounded-xl px-7 py-3.5 font-heading font-bold text-sm tracking-wide bg-[#2EF2FF] text-[#07060B] shadow-[0_0_0_1px_rgba(46,242,255,0.25),0_0_36px_rgba(46,242,255,0.25)] hover:brightness-110"
            >
              {HERO.primaryCta}
              <ChevronRight size={16} strokeWidth={2.6} />
            </MagneticButton>
            <button
              onClick={() => scrollToAnchor("#tracks")}
              data-testid="hero-explore-tracks-button"
              className="rounded-xl px-6 py-3.5 font-heading font-semibold text-sm bg-white/5 text-[#EAF6FF] border border-[rgba(255,216,74,0.35)] hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(46,242,255,0.55)]"
            >
              {HERO.secondaryCta}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-12 flex items-center gap-8 sm:gap-12"
            data-testid="hero-stats"
          >
            {HERO.stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono-data text-2xl sm:text-3xl font-semibold neon-text-yellow">
                  {s.value}
                </div>
                <div className="mono-label text-[#A9C7D9] mt-1 text-[10px]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arcade cabinet */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            ref={cabRef}
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hero-cab"
            data-testid="hero-cabinet"
          >
            <div className="hero-cab-glow" />
            <div className="hero-cab-body">
              <div className="hero-cab-marquee">
                <span className="pixel-label">HACK++ATHON</span>
              </div>
              <div className="hero-cab-screen">
                <div className="mono-label text-[#2EF2FF] mb-4 text-[10px]">
                  &gt; BOOT SEQUENCE v2.026
                </div>
                {CODE_LINES.map((l, i) => (
                  <div
                    key={i}
                    className="code-line"
                    style={{
                      width: l.w,
                      background: l.c,
                      animationDelay: `${i * 0.35}s`,
                      opacity: 0.7,
                    }}
                  />
                ))}
                <div className="mono-label text-[#EAF6FF] mt-4 text-[10px]">
                  &gt; BUILD_THE_FUTURE
                  <span className="cab-cursor" />
                </div>
              </div>
              <div className="hero-cab-deck">
                <div className="joystick">
                  <div className="joystick-base" />
                  <div className="joystick-stick" />
                  <div className="joystick-ball" />
                </div>
                <div>
                  <i className="arcade-btn red" />
                  <i className="arcade-btn yellow" />
                  <i className="arcade-btn magenta" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="mono-label text-[#A9C7D9] text-[9px]">SCROLL TO CONTINUE</span>
        <div className="w-5 h-9 rounded-full border border-[rgba(46,242,255,0.35)] flex justify-center pt-1.5">
          <div className="scroll-indicator-dot w-1 h-1.5 rounded-full bg-[#2EF2FF]" />
        </div>
      </div>
    </section>
  );
};
