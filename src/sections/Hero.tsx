import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/Button'

const headlineWords = 'We build the systems that run your business while you run your business.'.split(' ')

function handleScrollTo(href: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      
      {/* Ambient Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-ww relative">
        {/* Eyebrow - refined with a dash */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent"
        >
          <span className="h-2 w-8 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          RaveWebs — Digital &amp; AI Automation Agency
        </motion.p>

        {/* Oversized editorial headline - Premium Masked Slide-Up Reveal */}
        <h1 className="max-w-5xl font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-tight text-primary">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-top">
              <motion.span
                initial={{ y: '110%', opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                animate={{ y: '0%', opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                  mass: 0.8,
                  delay: 0.06 * i
                }}
                className="inline-block will-change-transform"
              >
                {word === 'business.' || word === 'business' ? (
                  <motion.span
                    className="relative inline-block cursor-pointer text-accent"
                    whileHover={{ 
                      y: -3, 
                      color: '#4ade80', 
                      textShadow: '0 4px 20px rgba(34,197,94,0.6)' 
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {word}&nbsp;
                    {/* Elegant underline that draws itself */}
                    <motion.span
                      className="absolute bottom-1 left-0 h-[2px] w-full origin-left bg-current"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ) : (
                  <>{word}&nbsp;</>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subcopy + CTAs, tighter and more organized */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-md text-base md:text-lg leading-relaxed text-secondary">
            RaveWebs designs websites, AI agents and automation that pick up the calls,
            answer the messages and chase the leads your team doesn't have time for.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary Button with hover glow */}
            <Button
              as="a"
              href="#contact"
              onClick={handleScrollTo('#contact')}
              variant="primary"
              className="group justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              icon={<ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            >
              Start a Project
            </Button>
            
            {/* Secondary Button */}
            <Button as="a" href="#services" onClick={handleScrollTo('#services')} variant="secondary" className="justify-center transition-all duration-300 hover:scale-105 hover:border-accent hover:text-accent">
              See What We Build
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}