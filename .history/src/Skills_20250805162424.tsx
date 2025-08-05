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
  margin-bottom: 14px;
  
`;

const TextContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }

`;


const Skills = () => {

  return (
    <SectionSkills id="section-02">
        <Title>Skills & Habilidades</Title>

        <TextContent>
          <p>Meu principal foco está no desenvolvimento front-end (lado do cliente da web).</p>
          <p>Curiosa, organizada e focada em criar interfaces que unam funcionalidade e boa experiência.</p>
          <p>Visite meu Linkedin para mais detalhes.</p>
        </TextContent>

    </SectionSkills>
  );
};

export default Skills;