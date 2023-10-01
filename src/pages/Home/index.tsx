import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { ProductBox } from "../../components";

export function Home() {
  const [allProducts, getAllProducts] = useGetAllProducts();
  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-wrap justify-center content-center items-center p-10">
      {allProducts.map((product) => {
        return <ProductBox key={product.id} product={product} />;
      })}
    </div>
  );
}
