"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function OurStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-unblend-navy"
            >
              Our Story
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              In India, milk isn't just food - it's a blessing, a tradition, and
              a way of life. For generations, our families have valued pure,
              fresh milk for its wholesome goodness.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              At UnBlend, we honor this tradition while making it even better
              for today's needs. Using ultra-filtration technology, we enhance
              milk's natural goodness without any additives.
            </motion.p>
            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/our-story">
                <Button className="bg-unblend-navy hover:bg-unblend-navy/90 text-white group">
                  Learn More About Our Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="bg-unblend-blue/10 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-unblend-navy mb-2">
                    Legacy of Nourishment
                  </h3>
                  <p className="text-gray-600">Milk is a symbol of care, strength, and tradition.</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="bg-unblend-blue/10 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-unblend-navy mb-2">
                    Enhanced with Innovation
                  </h3>
                  <p className="text-gray-600">
                    Ultra-filtration technology improves purity.
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  variants={itemVariants}
                  className="bg-unblend-blue/10 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-unblend-navy mb-2">
                    Rooted in Purity
                  </h3>
                  <p className="text-gray-600">
                    No artificial additives, just natural goodness.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="bg-unblend-blue/10 p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-unblend-navy mb-2">
                    Made for You
                  </h3>
                  <p className="text-gray-600">
                    A modern solution for today’s health-conscious lifestyle.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
