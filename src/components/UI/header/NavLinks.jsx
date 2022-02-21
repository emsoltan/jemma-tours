import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  max-width: 65%;
  justify-content: space-between;
  letter-spacing: 2px;
  text-align: center;
  align-items: center;

  li a,
  li a:active,
  li:visited {
    padding: 0.75rem 1.2rem;
    /* margin-right: 1rem; */
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
    box-shadow: 0.3rem 0.3rem 1.5rem var(--grey-dark);
    /* text-shadow:  */
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

const NavLinks = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" onClick={() => setOpen(!open)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setOpen(!open)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/tours" onClick={() => setOpen(!open)}>
          Tours
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setOpen(!open)}>
          contact
        </Link>
      </li>
      <li>
        <Link to="/register" onClick={() => setOpen(!open)}>
          Register
        </Link>
      </li>
    </Ul>
  );
};

export default NavLinks;
