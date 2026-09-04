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
    <section className="relative overflow-hidden bg-surface py-16 md:py-28">
      {/* Ambient Glow to match rest of site */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading eyebrow="Why RaveWebs" heading="Technology that works around your business, not the other way around." />

        {/* Tightened gap-y for mobile (gap-6), airy gap-x for desktop */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-14 md:gap-x-8 md:gap-y-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className="h-full"
            >
              {/* Premium Glass Card Container */}
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-app/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-app/70">
                
                {/* Icon Container (Bigger and framed) */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  <p.icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="font-display text-base font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
