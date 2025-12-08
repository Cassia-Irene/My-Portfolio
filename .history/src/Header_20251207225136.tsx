'use client'


import LogoImg from "../public/logo.svg";




// ===== Header Component =====
const Header: React.FC = () => {
  

  return (
    <>
      <img 
        src={LogoImg} 
        alt="Logo" 
        className="
          fixed top-40 left-120 z-50
          w-24 h-20
          md:w-20 md:h-16
          sm:w-16 sm:h-14
        "
        
        />


    </>
  );
};

export default Header;