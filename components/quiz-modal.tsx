"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const hasVisited = localStorage.getItem("hasVisitedUnBlend");
      if (!hasVisited) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          localStorage.setItem("hasVisitedUnBlend", "true");
        }, 5000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("LocalStorage error:", error);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="sm:max-w-[600px] bg-gradient-to-tr from-purple-600 via-unblend-navy to-unblend-blue p-0 border-none overflow-hidden"
        style={{ borderRadius: "5%" }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8 p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h2
                className="text-5xl font-bold"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Quicksand', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                UnBlend
              </h2>
            </motion.div>
            <h2 className="text-2xl font-bold text-white">
              Discover Your Perfect Blend
            </h2>

            <p className="text-2xl text-white/90">
              Don't Settle for Generic Milk—Find What's Right for You!
            </p>

            <div className="h-px bg-white/20 my-8" />

            <h3 className="text-3xl font-semibold text-white">
              Find your ideal milk match today!
            </h3>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                router.push("/quiz");
              }}
              className="w-full py-4 px-8 text-xl font-semibold text-unblend-navy rounded-full bg-white hover:bg-white/90 transition-all transform shadow-lg"
            >
              Start Your UnBlend Journey!
            </motion.button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
