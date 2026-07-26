import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { HIGHLIGHTS } from "../../content";
import { SectionHeading } from "./SectionHeading";
import { useInViewOnce, useCountUp } from "../../hooks/useArcade";

const StatCounter = ({ stat, start }) => {
  const value = useCountUp(stat.value, start);
  return (
    <div className="holo-card p-6 text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="font-mono-data text-3xl sm:text-4xl font-semibold neon-text-cyan">
        {value}
        {stat.suffix}
      </div>
      <div className="mono-label text-[#A9C7D9] text-[9px] mt-2">{stat.label}</div>
    </div>
  );
};

export const Highlights = () => {
  const [statsRef, statsInView] = useInViewOnce({ threshold: 0.4 });

  return (
    <section id="highlights" className="relative py-24 sm:py-32" data-testid="highlights-section">
      <div
        className="absolute inset-x-0 top-0 h-56 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(122,44,255,0.06), transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={HIGHLIGHTS.eyebrow}
          title={HIGHLIGHTS.title}
          sub={HIGHLIGHTS.sub}
          accent="cyan"
          testId="highlights-heading"
        />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="holo-card overflow-hidden"
            data-testid="highlights-leaderboard"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(46,242,255,0.14)]">
              <span className="pixel-label text-[#FFD84A]">HIGH SCORES // 2025</span>
              <div className="terminal-bars" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
            </div>
            <div className="divide-y divide-[rgba(234,246,255,0.06)]">
              {HIGHLIGHTS.leaderboard.map((row, i) => (
                <div
                  key={row.rank}
                  className={`leaderboard-row flex items-center gap-4 px-6 py-4 ${i === 0 ? "bg-[rgba(255,216,74,0.05)]" : ""}`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <span
                    className="font-mono-data text-sm font-semibold w-8"
                    style={{ color: i === 0 ? "#FFD84A" : i === 1 ? "#2EF2FF" : i === 2 ? "#FF2BD6" : "#A9C7D9" }}
                  >
                    {row.rank}
                  </span>
                  <span className="font-heading font-semibold text-sm text-[#EAF6FF] flex-1 flex items-center gap-2">
                    {row.team}
                    {i === 0 && <Crown size={14} className="text-[#FFD84A]" strokeWidth={2.2} />}
                  </span>
                  <span className="font-mono-data text-sm text-[#A9C7D9]">{row.score}</span>
                  {row.badge && (
                    <span className="hidden sm:inline mono-label text-[8px] px-2 py-0.5 rounded border border-[rgba(46,242,255,0.25)] text-[#2EF2FF]">
                      {row.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-5" data-testid="highlights-stats">
            {HIGHLIGHTS.stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} start={statsInView} />
            ))}
          </div>
        </div>

        {/* Winner screens */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.winners.map((w, i) => (
            <motion.div
              key={w.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="holo-card sheen p-6"
              data-testid={`winner-card-${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <span className="pixel-label text-[#2EF2FF]">{w.year}</span>
                <span className="mono-label text-[9px] text-[#FFD84A]">WINNER</span>
              </div>
              <h3 className="font-heading text-lg font-bold mt-4 text-[#EAF6FF]">{w.project}</h3>
              <p className="mono-label text-[10px] text-[#FF2BD6] mt-1">TEAM {w.team.toUpperCase()}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#A9C7D9]">{w.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
