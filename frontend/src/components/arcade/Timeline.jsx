import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Coins, Users, Code2, Swords } from "lucide-react";
import { TIMELINE } from "../../content";
import { SectionHeading } from "./SectionHeading";
import { useInViewOnce, usePrefersReducedMotion } from "../../hooks/useArcade";

gsap.registerPlugin(ScrollTrigger);

const ICONS = { Coins, Users, Code2, Swords };

const LevelCard = ({ level, index }) => {
  const Icon = ICONS[level.icon];
  const [ref, inView] = useInViewOnce({ threshold: 0.4 });
  const accent = level.boss ? "#FF2BD6" : "#2EF2FF";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-16 sm:pl-20 pb-14 last:pb-0"
      data-testid={`timeline-level-${index + 1}-card`}
    >
      {/* Node */}
      <div
        className="absolute left-4 sm:left-6 top-1 w-5 h-5 rounded-full border-2 -translate-x-1/2 flex items-center justify-center"
        style={{
          borderColor: accent,
          background: "#07060B",
          boxShadow: inView ? `0 0 16px ${accent}88` : "none",
          transition: "box-shadow .4s ease",
        }}
        aria-hidden="true"
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: accent, opacity: inView ? 1 : 0.3 }}
        />
      </div>

      <div
        className={`holo-card sheen p-6 sm:p-7 ${level.boss ? "boss-card" : ""} ${level.boss && inView ? "in-view" : ""}`}
        style={
          level.boss
            ? {
                borderColor: "rgba(255,43,214,0.35)",
                boxShadow:
                  "0 0 0 1px rgba(255,43,214,0.18), 0 0 40px rgba(255,43,214,0.12), 0 18px 60px rgba(0,0,0,0.55)",
              }
            : undefined
        }
      >
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <span
            className="pixel-label"
            style={{ color: level.boss ? "#FF2BD6" : "#FFD84A" }}
          >
            {level.level}
          </span>
          <span className="mono-label text-[10px] px-3 py-1 rounded-full border border-[rgba(46,242,255,0.25)] text-[#A9C7D9]">
            {level.date}
          </span>
        </div>
        <div className="flex items-start gap-4 mt-4">
          <div
            className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border"
            style={{
              borderColor: `${accent}44`,
              background: `${accent}12`,
            }}
          >
            <Icon size={20} strokeWidth={1.9} style={{ color: accent }} />
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#EAF6FF]">
              {level.title}
              {level.boss && (
                <span className="ml-3 mono-label text-[9px] px-2 py-0.5 rounded border border-[rgba(255,43,214,0.4)] text-[#FF2BD6] align-middle">
                  FINAL BOSS
                </span>
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A9C7D9]">{level.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const railRef = useRef(null);
  const wrapRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="timeline" className="relative py-24 sm:py-32" data-testid="timeline-section">
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(43,108,255,0.04), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={TIMELINE.eyebrow}
          title={TIMELINE.title}
          sub={TIMELINE.sub}
          accent="yellow"
          testId="timeline-heading"
        />
        <div ref={wrapRef} className="relative mt-16 max-w-3xl">
          {/* Rail */}
          <div
            className="absolute left-4 sm:left-6 top-2 bottom-8 w-px bg-[rgba(46,242,255,0.12)]"
            aria-hidden="true"
          />
          <div
            ref={railRef}
            className="absolute left-4 sm:left-6 top-2 bottom-8 w-px"
            style={{
              background: "linear-gradient(180deg, #2EF2FF, #7A2CFF, #FF2BD6)",
              boxShadow: "0 0 12px rgba(46,242,255,0.4)",
            }}
            aria-hidden="true"
          />
          {TIMELINE.levels.map((level, i) => (
            <LevelCard key={level.level} level={level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
