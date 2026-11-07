import { Hero } from '@/sections/Hero'
import { TrustStrip } from '@/sections/TrustStrip'
import { Services } from '@/sections/Services'
import { WhyRaveWebs } from '@/sections/WhyRaveWebs'
import { Pricing } from '@/sections/Pricing'
import { MaintenanceTerms } from '@/sections/MaintenanceTerms'
import { About } from '@/sections/About'
import { Faq } from '@/sections/Faq'
import Contact from '@/sections/Contact'
import { Testimonials } from '@/sections/Testimonial'


export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyRaveWebs />
      <Testimonials />
      <Pricing />
      <MaintenanceTerms />
      <About />
      <Contact />
      <Faq />
    </>
  )
}
