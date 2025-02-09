import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipe = {
  name: "Strawberry Pancakes",
  description: "Fluffy pancakes with fresh strawberries and UnBlend milk",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20create%20a%20%20pancake%20in%20a%20plate%20with%20the%20syrp.jpg-HORDWPhUGHM2Ip0qB6ZzRmOnlUVpYG.jpeg",
  prepTime: "20 minutes",
  servings: 4,
  ingredients: [
    "1 1/2 cups all-purpose flour",
    "3 1/2 teaspoons baking powder",
    "1/4 teaspoon salt",
    "1 tablespoon sugar",
    "1 1/4 cups UnBlend Full Cream Milk",
    "1 egg",
    "3 tablespoons melted butter",
    "1 teaspoon vanilla extract",
    "1 cup fresh strawberries, diced",
    "Extra strawberries for topping",
    "Maple syrup for serving",
  ],
  instructions: [
    "In a large bowl, whisk together the flour, baking powder, salt, and sugar.",
    "In another bowl, mix the UnBlend Full Cream Milk, egg, melted butter, and vanilla extract.",
    "Pour the wet ingredients into the dry ingredients and mix until just combined. Don't overmix; some small lumps are okay.",
    "Gently fold in the diced strawberries.",
    "Heat a non-stick pan or griddle over medium heat. Lightly grease with butter or oil if needed.",
    "For each pancake, pour about 1/4 cup of batter onto the pan.",
    "Cook until bubbles form on the surface (about 2-3 minutes), then flip and cook the other side until golden brown (about 1-2 minutes).",
    "Repeat with the remaining batter.",
    "Serve the pancakes warm, topped with fresh strawberries and maple syrup.",
  ],
  tips: [
    "For extra fluffy pancakes, let the batter rest for 5-10 minutes before cooking.",
    "If the batter is too thick, add a little more UnBlend milk to reach the desired consistency.",
    "You can substitute strawberries with other fresh berries or a mix of berries for variety.",
    "For a protein boost, use UnBlend Protein Plus Milk instead of Full Cream Milk.",
  ],
  nutritionalInfo: {
    servingSize: "2 pancakes",
    calories: "280",
    protein: "8g",
    carbohydrates: "42g",
    fat: "9g",
    fiber: "2g",
  },
};

export default function StrawberryPancakesPage() {
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
