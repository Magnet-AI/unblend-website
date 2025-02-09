import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RecipeCard } from "@/components/recipe-card";

const recipes = [
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    description: "A refreshing yogurt-based drink with sweet mango pulp",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango%20lassi.jpg-vNjQwJn7H2ycWPq9oSviSsWJjvp0GY.jpeg",
    prepTime: "5 minutes",
    servings: 2,
  },
  {
    id: "dahi",
    name: "Homemade Dahi (Indian Yogurt)",
    description:
      "Creamy and probiotic-rich Indian yogurt made with UnBlend Ultra-Filtered milk",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dahi%20%20Indian%20Yogurt.jpg-66qa4CPpbPnJd3EX7KNmRbvUhkUONj.jpeg",
    prepTime: "10 minutes (plus 6-8 hours fermentation)",
    servings: 4,
  },
  {
    id: "rice-kheer",
    name: "Rice Kheer",
    description: "A creamy rice pudding flavored with cardamom and nuts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rice%20Kheer-p1w4hGVcTKONbvZ0il4aZMJAwtdH2f.jpeg",
    prepTime: "30 minutes",
    servings: 4,
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    description: "Spiced milk tea, a beloved Indian beverage",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20make%20masala%20chai%20in%20200%20ml%20cup%20.jpg-MEVTvPg645qM7QHzhRM0Yqhiw9syjL.jpeg",
    prepTime: "10 minutes",
    servings: 2,
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    description: "Soft cottage cheese dumplings in sweetened, flavored milk",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rasmalai.jpg-30dRaATtLk4PJd4KEeC5zDmThkpA0q.jpeg",
    prepTime: "45 minutes",
    servings: 6,
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee",
    description: "A strong and aromatic South Indian coffee served with milk",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o8g7bvc682k-5hsbVsrYctImwVMttXFexsp8KxaBlA.webp",
    prepTime: "10 minutes",
    servings: 2,
  },
  {
    id: "strawberry-pancakes",
    name: "Strawberry Pancakes",
    description: "Fluffy pancakes with fresh strawberries and UnBlend milk",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20create%20a%20%20pancake%20in%20a%20plate%20with%20the%20syrp.jpg-HORDWPhUGHM2Ip0qB6ZzRmOnlUVpYG.jpeg",
    prepTime: "20 minutes",
    servings: 4,
  },
  {
    id: "protein-oat-bowl",
    name: "Protein Oat Bowl",
    description:
      "A nutritious and delicious chocolate protein oat bowl topped with fresh strawberries and nuts",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/can%20you%20make%20a%20blow%20with%20chocloate%20oats%20with%20diced%20strawberry,%20flax%20seed%20and%20nuts..jpg-oRZJ1QrRanT0jDlKE5AMUaIz9JUMV1.jpeg",
    prepTime: "15 minutes",
    servings: 1,
  },
  {
    id: "banana-chocolate-oat-protein-milkshake",
    name: "Banana Chocolate Oat Protein Milkshake",
    description:
      "A rich and creamy protein shake with banana, chocolate, and oats",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banana%20chochalte%20%20Oat%20Protein%20Milkshake%20in%20glass.jpg-NUjsWeZnuH3TBIQs00Loc4SKB8bcCv.jpeg",
    prepTime: "5 minutes",
    servings: 2,
  },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-unblend-blue/20 via-white to-unblend-blue/20 overflow-hidden">
      <Navbar />
      <main className="container mx-auto px-16 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-unblend-navy mb-6">
          Delicious Milk Recipes
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-5xl mx-auto">
          Discover the versatility of UnBlend milk with these traditional Indian
          recipes and modern twists.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
