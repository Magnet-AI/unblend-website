import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Homemade Dahi (Indian Yogurt)",
  description:
    "Creamy and probiotic-rich Indian yogurt made with UnBlend Ultra-Filtered milk",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dahi%20%20Indian%20Yogurt.jpg-66qa4CPpbPnJd3EX7KNmRbvUhkUONj.jpeg",
  prepTime: "10 minutes (plus 6-8 hours fermentation)",
  servings: 4,
  ingredients: [
    "4 cups UnBlend Standardized Milk",
    "2 tablespoons plain yogurt with live cultures (as starter)",
  ],
  instructions: [
    "In a heavy-bottomed pan, bring the UnBlend Standardized Milk to a boil, stirring occasionally to prevent scorching.",
    "Remove from heat and let it cool down to lukewarm temperature (about 110°F or 43°C). You should be able to comfortably hold your finger in it for 5 seconds.",
    "In a small bowl, whisk the yogurt starter until smooth.",
    "Add a ladleful of the warm milk to the yogurt starter and mix well. This tempers the starter.",
    "Pour this mixture back into the pot of milk and stir gently to distribute the cultures evenly.",
    "Transfer the milk to a clean, dry container (preferably earthenware or glass).",
    "Cover with a lid and wrap the container in a thick towel to maintain warmth.",
    "Place in a warm, draft-free spot for 6-8 hours or overnight. An oven with just the light on works well.",
    "After the fermentation period, check if the yogurt has set. It should be thick and creamy.",
    "Refrigerate for at least 2 hours before serving to allow it to set further and develop flavor.",
  ],
  tips: [
    "Using UnBlend Standardized Milk results in a protein-rich dahi with 12g of protein per 200ml",
    "UnBlend milk is lactose-free, making this dahi suitable for many lactose-intolerant individuals",
    "For a thicker dahi, use UnBlend Full-Cream Milk",
    "Ensure all utensils are clean to prevent unwanted bacterial growth",
    "Don't disturb the dahi during the fermentation process for the best texture",
    "Save a few tablespoons of your homemade dahi to use as a starter for your next batch",
  ],
  nutritionalInfo: {
    servingSize: "1 cup (200ml)",
    calories: "120",
    protein: "12g",
    carbohydrates: "10g",
    fat: "4g",
    sugar: "6g",
  },
  unblendBenefits: [
    "High in protein: 12g per 200ml of UnBlend milk",
    "Low in sugar: Only 3.2g of sugar per 200ml of UnBlend milk",
    "Lactose-free: Suitable for many lactose-intolerant individuals",
    "Creamy texture without added thickeners",
    "Consistent quality and taste in every batch",
    "Rich in probiotics for gut health",
  ],
};

export default function DahiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20 overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-unblend-navy mb-8">
          {recipe.name}
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {recipe.description}
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between text-lg text-gray-600 mb-8">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                {recipe.prepTime}
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                {recipe.servings} servings
              </div>
            </div>
            <h2 className="text-2xl font-bold text-unblend-navy mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside mb-8 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-unblend-navy mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">
                  {instruction}
                </li>
              ))}
            </ol>
            <h2 className="text-2xl font-bold text-unblend-navy mt-8 mb-4">
              Tips
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">
                  {tip}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-unblend-blue/10 rounded-lg">
              <h2 className="text-xl font-bold text-unblend-navy mb-4">
                Nutritional Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(recipe.nutritionalInfo).map(([key, value]) => (
                  <div key={key}>
                    <p className="font-semibold text-unblend-navy">{key}:</p>
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-6 bg-unblend-navy/10 rounded-lg">
              <h2 className="text-xl font-bold text-unblend-navy mb-4">
                UnBlend Milk Benefits
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.unblendBenefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/recipes">
                <Button className="bg-unblend-navy hover:bg-unblend-navy/90 text-white">
                  Back to Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
