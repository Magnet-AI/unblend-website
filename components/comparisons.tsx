"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Comparisons() {
  return (
    <section className="min-h-screen flex items-center bg-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-unblend-navy text-center mb-4">
            Compare the Difference
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            See how UnBlend ultra-filtered milk stacks up against other options
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              title: "UnBlend Ultra-filtered Milk",
              description: "The perfect blend of nutrition and taste",
              color: "from-blue-600 to-unblend-navy",
              values: ["12g", "3.2g", "No"],
              labels: ["PROTEIN", "SUGAR", "LACTOSE"],
              icon: "🥛",
            },
            {
              title: "Regular Milk",
              description: "Traditional dairy option",
              color: "from-amber-500 to-amber-600",
              values: ["6g", "8g", "Yes"],
              labels: ["PROTEIN", "SUGAR", "LACTOSE"],
              icon: "🐄",
            },
            {
              title: "Almond Milk",
              description: "Plant-based alternative",
              color: "from-emerald-500 to-emerald-600",
              values: ["1g", "6g", "No"],
              labels: ["PROTEIN", "SUGAR", "LACTOSE"],
              icon: "🌰",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-lg overflow-hidden transform hover:scale-102 transition-transform duration-300`}
            >
              <div className="p-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4">
                    {item.values.map((value, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2 * (idx + 1),
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="text-center"
                      >
                        <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm w-24 h-24 flex flex-col justify-center items-center">
                          <div className="text-lg font-bold text-white">
                            {value}
                          </div>
                          <div className="text-xs text-white/90">
                            {item.labels[idx]}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-xs mb-4">
              *Values are per 200ml serving and may vary slightly by product
              variant
            </p>
            <Link href="/products" className="inline-block">
              <Button className="bg-unblend-navy hover:bg-unblend-navy/90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg text-sm">
                Discover UnBlend Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
