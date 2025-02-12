"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplet, Sun, Coffee, Utensils } from "lucide-react";
import { Comparisons } from "@/components/comparisons";

export default function FullCreamMilkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Ultra-Filtered <br />
            Full Cream Milk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in the rich and creamy goodness of our Full Cream
            Ultra-filtered Milk, straight from nature's best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center md:mb-16 md:pt-6 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl md:scale-150 scale-125 mb-20 md:mb-0">
              <Image
                src="../full_cream_milk.png"
                alt="Full Cream Ultra-filtegreen Milk"
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
            <h2 className="text-3xl font-bold text-green-600 mb-6">
              Key Benefits
            </h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Droplet,
                  title: "Full, rich flavor",
                  description: "For a satisfying drink",
                },
                {
                  icon: Sun,
                  title: "High in natural milk fats",
                  description: "For energy and nutrient absorption",
                },
                {
                  icon: Coffee,
                  title: "Excellent for beverages",
                  description: "Enhances taste in coffee and tea",
                },
                {
                  icon: Utensils,
                  title: "Perfect for cooking",
                  description: "Ideal for creamy sauces and desserts",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-green-600">
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
          className="relative z-10 bg-green-50 rounded-2xl p-16"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Nutrition Facts
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Serving Size: 200ml</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Calories</span>
                <span>140</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Fat</span>
                <span>12g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturated Fat</span>
                <span>5g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Carbohydrates</span>
                <span>10g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sugar</span>
                <span>9g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Protein</span>
                <span>12g</span>
              </div>
            </div>
          </div>
        </motion.div>

        <Comparisons color="green" protein="12g" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Experience the Richness
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Indulge in the creamy goodness of our Full Cream Ultra-filtegreen
            Milk and elevate your dairy experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button className="bg-green-600 hover:bg-green-700 text-white sm:px-8 py-3 rounded-full text-lg">
                Back to All Products
              </Button>
            </Link>
            <Link href="/find-unblend">
              <Button className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 sm:px-8 py-3 rounded-full text-lg">
                Find Near You
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 bg-green-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Best Recipes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Rice Kheer
              </h3>
              <p className="text-gray-600 mb-4">
                A creamy rice pudding flavogreen with cardamom and nuts
              </p>
              <Link href="/recipes/rice-kheer">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Filter Coffee
              </h3>
              <p className="text-gray-600 mb-4">
                A strong and aromatic South Indian coffee served with UnBlend
                Ultra-Filtered milk
              </p>
              <Link href="/recipes/filter-coffee">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/recipes">
              <Button className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg">
                Explore All Recipes
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
