import { useState } from 'react'
import { motion } from 'framer-motion'
import IntlTelInput from '@intl-tel-input/react'
import 'intl-tel-input/styles'
import {
  User,
  Mail,
  PenLine,
  Box,
  Send,
  Lock,
  MessageCircle,
  Zap,
} from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

/**
 * Instagram icon
 * Kept as an inline SVG because lucide-react does not provide
 * the Instagram brand icon in your current setup.
 */
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    build: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        build: form.build,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Failed to send message.");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      build: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const instagramUrl =
    'https://www.instagram.com/ravewebs.in/'

  const whatsappUrl =
    'https://wa.me/918117028576'

  const emailUrl = 'mailto:info@ravewebs.in'

  // Contact Channels
  const channels = [
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      sub: 'Fastest response',
      icon: MessageCircle,
      href: whatsappUrl,
    },
    {
      key: 'email',
      label: 'Email',
      sub: 'For project details',
      icon: Mail,
      href: emailUrl,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      sub: 'Follow our work',
      icon: InstagramIcon,
      href: instagramUrl,
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface py-16 md:py-28"
    >
      {/* AMBIENT BACKGROUND GLOW (Adjusted for Mobile) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-0 h-400px w-600px -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] md:h-600px md:w-900px md:blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-300px w-400px rounded-full bg-primary/5 blur-[100px] md:h-400px md:w-600px md:blur-[120px]" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading
          eyebrow="Start a Project"
          heading="Ready to build something better?"
          subheading="Tell us what's slowing you down and we'll show you what a system for it could look like."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT SIDE (Polished Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2rem border border-line bg-app/70 p-6 shadow-2xl shadow-accent/5 backdrop-blur-3xl md:p-10">

              {/* Background Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-accent/20 to-transparent"
              />

              {/* LOGO */}
              <div className="relative mb-6 md:mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 hover:scale-105">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>

              {/* BADGE */}
              <div className="relative mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-accent shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                <Zap size={12} className="fill-current" aria-hidden="true" />
                Let's Build The Future
              </div>

              {/* HEADING - Reduced size on mobile */}
              <h3 className="relative font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
                Got an idea?
                <br />
                Let's{' '}
                <span className="relative text-accent">
                  build it.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="4"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 3.5H100"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    />
                  </svg>
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p className="relative mb-8 mt-5 text-base leading-relaxed text-secondary md:mb-10">
                Tell us about your project and we'll get back to
                you within{' '}
                <strong className="font-semibold text-primary">
                  24 hours
                </strong>
                .
              </p>

              {/* CONTACT CHANNELS */}
              <div className="relative mt-auto flex flex-col gap-4">
                {channels
                  .filter((channel) => Boolean(channel.href))
                  .map((channel) => {
                    const Icon = channel.icon

                    return (
                      <a
                        key={channel.key}
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={channel.label}
                        className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-app/80 hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.2)]"
                      >
                        <span className="flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                            <Icon size={20} aria-hidden="true" />
                          </div>

                          <div>
                            <p className="font-display text-sm font-bold text-primary">
                              {channel.label}
                            </p>
                            <p className="text-xs text-muted">
                              {channel.sub}
                            </p>
                          </div>
                        </span>

                        <svg
                          className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )
                  })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM (Premium Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-2rem border border-line bg-app/70 p-5 shadow-2xl shadow-accent/5 backdrop-blur-3xl md:p-10">

              {/* Top Gradient Line */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent"
              />

              {/* FORM HEADER */}
              <div className="mb-8 flex items-center gap-4 md:mb-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <MessageCircle size={24} className="fill-current" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    Send us a message
                  </h3>
                  <p className="text-sm text-muted">
                    Fill the form below and let's get started
                  </p>
                </div>
              </div>

              {/* CONTACT FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">

                  {/* NAME */}
                  <div className="group relative">
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-secondary">
                      Name
                    </label>
                    <div className="relative">
                      <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-all duration-200 group-focus-within:scale-110 group-focus-within:text-accent" aria-hidden="true" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full rounded-xl border border-line bg-surface py-4 pl-11 pr-4 text-sm text-primary placeholder:text-muted/60 transition-all duration-300 hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.05)]"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="group relative">
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-secondary">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-all duration-200 group-focus-within:scale-110 group-focus-within:text-accent" aria-hidden="true" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="w-full rounded-xl border border-line bg-surface py-4 pl-11 pr-4 text-sm text-primary placeholder:text-muted/60 transition-all duration-300 hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.05)]"
                      />
                    </div>
                  </div>
                </div>

                {/* PHONE NUMBER */}
                <div className="group relative">
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-secondary"
                  >
                    Ph Number
                  </label>

                  <div className="relative w-full">
                    <IntlTelInput
                      value={form.phone}
                      onChangeNumber={(phone) =>
                        setForm((prev) => ({
                          ...prev,
                          phone,
                        }))
                      }
                      initialCountry="in"
                      separateDialCode
                      countrySearch
                      countrySelectorMode="AUTO"
                      formatAsYouType
                      loadUtils={() => import('intl-tel-input/utils')}
                      inputProps={{
                        id: 'contact-phone',
                        name: 'phone',
                        autoComplete: 'tel',
                        placeholder: 'Your phone number',
                        required: true,
                      }}
                      classNames={{
                        container: 'w-full',
                        input:
                          'w-full rounded-xl border border-line bg-surface py-4 pr-4 text-sm text-primary placeholder:text-muted/60 transition-all duration-300 hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.05)]',
                        countryContainer:
                          'rounded-l-xl border-line bg-surface',
                        selectedCountry:
                          'rounded-l-xl border-line bg-surface',
                        selectedCountryPrimary:
                          'rounded-l-xl bg-surface hover:bg-accent/5',
                        selectedDialCode:
                          'text-sm text-primary',
                        countrySelector:
                          'rounded-xl border border-line bg-surface shadow-2xl',
                        searchInput:
                          'rounded-lg border border-line bg-surface text-primary',
                        countryListItem:
                          'text-sm text-primary hover:bg-accent/10',
                        countryName:
                          'text-primary',
                        dialCode:
                          'text-muted',
                      }}
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="group relative">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-secondary">
                    Message
                  </label>
                  <div className="relative">
                    <PenLine size={16} className="pointer-events-none absolute left-4 top-4 text-muted transition-all duration-200 group-focus-within:scale-110 group-focus-within:text-accent" aria-hidden="true" />
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-line bg-surface py-4 pl-11 pr-4 text-sm text-primary placeholder:text-muted/60 transition-all duration-300 hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.05)]"
                    />
                  </div>
                </div>

                {/* WHAT YOU WANT TO BUILD */}
                <div className="group relative">
                  <label htmlFor="contact-build" className="mb-2 block text-sm font-medium text-secondary">
                    What You Want to Build{' '}
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Box size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-all duration-200 group-focus-within:scale-110 group-focus-within:text-accent" aria-hidden="true" />
                    <input
                      id="contact-build"
                      type="text"
                      name="build"
                      placeholder="Describe the product, feature or idea..."
                      value={form.build}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-line bg-surface py-4 pl-11 pr-4 text-sm text-primary placeholder:text-muted/60 transition-all duration-300 hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.05)]"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent to-emerald-400 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(34,197,94,0.6)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-app"
                >
                  Send Message
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </button>

                {/* PRIVACY NOTE */}
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
                  <Lock size={12} className="text-accent" aria-hidden="true" />
                  Your data is safe with us. We never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}