import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import Modal from "../../components/Modal";
import { ErrorPage } from "../ErrorPage";
import { ProductList } from "../../components/ProductList";
import styled from "styled-components";

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
          <div className="text-center mt-5 max-w-screen-lg">
            <Carousell className="border h-60 w-full" />
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

const Carousell = styled.div``;
