import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { services } from '@/data/services'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

export function Services() {
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
    window.addEventListener('resize', checkScrollPosition)
    return () => window.removeEventListener('resize', checkScrollPosition)
  }, [])

  // Dynamically calculate the exact scroll width (card width + gap)
  const getScrollAmount = () => {
    const container = scrollContainerRef.current
    if (!container) return 320
    const card = container.querySelector<HTMLElement>('[data-service-card]')
    if (!card) return 320
    const gap = window.innerWidth >= 768 ? 24 : 16 // md:gap-6 (24px) or gap-4 (16px)
    return card.offsetWidth + gap
  }

  const scrollToPrev = () => {
    scrollContainerRef.current?.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' })
  }

  const scrollToNext = () => {
    scrollContainerRef.current?.scrollBy({ left: getScrollAmount(), behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-16 md:py-28 bg-surface relative overflow-hidden">
      {/* Ambient background glow — fixed sizes for mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[400px] w-[600px] bg-accent/10 rounded-full blur-[100px] -z-10 md:h-[500px] md:w-[800px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[200px] w-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 md:h-[400px] md:w-[600px] md:blur-[100px]" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading
          eyebrow="What We Build"
          heading="Five systems. One digital partner."
          subheading="Each one is built to remove a specific piece of manual work from your business, not to be a generic add-on."
        />

        {/* Relative wrapper for arrows and fades */}
        <div className="relative mt-10 md:mt-16">
          
          {/* Left Arrow - Perfectly inside on mobile */}
          {canScrollLeft && (
            <button
              onClick={scrollToPrev}
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-app text-primary shadow-xl transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] md:-left-6 md:h-11 md:w-11"
              aria-label="Previous services"
            >
              <ArrowLeft size={16} className="md:size-18" />
            </button>
          )}

          {/* Right Arrow - Perfectly inside on mobile */}
          {canScrollRight && (
            <button
              onClick={scrollToNext}
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-app text-primary shadow-xl transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] md:-right-6 md:h-11 md:w-11"
              aria-label="Next services"
            >
              <ArrowRight size={16} className="md:size-18" />
            </button>
          )}

          {/* Carousel Container - Full phone width cards */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-6 pb-10 scroll-px-1 md:gap-6 md:pb-12"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none' // IE/Edge
            }}
          >
            <style>{`
              #services-carousel::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div id="services-carousel" className="flex snap-x snap-mandatory gap-4 md:gap-6">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={i}
                    data-service-card
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
                    className="relative flex w-full shrink-0 snap-center flex-col justify-between rounded-3xl border border-line bg-surface-raised/60 p-6 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(34,197,94,0.15)] sm:w-[60%] md:p-8 lg:w-[31%]"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <div className="rounded-2xl bg-linear-to-br from-accent/20 to-accent/5 p-3 text-accent shadow-inner">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <span className="font-mono text-xs text-muted/60">0{i + 1}</span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-primary">
                        {service.title}
                      </h3>
                      {/* Decorative gradient underline */}
                      <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-accent to-accent/20" />
                    </div>

                    {/* Problem, Solution, Benefit Cards */}
                    <div className="flex flex-col gap-3">
                      <div className="rounded-xl border border-line bg-surface/40 p-4 transition-colors duration-300 hover:border-accent/20">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                          Problem
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-secondary/90">
                          {service.problem}
                        </p>
                      </div>

                      <div className="rounded-xl border border-line bg-surface/40 p-4 transition-colors duration-300 hover:border-accent/20">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                          Solution
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-secondary/90">
                          {service.solution}
                        </p>
                      </div>

                      <div className="rounded-xl border border-accent/30 bg-linear-to-br from-accent/25 via-accent/10 to-transparent p-4 transition-all duration-300 hover:border-accent/50">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          ⚡ Benefit
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-primary/90 font-medium">
                          {service.benefit}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Edge Fade - Perfectly matched */}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-6 bottom-10 w-10 bg-linear-to-l from-surface to-transparent md:bottom-12 md:w-16 lg:w-32" />
          )}
          {/* Left Edge Fade - Perfectly matched */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-6 bottom-10 w-10 bg-linear-to-r from-surface to-transparent md:bottom-12 md:w-16 lg:w-32" />
          )}

        </div>

        {/* Hint for mobile users */}
        <p className="mt-4 text-center font-mono text-xs text-muted lg:hidden">
          Swipe or drag to see more services →
        </p>
      </div>
    </section>
  )
}