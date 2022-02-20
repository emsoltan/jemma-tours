import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 3.5rem;
  right: 4.5rem;
  z-index: 20;
  display: none;

  @media (max-width: 37.5em) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 3.5rem;
    right: 6rem;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--grey-dark-3)" : "var(--grey-light-2)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavLinks open={open} />
    </>
  );
};

export default Burger;
