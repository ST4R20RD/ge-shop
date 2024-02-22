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
  const { addToCart, cartItems, selectedCurrency } = useContext(ShopContext) as ShopContextType;
  const cartItemCount = cartItems[product.id];
  const price = selectedCurrency === "Dollar" ? product.price : product.price * 0.94;

  return (
    <Wrapper className="bg-white rounded-lg w-64 h-80  m-2">
      <div>
        <h5>Categories</h5>
      </div>
      <Link to={`/product/${product.id}`}>
        {/* <Container className="p-2 w-full border border-red-600"> */}
        {/* <Title className="text-zinc-800 text-xs sm:text-sm text-center h-2 sm:h-5">
            {product.title.length >= 19 ? product.title.slice(0, 13) + "..." : product.title}
          </Title> */}
        <div className="flex items-center justify-center w-64 h-64 bg-white rounded-lg border border-green-900">
          <Img src={product.image} className="w-full h-full border border-red-600" />
        </div>
        <Title className="text-zinc-800 text-xs w-36 sm:text-sm h-2 sm:h-5 border border-red-600">
          {product.title.length >= 19 ? product.title.slice(0, 13) + "..." : product.title}
        </Title>
        <div className="flex items-start">
          <Rating className="text-xs">
            <RatingStars productRating={product.rating} />
          </Rating>
        </div>
        {/* </Container> */}
      </Link>
      <div className="flex items-center">
        {/* <Button
          className="pr-2 rounded-full"
          onClick={() => {
            !cartItemCount && addToCart(product.id);
          }}
        >
          {cartItemCount > 0 ? <BsCartCheckFill size={20} /> : <BsCartPlus size={20} />}
        </Button> */}
        {/* <Price className="text-base sm:text-xl">
          {selectedCurrency === "Dollar" && "$"}
          {price.toFixed(2)}
          {selectedCurrency === "Euro" && "€"}
        </Price> */}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
const Price = styled.p``;
const Rating = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;
const Button = styled.button`
  color: red;
  &:hover {
    color: #ffffff;
    background-color: red;
  }
`;
