import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { pricingPlans } from '@/data/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-ww">
        <SectionHeading
          eyebrow="Pricing"
          heading="Straightforward pricing, no packages to decode."
          subheading="Every service is priced as a one-time setup plus a monthly maintenance range. No bundled SaaS tiers — just what each system costs to build and to keep running."
        />

        <div className="mt-14 flex flex-col">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
              className="group -mx-4 border-t px-4 py-8 transition-colors duration-300 last:border-b border-line hover:bg-app/60"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="mb-1 font-mono text-xs text-muted">0{i + 1}</p>
                  <h3 className="font-display text-lg font-bold leading-snug text-primary">{plan.name}</h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                        <Check size={14} className="mt-1 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-row gap-8 lg:flex-col lg:gap-6">
                  <div>
                    <p className="font-display text-2xl font-bold text-primary">{plan.setup}</p>
                    <p className="text-xs text-muted">One-Time Setup</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-accent">{plan.monthly}</p>
                    <p className="text-xs text-muted">Per Month</p>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  {plan.note && <p className="text-sm leading-relaxed text-muted">{plan.note}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
