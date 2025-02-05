import { motion } from "framer-motion";
import {
  Leaf,
  Dumbbell,
  Shield,
  Sprout,
  Droplet,
  Activity,
  Heart,
  Sun,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "High Protein",
    description:
      "Boost your protein intake with our nutrient-rich ultra-filtered milk",
    stats: "12g protein per 200ml",
    icons: [
      (props) => <Dumbbell {...props} />,
      (props) => <Activity {...props} />,
    ],
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/protein_shake_milk-4K9D3WpUGHM2Ip0qB6ZzRmOnlUVpYG.jpeg",
  },
  {
    title: "Lactose Free",
    description: "Enjoy dairy without discomfort—easy to digest and delicious",
    stats: "Gentle on digestion",
    icons: [(props) => <Droplet {...props} />, (props) => <Leaf {...props} />],
    color: "text-red-600",
    bgColor: "bg-gradient-to-br from-red-50 to-red-100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milk_pour_white-LJKfHIuByU0CTupTMpwOvvxlAPcmzd.jpeg",
  },
  {
    title: "Better Taste",
    description: "Experience richer flavor and creamier texture in every sip",
    stats: "Ultra-filtered for purity",
    icons: [(props) => <Heart {...props} />, (props) => <Sun {...props} />],
    color: "text-amber-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milk_glass_pour-HORDWPhUGHM2Ip0qB6ZzRmOnlUVpYG.jpeg",
  },
  {
    title: "100% Natural",
    description: "No artificial additives—just pure, wholesome ingredients",
    stats: "Only natural ingredients",
    icons: [(props) => <Sprout {...props} />, (props) => <Shield {...props} />],
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/farm_fresh_milk-MEVTvPg645qM7QHzhRM0Yqhiw9syjL.jpeg",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-sky-100/50 to-sky-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-unblend-navy mb-6">
            Why Choose UnBlend?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the ultra-filtered difference in every sip. Discover how
            UnBlend transforms your daily dairy into a powerhouse of nutrition
            and taste.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-gray-50/80" />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-16 h-16">
                      {feature.icons.map((Icon, idx) => (
                        <div
                          key={idx}
                          className={`absolute inset-0 rounded-2xl ${
                            feature.bgColor
                          } flex items-center justify-center transition-opacity duration-300 ${
                            idx === 0
                              ? "group-hover:opacity-0"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <Icon className={`w-8 h-8 ${feature.color}`} />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-3xl font-bold mb-2 ${feature.color}`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-4">
                        {feature.description}
                      </p>
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${feature.bgColor} ${feature.color}`}
                      >
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300"
                  style={{ color: feature.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
