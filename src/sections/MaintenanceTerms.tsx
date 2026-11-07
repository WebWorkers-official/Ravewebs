
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarClock,
  CreditCard,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";

const columns = [
  {
    number: "01",
    icon: CalendarClock,
    title: "Minimum commitment",
    subtitle: "Time to deliver meaningful results",
    body: "All monthly services require a minimum commitment of 2 months, so a system has time to actually run before it's evaluated.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "What maintenance covers",
    subtitle: "Ongoing care and support",
    body: "Regular updates and improvements, bug fixes and security monitoring, uptime and performance monitoring, and priority support.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Payment terms",
    subtitle: "Simple and transparent billing",
    body: "Monthly payments are due in advance. We accept bank transfer, Wise, PayPal, and card payments via Stripe.",
  },
];

export function MaintenanceTerms() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAF7] px-5 py-16 sm:px-8 md:py-24 lg:px-12">

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE9DF] bg-white px-4 py-2">
            <ShieldCheck size={15} className="text-[#168653]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#287449]">
              Working with RaveWebs
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#17251C] sm:text-4xl lg:text-5xl">
            Clear terms.
            <span className="block text-[#168653]">
              No surprises.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#526258]">
            Here's what to expect when working with us, from service
            commitments to ongoing maintenance and payments.
          </p>
        </motion.div>

        {/* TERMS CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

          {columns.map((col, index) => {
            const Icon = col.icon;

            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group h-full"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E0E9E1] bg-white p-7 shadow-[0_8px_30px_rgba(20,45,28,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9D9C2] hover:shadow-[0_18px_40px_rgba(20,45,28,0.07)] sm:p-8">

                  {/* TOP ROW */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF5ED] transition-colors group-hover:bg-[#147D4A]">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="text-[#168653] transition-colors group-hover:text-white"
                      />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-[#A1B0A4]">
                      {col.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-9">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#168653]">
                      {col.subtitle}
                    </p>

                    <h3 className="text-xl font-bold tracking-tight text-[#17251C]">
                      {col.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#526258]">
                      {col.body}
                    </p>
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div className="mt-auto pt-8">
                    <div className="h-[3px] w-10 rounded-full bg-[#168653] transition-all duration-300 group-hover:w-20" />
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* PAYMENT NOTICE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E6DCC6] bg-[#FFFCF5] p-6 sm:flex-row sm:items-start sm:p-7"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5EBD7]">
            <AlertCircle size={20} className="text-[#9A6A1D]" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#49391F]">
              Important payment information
            </h3>

            <p className="mt-2 max-w-4xl text-sm leading-7 text-[#695B43]">
              If a monthly payment remains overdue for 60 days (2 months),
              services and support are suspended until the account is brought
              up to date.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
