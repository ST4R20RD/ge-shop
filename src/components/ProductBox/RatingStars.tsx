import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Props {
  productRating: { rate: number; count: number };
}

export function RatingStars({ productRating }: Props) {
  const integer = Math.trunc(productRating.rate);
  const decimal = productRating.rate - integer;
  return (
    <div className="flex items-center">
      <div className="flex text-yellow-500 mx-1 w-16">
        {Array(integer)
          .fill(true)
          .map((index) => (
            <BsStarFill key={index} />
          ))}
        {decimal >= 0.5 && <BsStarHalf />}
        {Array(Math.round(5 - productRating.rate))
          .fill(true)
          .map((index) => (
            <BsStar key={index} />
          ))}
      </div>
      {productRating.rate} ({productRating.count})
    </div>
  );
}
