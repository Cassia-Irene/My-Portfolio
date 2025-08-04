import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sections = ["00", "02", "03", "04"];

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

sections.forEach((_, index) => {
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

const SidebarContainer = styled.div`
    position: fixed;
    top: 60px;
    left: 20px;
    width: 50px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Line = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background-color: #ffbb1b40;
`;

const ActiveBar = styled.div`
  position: absolute;
  left: 50%;
  width: 4px;
  height: 40px;
  background-color: #ffbb1b;
  transform: translateX(-50%);
  transition: transform 0.4s ease;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
`;

const Dot = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    color: #ffbb1b;
  }
`;

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