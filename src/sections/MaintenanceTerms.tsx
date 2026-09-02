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
    <section className="py-16 md:py-20 bg-surface">
      <div className="container-ww">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <col.icon size={20} strokeWidth={1.75} className="text-accent" />
              <h3 className="mt-4 font-display text-base font-bold text-primary">{col.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{col.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted max-w-2xl">
          If a monthly payment remains overdue for 60 days (2 months), services and support are suspended until the account is brought up to date.
        </p>
      </div>
    </section>
  )
}
