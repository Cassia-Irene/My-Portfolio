import styled from "styled-components";

const SectionContatos = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 120px;
  margin-bottom: 45px;
  justify-content: center;
  text-align: center;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 40px;
    letter-spacing: 4px;
    color: #F0F8FF;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;

  p {
    font-family: "Racing Sans One", sans-serif;
    font-size: 22px;
    letter-spacing: 9px;
    color: #FFBB1B
  }
`;


const Contatos = () => {

  return (
    <SectionContatos id="section-04">
    <Title>Contatos</Title>
     <SubtitleWrapper>
        <p>Vamos conversar!</p>
      </SubtitleWrapper>
    </SectionContatos>
  );
};

export default Contatos;