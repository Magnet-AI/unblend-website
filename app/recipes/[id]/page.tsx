import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Clock, Users } from "lucide-react";

const recipes = {
  "mango-lassi": {
    name: "Mango Lassi",
    description: "A refreshing yogurt-based drink with sweet mango pulp",
    image: "/placeholder.svg?height=400&width=600&text=Mango+Lassi",
    prepTime: "5 minutes",
    servings: 2,
    ingredients: [
      "1 cup ripe mango, peeled and chopped",
      "1 cup UnBlend Yogurt",
      "1/2 cup UnBlend Milk",
      "2 tablespoons sugar (adjust to taste)",
      "A pinch of cardamom powder",
      "Ice cubes",
    ],
    instructions: [
      "Add the chopped mango, yogurt, milk, sugar, and cardamom powder to a blender.",
      "Blend until smooth and creamy.",
      "Taste and adjust sweetness if needed.",
      "Add ice cubes and blend again until frothy.",
      "Pour into glasses and serve chilled.",
      "Optionally, garnish with a sprinkle of cardamom powder or a few mango pieces.",
    ],
  },
};

export default function RecipeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const recipe = recipes[params.id as keyof typeof recipes];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

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
