import { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const ScrollButton = () => {
  const [isLastSection, setIsLastSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      setIsLastSection(scrollY >= pageHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isLastSection) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        hidden lg:flex fixed 
        bottom-10 -translate-y-1/2  /* CENTRALIZA VERTICALMENTE */
        right-11 
        items-center gap-1 text-[#FFBB1B]
        font-inter font-medium text-xs
        transform -rotate-90
        z-[1000] cursor-pointer
      "
    >
      {isLastSection ? (
        <>
          <span className="whitespace-nowrap">Voltar ao topo</span>
          <IoChevronDown
            className="
              text-xl transition-transform duration-300
              -rotate-90 hover:-translate-y-1
            "
          />
        </>
      ) : (
        <>
          <IoChevronDown
            className="
              text-xl transition-transform duration-300
              rotate-90 hover:translate-y-1
            "
          />
          <span className="whitespace-nowrap">Descer</span>
        </>
      )}
    </button>
  );
};

export default ScrollButton;
