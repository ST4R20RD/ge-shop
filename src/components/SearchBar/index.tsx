import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import styled, { css, keyframes } from "styled-components";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(timerId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setIsOpen(searchString !== ""), 4000);
    setTimerId(timer);
  };

  const handleChange = (string: string) => {
    setSearchString(string);
  };

  useEffect(() => {
    if (searchString !== "") {
      clearTimeout(timerId);
    }
    handleMouseLeave();
    // eslint-disable-next-line
  }, [searchString]);

  return (
    <Wrapper>
      <SearchBtn
        className="rounded-md md:w-full"
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaSearch />
        <Input
          className="rounded-md ml-4"
          isOpen={isOpen}
          placeholder="Search"
          value={searchString}
          onChange={(e) => handleChange(e.target.value)}
        />
      </SearchBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SearchBtn = styled.button<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (min-width: 768px) {
    ${(props) =>
      props.isOpen
        ? css`
            animation: ${slideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          `
        : css`
            animation: ${slideOut} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          `}
  }
  svg {
    min-width: 24px;
    min-height: 24px;
  }
`;

const slideOut = keyframes`
  0% {
    width: 336px;
  }
  100% {
    width: 54px;
  }
`;

const slideIn = keyframes`
  0% {
    width: 54px;
  }
  100% {
    width: 336px;
  }
`;

const Input = styled.input<{ isOpen: boolean }>`
  padding: 2px 5px;
  &:focus {
    outline: none;
  }
`;
