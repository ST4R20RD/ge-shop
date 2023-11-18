import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { Modal } from "../../components";
import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { Banner, CustomCarousel, ProductList } from "../../components";

export default function ClothingSection() {
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
        <section>
          <CustomCarousel>
            <Banner
              title={{ string: "WINTER COLLECTION", className: "text-pumpkin" }}
              description={{
                string: "100% Cotton and natural pigments",
                className: "",
              }}
              id="Banner1"
              position="right"
            />
            <Banner
              title={{ string: "VEGAN LEATHER", className: "text-floral" }}
              description={{
                string: "Made from recycled plastic bottles",
                className: "",
              }}
              id="Banner2"
              position="right"
            />
            <Banner
              title={{ string: "30% Offer on HIKKING SET", className: "text-floral" }}
              description={{
                string: "Fresh fabrics with sustainable background",
                className: "",
              }}
              id="Banner3"
              position="left"
            />
          </CustomCarousel>
          <div className="bg-prussian py-8 w-full overflow-hidden">
            <ProductList productList={[...allProducts.slice(0, 2), ...allProducts.slice(14, 16)]} />
          </div>
        </section>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
