'use client'

import { useEffect, useRef, useState } from "react"
import { Layers, Scissors, Wrench, Building2, Puzzle, Truck } from "lucide-react"

function Counter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let raf = 0
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * end)
      setValue(current)
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return (
    <div ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-20 bg-white border-y">
      <div className="container">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-6 text-primary">Who We Are</h2>
          <p className="text-pretty text-lg text-foreground/80 leading-relaxed">
            We are a full-service fabrication company specializing in the design and production of galvanized and non-galvanized
            metal structures. With advanced CNC technology and years of proven experience, we deliver durable,
            precision-engineered solutions that meet the highest industry standards. From telecom infrastructure to construction and
            industrial manufacturing, we’ve built our reputation on consistency, reliability, and innovation. Every structure we fabricate
            is engineered to last — no shortcuts, no compromises.
          </p>
          <p className="text-pretty text-base text-primary font-medium mt-6 italic">
            "We offer the best quality metal works at affordable and favourable prices."
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl border-2 border-accent bg-white p-6 text-center shadow-sm">
            <div className="text-4xl md:text-5xl font-extrabold text-primary">
              <Counter end={70} suffix="+" />
            </div>
            <div className="mt-2 text-sm font-medium text-foreground/80">Years Experience</div>
          </div>
          <div className="rounded-xl border-2 border-accent bg-white p-6 text-center shadow-sm">
            <div className="text-4xl md:text-5xl font-extrabold text-primary">
              <Counter end={300} suffix="+" />
            </div>
            <div className="mt-2 text-sm font-medium text-foreground/80">Projects Completed</div>
          </div>
          <div className="rounded-xl border-2 border-accent bg-white p-6 text-center shadow-sm">
            <div className="text-4xl md:text-5xl font-extrabold text-primary">
              <Counter end={100} suffix="%" />
            </div>
            <div className="mt-2 text-sm font-medium text-foreground/80">Customer Satisfaction</div>
          </div>
        </div>

        {/* Mission / Vision / Commitment */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg">
            <h3 className="font-semibold text-xl text-foreground mb-2">Our Mission</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              To deliver world-class fabrication services that combine innovation, strength, and precision — providing
              reliable metal solutions that empower businesses to build with confidence.
            </p>
          </div>
          <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg">
            <h3 className="font-semibold text-xl text-foreground mb-2">Our Vision</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              To become a recognized regional leader in precision fabrication and engineering, driving quality,
              innovation, and long-term value across every project we undertake.
            </p>
          </div>
          <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg">
            <h3 className="font-semibold text-xl text-foreground mb-2">Our Commitment</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              We stand for craftsmanship, safety, and service excellence. Every project is handled with technical precision
              and strict quality control to ensure on-time delivery and lasting performance.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-balance font-bold text-2xl md:text-3xl text-primary">What We Offer</h3>
            <p className="text-foreground/80 mt-3">
              Our expertise covers a wide range of metal fabrication and engineering services tailored to fit each client’s unique needs.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Masts Creation</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                Design and fabrication of galvanized and non-galvanized masts for telecom and broadcasting industries,
                built for durability and high wind resistance.
              </p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Scissors className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">CNC Cutting</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                High-precision CNC cutting and machining services for customized parts, ensuring accuracy, repeatability, and smooth finishes.
              </p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wrench className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Metal Fabrication</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                Comprehensive fabrication of steel, aluminum, and stainless structures, from small custom parts to large-scale industrial assemblies.
              </p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Building Solutions</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                Fabricated steel frameworks, beams, roofing structures, and customized components for commercial and residential projects.
              </p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Puzzle className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Custom Projects</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                Tailor-made engineering and fabrication solutions built to client specifications — if you can imagine it, we can build it.
              </p>
            </div>
            <div className="rounded-xl border-2 border-accent bg-white p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Truck className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Transportation Services</h4>
              </div>
              <p className="text-sm text-foreground/80 mt-3">
                Reliable transport and installation of fabricated materials to client sites, ensuring your products arrive safely and ready for deployment.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
