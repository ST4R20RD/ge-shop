import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Tab } from "./Tab";
import { SearchBar } from "../SearchBar";
import { CurrencySelect } from "../Footer/CurrencySelect";
import { useGetAllCategories } from "../../lib/api-hooks";
import { FiMenu } from "react-icons/fi";

export function Navbar() {
  const [tabOpen, setTabOpen] = useState<boolean>(false);
  const [, /* allCategories */ getAllCategories] = useGetAllCategories();
  const allCategories = ["Men", "Woman", "Accessories", "Gift & Sales"];

  const handleTabToggle = () => setTabOpen(!tabOpen);
  const handleTabClose = () => setTabOpen(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!scrollingDown || currentScrollPos === 0);
      setIsScrolled(currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container
        visible={visible}
        isScrolled={isScrolled}
        className={`transition-all ${isScrolled ? "bg-neutral-600" : "bg-transparent"} ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-black h-8">
          <div className="flex justify-between max-w-screen-2xl m-auto px-2 py-1 text-white font-grotesque font-medium">
            <span>Free returns within 60 days</span>
            <div className="md:flex hidden">
              <NavLink to="/Signup-Login">Log in</NavLink>
            </div>
          </div>
        </div>
        <NavbarDiv className="h-14 max-w-screen-2xl m-auto text-white font-inter font-normal text-xs">
          <button onClick={handleTabToggle} className="md:hidden flex items-center mx-3">
            <FiMenu size={30} color="white" />
          </button>
          <nav className="md:block hidden">
            {allCategories.map((category, index) => {
              return (
                <NavLink
                  to={`/category/${category.toString()}`}
                  onClick={handleTabClose}
                  className="mx-[2vw]"
                  key={index}
                >
                  {category}
                </NavLink>
              );
            })}
          </nav>
          <Logo to="/" onClick={handleTabClose} className="absolute left-1/2">
            <img src="https://i.ibb.co/bKqzpbv/AMIGOLogo-Dark.png" alt="logo" />
          </Logo>
          <RightSide className="text-2xl">
            <div className="hidden md:flex md:justify-between md:items-center">
              <SearchBar />
            </div>
            <HiOutlineShoppingBag />
          </RightSide>
        </NavbarDiv>
      </Container>
      {tabOpen && <Tab tabOpen={tabOpen} setTabOpen={setTabOpen} allCategories={allCategories} />}
    </div>
  );
}

interface Props {
  visible: boolean;
  isScrolled: boolean;
}

const Container = styled.header<Props>`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 30px;
  transform: translate(-50%);
  svg {
    font-size: 30px;
    margin: 5px;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    margin: 0 15px;
  }
`;
