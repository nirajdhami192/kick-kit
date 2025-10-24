import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    image: product1,
    name: "Air Max Pro",
    category: "Running",
    price: "$149.99",
  },
  {
    id: 2,
    image: product2,
    name: "Urban Elite",
    category: "Lifestyle",
    price: "$129.99",
  },
  {
    id: 3,
    image: product3,
    name: "Shadow Runner",
    category: "Training",
    price: "$139.99",
  },
  {
    id: 4,
    image: product4,
    name: "Velocity X",
    category: "Performance",
    price: "$159.99",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">Featured Products</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover our handpicked selection of the season's most iconic footwear
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
