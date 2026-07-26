import { useRef, useCallback } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../../hooks/useArcade";

// Magnetic CTA: pulls toward cursor, inner glow follows pointer
export const MagneticButton = ({
  children,
  className = "",
  href,
  onClick,
  testId,
  external = false,
}) => {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  const handleMove = useCallback(
    (e) => {
      if (reduced) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const dx = (relX / rect.width - 0.5) * 14;
      const dy = (relY / rect.height - 0.5) * 10;
      el.style.setProperty("--glow-x", `${relX}px`);
      el.style.setProperty("--glow-y", `${relY}px`);
      gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: "power2.out" });
    },
    [reduced]
  );

  const handleLeave = useCallback(() => {
    if (reduced) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.5)" });
  }, [reduced]);

  const Tag = href ? "a" : "button";
  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-testid={testId}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn inline-flex items-center justify-center gap-2 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(46,242,255,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] ${className}`}
    >
      {children}
    </Tag>
  );
};
