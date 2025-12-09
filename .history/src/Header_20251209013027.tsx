import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import StarBorder from "./components/StarBorder";

// Importe sua logo real
import LogoImg from "../public/logo.svg"; 

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("PT");

  const navItems = [
    { name: "HOME", id: "section-01" },
    { name: "SOBRE MIM", id: "section-02" },
    { name: "HABILIDADES", id: "section-03" },
    { name: "PROJETOS", id: "section-04" },
    { name: "CONTATO", id: "section-05" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({ onClick, active }) => {
    return (
      <button 
        onClick={onClick} 
        className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
        aria-label={active ? "Fechar Menu" : "Abrir Menu"}
      >
        {active ? (
          <IoClose className="text-3xl text-white" />
        ) : (
          <RxHamburgerMenu className="text-2xl text-[#FFBB1B]" /> 
        )}
      </button>
    );
  };

  return (
    <>
      {/* LOGO */}
      <a 
        href="#top"
        className="fixed top-12 left-16 w-[95px] h-[76px] z-[1001] transition-all duration-300
                   md:w-[80px] md:h-[64px] md:left-10 
                   sm:left-5" 
        onClick={() => scrollToSection('top')}
      >
        <img src={LogoImg} alt="Logo Cássia Irene" className="w-full h-full" />
      </a>

      {/* BOTÃO DE IDIOMA — DESKTOP (CANTO SUPERIOR DIREITO) */}
      <button
        onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
        className="
          hidden md:flex
          fixed top-12 right-16
          z-[1001]
          bg-[#FFBB1B] text-[#00171F]
          px-4 py-2 rounded-xl font-bold
          hover:bg-yellow-500 transition-all duration-300
        "
      >
        {lang}
      </button>

      {/* BOTÃO DE IDIOMA — MOBILE (CANTO SUPERIOR ESQUERDO) */}
      <button
        onClick={() => setLang(lang === "PT" ? "EN" : "PT")}
        className="
          md:hidden
          fixed top-4 left-4
          z-[1001]
          bg-[#FFBB1B] text-[#00171F]
          px-3 py-1.5 rounded-lg font-bold
          hover:bg-yellow-500 transition-all duration-300
        "
      >
        {lang}
      </button>

      {/* NAVBAR CENTRAL DESKTOP */}
      <StarBorder
        as="div"
        color="cyan"
        speed="4s"
        className="fixed top-12 left-1/2 -translate-x-1/2 z-10 w-[60%] max-w-[600px] "
      >
        <header className="hidden md:flex justify-center items-center">
          <nav>
            <ul className="flex gap-7">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className="text-white font-racing text-lg hover:opacity-100 hover:text-[#00e1ff] transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </StarBorder>

      {/* BOTÃO HAMBURGER MOBILE */}
      <div className="fixed top-4 right-5 z-[1001] md:hidden">
        <AnimatedHamburgerButton 
          onClick={() => setMenuOpen(!menuOpen)} 
          active={menuOpen} 
        />
      </div>

      {/* MENU LATERAL MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm 
                    bg-[#00171F] shadow-lg z-[1002] 
                    transform transition-transform duration-300 
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                    md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="font-bold text-lg text-white">Menu</p>
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
                className="text-white text-xl font-medium hover:text-[#FFBB1B] block py-2 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
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
              className="inline-block px-4 py-2 bg-[#FFBB1B] text-[#00171F] font-bold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              VER CURRÍCULO
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
