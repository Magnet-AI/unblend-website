"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, Users, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const traditionalValues = [
  {
    title: "Pure Like Home",
    description:
      "Just like the fresh milk from your childhood, but made better with modern science - no additives, just pure goodness.",
    icon: Heart,
  },
  {
    title: "Family First",
    description:
      "From growing children to elderly parents, UnBlend caters to every family member's nutritional needs.",
    icon: Users,
  },
  {
    title: "Natural Goodness",
    description:
      "We preserve the traditional purity of milk while enhancing its natural nutrients - just like nature intended.",
    icon: Leaf,
  },
];

const modernBenefits = [
  {
    title: "Combating Protein Deficiency",
    description:
      "Higher protein content helps address the widespread protein deficiency in India, supporting overall health and development.",
    icon: Activity,
    stats: "12 grams protein per 200ml",
  },
  {
    title: "Authentic & Clean Ingredients",
    description:
      "Made with pure, high-quality milk and no artificial additives, preserving the authenticity of traditional dairy while meeting modern nutritional needs.",
    icon: Leaf,
    stats: "100% natural ingredients",
  },
  {
    title: "Ideal for Busy Lives",
    description:
      "Quick nutrition for your busy lifestyle - perfect in tea, coffee, or straight from the glass. Just the ready-to-drinkproduct you need when you are late.",
    icon: Clock,
    stats: "Convenient nutrition on-the-go",
  },
];

const milkComparisons = [
  {
    name: "UnBlend Ultra-filtered Milk",
    highlighted: true,
    protein: "12g per 200ml",
    sugar: "3.2g per 200ml",
    lactose: "No",
  },
  {
    name: "Regular Milk",
    highlighted: false,
    protein: "6g per 200ml",
    sugar: "8g per 200ml",
    lactose: "Yes",
  },
  {
    name: "Almond Milk",
    highlighted: false,
    protein: "1g per 200ml",
    sugar: "6g per 200ml",
    lactose: "No",
  },
];

export default function OurStoryPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-unblend-navy mb-6">
              The UnBlend Story
            </h1>
            <p
              className={`text-2xl mb-8 ${quicksand.variable} font-quicksand font-semibold bg-gradient-to-r from-unblend-blue via-unblend-navy to-purple-600 text-transparent bg-clip-text`}
            >
              Where Indian tradition meets modern nutrition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Traditional Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-unblend-navy mb-6">
                Rooted in Indian Values
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                In India, milk isn't just food - it's a blessing, a tradition,
                and a way of life. For generations, our families have valued
                pure, fresh milk for its wholesome goodness. At UnBlend, we
                honor this tradition while making it even better for today's
                needs.
              </p>
              <div className="space-y-6">
                {traditionalValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-unblend-blue/10 p-3 rounded-full">
                      <value.icon className="w-6 h-6 text-unblend-navy" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-unblend-navy">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20indian%20women%20standing%20in%20the%20milk%20factory%20production%20.jpg-5UNzzPiKtwWEgKg0H9Q7POGeJ39orC.jpeg"
                alt="Indian professional in modern dairy facility"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-unblend-navy text-center mb-12">
            Why UnBlend is Essential for Modern India
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modernBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="bg-unblend-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-unblend-navy" />
                </div>
                <h3 className="text-xl font-bold text-unblend-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-unblend-blue/5 p-3 rounded-lg text-unblend-navy font-semibold">
                  {benefit.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-unblend-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Understanding the True Value
            </h2>
            <p className="text-lg mb-8">
              Many Indians are now spending ₹2000-3000 on protein supplements
              monthly. UnBlend offers natural protein and calcium at a fraction
              of the cost, making it an economical choice for:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Daily Nutrition</h3>
                <ul className="space-y-2">
                  <li>✓ Morning tea/coffee</li>
                  <li>✓ Children's milk</li>
                  <li>✓ Cooking and baking</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Special Needs</h3>
                <ul className="space-y-2">
                  <li>✓ Fitness enthusiasts</li>
                  <li>✓ Growing teenagers</li>
                  <li>✓ Elderly care</li>
                </ul>
              </div>
            </div>
            <Link href="/products">
              <Button className="bg-white text-unblend-navy hover:bg-white/90">
                Explore Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
