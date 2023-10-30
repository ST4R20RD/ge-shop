import { useState } from "react";
import { FetchState, ProductData } from "../utils/types";
import { client } from "../client";

export function useGetAllProducts() {
  const [productsFetchState, setProductsFetchState] = useState(FetchState.DEFAULT);
  const [allProducts, setAllProducts] = useState<Array<ProductData>>([]);
  const getAllProducts = async () => {
    try {
      setProductsFetchState(FetchState.LOADING);
      const res = await client.get("/products");
      const resData = res.data as Array<ProductData>;

      setAllProducts(resData);
      setProductsFetchState(FetchState.SUCCESS);
    } catch (error) {
      console.log(error);
      setProductsFetchState(FetchState.ERROR);
    }
  };

  return [allProducts, getAllProducts, productsFetchState] as const;
}

export function useGetSingleProduct() {
  const [productFetchState, setProductFetchState] = useState(FetchState.DEFAULT);
  const [product, setProduct] = useState<ProductData>();
  const getProduct = async (id: number) => {
    try {
      setProductFetchState(FetchState.LOADING);
      const res = await client.get(`/products/${id}`);
      const resData = res.data as ProductData;

      if (!resData) {
        throw new Error();
      } else {
        setProduct(resData);
        setProductFetchState(FetchState.SUCCESS);
      }
    } catch (error) {
      console.log(error);
      setProductFetchState(FetchState.ERROR);
    }
  };
  return [product, getProduct, productFetchState] as const;
}

export function useGetAllCategories() {
  const [allCategories, setAllCategories] = useState<Array<string>>([]);
  const getAllCategories = async () => {
    try {
      const res = await client.get("/products/categories");
      const resData = res.data as Array<string>;

      setAllCategories(resData);
    } catch (error) {
      console.log(error);
    }
  };
  return [allCategories, getAllCategories] as const;
}

export function useGetSingleCategory() {
  const [categoryFetchState, setCategoryFetchState] = useState(FetchState.DEFAULT);
  const [categoryList, setCategory] = useState<Array<ProductData>>([]);
  const getCategory = async (category: string) => {
    try {
      setCategoryFetchState(FetchState.LOADING);
      const res = await client.get(`/products/category/${category}`);
      const resData = res.data as Array<ProductData>;

      if (resData.length === 0) {
        throw new Error();
      } else {
        setCategory(resData);
        setCategoryFetchState(FetchState.SUCCESS);
      }
    } catch (error) {
      console.log(error);
      setCategoryFetchState(FetchState.ERROR);
    }
  };
  return [categoryList, getCategory, categoryFetchState] as const;
}
