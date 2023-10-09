import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useGetAllCategories } from "../../lib/api-hooks";
import { useEffect } from "react";
import { FaReact, FaSearch, FaUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface TabProps {
  tabOpen: boolean;
  setTabOpen: (arg: boolean) => void;
}

export function Tab({ tabOpen, setTabOpen }: TabProps) {
  const [allCategories, getAllCategories] = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper tabOpen={tabOpen} className="bg-zinc-300 px-10 py-3 overflow-hidden">
      <div className="text-zinc-500 text-3xl mb-4 md:hidden border-b border-zinc-500">
        <FaSearch className="m-2" />
      </div>
      <Container className="md:max-w-screen-xl md:m-auto">
        <h2>Categories</h2>
        {allCategories.map((category, index) => {
          return (
            <Link
              to={`/category/${category.toString()}`}
              onClick={() => setTabOpen(false)}
              className="p-1 text-zinc-600 underline"
              key={index}
            >
              {category}
            </Link>
          );
        })}
      </Container>
      <div className="text-zinc-500 text-3xl border-t border-zinc-500 py-4 my-2 md:hidden">
        <span className="flex items-center mb-2">
          <TbWorld />
          <p className="text-sm ml-2">Language</p>
        </span>
        <Link to="/Signup-Login" className="flex items-center mb-2">
          <FaUser />
          <p className="text-sm ml-2">Account</p>
        </Link>
      </div>
      <a href="https://goncalo-estrelado.netlify.app/" target="_blank" rel="noopener noreferrer">
        <span className="flex items-center underline text-xs mt-4">
          <FaReact />
          <p className="pl-2">Developed by Gonçalo Estrelado</p>
        </span>
      </a>
    </Wrapper>
  );
}

interface WrapperProps {
  tabOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 80vw;
  height: 100%;
  position: absolute;
  top: 64px;
  opacity: ${(props) => (props.tabOpen ? "1" : "0")};
  animation: ${(props) => (props.tabOpen ? horizFadeIn : horizFadeOut)} 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 100vw;
    max-height: 250px;
    height: fit-content;
    animation: ${(props) => (props.tabOpen ? vertFadeIn : vertFadeOut)} 0.3s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
`;

const vertFadeIn = keyframes`
  0% {
    height: 0px;
  }
  10% {
    height: 17px;
  }
  20% {
    height: 34px;
  }
  30% {
    height: 51px;
  }
  40% {
    height: 68px;
  }
  50% {
    height: 86px;
  }
  60% {
    height: 103px;
  }
  70% {
    height: 120px;
  }
  80% {
    height: 137px;
  }
  90% {
    height: 154px;
  }
  100% {
    height: 172px;
  }
`;

const vertFadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const horizFadeIn = keyframes`
0% {
    width: 0vw;
  }
  10% {
    width: 8vw;
  }
  20% {
    width: 16vw;
  }
  30% {
    width: 24vw;
  }
  40% {
    width: 32vw;
  }
  50% {
    width: 40vw;
  }
  60% {
    width: 48vw;
  }
  70% {
    width: 56vw;
  }
  80% {
    width: 64vw;
  }
  90% {
    width: 72vw;
  }
  100% {
    width: 80vw;
  }
  `;

const horizFadeOut = keyframes`
from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
