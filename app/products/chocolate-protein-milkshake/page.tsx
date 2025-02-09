"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dumbbell, Heart, Coffee, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ChocolateProteinMilkshakePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-white overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Chocolate Protein Milkshake
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in the rich, chocolatey goodness packed with high-quality
            protein for muscle recovery and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl md:scale-150 scale-125 mr-10 md:mr-0 mb-20 md:mb-0">
              <Image
                src="../two_protein_shake.png"
                alt="Chocolate Protein Milkshake"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-amber-800 mb-6">
              Key Benefits
            </h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Dumbbell,
                  title: "24g of high-quality protein",
                  description: "Per serving for muscle recovery",
                },
                {
                  icon: Heart,
                  title: "Low in sugar",
                  description: "Perfect for health-conscious individuals",
                },
                {
                  icon: Coffee,
                  title: "Delicious chocolate flavor",
                  description: "For a satisfying treat",
                },
                {
                  icon: Zap,
                  title: "Excellent for post-workout",
                  description: "Quick and easy nutrition",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="bg-amber-100 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-amber-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 bg-amber-50 rounded-2xl p-24 mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
            Nutrition Facts
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Serving Size: 400ml</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Calories</span>
                <span>180</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Fat</span>
                <span>5g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturated Fat</span>
                <span>3g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Carbohydrates</span>
                <span>6g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sugar</span>
                <span>5g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Protein</span>
                <span>24g</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Indulge in Protein-Packed Goodness
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Try our Chocolate Protein Milkshake for a delicious way to support
            your fitness goals and satisfy your sweet tooth.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white sm:px-8 py-3 rounded-full text-lg">
                Back to All Products
              </Button>
            </Link>
            <Link href="/find-unblend">
              <Button className="bg-white text-amber-800 border-2 border-amber-800 hover:bg-amber-50 sm:px-8 py-3 rounded-full text-lg">
                Find Near You
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
