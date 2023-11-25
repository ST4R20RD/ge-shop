import { useEffect } from "react";
import { FetchState } from "../../utils/types";
import { useGetSingleCategory } from "../../lib/api-hooks";
import { Banner, CustomCarousel, Modal, ProductList } from "../../components";
import { ClipLoader } from "react-spinners";
import { ErrorPage } from "../ErrorPage";

export function EletronicSection() {
  const [categoryList, getCategory, categoryFetchState] = useGetSingleCategory();

  useEffect(() => {
    getCategory("electronics");
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
              title={{ string: "Great Performance!", className: "text-prussian" }}
              description={{
                string: "For your projects and with the planet",
                className: "text-teal-600",
              }}
              id="Banner5"
              position="center"
            />
            <Banner
              title={{ string: "Great Performance!", className: "text-prussian" }}
              description={{
                string: "For your projects and with the planet",
                className: "text-teal-600",
              }}
              id="Banner5"
              position="center"
            />
          </CustomCarousel>
          <div className=" bg-sunset pt-4 pb-6 w-full max-h-[272px]">
            <ProductList productList={categoryList.slice(0, 4)} />
          </div>
        </section>
      )}
      {categoryFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
