import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Banana Chocolate Oat Protein Milkshake",
  description:
    "A delicious and nutritious protein shake combining the goodness of bananas, chocolate, and oats with UnBlend milk",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banana%20chochalte%20%20Oat%20Protein%20Milkshake%20in%20glass.jpg-NUjsWeZnuH3TBIQs00Loc4SKB8bcCv.jpeg",
  prepTime: "5 minutes",
  servings: 2,
  ingredients: [
    "2 cups UnBlend Protein Plus Milk",
    "2 ripe bananas",
    "1/2 cup rolled oats",
    "2 tablespoons cocoa powder",
    "1 tablespoon honey (optional)",
    "1/4 teaspoon vanilla extract",
    "1 cup ice cubes",
    "Dark chocolate pieces for garnish",
    "Sliced almonds for garnish",
  ],
  instructions: [
    "Add rolled oats to a blender and pulse until finely ground.",
    "Add UnBlend Protein Plus Milk, bananas, cocoa powder, honey (if using), and vanilla extract.",
    "Add ice cubes and blend until smooth and creamy.",
    "Taste and adjust sweetness if needed.",
    "Pour into glasses and garnish with dark chocolate pieces and sliced almonds.",
    "Serve immediately and enjoy your protein-packed shake!",
  ],
  tips: [
    "Use frozen bananas for an extra thick and creamy shake",
    "Pre-soak the oats for 10 minutes for a smoother texture",
    "Add a handful of spinach for extra nutrients (won't affect the taste)",
    "Use UnBlend Protein Plus Milk for maximum protein content",
  ],
  nutritionalInfo: {
    servingSize: "1 glass (400ml)",
    calories: "320",
    protein: "15g",
    carbohydrates: "45g",
    fat: "8g",
    fiber: "6g",
  },
  benefits: [
    "High in protein for muscle recovery",
    "Complex carbs from oats provide sustained energy",
    "Potassium from bananas supports muscle function",
    "Antioxidants from dark chocolate",
    "Calcium and vitamin D from UnBlend milk",
  ],
};

export default function BananaChocolateOatProteinMilkshakePage() {
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
              priority
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
            <h2 className="text-2xl font-bold text-unblend-navy mt-8 mb-4">
              Health Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
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
                  <p className="font-semibold text-unblend-navy">Fiber:</p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.fiber}
                  </p>
                </div>
              </div>
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
