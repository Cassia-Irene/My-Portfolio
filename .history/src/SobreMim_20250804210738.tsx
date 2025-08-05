import styled from "styled-components";

const SobremimSection = styled.section`
  
 
  
  
  
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  margin-top: 15%;
  
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>

     <SubtitleWrapper>
        <img src="/path-to-icon.svg" alt="Ícone" />
        <p>Sou uma desenvolvedora apaixonada por criar soluções acessíveis e criativas.</p>
      </SubtitleWrapper>
    </SobremimSection>
  );
};



export default SobreMim;
