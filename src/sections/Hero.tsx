import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/Button'
import { NetworkVisual } from '@/components/NetworkVisual'

const headlineWords = 'We build the systems that run your business while you run your business.'.split(' ')

function handleScrollTo(href: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  const panelRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = panelRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid-fade pointer-events-none absolute inset-0 h-[120%]" />

      <div className="container-ww relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              RaveWebs — Digital &amp; AI Automation Agency
            </motion.p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-primary text-balance">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: '0.6em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word === 'business.' || word === 'business' ? (
                    <span className="text-accent">{word}&nbsp;</span>
                  ) : (
                    <>{word}&nbsp;</>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-secondary"
            >
              RaveWebs designs websites, AI agents and automation that pick up the calls,
              answer the messages and chase the leads your team doesn't have time for.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button
                as="a"
                href="#contact"
                onClick={handleScrollTo('#contact')}
                variant="primary"
                className="group justify-center sm:justify-start"
                icon={<ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              >
                Start a Project
              </Button>
              <Button as="a" href="#services" onClick={handleScrollTo('#services')} variant="secondary" className="justify-center sm:justify-start">
                See What We Build
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div
              ref={panelRef}
              onMouseMove={handleMouseMove}
              className="spotlight relative aspect-[4/4.6] w-full overflow-hidden rounded-3xl border border-line bg-surface sm:aspect-[4/3.6] lg:aspect-5/6"
            >
              {/* corner ticks — dev-tool style framing */}
              <span className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-line-strong" />
              <span className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-line-strong" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-line-strong" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-line-strong" />

              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">System live</span>
              </div>

              <NetworkVisual progress={0.4} className="h-full w-full" />

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="rounded-full border border-line bg-app/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-secondary backdrop-blur">
                  Build → Automate → Grow
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={handleScrollTo('#services')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          aria-label="Scroll to services"
          className="group absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-1/2 flex-col items-center gap-1.5 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce text-muted transition-colors group-hover:text-accent" />
        </motion.button>
      </div>
    </section>
  )
}