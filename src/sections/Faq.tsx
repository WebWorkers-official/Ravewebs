import { SectionHeading } from '@/components/SectionHeading'
import { FaqAccordion } from '@/components/FaqAccordion'
import { faqItems } from '@/data/faq'

export function Faq() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-ww">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" heading="Questions worth answering upfront." />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
