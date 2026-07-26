import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useArcade";

// Insane live background: drifting aurora orbs + rotating conic haze +
// horizontal scan sweep + infinite scrolling mega-grid, all scroll-reactive.
export const NeonBackground = () => {
  const wrapRef = useRef(null);
  const orbARef = useRef(null);
  const orbBRef = useRef(null);
  const orbCRef = useRef(null);
  const gridRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  // Scroll-reactive parallax + depth (rAF-throttled, no jank)
  useEffect(() => {
    if (reduced) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const maxScroll = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1
        );
        const p = y / maxScroll;
        if (orbARef.current)
          orbARef.current.style.transform = `translate3d(${p * -160}px, ${y * 0.06}px, 0) scale(${1 + p * 0.35})`;
        if (orbBRef.current)
          orbBRef.current.style.transform = `translate3d(${p * 200}px, ${y * -0.045}px, 0) scale(${1 + p * 0.25})`;
        if (orbCRef.current)
          orbCRef.current.style.transform = `translate3d(-50%, ${y * 0.03}px, 0) rotate(${p * 120}deg)`;
        if (gridRef.current)
          gridRef.current.style.transform = `perspective(700px) rotateX(64deg) translateY(${(y * 0.35) % 52}px)`;
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="neon-bg" aria-hidden="true">
      {/* Aurora orbs (palette only) */}
      <div ref={orbARef} className="bg-orb bg-orb-a" />
      <div ref={orbBRef} className="bg-orb bg-orb-b" />
      {/* Rotating conic haze */}
      <div ref={orbCRef} className="bg-conic" />
      {/* Infinite scrolling mega grid */}
      <div className="bg-grid-wrap">
        <div ref={gridRef} className="bg-grid" />
      </div>
      {/* Horizontal neon scan sweep */}
      {!reduced && <div className="bg-scan-sweep" />}
      {/* Star twinkles */}
      <div className="bg-stars" />
    </div>
  );
};
