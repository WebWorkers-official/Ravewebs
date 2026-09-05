import { Hero } from '@/sections/Hero'
import { Marquee } from '@/components/Marquee'
import { TrustStrip } from '@/sections/TrustStrip'
import { Services } from '@/sections/Services'
import { WhyRaveWebs } from '@/sections/WhyRaveWebs'
import { Pricing } from '@/sections/Pricing'
import { MaintenanceTerms } from '@/sections/MaintenanceTerms'
import { About } from '@/sections/About'
import { Faq } from '@/sections/Faq'
import { Contact } from '@/sections/Contact'


export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Services />
      <WhyRaveWebs />
      <Pricing />
      <MaintenanceTerms />
      <About />
      <Contact />
      <Faq />
    </>
  )
}
