import styled, { css } from "styled-components";

interface BannerProps {
  title: { string: string; className: string };
  description: { string: string; className: string };
  id: string;
  position: string;
}

export function Banner({ title, description, id, position }: BannerProps) {
  return (
    <div>
      <img src={`images/${id}.png`} alt={`${id}`} />
      <Legend position={position}>
        <div>
          <Title className={`${title.className} font-sueEllen mb-5`}>{title.string}</Title>
          <Description className={`${description.className} font-workSans font-bold p-2`}>
            {description.string}
          </Description>
        </div>
      </Legend>
    </div>
  );
}

const Legend = styled.div<{ position: string }>`
  display: flex;
  ${(props) => {
    switch (props.position) {
      case "left":
        return css`
          justify-content: flex-start;
          align-items: center;
          top: 0;
          left: 4vw;
          text-align: start;
        `;
      case "right":
        return css`
          justify-content: flex-end;
          align-items: center;
          top: 0;
          right: 2vw;
          text-align: end;
        `;
      case "center":
        return css`
          justify-content: center;
          align-items: start;
          top: 20px;
          text-align: center;
          margin-bottom: 0;
        `;
    }
  }}
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  margin-right: 40px;
`;

const Title = styled.p`
  font-size: calc(3px + min(4vw, 45px));
`;

const Description = styled.p`
  font-size: calc(3px + min(1vw, 15px));
  text-align: left;
`;
