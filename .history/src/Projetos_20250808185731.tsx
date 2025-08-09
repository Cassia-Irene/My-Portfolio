import styled from "styled-components";

const SectionProjetos = styled.section`
  height: 100vh;
  position: relative;
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
  margin-bottom: 14px;
  
`;

const Carousel = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Projetos = () => {

  return (
    <SectionProjetos id="section-03">
        <Title>Projetos</Title>
    </SectionProjetos>

  );
};

export default Projetos;