import styled from "styled-components";
import Cerebro from "./assets/cerebro-sm.svg";

const SobremimSection = styled.section`
  height: 100vh;
  text-align: center;
  
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  top: 120px;
  position: relative;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 35px;
    color: #00A3FF;
  }
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
     <SubtitleWrapper>
        <img src="./assets/cerebro-sm.svg" alt="Ícone" />
        <p>Futura Engenheira de Software</p>
      </SubtitleWrapper>
    </SobremimSection>
  );
};



export default SobreMim;
