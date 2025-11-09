import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TrustedBySection } from "@/components/trusted-by-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
      <WhyChooseSection />
      <TrustedBySection />
    </main>
  )
}
