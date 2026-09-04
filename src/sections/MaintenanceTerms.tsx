import { motion } from 'framer-motion'
import { ShieldCheck, CalendarClock, CreditCard } from 'lucide-react'

const columns = [
  {
    icon: CalendarClock,
    title: 'Minimum commitment',
    body: 'All monthly services require a minimum commitment of 2 months, so a system has time to actually run before it\u2019s evaluated.',
  },
  {
    icon: ShieldCheck,
    title: 'What maintenance covers',
    body: 'Regular updates and improvements, bug fixes and security monitoring, uptime and performance monitoring, and priority support.',
  },
  {
    icon: CreditCard,
    title: 'Payment terms',
    body: 'Monthly payments are due in advance. We accept bank transfer, Wise, PayPal, and card payments via Stripe.',
  },
]

export function MaintenanceTerms() {
  return (
    <section className="py-14 md:py-20 bg-surface">
      <div className="container-ww">
        {/* Tighter gap on mobile (gap-8), airier on desktop (md:gap-10) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className="h-full"
            >
              {/* Wrapped the content in a premium glass card */}
              <div className="flex h-full flex-col rounded-2xl border border-line bg-app/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-app/70 md:p-8">
                <col.icon size={24} strokeWidth={1.75} className="text-accent" />
                <h3 className="mt-4 font-display text-base font-bold text-primary">{col.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{col.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reduced top margin slightly on mobile for better flow */}
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted md:mt-10">
          If a monthly payment remains overdue for 60 days (2 months), services and support are suspended until the account is brought up to date.
        </p>
      </div>
    </section>
  )
}