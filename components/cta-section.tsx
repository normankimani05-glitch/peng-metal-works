import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container text-center">
        <h2 className="text-balance font-bold text-3xl md:text-4xl mb-6 text-primary">Need a Custom Metal Solution?</h2>
        <p className="text-pretty text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-foreground/80">
          Get in touch with our team to discuss your project requirements and receive a detailed quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 font-semibold"
          >
            <Link href="#contact">Get a Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold bg-transparent"
          >
            <Link href="#contact">Talk to Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
