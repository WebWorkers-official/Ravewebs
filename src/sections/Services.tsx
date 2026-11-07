
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Play,
  Target,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const features = [
  'Centralized lead management',
  'AI-powered lead qualification',
  'Hot, Warm and Cold lead prioritization',
  'Personalized AI-generated responses',
  'Follow-up and sales pipeline tracking',
  'Revenue and lead source insights',
]

const highlights = [
  {
    number: '01',
    label: 'The Challenge',
    title: 'Leads get lost in the process.',
    description:
      'Inquiries are scattered across emails, spreadsheets and different platforms. Delayed responses and missed follow-ups can cost valuable opportunities.',
    icon: Target,
  },
  {
    number: '02',
    label: 'The Solution',
    title: 'One intelligent system. Complete visibility.',
    description:
      'RaveWebs brings your leads into one workspace, uses AI to assess their potential and helps your team manage every interaction.',
    icon: Sparkles,
  },
  {
    number: '03',
    label: 'The Outcome',
    title: 'A more organized sales process.',
    description:
      'Prioritize the right opportunities, respond with confidence, stay on top of follow-ups and understand how your pipeline performs.',
    icon: TrendingUp,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="container-ww">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl md:mb-20"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
            The RaveWebs Solution
          </p>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#17221A] md:text-5xl">
            Everything your team needs
            <span className="text-emerald-600"> to manage every lead.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#718075] md:text-base">
            Meet your centralized AI-powered lead management system.
            Capture opportunities, understand their potential, manage
            conversations and bring your entire sales pipeline together.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* LEFT — Product Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col"
          >

            {/* Product Identity */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <Sparkles
                  size={21}
                  className="text-emerald-600"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-bold text-[#253329]">
                  RaveWebs AI
                </p>
                <p className="mt-0.5 text-[11px] text-[#929D94]">
                  Lead Management System
                </p>
              </div>
            </div>

            {/* Product Heading */}
            <h3 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight text-[#17221A] md:text-4xl">
              Turn incoming leads
              <span className="block text-emerald-600">
                into organized opportunities.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#718075] md:text-base">
              Stop managing leads across disconnected tools. RaveWebs
              gives your business one place to qualify prospects, generate
              personalized responses, track follow-ups and monitor sales
              performance.
            </p>

            {/* Feature Checklist */}
            <div className="mt-9">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9AA49B]">
                Everything in one platform
              </p>

              <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        className="text-emerald-600"
                      />
                    </span>

                    <span className="text-[13px] leading-6 text-[#58655B]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://demo.leadapp.ravewebs.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#17221A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
              >
                <Play size={15} />
                Explore Live Demo
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E9E2] bg-white px-6 py-3.5 text-sm font-semibold text-[#344138] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/40"
              >
                Get Started
                <ArrowUpRight
                  size={15}
                  className="text-[#89968C] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </motion.div>

          {/* RIGHT — Problem / Solution / Outcome */}
          <div className="relative flex flex-col">

            {highlights.map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.12,
                  }}
                  className={`group relative border-b border-[#E9EEE9] py-7 first:pt-0 last:border-0 last:pb-0 ${
                    i === 2 ? 'rounded-2xl bg-[#F6FAF6] px-5 py-6' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        i === 2
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-[#F3F6F3] text-[#718075]'
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10px] font-semibold tracking-widest text-[#A0AAA2]">
                          {item.number}
                        </span>

                        <span
                          className={`text-[10px] font-bold uppercase tracking-[0.13em] ${
                            i === 2
                              ? 'text-emerald-700'
                              : 'text-[#929D94]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold leading-snug tracking-tight text-[#253329] md:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-[#77837A]">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}
