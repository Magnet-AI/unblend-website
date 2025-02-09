"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  BeakerIcon,
  Filter,
  Droplet,
  Activity,
  Heart,
  Brain,
  ArrowRight,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const milkInfo = [
  {
    title: "What is Ultra-Filtered Milk?",
    description:
      "Ultra-filtered milk is fresh dairy milk that passes through a series of specialized filters to concentrate its nutrients while removing unwanted components. This process creates milk that's higher in protein and calcium, but lower in sugar than regular milk.",
    icon: Filter,
  },
  {
    title: "The Ultra-Filtration Process",
    description:
      "Our state-of-the-art filtration technology uses fine membranes to separate milk components based on their molecular size. This allows us to precisely control the milk's composition while maintaining its natural goodness.",
    icon: BeakerIcon,
  },
  {
    title: "Natural Concentration",
    description:
      "Unlike adding artificial ingredients, ultra-filtration naturally concentrates milk's best components. This means you get more protein and calcium in every glass, without any additives.",
    icon: Droplet,
  },
];

const benefits = [
  {
    title: "More Protein",
    description:
      "Higher protein content helps build and repair muscles, making it perfect for active lifestyles.",
    icon: Activity,
  },
  {
    title: "Less Sugar",
    description:
      "Reduced lactose content makes it easier to digest and better for blood sugar management.",
    icon: Heart,
  },
  {
    title: "Better Nutrition",
    description:
      "Enhanced calcium absorption and balanced nutrients support overall health and wellness.",
    icon: Brain,
  },
  {
    title: "All Natural",
    description:
      "No artificial additives or preservatives, just pure, concentrated milk goodness.",
    icon: Leaf,
  },
];

export default function HowWeDoItPage() {
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/5 via-white to-unblend-blue/5 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20make%20a%20milk%20process%20factory%20image.jpg-AOCVAp4UPbAiVUTacwCa2NvqRX2a92.jpeg"
            alt="Milk processing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="sm:sm:text-6xl text-5xl text-5xl font-bold text-unblend-navy mb-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
              How We Do It
            </h1>
            <p
              className={`sm:text-2xl text-xl font-semibold ${quicksand.variable} font-quicksand mb-4 text-unblend-navy/80`}
            >
              Discover the science behind our innovative ultra-filtered milk
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ultra-Filtered Milk Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {milkInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-unblend-blue/5 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-unblend-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <info.icon className="w-8 h-8 text-unblend-navy" />
                </div>
                <h3 className="text-2xl font-bold text-unblend-navy mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-unblend-navy mb-6">
                Our Quality Promise
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every step of our ultra-filtration process is carefully
                monitored and controlled. We conduct rigorous testing to ensure
                the highest quality and nutritional value in every product.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-unblend-blue/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">We Test For:</h3>
                  <ul className="space-y-2">
                    {[
                      "Protein content and quality",
                      "Calcium levels",
                      "Sugar content",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-unblend-navy" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-unblend-blue/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">We Ensure:</h3>
                  <ul className="space-y-2">
                    {[
                      "Overall nutritional value",
                      "Purity and freshness",
                      "Taste and consistency",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-unblend-navy" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20create%20a%20testing%20lab%20for%20milk%20picture%20a%20indian%20man%20testing%20it%20.jpg-JeZvs2ZNSeD1WHC4O7Cx2d2AEY1sgs.jpeg"
                alt="Quality Assurance Process - Scientist testing milk in laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unblend-navy/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Rigorous Testing</h3>
                <p className="text-white/90">
                  Our state-of-the-art facilities ensure the highest quality in
                  every batch
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-unblend-blue/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-unblend-navy mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Try our ultra-filtered milk products and taste the perfect blend
              of nutrition and flavor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-unblend-navy hover:bg-unblend-navy/90 text-white px-8 py-6 text-lg transition-colors duration-300"
                >
                  Explore Our Products
                </Button>
              </Link>
              <Link href="/find-unblend">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-unblend-navy text-unblend-navy hover:bg-unblend-navy/10 px-8 py-6 text-lg transition-colors duration-300"
                >
                  Find UnBlend Near You
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
