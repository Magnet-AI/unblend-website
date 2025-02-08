"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Comparisons() {
  return (
    <section className="min-h-screen flex items-center bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-unblend-navy text-center mb-4">
            Compare the Difference
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            See how UnBlend ultra-filtered milk stacks up against other options
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              title: "UnBlend Ultra-filtered Milk",
              description: "The perfect blend of nutrition and taste",
              color: "from-blue-600 to-unblend-navy",
              values: ["12g", "No"],
              labels: ["PROTEIN", "LACTOSE"],
              icon: "🥛",
            },
            {
              title: "Regular Milk",
              description: "Traditional dairy option",
              color: "from-amber-500 to-amber-600",
              values: ["6g", "Yes"],
              labels: ["PROTEIN", "LACTOSE"],
              icon: "🐄",
            },
            {
              title: "Almond Milk",
              description: "Plant-based alternative",
              color: "from-emerald-500 to-emerald-600",
              values: ["1g", "No"],
              labels: ["PROTEIN", "LACTOSE"],
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
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-end sm:justify-start absolute bottom-4 right-4 sm:static">
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
                        <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col justify-center items-center">
                          <div className="text-sm sm:text-base md:text-lg font-bold text-white">
                            {value}
                          </div>
                          <div className="text-[0.5rem] sm:text-xs text-white/90">
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
              <Button className="bg-unblend-navy hover:bg-unblend-navy/90 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg text-xs sm:text-sm">
                Discover UnBlend Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
