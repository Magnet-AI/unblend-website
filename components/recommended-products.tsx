import Image from "next/image"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: string
  image: string
  protein?: string
  features: string[]
}

interface RecommendedProductsProps {
  products: Product[]
}

export function RecommendedProducts({ products }: RecommendedProductsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-unblend-blue mb-4">{product.price}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.map((feature) => (
                <Badge key={feature} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
            <p className="text-gray-600 mb-4">{product.longDescription}</p>
            <AddToCartButton
              product={{ id: product.id, name: product.name, price: product.price, image: product.image }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

