import { motion } from 'framer-motion'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqItems } from '@/data/faq'

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-28">
      {/* Ambient Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[300px] w-[500px] rounded-full bg-accent/10 blur-[100px] md:h-[500px] md:w-[700px] md:blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[200px] w-[300px] rounded-full bg-primary/5 blur-[80px] md:h-[300px] md:w-[400px] md:blur-[100px]" />
      </div>

      <div className="container-ww relative z-10">
        {/* Reduced gap on mobile for tighter layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Massive Double-Layer FAQ (Sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="[perspective:1000px]">
              <motion.div
                whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative w-fit cursor-pointer"
              >
                {/* Neon Glow behind the text (Smaller on mobile) */}
                <div className="absolute -inset-2 rounded-full bg-accent/20 opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:bg-accent/40 sm:-inset-4" />

                {/* Massive Double-Layer FAQ Word (Scaled down for mobile) */}
                <div className="relative">
                  {/* Back Layer (Blurred & Offset) */}
                  <span className="absolute left-2 top-2 select-none font-display text-7xl font-black tracking-tighter text-accent/40 blur-md sm:text-8xl lg:text-9xl" aria-hidden="true">
                    FAQ
                  </span>
                  
                  {/* Front Layer (Neon Gradient) */}
                  <span className="relative font-display text-7xl font-black tracking-tighter sm:text-8xl lg:text-9xl">
                    <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
                      FAQ
                    </span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Accordion inside a premium glass panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8"
          >
            {/* Slightly thicker padding on mobile to avoid cramped edges */}
            <div className="relative overflow-hidden rounded-3xl border border-line bg-app/50 p-3 shadow-2xl shadow-accent/5 backdrop-blur-3xl md:p-4">
              {/* Top Gradient Line */}
              <div className="absolute left-0 right-0 top-0 h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent" />
              
              <FaqAccordion items={faqItems} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}