import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()

    if (menuOpen) {
      // Close the menu first, then wait for it to fully close & unlock scroll
      setMenuOpen(false)
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100) // 100ms ensures the body overflow is reset and menu has unmounted
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="container-ww">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 border transition-all duration-300 ${
            scrolled
              ? 'bg-app/80 backdrop-blur-md border-line shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border-transparent'
          }`}
        >
          <a href="#top" onClick={handleNavClick('#top')} aria-label="RaveWebs home">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="group relative text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.label}
                {/* Subtle underline glow effect for desktop */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button as="a" href="#contact" onClick={handleNavClick('#contact')} variant="primary" icon={<ArrowUpRight size={15} />}>
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-primary transition-colors hover:border-accent/50 hover:text-accent"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Premium Glass Effect & Staggered Links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container-ww pt-3">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/90 backdrop-blur-xl shadow-2xl p-4">
                {/* Top gradient line for premium look */}
                <div className="absolute left-0 right-0 top-0 h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent" />

                <div className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick(link.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                      className="rounded-lg px-3 py-3 text-base font-medium text-secondary transition-colors hover:bg-app hover:text-primary"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="mt-3"
                >
                  <Button
                    as="a"
                    href="#contact"
                    onClick={handleNavClick('#contact')}
                    variant="primary"
                    className="w-full justify-center"
                    icon={<ArrowUpRight size={15} />}
                  >
                    Start a Project
                  </Button>
                </motion.div>

                {/* Mobile Security footer */}
                <p className="mt-4 pb-1 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
                  RaveWebs — Digital & AI Automation
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
