import { motion } from 'framer-motion'

const stages = [
  { label: 'Build', detail: 'A website and digital presence that actually represents the business.' },
  { label: 'Automate', detail: 'AI agents and workflows that handle the repetitive, time-consuming work.' },
  { label: 'Grow', detail: 'Systems that keep working after launch — capturing and converting leads.' },
]

export function TrustStrip() {
  return (
    <section id="intro" className="relative overflow-hidden border-y border-line py-10 md:py-14">
      {/* Subtle ambient glow to match the site */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container-ww relative z-10">
        {/* Tighter mobile gap (gap-5), airy desktop gap (sm:gap-6) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className="h-full"
            >
              {/* Premium glass card container */}
              <div className="flex h-full flex-col rounded-2xl border border-line bg-app/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-app/70 md:p-6">
                <p className="font-display text-lg font-bold text-primary">{stage.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">{stage.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}