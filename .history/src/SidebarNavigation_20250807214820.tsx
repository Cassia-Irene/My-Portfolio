import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
            if (index !== -1) {
              setActiveIndex(index);
            }
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
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SidebarContainer>
      <DotsWrapper>
        <Line />
        <ActiveBar ref={barRef} />
        <Dots>
          {sections.map((id, index) => (
            <Dot
              key={id}
              onClick={() => handleClick(id)}
              isActive={activeIndex === index}
            >
              {id}
            </Dot>
          ))}
        </Dots>
      </DotsWrapper>
    </SidebarContainer>
  );
};

export default SidebarNavigation;


