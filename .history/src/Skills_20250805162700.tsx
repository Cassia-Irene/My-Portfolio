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
  max-width: 800px;
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

  span {
    color: #FFBB1B;
  }

`;


const Skills = () => {

  return (
    <SectionSkills id="section-02">
        <Title>Skills & Habilidades</Title>

        <TextContent>
          <p>Meu principal foco está no desenvolvimento front-end (lado do cliente da web).</p>
          <p>Possuo conhecimento em desenvolvimento front-end, com familiaridade em HTML, CSS e Javascript. Estou em fase de aprendizado e desenvolvimento de habilidades na criação de aplicações web avançadas, incluindo o desenvolvimento de layouts interativos e personalizados. Utilizo o Figma para design UI/UX e possuo conhecimentos básicos em Python. Atualmente, estou expandindo meu aprendizado com o estudo de React.</p>
          <p>Visite meu <span>Linkedin</span> para mais detalhes.</p>
        </TextContent>

    </SectionSkills>
  );
};

export default Skills;