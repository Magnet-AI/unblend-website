"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  FaBuilding,
  FaLandmark,
  FaCity,
  FaPagelines,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

const cities = [
  {
    name: "Bangalore",
    icon: <FaBolt className="w-12 h-12 text-blue-500" />,
  },
  {
    name: "Chennai",
    icon: <FaPagelines className="w-12 h-12 text-green-600" />,
  },
  {
    name: "Delhi",
    icon: <FaLandmark className="w-12 h-12 text-red-500" />,
  },
  {
    name: "Hyderabad",
    icon: <FaBuilding className="w-12 h-12 text-purple-500" />,
  },
  {
    name: "Mumbai",
    icon: <FaCity className="w-12 h-12 text-yellow-500" />,
  },
  {
    name: "Rest of India",
    icon: <FaGlobe className="w-12 h-12 text-gray-500" />,
  },
];

export function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="sm:max-w-[700px] p-0 overflow-hidden shadow-xl border-none"
        style={{ borderRadius: "16px" }}
      >
        <div className="bg-gradient-to-tr from-purple-600 via-blue-700 to-blue-500 p-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold">Discover Your Perfect Blend</h2>
            <p className="text-xl">
              Don't Settle for Generic Milk—Find What's Right for You!
            </p>
          </motion.div>
        </div>

        <div className="p-8 bg-white">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-center mb-8 text-unblend-navy tracking-wide"
          >
            Select your city to start your UnBlend journey
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCity(city.name)}
                style={{ borderRadius: "16px" }}
                className={`flex flex-col items-center gap-3 cursor-pointer group p-4 transition-all duration-300 ease-in-out outline-none focus:outline-none ${
                  selectedCity === city.name
                    ? "bg-unblend-navy text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedCity === city.name
                      ? "bg-white text-unblend-navy"
                      : "bg-gray-100 group-hover:bg-white group-hover:shadow-lg"
                  }`}
                >
                  {city.icon}
                </div>
                <span
                  className={`font-semibold text-lg text-center ${
                    selectedCity === city.name ? "text-white" : "text-gray-900"
                  }`}
                >
                  {city.name}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: selectedCity ? 1.05 : 1 }}
            whileTap={{ scale: selectedCity ? 0.95 : 1 }}
            onClick={() => {
              if (selectedCity) {
                setIsOpen(false);
                router.push("/quiz");
              }
            }}
            disabled={!selectedCity}
            className={`w-1/2 py-2 mt-8 text-xl font-semibold rounded-full transition-all transform shadow-lg mx-auto flex justify-center ${
              selectedCity
                ? "bg-unblend-navy text-white hover:bg-unblend-navy/90 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Take Quiz
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
