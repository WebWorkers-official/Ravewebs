import { motion } from 'framer-motion'
import { Target, Cpu, TrendingUp, Layers } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

const principles = [
  { icon: Target, title: 'Business-first', description: 'We start with the workflow, not the technology — automation only goes where it removes real work.' },
  { icon: Cpu, title: 'Practical AI', description: 'Voice and chat agents that handle a defined job well, not a chatbot bolted onto everything.' },
  { icon: TrendingUp, title: 'Built to scale', description: 'Systems designed to keep working as call volume, lead volume and traffic grow.' },
  { icon: Layers, title: 'One digital partner', description: 'Website, automation, AI agents and ad creative under one roof, so nothing has to be stitched together.' },
]

export function WhyRaveWebs() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-ww">
        <SectionHeading eyebrow="Why RaveWebs" heading="Technology that works around your business, not the other way around." />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <p.icon size={20} strokeWidth={1.75} className="text-accent" />
              <h3 className="mt-4 font-display text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
