"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { quizQuestions } from "@/data/quiz-questions";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";


export function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedUnBlend");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("hasVisitedUnBlend", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600 p-0 border-none rounded-2xl overflow-hidden">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10 bg-white/10 backdrop-blur-sm"
          >
            <X className="h-6 w-6" />
          </motion.button>
            <motion.div className="text-center space-y-8 p-8">
              <h2 className="text-5xl font-bold text-white">
                Discover Your
                <br />
                Perfect Blend
              </h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/quiz")}
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