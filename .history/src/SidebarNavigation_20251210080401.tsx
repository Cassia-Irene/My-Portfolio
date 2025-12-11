import { useEffect, useRef, useState } from "react";

const sections = ["00", "01", "02", "03", "04"];

const SidebarNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.split("-")[1];
            const index = sections.indexOf(id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heightPerItem = 54;
    if (barRef.current) {
      barRef.current.style.transform = `translateY(${activeIndex * heightPerItem}px)`;
    }
  }, [activeIndex]);

  const handleClick = (id: string) => {
    const target = document.getElementById(`section-${id}`);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex fixed top-[38%] right-10 z-[1000] w-[50px]">

      {/* WRAPPER PRINCIPAL */}
      <div className="relative flex h-[270px]">

        {/* Linha */}
        <div className="w-[1px] h-full bg-[#FFBB1B] absolute left-[25px]" />

        {/* Barra ativa */}
        <div
          ref={barRef}
          className="absolute w-[3px] h-[54px] bg-[#FFBB1B] left-[23px] transition-transform duration-700 ease-in-out"
        />

        {/* Dots */}
        <div className="flex flex-col gap-0 relative right-[35px]">
          {sections.map((id, index) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`
                w-[40px] h-[54px] flex items-center justify-end 
                font-['Racing_Sans_One'] text-[15px] transition-colors duration-300
                ${activeIndex === index ? "text-[#FFBB1B]" : "text-white hover:text-[#FFBB1B]"}
              `}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
