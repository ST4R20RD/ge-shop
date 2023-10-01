import { useState } from "react";
import { ProductData } from "../utils/types";
import { client } from "../client";

export function useGetAllProducts() {
  const [allProducts, setAllProducts] = useState<Array<ProductData>>([]);
  const getAllProducts = async () => {
    try {
      const res = await client.get("/products");
      const resData = res.data as Array<ProductData>;

      setAllProducts(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return [allProducts, getAllProducts] as const;
}

export function useGetSingleProduct() {
  const [product, setProduct] = useState<ProductData>();
  const getProduct = async (id: number) => {
    try {
      const res = await client.get(`/product/${id}`);
      const resData = res.data as ProductData;

      setProduct(resData);
    } catch (error) {
      console.log(error);
    }
  };
  return [product, getProduct] as const;
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
  const [category, setCategory] = useState<string>("");
  const getCategory = async (category: string) => {
    try {
      const res = await client.get(`/product/category/${category}`);
      const resData = res.data as string;

      setCategory(resData);
    } catch (error) {
      console.log(error);
    }
  };
  return [category, getCategory] as const;
}
