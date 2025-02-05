"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Leaf, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Health",
    description:
      "Every product we create is designed with your health and wellness in mind.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices and responsible dairy farming.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Supporting local farmers and creating positive impact in communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries in dairy science and nutrition.",
  },
];

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-200 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-unblend-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-unblend-navy/80">
            Revolutionizing milk for a better lifestyle through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20create%20a%20image%20for,%20mother%20pouring%20milk%20in%20the%20kitchen.%20in%20urban%20india%20house%20.jpg-wOVe90mBg2XUb9UPwbjI8hafJ1LuD6.jpeg"
                alt="Mother pouring milk in modern kitchen"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unblend-navy/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Beginning</h3>
                <p className="text-white/90">
                  Started in 2024 with a vision to revolutionize dairy nutrition
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-unblend-navy">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                To revolutionize the dairy industry by providing personalized,
                nutritious, and delicious products that cater to individual
                health needs and preferences, while promoting sustainability and
                ethical farming practices.
              </p>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="bg-unblend-blue/10 p-3 rounded-full">
                      <value.icon className="w-6 h-6 text-unblend-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-unblend-navy mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-gradient-to-br from-unblend-navy to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Innovation in Every Drop
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Our ultra-filtration technology enhances milk's natural
                  goodness while removing unwanted elements, creating a perfect
                  blend of taste and nutrition.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unblend-t7KlEWi0M5aq3wb9NSzxLqLwRXZjRP.png"
                alt="Innovation in dairy processing"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-unblend-navy mb-6">
              Join the UnBlend Family
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the perfect blend of tradition and innovation. Take our
              quiz and discover your ideal dairy match today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-unblend-navy hover:bg-unblend-navy/90 text-white px-8 py-6 text-lg"
                >
                  Take the Quiz
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-unblend-navy text-unblend-navy hover:bg-unblend-navy/10 px-8 py-6 text-lg"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
