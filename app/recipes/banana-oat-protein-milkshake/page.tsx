import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";

const recipe = {
  name: "Banana Oat Protein Milkshake",
  description:
    "A nutritious and delicious shake perfect for post-workout recovery",
  image:
    "/placeholder.svg?height=400&width=600&text=Banana+Oat+Protein+Milkshake",
  prepTime: "5 minutes",
  servings: 2,
  ingredients: [
    "2 ripe bananas",
    "1 cup UnBlend Protein Plus Milk",
    "1/2 cup rolled oats",
    "1 tablespoon honey (optional)",
    "1/4 teaspoon cinnamon",
    "1 cup ice cubes",
    "2 tablespoons peanut butter (optional)",
  ],
  instructions: [
    "Peel and slice the bananas, then add them to a blender.",
    "Add the UnBlend Protein Plus Milk, rolled oats, honey (if using), cinnamon, and ice cubes to the blender.",
    "If using, add the peanut butter for extra protein and flavor.",
    "Blend on high speed until smooth and creamy, about 30-45 seconds.",
    "Taste and adjust sweetness if needed by adding more honey.",
    "Pour into glasses and serve immediately.",
    "Optionally, sprinkle some extra cinnamon or oats on top for garnish.",
  ],
};

export default function BananaOatProteinMilkshakePage() {
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
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-unblend-navy mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
