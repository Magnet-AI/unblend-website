"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const colorClasses = {
  green: "from-green-600 to-green-700",
  orange: "from-orange-600 to-orange-700",
  blue: "from-blue-600 to-blue-700",
};

export function Comparisons({ color, protein }) {
  return (
    <div>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-${color}-600`}
            >
              Compare the Difference
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              See how UnBlend ultra-filtered milk stacks up against other
              options
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "UnBlend Ultra-filtered Milk",
                description: "The perfect blend of nutrition and taste",
                color: colorClasses[color],
                values: ["Low", protein, "No"],
                labels: ["SUGAR", "PROTEIN", "LACTOSE"],
                icon: "🥛",
              },
              {
                title: "Regular Milk",
                description: "Traditional dairy option",
                color: "from-cyan-500 to-cyan-600",
                values: ["High", "6g", "Yes"],
                labels: ["SUGAR", "PROTEIN", "LACTOSE"],
                icon: "🐄",
              },
              {
                title: "Almond Milk",
                description: "Plant-based alternative",
                color: "from-orange-900 to-amber-900",
                values: ["Low", "1g", "No"],
                labels: ["SUGAR", "PROTEIN", "LACTOSE"],
                icon: "/almond.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      {item.title === "Almond Milk" ? (
                        <Image
                          src={item.icon}
                          alt="Almond Milk"
                          width={32}
                          height={32}
                          className="w-6 h-6 mx-1 sm:w-8 sm:h-8"
                        />
                      ) : (
                        <span className="text-2xl sm:text-3xl">
                          {item.icon}
                        </span>
                      )}
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 w-full sm:w-auto justify-end sm:justify-end sm:mt-0">
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
                          <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 flex flex-col justify-center items-center">
                            <div className="text-sm sm:text-base font-bold text-white">
                              {value}
                            </div>
                            <div className="text-[0.6rem] sm:text-xs text-white/90">
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
                <Button
                  className={`bg-${color}-600 hover:bg-${color}-700 text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg text-xs sm:text-sm`}
                >
                  Discover UnBlend Products
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bottom-1 right-1 text-[0.5rem] text-gray-500 bg-white/60 backdrop-blur-md rounded-md"
      >
        <a
          href="https://www.flaticon.com/free-icons/almond"
          title="almond icon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Almond icon created by Freepik - Flaticon
        </a>
      </motion.div>
    </div>
  );
}
