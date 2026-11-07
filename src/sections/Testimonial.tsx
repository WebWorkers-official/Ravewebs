
import { motion } from 'framer-motion'
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useRef, useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Sales Director',
    company: 'Brightstone Realty',
    initials: 'SM',
    quote:
      'We were losing leads in spreadsheets and email threads. RaveWebs put everything in one place and the AI scoring actually works — response time dropped from hours to minutes.',
    metric: '3.2x faster follow-up',
  },
  {
    id: 2,
    name: 'Daniel Okafor',
    role: 'Founder',
    company: 'NorthPeak Consulting',
    initials: 'DO',
    quote:
      'Setup was handled for us — pipelines, scoring rules, AI responses. Within the first month we stopped missing follow-ups entirely. Feels like an extra sales ops hire.',
    metric: '0 missed follow-ups',
  },
  {
    id: 3,
    name: 'Aisha Al Mansoori',
    role: 'Head of Growth',
    company: 'Meridian B2B',
    initials: 'AA',
    quote:
      'We tried HubSpot and Zoho — none matched how we sell. RaveWebs was configured around our workflow. The AI-generated responses save my team hours every day.',
    metric: '~12 hrs/week saved',
  },
  {
    id: 4,
    name: 'Michael Torres',
    role: 'Managing Partner',
    company: 'Harbor Insurance',
    initials: 'MT',
    quote:
      'Insurance leads are time-sensitive. If you call after 30 minutes, you have already lost them. RaveWebs sends the AI response instantly and ranks who to call first.',
    metric: '+38% close rate',
  },
  {
    id: 5,
    name: 'Priya Raghavan',
    role: 'Operations Lead',
    company: 'TalentBridge',
    initials: 'PR',
    quote:
      'Recruitment is chaos without structure. Every candidate, client, and follow-up lives in one pipeline now. The AI picks up on things my recruiters were missing.',
    metric: '2x more placements',
  },
  {
    id: 6,
    name: 'James Whitfield',
    role: 'CEO',
    company: 'Whitfield & Co.',
    initials: 'JW',
    quote:
      'Half our inbound used to fall through the cracks. RaveWebs gives us clear visibility into what is hot, what is warm, and what to ignore. Game changer.',
    metric: '100% lead visibility',
  },
  {
    id: 7,
    name: 'Fatima Al Zahra',
    role: 'Marketing Manager',
    company: 'Lumen Agency',
    initials: 'FZ',
    quote:
      'One dashboard per client with AI qualification built in. Reporting that used to take a full day now takes ten minutes. Our clients notice the difference.',
    metric: '90% less reporting time',
  },
  {
    id: 8,
    name: 'Ryan Kowalski',
    role: 'Sales Lead',
    company: 'Vertex Home Services',
    initials: 'RK',
    quote:
      'We were juggling four tools just to track leads. Now it is one system, one pipeline, and the AI handles the first response. My reps finally have time to sell.',
    metric: '4 tools → 1 system',
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const maxScroll = container.scrollWidth - container.clientWidth

    setCanScrollLeft(container.scrollLeft > 5)
    setCanScrollRight(container.scrollLeft < maxScroll - 5)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScrollPosition()

    window.addEventListener('resize', checkScrollPosition)

    return () => {
      window.removeEventListener('resize', checkScrollPosition)
    }
  }, [checkScrollPosition])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    container.scrollBy({
      left:
        direction === 'right'
          ? container.clientWidth * 0.85
          : -container.clientWidth * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#FAFBFA] py-20 md:py-28"
    >
      <div className="container-ww">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#168653]">
              Customer stories
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#14251A] sm:text-4xl md:text-5xl">
              Better lead management.
              <span className="block text-[#168653]">
                Better business outcomes.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#46534A]">
              See how a more organized approach to managing leads can make a
              difference to everyday business operations.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E2DA] bg-white text-[#17251B] transition-all duration-200 hover:border-[#168653] hover:text-[#168653] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E2DA] bg-white text-[#17251B] transition-all duration-200 hover:border-[#168653] hover:text-[#168653] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 md:mt-16 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-[#E1E8E2] bg-white p-6 transition-all duration-300 hover:border-[#B8D8C4] hover:shadow-[0_12px_35px_-20px_rgba(20,60,35,0.2)] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-48px)/3)] md:p-7"
            >
              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#168653] text-[#168653]"
                    />
                  ))}
                </div>

                <Quote
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#B8DCC6]"
                />
              </div>

              {/* Quote */}
              <p className="mt-7 flex-1 text-[15px] font-medium leading-7 text-[#344239]">
                “{testimonial.quote}”
              </p>

              {/* Result */}
              <div className="mt-7 inline-flex w-fit items-center rounded-lg bg-[#EAF5EE] px-3 py-2">
                <span className="text-sm font-bold text-[#087A45]">
                  {testimonial.metric}
                </span>
              </div>

              {/* Customer information */}
              <div className="mt-7 flex items-center gap-3 border-t border-[#E8EDE9] pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5ED] text-sm font-bold text-[#087A45]">
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#17251B]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 truncate text-xs font-medium text-[#59665D]">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-3 text-xs font-medium text-[#69766D]">
          Swipe or use the arrows to explore more stories.
        </p>
      </div>
    </section>
  )
}
