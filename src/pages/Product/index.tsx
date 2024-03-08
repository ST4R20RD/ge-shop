import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetSingleCategory, useGetSingleProduct } from "../../lib/api-hooks";
import { FetchState, ProductData } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { CountrySelector } from "./CountrySelector";
import { ShopContext, ShopContextType } from "../../context/ShopContext";
import { ErrorPage } from "../ErrorPage";
import { Modal, ProductCard, RatingStars } from "../../components";

export function Product() {
  const { productId } = useParams();
  const [product, getProduct, productFetchState] = useGetSingleProduct();
  const [categoryList, getCategory, categoryFetchState] = useGetSingleCategory();
  const { addToCart, cartItems, selectedCurrency } = useContext(ShopContext) as ShopContextType;
  const price = product && (selectedCurrency === "Dollar" ? product.price : product.price * 0.94);

  const cartItemCount = () => {
    if (product) return cartItems[product.id];
    return 0;
  };

  let options: Intl.DateTimeFormatOptions = { month: "long", day: "2-digit" };
  let newDate = new Date();
  newDate.setDate(newDate.getDate() + 10);
  let arrivalDate = newDate.toLocaleDateString("en-US", options);

  useEffect(() => {
    getProduct(Number(productId));
    // eslint-disable-next-line
  }, [productId]);

  useEffect(() => {
    productFetchState === FetchState.SUCCESS && product && getCategory(product.category);
    // eslint-disable-next-line
  }, [product]);

  return (
    <>
      {productFetchState === FetchState.LOADING && (
        <Modal>
          <ClipLoader color="#FFF" />
        </Modal>
      )}
      {productFetchState === FetchState.SUCCESS && product && (
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row mt-10">
            <ImgContainer className="flex justify-center items-center min-w-[500px] h-[500px] bg-white rounded-lg">
              <Img src={product.image} className="p-5 max-w-[500px]" />
            </ImgContainer>
            <section className="flex flex-col items-center sm:flex-row">
              <section className="max-w-2xl p-5">
                <div className="dark:text-white">
                  <Title>{product.title}</Title>
                  <Link to={`/category/${product.category}`}>
                    <Category className="my-3">{product.category}</Category>
                  </Link>
                  <Description className="my-4">{product.description}</Description>
                  <Rating className="m-3 ml-0">
                    <RatingStars productRating={product.rating} big={true} />
                  </Rating>
                </div>
              </section>
              <section className="flex flex-col justify-between w-64 bg-white p-5 m-2 rounded-lg min-w-[256px] ">
                <div>
                  <SideSection>
                    Envio para: <CountrySelector />
                  </SideSection>
                  <SideSection>
                    <p>Delivery</p>
                    <p className="text-green-600 font-semibold">Delivery in 10 days</p>
                    <p>on {arrivalDate}</p>
                  </SideSection>
                  <SideSection>
                    <p>Services</p>
                    <p className="text-green-600 font-semibold">Free Return</p>
                  </SideSection>
                </div>
                <div className="flex flex-col items-center mt-2">
                  <Price className="flex flex-col items-center text-lg mb-2">
                    <p className="text-3xl">
                      {selectedCurrency === "Dollar" && "$"}
                      {price?.toFixed(2)}
                      {selectedCurrency === "Euro" && "€"}
                    </p>
                    <p className="text-zinc-400">Prices include Taxes</p>
                  </Price>
                  <button className="w-full text-white text-xl bg-red-600 rounded-full m-2 px-3 py-2">Buy now</button>
                  <button
                    onClick={() => !cartItemCount() && addToCart(product.id)}
                    className="w-full text-red-600 text-xl bg-red-200 rounded-full m-2 px-3 py-2"
                  >
                    {cartItemCount() > 0 ? "Added!" : "Add to cart"}
                  </button>
                </div>
              </section>
            </section>
          </div>
          <h1 className="dark:text-white m-2">Similar Products</h1>
          <div className="flex flex-col items-center">
            {categoryFetchState === FetchState.LOADING && <ClipLoader color="#3E424B" />}
            {categoryFetchState === FetchState.SUCCESS && (
              <div className="flex flex-wrap justify-center content-center items-center p-10">
                {categoryList
                  .filter((categoryProduct: ProductData) => categoryProduct.id !== Number(product.id))
                  .map((product: ProductData) => {
                    return <ProductCard key={product.id} product={product} />;
                  })}
              </div>
            )}
            {categoryFetchState === FetchState.ERROR && <p>Could not load.</p>}
          </div>
        </div>
      )}
      {productFetchState === FetchState.ERROR && <ErrorPage />}
    </>
  );
}

const Description = styled.p``;
const ImgContainer = styled.div``;
const Img = styled.img`
  max-height: 460px;
`;
const Title = styled.h1``;
const Price = styled.div``;
const Category = styled.h2`
  text-decoration: underline;
`;
const Rating = styled.div``;
const SideSection = styled.section`
  border-bottom-width: 1px;
  border-color: rgb(212 212 216);
  padding: 15px 0;
`;
