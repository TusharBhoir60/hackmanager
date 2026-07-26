import { useCallback } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, ShieldCheck, Globe } from "lucide-react";
import { TRACKS } from "../../content";
import { SectionHeading } from "./SectionHeading";
import { GLOWS } from "./glow";
import { usePrefersReducedMotion } from "../../hooks/useArcade";

const ICONS = { BrainCircuit, Lightbulb, ShieldCheck, Globe };

const TrackCabinet = ({ track, index }) => {
  const glow = GLOWS[track.glow];
  const Icon = ICONS[track.icon];
  const reduced = usePrefersReducedMotion();

  const handleMove = useCallback(
    (e) => {
      if (reduced) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tilt-y", `${px * 7}deg`);
      el.style.setProperty("--tilt-x", `${-py * 7}deg`);
    },
    [reduced]
  );

  const handleLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-x", "0deg");
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="cabinet-card p-5 sm:p-6"
      style={{
        "--cab-glow-border": glow.border,
        "--cab-glow-strong": glow.strong,
        "--cab-glow-soft": glow.soft,
      }}
      data-testid={`track-card-${track.id}`}
    >
      {/* Marquee */}
      <div className="flex items-center justify-between">
        <span className="pixel-label" style={{ color: glow.hex }}>
          {track.code}
        </span>
        <span
          className="w-2 h-2 rounded-full neon-flicker"
          style={{ background: glow.hex, boxShadow: glow.shadow }}
          aria-hidden="true"
        />
      </div>

      {/* Screen */}
      <div className="cabinet-screen mt-4 p-6 sm:p-7">
        <div className="screen-flicker-line" aria-hidden="true" />
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center border"
          style={{
            borderColor: glow.border,
            background: `${glow.hex}14`,
            boxShadow: glow.shadow,
          }}
        >
          <Icon size={26} strokeWidth={1.8} style={{ color: glow.hex }} />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold mt-5 text-[#EAF6FF]">
          {track.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#A9C7D9]">{track.description}</p>
        <div className="mt-5 pt-4 border-t border-[rgba(234,246,255,0.08)]">
          <span className="mono-label text-[10px]" style={{ color: glow.hex }}>
            {track.build}
          </span>
        </div>
      </div>

      {/* Deck strip */}
      <div className="mt-4 flex items-center justify-between">
        <span className="mono-label text-[#A9C7D9] text-[9px]">1P · INSERT IDEA</span>
        <div className="flex gap-1.5" aria-hidden="true">
          {[0.9, 0.55, 0.3].map((o, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: glow.hex, opacity: o }}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const Tracks = () => (
  <section id="tracks" className="relative py-24 sm:py-32" data-testid="tracks-section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={TRACKS.eyebrow}
        title={TRACKS.title}
        sub={TRACKS.sub}
        accent="cyan"
        testId="tracks-heading"
      />
      <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
        {TRACKS.items.map((track, i) => (
          <TrackCabinet key={track.id} track={track} index={i} />
        ))}
      </div>
    </div>
  </section>
);
