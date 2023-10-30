import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { ProductBox } from "../../components";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import Modal from "../../components/Modal";
import { ErrorPage } from "../ErrorPage";

export function Home() {
  const [allProducts, getAllProducts, productsFetchState] = useGetAllProducts();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {productsFetchState === FetchState.LOADING && (
        <Modal>
          <ClipLoader color="#FFF" />
        </Modal>
      )}
      {productsFetchState === FetchState.SUCCESS && (
        <div className="text-center mt-5 max-w-screen-xl">
          <p className="text-red-500 text-5xl">-50% DEALS</p>
          <div className="flex flex-wrap justify-center content-center items-center p-10">
            {allProducts.map((product) => {
              return <ProductBox key={product.id} product={product} />;
            })}
          </div>
        </div>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
