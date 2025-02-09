import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Filter Coffee",
  description: "A strong and aromatic South Indian coffee served with milk",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o8g7bvc682k-5hsbVsrYctImwVMttXFexsp8KxaBlA.webp",
  prepTime: "10 minutes",
  servings: 2,
  ingredients: [
    "4 tablespoons finely ground coffee (preferably South Indian coffee blend)",
    "1 cup hot water",
    "1/2 cup UnBlend Full Cream Milk",
    "Sugar to taste (optional)",
  ],
  instructions: [
    "Add the ground coffee to a South Indian filter (or use a fine-mesh strainer lined with a coffee filter).",
    "Slowly pour hot water over the coffee grounds, allowing it to drip through. This process takes about 5-10 minutes.",
    "In a small saucepan, heat the UnBlend Full Cream Milk until it's hot but not boiling.",
    "In each serving cup, add 1/4 cup of the brewed coffee concentrate.",
    "Froth the hot milk using a handheld frother or by vigorously pouring it between two containers.",
    "Pour the frothed milk over the coffee concentrate in each cup.",
    "Add sugar to taste, if desired.",
    "Serve hot and enjoy your aromatic Filter Coffee!",
  ],
  tips: [
    "For an authentic experience, serve the coffee in a stainless steel tumbler with a 'dabara' (a wide-mouthed saucer).",
    "The coffee can be poured back and forth between the tumbler and dabara to cool it and mix it well.",
    "Adjust the ratio of coffee concentrate to milk according to your preference for a stronger or milder coffee.",
  ],
  nutritionalInfo: {
    calories: "50-70",
    protein: "2g",
    carbs: "6g",
    fiber: "0g",
  },
};

export default function FilterCoffeePage() {
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
