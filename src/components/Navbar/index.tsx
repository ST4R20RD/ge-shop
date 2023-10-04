import { useEffect, useState } from "react";
import { FaUser, FaSearch, FaReact } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDiscount } from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetAllCategories } from "../../lib/api-hooks";

export function Navbar() {
  const [tapOpen, setTabOpen] = useState<boolean>(false);
  const [allCategories, getAllCategories] = useGetAllCategories();

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="bg-slate-800">
      <NavbarDiv className="max-w-screen-xl m-auto text-stone-400">
        <div className="flex items-center">
          <button onClick={() => setTabOpen(!tapOpen)}>
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
      {tapOpen && (
        <div className="flex flex-col bg-zinc-300 px-80 py-5">
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
        </div>
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
