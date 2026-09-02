import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquareText } from 'lucide-react'
import { Button } from '@/components/Button'

function scrollTo(href: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent), transparent)' }}
      />
      <div className="container-ww relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] text-primary text-balance">
            Have a process worth automating?
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-secondary">
            Tell us what's slowing your business down, and we'll tell you honestly whether a system is worth building for it.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button as="a" href="#contact" onClick={scrollTo('#contact')} variant="primary" icon={<ArrowUpRight size={16} />}>
              Start a Project
            </Button>
            <Button as="a" href="#contact" onClick={scrollTo('#contact')} variant="secondary" icon={<MessageSquareText size={15} />}>
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
