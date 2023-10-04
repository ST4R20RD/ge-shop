import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Props {
  productRating: { rate: number; count: number };
  big?: boolean;
}

export function RatingStars({ productRating, big }: Props) {
  const integer = Math.trunc(productRating.rate);
  const decimal = productRating.rate - integer;
  return (
    <div className={`flex items-center ${big && `text-xl`}`}>
      <div className="flex text-yellow-500 mx-1">
        {Array(integer)
          .fill(true)
          .map((i, index) => {
            return <BsStarFill key={index} size={big ? 20 : 12} />;
          })}
        {decimal >= 0.5 && <BsStarHalf size={big ? 20 : 12} />}
        {Array(Math.round(5 - productRating.rate))
          .fill(true)
          .map((i, index) => (
            <BsStar key={index} size={big ? 20 : 12} />
          ))}
      </div>
      {productRating.rate} ({productRating.count}
      {big && " reviews"})
    </div>
  );
}
