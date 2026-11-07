
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Check,
  ArrowRight,
  Zap,
  Target,
  ArrowUpRight,
} from 'lucide-react'
import { useState } from 'react'

const oldWay = [
  'Leads scattered across spreadsheets and inboxes',
  'Manual follow-ups get forgotten',
  'Hot leads go cold before anyone responds',
  'Little visibility into lead quality',
]

const raveWebsWay = [
  'Every lead organized in one dashboard',
  'AI scores and prioritizes opportunities',
  'AI-assisted responses support faster communication',
  'Clear visibility across your sales pipeline',
]

export function About() {
  const [view, setView] = useState<'old' | 'new'>('new')

  const isNew = view === 'new'

  return (
    <section
      id="about"
      className="flex items-center bg-[#FAFBFA] py-14 md:min-h-[620px] md:py-16 lg:min-h-[680px]"
    >
      <div className="container-ww w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT: Main message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9E9DE] bg-white px-3.5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#168653]" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#168653]">
                The RaveWebs difference
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#14251A] sm:text-5xl lg:text-[54px]">
              Your leads deserve
              <span className="block text-[#168653]">
                better management.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#46534A] md:text-lg">
              Getting leads is just the beginning. The real opportunity is
              knowing who to prioritize, when to respond, and what happens next.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4F2E9] text-[#168653]">
                <Target size={19} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#17251B]">
                  One organized system
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#68756C]">
                  From incoming lead to sales opportunity
                </p>
              </div>
            </div>

            <div className="mt-8 hidden items-center gap-2 text-sm font-semibold text-[#168653] lg:flex">
              See what changes
              <ArrowRight size={16} />
            </div>
          </motion.div>

          {/* RIGHT: Interactive comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="w-full"
          >
            <div className="overflow-hidden rounded-[24px] border border-[#DFE8E1] bg-white shadow-[0_20px_60px_-35px_rgba(20,50,30,0.22)]">

              {/* Panel top */}
              <div className="border-b border-[#E8EDE9] px-5 py-5 sm:px-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#758178]">
                      Compare the experience
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-[#17251B] sm:text-xl">
                      A different way to work
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#168653]">
                    <Zap size={19} />
                  </div>
                </div>

                {/* Toggle */}
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-[#F1F4F1] p-1.5">
                  <button
                    type="button"
                    onClick={() => setView('old')}
                    aria-pressed={!isNew}
                    className={`rounded-lg px-3 py-3 text-sm font-bold transition-all duration-200 ${
                      !isNew
                        ? 'bg-white text-[#26352B] shadow-sm'
                        : 'text-[#78837A] hover:text-[#26352B]'
                    }`}
                  >
                    Before
                  </button>

                  <button
                    type="button"
                    onClick={() => setView('new')}
                    aria-pressed={isNew}
                    className={`rounded-lg px-3 py-3 text-sm font-bold transition-all duration-200 ${
                      isNew
                        ? 'bg-[#147D4A] text-white shadow-sm'
                        : 'text-[#78837A] hover:text-[#26352B]'
                    }`}
                  >
                    With RaveWebs
                  </button>
                </div>
              </div>

              {/* Comparison content */}
              <div className="min-h-[300px] px-5 py-6 sm:min-h-[320px] sm:px-7 sm:py-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={view}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          isNew
                            ? 'bg-[#E4F2E9] text-[#168653]'
                            : 'bg-[#F0F1F0] text-[#778078]'
                        }`}
                      >
                        {isNew ? <Check size={18} /> : <X size={18} />}
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#78837A]">
                          {isNew ? 'THE RAVEWEBS APPROACH' : 'THE OLD APPROACH'}
                        </p>
                        <h4 className="mt-0.5 text-base font-bold text-[#17251B] sm:text-lg">
                          {isNew
                            ? 'Everything in one place.'
                            : 'Too many things falling through.'}
                        </h4>
                      </div>
                    </div>

                    <div className="mt-7 space-y-5">
                      {(isNew ? raveWebsWay : oldWay).map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.055,
                          }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              isNew
                                ? 'bg-[#E4F2E9] text-[#168653]'
                                : 'bg-[#F0F1F0] text-[#89928B]'
                            }`}
                          >
                            {isNew ? (
                              <Check size={12} strokeWidth={2.5} />
                            ) : (
                              <X size={11} strokeWidth={2.5} />
                            )}
                          </span>

                          <p className="text-sm font-medium leading-6 text-[#344239] sm:text-[15px]">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between gap-3 border-t border-[#E8EDE9] bg-[#FCFDFC] px-5 py-4 sm:px-7">
                <span className="text-xs font-semibold text-[#68756C]">
                  {isNew ? 'A smarter way to manage leads' : 'A common business challenge'}
                </span>

                {isNew && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#168653]">
                    RaveWebs
                    <ArrowUpRight size={14} />
                  </span>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-xs font-medium text-[#77837A]">
              Switch between the two experiences to see the difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
