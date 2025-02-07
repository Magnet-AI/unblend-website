import { Inter, Quicksand } from "next/font/google";
import type React from "react";
import { CartProvider } from "@/context/cart-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "UnBlend: Innovating milk for better quality, taste, & nutrition.",
  description: "Find your perfect Blend!",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Your tab description goes here." />
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Your tab description goes here."
        />
        <meta property="og:image" content="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${quicksand.variable} font-sans bg-white`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
