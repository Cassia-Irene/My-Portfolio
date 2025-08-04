import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const sections = ["00", "01", "02", "03", "04"];

const SidebarNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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
      { threshold: 0.6 }
    );

    sections.forEach((_, index) => {
      const el = document.getElementById(`section-${index}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heightPerItem = 54; // mesma altura dos dots
    const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

    if (barRef.current) {
      barRef.current.style.transform = `translateY(${targetIndex * heightPerItem}px)`;
    }
  }, [activeIndex, hoverIndex]);

  const handleClick = (index: number) => {
    const target = document.getElementById(`section-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

const SidebarContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 93%;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const DotsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 270px;
`;

const Line = styled.div`
  width: 0.5px;
  height: 100%;
  background-color: #FFBB1B;
  z-index: 0;
  position: relative;
  left: 25px;
`;

const ActiveBar = styled.div`
  position: absolute;
  width: 2.5px;
  height: 54px;
  background-color: #ffbb1b;
  transition: transform 0.6s ease-in-out;
  z-index: 1;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  z-index: 2;
  position: relative;
  right: 50px;
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 54px;
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#ffbb1b" : "#fff")};
  font-size: 14px;
  font-family: "Racing Sans One", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:hover {
    color: #ffbb1b;
`;

  return (
    <SidebarContainer>
      <DotsWrapper>
        <Line />
        <ActiveBar ref={barRef} />
        <Dots>
          {sections.map((label, index) => (
            <Dot
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              isActive={activeIndex === index}
            >
              {label}
            </Dot>
          ))}
        </Dots>
      </DotsWrapper>
    </SidebarContainer>
  );
};

export default SidebarNavigation;