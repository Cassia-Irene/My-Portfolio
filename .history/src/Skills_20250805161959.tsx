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