import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
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
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* ===== HEADER PRINCIPAL ===== */}
      <header
        className="
          fixed top-8 left-1/2 -translate-x-1/2
          w-[90%] max-w-[1100px]
          z-[1000]
        "
      >
        <StarBorder as="div" color="cyan" speed="4s" className="w-full">
          <div className="flex items-center justify-between px-6 py-4">

            {/* === LOGO === */}
            <a
              href="#top"
              onClick={() => scrollToSection("top")}
              className="flex items-center"
            >
              <img src={LogoImg} className="w-[90px]" alt="Logo" />
            </a>

            {/* === NAVBAR DESKTOP === */}
            <nav className="hidden md:flex">
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-white font-racing text-lg hover:text-[#00e1ff] transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* === BOTÕES DESKTOP (idioma) === */}
            <button
              onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
              className="
                hidden md:flex
                bg-[#FFBB1B] text-[#00171F]
                px-4 py-2 rounded-xl font-bold
                hover:bg-yellow-500 transition-all duration-300
              "
            >
              {lang === "PT" ? "EN" : "PT"}
            </button>

            {/* === BOTÕES MOBILE === */}
            <div className="flex md:hidden items-center gap-3">

              {/* Botão de idioma (esquerda) */}
              <button
                onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
                className="bg-[#FFBB1B] text-[#00171F] px-3 py-1.5 rounded-lg font-bold hover:bg-yellow-500 transition-all"
              >
                {lang === "PT" ? "EN" : "PT"}
              </button>

              {/* Hamburguer */}
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <IoClose className="text-3xl text-white" />
                ) : (
                  <RxHamburgerMenu className="text-3xl text-[#FFBB1B]" />
                )}
              </button>
            </div>
          </div>
        </StarBorder>
      </header>

      {/* ===== MENU MOBILE ===== */}
      <div
        className={`
          fixed top-0 right-0 h-full w-2/3 max-w-sm 
          bg-[#00171F] shadow-lg z-[1002] 
          transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="font-bold text-lg text-white">{lang === "PT" ? "Menu" : "Menu"}</p>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#FFBB1B] hover:text-white"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-white text-xl font-medium hover:text-[#FFBB1B]"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              >
                {item.name}
              </a>
            </li>
          ))}

          <li className="mt-4">
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#FFBB1B] text-[#00171F] font-bold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              {lang === "PT" ? "VER CURRÍCULO" : "SEE RESUME"}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
