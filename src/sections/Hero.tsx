
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Clock3,
  Target,
  Check,
  Zap,
  CircleDollarSign,
  MessageSquareText,
} from 'lucide-react'

const leads = [
  {
    name: 'Residential Roof Replacement',
    source: 'Website inquiry',
    status: 'Hot Lead',
    score: '94',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    name: 'Roof Inspection Request',
    source: 'Landing page',
    status: 'Warm Lead',
    score: '76',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    name: 'Commercial Roofing Inquiry',
    source: 'Website inquiry',
    status: 'New Lead',
    score: '61',
    color: 'bg-slate-100 text-slate-600',
  },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAFBFA] pb-20 pt-20 md:pb-28 md:pt-28"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-48 left-[45%] h-[600px] w-[750px] -translate-x-1/2 rounded-full bg-emerald-100/40 blur-[130px]" />
        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-emerald-50/70 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#17221A 1px, transparent 1px), linear-gradient(90deg, #17221A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-ww relative z-10">

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* LEFT — HERO CONTENT */}
          <div className="relative z-20">

            {/* Product Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-2.5 shadow-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                <Sparkles size={13} className="text-emerald-600" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#526057] sm:text-[11px]">
                RaveWebs · Intelligent Lead Management
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[680px] font-display text-[43px] font-bold leading-[1.08] tracking-[-0.055em] text-[#17221A] sm:text-6xl md:text-7xl lg:text-[4.7rem] xl:text-[5.1rem]"
            >
              Your leads are
              <span className="block">opportunities.</span>

              <span className="relative mt-1 inline-block text-emerald-600">
                Make every one
                <span className="block">count.</span>

                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-2 left-0 h-[4px] w-[72%] origin-left rounded-full bg-emerald-500/30"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-9 max-w-xl text-base leading-8 text-[#6B786E] md:text-lg"
            >
              Stop juggling spreadsheets, scattered inquiries and forgotten
              follow-ups. Bring your entire lead journey into one intelligent
              system — powered by AI and built to keep your sales moving.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#17221A] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-700/20"
              >
                Let's Get Started
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() => scrollTo('#pricing')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#E1E8E1] bg-white px-7 py-4 text-sm font-semibold text-[#28352C] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/50"
              >
                Explore Plans
                <ArrowUpRight
                  size={16}
                  className="text-[#829087] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>

            {/* Supporting points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
            >
              {[
                'AI-powered qualification',
                'Smarter follow-ups',
                'Complete visibility',
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[#77847A]"
                >
                  <Check size={14} className="text-emerald-600" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — PRODUCT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[590px] lg:ml-auto"
          >

            {/* Main Dashboard */}
            <div className="relative rounded-[26px] border border-[#E4EAE4] bg-white p-4 shadow-[0_35px_100px_-35px_rgba(23,34,26,0.20)] sm:p-6">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-[#EEF1EE] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17221A]">
                    <Sparkles size={19} className="text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#17221A]">
                      Lead Intelligence
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#929D94]">
                      RaveWebs Workspace
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-semibold text-emerald-700">
                    Workspace
                  </span>
                </div>
              </div>

              {/* Dashboard Overview */}
              <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3">
                <div className="rounded-xl bg-[#F7F9F7] p-3.5">
                  <div className="mb-3 flex items-center justify-between">
                    <Target size={16} className="text-[#829087]" />
                    <span className="text-[9px] text-[#A0AAA2]">OVERVIEW</span>
                  </div>
                  <p className="text-2xl font-bold tracking-tight text-[#17221A]">
                    128
                  </p>
                  <p className="mt-1 text-[10px] text-[#89948B]">
                    Total leads
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50/70 p-3.5">
                  <div className="mb-3 flex items-center justify-between">
                    <Zap size={16} className="text-emerald-600" />
                    <span className="text-[9px] text-emerald-700">
                      AI ANALYSIS
                    </span>
                  </div>
                  <p className="text-2xl font-bold tracking-tight text-emerald-800">
                    24
                  </p>
                  <p className="mt-1 text-[10px] text-emerald-700/70">
                    Hot leads
                  </p>
                </div>

                <div className="col-span-2 rounded-xl bg-[#F7F9F7] p-3.5 sm:col-span-1">
                  <div className="mb-3 flex items-center justify-between">
                    <CircleDollarSign size={16} className="text-[#829087]" />
                    <span className="text-[9px] text-[#A0AAA2]">PIPELINE</span>
                  </div>
                  <p className="text-2xl font-bold tracking-tight text-[#17221A]">
                    $42.8k
                  </p>
                  <p className="mt-1 text-[10px] text-[#89948B]">
                    Illustrative value
                  </p>
                </div>
              </div>

              {/* Lead Table */}
              <div className="rounded-xl border border-[#EDF1ED] p-3.5 sm:p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#26332A]">
                      Recent opportunities
                    </p>
                    <p className="mt-1 text-[10px] text-[#9AA49B]">
                      Illustrative lead records
                    </p>
                  </div>

                  <span className="rounded-lg bg-[#F3F6F3] px-2.5 py-1.5 text-[10px] font-semibold text-[#667369]">
                    All leads
                  </span>
                </div>

                <div className="space-y-3">
                  {leads.map((lead, i) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.15 }}
                      className="flex items-center justify-between gap-2 border-b border-[#F0F2F0] pb-3 last:border-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-[#344138]">
                          {lead.name}
                        </p>
                        <p className="mt-1 text-[10px] text-[#9AA49B]">
                          {lead.source}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-1.5">
                        <span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${lead.color}`}>
                          {lead.status}
                        </span>
                        <span className="text-[9px] font-medium text-[#849087]">
                          Score: {lead.score}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Response Preview */}
              <div className="mt-4 rounded-xl border border-emerald-100 bg-[#F6FBF7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
                      <Sparkles size={14} className="text-emerald-700" />
                    </div>
                    <span className="text-xs font-bold text-[#34463A]">
                      AI Response Assistant
                    </span>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-700">
                    AI GENERATED
                  </span>
                </div>

                <p className="text-[11px] leading-6 text-[#718075]">
                  "Thanks for reaching out! We'd be happy to help with your
                  roofing project. Could you share a little more about your
                  requirements?"
                </p>
              </div>

              {/* Dashboard Footer */}
              <div className="mt-4 flex items-center justify-between px-1">
                <span className="text-[9px] font-medium text-[#A0AAA2]">
                  RaveWebs Intelligence
                </span>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={12} className="text-emerald-600" />
                  <span className="text-[9px] font-semibold text-emerald-700">
                    Smarter lead management
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Follow-up Card */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-5 top-[34%] hidden w-[175px] rounded-2xl border border-[#E8EDE8] bg-white p-4 shadow-[0_15px_45px_-15px_rgba(23,34,26,0.18)] sm:block lg:-left-14"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                  <Clock3 size={15} className="text-emerald-600" />
                </div>
                <span className="text-[10px] font-bold text-[#354238]">
                  Follow-up
                </span>
              </div>

              <p className="text-xs font-semibold text-[#28352C]">
                Next action tracked
              </p>
              <p className="mt-1 text-[10px] text-[#98A198]">
                Keep every opportunity moving.
              </p>
            </motion.div>

            {/* Floating Message Card */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-3 bottom-[18%] hidden w-[180px] rounded-2xl border border-[#E8EDE8] bg-white p-4 shadow-[0_15px_45px_-15px_rgba(23,34,26,0.18)] sm:block lg:-right-8"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#17221A]">
                  <MessageSquareText size={15} className="text-emerald-400" />
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
                  AI READY
                </span>
              </div>

              <p className="text-xs font-semibold text-[#28352C]">
                Personalized response
              </p>
              <p className="mt-1 text-[10px] text-[#98A198]">
                Generated for each lead.
              </p>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-[#E8EDE8] pt-8 text-center md:mt-24"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9AA49B]">
            From the first inquiry to the final opportunity
          </p>

          <p className="mt-3 font-display text-lg font-semibold tracking-tight text-[#344138] md:text-xl">
            Capture <span className="text-emerald-600">.</span>
            Qualify <span className="text-emerald-600">.</span>
            Prioritize <span className="text-emerald-600">.</span>
            Convert
            <span className="text-emerald-600">.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
