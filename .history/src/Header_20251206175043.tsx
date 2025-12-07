import React, { useState } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go"; // ícone hamburger
import LogoImg from "..public"; // ajuste se necessário

// Container da navbar
const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.3); // transparente
  backdrop-filter: blur(12px); // efeito blur
  border-radius: 50px; // oval
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
  }
`;

// Logo
const Logo = styled.img`
  width: 95px;
  height: 76px;

  @media (max-width: 768px) {
    width: 80px;
    height: 64px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 56px;
  }
`;

// Links da navbar
const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-top: 1rem;
  }
`;

// Item da navbar
const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

// Botão hamburguer
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />

      <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
        <GoThreeBars />
      </HamburgerButton>

      <NavLinks open={menuOpen}>
        <NavItem>
          <a href="#section-01">Home</a>
        </NavItem>
        <NavItem>
          <a href="#section-02">Sobre</a>
        </NavItem>
        <NavItem>
          <a href="#section-03">Projetos</a>
        </NavItem>
        <NavItem>
          <a href="#section-04">Contato</a>
        </NavItem>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
