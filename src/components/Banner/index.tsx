import styled, { css } from "styled-components";

interface BannerProps {
  title: { string: string; color: string };
  description: string;
  id: string;
  position: string;
}

export function Banner({ title, description, id, position }: BannerProps) {
  return (
    <div>
      <img src={`images/${id}.png`} alt={`${id}`} />
      <Legend position={position}>
        <div>
          <p className={`${title.color} font-sueEllen text-5xl`}>{title.string}</p>
          <p className="font-workSans font-bold text-xl">{description}</p>
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
          left: 10vw;
        `;
      case "right":
        return css`
          justify-content: flex-end;
          right: 10vw;
        `;
      case "center":
        return css`
          justify-content: center;
          top: 30px;
        `;
    }
  }}
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  text-align: center;
  margin-right: 40px;
`;
