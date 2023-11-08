import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

export function CustomCarousel() {
  return (
    <Carousel autoPlay showStatus={false} renderThumbs={() => []}>
      <div>
        <img src="images/Banner1.png" alt="Banner1" />
        <LegendRight>
          <p>Legend Right</p>
        </LegendRight>
      </div>
      <div>
        <img src="images/Banner2.png" alt="Banner2" />
        <LegendLeft>
          <p>Legend Left</p>
        </LegendLeft>
      </div>
      <div>
        <img src="images/Banner3.png" alt="Banner3" />
        <LegendCenter>
          <p>Legend Center</p>
        </LegendCenter>
      </div>
    </Carousel>
  );
}

const LegendRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  margin-right: 40px;
`;

const LegendLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  margin-left: 40px;
`;

const LegendCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
