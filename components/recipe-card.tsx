import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    description: string;
    image: string;
    prepTime: string;
    servings: number;
  };
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {recipe.prepTime}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {recipe.servings} servings
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/recipes/${recipe.id}`} className="w-full">
          <Button className="w-full bg-unblend-navy hover:bg-unblend-navy/90 text-white">
            View Recipe
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
