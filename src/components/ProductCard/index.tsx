import styled from "styled-components";
import { ProductData } from "../../utils/types";
import { useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/ShopContext";
import { RatingStars } from "../RatingStars";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export function ProductCard({ product }: { product: ProductData }) {
  const { addToCart, cartItems, selectedCurrency } = useContext(ShopContext) as ShopContextType;
  const cartItemCount = cartItems[product.id];
  const price = selectedCurrency === "Dollar" ? product.price : product.price * 0.94;

  return (
    <Wrapper className="bg-white w-60 h-96 m-2 font-grotesque">
      <Link to={`/product/${product.id}`} className="w-full h-full">
        <Container className="p-3 h-full">
          <div className="w-full">
            <div className="flex justify-start bg-zinc-200 pl-2 w-28">
              <p className="font-bold text-sm">{product.category}</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white p-2 my-3 rounded-lg">
            <Img src={product.image} className="max-h-48" />
          </div>
          <div className="flex justify-between w-full">
            <div className="text-xs">
              <Title className="text-zinc-800 font-bold text-center h-2 sm:h-5">
                {product.title.split(" ").slice(0, 3).join(" ")}
              </Title>
              <Price className="font-medium">
                {selectedCurrency === "Dollar" && "$"}
                {price.toFixed(2)}
                {selectedCurrency === "Euro" && "€"}
              </Price>
            </div>
            <div className="flex flex-col justify-between items-end">
              <p>O O O</p>
              <Rating className="text-xs">
                <RatingStars productRating={product.rating} />
              </Rating>
            </div>
          </div>
        </Container>
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
`;
const Img = styled.img``;
const Title = styled.p``;
const Price = styled.p``;
const Rating = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  color: red;
  &:hover {
    color: #ffffff;
    background-color: red;
  }
`;
