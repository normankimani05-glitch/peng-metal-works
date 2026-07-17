import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      <div className="container py-10 sm:py-12 md:py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Peng-logo.jpg"
                alt="PMWL"
                width={1000}
                height={1000}
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain bg-white rounded p-1"
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
              <li>+254 792 949 288</li>
              <li>Pengmetals@gmail.com</li>
              <li>Kawangware & Zambezi, Nairobi</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-accent/50 mt-8 mb-6" />

        <div className="flex justify-center gap-4">
          <a
            href="https://www.tiktok.com/@pengmetal.works"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@pengmetal.works"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@pengmetal.works"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@pengmetal.works"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@pengmetal.works"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="h-px bg-accent/50 mt-8 mb-8" />

        <div className="text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Peng Metal Works Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
