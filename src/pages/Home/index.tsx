import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { ProductBox } from "../../components";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";

export function Home() {
  const [allProducts, getAllProducts, productsFetchState] = useGetAllProducts();
  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {productsFetchState === FetchState.LOADING && <ClipLoader color="#3E424B" />}
      {productsFetchState === FetchState.SUCCESS && (
        <div className="text-center mt-5 max-w-screen-xl">
          <p className="text-red-500 text-5xl">50% DEALS</p>
          <div className="flex flex-wrap justify-center content-center items-center p-10">
            {allProducts.map((product) => {
              return <ProductBox key={product.id} product={product} />;
            })}
          </div>
        </div>
      )}
      {productsFetchState === FetchState.ERROR && (
        <div>Could not Load the page. Please Refresh.</div>
      )}
    </>
  );
}
