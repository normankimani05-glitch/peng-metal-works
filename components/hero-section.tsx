import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cnc-machine-cutting-metal-with-sparks-flying-in-in.jpg"
            alt="CNC fabrication"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>

        {/* Content over background */}
        <div className="container relative z-10 pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-balance font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 sm:mb-6 tracking-tight leading-[1.05]">
              Telecom Masts, Metal Fabrication & CNC Solutions
            </h1>
            <p className="text-pretty text-base sm:text-lg md:text-xl text-white/90 mb-7 sm:mb-8 leading-relaxed max-w-full sm:max-w-prose">
              From custom mast creation to industrial-grade CNC cutting, we deliver strength and accuracy that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-7 sm:px-8 font-semibold w-full sm:w-auto"
              >
                <Link href="#contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-7 sm:px-8 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold bg-transparent w-full sm:w-auto"
              >
                <Link href="#portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Yellow accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent z-10" />
      </div>

      <div className="h-1 bg-primary" />
    </section>
  )
}
