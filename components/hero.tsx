"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export function Hero() {
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
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-200 to-white overflow-hidden">
      <div className="container mx-auto px-4 m:py-16 py-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 md:gap-8 items-center"
        >
          <div className="text-unblend-navy space-y-6 sm:space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:sm:text-6xl text-5xl font-bold leading-tight ${quicksand.className}`}
              >
                <span className="text-unblend-navy">
                  More
                  <br />
                  Protein.
                </span>
                <br />
                <span className="text-unblend-navy font-normal">
                  Better
                  <br />
                  Taste.
                </span>
              </h1>
              <p
                className={`text-lg sm:text-xl font-bold text-unblend-navy pb-2 sm:pb-5 rounded-lg inline-block ${quicksand.className}`}
              >
                Experience the fresh blend of health, taste, and convenience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-unblend-navy hover:bg-unblend-navy/90 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 sm:py-4 md:py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Find Your Perfect Milk! 🥛✨
                  <span className="hidden sm:inline"> Take the Quiz Now →</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="relative w-full aspect-square max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-5 md:gap-7 w-full h-full">
              {[
                {
                  color: "standarized",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-Pacdora-j8elbYLu7SmUOWRCOIbCmS5H6ZDdcr.png",
                  id: "standardized-milk",
                },
                {
                  color: "cream",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-Pacdora%20(8)-ntCulrUry7TnmUxuHq8Ts4E0bKuMRU.png",
                  id: "full-cream-milk",
                },
                {
                  color: "toned",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-Pacdora%20(1)-LX9Ati1OeZWcUjdshqQFel0VhR1gVF.png",
                  id: "toned-milk",
                },
                {
                  color: "chocolate",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockup-Pacdora%20(7)-R9Q1AODjOKu7D1ikL0vSJ9w0d5wsOS.png",
                  id: "chocolate-protein-milkshake",
                },
              ].map((bottle) => (
                <motion.div
                  key={bottle.color}
                  variants={itemVariants}
                  className="relative group w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative mt-4 sm:mt-6 md:mt-10 w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <Link href={`/products/${bottle.id}`} passHref>
                      <Image
                        src={bottle.image || "/placeholder.svg"}
                        alt={`UnBlend ${bottle.color} milk`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 scale-110 sm:scale-125 group-hover:scale-150"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            fill="#FFFFFF"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}
