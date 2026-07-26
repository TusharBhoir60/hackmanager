import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import { SITE, NAV_LINKS } from "../../content";
import { scrollToAnchor } from "../../hooks/useArcade";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToAnchor(href);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(7,6,11,0.82)] backdrop-blur-xl border-b border-[rgba(46,242,255,0.14)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleAnchor(e, "#top")}
          className="flex items-center gap-3"
          data-testid="nav-logo"
          aria-label={`${SITE.name} home`}
        >
          <img
            src={SITE.logoUrl}
            alt={SITE.name}
            className="h-9 w-auto drop-shadow-[0_0_12px_rgba(46,242,255,0.35)]"
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="mono-label text-[#A9C7D9] hover:text-[#2EF2FF] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE.registerUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-register-button"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-heading font-semibold text-sm bg-[#2EF2FF] text-[#07060B] shadow-[0_0_0_1px_rgba(46,242,255,0.22),0_0_28px_rgba(46,242,255,0.18)] hover:brightness-110 active:brightness-95 transition-[filter] duration-150"
          >
            Register
            <ExternalLink size={14} strokeWidth={2.4} />
          </a>
          <button
            className="lg:hidden text-[#EAF6FF] p-2 rounded-lg border border-[rgba(46,242,255,0.2)] bg-[rgba(11,10,18,0.7)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[rgba(7,6,11,0.96)] backdrop-blur-xl border-b border-[rgba(46,242,255,0.14)]"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="mono-label text-[#A9C7D9] hover:text-[#2EF2FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.registerUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="nav-mobile-register-button"
                className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 font-heading font-semibold text-sm bg-[#2EF2FF] text-[#07060B]"
              >
                Register <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
