import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  max-width: 65%;
  justify-content: space-between;
  letter-spacing: 2px;
  align-items: center;

  li a,
  li a:active,
  li:visited {
    padding: 0.75rem 1.2rem;
    margin-right: 1rem;
    color: var(--grey-light-2);
    text-transform: uppercase;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: bold;
  }
  li:hover,
  li:active {
    transform: translateY(-2px);
    transition: all 0.3s ease-in-out;
    text-shadow: 0 0.7rem 1rem black;
  }
  @media (max-width: 37.5em) {
    flex-flow: column nowrap;
    background-color: var(--grey-light-2);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 40%;
    padding: 10rem 1rem;
    transition: transform 0.3s ease-in-out;
    justify-content: space-around;
    text-align: center;

    li a,
    li a:link,
    li a:visited {
      color: var(--grey-dark-3);
      text-transform: uppercase;
      font-size: 1.6rem;
      text-decoration: none;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      /* padding: 1rem 0.5rem; */
    }
  }
`;

const NavLinks = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        {" "}
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/tours">Tours</a>
      </li>
      <li>
        <a href="/contact">contact</a>
      </li>
      <li>
        <a href="/register">Register</a>
      </li>
    </Ul>
  );
};

export default NavLinks;
