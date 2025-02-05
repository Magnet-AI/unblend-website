import { Inter, Quicksand } from "next/font/google"
import { Bodoni_Moda } from "next/font/google"
import type React from "react"
import { CartProvider } from "@/context/cart-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} ${bodoni.variable} font-sans bg-white`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

