import { FetchState } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";
import { Modal } from "../../components";
import { useEffect } from "react";
import { useGetSingleCategory } from "../../lib/api-hooks";
import { Banner, CustomCarousel, ProductList } from "../../components";

export default function JewelrySection() {
  const [categoryList, getCategory, categoryFetchState] = useGetSingleCategory();

  useEffect(() => {
    getCategory("jewelery");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {categoryFetchState === FetchState.LOADING && (
        <Modal>
          <ClipLoader color="#FFF" />
        </Modal>
      )}
      {categoryFetchState === FetchState.SUCCESS && (
        <section>
          <CustomCarousel>
            <Banner
              title={{ string: "Crafted by our community", className: "text-prussian" }}
              description={{
                string: "We work with communities to bring you high-quality jewelry",
                className: "bg-cinnamonRose text-rose-600 rounded-md pr-4 py-2",
              }}
              url="Banner4"
              position="right"
            />
            <Banner
              title={{ string: "Crafted by our community", className: "text-prussian" }}
              description={{
                string: "We work with communities to bring you high-quality jewelry",
                className: "bg-cinnamonRose text-rose-600 rounded-md pr-4 py-2",
              }}
              url="Banner4"
              position="right"
            />
          </CustomCarousel>
          <div className="pt-4 pb-6 w-full max-h-[272px]">
            <ProductList productList={categoryList.slice(0, 4)} />
          </div>
        </section>
      )}
      {categoryFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
