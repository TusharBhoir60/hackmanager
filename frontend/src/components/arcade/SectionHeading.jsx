import { motion } from "framer-motion";

// Shared section heading with eyebrow + title + sub, scroll reveal
export const SectionHeading = ({ eyebrow, title, sub, align = "left", accent = "cyan", testId }) => {
  const accentClass =
    accent === "magenta"
      ? "text-[#FF2BD6]"
      : accent === "yellow"
        ? "text-[#FFD84A]"
        : "text-[#2EF2FF]";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}
      data-testid={testId}
    >
      <div className={`mono-label ${accentClass} flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-block w-8 h-px bg-current opacity-60" />
        {eyebrow}
      </div>
      <h2 className="font-display font-extrabold text-[clamp(1.5rem,3.4vw,2.9rem)] leading-[1.15] mt-4 title-gradient">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#A9C7D9]">{sub}</p>
      )}
    </motion.div>
  );
};
