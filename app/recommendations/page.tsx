"use client";

// Force Next.js to treat this page as dynamic
export const dynamic = "force-dynamic";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

// ---------------------
// Interface definitions
// ---------------------
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  nutritionInfo: {
    totalFat: string;
    saturatedFat: string;
    carbohydrates: string;
    sugar: string;
    protein: string;
  };
  suitableFor: string[];
}

// ------------------------------------
// Static product data (in `public` dir)
// ------------------------------------
const products: Product[] = [
  {
    id: "standardized-milk",
    name: "Standardized Milk",
    description:
      "Perfectly balanced for everyday nutrition with essential nutrients in every glass.",
    image: "/standardized_milk.png",
    nutritionInfo: {
      totalFat: "9",
      saturatedFat: "5",
      carbohydrates: "8",
      sugar: "9",
      protein: "12",
    },
    suitableFor: [
      "Daily nutrition",
      "Balanced diet",
      "Families",
      "Growing children",
    ],
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Milk",
    description:
      "Rich and creamy, straight from nature's best for indulgent taste.",
    image: "/full_cream_milk.png",
    nutritionInfo: {
      totalFat: "12",
      saturatedFat: "5",
      carbohydrates: "10",
      sugar: "9",
      protein: "12",
    },
    suitableFor: [
      "High-calorie needs",
      "Baking and cooking",
      "Weight gain",
      "Elderly nutrition",
    ],
  },
  {
    id: "toned-milk",
    name: "Toned Milk",
    description:
      "Light and nutritious, perfect for the health conscious lifestyle.",
    image: "/toned_milk.png",
    nutritionInfo: {
      totalFat: "6",
      saturatedFat: "5",
      carbohydrates: "8",
      sugar: "8",
      protein: "12",
    },
    suitableFor: [
      "Weight management",
      "Low-fat diet",
      "Calorie-conscious",
      "Mild lactose sensitivity",
    ],
  },
  {
    id: "chocolate-protein-milkshake",
    name: "Protein Shake",
    description:
      "Your everyday protein boost—24g of natural goodness when your diet needs a lift.",
    image: "/protein_shake.png",
    nutritionInfo: {
      totalFat: "5",
      saturatedFat: "3",
      carbohydrates: "6",
      sugar: "5",
      protein: "24",
    },
    suitableFor: [
      "Fitness enthusiasts",
      "Athletes",
      "High protein needs",
      "Muscle recovery",
    ],
  },
];

// -----------------------
// Helper function: scoring
// -----------------------
function calculateScore(answers: (string | string[])[]): {
  proteinScore: number;
  fatScore: number;
  sugarScore: number;
  isFitnessEnthusiast: boolean;
  isHealthConscious: boolean;
} {
  let proteinScore = 0;
  let fatScore = 0;
  let sugarScore = 0;
  let isFitnessEnthusiast = false;
  let isHealthConscious = false;

  answers.forEach((answer, index) => {
    switch (index) {
      case 1: // Age group
        if (answer === "18-24" || answer === "25-40") proteinScore += 2;
        if (answer === "40+") fatScore += 1;
        break;
      case 2: // Lifestyle
        if (Array.isArray(answer)) {
          if (answer.includes("Fitness enthusiast")) {
            proteinScore += 3;
            isFitnessEnthusiast = true;
          }
          if (answer.includes("Health-conscious")) {
            fatScore -= 1;
            sugarScore -= 1;
            isHealthConscious = true;
          }
          if (answer.includes("Milk lover")) fatScore += 1;
        }
        break;
      case 3: // Health symptoms
        if (Array.isArray(answer)) {
          if (answer.includes("Diabetics")) sugarScore -= 2;
          if (answer.includes("Lactose intolerance")) fatScore -= 1;
          if (answer.includes("Bone or joint health")) proteinScore += 1;
        }
        break;
      case 4: // Dairy dilemmas
        if (Array.isArray(answer)) {
          if (answer.includes("Need more protein")) proteinScore += 2;
          if (answer.includes("Want less sugar")) sugarScore -= 2;
          if (answer.includes("Watching calories")) fatScore -= 1;
        }
        break;
    }
  });

  return { proteinScore, fatScore, sugarScore, isFitnessEnthusiast, isHealthConscious };
}

// ----------------------------------------
// Helper function: get recommended products
// ----------------------------------------
function getRecommendedProducts(scores: {
  proteinScore: number;
  fatScore: number;
  sugarScore: number;
  isFitnessEnthusiast: boolean;
  isHealthConscious: boolean;
}): Product[] {
  const { proteinScore, fatScore, sugarScore, isFitnessEnthusiast, isHealthConscious } = scores;

  // Filter out the protein shake for the initial sorting
  const sortedMilkProducts = products
    .filter((p) => p.id !== "chocolate-protein-milkshake")
    .sort((a, b) => {
      const aScore =
        proteinScore * Number.parseInt(a.nutritionInfo.protein) +
        fatScore * Number.parseInt(a.nutritionInfo.totalFat) +
        sugarScore * Number.parseInt(a.nutritionInfo.sugar);

      const bScore =
        proteinScore * Number.parseInt(b.nutritionInfo.protein) +
        fatScore * Number.parseInt(b.nutritionInfo.totalFat) +
        sugarScore * Number.parseInt(b.nutritionInfo.sugar);

      return bScore - aScore; // Higher is better
    });

  // Take the top 2
  const recommendations = sortedMilkProducts.slice(0, 2);

  // Decide if we should add protein shake or the 3rd best milk
  if (isFitnessEnthusiast || isHealthConscious || proteinScore > 3) {
    // Add the protein shake as a recommendation
    const proteinShake = products.find((p) => p.id === "chocolate-protein-milkshake");
    if (proteinShake) {
      recommendations.push(proteinShake);
    }
  } else {
    // Otherwise, push the third best milk
    recommendations.push(sortedMilkProducts[2]);
  }

  return recommendations;
}

// --------------------------------------
// Helper function: personalized reasons
// --------------------------------------
function getPersonalizedReasons(product: Product, index: number): string[] {
  const reasons: string[] = [];

  if (product.id === "standardized-milk") {
    reasons.push("Balanced nutrition for your active lifestyle");
    reasons.push("Supports your daily calcium and protein needs");
    if (index === 0) {
      reasons.push("Best all-around choice based on your preferences");
    }
  } else if (product.id === "full-cream-milk") {
    reasons.push("Rich taste to satisfy your indulgent cravings");
    reasons.push("Higher calorie content to support your energy needs");
    if (index === 0) {
      reasons.push("Aligns with your preference for full-bodied dairy");
    }
  } else if (product.id === "toned-milk") {
    reasons.push("Lower fat content suits your health-conscious choices");
    reasons.push("Provides essential nutrients without excess calories");
    if (index === 0) {
      reasons.push("Matches your preference for lighter dairy options");
    }
  } else if (product.id === "chocolate-protein-milkshake") {
    reasons.push("High protein content to support your fitness goals");
    reasons.push("Convenient option for post-workout recovery");
    reasons.push("Satisfies your need for a nutritious and tasty snack");
  }

  return reasons;
}

// -----------------
// Main Page Component
// -----------------
export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const searchParams = useSearchParams();

  // Safely get the 'answers' param from the URL
  const answersParam = useMemo(() => searchParams.get("answers"), [searchParams]);

  // Parse and compute recommendations if answersParam exists
  useEffect(() => {
    if (!answersParam) {
      // No 'answers' param found in URL, so do nothing or show fallback
      return;
    }

    try {
      const decoded = decodeURIComponent(answersParam);
      const parsedAnswers = JSON.parse(decoded);
      const scores = calculateScore(parsedAnswers);
      const recommendedProducts = getRecommendedProducts(scores);
      setRecommendations(recommendedProducts);
    } catch (error) {
      console.error("Failed to parse 'answers' query param:", error);
      // Optionally set an error state or handle differently
    }
  }, [answersParam]);

  // -----------------
  // Conditional render
  // -----------------
  if (recommendations.length === 0) {
    // Fallback content when no recommendations are available
    return (
      <div className="min-h-screen bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600 py-24 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">No Recommendations Yet</h1>
          <p className="text-xl">
            Please complete the questionnaire or check your query parameter.
          </p>
        </div>
      </div>
    );
  }

  // If we have recommendations, show them
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-unblend-blue via-unblend-navy to-purple-600">
        <div className="py-32 px-4 md:px-8 max-w-7xl mx-auto">

          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold mb-3">
              Your Personalized Recommendations
            </h1>
            <p className="text-xl text-white/90">
              Based on your lifestyle and preferences, we recommend:
            </p>
          </motion.div>

          <div className="flex flex-col gap-12">
            {recommendations.map((product, index) => (
              <motion.div
                key={product.id}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative bg-white shadow-xl rounded-xl overflow-hidden md:flex hover:shadow-2xl transition-shadow">
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 scale-125"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>

                  {/* Text Content Section */}
                  <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <span className="uppercase tracking-wide text-xs font-semibold text-unblend-blue">
                        {index === 0
                          ? "Top Recommendation"
                          : `Recommendation ${index + 1}`}
                      </span>
                      <h2 className="mt-2 text-3xl font-bold text-unblend-navy leading-tight">
                        {product.name}
                      </h2>
                    </div>

                    <p className="text-gray-700 mb-5">{product.description}</p>

                    {/* Personalized Reasons */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-unblend-navy mb-2">
                        Why Ideal For You
                      </h3>
                      <ul className="space-y-1">
                        {getPersonalizedReasons(product, index).map(
                          (reason, idx) => (
                            <li key={idx} className="text-gray-600 flex gap-2">
                              <span>•</span>
                              <span>{reason}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <Button className="bg-gradient-to-r from-unblend-blue to-unblend-navy hover:from-unblend-blue/90 hover:to-unblend-navy/90 text-white font-semibold rounded-xl">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}