import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Fueling Athletic Dreams Naturally",
    description: "Sivanadian's quest for affordable, natural protein sources",
    content: `Sivanadian Alagappan, a 22-year-old aspiring endurance athlete from Coimbatore, faces a common athlete's dilemma: meeting high protein requirements without breaking the bank. "Protein supplements are draining my budget, and I worry about long-term effects," he shares. A high-protein milk variant could transform his nutrition strategy. "UnBlend milk gives me 12g of protein per glass, which would be almost double the regular milk, game-changer for me as I am using milk in my day diet."`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8176-24CpSyqTm0oKMO9b6JiJpF2PDKAp1l.jpeg",
  },
  {
    title: "Balancing Nutrition in a Busy Family Life",
    description:
      "The Sharma family's potential solution for convenient, healthy nutrition",
    content: `The Sharma family from Mumbai - Amit (42), Priya (39), and their three children - struggle to provide nutritious meals amidst their hectic schedules. "With our busy lives, we often resort to convenient but unhealthy options," Priya admits. Their main concern is excess sugar in their children's diet. A low-sugar, high-protein milk could make a better balance to their current needs. "This milk could become our family's secret weapon," Amit says. "It could be vital for the kids' future and for us to get quality milk to suit the current world. The extra protein could help them have better muscle and bone health, especially for growing kids. If it's versatile for cooking too, it could make our meal prep easier and healthier."`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20create%20image%20A%20Family%20in%20india%20of%20%20urban%20house%20who%20staying%20happy%20in%20the%20living%20room%20in%20night%20each%20one%20one%20father,one%20mother,one%20%20duaghter%20and%20one%20%20boy%20in%20the%20image%20.jpg-GIB3VvDuqrh4hZnQUab7LthAaxUeNY.jpeg",
  },
  {
    title: "Balancing Vegetarian Diet with Lactose Intolerance",
    description: "Ananya's search for a protein-rich, lactose-free alternative",
    content: `Ananya, a 28-year-old software engineer from Bangalore, faces a daily challenge as a vegetarian with lactose intolerance. "Getting enough protein while avoiding lactose is a constant struggle," she explains. "Most plant-based milk alternatives lack the protein content I need." Ananya is excited about the possibility of a lactose-free, high-protein milk option. "UnBlend milk could provide the protein I need without causing digestive issues, this suits my lifestyle better and I don't worry about protein intake," she says. "I could potentially enjoy my morning coffee, add UnBlend milk to my smoothies, and use it in cooking without worry. UnBlend milk might help me meet my nutritional needs more easily and could even improve my energy levels at work."`,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20women%2028%20years%20old,%20urban%20indian%20women%20in%20india.jpg-WZqJ7GZAE4qoyUMwSmiYRmFZIQUzlB.jpeg",
  },
];

export function StoriesOfIndia() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-unblend-navy mb-4">
            Stories of India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of everyday Indians anticipating simple solutions to
            common health and nutrition challenges
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-unblend-navy mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {story.description}
                </p>
                <p className="text-gray-700 leading-relaxed line-clamp-4">
                  {story.content}
                </p>
                <button className="mt-4 text-unblend-blue hover:text-unblend-navy transition-colors">
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
