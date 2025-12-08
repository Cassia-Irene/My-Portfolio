import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import StarBorder from './components/StarBorder'

// Importe sua logo real.
// Assumindo que seu LogoImg está acessível em '/logo.svg' na pasta public.
import LogoImg from "../public/logo.svg"; 

// =========================================================================
// Componente Navbar Principal (Header)
// =========================================================================

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define os itens do menu com seus IDs de seção
  const navItems = [
    { name: "HOME", id: "section-01" },
    { name: "SOBRE MIM", id: "section-02" },
    { name: "HABILIDADES", id: "section-03" },
    { name: "PROJETOS", id: "section-04" },
    { name: "CONTATO", id: "section-05" },
  ];

  // Função de rolagem para as seções
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Fecha o menu mobile após clicar
    }
  };

  // Ícone Hamburguer/Fechar animado (aprimorando o uso de framer-motion, 
  // embora o código original o tenha simplificado. Vamos manter a simplicidade)
  const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({ onClick, active }) => {
    return (
      <button 
        onClick={onClick} 
        className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer"
        aria-label={active ? "Fechar Menu" : "Abrir Menu"}
      >
        {/* Usando os ícones da biblioteca que você importou (RxHamburgerMenu, IoClose) */}
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
      {/* ===== 1. Logo (Fixo à Esquerda - Fora da barra centralizada) ===== */}
      <a 
        href="#top" 
        // top-10: 40px, left-[120px]: 120px. Ajuste conforme seu design
        className="fixed top-10 left-[120px] w-[95px] h-[76px] z-[1001] transition-all duration-300
                   md:w-[80px] md:h-[64px] md:left-10 
                   sm:left-5" 
        onClick={() => scrollToSection('top')}
      >
        <img src={LogoImg} alt="Logo Cássia Irene" className="w-full h-full" />
      </a>

      {/* ===== 2. Container da Navbar (Centralizado, Blur, Desktop) ===== */}
      <StarBorder
        color="#FFBB1B" speed="6s" className="mx-auto w-[60%] max-w-[650px]"
      >
        <header className="fixed top-10 left-1/2 -translate-x-1/2 z-10
                          h-[60px] w-[60%] max-w-[650px] rounded-full p-2
                          bg-[#fff]/20 backdrop-blur-xl shadow-xl
                          flex justify-center items-center transition-all duration-300
                          max-md:hidden"> {/* Oculta no mobile/tablet */}

          {/* Links de Navegação (Desktop) */}
          <nav className="flex">
            <ul className="flex gap-8 list-none p-0 m-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    // text-white: Cor do texto. hover:text-[#FFBB1B]: Cor de destaque.
                    className="text-white font-inter font-medium text-lg opacity-80 hover:opacity-100 hover:text-[#FFBB1B] transition-opacity duration-300 cursor-pointer"
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
      </StarBorder>

      {/* 3. Botão Hamburger (Visível apenas no Mobile/Tablet) */}
      <div className="fixed top-10 right-5 z-1000 md:hidden max-md:right-5 max-md:top-8 max-sm:right-4 max-sm:top-4">
        <AnimatedHamburgerButton 
          onClick={() => setMenuOpen(!menuOpen)} 
          active={menuOpen} 
        />
      </div>

      {/* 4. Menu Lateral (Mobile: Overlay) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm 
                    bg-[#00171F] shadow-lg z-[1002] 
                    transform transition-transform duration-300 
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                    md:hidden`} // Garante que a sidebar também não apareça no desktop
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="font-bold text-lg text-white">Menu</p>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-[#FFBB1B] hover:text-white" // Cor de destaque no Fechar
            aria-label="Fechar Menu"
          >
            <IoClose />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <li
              key={item.id}
            >
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
          
          {/* Adicione um link para o CV ou outra ação importante aqui, se desejar */}
          <li className="mt-4">
             <a 
                href="/curriculo.pdf" // Adicione seu path real do PDF
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