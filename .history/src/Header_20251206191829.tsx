'use client'

import React, { useState } from "react";
import styled from "styled-components";
import { motion, MotionConfig } from "framer-motion";
import LogoImg from "../public/logo.svg";

// ===== Container da Navbar =====
const HeaderContainer = styled.header`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  z-index: 1000;

  background: rgba(205, 187, 167, 0.25);
  backdrop-filter: blur(12px);
  border-radius: 50px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
  }
`;

// ===== Logo =====
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

// ===== Nav Links =====
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

// ===== Botão Hamburguer Animado =====
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({ onClick, active }) => {
  const VARIANTS = {
    top: { open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } },
    middle: { open: { opacity: 0 }, closed: { opacity: 1 } },
    bottom: { open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } },
  };

  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <motion.span
          variants={VARIANTS.top}
          style={{ display: "block", width: 30, height: 3, background: "#fff", marginBottom: 5 }}
        />
        <motion.span
          variants={VARIANTS.middle}
          style={{ display: "block", width: 30, height: 3, background: "#fff", marginBottom: 5 }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          style={{ display: "block", width: 30, height: 3, background: "#fff" }}
        />
      </motion.button>
    </MotionConfig>
  );
};

// ===== Header Component =====
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />

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
  );
};

export default Header;

