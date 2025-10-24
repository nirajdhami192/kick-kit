import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
}

const ProductCard = ({ image, name, category, price }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
