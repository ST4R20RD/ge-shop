import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { Modal } from "../../components";
import { useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { Banner, CustomCarousel, ProductList } from "../../components";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col items-center bg-prussian pb-8 w-full overflow-hidden">
            <p className="bg-cerise w-fit py-1 px-4 mb-2 rounded-b-lg text-white font-workSans text-sm sm:text-lg">
              CHECK OUR OFFERS!
            </p>
            <div className="flex justify-around w-full">
              <div className="text-center max-h-[232px]">
                <Link
                  to={`/category/men's%20clothing`}
                  className="text-sm sm:text-base p-1 text-zinc-400 underline w-fit"
                >
                  Men's clothing
                </Link>
                <ProductList productList={allProducts.slice(0, 2)} />
              </div>
              <div className="text-center max-h-[232px]">
                <Link
                  to={`/category/women's%20clothing`}
                  className="text-sm sm:text-base p-1 text-zinc-400 underline w-fit"
                >
                  Women's clothing
                </Link>
                <ProductList productList={allProducts.slice(14, 16)} />
              </div>
            </div>
          </div>
        </section>
      )}
      {productsFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
