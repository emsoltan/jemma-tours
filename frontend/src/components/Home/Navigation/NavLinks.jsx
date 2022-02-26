import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 50%;
  justify-content: space-between;
  letter-spacing: 2px;
  text-align: center;
  align-items: center;
  li a,
  li a:active,
  li a:visited {
    line-height: 3;
    padding: 0.75rem 1.2rem;
    /* margin-right: 1rem; */
    color: var(--black);
    text-transform: uppercase;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 1.5rem;
  }
  li:hover,
  li:active {
    transform: translateY(-2px);
    transition: all 0.3s ease-in-out;
    border-radius: 0.75rem;
    /* box-shadow: 0.3rem 0.3rem 1.5rem var(--grey-dark);
    border: none; */
    /* text-shadow: 0.3rem 0.3rem 1.5rem var(--grey-dark); */
    background-color: var(--bkg-shadow-green);
    text-shadow: 0.15rem 0.25rem var(--bkg-shadow-black);
  }
  @media (max-width: 37.5em) {
    flex-flow: column nowrap;
    background-color: var(--grey-light-1);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    max-width: 20rem;
    padding: 10rem 1rem;
    transition: transform 0.3s ease-in-out;
    justify-content: space-around;
    z-index: 200;
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
      cursor: pointer;
      font-family: inherit;
      padding: 1rem 2.5rem;
    }
  }
`;

const NavLinks = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/" onClick={() => setOpen(!open)}>
          Home
        </a>
      </li>
    
      <li>
        <a href="/tours" onClick={() => setOpen(!open)}>
          Tours
        </a>
      </li>
      <li>
        <a href="/login" onClick={() => setOpen(!open)}>
          Login
        </a>
      </li>
      <li>
        <a href="/signup" onClick={() => setOpen(!open)}>
          signup
        </a>
      </li>
    </Ul>
  );
};

export default NavLinks;
