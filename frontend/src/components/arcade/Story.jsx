import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { STORY } from "../../content";
import { useInViewOnce, usePrefersReducedMotion } from "../../hooks/useArcade";

gsap.registerPlugin(ScrollTrigger);

// Pixel grid positions (retro layer)
const PIXELS = [
  { x: 18, y: 22, s: 14, c: "#FFD84A" },
  { x: 52, y: 12, s: 10, c: "#FF2BD6" },
  { x: 78, y: 30, s: 12, c: "#2EF2FF" },
  { x: 30, y: 52, s: 16, c: "#7A2CFF" },
  { x: 64, y: 58, s: 10, c: "#FFD84A" },
  { x: 12, y: 74, s: 12, c: "#2B6CFF" },
  { x: 84, y: 72, s: 14, c: "#FF2BD6" },
  { x: 46, y: 82, s: 10, c: "#2EF2FF" },
];

// Neural network nodes (future layer)
const NODES = [
  { x: 20, y: 25 },
  { x: 50, y: 14 },
  { x: 80, y: 28 },
  { x: 32, y: 50 },
  { x: 66, y: 55 },
  { x: 15, y: 75 },
  { x: 50, y: 84 },
  { x: 85, y: 74 },
];
const EDGES = [
  [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4],
  [3, 5], [3, 6], [4, 6], [4, 7], [5, 6], [6, 7],
];

export const Story = () => {
  const panelRef = useRef(null);
  const pixelsRef = useRef(null);
  const netRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [titleRef, titleInView] = useInViewOnce({ threshold: 0.6 });
  const [glitched, setGlitched] = useState(false);

  useEffect(() => {
    if (titleInView) {
      setGlitched(true);
      const t = setTimeout(() => setGlitched(false), 650);
      return () => clearTimeout(t);
    }
  }, [titleInView]);

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      // Pixels dissolve into the neural network as you scroll through
      gsap.fromTo(
        pixelsRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 75%",
            end: "center 35%",
            scrub: 0.5,
          },
        }
      );
      gsap.fromTo(
        netRef.current,
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 75%",
            end: "center 35%",
            scrub: 0.5,
          },
        }
      );
    }, panelRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="story" className="relative py-24 sm:py-32" data-testid="story-section">
      {/* ambient transition gradient */}
      <div
        className="absolute inset-x-0 -top-24 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(122,44,255,0.05), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <div className="mono-label text-[#FF2BD6] flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-current opacity-60" />
            {STORY.eyebrow}
          </div>
          <h2
            ref={titleRef}
            className={`font-display font-extrabold text-[clamp(1.5rem,3.4vw,2.9rem)] leading-[1.15] mt-4 title-gradient glitch-once ${glitched ? "is-glitching" : ""}`}
            data-testid="story-title"
          >
            {STORY.title}
          </h2>
          <div className="mt-7 space-y-5">
            {STORY.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base leading-relaxed text-[#A9C7D9]"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Transformation panel */}
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, rotateY: -6, y: 30 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="holo-card sheen p-6 sm:p-8"
          data-testid="story-transformation-panel"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="pixel-label text-[#FFD84A]">{STORY.transformLabels.from}</span>
            <span className="mono-label text-[#2EF2FF] text-[10px]">→ {STORY.transformLabels.to}</span>
          </div>
          <div className="relative aspect-square max-h-[380px] w-full">
            {/* Retro pixel layer */}
            <div ref={pixelsRef} className="absolute inset-0">
              {PIXELS.map((p, i) => (
                <div
                  key={i}
                  className="pixel-block absolute"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.s,
                    height: p.s,
                    background: p.c,
                    boxShadow: `0 0 10px ${p.c}66`,
                  }}
                />
              ))}
            </div>
            {/* Neural network layer */}
            <svg
              ref={netRef}
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{ opacity: reduced ? 1 : 0.1 }}
              aria-hidden="true"
            >
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].x}
                  y1={NODES[a].y}
                  x2={NODES[b].x}
                  y2={NODES[b].y}
                  stroke="#2EF2FF"
                  strokeWidth="0.35"
                  strokeOpacity="0.5"
                  className="neural-line"
                />
              ))}
              {NODES.map((n, i) => (
                <circle key={i} cx={n.x} cy={n.y} r="1.6" fill="#FF2BD6">
                  <animate
                    attributeName="r"
                    values="1.3;2.1;1.3"
                    dur="3s"
                    begin={`${i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-[rgba(46,242,255,0.12)] pt-4">
            <span className="mono-label text-[#A9C7D9] text-[10px]">SIGNAL: EVOLVING</span>
            <div className="terminal-bars" aria-hidden="true">
              <i /><i /><i /><i />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
