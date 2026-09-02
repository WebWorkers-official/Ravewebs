import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from './Logo'
import { LinkedinIcon } from './icons'
import { config } from '@/lib/config'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-line">
      <div className="container-ww py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              Build. Automate. Grow. Websites, AI systems and automation for businesses that want to run leaner.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">Navigate</p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleClick(link.href)} className="text-sm text-secondary hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">Connect</p>
              <ul className="flex flex-col gap-2">
                {config.linkedinUrl && (
                  <li>
                    <a href={config.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                      <LinkedinIcon size={14} /> LinkedIn
                    </a>
                  </li>
                )}
                {config.whatsappUrl && (
                  <li>
                    <a href={config.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </li>
                )}
                {config.email && (
                  <li>
                    <a href={`mailto:${config.email}`} className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
                      <Mail size={14} /> Email
                    </a>
                  </li>
                )}
                {!config.linkedinUrl && !config.whatsappUrl && !config.email && (
                  <li className="text-sm text-muted">Links not configured yet</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 RaveWebs. All rights reserved.</p>
          <p>Built for businesses that want to work smarter.</p>
        </div>
      </div>
    </footer>
  )
}
