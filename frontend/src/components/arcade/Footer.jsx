import { Mail } from "lucide-react";
import { SITE, FOOTER } from "../../content";
import { scrollToAnchor } from "../../hooks/useArcade";

export const Footer = () => (
  <footer
    className="relative border-t border-[rgba(46,242,255,0.12)] bg-[rgba(5,4,9,0.9)]"
    data-testid="site-footer"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <img
            src={SITE.logoUrl}
            alt={SITE.name}
            className="h-10 w-auto drop-shadow-[0_0_10px_rgba(46,242,255,0.25)]"
          />
          <p className="mt-4 text-sm text-[#A9C7D9] max-w-xs">{FOOTER.tagline}</p>
          <a
            href={`mailto:${SITE.email}`}
            data-testid="footer-email-link"
            className="mt-5 inline-flex items-center gap-2 mono-label text-[10px] text-[#2EF2FF] hover:text-[#EAF6FF] transition-colors"
          >
            <Mail size={13} strokeWidth={2.2} />
            {SITE.email}
          </a>
        </div>
        {FOOTER.columns.map((col) => (
          <div key={col.title}>
            <h4 className="mono-label text-[10px] text-[#FFD84A]">{col.title}</h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm text-[#A9C7D9] hover:text-[#2EF2FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToAnchor(link.href);
                      }}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm text-[#A9C7D9] hover:text-[#2EF2FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-[rgba(234,246,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="mono-label text-[9px] text-[#A9C7D9] text-center sm:text-left">
          {FOOTER.copyright}
        </p>
        <span className="pixel-label text-[#2EF2FF] neon-flicker text-[8px]">GAME ON</span>
      </div>
    </div>
  </footer>
);
