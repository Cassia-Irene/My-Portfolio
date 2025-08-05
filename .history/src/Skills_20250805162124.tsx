import styled from "styled-components";


const SectionSkills = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 120px;
  margin-bottom: 72px;
  
`;

const TextContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 10px;

  p {
    line-height: 1.5;
    leter-spacing: 1px;
    font-family: "Inter", sans-serif;
    text-align: justify;
    font-size: 20px;
    font-weight: 500;
    color: #F0F8FF;
    max-width: 100%;
    letter-spacing: 1px;
  }

`;


const Skills = () => {

  return (
    <SectionSkills id="section-02">
        <Title>Skills & Habilidades</Title>

        <TextContent>
          <p>Apaixonada por desenvolvimento front-end e design, estou sempre em busca de aprender mais e transformar ideias em projetos reais.</p>
          <p>Curiosa, organizada e focada em criar interfaces que unam funcionalidade e boa experiência.</p>
          <p>Gosto de trabalhar em equipe e acredito que as melhores ideias nascem da colaboração entre pessoas interessadas.</p>
          <p>Fã de vôlei, animes (especialmente Haikyuu!!), videogames e, claro, de programar.</p>
        </TextContent>

    </SectionSkills>
  );
};

export default Skills;