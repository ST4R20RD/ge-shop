import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { Banner, CustomCarousel, Modal, ProductList } from "../../components";

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
            <CustomCarousel>
              <Banner
                title={{ string: "WINTER COLLECTION", color: "text-pumpkin" }}
                description="100% Cotton and natural pigments"
                id="Banner1"
                position="right"
              />
              <Banner
                title={{ string: "VEGAN LEATHER", color: "text-floral" }}
                description="Made from recycled plastic bottles"
                id="Banner2"
                position="right"
              />
              <Banner
                title={{ string: "30% Offer on HIKKING SET", color: "text-floral" }}
                description="Fresh fabrics with sustainable background"
                id="Banner3"
                position="left"
              />
            </CustomCarousel>
            <div className="justify-around bg-prussian max-h-60 py-4 w-full overflow-hidden">
              <ProductList
                productList={[...allProducts.slice(0, 2), ...allProducts.slice(14, 16)]}
              />
            </div>
            <section className="bg-cerise border h-60 w-full" />
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
