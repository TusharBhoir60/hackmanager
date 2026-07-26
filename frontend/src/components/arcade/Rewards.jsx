import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Sparkles,
  Star,
  Briefcase,
  ScrollText,
  Network,
  Gift,
} from "lucide-react";
import { REWARDS } from "../../content";
import { SectionHeading } from "./SectionHeading";
import { GLOWS } from "./glow";

const ICONS = { Trophy, Medal, Award, Sparkles, Star, Briefcase, ScrollText, Network, Gift };

const PrizeDisplay = ({ prize, index }) => {
  const glow = GLOWS[prize.glow];
  const Icon = ICONS[prize.icon];
  const large = prize.tier === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`holo-card sheen relative flex flex-col items-center text-center ${
        large ? "p-8 sm:p-10" : "p-6 sm:p-7"
      }`}
      style={{ borderColor: glow.border }}
      data-testid={`prize-card-${index + 1}`}
    >
      {/* Glass display glow */}
      <div
        className="absolute inset-x-8 top-6 h-24 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(50% 60% at 50% 40%, ${glow.hex}22, transparent 75%)`,
          filter: "blur(8px)",
        }}
        aria-hidden="true"
      />
      <div
        className={`trophy-float relative ${large ? "w-20 h-20" : "w-14 h-14"} rounded-2xl flex items-center justify-center border`}
        style={{
          borderColor: glow.border,
          background: `${glow.hex}10`,
          boxShadow: glow.shadow,
          animationDelay: `${index * 0.5}s`,
        }}
      >
        <Icon size={large ? 36 : 24} strokeWidth={1.6} style={{ color: glow.hex }} />
      </div>
      <span className="pixel-label mt-6" style={{ color: glow.hex }}>
        {prize.place}
      </span>
      <div
        className={`font-mono-data font-semibold mt-3 text-[#EAF6FF] ${
          large ? "text-3xl sm:text-4xl" : "text-2xl"
        }`}
        style={{ textShadow: `0 0 24px ${glow.hex}55` }}
      >
        {prize.amount}
      </div>
      <span className="mono-label text-[#A9C7D9] text-[10px] mt-2">{prize.label}</span>
      <div className="mt-5 w-full border-t border-[rgba(234,246,255,0.08)] pt-3">
        <span className="mono-label text-[9px]" style={{ color: glow.hex, opacity: 0.85 }}>
          ACHIEVEMENT UNLOCKED
        </span>
      </div>
    </motion.div>
  );
};

export const Rewards = () => {
  const large = REWARDS.prizes.filter((p) => p.tier === "large");
  const small = REWARDS.prizes.filter((p) => p.tier === "small");

  return (
    <section id="rewards" className="relative py-24 sm:py-32" data-testid="rewards-section">
      <div
        className="absolute inset-x-0 top-10 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 30%, rgba(255,216,74,0.05), transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={REWARDS.eyebrow}
          title={REWARDS.title}
          sub={REWARDS.sub}
          accent="yellow"
          align="center"
          testId="rewards-heading"
        />
        <div className="mt-14 grid sm:grid-cols-3 gap-6 lg:gap-8">
          {large.map((p, i) => (
            <PrizeDisplay key={p.label} prize={p} index={i} />
          ))}
        </div>
        <div className="mt-6 lg:mt-8 grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
          {small.map((p, i) => (
            <PrizeDisplay key={p.label} prize={p} index={i + 3} />
          ))}
        </div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap justify-center gap-4"
          data-testid="rewards-perks"
        >
          {REWARDS.perks.map((perk) => {
            const Icon = ICONS[perk.icon];
            return (
              <div
                key={perk.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,216,74,0.3)] bg-[rgba(255,216,74,0.06)] px-5 py-2.5 hover:bg-[rgba(255,216,74,0.12)] transition-colors duration-200"
              >
                <Icon size={15} strokeWidth={2} className="text-[#FFD84A]" />
                <span className="mono-label text-[10px] text-[#EAF6FF]">{perk.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
