import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Rasmalai",
  description: "Soft cottage cheese dumplings in sweetened, flavored milk",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rasmalai.jpg-30dRaATtLk4PJd4KEeC5zDmThkpA0q.jpeg",
  prepTime: "45 minutes",
  servings: 6,
  ingredients: [
    "1 liter full-fat milk",
    "2 tablespoons lemon juice",
    "4 cups water",
    "1 cup sugar",
    "500 ml UnBlend Full Cream Milk",
    "1/4 cup condensed milk",
    "1/4 teaspoon cardamom powder",
    "A few saffron strands",
    "2 tablespoons chopped nuts (almonds, pistachios)",
  ],
  instructions: [
    "Boil the full-fat milk and add lemon juice to curdle it.",
    "Strain using a muslin cloth and rinse with cold water to remove the lemon taste.",
    "Squeeze out excess water and knead the paneer until smooth.",
    "Shape into small balls and flatten slightly.",
    "Boil water with sugar to make a light syrup, then add paneer balls and cook for 10 minutes.",
    "Heat UnBlend Full Cream Milk and condensed milk in a pan, stirring frequently.",
    "Add cardamom powder and saffron strands, then let it simmer until slightly thickened.",
    "Gently squeeze the cooked paneer dumplings and add them to the milk mixture.",
    "Let it soak for at least 2 hours before serving, garnished with chopped nuts.",
  ],
  tips: [
    "For a richer taste, use full-fat milk for both the paneer and the flavored milk.",
    "Soak the rasmalai in milk for a longer time to enhance the flavor.",
    "Serve chilled for the best taste.",
  ],
  nutritionalInfo: {
    calories: "180-200",
    protein: "6g",
    carbs: "25g",
    fiber: "0g",
  },
};

export default function RasmalaiPage() {
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
                  <p className="font-semibold text-unblend-navy">Carbs:</p>
                  <p className="text-gray-700">
                    {recipe.nutritionalInfo.carbs}
                  </p>
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
