import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import LogoImg from "../public/logo.svg";

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

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo fixa */}
      <img
        src={LogoImg}
        alt="Logo"
        className="fixed top-4 left-4 z-50 w-24 h-20 sm:w-20 sm:h-16"
      />

      {/* Navbar */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-3/5 max-w-lg bg-white/20 backdrop-blur-lg rounded-2xl shadow-md flex justify-center items-center h-16 sm:w-4/5 sm:flex-col sm:h-auto sm:p-2 z-40">
        
        {/* Hamburger apenas em mobile */}
        <div className="block sm:hidden absolute right-4">
          <AnimatedHamburgerButton onClick={() => setMenuOpen(!menuOpen)} active={menuOpen} />
        </div>

        {/* Links da navbar */}
        <ul
          className={`flex gap-8 list-none text-white font-medium text-lg sm:flex-col sm:w-full sm:overflow-hidden transition-max-height duration-300 ${
            menuOpen ? "max-h-64 mt-2" : "max-h-0"
          }`}
        >
          <li><a href="#section-01" className="hover:opacity-70">Home</a></li>
          <li><a href="#section-02" className="hover:opacity-70">Sobre</a></li>
          <li><a href="#section-03" className="hover:opacity-70">Projetos</a></li>
          <li><a href="#section-04" className="hover:opacity-70">Contato</a></li>
        </ul>
