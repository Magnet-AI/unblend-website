"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@unblend.com",
      description: "Online support 24/7",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Dairy Lane",
      description: "Mumbai, Maharashtra 400001",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 5:00 PM",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-background/5 via-unblend-brand/5 to-unblend-background/5 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-unblend font-bold text-unblend-background mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help you find your perfect dairy blend.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-unblend text-2xl text-unblend-background">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="border-unblend-background/20 focus:border-unblend-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-unblend-background/20 focus:border-unblend-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                      className="border-unblend-background/20 focus:border-unblend-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      required
                      className="min-h-[150px] border-unblend-background/20 focus:border-unblend-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-unblend-background hover:bg-unblend-background/90 text-unblend-brand font-unblend text-lg py-6"
                  >
                    {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="p-3 rounded-full bg-unblend-background/5">
                      <info.icon className="h-6 w-6 text-unblend-background" />
                    </div>
                    <div>
                      <h3 className="font-unblend text-lg font-bold text-unblend-background mb-1">{info.title}</h3>
                      <p className="text-lg font-medium text-gray-900">{info.details}</p>
                      <p className="text-gray-500">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995644531!3d19.08205771574718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659342419302!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

