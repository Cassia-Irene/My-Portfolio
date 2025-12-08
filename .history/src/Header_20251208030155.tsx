import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import LogoImg from "../public/logo.svg";

// =========================================================================
// Navbar
// =========================================================================

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({
    onClick,
    active,
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-10 h-10"
      aria-label={active ? "Fechar Menu" : "Abrir Menu"}
    >
      {active ? (
        <IoClose className="text-3xl text-white" />
      ) : (
        <RxHamburgerMenu className="text-2xl text-[#FFBB1B]" />
      )}
    </button>
  );

  return (
    <>
      {/* ===== LOGO ===== */}
      <a
        href="#top"
        className="fixed top-10 left-[120px] w-[95px] h-[76px] z-[1001] 
                   md:w-[80px] md:h-[64px] md:left-10 sm:left-5"
        onClick={() => scrollToSection("top")}
      >
        <img src={LogoImg} alt="Logo Cássia Irene" className="w-full h-full" />
      </a>

      {/* ===== NAVBAR COM BORDA ANIMADA (DESKTOP) ===== */}
      <div className="
        fixed top-10 left-1/2 -translate-x-1/2 
        w-[60%] max-w-[650px] h-[60px] z-10
        max-md:hidden
      ">
        {/* BORDA ANIMADA */}
        <div
          className="
            absolute inset-0 rounded-full p-[3px]
            bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500
            animate-border-move 
            [mask-composite:exclude] 
            [mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)]
          "
        ></div>

        {/* NAVBAR REAL */}
        <header
          className="
            relative z-[2] 
            bg-[#fff]/20 backdrop-blur-xl shadow-xl 
            rounded-full h-full p-2 
            flex justify-center items-center
          "
        >
          <nav className="flex">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="
                      text-white font-inter font-medium text-lg 
                      opacity-80 hover:opacity-100 hover:text-[#FFBB1B]
                      transition-all duration-300
                    "
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>

      {/* ===== MENU MOBILE ===== */}
      <div className="fixed top-10 right-5 z-[1000] md:hidden">
        <AnimatedHamburgerButton
          onClick={() => setMenuOpen(!menuOpen)}
          active={menuOpen}
        />
      </div>

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
          <p className="text-white text-lg font-bold">Menu</p>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#FFBB1B]"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="
                  text-white text-xl font-medium 
                  hover:text-[#FFBB1B] py-2
                "
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
              className="
                px-4 py-2 bg-[#FFBB1B] text-[#00171F] 
                font-bold rounded-lg 
                hover:bg-yellow-600
              "
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
