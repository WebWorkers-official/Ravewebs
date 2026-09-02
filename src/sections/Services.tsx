import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { services } from '@/data/services'

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = services.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const service = services[currentIndex]
  const Icon = service.icon

  return (
    <section id="services" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Ambient background glow — adds depth to colour grading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3/4 h-3/4 bg-accent/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container-ww relative z-10">
        <SectionHeading
          eyebrow="What We Build"
          heading="Five systems. One digital partner."
          subheading="Each one is built to remove a specific piece of manual work from your business, not to be a generic add-on."
        />

        <div className="mt-16 relative max-w-6xl mx-auto">
          {/* Step Counter with gradient text */}
          <div className="text-right mb-4 text-sm font-medium tracking-widest text-muted/70">
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-1.5 text-muted/30">/</span>
            <span className="text-muted/50">{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Main Glass Panel — enhanced colour grading */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-surface-raised/85 via-surface-raised/65 to-surface/35 backdrop-blur-2xl border border-line-strong shadow-2xl shadow-accent/5 p-6 md:p-10 transition-shadow duration-500 hover:shadow-accent/10">
            {/* Inner subtle gradient line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10"
              >
                {/* Left: Icon & Title */}
                <div className="relative lg:col-span-4">
                  {/* Faint gradient background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -left-6 select-none font-display text-8xl font-bold bg-linear-to-b from-primary/10 to-transparent bg-clip-text text-transparent"
                  >
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-2xl bg-linear-to-br from-accent/20 to-accent/5 p-3 text-accent shadow-inner">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent/80">
                      Service
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold leading-snug text-primary md:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>

                  {/* Decorative gradient underline */}
                  <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-accent to-accent/20" />
                </div>

                {/* Right: Problem, Solution, Benefit — enhanced cards */}
                <div className="relative lg:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="group/card rounded-2xl bg-linear-to-br from-surface-raised/70 to-surface-raised/25 p-4 border border-line backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                      Problem
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-secondary/90">
                      {service.problem}
                    </p>
                  </div>

                  <div className="group/card rounded-2xl bg-linear-to-br from-surface-raised/70 to-surface-raised/25 p-4 border border-line backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted/80">
                      Solution
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-secondary/90">
                      {service.solution}
                    </p>
                  </div>

                  <div className="group/card rounded-2xl bg-linear-to-br from-accent/25 via-accent/10 to-transparent p-4 border border-accent/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-accent/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      ⚡ Benefit
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-primary/90 font-medium">
                      {service.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- ENHANCED NAVIGATION BUTTONS --- */}
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="group absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-7 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-raised/90 backdrop-blur-md border border-line-strong shadow-xl shadow-accent/10 text-secondary transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-ink hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 md:h-14 md:w-14"
            aria-label="Previous service"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5 md:h-6 md:w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="group absolute right-0 top-1/2 -translate-y-1/2 -mr-5 md:-mr-7 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-raised/90 backdrop-blur-md border border-line-strong shadow-xl shadow-accent/10 text-secondary transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-ink hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50 md:h-14 md:w-14"
            aria-label="Next service"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 md:h-6 md:w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator — upgraded with gradient */}
          <div className="mt-8 flex justify-center gap-2.5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-500 ease-out ${
                  i === currentIndex
                    ? 'h-1.5 w-10 bg-linear-to-r from-accent to-accent/60 shadow-lg shadow-accent/30'
                    : 'h-1.5 w-1.5 bg-muted/30 hover:bg-muted/60 hover:scale-125'
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}