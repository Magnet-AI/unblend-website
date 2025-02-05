"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Activity, Clock, Leaf, StickerIcon as Stomach } from "lucide-react";
import Link from "next/link";

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
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="text-unblend-navy space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 mt-6">
                <span className="text-unblend-navy font-extrabold">
                  MORE
                  <br />
                  PROTEIN.
                </span>
                <br />
                <span className="text-unblend-navy font-extrabold">
                  BETTER
                  <br />
                  TASTE.
                </span>
              </h1>
              <p className="text-xl font-semibold text-unblend-navy/80 pb-5 rounded-lg inline-block">
                Experience the perfect blend of health, taste, and convenience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-unblend-navy hover:bg-unblend-navy/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Our Products
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="relative w-full aspect-square max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
              {[
                {
                  color: "green",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/like%20this%20in%20one%20liter%20i%20need%20it%20to%20for%20my%20company.%20a%20milk%20company%20for%20unblend.%20i%20need%20the%20packing%20to%20be%20like%20in%20the%20picture%20added%20.jpg-B1D8a2nAaD4HtKn2BWQQn1Z7MVctga.jpeg",
                },
                {
                  color: "cream",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/like%20this%20in%20one%20liter%20i%20need%20it%20to%20for%20my%20company.%20a%20milk%20company%20for%20unblend.%20i%20need%20the%20packing%20to%20be%20like%20in%20the%20picture%20added.%20i%20don't%20need%20cow%20image%20in%20the%20pack%20rather%20add%20%20cup%20of%20coffee.jpg-LJKfHIuByU0CTupTMpwOvvxlAPcmzd.jpeg",
                },
                {
                  color: "chocolate",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-28-25%20at%2011.27%E2%80%AFAM-45FmXSC6UvHfdG24xgCWzChW6bLTqz.jpeg",
                },
                {
                  color: "unflavored",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/like%20this%20in%20one%20liter%20i%20need%20it%20to%20for%20my%20company.%20a%20milk%20company%20for%20unblend.%20i%20need%20the%20packing%20to%20be%20like%20in%20the%20picture%20added.%20i%20don't%20need%20cow%20image%20in%20the%20pack%20rather%20add%20%20protein%20shake.%20.jpg-aSBVeijq4hyI1Dx4L9v7ykIM8PCE83.jpeg",
                },
              ].map((bottle, index) => (
                <motion.div
                  key={bottle.color}
                  variants={itemVariants}
                  className="relative group w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={bottle.image || "/placeholder.svg"}
                      alt={`UnBlend ${bottle.color} milk`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
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
