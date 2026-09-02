import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactForm } from '@/components/ContactForm'
import { LinkedinIcon } from '@/components/icons'
import { config } from '@/lib/config'

function waLink(base: string) {
  const message = encodeURIComponent("Hi RaveWebs, I'd like to talk about a project.")
  return base.includes('?') ? `${base}&text=${message}` : `${base}?text=${message}`
}

const channels = [
  { key: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, href: config.whatsappUrl ? waLink(config.whatsappUrl) : undefined },
  { key: 'email', label: 'Email', icon: Mail, href: config.email ? `mailto:${config.email}` : undefined },
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: config.linkedinUrl },
]

export function Contact() {
  const anyConfigured = channels.some((c) => c.href)

  if (config.bookingUrl) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-surface">
        <div className="container-ww">
          <SectionHeading
            eyebrow="Start a Project"
            heading="Ready to build something better?"
            subheading="Tell us what's slowing you down and we'll show you what a system for it could look like."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-line-strong bg-app">
            <iframe src={config.bookingUrl} title="Book a call with RaveWebs" className="h-[680px] w-full" loading="lazy" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="container-ww">
        <SectionHeading
          eyebrow="Start a Project"
          heading="Ready to build something better?"
          subheading="Tell us what's slowing you down and we'll show you what a system for it could look like."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {anyConfigured ? (
              <ul className="flex flex-col divide-y divide-line">
                {channels.filter((c) => c.href).map((c) => (
                  <li key={c.key}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 py-4 text-sm font-medium text-secondary transition-colors hover:text-primary"
                    >
                      <span className="flex items-center gap-3">
                        <c.icon size={17} className="text-accent" />
                        {c.label}
                      </span>
                      <ArrowUpRight size={14} className="text-muted" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">
                Direct contact links aren't configured yet — set <code className="font-mono text-xs">VITE_WHATSAPP_URL</code>,{' '}
                <code className="font-mono text-xs">VITE_EMAIL</code>, or <code className="font-mono text-xs">VITE_LINKEDIN_URL</code>.
                The form below still works.
              </p>
            )}
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
