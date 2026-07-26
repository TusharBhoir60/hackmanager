import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/useArcade";

const PALETTE = ["#2EF2FF", "#FF2BD6", "#7A2CFF", "#FFD84A", "#2B6CFF"];

// Fixed full-page canvas: floating pixels + digital rain.
// Intensity ramps up near the bottom of the page (Final CTA climax).
export const ParticleField = () => {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let running = true;

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 36 : 90;
    const RAIN_COUNT = isMobile ? 5 : 12;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (a, b) => a + Math.random() * (b - a);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rand(0, W),
      y: rand(0, H),
      size: rand(1, 3.2),
      speed: rand(0.08, 0.4),
      drift: rand(-0.12, 0.12),
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      alpha: rand(0.15, 0.55),
      pulse: rand(0, Math.PI * 2),
    }));

    const rains = Array.from({ length: RAIN_COUNT }, () => ({
      x: rand(0, W),
      y: rand(-H, 0),
      len: rand(40, 130),
      speed: rand(1.6, 4.2),
      color: Math.random() > 0.5 ? "#2EF2FF" : "#FF2BD6",
      alpha: rand(0.05, 0.16),
    }));

    // Static render for reduced motion
    if (reduced) {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.globalAlpha = p.alpha * 0.5;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      ctx.globalAlpha = 1;
      return;
    }

    let t = 0;
    const draw = () => {
      if (!running) return;
      t += 0.016;

      // Climax boost: particles intensify near page bottom (Final CTA)
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = window.scrollY / maxScroll;
      const boost = progress > 0.82 ? 1 + ((progress - 0.82) / 0.18) * 1.4 : 1;

      ctx.clearRect(0, 0, W, H);

      // Digital rain
      rains.forEach((r) => {
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.len);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, r.color);
        ctx.globalAlpha = r.alpha * boost;
        ctx.fillStyle = grad;
        ctx.fillRect(r.x, r.y, 1.5, r.len);
        r.y += r.speed * boost;
        if (r.y > H + r.len) {
          r.y = -r.len;
          r.x = Math.random() * W;
        }
      });

      // Floating pixels
      particles.forEach((p) => {
        const flicker = 0.75 + 0.25 * Math.sin(t * 2 + p.pulse);
        ctx.globalAlpha = Math.min(p.alpha * flicker * boost, 0.85);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.y -= p.speed * boost;
        p.x += p.drift;
        if (p.y < -6) {
          p.y = H + 6;
          p.x = Math.random() * W;
        }
        if (p.x < -6) p.x = W + 6;
        if (p.x > W + 6) p.x = -6;
      });

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
};
