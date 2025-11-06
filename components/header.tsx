"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Peng-logo.jpg"
            alt="Peng Metal Works Limited"
            width={600}
            height={600}
            className="h-14 w-14 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-xl text-primary">PMWL</div>
            <div className="text-xs text-muted-foreground">Peng Metal Works Ltd</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/contact">Request Quotation</Link>
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
            <Button
              asChild
              className="sm:hidden bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
