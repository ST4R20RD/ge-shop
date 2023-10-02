import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetSingleCategory, useGetSingleProduct } from "../../lib/api-hooks";
import { FetchState, ProductData } from "../../utils/types";
import { ClipLoader } from "react-spinners";
import { CountrySelector } from "./CountrySelector";
import { ProductBox, RatingStars } from "../../components";

export function Product() {
  const { productId } = useParams();
  const [product, getProduct, productFetchState] = useGetSingleProduct();
  const [categoryList, getCategory] = useGetSingleCategory();

  const priceInteger = product ? Math.trunc(product.price) : 0;
  const priceDecimal = product && ((product.price - priceInteger) * 100).toFixed();
  const discount = 50;

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
      {productFetchState === FetchState.LOADING && <ClipLoader color="#3E424B" />}
      {productFetchState === FetchState.SUCCESS && product && (
        <div className="flex flex-col">
          <div className="flex mt-10">
            <ImgContainer className="flex justify-center items-center min-w-[500px] h-[500px]">
              <Img src={product.image} className="p-5 max-w-[500px]" />
            </ImgContainer>
            <section className="max-w-2xl p-5">
              <Title>{product.title}</Title>
              <Link to={`/category/${product.category}`}>
                <Category className="my-3">{product.category}</Category>
              </Link>
              <Description className="my-4">{product.description}</Description>
              <Rating className="m-3 ml-0">
                <RatingStars productRating={product.rating} big={true} />
              </Rating>
              <div>
                <Price className="flex items-end text-lg mb-2">
                  <div className="flex items-end text-red-600">
                    <p className="text-3xl 0">${priceInteger}</p>
                    <p>{product.price - priceInteger > 0 && "," + priceDecimal}</p>
                  </div>
                  <del className="text-zinc-500 ml-2">
                    ${(product.price * (1 + discount / 100)).toFixed(2)}
                  </del>
                  <p className="text-base ml-1 text-zinc-500"> {discount}% off</p>
                </Price>
                <p className="text-zinc-400">Prices include Taxes</p>
              </div>
            </section>
            <section className="w-60">
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
              <div className="flex flex-col items-center mt-2">
                <button className="w-full text-white text-xl bg-red-600 rounded-full m-2 px-3 py-2">
                  Buy now
                </button>
                <button className="w-full text-red-600 text-xl bg-red-200 rounded-full m-2 px-3 py-2">
                  Add to cart
                </button>
              </div>
            </section>
          </div>
          <h1>Similar Products</h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center content-center items-center p-10">
              {categoryList
                .filter((categoryProduct: ProductData) => categoryProduct.id !== Number(product.id))
                .map((product: ProductData) => {
                  return <ProductBox key={product.id} product={product} />;
                })}
            </div>
          </div>
        </div>
      )}
      {productFetchState === FetchState.ERROR && <div>Product Not Found</div>}
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
const Rating = styled.p``;
const SideSection = styled.section`
  border-bottom-width: 1px;
  border-color: rgb(212 212 216);
  padding: 15px 0;
`;
