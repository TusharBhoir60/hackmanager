import { motion } from "framer-motion";
import { Zap, Mail } from "lucide-react";
import { SPONSORS, SITE } from "../../content";
import { SectionHeading } from "./SectionHeading";

export const Sponsors = () => (
  <section id="sponsors" className="relative py-24 sm:py-32" data-testid="sponsors-section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={SPONSORS.eyebrow}
        title={SPONSORS.title}
        sub={SPONSORS.sub}
        accent="yellow"
        align="center"
        testId="sponsors-heading"
      />

      <div className="mt-14 space-y-10">
        {SPONSORS.tiers.map((tier, ti) => (
          <div key={tier.tier}>
            <div className="flex items-center gap-4 justify-center mb-6">
              <span className="inline-block w-10 h-px bg-[rgba(255,216,74,0.4)]" />
              <span className="mono-label text-[#FFD84A] text-[10px]">{tier.tier}</span>
              <span className="inline-block w-10 h-px bg-[rgba(255,216,74,0.4)]" />
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {tier.capsules.map((cap, ci) => (
                <motion.div
                  key={cap.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`sponsor-capsule sheen relative rounded-full border border-[rgba(46,242,255,0.18)] bg-[rgba(11,10,18,0.72)] backdrop-blur-md flex items-center gap-3 ${
                    ti === 0 ? "px-10 py-5" : "px-7 py-3.5"
                  }`}
                  data-testid={`sponsor-capsule-${ti + 1}-${ci + 1}`}
                >
                  <Zap
                    size={ti === 0 ? 18 : 14}
                    strokeWidth={2}
                    className="text-[#FFD84A]"
                  />
                  <span
                    className={`font-mono-data tracking-[0.14em] ${
                      ti === 0 ? "text-base text-[#EAF6FF]" : "text-xs text-[#A9C7D9]"
                    }`}
                  >
                    {cap.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-[#A9C7D9]">{SPONSORS.note}</p>
        <a
          href={`mailto:${SITE.sponsorEmail}`}
          data-testid="sponsor-contact-link"
          className="mt-4 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-heading font-semibold text-sm bg-white/5 text-[#EAF6FF] border border-[rgba(255,216,74,0.35)] hover:bg-white/10 transition-colors duration-200"
        >
          <Mail size={15} strokeWidth={2.2} />
          Become a Sponsor
        </a>
      </motion.div>
    </div>
  </section>
);
