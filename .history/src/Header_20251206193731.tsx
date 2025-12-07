'use client'

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import LogoImg from "../public/logo.svg";
import Image from "next/image";

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
        <motion.span
          variants={VARIANTS.top}
          className="block w-7 h-0.5 bg-white mb-1"
        />
        <motion.span
          variants={VARIANTS.middle}
          className="block w-7 h-0.5 bg-white mb-1"
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="block w-7 h-0.5 bg-white"
        />
      </motion.button>
    </MotionConfig>
  );
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo fixa no canto superior esquerdo */}
      <div className="fixed top-5 left-5 z-50 w-24 h-20 sm:w-20 sm:h-16 xs:w-16 xs:h-14">
        <Image src={LogoImg} alt="Logo" width={95} height={76} className="w-full h-full object-contain"/>
      </div>

      {/* Navbar centralizada */}
      <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-40 w-3/5 max-w-lg h-16 bg-white/15 backdrop-blur-md rounded-2xl shadow-md flex justify-center items-center px-8 sm:w-4/5 sm:h-auto sm:flex-col sm:px-4">
        
        {/* Hamburger (aparece apenas em telas pequenas) */}
        <div className="hidden md:block absolute right-5">
          <AnimatedHamburgerButton onClick={() => setMenuOpen(!menuOpen)} active={menuOpen}/>
        </div>

        {/* Links da Navbar */}
        <ul className={`flex gap-8 list-none text-white font-medium md:flex-col md:w-full md:overflow-hidden md:transition-max-height md:duration-300 ${menuOpen ? "max-h-64 mt-2" : "max-h-0"}`}>
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
