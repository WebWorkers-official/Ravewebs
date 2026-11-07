
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { Logo } from "./Logo";
import { LinkedinIcon } from "./icons";
import { config } from "@/lib/config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

  return (
    <footer className="relative overflow-hidden border-t border-[#294536] bg-[#10291D] text-white">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#1C8050]/10 blur-3xl"
      />

      <div className="container-ww relative mx-auto px-5 sm:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo variant="light" />

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-[#C0D1C5]">
              Build. Automate. Grow. We create websites, AI systems and
              automation that help businesses work smarter and grow faster.
            </p>

            <a
              href="#contact"
              onClick={handleClick("#contact")}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#4A765B] bg-[#1B4931] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-[#72C996] hover:bg-[#24623F]"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#83D5A3]">
              Explore
            </h3>

            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleClick(link.href)}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#D5E1D9] transition-colors duration-200 hover:text-[#83D5A3]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#83D5A3]">
              Get in touch
            </h3>

            <p className="mb-6 max-w-xs text-sm leading-6 text-[#B5C8BB]">
              Have a project in mind? Let's discuss how we can help your
              business move forward.
            </p>

            <ul className="flex flex-col gap-4">
              {config.email && (
                <li>
                  <a
                    href={`mailto:${config.email}`}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-[#E2ECE5] transition-colors hover:text-[#83D5A3]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#345440] bg-[#193A29] text-[#83D5A3] transition-colors group-hover:bg-[#24583A]">
                      <Mail size={16} />
                    </span>
                    {config.email}
                  </a>
                </li>
              )}

              {config.whatsappUrl && (
                <li>
                  <a
                    href={config.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm font-medium text-[#E2ECE5] transition-colors hover:text-[#83D5A3]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#345440] bg-[#193A29] text-[#83D5A3] transition-colors group-hover:bg-[#24583A]">
                      <MessageCircle size={16} />
                    </span>
                    WhatsApp
                  </a>
                </li>
              )}

              {config.linkedinUrl && (
                <li>
                  <a
                    href={config.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm font-medium text-[#E2ECE5] transition-colors hover:text-[#83D5A3]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#345440] bg-[#193A29] text-[#83D5A3] transition-colors group-hover:bg-[#24583A]">
                      <LinkedinIcon size={16} />
                    </span>
                    LinkedIn
                  </a>
                </li>
              )}

              {!config.linkedinUrl &&
                !config.whatsappUrl &&
                !config.email && (
                  <li className="text-sm text-[#AFC2B5]">
                    Contact links coming soon.
                  </li>
                )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-[#34503E] py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-medium text-[#AFC2B5]">
            © {new Date().getFullYear()} RaveWebs. All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wide text-[#AFC2B5]">
            Built for businesses that want to work smarter.
          </p>

          <a
            href="#top"
            onClick={handleClick("#top")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#83D5A3] transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
