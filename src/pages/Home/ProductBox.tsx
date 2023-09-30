import styled from "styled-components";
import { ProductData } from "../../utils/types";

interface Props {
  product: ProductData;
}

export function ProductBox({ product }: Props) {
  return (
    <Container className="flex flex-col justify-around items-center border border-zinc-300 shadow-md rounded-xl w-60 h-80 p-5 m-2">
      <Img src={product.image} className="max-w-20 h-20" />
      <Title className="text-zinc-500 text-sm  text-center">
        {product.title.length >= 49 ? product.title.slice(0, 49) + "..." : product.title}
      </Title>
      <div className="flex justify-around w-full">
        <Rating className="text-xs">
          Rating: {product.rating.rate} ({product.rating.count})
        </Rating>
      </div>
      <Price className="text-2xl">$ {product.price}</Price>
      <Button className="border border-zinc-300 rounded-full px-2 py-1 hover:bg-black hover:text-white">
        Add to Cart
      </Button>
    </Container>
  );
}
const Container = styled.div``;
const Img = styled.img``;
const Title = styled.p``;
const Price = styled.p``;
const Rating = styled.p``;
const Button = styled.button``;
