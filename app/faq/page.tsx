"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes UnBlend milk different from regular milk?",
    answer:
      "UnBlend milk undergoes an innovative ultra-filtration process that concentrates the protein and calcium while reducing sugar content. This results in a more nutritious product without compromising on taste.",
  },
  {
    question: "Is UnBlend milk lactose-free?",
    answer:
      "While our standard UnBlend milk contains lactose, we do offer lactose-free options in our product line. These products are clearly labeled as 'Lactose-Free' on the packaging.",
  },
  {
    question: "How long does UnBlend milk last?",
    answer:
      "UnBlend milk typically has a longer shelf life than regular milk due to our ultra-filtration process. However, we recommend checking the 'Best By' date on the packaging for the most accurate information.",
  },
  {
    question: "Is UnBlend milk suitable for children?",
    answer:
      "Yes, UnBlend milk is suitable for children and can be a great way to increase their protein and calcium intake. However, as with any dietary changes, we recommend consulting with a pediatrician, especially for very young children.",
  },
  {
    question: "Are UnBlend products organic?",
    answer:
      "While we prioritize high-quality ingredients and sustainable farming practices, not all UnBlend products are certified organic. We do offer an organic line, which is clearly labeled on the packaging.",
  },
  {
    question: "How does ultra-filtration work?",
    answer:
      "Ultra-filtration is a process that passes milk through a special membrane to separate and concentrate its components. This allows us to adjust the levels of protein, calcium, and sugar to create a more nutritious product.",
  },
  {
    question: "Does UnBlend use any artificial additives or preservatives?",
    answer:
      "No, UnBlend does not use any artificial additives or preservatives. Our products are made with natural ingredients and our extended shelf life is achieved through our ultra-filtration process and careful packaging.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-unblend-navy">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-unblend-blue transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p className="text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-unblend-navy mb-8"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
