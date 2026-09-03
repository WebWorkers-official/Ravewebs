import { motion } from 'framer-motion'
import { Check, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { pricingPlans } from '@/data/pricing'
import { useRef, useState, useEffect } from 'react'

export function Pricing() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Function to check position and update arrow visibility
  const checkScrollPosition = () => {
    const el = scrollContainerRef.current
    if (!el) return
    const isAtStart = el.scrollLeft <= 10
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
    setCanScrollLeft(!isAtStart)
    setCanScrollRight(!isAtEnd)
  }

  useEffect(() => {
    checkScrollPosition()
    // Add resize listener to update arrows if window resizes
    window.addEventListener('resize', checkScrollPosition)
    return () => window.removeEventListener('resize', checkScrollPosition)
  }, [])

  const scrollToPrev = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' })
  }

  const scrollToNext = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient Glow behind the carousel */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-400px w-600px -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container-ww">
        <SectionHeading
          eyebrow="Pricing"
          heading="Straightforward pricing, no packages to decode."
          subheading="Every service is priced as a one-time setup plus a monthly maintenance range. No bundled SaaS tiers — just what each system costs to build and to keep running."
        />

        {/* Horizontal Carousel Wrapper with Arrows */}
        <div className="relative mt-16">
          
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollToPrev}
              className="absolute -left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-app text-primary shadow-xl transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] lg:-left-6"
              aria-label="Previous pricing plans"
            >
              <ArrowLeft size={18} />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollToNext}
              className="absolute -right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-app text-primary shadow-xl transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] lg:-right-6"
              aria-label="Next pricing plans"
            >
              <ArrowRight size={18} />
            </button>
          )}

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pt-6 pb-12 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none' // IE/Edge
            }}
          >
            <style>{`
              #pricing-carousel::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div id="pricing-carousel" className="flex snap-x snap-mandatory gap-6">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
                  className="relative flex w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(34,197,94,0.15)] sm:w-[55%] lg:w-[32%]"
                >
                  {/* Top Section */}
                  <div>
                    <p className="mb-2 font-mono text-xs text-muted">0{i + 1}</p>
                    <h3 className="font-display text-xl font-bold text-primary">{plan.name}</h3>
                    {plan.note && (
                      <p className="mt-2 text-sm leading-relaxed text-secondary">{plan.note}</p>
                    )}
                  </div>

                  {/* Price Section */}
                  <div className="my-8 border-y border-line py-6">
                    <p className="font-display text-3xl font-bold text-primary">
                      {plan.monthly}
                      <span className="text-base font-normal text-muted">/mo</span>
                    </p>
                    <p className="mt-2 text-xs text-muted">
                      + <span className="text-accent font-medium">{plan.setup}</span> one-time setup
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3">
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
                  <button
                    className="group/btn mt-10 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:text-accent"
                  >
                    Get Started
                    <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Edge Fade (Signals more content) */}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-6 bottom-12 w-16 bg-linear-to-l from-app to-transparent lg:w-32" />
          )}
          
          {/* Left Edge Fade (Signals previous content) */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-6 bottom-12 w-16 bg-linear-to-r from-app to-transparent lg:w-32" />
          )}

        </div>

        {/* Hint for mobile users */}
        <p className="mt-2 text-center font-mono text-xs text-muted lg:hidden">
          Swipe or drag to see more plans →
        </p>
      </div>
    </section>
  )
}