"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Quicksand } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const productCategories = [
  {
    name: "Milk",
    items: ["Standardized Milk", "Full Cream Milk", "Toned Milk"],
  },
  {
    name: "Protein Shakes",
    items: ["Chocolate Protein Milkshake"],
  },
];

const lifestyleCategories = [
  { name: "Fitness Enthusiast", href: "/our-products/fitness-enthusiast" },
  { name: "Coffee & Tea Lover", href: "/our-products/coffee-tea-lover" },
  { name: "Professional Athlete", href: "/our-products/active-lifestyle" },
  { name: "Health-Conscious", href: "/our-products/health-conscious" },
  { name: "Family & Homemaker", href: "/our-products/family-homemaker" },
];

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="relative text-unblend-navy hover:text-unblend-blue font-medium transition-colors duration-300 ease-in-out group"
    onClick={onClick}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-unblend-blue transition-all duration-300 ease-in-out group-hover:w-full" />
  </Link>
);

export function Navbar() {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-md shadow-md">
      <div className="relative container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20 relative">
          <div className="absolute left-4 lg:hidden">
            <Button
              className="text-unblend-navy hover:text-unblend-blue"
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <img
                src="/unblend_logo.png"
                alt="UnBlend Logo"
                className="h-12 w-auto transition-opacity duration-300 ease-in-out"
              />
            </Link>
          </div>

          <div
            className={`hidden lg:flex items-center space-x-8 ${quicksand.variable} font-quicksand`}
          >
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="relative text-unblend-navy hover:text-unblend-blue font-medium transition-colors duration-300 ease-in-out group inline-flex items-center"
              >
                OUR PRODUCTS
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-screen max-w-screen-xl bg-white shadow-lg rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="grid grid-cols-4 gap-8 p-8">
                      <div className="col-span-3 grid grid-cols-3 gap-8">
                        {productCategories.map((category) => (
                          <div key={category.name}>
                            <h3 className="font-bold text-lg mb-2 text-unblend-navy">
                              {category.name}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={`/products/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-gray-600 hover:text-unblend-blue"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-unblend-navy">
                          Shop by Lifestyle
                        </h3>
                        <ul className="space-y-2">
                          {lifestyleCategories.map((category) => (
                            <li key={category.name}>
                              <Link
                                href={category.href}
                                className="text-gray-600 hover:text-unblend-blue"
                              >
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 text-center">
                      <Link
                        href="/products"
                        className="text-unblend-navy hover:text-unblend-blue font-medium"
                      >
                        View All Products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/how-we-do-it">HOW WE DO IT</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/recipes">RECIPES</NavLink>
          </div>

          <div
            className={`hidden lg:flex items-center space-x-8 ${quicksand.variable} font-quicksand`}
          >
            <NavLink href="/about">ABOUT US</NavLink>
            <NavLink href="/find-unblend">FIND UNBLEND</NavLink>
            <NavLink href="/quiz">TAKE THE QUIZ</NavLink>

            <Link href="/cart">
              <Button
                variant="ghost"
                className="relative text-unblend-navy hover:text-unblend-blue transition-colors duration-300 ease-in-out"
              >
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-unblend-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t overflow-hidden"
            >
              <div
                className={`flex flex-col items-center space-y-4 ${quicksand.variable} font-quicksand`}
              >
                <NavLink href="/products" onClick={() => setIsMenuOpen(false)}>
                  OUR PRODUCTS
                </NavLink>
                <NavLink
                  href="/how-we-do-it"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOW WE DO IT
                </NavLink>
                <NavLink href="/faq" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </NavLink>
                <NavLink href="/recipes" onClick={() => setIsMenuOpen(false)}>
                  RECIPES
                </NavLink>
                <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                  ABOUT US
                </NavLink>
                <NavLink
                  href="/find-unblend"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FIND UNBLEND
                </NavLink>
                <NavLink href="/quiz" onClick={() => setIsMenuOpen(false)}>
                  TAKE THE QUIZ
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
