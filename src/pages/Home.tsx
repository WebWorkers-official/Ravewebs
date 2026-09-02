import { Hero } from '@/sections/Hero'
import { Marquee } from '@/components/Marquee'
import { TrustStrip } from '@/sections/TrustStrip'
import { Services } from '@/sections/Services'
import { ProcessStory } from '@/sections/Process'
import { FeaturedWork } from '@/sections/FeaturedWork'
import { WhyRaveWebs } from '@/sections/WhyRaveWebs'
import { Pricing } from '@/sections/Pricing'
import { MaintenanceTerms } from '@/sections/MaintenanceTerms'
import { About } from '@/sections/About'
import { Faq } from '@/sections/Faq'
import { Contact } from '@/sections/Contact'
import { FinalCta } from '@/sections/FinalCta'

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustStrip />
      <Services />
      <ProcessStory />
      <FeaturedWork />
      <WhyRaveWebs />
      <Pricing />
      <MaintenanceTerms />
      <About />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  )
}
