import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import styled from "styled-components";

export function Navbar() {
  return (
    <NavbarDiv>
      <Logo className="w-40">
        <h1>GESHOP</h1>
        <p>SHOP</p>
      </Logo>
      <RightSide className="w-60 text-2xl">
        <TbWorld />
        <FaSearch />
        <FaUser />
        <FaShoppingCart />
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
