import { motion } from 'framer-motion'
import { Star, ArrowLeft, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { useRef, useState, useEffect } from 'react'

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

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current

    if (!container) return

    const maxScroll =
      container.scrollWidth - container.clientWidth

    setCanScrollLeft(container.scrollLeft > 5)
    setCanScrollRight(container.scrollLeft < maxScroll - 5)
  }

  useEffect(() => {
    const container = scrollContainerRef.current

    if (!container) return

    checkScrollPosition()

    window.addEventListener('resize', checkScrollPosition)

    return () => {
      window.removeEventListener(
        'resize',
        checkScrollPosition
      )
    }
  }, [])

  const scrollNext = () => {
    const container = scrollContainerRef.current

    if (!container) return

    container.scrollBy({
      left: container.clientWidth,
      behavior: 'smooth',
    })
  }

  const scrollPrevious = () => {
    const container = scrollContainerRef.current

    if (!container) return

    container.scrollBy({
      left: -container.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />
      </div>

      <div className="container-ww">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Testimonials"
          heading="Trusted by teams that live on leads."
          subheading="Real feedback from sales teams and founders who replaced scattered tools with one centralized lead management system."
        />

        {/* Carousel */}
        <div className="relative mt-10 md:mt-14">

          {/* LEFT ARROW */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollPrevious}
              aria-label="Previous testimonials"
              className="
                absolute
                left-1
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-line
                bg-surface
                text-primary
                shadow-lg
                transition-all
                duration-300
                hover:border-accent
                hover:bg-accent
                hover:text-black
                md:-left-5
                md:h-11
                md:w-11
              "
            >
              <ArrowLeft size={17} />
            </button>
          )}

          {/* RIGHT ARROW */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonials"
              className="
                absolute
                right-1
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-line
                bg-surface
                text-primary
                shadow-lg
                transition-all
                duration-300
                hover:border-accent
                hover:bg-accent
                hover:text-black
                md:-right-5
                md:h-11
                md:w-11
              "
            >
              <ArrowRight size={17} />
            </button>
          )}

          {/* Horizontal Scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="
              flex
              gap-4
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              px-1
              pb-4
              md:gap-6
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-40px',
                }}
                transition={{
                  duration: 0.4,
                  delay: (i % 3) * 0.06,
                }}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  snap-start
                  flex-col
                  rounded-2xl
                  border
                  border-line
                  bg-surface
                  p-5
                  transition-all
                  duration-300

                  w-[88%]

                  sm:w-[calc((100%-16px)/2)]

                  lg:w-[calc((100%-48px)/3)]

                  hover:-translate-y-1
                  hover:border-accent/30
                  hover:shadow-[0_18px_40px_-20px_rgba(34,197,94,0.25)]

                  md:p-6
                "
              >

                {/* Accent Line */}
                <div
                  className="
                    absolute
                    left-5
                    top-0
                    h-[2px]
                    w-10
                    rounded-full
                    bg-accent
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:w-16
                    group-hover:opacity-100
                  "
                />

                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="
                    flex-1
                    text-[14px]
                    leading-[1.65]
                    text-secondary
                  "
                >
                  "{t.quote}"
                </p>

                {/* Metric */}
                <div
                  className="
                    mt-5
                    inline-flex
                    w-fit
                    items-center
                    rounded-full
                    border
                    border-accent/20
                    bg-accent/[0.06]
                    px-3
                    py-1.5
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      tracking-wide
                      text-accent
                    "
                  >
                    {t.metric}
                  </span>
                </div>

                {/* Author */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    border-t
                    border-line
                    pt-4
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-accent/10
                      font-display
                      text-xs
                      font-bold
                      text-accent
                    "
                  >
                    {t.initials}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        font-display
                        text-sm
                        font-semibold
                        text-primary
                      "
                    >
                      {t.name}
                    </p>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[11px]
                        text-muted
                      "
                    >
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Fade */}
          {canScrollRight && (
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                bottom-4
                w-10
                bg-gradient-to-l
                from-app
                to-transparent
                md:w-16
              "
            />
          )}

          {/* Left Fade */}
          {canScrollLeft && (
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                bottom-4
                w-10
                bg-gradient-to-r
                from-app
                to-transparent
                md:w-16
              "
            />
          )}
        </div>

      </div>
    </section>
  )
}