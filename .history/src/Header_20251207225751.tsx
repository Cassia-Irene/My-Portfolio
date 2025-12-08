'use client'

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import LogoImg from "../public/logo.svg";

// ===== Botão Hamburger =====
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
        className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
      >
        <motion.span className="block w-7 h-0.5 mb-1 bg-white" variants={VARIANTS.top} />
        <motion.span className="block w-7 h-0.5 mb-1 bg-white" variants={VARIANTS.middle} />
        <motion.span className="block w-7 h-0.5 bg-white" variants={VARIANTS.bottom} />
      </motion.button>
    </MotionConfig>
  );
};

// ===== Header Component =====
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo fixa no canto superior direito */}
      <img
        src={LogoImg}
        alt="Logo"
        className="
          fixed top-4 right-4 z-50 
          w-24 h-20 
          md:w-20 md:h-16 
          sm:w-16 sm:h-14
        "
      />

      {/* Navbar */}
      <header className="
        fixed top-4 right-4 z-40
        bg-white/20 backdrop-blur-lg shadow-md rounded-2xl
        flex justify-center items-center
        h-16 w-3/5 max-w-lg
        sm:w-4/5 sm:h-auto sm:flex-col sm:p-2
      ">
        {/* Hamburger apenas em mobile */}
        <div className="sm:block hidden absolute left-4">
          <AnimatedHamburgerButton onClick={() => setMenuOpen(!menuOpen)} active={menuOpen} />
        </div>

        {/* Links da navbar */}
        <ul className={`
          flex gap-8 list-none text-white font-medium text-lg
          sm:flex-col sm:w-full sm:overflow-hidden sm:transition-[max-height] sm:duration-300
          ${menuOpen ? "max-h-64 mt-2" : "max-h-0"}
        `}>
          <li><a href="#section-01" className="hover:opacity-70">Home</a></li>
          <li><a href="#section-02" className="hover:opacity-70">Sobre</a></li>
          <li><a href="#section-03" className="hover:opacity-70">Projetos</a></li>
          <li><a href="#section-04" className="hover:opacity-70">Contato</a></li>
        </ul>
      </header>
    </>
  );
};

export default Header;
