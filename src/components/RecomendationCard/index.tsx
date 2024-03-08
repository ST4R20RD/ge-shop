import styled from "styled-components";
import { ProductData } from "../../utils/types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext, ShopContextType } from "../../context/ShopContext";

export function RecomendationCard({ product }: { product: ProductData }) {
  const { selectedCurrency } = useContext(ShopContext) as ShopContextType;
  const price = selectedCurrency === "Dollar" ? product.price : product.price * 0.94;
  return (
    <Wrapper className="relative bg-white w-56 h-60 m-2 overflow-hidden font-grotesque">
      <Link to={`/product/${product.id}`}>
        <Container className="p-2 w-full">
          <div className="flex items-center justify-center bg-white pt-4 rounded-lg">
            <Img src={product.image} />
          </div>
        </Container>
        <div className="absolute left-0 bottom-0 bg-zinc-600 bg-opacity-60 space-y-3 text-white text-xs w-full h-20 py-2 px-5">
          <Title className="text-center text-lg">{product.title.split(" ").slice(0, 3).join(" ")}</Title>
          <div className="flex justify-between items-center">
            {/* <p>{product.description}</p> */}
            <p>Great for summer walks!</p>
            <Price className="text-base">
              {selectedCurrency === "Dollar" && "$"}
              {price.toFixed(2)}
              {selectedCurrency === "Euro" && "€"}
            </Price>
          </div>
        </div>
      </Link>
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
