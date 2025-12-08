// src/Header.tsx
'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, MotionConfig } from 'framer-motion'
import LogoImg from '../public/logo.svg' // caminho relativo conforme seu projeto

/* ---------- Styled ---------- */

const LogoFixed = styled.img`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 95px;
  height: 76px;
  z-index: 1200;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 80px;
    height: 64px;
  }

  @media (max-width: 480px) {
    width: 64px;
    height: 52px;
  }
`

const Navbar = styled.header<{ height?: string }>`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  max-width: 920px;
  height: ${(p) => p.height || '64px'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  padding: 0 24px;
  transition: width 0.25s ease, height 0.25s ease, backdrop-filter 0.2s ease;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    width: calc(100% - 32px);
    height: auto;
    padding: 8px 16px;
    gap: 8px;
    flex-direction: column;
    align-items: stretch;
  }
`

const Links = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  a {
    color: #0b0b0b;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-size: 16px;
    transition: opacity 0.18s;
  }

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-height: ${(p) => (p.open ? '320px' : '0')};
    transition: max-height 0.28s ease;
    gap: 12px;

    a { color: #0b0b0b; padding: 6px 0; }
  }
`

const MobileHamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
    align-self: center;
    position: absolute;
    left: 16px;
    top: 12px;
  }
`

/* ---------- Animated Hamburger (framer) ---------- */

const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({ onClick, active }) => {
  const VARIANTS = {
    top: { open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } },
    middle: { open: { opacity: 0 }, closed: { opacity: 1 } },
    bottom: { open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }
  }

  return (
    <MotionConfig transition={{ duration: 0.36, ease: 'easeInOut' }}>
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={onClick}
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          border: 'none',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        aria-label="Toggle menu"
      >
        <motion.span style={{ display: 'block', width: 24, height: 2, background: '#000', marginBottom: 5 }} variants={VARIANTS.top} />
        <motion.span style={{ display: 'block', width: 24, height: 2, background: '#000', marginBottom: 5 }} variants={VARIANTS.middle} />
        <motion.span style={{ display: 'block', width: 24, height: 2, background: '#000' }} variants={VARIANTS.bottom} />
      </motion.button>
    </MotionConfig>
  )
}

/* ---------- Component ---------- */

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <LogoFixed src={LogoImg} alt="Logo" />

      <Navbar>
        <MobileHamburgerWrapper>
          <AnimatedHamburgerButton onClick={() => setOpen((v) => !v)} active={open} />
        </MobileHamburgerWrapper>

        <Links open={open}>
          <li><a href="#section-01">Home</a></li>
          <li><a href="#section-02">Sobre</a></li>
          <li><a href="#section-03">Projetos</a></li>
          <li><a href="#section-04">Contato</a></li>
        </Links>
      </Navbar>
    </>
  )
}

export default Header
