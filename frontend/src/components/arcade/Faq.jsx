import { Power } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FAQS } from "../../content";
import { SectionHeading } from "./SectionHeading";

export const Faq = () => (
  <section id="faq" className="relative py-24 sm:py-32" data-testid="faq-section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={FAQS.eyebrow}
        title={FAQS.title}
        sub={FAQS.sub}
        accent="cyan"
        testId="faq-heading"
      />
      <Accordion type="single" collapsible className="mt-12 max-w-3xl space-y-4">
        {FAQS.items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="terminal-item border-b-0 px-0"
            data-testid={`faq-accordion-item-${i + 1}`}
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline group">
              <span className="flex items-center gap-4 text-left">
                <span className="shrink-0 w-8 h-8 rounded-lg border border-[rgba(46,242,255,0.25)] bg-[rgba(46,242,255,0.06)] flex items-center justify-center">
                  <Power
                    size={14}
                    strokeWidth={2.4}
                    className="text-[#2EF2FF] group-data-[state=open]:drop-shadow-[0_0_8px_rgba(46,242,255,0.9)] transition-[filter]"
                  />
                </span>
                <span>
                  <span className="mono-label text-[9px] text-[#A9C7D9] block mb-1">
                    TERMINAL {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-semibold text-base text-[#EAF6FF]">
                    {item.question}
                  </span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="terminal-body rounded-lg bg-[rgba(5,4,9,0.75)] border border-[rgba(46,242,255,0.14)] p-5 ml-12">
                <div className="flex items-center justify-between mb-3">
                  <span className="mono-label text-[9px] text-[#2EF2FF]">&gt; OUTPUT</span>
                  <div className="terminal-bars" aria-hidden="true">
                    <i /><i /><i /><i />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#A9C7D9] relative z-10">{item.answer}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
