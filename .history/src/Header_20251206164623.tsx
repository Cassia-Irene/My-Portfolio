import React, { useState } from 'react';

// Importe o componente SidebarNavigation aqui (assumindo que você o moverá para esta pasta)
import { SidebarNavigationMenu } from .'; // Importe conforme a localização real

// Componente Header usando classes Tailwind
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu hamburger

  // Onde você usa styled-components, agora usaremos classes Tailwind:
  
  // HeaderContainer (Fixo, Transparente, com Sombra no Scroll)
  // Nota: Para transparência no topo e mudança no scroll, você usaria useEffect 
  // para alterar a classe 'bg-opacity-X' ou 'bg-transparent' (explicado abaixo).
  // Por simplicidade inicial, vamos deixá-lo semi-transparente:
  const headerClasses = 
    "fixed top-[30px] w-full z-1000 flex justify-between items-center py-0 px-[100px] " +
    "bg-black bg-opacity-10 backdrop-blur-sm rounded-xl transition-all duration-300 " +
    // Media Queries (Versão mobile/tablet)
    "max-lg:w-[84%] max-lg:px-10 " + // 1024px e abaixo
    "max-md:px-10 " +                 // 768px e abaixo
    "max-sm:px-5 max-sm:flex-col max-sm:justify-center max-sm:gap-3 max-sm:top-[15px]"; // 480px e abaixo

  // Logo (Classes de largura/altura Tailwind)
  const logoClasses = 
    "w-[95px] h-[76px] " + 
    "max-lg:w-[80px] max-lg:h-[61px] " +
    "max-md:w-[80px] max-md:h-[64px] " +
    "max-sm:w-[70px] max-sm:h-[56px]";

  // Botão Contato (Estilo do botão mantido, mas com classes Tailwind)
  const buttonClasses =
    "w-[133px] h-[47px] border-2 border-[#FFBB1B] rounded-[10px] bg-transparent text-white " +
    "font-inter font-medium text-[20px] cursor-pointer transition-all duration-300 " +
    "hover:bg-[#FFBB1B] hover:font-medium " +
    // Media Queries
    "max-lg:w-[125px] max-lg:h-[44px] max-lg:text-[18px] " +
    "max-md:w-[120px] max-md:h-[42px] max-md:text-[18px] " +
    "max-sm:w-full max-sm:h-[40px] max-sm:text-[16px]";
    
  // Ícone do Menu Hamburger (Visível apenas em telas pequenas)
  const hamburgerIconClasses = "hidden max-md:block cursor-pointer";

  // Lógica de Scroll (Para transparência que se altera)
  // Você precisará de um useEffect para implementar isso:
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector('header');
  //     if (window.scrollY > 50) {
  //       // Adiciona classes para fundo mais sólido ao rolar
  //       header?.classList.add('bg-opacity-80', 'shadow-lg');
  //       header?.classList.remove('bg-opacity-10');
  //     } else {
  //       // Retorna à transparência original
  //       header?.classList.add('bg-opacity-10');
  //       header?.classList.remove('bg-opacity-80', 'shadow-lg');
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  // Função para rolar para a seção de contato
  const scrollToContact = () => {
    const section = document.getElementById("section-04");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={headerClasses}>
      <img src="/logo.svg" alt="Logo" className={logoClasses} />

      {/* Navegação principal (escondida no mobile) */}
      <nav className="max-sm:hidden">
        {/* Aqui você pode colocar seus links de navegação (SOBRE MIM, SKILLS, PROJETOS) */}
      </nav>

      {/* Botão Contato (escondido no mobile, já que você usará o Speed Dial) */}
      <button 
        onClick={scrollToContact} 
        className={buttonClasses + " max-sm:hidden"}>
        Contato
      </button>

      {/* Ícone Hamburger (visível apenas no mobile/tablet) */}
      <div 
        className="hidden max-sm:block cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Você pode usar um ícone do MUI aqui (ex: MenuIcon) */}
        {/* Exemplo: <MenuIcon className="text-white text-3xl" /> */}
        {/* Por enquanto, um ícone SVG simples para o conceito */}
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}>
          </path>
        </svg>
      </div>

      {/* Menu Lateral Hamburger (Componente que você criará) */}
      <SidebarNavigationMenu 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          // Passe a função de rolagem para o componente
          scrollToContact={scrollToContact} 
      />
    </header>
  );
};

export default Header;