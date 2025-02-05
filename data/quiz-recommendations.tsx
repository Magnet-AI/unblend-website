export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  features: {
    protein: number;
    fat: number;
    sugar: number;
    calcium: number;
    calories: number;
  };
  suitableFor: string[];
  dietaryInfo: string[];
}

export const products: Product[] = [
  {
    id: "unblend-chocolate-protein-shake",
    name: "Chocolate Protein Shake",
    description:
      "High protein shake with 24g protein, made only from natural ingredients.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-28-25%20at%2011.27%E2%80%AFAM-AbDaOD3MNDkKPuHDv26U9NqAAR4KPD.jpeg",
    price: "₹175",
    features: {
      protein: 24,
      fat: 3,
      sugar: 2,
      calcium: 300,
      calories: 120,
    },
    suitableFor: ["Fitness enthusiasts", "Athletes", "Health-conscious"],
    dietaryInfo: ["Low sugar", "High protein", "Low fat"],
  },
  {
    id: "standardized-milk",
    name: "Standardized Ultra-filtered Milk",
    description:
      "Perfectly balanced for everyday nutrition with essential nutrients in every glass.",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹175",
    features: {
      protein: 8,
      fat: 3,
      sugar: 5,
      calcium: 400,
      calories: 150,
    },
    suitableFor: ["Families", "Health-conscious", "Milk lovers"],
    dietaryInfo: ["Balanced nutrition", "Good source of calcium"],
  },
  {
    id: "toned-milk",
    name: "Toned Ultra-filtered Milk",
    description:
      "Light and nutritious, perfect for the health conscious lifestyle.",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹100",
    features: {
      protein: 6,
      fat: 2,
      sugar: 4,
      calcium: 350,
      calories: 100,
    },
    suitableFor: ["Health-conscious", "Weight watchers", "Fitness enthusiasts"],
    dietaryInfo: ["Low fat", "Reduced calories"],
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Ultra-filtered Milk",
    description:
      "Rich and creamy, straight from nature's best for indulgent taste.",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹100",
    features: {
      protein: 7,
      fat: 6,
      sugar: 5,
      calcium: 300,
      calories: 180,
    },
    suitableFor: ["Milk lovers", "Growing children", "Seniors"],
    dietaryInfo: ["Full fat", "Rich in nutrients"],
  },
];

export function getRecommendedProducts(
  answers: (string | string[])[]
): Product[] {
  const scoreProduct = (product: Product): number => {
    let score = 0;

    // Age group preferences
    const ageGroup = answers[1] as string;
    if (ageGroup === "Below 10" || ageGroup === "12-18") {
      score += product.features.calcium * 2;
    } else if (ageGroup === "40+") {
      score += product.features.calcium * 1.5;
    }

    // Lifestyle preferences
    const lifestyle = answers[2] as string[];
    if (
      lifestyle.includes("Fitness enthusiast") ||
      lifestyle.includes("Athlete")
    ) {
      score += product.features.protein * 2;
    }
    if (lifestyle.includes("Health-conscious")) {
      score +=
        (product.features.protein +
          (100 - product.features.sugar) +
          (100 - product.features.fat)) /
        3;
    }

    // Health symptoms
    const healthSymptoms = answers[3] as string[];
    if (healthSymptoms.includes("Diabetics")) {
      score += 100 - product.features.sugar * 2;
    }
    if (healthSymptoms.includes("Lactose intolerance")) {
      score -= 50; // Penalize dairy products for lactose intolerant individuals
    }
    if (healthSymptoms.includes("Bone or joint health")) {
      score += product.features.calcium * 1.5;
    }

    // Dairy dilemmas
    const dairyDilemmas = answers[4] as string[];
    if (dairyDilemmas.includes("Watching calories")) {
      score += 100 - product.features.calories;
    }
    if (dairyDilemmas.includes("Need more protein")) {
      score += product.features.protein * 2;
    }
    if (dairyDilemmas.includes("Want less sugar")) {
      score += 100 - product.features.sugar * 2;
    }

    // Adjust score based on suitability
    product.suitableFor.forEach((suitability) => {
      if (lifestyle.includes(suitability)) {
        score += 20;
      }
    });

    return score;
  };

  // Score and sort products
  const scoredProducts = products.map((product) => ({
    ...product,
    score: scoreProduct(product),
  }));

  const sortedProducts = scoredProducts.sort((a, b) => b.score - a.score);

  // Return top 3 products
  return sortedProducts.slice(0, 3);
}
