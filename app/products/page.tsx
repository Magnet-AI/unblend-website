"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const products = [
  {
    id: "chocolate-protein-milkshake",
    name: "Protein Shake",
    description:
      "Delicious chocolate flavor packed with high-quality protein for muscle recovery and growth",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-28-25%20at%2011.27%E2%80%AFAM-AbDaOD3MNDkKPuHDv26U9NqAAR4KPD.jpeg",
    features: [
      { label: "PROTEIN", value: "24g" },
      { label: "FLAVOR", value: "RICH" },
      { label: "SUGAR", value: "LOW" },
    ],
    color: "chocolate",
  },
  {
    id: "standardized-milk",
    name: "Standardized Milk",
    description:
      "Perfectly balanced for everyday nutrition with essential nutrients in every glass",
    image: "/placeholder.svg?height=800&width=600",
    features: [
      { label: "PROTEIN", value: "HIGH" },
      { label: "SUGAR", value: "LESS" },
      { label: "CALCIUM", value: "HIGH" },
    ],
    color: "orange",
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Milk",
    description:
      "Rich and creamy, straight from nature's best for indulgent taste",
    image: "/placeholder.svg?height=800&width=600",
    features: [
      { label: "CREAM", value: "FULL" },
      { label: "PROTEIN", value: "HIGH" },
      { label: "SUGAR", value: "LESS" },
    ],
    color: "green",
  },
  {
    id: "toned-milk",
    name: "Toned Milk",
    description:
      "Light and nutritious, perfect for the health conscious lifestyle",
    image: "/placeholder.svg?height=800&width=600",
    features: [
      { label: "LOW FAT", value: "YES" },
      { label: "PROTEIN", value: "HIGH" },
      { label: "SUGAR", value: "LESS" },
    ],
    color: "blue",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-600";
    case "orange":
      return "text-orange-600";
    case "green":
      return "text-green-600";
    case "chocolate":
      return "text-amber-900";
    default:
      return "text-gray-700";
  }
};

export default function ProductsPage() {
  useEffect(() => {
    try {
      console.log("Products:", JSON.stringify(products));
    } catch (error) {
      console.error("Error stringifying products:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />

      {products.map((product, index) => (
        <section
          key={product.id}
          className="relative min-h-screen flex items-center"
        >
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 1440 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`order-2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative h-[600px] w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`text-center lg:text-left order-1 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-medium mb-4 italic">
                    {product.id === "chocolate-protein-milkshake"
                      ? "chocolate"
                      : "ultra-filtered"}
                  </h2>
                  <h1
                    className={`text-4xl lg:text-6xl font-bold mb-6 ${getColorClasses(
                      product.color
                    )}`}
                  >
                    {product.name}
                  </h1>

                  <p className="text-xl lg:text-2xl mb-12 text-gray-800">
                    {product.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-3 gap-8 mb-6"
                >
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`text-5xl lg:text-6xl font-bold mb-2 ${getColorClasses(
                          product.color
                        )}`}
                      >
                        {feature.value}
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-gray-700">
                        {feature.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {product.id !== "chocolate-protein-milkshake" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mb-12"
                  >
                    <div
                      className={`text-3xl lg:text-4xl font-bold mb-2 ${getColorClasses(
                        product.color
                      )}`}
                    >
                      HIGH
                    </div>
                    <div className="text-sm lg:text-base font-semibold text-gray-700">
                      CALCIUM
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative z-10 flex justify-center lg:justify-start mb-16"
                >
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="lg"
                      className="bg-white text-unblend-navy border-2 border-unblend-navy px-8 py-6 rounded-full 
             text-lg font-semibold tracking-wide transition-all duration-300 
             hover:bg-unblend-navy hover:text-white hover:border-blue-700 
             shadow-md hover:shadow-lg active:scale-95"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
