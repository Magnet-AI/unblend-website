import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const beverages = [
  {
    title: "Coffee",
    description: "Experience richer flavor and creamier texture in every sip",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-AxGrnQhfTzYkF25hXmG3vwXhgyQVWA.png",
    benefits: [
      "More Protein, Less Sugar – Supports a balanced, high-energy lifestyle",
      "Creamier, Smooth Texture – Elevates your coffee with a naturally rich mouthfeel",
      "Better Froth & Stability – Ideal for lattes, cappuccinos, and barista-quality drinks",
    ],
  },
  {
    title: "Tea",
    description: "Brings out the natural richness of tea leaves",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milk%20chai%20in%20the%20glass.jpg-x0xwqT5H16SjKWszqY2R0HBEtP7OD6.jpeg",
    benefits: [
      "Higher Protein, Lower Sugar – A smarter, healthier way to enjoy your chai",
      "Enhanced Flavor Absorption – Brings out the natural richness of tea leaves",
      "Perfect Creaminess – Achieves the ideal balance of smoothness and taste",
    ],
  },
  {
    title: "Cold Coffee",
    description: "Indulge in a protein-packed, less-sugar cold brew",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cold%20coffee%20with%20milk%20.jpg-t5Or8Ckk49xI49qI03fcMYKuXqHjSw.jpeg",
    benefits: [
      "Protein-Packed, Yet Light – Keeps you fueled without excess sugar",
      "Less Sugar, Same Sweetness – No compromise on taste",
      "Indulgent & Velvety – A smooth, café-style cold coffee every time",
    ],
  },
];

export function DailyRituals() {
  return (
    <section className="py-24 bg-gradient-to-br from-unblend-blue/5 via-white to-unblend-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mb-4">
            Elevate Your Daily Rituals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how UnBlend transforms your favorite everyday drinks into
            moments of pure delight and nourishment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beverages.map((beverage, index) => (
            <motion.div
              key={beverage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={beverage.image || "/placeholder.svg"}
                  alt={beverage.title}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E1B4B] mb-3">
                  {beverage.title}
                </h3>
                <p className="text-gray-600 mb-6">{beverage.description}</p>
                <ul className="space-y-4">
                  {beverage.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#7CD5F5] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-tight">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
