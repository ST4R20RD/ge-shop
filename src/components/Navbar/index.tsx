import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tab } from "./Tab";
import { SearchBar } from "../SearchBar";

export function Navbar() {
  const [tabOpen, setTabOpen] = useState<boolean>(false);

  return (
    <>
      <Container className="bg-[#46B29D] dark:bg-slate-800">
        <NavbarDiv className="max-w-screen-xl m-auto text-slate-800 dark:text-stone-400">
          <div className="flex items-center">
            <button onClick={() => setTabOpen(!tabOpen)} className="mx-3">
              <FiMenu size={30} />
            </button>
            <Link to="/" onClick={() => setTabOpen(false)}>
              <Logo>
                <MdOutlineDiscount />
                <h1>GE SHOP</h1>
              </Logo>
            </Link>
          </div>
          <RightSide className="text-2xl">
            <div className="hidden md:flex md:justify-between md:items-center">
              <SearchBar />
              <TbWorld />
              <Link to="/Signup-Login">
                <FaUser />
              </Link>
            </div>
            <Link to="/Cart">
              <BsCartFill />
            </Link>
          </RightSide>
        </NavbarDiv>
      </Container>
      {tabOpen && <Tab tabOpen={tabOpen} setTabOpen={setTabOpen} />}
    </>
  );
}

const Container = styled.nav`
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
  align-items: center;
  svg {
    margin: 0 15px;
  }
`;
