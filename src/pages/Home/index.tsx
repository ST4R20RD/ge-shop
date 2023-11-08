import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { CustomCarousel, Modal, ProductList } from "../../components";

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
        <div className="flex justify-center w-screen">
          <div className="border h-full w-44 mx-10 hidden md:block" />
          <div className="mt-5 max-w-screen-lg">
            <CustomCarousel />
            <section className="border h-10 w-full" />
            <div className="bg-white border max-h-60 py-4 w-full overflow-hidden">
              <ProductList productList={allProducts.slice(0, 5)} />
            </div>
            <section className="bg-raspberry border h-60 w-full" />
            <div className="bg-white border max-h-60 py-4 w-full overflow-hidden">
              <ProductList productList={allProducts.slice(5, 10)} />
            </div>
          </div>
          <div className="border h-full w-44 mx-10 hidden md:block" />
        </div>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
