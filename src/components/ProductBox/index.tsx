import styled from "styled-components";
import { ProductData } from "../../utils/types";
import { useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/ShopContext";
import { RatingStars } from "../RatingStars";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  product: ProductData;
}

export function ProductBox({ product }: Props) {
  const { addToCart, cartItems } = useContext(ShopContext) as ShopContextType;
  const priceInteger = Math.trunc(product.price);
  const priceDecimal = ((product.price - priceInteger) * 100).toFixed();
  const cartItemCount = cartItems[product.id];
  const discount = 50;

  return (
    <div className="bg-white shadow-sm rounded-xl w-60 h-80 m-2">
      <p className="text-white bg-red-500 w-fit rounded-tl-xl rounded-br-xl px-2">-{discount}%</p>
      <Wrapper>
        <Link to={`/product/${product.id}`}>
          <Container className="p-2 w-60">
            <Price className="flex items-end text-red-600 text-lg mb-2">
              <p className="text-3xl">${priceInteger}</p>
              {product.price - priceInteger > 0 && "," + priceDecimal}
              <del className="text-zinc-500 ml-2">
                ${(product.price * (1 + discount / 100)).toFixed(2)}
              </del>
            </Price>
            <div className="flex items-center justify-center h-36 bg-white p-5 w-full rounded-lg">
              <Img src={product.image} className="max-h-36" />
            </div>
            <Title className="text-zinc-500 text-sm text-center h-10">
              {product.title.length >= 49 ? product.title.slice(0, 49) + "..." : product.title}
            </Title>
            <Rating className="text-xs">
              <RatingStars productRating={product.rating} />
            </Rating>
          </Container>
        </Link>
        <Button
          className="p-1 rounded-full"
          onClick={() => {
            !cartItemCount && addToCart(product.id);
          }}
        >
          {cartItemCount > 0 ? <BsCartCheckFill size={20} /> : <BsCartPlus size={20} />}
        </Button>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 24px);
`;
const Img = styled.img``;
const Title = styled.p``;
const Price = styled.div``;
const Rating = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Button = styled.button`
  color: red;
  &:hover {
    color: #ffffff;
    background-color: red;
  }
`;
