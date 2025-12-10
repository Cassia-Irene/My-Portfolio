import React, { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import StarBorder from "./components/StarBorder";
import LogoImg from "../public/logo.svg";

/* === COMPONENTE ANIMADO DO TEXTO DO BOTÃO DE IDIOMA === */
const AnimatedLangText = ({ text }: { text: string }) => {
  return (
    <div className="relative w-[22px] h-[20px] overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

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
        <div className="flex items-center gap-3">

          {/* Botão idioma desktop */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="hidden md:flex items-center gap-2 bg-[#FFBB1B] text-[#00171F] px-4 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-xl" />
            <AnimatedLangText text={lang} />
          </button>

          {/* Botão idioma mobile */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="md:hidden flex items-center gap-1.4 bg-[#FFBB1B] text-[#00171F] text-sm px-2.5 py-1.5 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-lg" />
            <AnimatedLangText text={lang} />
          </button>

          {/* Botão hambúrguer (mobile) */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              animate={menuOpen ? "open" : "closed"}
              className="md:hidden relative h-7 w-7 flex flex-col justify-between items-center px-1 py-1.5"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="block h-1 w-full bg-[#FFBB1B] rounded"
              />
              <motion.span
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                className="block h-1 w-full bg-[#FFBB1B] rounded"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
                className="block h-1 w-full bg-[#FFBB1B] rounded"
              />
            </motion.button>
          </div>
        </div>


      {/* ======= DROPDOWN MOBILE COM STAGGER ======= */}
      <div className="relative md:hidden">
        
        <motion.ul
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={wrapperVariants}
          style={{
            originY: "top",
          }}
          className="
            absolute top-[90px]
            inset-x-6 max-w-[550px] w-375 bg-[#FFF]/20
            backdrop-blur-xl shadow-xl border-black
            rounded-xl overflow-hidden
            p-3 flex flex-col gap-3
            z-[1004]
          "
        >
          {navItems.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white font-racing text-base w-full text-left"
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
      </div>
    </>
  );
};


export default Header;
