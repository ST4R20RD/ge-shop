import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaReact, FaUser } from "react-icons/fa";
import { SearchBar } from "../SearchBar";
import { CurrencySelect } from "../Footer/CurrencySelect";

interface TabProps {
  tabOpen: boolean;
  setTabOpen: (arg: boolean) => void;
  allCategories: string[];
}

export function Tab({ tabOpen, setTabOpen, allCategories }: TabProps) {
  return (
    <Container tabOpen={tabOpen} className="bg-zinc-300 px-10 py-3 top-16 md:top-24 overflow-hidden sticky">
      <div className="text-zinc-500 pl-0 p-4 mb-4 md:hidden border-b border-zinc-500">
        <SearchBar />
      </div>
      <Categories className="md:max-w-screen-xl md:m-auto">
        <h2>Categories</h2>
        {allCategories.map((category, index) => {
          return (
            <Link
              to={`/category/${category.toString()}`}
              onClick={() => setTabOpen(false)}
              className="p-1 text-zinc-600 underline w-fit"
              key={index}
            >
              {category}
            </Link>
          );
        })}
      </Categories>
      <div className="text-zinc-500 text-3xl border-t border-zinc-500 py-4 my-2 md:hidden">
        <div className="mb-4">
          <CurrencySelect className="bg-zinc-300" />
        </div>
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
    </Container>
  );
}

interface WrapperProps {
  tabOpen: boolean;
}

const Container = styled.div<WrapperProps>`
  z-index: 10;
  width: 320px;
  height: 100%;
  position: fixed;
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

const Categories = styled.div`
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
    width: 5vw;
  }
  20% {
    width: 10vw;
  }
  30% {
    width: 15vw;
  }
  40% {
    width: 20vw;
  }
  50% {
    width: 25vw;
  }
  60% {
    width: 30vw;
  }
  70% {
    width: 35vw;
  }
  80% {
    width: 40vw;
  }
  90% {
    width: 45vw;
  }
  100% {
    width: 50vw;
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
