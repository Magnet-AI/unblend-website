"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplet, Sun, Coffee, Utensils } from "lucide-react";
import { useEffect } from "react";

export default function FullCreamMilkPage() {
  useEffect(() => {
    try {
      console.log(
        "Product data:",
        JSON.stringify({
          name: "Full Cream Ultra-filtegreen Milk",
          description:
            "Indulge in the rich and creamy goodness of our Full Cream Ultra-filtegreen Milk, straight from nature's best.",
          benefits: [
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
          ],
          idealFor: [
            "Those who enjoy traditional full-fat milk",
            "Growing children needing calorie-dense nutrition",
            "Athletes and active individuals",
            "Baking and cooking enthusiasts",
          ],
        })
      );
    } catch (error) {
      console.error("Error stringifying product data:", error);
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Full Cream Ultra-filtegreen Milk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in the rich and creamy goodness of our Full Cream
            Ultra-filtegreen Milk, straight from nature's best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-green-50 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Ideal For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Those who enjoy traditional full-fat milk",
              "Growing children needing calorie-dense nutrition",
              "Athletes and active individuals",
              "Baking and cooking enthusiasts",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md text-center"
              >
                <p className="text-green-600 font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
                Back to All Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

const safeStringify = (obj: any) => {
  try {
    return JSON.stringify(obj);
  } catch (error) {
    return JSON.stringify({ error: "Unable to stringify object" });
  }
};
