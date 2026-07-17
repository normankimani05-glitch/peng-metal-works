"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 sm:h-20 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/images/Peng-logo.jpg"
            alt="Peng Metal Works Limited"
            width={100}
            height={100}
            className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-bold text-xl text-primary">PMWL</div>
            <div className="text-xs text-muted-foreground">Peng Metal Works Ltd</div>
          </div>
        </Link>

        {/* Always-visible Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm overflow-x-auto whitespace-nowrap px-1">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About Us
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
          {/* Mobile slide-out menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => setOpen(true)}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex h-full flex-col">
                  <nav className="mt-4 flex flex-col items-center text-center">
                    <Link href="/" onClick={() => setOpen(false)} className="block w-full px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b-2 border-amber-400">Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="block w-full px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b-2 border-amber-400">About Us</Link>
                    <Link href="/services" onClick={() => setOpen(false)} className="block w-full px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b-2 border-amber-400">Services</Link>
                    <Link href="/projects" onClick={() => setOpen(false)} className="block w-full px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b-2 border-amber-400">Projects</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="block w-full px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b-2 border-amber-400">Contact</Link>
                    <div className="w-full px-3 pt-3">
                      <Button asChild className="w-full bg-amber-400 text-black hover:bg-amber-500 font-semibold rounded-full" onClick={() => setOpen(false)}>
                        <Link href="/contact">Request a Quote</Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button
            asChild
            className="bg-amber-400 text-black hover:bg-amber-500 font-semibold text-sm md:text-base px-3 sm:px-4 md:px-5 py-2 rounded-full shadow"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
