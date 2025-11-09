const brands = [
  { name: "Poa Internet", slug: "poa-internet" },
  { name: "Fireside Communication", slug: "fireside-communication" },
  { name: "Spectrum Ltd", slug: "spectrum-ltd" },
  { name: "Com21", slug: "com21" },
  { name: "Andrian Ltd", slug: "andrian-ltd" },
  { name: "Alternative Company", slug: "alternative-company" },
]

export function TrustedBySection() {
  return (
    <section className="py-16 bg-white border-y">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-balance font-bold text-2xl md:text-3xl text-primary">Trusted By Leading Brands</h2>
          <p className="text-foreground/80 mt-3">
            Over the years, we’ve had the privilege of working with industry leaders who rely on our precision, quality, and reliability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="h-16 px-4 flex items-center justify-center rounded-xl border-2 border-accent bg-white text-center shadow-sm hover:shadow-lg transition-all"
              aria-label={brand.name}
              title={brand.name}
            >
              <span className="text-sm font-medium text-foreground/80 text-center leading-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
