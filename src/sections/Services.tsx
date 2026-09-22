import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { Bot, Play, ArrowRight, Check, Zap, Target, TrendingUp } from 'lucide-react'

export function Services() {
  const service = {
    title: 'AI Automation Lead Generation System',
    description:
      'A done-for-you AI system that finds, qualifies, and books high-intent leads for your business — automatically, 24/7.',
    problem:
      'Manual lead generation is slow, inconsistent, and lets high-intent prospects slip through the cracks.',
    solution:
      'An AI engine that captures, qualifies, and nurtures leads across email, SMS, and social on autopilot.',
    benefit:
      'A steady stream of ready-to-buy leads booked directly into your calendar — without lifting a finger.',
  }

  const features = [
    'AI-powered lead capture & instant follow-up',
    'Smart qualification & lead scoring',
    'Multi-channel outreach automation',
    'Auto-booking into your calendar',
    'Real-time analytics & CRM sync',
  ]

  return (
    <section id="services" className="py-16 md:py-28 bg-surface relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] bg-accent/10 rounded-full blur-[100px] -z-10 md:h-[500px] md:w-[800px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[200px] w-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 md:h-[400px] md:w-[600px] md:blur-[100px]" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading
          eyebrow="Our Service"
          heading="AI Automation Lead Generation System"
          subheading="One system. Built to remove manual prospecting from your business — permanently."
        />

        <div className="mt-10 md:mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative w-full max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface-raised/60 backdrop-blur-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-[0_30px_80px_-20px_rgba(34,197,94,0.25)]"
          >
            {/* Top gradient accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner glow blob */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-[80px] transition-opacity duration-500 group-hover:bg-accent/20" />

            <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-12">
              {/* ---------------- LEFT COLUMN ---------------- */}
              <div className="flex flex-col">
                {/* Icon with glow ring */}
                <div className="relative w-fit">
                  <div className="absolute inset-0 rounded-2xl bg-accent/25 blur-xl transition-all duration-500 group-hover:bg-accent/40" />
                  <div className="relative rounded-2xl border border-accent/20 bg-linear-to-br from-accent/25 to-accent/5 p-4 text-accent shadow-inner">
                    <Bot size={28} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-primary md:text-3xl lg:text-4xl">
                  {service.title}
                </h3>

                {/* Underline accent */}
                <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent to-accent/20 transition-all duration-500 group-hover:w-24" />

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-secondary/90 md:text-base">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <ul className="mt-7 flex flex-col gap-3">
                  {features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-secondary/90">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {/* TODO: Replace # with your live demo link */}
                  <a
                    href="https://demo.leadapp.ravewebs.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent to-accent/80 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/50 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    <Play size={15} className="transition-transform duration-300 group-hover/btn:scale-110" />
                    See Live Demo
                  </a>
                  <a
                    href="#contact"
                    className="group/btn2 inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-transparent px-6 py-3.5 text-sm font-semibold text-secondary transition-all duration-300 hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    Get Started
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover/btn2:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>

              {/* ---------------- RIGHT COLUMN ---------------- */}
              <div className="flex flex-col gap-4">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group/item rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-line bg-surface-raised/60 p-2 text-muted transition-colors duration-300 group-hover/item:text-primary">
                      <Target size={16} strokeWidth={1.75} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                      The Problem
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/90">
                    {service.problem}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group/item rounded-2xl border border-line bg-surface/40 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-line bg-surface-raised/60 p-2 text-muted transition-colors duration-300 group-hover/item:text-primary">
                      <Zap size={16} strokeWidth={1.75} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                      Our Solution
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/90">
                    {service.solution}
                  </p>
                </motion.div>

                {/* Benefit — highlighted */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border border-accent/30 bg-linear-to-br from-accent/25 via-accent/10 to-transparent p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.35)]"
                >
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-accent/30 bg-accent/15 p-2 text-accent">
                        <TrendingUp size={16} strokeWidth={1.75} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        ⚡ The Benefit
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-primary/90">
                      {service.benefit}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}