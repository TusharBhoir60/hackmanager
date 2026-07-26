import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { CrtOverlay } from "./components/arcade/CrtOverlay";
import { ParticleField } from "./components/arcade/ParticleField";
import { Navbar } from "./components/arcade/Navbar";
import { Hero } from "./components/arcade/Hero";
import { Story } from "./components/arcade/Story";
import { Tracks } from "./components/arcade/Tracks";
import { Timeline } from "./components/arcade/Timeline";
import { Rewards } from "./components/arcade/Rewards";
import { WhyParticipate } from "./components/arcade/WhyParticipate";
import { Highlights } from "./components/arcade/Highlights";
import { Sponsors } from "./components/arcade/Sponsors";
import { Faq } from "./components/arcade/Faq";
import { FinalCta } from "./components/arcade/FinalCta";
import { Footer } from "./components/arcade/Footer";
import { usePrefersReducedMotion } from "./hooks/useArcade";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const reduced = usePrefersReducedMotion();
  const glowRef = useRef(null);

  // Lenis smooth scroll synced with GSAP ScrollTrigger
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [reduced]);

  // Cursor glow follows pointer (desktop only)
  useEffect(() => {
    if (reduced) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const el = glowRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced]);

  return (
    <div className="App dark">
      <ParticleField />
      {!reduced && <div ref={glowRef} className="cursor-glow" aria-hidden="true" />}
      <Navbar />
      <main className="page-content">
        <Hero />
        <Story />
        <Tracks />
        <Timeline />
        <Rewards />
        <WhyParticipate />
        <Highlights />
        <Sponsors />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CrtOverlay />
    </div>
  );
}

export default App;
