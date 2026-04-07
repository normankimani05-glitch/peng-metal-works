import { CheckCircle2 } from "lucide-react"

const features = [
  "Precision-engineered results",
  "Quality materials (galvanized & non-galvanized)",
  "On-time delivery & reliable logistics",
  "Custom solutions to match your specifications",
  "Professionalism",
  "Customer satisfaction guaranteed",
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-12 text-center">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1 text-accent" />
                <p className="text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  )
}
