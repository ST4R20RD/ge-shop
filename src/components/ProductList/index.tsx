import { ProductData } from "../../utils/types";
import { ProductCard } from "../ProductCard";
import { RecomendationCard } from "../RecomendationCard";

interface ProductListProps {
  productList: ProductData[];
  type?: String;
}

export function ProductList({ productList, type = "Product" }: ProductListProps) {
  return (
    <div className="flex flex-wrap justify-evenly content-start items-center overflow-hidden">
      {productList.map((product: ProductData) => {
        if (type === "Product") {
          return <ProductCard key={product.id} product={product} />;
        } else {
          return <RecomendationCard key={product.id} product={product} />;
        }
      })}
    </div>
  );
}
