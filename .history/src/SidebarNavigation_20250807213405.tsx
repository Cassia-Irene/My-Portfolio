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
    const heightPerItem = 54;
    const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;

    if (barRef.current) {
      barRef.current.style.transform = `translateY(${targetIndex * heightPerItem}px)`;
    }
  }, [activeIndex, hoverIndex]);

const handleClick = (index: number) => {
  const paddedId = index.toString().padStart(2, "0");
  const target = document.getElementById(`section-${paddedId}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 35%;
  left: 93%;
  width: 50px;
  z-index: 1000;
`;


const DotsWrapper = styled.div`
  display: flex;
  height: 270px;
`;

const Line = styled.div`
  width: 0.5px;
  height: 100%;
  background-color: #FFBB1B;
  position: relative;
  left: 25px;
`;

const ActiveBar = styled.div`
  position: absolute;
  width: 2.5px;
  height: 54px;
  background-color: #ffbb1b;
  transition: transform 0.6s ease-in-out;
  left: 23px;
`;

const Dots = styled.div`
  flex-direction: column;
  position: relative;
  right: 40px;
`;

const Dot = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 54px;
  background: none;
  border: none;
  color: #FFFFFF;
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
          {sections.map((index) => (
          <Dot
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            isActive={activeIndex === index}
          >
            {index.toString().padStart(2, "0")}
          </Dot>
        ))}
        </Dots>
      </DotsWrapper>
    </SidebarContainer>
  );
};

export default SidebarNavigation;