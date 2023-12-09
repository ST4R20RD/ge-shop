import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tab } from "./Tab";
import { SearchBar } from "../SearchBar";
import { CurrencySelect } from "./CurrencySelect";
import { useGetAllCategories } from "../../lib/api-hooks";
import SubNav from "./SubNav";
import { FiMenu } from "react-icons/fi";

export function Navbar() {
  const [tabOpen, setTabOpen] = useState<boolean>(false);
  const [allCategories, getAllCategories] = useGetAllCategories();

  const handleTabToggle = () => setTabOpen(!tabOpen);
  const handleTabClose = () => setTabOpen(false);

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className="bg-keppel dark:bg-prussian z-50">
        <NavbarDiv className="h-16 max-w-screen-xl m-auto text-slate-800 dark:text-stone-400">
          <div className="flex items-center">
            <button onClick={handleTabToggle} className="md:hidden flex items-center mx-3">
              <FiMenu size={30} color="white" />
            </button>
            <Link to="/" onClick={handleTabClose}>
              <Logo>
                <MdOutlineDiscount />
                <h1>GE SHOP</h1>
              </Logo>
            </Link>
          </div>
          <RightSide className="text-2xl">
            <div className="hidden md:flex md:justify-between md:items-center">
              <SearchBar />
              <CurrencySelect className="bg-keppel dark:bg-prussian" />
              <Link to="/Signup-Login">
                <FaUser />
              </Link>
            </div>
            <Link to="/Cart">
              <BsCartFill />
            </Link>
          </RightSide>
        </NavbarDiv>
        <SubNav tabOpen={tabOpen} setTabOpen={setTabOpen} allCategories={allCategories} />
      </Container>
      {tabOpen && <Tab tabOpen={tabOpen} setTabOpen={setTabOpen} allCategories={allCategories} />}
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
  a {
    margin: 0 15px;
  }
`;
