import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
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
      setMenuOpen(false);
    }
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
        <div className="flex items-center gap-4">

          {/* Botão idioma desktop */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="hidden md:flex items-center gap-2 bg-[#FFBB1B] text-[#00171F] px-4 py-2 rounded-xl font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-xl" />
            {lang === "PT" ? "PT" : "EN"}
          </button>

          {/* Botão idioma mobile */}
          <button
            onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
            className="md:hidden flex items-center gap-1.5 bg-[#FFBB1B] text-[#00171F] text-sm px-2.5 py-1.5 rounded-lg font-bold hover:bg-yellow-500 transition"
          >
            <IoLanguage className="text-sm" />
            {lang === "PT" ? "PT" : "EN"}
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


      {/* ======= MENU MOBILE LATERAL ======= */}
<div className="relative md:hidden">

  {menuOpen && (
    <div
      className="
        absolute right-0 top-20
        w-[100%] max-w-[350px]
        bg-[#00171F] border border-gray-700 
        rounded-xl shadow-xl
        py-3 px-4
        flex flex-col gap-3
        animate-fade-slide
        z-[1004]
      "
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-white text-base text-left hover:text-[#FFBB1B]"
        >
          {item.name}
        </button>
      ))}

      <button
        className="
          mt-2 px-3 py-2
          bg-[#FFBB1B] text-[#00171F]
          font-bold rounded-lg
          hover:bg-yellow-600 transition
          text-sm
        "
      >
        {lang === "PT" ? "VER CURRÍCULO" : "SEE RESUME"}
      </button>
    </div>
  )}
</div>
    </>
  );
};

export default Header;
