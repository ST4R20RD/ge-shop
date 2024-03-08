import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { Modal } from "../../components";
import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { Banner, CustomCarousel, ProductList } from "../../components";
import { Link } from "react-router-dom";

export default function ExploreSection() {
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
              url="/images/Banner1.png"
              position="right"
            />
            <Banner
              title={{ string: "VEGAN LEATHER", className: "text-floral" }}
              description={{
                string: "Made from recycled plastic bottles",
                className: "",
              }}
              url="/images/Banner2.png"
              position="right"
            />
            <Banner
              title={{ string: "30% Offer on HIKKING SET", className: "text-floral" }}
              description={{
                string: "Fresh fabrics with sustainable background",
                className: "",
              }}
              url="/images/Banner3.png"
              position="left"
            />
          </CustomCarousel>
          <div className="flex flex-col items-center py-8 w-full overflow-hidden">
            {/* <p className="bg-cerise w-fit py-1 px-4 mb-2 rounded-b-lg text-white font-workSans text-sm sm:text-lg">
              CHECK OUR OFFERS!
            </p> */}
            <div className="flex justify-around w-full">
              <div className="text-center">
                <ProductList productList={allProducts.slice(0, 4)} type="Recomendation" />
              </div>
            </div>
          </div>
        </section>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
