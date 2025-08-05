import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDown from "./assets/svg_seta-down.svg";

const ScrollDown = styled.button<{ isBackToTop: boolean }>`
  position: fixed;
  bottom: 90px;
  right: 70px;
  transform: translateY(50%) rotate(-90deg);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: #ffbb1b;

  img {
    width: 20px;
    height: 20px;
    transform: ${({ isBackToTop }) => (isBackToTop ? "rotate(0deg)" : "rotate(90deg)")};
    transition: transform 0.3s ease;
    }

  &:hover img {
    transform: ${({ isBackToTop }) =>
      isBackToTop ? "rotate(90deg) translateX(5px)" : "rotate(90deg) translateY(5px)"};
    transition: transform 0.3s ease;
  }
`;

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
    <ScrollDown onClick={handleClick} isBackToTop={isLastSection}>
      <img src={ArrowDown} alt={isLastSection ? "Back to Top" : "Scroll Down"} />
      {isLastSection ? "Back to Top" : "Scroll Down"}
    </ScrollDown>
  );
};

export default ScrollButton;