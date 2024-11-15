import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>MyApp</Logo>
    <NavLinks>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;