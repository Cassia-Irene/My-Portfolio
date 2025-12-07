// src/SidebarNavigation.tsx

import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollToContact: () => void;
}

const SidebarNavigationMenu: React.FC<SidebarProps> = ({ isOpen, setIsOpen, scrollToContact }) => {
  // Classes para a barra lateral (aparece da direita no mobile)
  const sidebarClasses = 
    "fixed top-0 right-0 h-full w-64 bg-[#00171F] z-50 transform transition-transform duration-300 ease-in-out " +
    (isOpen ? "translate-x-0" : "translate-x-full");

  // Classes para a sobreposição escura
  const overlayClasses = 
    "fixed inset-0 bg-black bg-opacity-50 z-40 " +
    (isOpen ? "block" : "hidden");

  // Funções de navegação para fechar o menu após o clique
  const handleNavClick = (id: string) => {
    setIsOpen(false);
    // Lógica de rolagem (você precisará de uma função para isso, similar à do Contato)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Sobreposição */}
      <div className={overlayClasses} onClick={() => setIsOpen(false)}></div>

      {/* Barra Lateral */}
      <div className={sidebarClasses}>
        <div className="flex justify-end p-4">
          {/* Ícone para fechar o menu (você pode usar um ícone 'X' do MUI) */}
          <button onClick={() => setIsOpen(false)} className="text-white text-3xl">
             &times; {/* Ícone 'X' simples por enquanto */}
          </button>
        </div>
        
        {/* Itens do Menu */}
        <nav className="flex flex-col space-y-4 p-4">
          <a onClick={() => handleNavClick('section-01')} className="text-white font-medium hover:text-[#FFBB1B] cursor-pointer">
            SOBRE MIM
          </a>
          <a onClick={() => handleNavClick('section-02')} className="text-white font-medium hover:text-[#FFBB1B] cursor-pointer">
            SKILLS & HABILIDADES
          </a>
          <a onClick={() => handleNavClick('section-03')} className="text-white font-medium hover:text-[#FFBB1B] cursor-pointer">
            PROJETOS
          </a>
          {/* O botão Contato agora pode ser um link/botão no final do menu */}
          <button 
            onClick={() => { setIsOpen(false); scrollToContact(); }} 
            className="mt-6 w-full text-white font-medium text-lg border-2 border-[#FFBB1B] rounded-[10px] p-2 hover:bg-[#FFBB1B]"
          >
            CONTATO
          </button>
        </nav>
      </div>
    </>
  );
};


// export default SidebarNavigation;