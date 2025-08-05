import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDown from "./assets/svg_seta-down.svg";

const ScrollDown = styled.button<{ isBackToTop: boolean }>`
  position: fixed;
  bottom: 90px;
  right: 70px;
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

  transform: rotate(-90deg);

  img {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    transform: ${({ isBackToTop }) => (isBackToTop ? "rotate(270deg)" : "rotate(-0deg)")};
  }

  &:hover img {
    transform: ${({ isBackToTop }) =>
      isBackToTop ? "rotate(0deg) translateX(5px)" : "rotate(90deg) translateY(5px)"};
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
      {isLastSection ? (
        <>
          Back to Top <img src={ArrowDown} alt="Back to Top" />
        </>
      ) : (
        <>
          <img src={ArrowDown} alt="Scroll Down" /> Scroll Down
        </>
      )}
    </ScrollDown>
  );
};


export default ScrollButton;