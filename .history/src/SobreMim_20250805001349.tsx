import styled from "styled-components";
import Cerebro from "./assets/cerebro-sm.svg";

const SobremimSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 120px;
  margin-bottom: 20px;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

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

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
`;

const LargeImage = styled.img`
  width: 297px;
  height: 309px;
  border-radius: 10px;
`;

const TextContent = styled.div`
max-width: 600px;
display: flex;
flex-direction: column;
gap: 20px;

p {
line-height: 1.5;
}

`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
     <SubtitleWrapper>
      <img src={Cerebro} alt="Cerebro Icon" />
        <p>Futura Engenheira de Software</p>
      </SubtitleWrapper>

         <MainContent>
        <div>
          <LargeImage src="/path-to-large-image.jpg" alt="Minha Foto" />
          <Button>Ver Currículo</Button>
        </div>

        <TextContent>
          <p>Com uma base sólida em desenvolvimento front-end, tenho explorado tecnologias modernas como React e TypeScript.</p>
          <p>Atualmente, curso Engenharia de Software e também atuo como estagiária em Análise e Desenvolvimento de Sistemas.</p>
          <p>Me interesso por acessibilidade, usabilidade e pelo impacto social das tecnologias digitais.</p>
          <p>Busco aprender continuamente, contribuindo com projetos que valorizem a inclusão e a inovação.</p>
        </TextContent>
      </MainContent>

    </SobremimSection>
  );
};



export default SobreMim;
