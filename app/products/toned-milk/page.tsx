"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Feather, Heart, Zap, Leaf } from "lucide-react";

export default function TonedMilkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Toned Ultra-filtered Milk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A perfect balance of nutrition and taste, ideal for those seeking a
            lighter option without compromising on benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl scale-150">
              <Image
                src="../toned_milk.png"
                alt="Toned Ultra-filtered Milk"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Key Benefits
            </h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Feather,
                  title: "Lower in fat",
                  description: "While maintaining a creamy texture",
                },
                {
                  icon: Heart,
                  title: "High in protein",
                  description: "For muscle health and satiety",
                },
                {
                  icon: Zap,
                  title: "Reduced calorie content",
                  description: "For weight management",
                },
                {
                  icon: Leaf,
                  title: "Rich in essential nutrients",
                  description: "Calcium and vitamins for overall health",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-600">
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
          className="relative z-10 bg-blue-50 rounded-2xl p-16 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Nutrition Facts
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Serving Size: 200ml</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Calories</span>
                <span>100</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Fat</span>
                <span>6g</span>
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
                <span>8g</span>
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
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Experience the Balance
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Try our Toned Ultra-filtered Milk for a perfect blend of nutrition
            and taste, without the extra calories.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
                Back to All Products
              </Button>
            </Link>
            <Link href="/find-unblend">
              <Button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg">
                Find Near You
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Best Recipes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Strawberry Pancakes
              </h3>
              <p className="text-gray-600 mb-4">
                Fluffy pancakes with fresh strawberries and UnBlend milk
              </p>
              <Link href="/recipes/strawberry-pancakes">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Dahi (Indian Yogurt)
              </h3>
              <p className="text-gray-600 mb-4">
                Creamy and probiotic-rich Indian yogurt made with UnBlend
                Ultra-Filtered milk
              </p>
              <Link href="/recipes/dahi">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View Recipe
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/recipes">
              <Button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg">
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
