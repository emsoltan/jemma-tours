import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import logo from "./../../../assets/wave-haikei (4) 7.svg";


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
    <Nav>
      <div className="logo"><img src={logo} alt="logo" className="nav-logo" /></div>
      <NavMenu />
    </Nav>
  );
};

export default Navbar;
