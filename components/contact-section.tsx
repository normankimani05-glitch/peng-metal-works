"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [banner, setBanner] = useState<null | { type: "success" | "error"; text: string }>(null)
  const [isFading, setIsFading] = useState(false)
  const [serviceError, setServiceError] = useState(false)

  // Auto-hide banner after 8 seconds with fade-out
  useEffect(() => {
    if (!banner) return
    setIsFading(false)
    const fadeTimer = setTimeout(() => setIsFading(true), 7500)
    const hideTimer = setTimeout(() => setBanner(null), 8300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [banner])

  // Prefill from URL query params
  useEffect(() => {
    if (!searchParams) return
    const svc = searchParams.get("service") || ""
    const msg = searchParams.get("message") || ""
    if (!svc && !msg) return
    setFormData((prev) => ({
      ...prev,
      service: svc || prev.service,
      message: msg || prev.message,
    }))
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.service) {
      setServiceError(true)
      setBanner({ type: "error", text: "Please select a Service Needed before submitting." })
      ;(typeof window !== "undefined") && document.getElementById("service")?.focus()
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const responseData = await response.json()

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your request has been submitted successfully. We'll get back to you within 24 hours.",
          duration: 5000,
        })
        setBanner({
          type: "success",
          text: "Your request has been submitted successfully. We'll get back to you within 24 hours.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error(responseData.error || "Submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      })
      setBanner({
        type: "error",
        text: "Failed to submit your request. Please contact us at +254 722 291 560.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
    if (value) setServiceError(false)
  }

  return (
    <section id="contact" className="pt-10 pb-20 bg-white">
      {banner && (
        <div
          className={`${banner.type === "success" ? "bg-green-600" : "bg-red-600"} fixed top-20 left-0 right-0 z-[60] text-white transition-opacity duration-700 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="container py-2 flex items-center justify-between gap-4">
            <span className="text-sm md:text-base">{banner.text}</span>
            <button
              onClick={() => setBanner(null)}
              className="text-white/90 hover:text-white text-sm font-medium"
              aria-label="Dismiss message"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-balance font-bold text-3xl md:text-4xl mb-3 text-primary">Contact Us</h2>
          <p className="text-pretty text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-primary">Request a Quote</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <Select value={formData.service} onValueChange={handleServiceChange} required>
                        <SelectTrigger id="service" className={serviceError ? "ring-2 ring-red-500 border-red-500" : ""} aria-invalid={serviceError}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masts">Masts services (galvanized, non-galvanized)</SelectItem>
                          <SelectItem value="CNC">CNC Services</SelectItem>
                          <SelectItem value="fabrication">Metal Works & Fabrication</SelectItem>
                          <SelectItem value="building">Building Solutions</SelectItem>
                          <SelectItem value="special">Special Projects</SelectItem>
                          <SelectItem value="transport">Transport</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+254 722 291 560</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">Pengmetals@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Kawangware & Zambezi, Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-2 border-primary relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              <CardHeader>
                <CardTitle className="text-lg">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
