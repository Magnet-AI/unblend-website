"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: string
    image: string
  }
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white font-gilroy text-lg py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {isAdding ? "Added!" : "Add to Cart"}
    </Button>
  )
}

