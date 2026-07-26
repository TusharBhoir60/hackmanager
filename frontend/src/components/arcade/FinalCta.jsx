import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Coins } from "lucide-react";
import { SITE, FINAL_CTA } from "../../content";
import { MagneticButton } from "./MagneticButton";
import { usePrefersReducedMotion } from "../../hooks/useArcade";

gsap.registerPlugin(ScrollTrigger);

export const FinalCta = () => {
  const sectionRef = useRef(null);
  const roomGlowRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      // Room brightens as the giant cabinet powers on
      gsap.fromTo(
        roomGlowRef.current,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center 45%",
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="register"
      ref={sectionRef}
      className="relative py-28 sm:py-40 overflow-hidden"
      data-testid="final-cta-section"
    >
      {/* Room lighting */}
      <div
        ref={roomGlowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 55%, rgba(46,242,255,0.13) 0%, rgba(255,43,214,0.07) 40%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="final-cab p-6 sm:p-10"
          data-testid="final-cta-cabinet"
        >
          {/* Marquee */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="inline-block w-12 h-px bg-[rgba(255,216,74,0.5)]" />
            <span className="pixel-label neon-text-yellow press-start">{FINAL_CTA.pixelLabel}</span>
            <span className="inline-block w-12 h-px bg-[rgba(255,216,74,0.5)]" />
          </div>

          {/* Screen */}
          <div className="final-cab-screen p-8 sm:p-14 text-center">
            <h2 className="font-display font-extrabold text-[clamp(1.7rem,4vw,3.2rem)] leading-[1.15] title-gradient relative z-10">
              {FINAL_CTA.title}
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-[#A9C7D9] relative z-10">
              {FINAL_CTA.sub}
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 relative z-10">
              <MagneticButton
                href={SITE.registerUrl}
                external
                testId="final-cta-register-button"
                className="rounded-xl px-9 py-4.5 sm:px-12 sm:py-5 font-heading font-bold text-base sm:text-lg tracking-wide bg-[#2EF2FF] text-[#07060B] shadow-[0_0_0_1px_rgba(46,242,255,0.3),0_0_50px_rgba(46,242,255,0.35)] hover:brightness-110"
              >
                <Coins size={20} strokeWidth={2.2} />
                {FINAL_CTA.cta}
              </MagneticButton>
              <span className="mono-label text-[9px] text-[#A9C7D9]">{FINAL_CTA.microcopy}</span>
            </div>
          </div>

          {/* Deck: coin slot + event details */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="coin-slot" aria-hidden="true" />
              <span className="mono-label text-[9px] text-[#FFD84A]">COIN SLOT · READY</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 mono-label text-[9px] text-[#A9C7D9]">
                <CalendarDays size={12} className="text-[#2EF2FF]" />
                {SITE.datesLong}
              </span>
              <span className="inline-flex items-center gap-2 mono-label text-[9px] text-[#A9C7D9]">
                <MapPin size={12} className="text-[#FF2BD6]" />
                {SITE.venueShort}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
