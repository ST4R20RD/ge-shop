import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import Modal from "../../components/Modal";
import { ErrorPage } from "../ErrorPage";
import { ProductList } from "../../components/ProductList";

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
          <ProductList productList={allProducts} />
        </div>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
