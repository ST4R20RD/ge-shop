import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Navbar() {
  return (
    <Container className="">
      <NavbarDiv className="max-w-screen-xl m-auto">
        <Link to="/">
          <Logo>
            <MdOutlineDiscount />
            <h1>GE SHOP</h1>
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
    </Container>
  );
}

const Container = styled.div`
  background-color: #3e424b;
  position: sticky;
  top: 0;
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  color: #928e85;
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
