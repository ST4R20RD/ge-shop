import { useEffect } from "react";
import { ProductBox } from "../../components";
import { ProductData } from "../../utils/types";
import { useGetSingleCategory } from "../../lib/api-hooks";
import { useParams } from "react-router-dom";

export function Category() {
  const [categoryList, getCategory] = useGetSingleCategory();
  const { category } = useParams();
  const currentCategory = String(category);

  useEffect(() => {
    getCategory(currentCategory);
    // eslint-disable-next-line
  }, [category]);

  return (
    <>
      {category ? (
        <div className="flex flex-col items-center">
          <h1 className="text-black m-3">{category.toUpperCase()}</h1>
          <div className="flex flex-wrap justify-center content-center items-center p-10">
            {categoryList.map((product: ProductData) => {
              return <ProductBox key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <div>Category not Found</div>
      )}
    </>
  );
}
