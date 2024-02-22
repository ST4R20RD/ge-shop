import { ProductData } from "../../utils/types";
import { ProductBox } from "../ProductBox";

interface ProductListProps {
  productList: ProductData[];
}

export function ProductList({ productList }: ProductListProps) {
  return (
    <div className="flex flex-wrap justify-evenly content-start items-center">
      {productList.map((product: ProductData) => {
        return <ProductBox key={product.id} product={product} />;
      })}
    </div>
  );
}
