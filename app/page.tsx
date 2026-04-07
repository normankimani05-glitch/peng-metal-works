import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <TrustedBySection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
