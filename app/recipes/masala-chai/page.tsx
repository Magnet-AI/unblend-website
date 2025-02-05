import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Masala Chai",
  description:
    "A warming blend of aromatic spices and UnBlend milk that creates the perfect cup of Indian spiced tea",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20make%20masala%20chai%20in%20200%20ml%20cup%20.jpg-MEVTvPg645qM7QHzhRM0Yqhiw9syjL.jpeg",
  prepTime: "10 minutes",
  servings: 2,
  ingredients: [
    "2 cups water",
    "1 cup UnBlend Standardized Milk",
    "2 tablespoons loose black tea leaves",
    "4-5 cardamom pods, crushed",
    "1-inch piece of ginger, crushed",
    "2-3 cloves",
    "1 small cinnamon stick",
    "2-3 black peppercorns",
    "Stevia or sugar substitute to taste",
  ],
  instructions: [
    "In a saucepan, bring water to a boil with crushed ginger, cardamom, cloves, cinnamon, and peppercorns.",
    "Once boiling, add tea leaves and reduce heat to medium-low. Simmer for 2-3 minutes.",
    "Add UnBlend Standardized Milk and stevia or sugar substitute. Bring the mixture back to a gentle simmer.",
    "Continue to simmer for 2-3 minutes until the chai reaches a rich, golden-brown color.",
    "Strain into cups and serve hot.",
  ],
  tips: [
    "Use UnBlend Standardized Milk for a protein-rich chai with 12g of protein per 200ml",
    "UnBlend milk is lactose-free, making this chai suitable for lactose-intolerant individuals",
    "With only 3.2g of sugar per 200ml of UnBlend milk, this chai is lower in sugar than traditional recipes",
    "For a creamier texture, use UnBlend Full-Cream Milk",
    "Adjust the ratio of water to milk according to your preference",
  ],
  nutritionalInfo: {
    servingSize: "1 cup (200ml)",
    calories: "80",
    protein: "6g",
    carbohydrates: "10g",
    fat: "3g",
    sugar: "5g",
  },
  unblendBenefits: [
    "High in protein: 12g per 200ml of UnBlend milk",
    "Low in sugar: Only 3.2g of sugar per 200ml of UnBlend milk",
    "Lactose-free: Suitable for lactose-intolerant individuals",
    "Creamy texture without added fats",
    "Consistent quality and taste in every batch",
  ],
};

export default function MasalaChaiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20">
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
