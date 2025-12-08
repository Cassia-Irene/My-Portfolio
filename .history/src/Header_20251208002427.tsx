import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
// Nota: O path do LogoImg foi ajustado, se necessário, use o path correto.
// Por exemplo: import LogoImg from '/logo.svg'; (Se estiver na pasta public)
// Ou mantenha o caminho relativo:
import LogoImg from "../public/logo.svg"; 

// =========================================================================
// Componente de Ícone Hamburguer Animado (Reutiliza a lógica do framer-motion)
// =========================================================================

interface AnimatedHamburgerProps {
  onClick: () => void;
  active: boolean;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerProps> = ({ onClick, active }) => {
  const VARIANTS = {
    top:    { open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } },
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
        aria-label="Toggle Menu"
      >
        <motion.span
          variants={VARIANTS.top}
          className="block w-[30px] h-[3px] bg-white mb-[5px]"
        />
        <motion.span
          variants={VARIANTS.middle}
          className="block w-[30px] h-[3px] bg-white mb-[5px]"
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="block w-[30px] h-[3px] bg-white"
        />
      </motion.button>
    </MotionConfig>
  );
};

// =========================================================================
// Componente Principal da Navbar
// =========================================================================

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para simular o scroll (mantida por conveniência)
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Fecha o menu após a navegação no mobile
      if (menuOpen) setMenuOpen(false); 
    }
  };

  return (
    <>
      {/* ===== 1. Logo (Fixo à Esquerda) ===== */}
      <a 
        href="#top" 
        className="fixed top-10 left-[120px] w-[95px] h-[76px] z-[1001] transition-all duration-300
                   md:w-[80px] md:h-[64px] md:left-[40px]
                   sm:w-[70px] sm:h-[56px] sm:left-[20px]"
        onClick={() => scrollToSection('top')}
      >
        <img src={LogoImg} alt="Logo" className="w-full h-full" />
      </a>

      {/* ===== 2. Container da Navbar (Centralizado, Blur, Desktop) ===== */}
      <header className="fixed top-10 left-1/2 -translate-x-1/2 z-1000 
                         h-[60px] w-[60%] max-w-[500px] rounded-full p-2
                         bg-white bg-opacity-15 backdrop-blur-md shadow-lg
                         flex justify-center items-center 
                         max-md:w-[80%] max-md:h-[60px] max-md:px-2">

        {/* Links de Navegação (Visível no Desktop: hidden max-md:block) */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 list-none p-0 m-0">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
              <li key={item}>
                <a 
                  href={`#section-0${index + 1}`} 
                  className="text-white font-inter font-medium text-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(`section-0${index + 1}`);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Hamburger (Visível apenas no Mobile/Tablet: md:hidden) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-5 md:hidden">
          <AnimatedHamburgerButton 
            onClick={() => setMenuOpen(!menuOpen)} 
            active={menuOpen} 
          />
        </div>
      </header>

      {/* ===== 3. Menu Lateral para Mobile/Tablet (Dropdown) ===== */}
      <nav 
        className={`fixed inset-0 z-[999] md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)} // Clica no overlay para fechar
      >
        <div 
          className={`absolute top-0 right-0 h-full w-2/3 bg-[#00171F] p-8 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Impede que cliques na sidebar fechem o menu
        >
          <ul className="flex flex-col gap-6 list-none p-0 mt-20">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
              <li key={item}>
                <a 
                  href={`#section-0${index + 1}`} 
                  className="text-white text-xl font-medium hover:text-[#FFBB1B] block py-2"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(`section-0${index + 1}`);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;