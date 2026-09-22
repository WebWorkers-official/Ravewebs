import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { pricingPlans } from '@/data/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 md:py-28">
      {/* Ambient Glow behind the grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-accent/10 blur-[80px] md:h-[400px] md:w-[600px] md:blur-[100px]" />
      </div>

      <div className="container-ww">
        <SectionHeading
          eyebrow="Pricing"
          heading="Simple pricing for your lead management system."
          subheading="Every plan is a one-time setup fee plus a low monthly subscription. No bundled services, no hidden costs — just the RaveWebs Lead Management System."
        />

        {/* Pricing Grid — all plans visible, no scroll */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="relative flex flex-col justify-between rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(34,197,94,0.15)] md:p-7"
            >
              {/* Top Section */}
              <div>
                <p className="mb-2 font-mono text-xs text-muted">0{i + 1}</p>
                <h3 className="font-display text-lg font-bold text-primary md:text-xl">
                  {plan.name}
                </h3>
                {plan.note && (
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{plan.note}</p>
                )}
              </div>

              {/* Price Section */}
              <div className="my-6 border-y border-line py-5 md:my-7 md:py-6">
                <p className="font-display text-3xl font-bold text-primary">
                  {plan.monthly}
                  <span className="text-base font-normal text-muted">/mo</span>
                </p>
                <p className="mt-2 text-xs text-muted">
                  + <span className="text-accent font-medium">{plan.setup}</span> one-time setup
                </p>
              </div>

              {/* Features List */}
              <ul className="flex flex-1 flex-col gap-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check size={10} className="text-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:text-accent">
                Get Started
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}