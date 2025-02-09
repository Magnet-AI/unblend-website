"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const products = [
  {
    id: "standardized-milk",
    name: "Standardized Milk",
    description:
      "Perfectly balanced for everyday nutrition with essential nutrients in every glass. Rich in vitamins and minerals.",
    image: "./standardized_milk.png",
    features: [
      { label: "PROTEIN", value: "12g" },
      { label: "SUGAR", value: "9g" },
      { label: "FAT", value: "9g" },
    ],
    color: "orange",
    servingSize: "200ml",
    nutritionInfo: {
      totalFat: "9g",
      saturatedFat: "5g",
      carbohydrates: "8g",
      sugar: "9g",
      protein: "12g",
      lactoseFree: "Yes",
    },
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Milk",
    description:
      "Rich and creamy, straight from nature's best for indulgent taste. Rich in vitamins and minerals.",
    image: "./full_cream_milk.png",
    features: [
      { label: "PROTEIN", value: "12g" },
      { label: "FAT", value: "12g" },
      { label: "SUGAR", value: "9g" },
    ],
    color: "green",
    servingSize: "200ml",
    nutritionInfo: {
      totalFat: "12g",
      saturatedFat: "5g",
      carbohydrates: "10g",
      sugar: "9g",
      protein: "12g",
      lactoseFree: "Yes",
    },
  },
  {
    id: "toned-milk",
    name: "Toned Milk",
    description:
      "Light and nutritious, perfect for the health conscious lifestyle. Rich in vitamins and minerals.",
    image: "./toned_milk.png",
    features: [
      { label: "PROTEIN", value: "12g" },
      { label: "FAT", value: "6g" },
      { label: "SUGAR", value: "8g" },
    ],
    color: "blue",
    servingSize: "200ml",
    nutritionInfo: {
      totalFat: "6g",
      saturatedFat: "5g",
      carbohydrates: "8g",
      sugar: "8g",
      protein: "12g",
      lactoseFree: "Yes",
    },
  },
  {
    id: "chocolate-protein-milkshake",
    name: "Protein Shake",
    description:
      "Your everyday protein boost—24g of natural goodness when your diet needs a lift.",
    image: "./two_protein_shake.png",
    features: [
      { label: "PROTEIN", value: "24g" },
      { label: "FLAVOR", value: "RICH" },
      { label: "SUGAR", value: "5g" },
    ],
    color: "chocolate",
    servingSize: "400ml",
    nutritionInfo: {
      totalFat: "5g",
      saturatedFat: "3g",
      carbohydrates: "6g",
      sugar: "5g",
      protein: "24g",
      lactoseFree: "Yes",
    },
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "from-blue-500 to-blue-700 text-white";
    case "green":
      return "from-green-500 to-green-700 text-white";
    case "orange":
      return "from-orange-500 to-orange-700 text-white";
    case "chocolate":
      return "from-amber-700 to-amber-900 text-white";
    default:
      return "from-gray-500 to-gray-700 text-white";
  }
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {products.map((product, index) => (
        <section
          key={product.id}
          className={`relative min-h-screen flex items-center bg-gradient-to-br ${getColorClasses(
            product.color
          )}`}
        >
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 1440 290"
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
                <div className="relative h-[600px] w-full scale-150">
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
                  <h2
                    className={`text-2xl font-normal mb-4 text-white/90 ${quicksand.className}`}
                  >
                    {product.id === "chocolate-protein-milkshake"
                      ? "CHOCOLATE"
                      : "ULTRA-FILTERED MILK"}
                  </h2>
                  <h1
                    className={`text-4xl lg:sm:text-6xl text-5xl font-light mb-6 text-white ${quicksand.className}`}
                  >
                    {product.name}
                  </h1>

                  <p className="text-xl lg:text-2xl mb-12 text-white/80">
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
                      <div className="text-5xl lg:sm:text-6xl text-5xl font-bold mb-2 text-white">
                        {feature.value}
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-white/90">
                        {feature.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {product.nutritionInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-12 bg-white/20 backdrop-blur-sm p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold text-white">
                      Nutrition Information
                    </h3>
                    <p className="text-lg text-white/90 mb-4">
                      Per {product.servingSize} serving:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(product.nutritionInfo).map(
                        ([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-3xl font-bold text-white">
                              {value}
                            </div>
                            <div className="text-sm font-semibold text-white/90">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .trim()
                                .toUpperCase()}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href={`/products/${product.id}`} passHref>
                    <motion.button
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg px-10 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-label={`Learn more about ${product.name}`}
                    >
                      Learn More
                    </motion.button>
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
