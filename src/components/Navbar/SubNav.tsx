import { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  tabOpen: boolean;
  setTabOpen: Dispatch<SetStateAction<boolean>>;
  allCategories: string[];
}

export default function SubNav({ tabOpen, setTabOpen, allCategories }: Props) {
  const handleTabToggle = () => setTabOpen(!tabOpen);
  const handleTabClose = () => setTabOpen(false);

  return (
    <div className="hidden md:block bg-teal-700 border-zinc-300 border-y-2">
      <div className="flex items-center justify-around max-w-screen-xl m-auto text-prussian font-inter">
        <button onClick={handleTabToggle} className="flex items-center mx-3">
          <FiMenu size={30} color="white" />
          <p className="font-bold">All</p>
        </button>
        {allCategories.map((category, index) => {
          return (
            <Link
              to={`/category/${category.toString()}`}
              onClick={handleTabClose}
              className="p-1 w-fit hover:underline"
              key={index}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
