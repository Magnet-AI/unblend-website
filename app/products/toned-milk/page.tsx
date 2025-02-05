"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Feather, Heart, Zap, Leaf } from "lucide-react";
import { useEffect } from "react";

export default function TonedMilkPage() {
  useEffect(() => {
    try {
      console.log(
        "Toned Milk:",
        safeStringify({
          name: "Toned Ultra-filtered Milk",
          description:
            "A perfect balance of nutrition and taste, ideal for those seeking a lighter option without compromising on benefits.",
          image: "/placeholder.svg?height=800&width=600",
        })
      );
    } catch (error) {
      console.error("Error in useEffect:", error);
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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Toned Ultra-filtered Milk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A perfect balance of nutrition and taste, ideal for those seeking a
            lighter option without compromising on benefits.
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-blue-50 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Ideal For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Health-conscious individuals",
              "Fitness enthusiasts",
              "Those on a calorie-controlled diet",
              "Individuals with mild lactose sensitivity",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md text-center"
              >
                <p className="text-blue-600 font-semibold">{item}</p>
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
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

function safeStringify(obj: any) {
  try {
    return JSON.stringify(obj);
  } catch (error) {
    console.error("Error stringifying object:", error);
    return JSON.stringify({ error: "Unable to stringify object" });
  }
}
