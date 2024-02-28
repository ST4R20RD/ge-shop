import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  children: JSX.Element[];
}

export function CustomCarousel({ children }: Props) {
  return (
    <Carousel autoPlay showStatus={false} showThumbs={false} className="w-full">
      {children}
    </Carousel>
  );
}
