'use client'

import React, { useState } from "react";
import LogoImg from "../public/logo.svg";




// ===== Header Component =====
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <img 
        src={LogoImg} 
        alt="Logo" 
        className="
          fixed top-40 left-120 z-50
          w-24 h-20
          md:w-20 md:h-16
          sm:w-16 sm:h-14
        "
        
        />

      <HeaderContainer>
        <HamburgerWrapper>
          <AnimatedHamburgerButton onClick={() => setMenuOpen(!menuOpen)} active={menuOpen} />
        </HamburgerWrapper>

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
    </>
  );
};

export default Header;