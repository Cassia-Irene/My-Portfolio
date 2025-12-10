import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { motion } from "framer-motion";
import StarBorder from "./components/StarBorder";
import LogoImg from "../public/logo.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("PT");

  const navItems = [
    { name: lang === "PT" ? "HOME" : "HOME", id: "section-01" },
    { name: lang === "PT" ? "SOBRE MIM" : "ABOUT", id: "section-02" },
    { name: lang === "PT" ? "HABILIDADES" : "SKILLS", id: "section-03" },
    { name: lang === "PT" ? "PROJETOS" : "PROJECTS", id: "section-04" },
    { name: lang === "PT" ? "CONTATO" : "CONTACT", id: "section-05" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // fecha dropdown
    }
  };

  /* ============ VARIANTES DO DROPDOWN ============ */
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <>
      {/* ======= CONTAINER PRINCIPAL DO HEADER ======= */}
      <div className="
        fixed top-10 w-full z-[1002]
        px-6 lg:px-16 
        flex items-center justify-between
      ">
        
        {/* === LOGO === */}
        <a onClick={() => scrollToSection("top")} className="cursor-pointer">
          <img 
            src={LogoImg} 
            alt="Logo" 
            className="w-[50px] h-[36px] md:w-[60px] md:h-[44px] lg:w-[70px] lg:h-[54px] 2xl:w-[80px] 2xl:h-[64px]"
          />
        </a>

        {/* === NAVBAR DESKTOP (CENTRO) === */}
        <div className="hidden md:block">
          <StarBorder
            as="div"
            color="cyan"
            speed="4s"
            thickness={3}
            className="z-10 w-[100%] max-w-[650px] mx-auto"
          >
            <nav>
              <ul className="flex gap-7 md:gap-4 lg:gap-7 justify-center">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                      className="text-white font-racing text-lg hover:text-[#00e1ff] transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </StarBorder>
        </div>

        {/* === BLOCOS DA DIREITA (Idioma + Hambúrguer) === */}
        <div className="flex items-center gap-4">

          {/* Botão idioma desktop */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="hidden md:flex items-center gap-2 bg-[#FFBB1B] text-[#00171F] px-4 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-xl" />
            {lang}
          </button>

          {/* Botão idioma mobile */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="md:hidden flex items-center gap-1.5 bg-[#FFBB1B] text-[#00171F] text-sm px-2.5 py-1.5 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-sm" />
            {lang}
          </button>

          {/* Botão hambúrguer (mobile) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#FFBB1B] text-2xl"
          >
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>


      {/* ======= DROPDOWN MOBILE COM STAGGER ======= */}
{/* ======= DROPDOWN MOBILE COM STAGGER + STARBORDER ======= */}
<div className="relative md:hidden">
  <StarBorder
    as="div"
    color="cyan"
    speed="4s"
    thickness={4}
    className="top-[90px] left-5 w-[100%] max-w-[360px] z-[1004]"
  >
    <motion.ul
      initial="closed"
      animate={menuOpen ? "open" : "closed"}
      variants={wrapperVariants}
      style={{ originY: "top" }}
    >
      {navItems.map((item) => (
        <motion.li key={item.id} variants={itemVariants}>
          <button
            onClick={() => scrollToSection(item.id)}
            className="text-white font-racing text-base w-full text-left p-0.5 hover:text-[#00e1ff]"
          >
            {item.name}
          </button>
        </motion.li>
      ))}

      <motion.li variants={itemVariants}>
        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-3 py-2 bg-[#FFBB1B] text-[#00171F] font-racing rounded-lg hover:bg-yellow-600 transition text-sm"
        >
          {lang === "PT" ? "VER CURRÍCULO" : "SEE RESUME"}
        </a>
      </motion.li>
    </motion.ul>
  </StarBorder>
</div>

    </>
  );
};


export default Header;
