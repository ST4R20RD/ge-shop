import { useEffect } from "react";
import { useGetSingleCategory } from "../../lib/api-hooks";
import { useParams } from "react-router-dom";
import { ProductList } from "../../components/ProductList";
import Modal from "../../components/Modal";
import { ClipLoader } from "react-spinners";
import { FetchState } from "../../utils/types";
import { ErrorPage } from "../ErrorPage";

export function Category() {
  const [categoryList, getCategory, categoryFetchState] = useGetSingleCategory();
  const { category } = useParams();
  const currentCategory = String(category);

  useEffect(() => {
    getCategory(currentCategory);
    // eslint-disable-next-line
  }, [category]);

  return (
    <>
      {categoryFetchState === FetchState.LOADING && (
        <Modal>
          <ClipLoader color="#FFF" />
        </Modal>
      )}
      {categoryFetchState === FetchState.SUCCESS && <ProductList productList={categoryList} />}
      {categoryFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}
