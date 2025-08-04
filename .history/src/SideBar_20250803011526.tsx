import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sectionn = ["00", "02", "03", "04"];

const SidebarNavigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.id.split("-")[1]);
                        setActiveIndex(index);
                    }
            });
        },
        {
            threshold: 0.6,
        }

);

sectionn.forEach((_, index) => {
    const el = document.getElementById(`section-${index}`);
    if (el) observer.observe(el);
});

return () => observer.disconnect();
}, []);

useEffect(() => {
    const heightPerItem = 40;
    if(barRef.current) {
        barRef.current.style.transform = `translateY(${activeIndex * heightPerItem}px)`;
    }
}, [activeIndex]);

const handleClick = (index: number) => {
    const target = document.getElementById(`section-${index}`);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
};

const

  return (
    <SidebarContainer>
      <Line />
      <ActiveBar ref={barRef} />
      <Dots>
        {sections.map((label, i) => (
          <Dot key={i} onClick={() => handleClick(i)}>{label}</Dot>
        ))}
      </Dots>
    </SidebarContainer>
  );
};

export default SidebarNavigation;