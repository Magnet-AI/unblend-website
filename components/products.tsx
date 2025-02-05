import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: "standardized-milk",
    name: "Standardized Ultra-filtered Milk",
    description: "Perfectly balanced for everyday nutrition",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹175",
    features: [
      "Ultra-filtered",
      "More Protein",
      "Less Sugar",
      "Natural Ingredients",
    ],
    bestUse: "Perfect for daily nutrition and active lifestyles",
  },
  {
    id: "unblend-chocolate-protein-shake",
    name: "UnBlend Chocolate Protein Shake",
    description:
      "High protein shake with 24g protein, made only from natural ingredients",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-28-25%20at%2011.27%E2%80%AFAM-AbDaOD3MNDkKPuHDv26U9NqAAR4KPD.jpeg",
    price: "₹175",
    features: ["24g Protein", "Natural Ingredients", "Rich Chocolate Flavor"],
    bestUse: "For fitness enthusiasts and active lifestyles",
  },
  {
    id: "toned-milk",
    name: "Toned Ultra-filtered Milk",
    description: "Light and nutritious, for the health conscious",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹100",
    features: [
      "Ultra-filtered",
      "More Protein",
      "Low Fat",
      "High Calcium",
      "Vitamin D Fortified",
    ],
    bestUse: "For weight management and balanced nutrition",
  },
  {
    id: "full-cream-milk",
    name: "Full Cream Ultra-filtered Milk",
    description: "Rich and creamy, straight from nature's best",
    image: "/placeholder.svg?height=300&width=300",
    price: "₹100",
    features: [
      "Ultra-filtered",
      "High Sugar",
      "High Fat Content",
      "Rich in Vitamins",
      "Creamy Texture",
    ],
    bestUse: "For baking, cooking, and indulgent beverages",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-unblend-navy">
            UnBlend Products
          </h2>
          <p className="text-gray-600 mt-4">
            Discover our range of premium ultra-filtered dairy products and
            protein shakes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-shadow bg-unblend-blue/5 overflow-hidden"
            >
              <div className="relative h-64 bg-unblend-blue/10">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-bold text-unblend-navy">
                  {product.name}
                </CardTitle>
                <CardDescription className="mb-4 text-gray-600">
                  {product.description}
                </CardDescription>
                {product.features && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs font-medium bg-unblend-blue/20 text-unblend-navy rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
                {product.bestUse && (
                  <div className="mb-4">
                    <span className="font-semibold text-unblend-navy">
                      Best Use:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {product.bestUse}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-unblend-navy">
                    {product.price}
                  </span>
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="sm"
                      className="bg-unblend-navy hover:bg-unblend-navy/90 text-white"
                    >
                      View Product
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
