import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/Button'

const headlineWords = 'Capture every lead, qualify it with AI, and never miss a follow-up again.'.split(' ')

function handleScrollTo(href: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-32">
      
      {/* Ambient Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-400px w-600px -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] md:h-[500px] md:w-[800px] md:blur-[120px]" />
      </div>

      <div className="container-ww relative">
        {/* Eyebrow — now focused on the single product */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent"
        >
          <span className="h-2 w-8 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          RaveWebs — AI Lead Management System
        </motion.p>

        {/* Oversized editorial headline */}
        <h1 className="max-w-5xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold leading-[0.98] tracking-tight text-primary">
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
                {word === 'again.' || word === 'again' ? (
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
                    <motion.span
                      className="absolute bottom-1 left-0 h-[2px] w-full origin-left bg-current"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ) : word === 'AI,' || word === 'AI' ? (
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
      </div>
    </section>
  )
}