import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import LogoImg from "../public/logo.svg"; 
// Importe o LogoImg corretamente, assumindo que está na pasta public

// =========================================================================
// 1. Componente de Ícone Hamburguer Animado (Usa Tailwind para Layout)
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
        // Aplicando classes Tailwind para o botão do ícone
        className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        <motion.span
          variants={VARIANTS.top}
          // Usando bg-white para cor e mb-1.5 para espaçamento (5px ~= 0.375rem -> 1.5)
          className="block w-[30px] h-[3px] bg-white mb-1.5" 
        />
        <motion.span
          variants={VARIANTS.middle}
          className="block w-[30px] h-[3px] bg-white mb-1.5"
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
// 2. Componente Principal da Navbar
// =========================================================================

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (menuOpen) setMenuOpen(false); 
    }
  };

  // Nomes das seções para a navegação
  const navItems = ['Home', 'Sobre', 'Projetos', 'Contato'];

  return (
    <>
      {/* 1. Logo (Fixo à Esquerda) */}
      <a 
        href="#top" 
        // fixed: Posição fixa. top-10: 40px (10 * 0.25rem). left-[120px]: Valor customizado. z-[1001]: Z-index alto.
        className="fixed top-10 left-[120px] w-[95px] h-[76px] z-[1001] transition-all duration-300
                   md:w-[80px] md:h-[64px] md:left-10
                   sm:left-5" // Ajustando para telas menores
        onClick={() => scrollToSection('top')}
      >
        <img src={LogoImg} alt="Logo" className="w-full h-full" />
      </a>

      {/* 2. Container da Navbar (Centralizado, Blur, Desktop) */}
      <header className="fixed top-10 left-1/2 -translate-x-1/2 z-1000 
                         h-[60px] w-[60%] max-w-[500px] rounded-full p-2
                         bg-white bg-opacity-15 backdrop-blur-md shadow-lg
                         flex justify-center items-center 
                         transition-all duration-300
                         // Ajuste para mobile: visibilidade e posicionamento. 
                         // No mobile, a navbar centralizada pode não ser ideal se a logo é separada.
                         // Vamos esconder a navbar central no mobile, e usar apenas a Logo e o Hamburger
                         max-md:hidden">

        {/* Links de Navegação (Visível Apenas no Desktop) */}
        <nav className="flex"> 
          <ul className="flex gap-8 list-none p-0 m-0">
            {navItems.map((item, index) => (
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
      </header>

      {/* 3. Container da Barra Mobile (Apenas Logo e Hamburger) */}
      <div className="fixed top-10 right-5 z-1000 md:hidden max-md:right-5 max-md:top-8 max-sm:right-4 max-sm:top-4">
        <AnimatedHamburgerButton 
          onClick={() => setMenuOpen(!menuOpen)} 
          active={menuOpen} 
        />
      </div>

      {/* 4. Menu Lateral (Mobile: Fixo e Desliza) */}
      <nav 
        // fixed inset-0: ocupa toda a tela. z-[999]: abaixo da logo/header
        className={`fixed inset-0 z-[999] md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)} // Clica no overlay para fechar
      >
        {/* Overlay escuro */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-70' : 'opacity-0'}`}></div>

        {/* Conteúdo do Menu Lateral */}
        <div 
          // Ajusta a posição da direita e a largura (w-2/3)
          className={`absolute top-0 right-0 h-full w-2/3 bg-[#00171F] p-8 transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()} // Impede que cliques na sidebar fechem o menu
        >
          <ul className="flex flex-col space-y-4 list-none p-0 mt-20">
            {navItems.map((item, index) => (
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