import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navbar() {
  return (
    <NavbarDiv>
      <Link to="/">
        <Logo className="w-40">
          <h1>GESHOP</h1>
          <p>SHOP</p>
        </Logo>
      </Link>
      <RightSide className="w-60 text-2xl">
        <TbWorld />
        <FaSearch />
        <Link to="/Signup-Login">
          <FaUser />
        </Link>
        <Link to="/Cart">
          <FaShoppingCart />
        </Link>
      </RightSide>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-color: #000000;
  height: 4rem;
  color: #ffffff;
  background-color: black;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
