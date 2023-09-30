import { useState } from "react";
import { ProductData } from "../utils/types";

export function useGetAllProducts() {
  const [allProducts, setAllProducts] = useState<Array<ProductData>>([]);
  const getAllProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  };

  return [allProducts, setAllProducts, getAllProducts] as const;
}
