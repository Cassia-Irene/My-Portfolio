import styled from "styled-components";

const SobremimSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 122px;
  position: relative;
  gap: 107px;
`;

const Title = styled.h1`
  font-size: 72px;
  font-family: "Racing Sans One", sans-serif;
  color: #FFBB1B;
  letter-spacing: 4px;
  position: relative;
  margin-top: -23px;
  left: 20%;
`;

const SobreMim = () => {

  return (
    <SobremimSection id="section-01">
    <Title>Sobre Mim</Title>
    </SobremimSection>
  );
};



export default SobreMim;
