import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Mango Lassi",
  description: "A refreshing yogurt-based drink with sweet mango pulp",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango%20lassi.jpg-vNjQwJn7H2ycWPq9oSviSsWJjvp0GY.jpeg",
  prepTime: "5 minutes",
  servings: 2,
  ingredients: [
    "1 cup ripe mango, peeled and chopped",
    "1 cup UnBlend Standardized Milk",
    "1/2 cup UnBlend Yogurt (made from UnBlend Milk)",
    "2 tablespoons honey or stevia (adjust to taste)",
    "A pinch of cardamom powder",
    "Ice cubes",
  ],
  instructions: [
    "Add the chopped mango, UnBlend Yogurt, UnBlend Milk, sugar, and cardamom powder to a blender.",
    "Blend until smooth and creamy.",
    "Taste and adjust sweetness if needed.",
    "Add ice cubes and blend again until frothy.",
    "Pour into glasses and serve chilled.",
    "Optionally, garnish with a sprinkle of cardamom powder or a few mango pieces.",
  ],
  tips: [
    "Use UnBlend Standardized Milk for a protein-rich lassi with 12g of protein per 200ml",
    "UnBlend milk is lactose-free, making this lassi suitable for lactose-intolerant individuals",
    "With only 3.2g of sugar per 200ml of UnBlend milk, this lassi is lower in sugar than traditional recipes",
    "For a creamier texture, use UnBlend Full-Cream Milk",
    "For a lighter version, use UnBlend Toned Milk",
  ],
  nutritionalInfo: {
    servingSize: "1 glass (250ml)",
    calories: "160",
    protein: "10g",
    carbohydrates: "25g",
    fat: "3g",
    sugar: "20g",
  },
  unblendBenefits: [
    "High in protein: 12g per 200ml of UnBlend milk",
    "Low in sugar: Only 3.2g of sugar per 200ml of UnBlend milk",
    "Lactose-free: Suitable for lactose-intolerant individuals",
    "Creamy texture without added fats",
    "Consistent quality and taste in every batch",
  ],
};

export default function MangoLassiPage() {
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
                <div>
                  <p className="font-semibold text-unblend-navy">
                    Serving Size:
                  </p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.servingSize}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-unblend-navy">Calories:</p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.calories}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-unblend-navy">Protein:</p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.protein}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-unblend-navy">
                    Carbohydrates:
                  </p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.carbohydrates}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-unblend-navy">Fat:</p>
                  <p className="text-gray-700">{recipe.nutritionalInfo.fat}</p>
                </div>
                <div>
                  <p className="font-semibold text-unblend-navy">Sugar:</p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.sugar}
                  </p>
                </div>
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
