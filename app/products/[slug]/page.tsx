import { notFound } from "next/navigation";
import Image from "next/image";
import { AddToCartButton } from "@/components/add-to-cart-button";
import Link from "next/link";

// This would typically come from a database or API
const products = [
  {
    slug: "standardized-milk",
    name: "Standardized Milk",
    description:
      "Perfectly balanced for everyday nutrition. Our standardized milk provides essential nutrients in every glass.",
    longDescription:
      "UnBlend's Standardized Milk is the perfect balance of nutrition and taste. Each serving is packed with essential vitamins and minerals, making it an ideal choice for growing children and adults alike. Our careful standardization process ensures consistent quality and nutritional value in every bottle.",
    price: "₹175",
    image: "/placeholder.svg?height=400&width=400",
    features: ["Balanced Nutrition", "Creamy Texture", "Versatile Use"],
    nutritionFacts: {
      servingSize: "250ml",
      calories: 120,
      protein: "8g",
      carbs: "12g",
      fat: "4g",
    },
  },
  {
    slug: "unblend-chocolate-protein-milkshake",
    name: "UnBlend Chocolate Protein Shake",
    description:
      "High protein shake with 24g protein, made only from natural ingredients.",
    longDescription:
      "Indulge in the rich, chocolatey goodness of UnBlend's Chocolate Protein Shake while fueling your body with 24g of high-quality protein. Perfect for post-workout recovery or as a nutritious meal replacement, this shake is crafted with natural ingredients to support your active lifestyle without compromising on taste.",
    price: "₹175",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%201-28-25%20at%2011.27%E2%80%AFAM-AbDaOD3MNDkKPuHDv26U9NqAAR4KPD.jpeg",
    features: ["24g Protein", "Natural Ingredients", "Rich Chocolate Flavor"],
    nutritionFacts: {
      servingSize: "250ml",
      calories: 150,
      protein: "24g",
      carbs: "12g",
      fat: "3g",
    },
  },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link href="/products" className="hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>&gt;</li>
              <li className="font-medium text-gray-900">{product.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-gilroy font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-purple-600">
                {product.price}
              </p>
              <p className="text-gray-600">{product.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <AddToCartButton
                product={{
                  id: product.slug,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                }}
              />
              <div className="mt-8">
                <h2 className="text-2xl font-gilroy font-bold text-gray-900 mb-4">
                  Nutrition Facts
                </h2>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Serving Size</div>
                    <div className="font-semibold">
                      {product.nutritionFacts.servingSize}
                    </div>
                    <div className="text-gray-600">Calories</div>
                    <div className="font-semibold">
                      {product.nutritionFacts.calories}
                    </div>
                    <div className="text-gray-600">Protein</div>
                    <div className="font-semibold">
                      {product.nutritionFacts.protein}
                    </div>
                    <div className="text-gray-600">Carbohydrates</div>
                    <div className="font-semibold">
                      {product.nutritionFacts.carbs}
                    </div>
                    <div className="text-gray-600">Fat</div>
                    <div className="font-semibold">
                      {product.nutritionFacts.fat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
