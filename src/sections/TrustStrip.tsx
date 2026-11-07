
import { motion } from 'framer-motion'
import { ArrowDown, Layers3, BrainCircuit, TrendingUp } from 'lucide-react'

const stages = [
  {
    number: '01',
    label: 'Capture',
    detail:
      'Bring every incoming lead into one centralized workspace. No scattered inquiries or missed opportunities.',
    icon: Layers3,
  },
  {
    number: '02',
    label: 'Qualify',
    detail:
      'Let AI analyze lead information, assess potential and identify the opportunities that deserve attention.',
    icon: BrainCircuit,
  },
  {
    number: '03',
    label: 'Convert',
    detail:
      'Generate personalized responses, manage follow-ups and track every opportunity through your sales pipeline.',
    icon: TrendingUp,
  },
]

export function TrustStrip() {
  return (
    <section id="intro" className="bg-[#FAFBFA] py-16 md:py-24">
      <div className="container-ww">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
            How RaveWebs Works
          </p>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#17221A] md:text-4xl">
            From first inquiry
            <span className="text-emerald-600"> to opportunity.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#718075] md:text-base">
            A smarter, more organized way to manage your entire lead journey.
            Three essential steps. One connected system.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon

            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-[#E7ECE7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_15px_40px_-25px_rgba(16,185,129,0.25)] md:p-8"
              >
                {/* Card Top */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#A1ABA2]">
                    {stage.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-emerald-600"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="font-display text-xl font-bold tracking-tight text-[#17221A]">
                  {stage.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#748077]">
                  {stage.detail}
                </p>

                {/* Bottom Detail */}
                <div className="mt-8 flex items-center justify-between border-t border-[#EEF1EE] pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#A0AAA2]">
                    RaveWebs Workflow
                  </span>

                  <ArrowDown
                    size={15}
                    className="text-emerald-600 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
