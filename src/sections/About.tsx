import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const oldWay = [
  'Leads scattered across spreadsheets, inboxes, and WhatsApp',
  'Manual follow-ups that quietly get forgotten',
  'Hot leads go cold before anyone responds',
  'No clear idea which sources actually convert',
]

const raveWebsWay = [
  'Every lead captured in one centralized dashboard',
  'AI scores and prioritizes opportunities in real time',
  'Personalized responses sent within seconds',
  'Full visibility from first touch to closed deal',
]

export function About() {
  const [view, setView] = useState<'old' | 'new'>('new')

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-28">
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-[320px] w-[420px] rounded-full bg-accent/10 blur-[100px] md:h-[420px] md:w-[620px]" />
      </div>

      <div className="container-ww relative">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent"
        >
          <span className="h-2 w-8 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          About RaveWebs
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          className="max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-primary text-balance sm:text-4xl md:text-5xl"
        >
          Built for the moment a lead comes in —{' '}
          <span className="relative inline-block text-accent">
            and every minute after.
            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent/40" />
          </span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg"
        >
          RaveWebs is one product, built to fix one problem: businesses generate leads and then
          lose them to slow follow-up, poor prioritization, and tools that don't talk to each
          other.
        </motion.p>

        {/* Interactive Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="mt-12 md:mt-16"
        >
          {/* Tab pills */}
          <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-line bg-app/60 p-1.5 backdrop-blur-sm">
            <button
              onClick={() => setView('old')}
              aria-pressed={view === 'old'}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 ${
                view === 'old'
                  ? 'bg-line/60 text-primary'
                  : 'text-muted hover:text-secondary'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setView('new')}
              aria-pressed={view === 'new'}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 ${
                view === 'new'
                  ? 'bg-accent/15 text-accent shadow-[0_0_20px_-4px_rgba(34,197,94,0.5)]'
                  : 'text-muted hover:text-secondary'
              }`}
            >
              With RaveWebs
            </button>
          </div>

          {/* Card with morphing content */}
          <div className="relative mt-6 md:mt-8">
            <AnimatePresence mode="wait">
              {view === 'old' ? (
                <motion.div
                  key="old"
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative mx-auto max-w-3xl rounded-3xl border border-line bg-surface/60 p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                        The reality today
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-primary">
                        Leads slip through the cracks
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-app text-muted">
                      <X size={15} />
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {oldWay.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted md:text-[15px]"
                      >
                        <span className="mt-2 flex h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="new"
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-accent/30 bg-surface p-6 shadow-[0_25px_70px_-30px_rgba(34,197,94,0.35)] md:p-8"
                >
                  {/* Top gradient line */}
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

                  {/* Subtle corner glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-[60px]"
                  />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        The RaveWebs way
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-primary">
                        Every lead captured, scored, and followed up
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                      <Sparkles size={15} />
                    </span>
                  </div>

                  <ul className="relative grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {raveWebsWay.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm leading-relaxed text-secondary md:text-[15px]"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check size={10} className="text-accent" />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hint below toggle */}
            <p className="mt-4 text-center font-mono text-[11px] tracking-wide text-muted">
              <ArrowRight size={11} className="mr-1 inline-block -translate-y-px" />
              Tap the tabs to see the difference
            </p>
          </div>
        </motion.div>

        {/* Founder note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto mt-14 max-w-3xl md:mt-20"
        >
          <div className="absolute bottom-1 left-0 top-1 w-[3px] rounded-full bg-gradient-to-b from-accent/60 via-accent/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}