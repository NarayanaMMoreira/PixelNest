import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  h1 {
    color: #ffffff;
    margin: 0;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    right: 0;
    height: 90vh;
    width: 100%;
    background-color: var(--primary-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateX(0);
    }
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: var( --secondary-color);
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border-radius: 20px;
  color: var(--primary-color) !important;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: 0.3s;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <h1>PixelNest</h1>
      </Logo>
      <NavLinks className={isOpen ? 'open' : ''}>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/galeria">Galeria</NavLink></NavItem>
        <NavItem><NavLink to="/educa-mais">Educa+</NavLink></NavItem>
        <NavItem><LoginButton to="/login">Fazer Login</LoginButton></NavItem>
      </NavLinks>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
    </NavbarContainer>
  );
};

export default Navbar;
