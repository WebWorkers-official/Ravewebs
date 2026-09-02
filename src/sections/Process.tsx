import { motion } from 'framer-motion'
import { NetworkVisual } from '@/components/NetworkVisual'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { SectionHeading } from '@/components/SectionHeading'

const stages = [
  {
    n: '01',
    title: 'Build',
    body: 'We start with a website or system built around how your business actually works — not a template stretched to fit.',
  },
  {
    n: '02',
    title: 'Automate',
    body: 'Then we connect it: leads route themselves, replies go out automatically, and your CRM stays up to date without anyone typing it in.',
  },
  {
    n: '03',
    title: 'Grow',
    body: 'With the manual work gone, your team spends its time on the leads and customers that actually need a human.',
  },
]

export function ProcessStory() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()

  return (
    <section id="process" ref={ref} className="py-20 md:py-28">
      <div className="container-ww">
        <SectionHeading eyebrow="How It Comes Together" heading="Build, automate, grow — in that order." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="aspect-square w-full overflow-hidden rounded-3xl border border-line bg-surface">
              <NetworkVisual progress={0.15 + progress * 0.85} className="h-full w-full" density={0.85} />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-10">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                className="border-t border-line pt-8"
              >
                <p className="text-xs font-mono text-muted">{stage.n}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">{stage.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-secondary">{stage.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
