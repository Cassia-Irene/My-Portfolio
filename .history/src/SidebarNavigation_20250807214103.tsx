import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// IDs padronizados com dois dígitos
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

// ==========================
// Styled Components
// ==========================

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
  color: ${(props) => (props.isActive ? "#ffbb1b" : "#FFFFFF")};
  font-size: 14px;
  font-family: "Racing Sans One", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: color 0.3s;

  &:hover {
    color: #ffbb1b;
  }
`;
