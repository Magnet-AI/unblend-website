import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Protein Oat Bowl",
  description:
    "A nutritious and delicious chocolate protein oat bowl topped with fresh strawberries and nuts",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20make%20a%20blow%20with%20chocloate%20oats%20with%20diced%20strawberry,%20flax%20seed%20and%20nuts..jpg-oRZJ1QrRanT0jDlKE5AMUaIz9JUMV1.jpeg",
  prepTime: "15 minutes",
  servings: 1,
  ingredients: [
    "1 cup UnBlend Protein Plus Milk",
    "1/2 cup rolled oats",
    "1 scoop chocolate protein powder",
    "1 tablespoon cocoa powder",
    "1 tablespoon honey or maple syrup (optional)",
    "1 cup fresh strawberries, diced",
    "2 tablespoons mixed nuts (pecans, almonds, or walnuts)",
    "1 tablespoon flax seeds",
    "1 tablespoon chia seeds (optional)",
    "1/4 teaspoon vanilla extract",
    "Pinch of salt",
  ],
  instructions: [
    "In a medium saucepan, combine UnBlend Protein Plus Milk, rolled oats, and a pinch of salt. Bring to a simmer over medium heat.",
    "Reduce heat to low and cook for 5-7 minutes, stirring occasionally, until oats are tender and mixture has thickened.",
    "Remove from heat and stir in chocolate protein powder, cocoa powder, vanilla extract, and sweetener if using.",
    "Transfer to a serving bowl and let cool slightly.",
    "Top with diced strawberries, mixed nuts, and flax seeds.",
    "For extra nutrition, sprinkle chia seeds on top.",
    "Serve immediately while warm, or refrigerate and enjoy cold.",
  ],
  tips: [
    "Use UnBlend Protein Plus Milk for extra protein content",
    "Prepare oats the night before and reheat in the morning for a quick breakfast",
    "Customize toppings with seasonal fruits",
    "Add a banana for extra creaminess",
    "Store leftover portions in an airtight container for up to 2 days",
  ],
  nutritionalInfo: {
    calories: "450-500",
    protein: "25-30g",
    carbs: "55g",
    fiber: "12g",
  },
};

export default function ProteinOatBowlPage() {
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
                {recipe.servings} serving
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
