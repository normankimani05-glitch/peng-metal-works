import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Telecom Mast Installation",
    location: "Nairobi, 2024",
    image: "/tall-galvanized-steel-telecom-mast-tower-against-b.jpg",
  },
  {
    title: "CNC Custom Brackets",
    location: "Industrial Project, 2024",
    image: "/precision-cnc-cut-metal-brackets-and-l-shapes-on-w.jpg",
  },
  {
    title: "Structural Steel Framework",
    location: "Commercial Building, 2023",
    image: "/steel-building-framework-construction-site.jpg",
  },
  {
    title: "Custom Metal Doors",
    location: "Warehouse Project, 2023",
    image: "/industrial-metal-door-fabrication.jpg",
  },
  {
    title: "Heavy Equipment Boom",
    location: "Mining Sector, 2024",
    image: "/heavy-duty-metal-boom-equipment.jpg",
  },
  {
    title: "Industrial Racks",
    location: "Storage Facility, 2023",
    image: "/metal-storage-racks-industrial-warehouse.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-14 sm:py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-8 px-1">
          <h2 className="text-balance font-bold text-2xl sm:text-3xl md:text-4xl mb-3 text-primary">Projects & Portfolio</h2>
          <p className="text-pretty text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Real results from real projects. See the quality and precision we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl hover:border-accent transition-all border-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
