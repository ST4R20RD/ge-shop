import { ProductData } from "../../utils/types";
import { ProductBox } from "../ProductBox";

interface ProductListProps {
  productList: ProductData[];
}

export function ProductList({ productList }: ProductListProps) {
  return (
    <div className="flex flex-wrap justify-evenly content-start items-center overflow-hidden h-36 sm:h-52">
      {productList.map((product: ProductData) => {
        return <ProductBox key={product.id} product={product} />;
      })}
    </div>
  );
}
