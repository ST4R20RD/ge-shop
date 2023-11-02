import { ProductData } from "../../utils/types";
import { ProductBox } from "../ProductBox";

interface ProductListProps {
  productList: ProductData[];
}

export function ProductList({ productList }: ProductListProps) {
  return (
    <div className="flex flex-wrap justify-center content-center items-center p-10">
      {productList.map((product: ProductData) => {
        return <ProductBox key={product.id} product={product} />;
      })}
    </div>
  );
}
