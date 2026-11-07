
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import type { MouseEvent } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setMenuOpen(false);

      const scrollToSection = () => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      if (menuOpen) {
        window.setTimeout(scrollToSection, 180);
      } else {
        scrollToSection();
      }
    };

  const isDark = scrolled;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isDark
            ? "rgba(13, 35, 25, 0.97)"
            : "rgba(250, 252, 249, 0.96)",
          borderColor: isDark
            ? "rgba(255,255,255,0.10)"
            : "rgba(20,40,28,0.08)",
          boxShadow: isDark
            ? "0 8px 30px rgba(0,0,0,0.16)"
            : "0 4px 24px rgba(20,40,28,0.04)",
        }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* Logo */}
          <div className="relative z-50">
            <Logo variant={scrolled ? "light" : "dark"} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className={`relative text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                  isDark
                    ? "text-[#E5EEE8] hover:text-[#8FE0B2]"
                    : "text-[#26372D] hover:text-[#168653]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              as="a"
              href="#contact"
              onClick={handleNavClick("#contact")}
              variant={isDark ? "secondary" : "primary"}
              icon={<ArrowUpRight size={16} />}
              className={
                isDark
                  ? "!border !border-[#B7E7C8] !bg-[#E5F4E9] !text-[#123B27] hover:!bg-white"
                  : "!bg-[#146C43] !text-white hover:!bg-[#105735]"
              }
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-200 lg:hidden ${
              isDark
                ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                : "border-[#DCE7DE] bg-white text-[#183B29] hover:bg-[#EDF5EF]"
            }`}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#071B11]/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="fixed left-4 right-4 top-[76px] z-50 overflow-hidden rounded-2xl border border-[#DCE9DF] bg-[#FBFDFB] p-4 shadow-2xl lg:hidden"
            >
              <nav className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center justify-between border-b border-[#E8EFE9] px-3 py-4 text-[15px] font-semibold text-[#20382A] transition-colors hover:bg-[#EFF7F1] hover:text-[#168653]"
                  >
                    {link.label}
                    <ChevronRight
                      size={17}
                      className="text-[#168653]"
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="pt-4">
                <Button
                  as="a"
                  href="#contact"
                  onClick={handleNavClick("#contact")}
                  variant="primary"
                  icon={<ArrowUpRight size={17} />}
                  className="w-full !justify-center !bg-[#146C43] !text-white hover:!bg-[#105735]"
                >
                  Let's Talk
                </Button>
              </div>

              <p className="mt-4 text-center text-xs font-medium tracking-wide text-[#718277]">
                Build smarter. Grow faster.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
