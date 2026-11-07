
import { motion } from 'framer-motion'
import {
  Check,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { pricingPlans } from '@/data/pricing'

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#FAFBFA] py-20 md:py-28"
    >
      {/* Soft background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-[120px]" />
        <div className="absolute right-0 top-[45%] h-[300px] w-[300px] rounded-full bg-emerald-50/60 blur-[100px]" />
      </div>

      <div className="container-ww relative z-10">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm"
          >
            <Sparkles size={14} className="text-emerald-600" />
            <span className="text-xs font-semibold tracking-[0.12em] text-emerald-700 uppercase">
              Investment & Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-[#111813] md:text-5xl lg:text-[58px]"
          >
            Every lead deserves
            <span className="block text-emerald-600">
              a better opportunity.
            </span>
          </motion.h2>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-[#68736B]">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-600" />
              Business-specific setup
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-600" />
              Transparent pricing
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-600" />
              Dedicated onboarding
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {pricingPlans.map((plan, i) => {
            const isPopular = plan.id === 'lead-management-growth'
            const isEnterprise = plan.monthly === 'Custom'

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.09,
                  ease: 'easeOut',
                }}
                className={`relative flex flex-col rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-2 md:p-7 ${
                  isPopular
                    ? 'border-emerald-500 bg-white shadow-[0_20px_65px_-25px_rgba(16,185,129,0.28)] ring-1 ring-emerald-500/20'
                    : 'border-[#E8EDE8] bg-white shadow-[0_8px_35px_-20px_rgba(15,23,42,0.16)] hover:border-emerald-200 hover:shadow-[0_20px_50px_-25px_rgba(16,185,129,0.2)]'
                }`}
              >

                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-600 px-4 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white shadow-lg shadow-emerald-600/20">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="min-h-[122px]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-widest text-[#A0AAA2]">
                      PLAN 0{i + 1}
                    </span>

                    {isPopular && (
                      <Sparkles
                        size={17}
                        className="text-emerald-600"
                      />
                    )}

                    {isEnterprise && (
                      <ShieldCheck
                        size={18}
                        className="text-emerald-600"
                      />
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-tight text-[#172019]">
                    {plan.name.replace('Lead Management — ', '')}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#78837A]">
                    {plan.note}
                  </p>
                </div>

                {/* Pricing */}
                <div className="my-6 border-y border-[#EDF0ED] py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-[38px] font-bold tracking-tight text-[#101810]">
                      {plan.monthly}
                    </span>

                    {!isEnterprise && (
                      <span className="text-sm font-medium text-[#929B93]">
                        / month
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-xs text-[#858F87]">
                    {isEnterprise ? (
                      'Tailored implementation & pricing'
                    ) : (
                      <>
                        One-time setup{' '}
                        <span className="font-semibold text-emerald-700">
                          {plan.setup}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <p className="mb-5 text-[10px] font-bold tracking-[0.15em] text-[#9AA39B] uppercase">
                    What's included
                  </p>

                  <ul className="flex flex-col gap-4">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-5 text-[#566159]"
                      >
                        <span className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-emerald-50">
                          <Check
                            size={11}
                            strokeWidth={2.5}
                            className="text-emerald-600"
                          />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className={`group mt-9 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isPopular
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-700'
                      : 'border border-[#E4EAE4] bg-white text-[#1A241C] hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-700'
                  }`}
                >
                  {isEnterprise ? 'Talk to Our Team' : 'Get Started'}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

              </motion.div>
            )
          })}

        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center"
        >

          <p className="mt-3 text-[11px] text-[#A0AAA2]">
            All plans include initial configuration. Third-party usage,
            custom development and additional integrations may be quoted separately.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
