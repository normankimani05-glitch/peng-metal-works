import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Peng-logo.jpg"
                alt="PMWL"
                width={1000}
                height={1000}
                className="h-12 w-12 object-contain bg-white rounded p-1"
              />
              <div>
                <div className="font-bold text-lg">PMWL</div>
                <div className="text-xs opacity-90">Peng Metal Works Ltd</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Precision metal fabrication and CNC solutions for industrial excellence.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Masts Creation</li>
              <li>CNC Cutting</li>
              <li>Metal Fabrication</li>
              <li>Building Solutions</li>
              <li>Custom Projects</li>
              <li>Transportation Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>+254 722 291 560</li>
              <li>Pengmetals@gmail.com</li>
              <li>Kawangware, Nairobi</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-accent/50 mt-8 mb-8" />

        <div className="text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Peng Metal Works Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
