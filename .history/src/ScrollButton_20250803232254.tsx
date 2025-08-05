import { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDown from "./assets/svg_seta-down.svg";

const ScrollDown = styled.button`
  position: fixed;
  bottom: 50%;
  left: 20px;
  transform: translateY(50%) rotate(-90deg);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: #ffbb1b;
  z-index: 1000;

  img {
    width: 20px;
    height: 20px;
    rotate: 90deg;
    }

  &:hover img {
    transform: translateY(5px);
    transition: 0.3s ease;
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
    <ScrollDown onClick={handleClick}>
      <img src={ArrowDown} alt="Scroll Down" />
      {isLastSection ? "Back to Top" : "Scroll Down"}
    </ScrollDown>
  );
};

export default ScrollButton;