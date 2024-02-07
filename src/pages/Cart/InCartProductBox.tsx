import styled from "styled-components";
import { ProductData } from "../../utils/types";
import { useEffect, useRef, useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  product: ProductData;
}

export function InCartProductBox({ product }: Props) {
  const { addToCart, removeFromCart, updateCartItemCount, cartItems, selectedCurrency } =
    useContext(ShopContext) as ShopContextType;
  const price = selectedCurrency === "Dollar" ? product.price : product.price * 0.94;

  const cartItemCount = cartItems[product.id];

  const cartItemCountRef = useRef<number>();

  const itemCountChange = (event: { target: { value: string } }) => {
    const newValue = parseInt(event.target.value);
    updateCartItemCount(newValue, product.id);
  };

  useEffect(() => {
    const cartItemCountValue = cartItems[product.id];
    cartItemCountRef.current = cartItemCountValue;
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div className="bg-white shadow-sm rounded-xl my-2 w-full">
      <Wrapper>
        <Container className="p-2">
          <div className="flex">
            <Link
              to={`/product/${product.id}`}
              className="flex justify-center items-center sm:mr-8 sm:w-36"
            >
              <Img src={product.image} className="max-h-36 hidden sm:block" />
            </Link>
            <div>
              <Link to={`/product/${product.id}`}>
                <Title className="text-black font-semibold text-sm h-10 mb-6 overflow-clip">
                  {product.title}
                </Title>
              </Link>
              <div>
                <Price className="flex items-end  text-lg mb-2">
                  <p className="text-3xl">
                    {selectedCurrency === "Dollar" && "$"}
                    {price.toFixed(2)}
                    {selectedCurrency === "Euro" && "€"}
                  </p>
                </Price>
              </div>
              <p className="text-green-600 font-semibold text-sm">Delivery in 10 days</p>
            </div>
          </div>
          <div className="flex items-center mx-5 mt-3">
            <Button
              className="p-1 rounded-full"
              onClick={() => {
                removeFromCart(product.id);
              }}
            >
              <FaMinus />
            </Button>
            <input
              type="number"
              value={cartItemCount}
              onChange={itemCountChange}
              className="w-10 h-6 text-center border border-zinc-600 rounded-lg appearance-none m-0"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <Button
              className="p-1 rounded-full"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              <FaPlus />
            </Button>
          </div>
        </Container>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Img = styled.img``;
const Title = styled.p``;
const Price = styled.div``;
const Button = styled.button`
  color: red;
  &:hover {
    color: #ffffff;
    background-color: red;
  }
`;
