
import { motion } from 'framer-motion'
import { Target, Cpu, TrendingUp, Layers } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

const principles = [
  {
    icon: Target,
    number: '01',
    title: 'Business-first',
    description:
      'We understand your business before recommending technology. Every solution starts with a real problem worth solving.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Practical AI',
    description:
      'We bring AI into everyday operations where it saves time, improves communication and makes work more efficient.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Built to scale',
    description:
      'We create reliable digital systems that can evolve with your business as your customers and operations grow.',
  },
  {
    icon: Layers,
    number: '04',
    title: 'One digital partner',
    description:
      'Websites, AI solutions and automation — connected through one partner who understands the bigger picture.',
  },
]

export function WhyRaveWebs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-ww">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#168653]">
          The RaveWebs Approach
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111C14] sm:text-4xl md:text-5xl">
          Good technology. Real business impact.
        </h2>
      </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {principles.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="group border-t border-[#DCE5DE] pt-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087A45]">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <span className="text-xs font-bold tracking-[0.16em] text-[#829087]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug tracking-tight text-[#14251A] md:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] font-medium leading-7 text-[#46534A]">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-8 rounded-full bg-[#168653] transition-all duration-300 group-hover:w-14" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
