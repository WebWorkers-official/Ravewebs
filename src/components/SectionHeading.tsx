import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  heading: ReactNode
  subheading?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, heading, subheading, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-1 w-1 rounded-full bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.15] text-primary text-balance">{heading}</h2>
      {subheading && <p className="mt-4 text-base md:text-lg text-secondary leading-relaxed">{subheading}</p>}
    </motion.div>
  )
}
