import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Compass,
  Rocket,
  Briefcase,
  FolderGit2,
} from "lucide-react";
import { POWERUPS } from "../../content";
import { SectionHeading } from "./SectionHeading";
import { GLOWS } from "./glow";

const ICONS = { GraduationCap, Users, Compass, Rocket, Briefcase, FolderGit2 };

export const WhyParticipate = () => (
  <section id="why" className="relative py-24 sm:py-32" data-testid="why-section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={POWERUPS.eyebrow}
        title={POWERUPS.title}
        sub={POWERUPS.sub}
        accent="magenta"
        testId="why-heading"
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {POWERUPS.items.map((item, i) => {
          const glow = GLOWS[item.glow];
          const Icon = ICONS[item.icon];
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="powerup-card holo-card sheen p-6 sm:p-7 cursor-default"
              data-testid={`powerup-card-${item.name.toLowerCase()}`}
            >
              <div className="flex items-start justify-between">
                <div
                  className="powerup-icon-wrap w-13 h-13 p-3.5 rounded-full border"
                  style={{
                    borderColor: glow.border,
                    background: `${glow.hex}12`,
                    boxShadow: glow.shadow,
                  }}
                >
                  <Icon size={24} strokeWidth={1.8} style={{ color: glow.hex }} />
                </div>
                <span className="pixel-label" style={{ color: glow.hex }}>
                  {item.xp}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold mt-5 text-[#EAF6FF]">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A9C7D9]">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
