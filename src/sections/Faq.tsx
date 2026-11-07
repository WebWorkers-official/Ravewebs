
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqItems } from "@/data/faq";
import {
  ArrowUpRight,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F7FAF7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl lg:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE9DF] bg-white px-4 py-2">
            <HelpCircle size={15} className="text-[#168653]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#287449]">
              Frequently asked questions
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#17251C] sm:text-5xl lg:text-6xl">
            Questions?
            <span className="block text-[#168653]">
              We've got answers.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#526258] sm:text-lg">
            Everything you need to know about working with RaveWebs,
            our services, and how we help businesses grow with technology.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* LEFT CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-3xl border border-[#E0E9E1] bg-white p-7 shadow-[0_12px_40px_rgba(20,45,28,0.05)] sm:p-9">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5ED]">
                <MessageCircle size={22} className="text-[#168653]" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#17251C]">
                Still have questions?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#526258] sm:text-base">
                Every business is different. If you can't find the answer
                you're looking for, let's have a conversation about your
                requirements.
              </p>

              <a
                href="#contact"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#147D4A] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10673D]"
              >
                Talk to our team
                <ArrowUpRight size={18} />
              </a>

              <div className="my-7 h-px bg-[#E5ECE6]" />

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#68766D]">
                Prefer a direct conversation?
              </p>

              <a
                href="https://wa.me/918117028576"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#147D4A] transition hover:text-[#0D5834]"
              >
                Chat with us on WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="mt-6 px-2 text-xs text-[#68766D]">
              RaveWebs · Digital solutions for businesses.
            </p>
          </motion.div>

          {/* RIGHT FAQ ACCORDION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-w-0"
          >
            <div className="overflow-hidden rounded-3xl border border-[#E0E9E1] bg-white shadow-[0_12px_45px_rgba(20,45,28,0.05)]">

              <div className="flex items-center justify-between gap-3 border-b border-[#E5ECE6] px-6 py-5 sm:px-8">
                <h3 className="text-sm font-bold text-[#17251C] sm:text-base">
                  Common questions
                </h3>

                <span className="shrink-0 rounded-full bg-[#EAF5ED] px-3 py-2 text-xs font-bold text-[#147D4A]">
                  RaveWebs FAQ
                </span>
              </div>

              <div className="rave-faq-accordion px-4 py-4 sm:px-7 sm:py-6">
                <FaqAccordion items={faqItems} />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* FORCE READABLE COLORS INSIDE EXISTING FAQ ACCORDION */}
      <style>{`
        .rave-faq-accordion button {
          color: #17251C !important;
          background-color: transparent;
        }

        .rave-faq-accordion button span,
        .rave-faq-accordion button p {
          color: #17251C !important;
          opacity: 1 !important;
        }

        .rave-faq-accordion button:hover,
        .rave-faq-accordion button:hover span {
          color: #147D4A !important;
        }

        .rave-faq-accordion button svg {
          color: #168653 !important;
          stroke: #168653 !important;
          opacity: 1 !important;
        }

        .rave-faq-accordion p {
          color: #526258 !important;
          opacity: 1 !important;
        }

        .rave-faq-accordion {
          color: #17251C !important;
        }

        .rave-faq-accordion button:focus-visible {
          outline: 2px solid #168653 !important;
          outline-offset: 3px;
        }

        .rave-faq-accordion button,
        .rave-faq-accordion p {
          text-shadow: none !important;
        }
      `}</style>
    </section>
  );
}
