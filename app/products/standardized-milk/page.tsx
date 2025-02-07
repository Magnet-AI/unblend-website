"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, Heart, Leaf, Droplet } from "lucide-react";

export default function StandardizedMilkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Ultra-Filtered <br /> Standardized Milk
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            The perfect balance of nutrition and taste, designed to meet your
            daily dietary needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pt-6 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl scale-150">
              <Image
                src="../standardized_milk.png"
                alt="Standardized Ultra-filtered Milk"
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
            <h2 className="text-3xl font-bold text-orange-600 mb-6">
              Key Benefits
            </h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Dumbbell,
                  title: "High in protein",
                  description: "For muscle health and satiety",
                },
                {
                  icon: Heart,
                  title: "Reduced sugar",
                  description: "For better blood sugar management",
                },
                {
                  icon: Leaf,
                  title: "Rich in calcium",
                  description: "For strong bones and teeth",
                },
                {
                  icon: Droplet,
                  title: "Creamy taste",
                  description: "Without the extra fat",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="bg-orange-100 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-orange-600">
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
          className="relative z-10 bg-orange-50 rounded-2xl p-16 mb-16"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Nutrition Facts
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Serving Size: 200ml</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Calories</span>
                <span>120</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Fat</span>
                <span>9g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturated Fat</span>
                <span>5g</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Carbohydrates</span>
                <span>8g</span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Try our Standardized Ultra-filtered Milk today and taste the perfect
            blend of nutrition and flavor.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg">
                Back to All Products
              </Button>
            </Link>
            <Link href="/find-unblend">
              <Button className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg">
                Find Near You
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 bg-orange-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Best Recipes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                Mango Lassi
              </h3>
              <p className="text-gray-600 mb-4">
                A refreshing yogurt-based drink with sweet mango
              </p>
              <Link href="/recipes/mango-lassi">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                Masala Chai
              </h3>
              <p className="text-gray-600 mb-4">
                A warming blend of aromatic spices and UnBlend milk
              </p>
              <Link href="/recipes/masala-chai">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                Filter Coffee
              </h3>
              <p className="text-gray-600 mb-4">
                A strong and aromatic South Indian coffee
              </p>
              <Link href="/recipes/filter-coffee">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/recipes">
              <Button className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full text-lg">
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
