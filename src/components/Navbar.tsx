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
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button as="a" href="#contact" onClick={handleNavClick('#contact')} variant="primary" icon={<ArrowUpRight size={15} />}>
              Start a Project
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-primary"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

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
              <div className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-secondary transition-colors hover:bg-app hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  as="a"
                  href="#contact"
                  onClick={handleNavClick('#contact')}
                  variant="primary"
                  className="mt-2 justify-center"
                  icon={<ArrowUpRight size={15} />}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
