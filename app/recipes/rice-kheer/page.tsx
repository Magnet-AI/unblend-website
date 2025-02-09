import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Rice Kheer",
  description: "A creamy rice pudding flavored with cardamom and nuts",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rice%20Kheer-p1w4hGVcTKONbvZ0il4aZMJAwtdH2f.jpeg",
  prepTime: "30 minutes",
  servings: 4,
  ingredients: [
    "1/2 cup basmati rice",
    "4 cups UnBlend Full Cream Milk",
    "1/4 cup stevia or sugar substitute (adjust to taste)",
    "1/4 tsp cardamom powder",
    "2 tbsp chopped nuts (almonds, pistachios)",
    "1 tbsp raisins",
    "1 tbsp ghee",
  ],
  instructions: [
    "Wash the rice and soak it in water for 30 minutes. Drain and set aside.",
    "In a heavy-bottomed pan, bring the UnBlend Full Cream Milk to a boil.",
    "Add the drained rice and simmer on low heat, stirring occasionally.",
    "Cook until the rice is soft and the milk has reduced by half (about 20-25 minutes).",
    "Add sugar and cardamom powder. Mix well and cook for another 5 minutes.",
    "In a small pan, heat ghee and fry the nuts and raisins until golden.",
    "Add the fried nuts and raisins to the kheer and mix gently.",
    "Serve hot or chilled, garnished with additional chopped nuts if desired.",
  ],
  tips: [
    "Using UnBlend Full Cream Milk makes the kheer extra creamy and rich, with 12g of protein per 200ml",
    "UnBlend milk is lactose-free, making this kheer suitable for lactose-intolerant individuals",
    "With only 3.2g of sugar per 200ml of UnBlend milk, this kheer is lower in sugar than traditional recipes",
    "For a lighter version, use UnBlend Toned Milk",
    "Add a pinch of saffron for extra flavor and aroma",
  ],
  nutritionalInfo: {
    servingSize: "1 bowl (200ml)",
    calories: "220",
    protein: "12g",
    carbohydrates: "30g",
    fat: "8g",
    sugar: "10g",
  },
  unblendBenefits: [
    "High in protein: 12g per 200ml of UnBlend milk",
    "Low in sugar: Only 3.2g of sugar per 200ml of UnBlend milk",
    "Lactose-free: Suitable for lactose-intolerant individuals",
    "Creamy texture without added thickeners",
    "Consistent quality and taste in every batch",
  ],
};

export default function RiceKheerPage() {
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
