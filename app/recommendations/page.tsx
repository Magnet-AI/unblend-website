"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Product, getRecommendedProducts } from "@/data/quiz-recommendations";
import { Navbar } from "@/components/navbar";
import { ShoppingCart, Heart } from "lucide-react";

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    if (answersParam) {
      try {
        const parsedAnswers = JSON.parse(decodeURIComponent(answersParam));
        const recommendedProducts = getRecommendedProducts(parsedAnswers);
        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error("Error parsing answers:", error);
        setRecommendations([]);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-200 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] bg-clip-text text-transparent mb-4">
            Your Perfect UnBlend
          </h1>
          <p className="text-xl text-gray-600">
            Based on your answers, we've crafted these personalized
            recommendations just for you:
          </p>
        </motion.div>

        {recommendations.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-[#1E3A8A] mb-2">
                        Key Features:
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(product.features).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="bg-gray-100 rounded-lg p-2 text-center transform transition-transform duration-300 hover:scale-105"
                            >
                              <span className="text-xs font-medium text-gray-600">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </span>
                              <p className="text-sm font-bold text-[#1E3A8A]">
                                {value}
                                {key === "calories" ? "" : "g"}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-[#1E3A8A] mb-2">
                        Suitable for:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.suitableFor.map((item, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors duration-300 hover:bg-blue-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <p className="text-2xl font-bold text-[#1E3A8A]">
                        {product.price}
                      </p>
                      {/* <div className="flex space-x-2">
                        <Button className="bg-[#1E3A8A] hover:bg-[#60A5FA] text-white transition-colors duration-300">
                          <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-300"
                        >
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl">
            No recommendations found. Please try the quiz again.
          </p>
        )}

        <motion.div
          className="mt-12 text-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <Button
              variant="outline"
              className="bg-white text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-300"
            >
              Back to Home
            </Button>
          </Link>
          <Link href="/quiz">
            <Button
              variant="outline"
              className="bg-white text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors duration-300"
            >
              Retake Quiz
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
