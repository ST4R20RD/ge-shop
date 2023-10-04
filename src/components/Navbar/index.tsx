import { useEffect, useState } from "react";
import { FaUser, FaSearch, FaReact } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useGetAllCategories } from "../../lib/api-hooks";

export function Navbar() {
  const [tabOpen, setTabOpen] = useState<boolean>(false);
  const [allCategories, getAllCategories] = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="bg-[#46B29D] dark:bg-slate-800">
      <NavbarDiv className="max-w-screen-xl m-auto text-slate-800 dark:text-stone-400">
        <div className="flex items-center">
          <button onClick={() => setTabOpen(!tabOpen)}>
            <FiMenu size={30} />
          </button>
          <Link to="/">
            <Logo>
              <MdOutlineDiscount />
              <h1>GE SHOP</h1>
            </Logo>
          </Link>
          <a
            href="https://goncalo-estrelado.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center underline">
              <FaReact />
              <p className="pl-2">Developed by Gonçalo Estrelado</p>
            </span>
          </a>
        </div>
        <RightSide className="w-60 text-2xl">
          <TbWorld />
          <FaSearch />
          <Link to="/Signup-Login">
            <FaUser />
          </Link>
          <Link to="/Cart">
            <BsCartFill />
          </Link>
        </RightSide>
      </NavbarDiv>
      {tabOpen && (
        <Tab tabOpen={tabOpen} className="flex flex-col bg-zinc-300 px-80 py-3">
          <h3>Categories</h3>
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
        </Tab>
      )}
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 30px;
  svg {
    font-size: 30px;
    margin: 5px;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const fadeIn = keyframes`
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

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

interface TabProps {
  tabOpen: boolean;
}

const Tab = styled.div<TabProps>`
  opacity: ${(props) => (props.tabOpen ? "1" : "0")};
  animation: ${(props) => (props.tabOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;
