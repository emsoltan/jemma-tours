import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "../../../Assets/logo-final.svg";

const Nav = styled.nav`
  width: 90%;
  margin: 0 auto;
  max-height: 7rem;
  /* padding-right:  1.8rem; */
  display: flex;
  justify-content: space-between;

  .nav-logo {
    max-height: 7rem;
  }
`;

const Navbar = () => {
  return (
    // <Nav>
    //   <div className="logo"><img src={logo} alt="logo" className="nav-logo" /></div>
    //   <NavMenu />
    // </Nav>
    <nav clasee="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>
      <div class="navbar__menu">
        {/* BURGER MENU GOES HERE = top */}
        {/* <StyledBurger open={open} onClick={() => setOpen(!open)} class="navbar__burger">
          <div class="burger-slice" />
          <div />
          <div />
        </StyledBurger> */}

        {/* NAVIGATION LINKS GO HERE = bottom */}
        <ul open={open} class="navbar__list">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
