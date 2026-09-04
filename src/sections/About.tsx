import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16 md:py-28">
      <div className="container-ww">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl px-2 sm:px-0"
        >
          <p className="text-sm font-medium mb-4 text-accent">
            About RaveWebs
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] text-primary text-balance">
            A digital agency for businesses that run on leads and conversations.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-secondary">
            RaveWebs works with small and mid-sized businesses — service companies, agencies,
            and consumer brands — that spend too much time on manual follow-up, scattered
            messages, and websites that don't do much for them. We build the website, the AI
            agents, and the automation as one connected system, so growth doesn't depend on
            someone remembering to send the next message.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
