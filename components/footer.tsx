"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-white text-unblend-navy">
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-unblend font-bold text-unblend-navy mb-2">
              UnBlend
            </h3>
            <p className="text-unblend-navy/80">
              Innovating milk for better quality, taste, & nutrition.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-unblend-navy hover:text-unblend-blue transition-colors duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-unblend-navy hover:text-unblend-blue transition-colors duration-300 ease-in-out"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-unblend-navy hover:text-unblend-blue transition-colors duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-unblend-navy">
              <li>Email: unblendinfo@gmail.com</li>
              <li>Phone: +91 7397751781</li>
              <li>Address: Coimbatore, India</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/unblend_in/"
                className="text-unblend-navy hover:text-unblend-blue"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://chat.whatsapp.com/KhJR0jaBuj09NZDsO3ihYI"
                className="text-unblend-navy hover:text-unblend-blue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-unblend-navy/20 mt-8 pt-8 text-center text-unblend-navy/80"
          variants={itemVariants}
        >
          <p>&copy; 2024 UnBlend. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
