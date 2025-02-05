"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
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
        className="sm:max-w-[600px] bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600 p-0 border-none overflow-hidden"
        style={{ borderRadius: "5%" }}
      >
        <div className="relative">
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10 bg-white/10 backdrop-blur-sm"
          >
            <X className="h-6 w-6" />
          </motion.button>

          {/* Modal Content */}
          <motion.div className="text-center space-y-8 p-8">
            <h2 className="text-5xl font-bold text-white">
              Discover Your
              <br />
              Perfect Blend
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                router.push("/quiz");
              }}
              className="w-3/4 py-4 px-8 text-xl font-semibold text-unblend-navy rounded-full bg-white hover:bg-white/90 transition-all transform shadow-lg"
            >
              Start Your UnBlend Journey!
            </motion.button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
