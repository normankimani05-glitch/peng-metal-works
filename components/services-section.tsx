"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Building2, Boxes, Truck } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Metal Works & Fabrication",
    description:
      "Galvanized / Non-galvanized mast creation, CNC cutting & shaping (L-shapes, V-shapes, brackets, custom parts), Custom industrial designs",
    projects: [
      {
        title: "Galvanized Mast Installation",
        image: "/galvanized-metal-mast-tower-installation.jpg",
      },
      {
        title: "CNC Cut Metal Parts",
        image: "/precision-cnc-cut-metal-brackets-and-parts.jpg",
      },
      {
        title: "Custom L-Shape Fabrication",
        image: "/custom-l-shape-metal-fabrication-welding.jpg",
      },
      {
        title: "Industrial Metal Framework",
        image: "/industrial-metal-framework-structure.jpg",
      },
    ],
  },
  {
    icon: Building2,
    title: "Building Solutions",
    description: "Windows & door fabrication, Structural steel frameworks, Custom frames & fittings",
    projects: [
      {
        title: "Metal Window Frames",
        image: "/metal-window-frames-fabrication.jpg",
      },
      {
        title: "Steel Door Installation",
        image: "/industrial-steel-door-fabrication.jpg",
      },
      {
        title: "Structural Steel Framework",
        image: "/building-structural-steel-framework.jpg",
      },
      {
        title: "Custom Metal Fittings",
        image: "/custom-metal-fittings-and-fixtures.jpg",
      },
    ],
  },
  {
    icon: Boxes,
    title: "Special Projects",
    description: "Booms, racks, brackets, and other custom metal projects tailored to your specifications",
    projects: [
      {
        title: "Custom Metal Booms",
        image: "/custom-metal-boom-fabrication.jpg",
      },
      {
        title: "Industrial Racks",
        image: "/industrial-metal-racks-storage.jpg",
      },
      {
        title: "Heavy-Duty Brackets",
        image: "/heavy-duty-metal-brackets-welding.jpg",
      },
      {
        title: "Custom Metal Solutions",
        image: "/custom-metal-fabrication-projects.jpg",
      },
    ],
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Delivery of fabricated products, Specialized equipment transportation",
    projects: [
      {
        title: "Equipment Transport",
        image: "/heavy-equipment-transport-truck.jpg",
      },
      {
        title: "Metal Products Delivery",
        image: "/metal-products-delivery-logistics.jpg",
      },
      {
        title: "Specialized Transport",
        image: "/specialized-industrial-equipment-transport.jpg",
      },
      {
        title: "On-Site Delivery",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="services" className="py-14 sm:py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-8 px-1">
          <h2 className="text-balance font-bold text-2xl sm:text-3xl md:text-4xl mb-3 text-primary">Our Services</h2>
          <p className="text-pretty text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive metal fabrication and CNC solutions for industrial and commercial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 bg-white hover:border-accent hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/70">
                  {service.description}
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-4">Click to view projects →</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary flex items-center gap-3">
              {selectedService && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <selectedService.icon className="h-5 w-5" />
                  </div>
                  {selectedService.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedService && (
            <div className="space-y-6">
              <p className="text-foreground/70 leading-relaxed">{selectedService.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {selectedService.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-colors"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 bg-white space-y-3">
                      <h4 className="font-semibold text-foreground">{project.title}</h4>
                      <Button asChild className="bg-amber-400 text-black hover:bg-amber-500 font-semibold rounded-full">
                        <Link
                          href={{
                            pathname: "/contact",
                            query: {
                              service: selectedService.title,
                              message: `Project: ${project.title} — Please provide a quote.`,
                            },
                          }}
                        >
                          Request for a quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
