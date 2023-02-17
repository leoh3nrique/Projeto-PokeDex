import styled from "styled-components";

//Estilizacao Container Card
export const StyledCard = styled.div`
  width: 29.4vw;
  height: 210px;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 4px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

//Estilizacao Container de informacoes
export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80%;
`;
export const StyledInfo = styled.div`
  width: 50%;
`;

//Estilizacao Container de Imagens
export const ContainerImage = styled.div`
  background-image: url(${(props) => `${props.backgroundImage}`});
  background-position: center;
  background-position: absolute;
  width: 50%;
`;

export const StyledImage = styled.img`
  width: 13vw;
  position: relative;
  top: -7.8vh;
  right: -0.6vw;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 40vw;
  }
`;

//Estilizacao Container De Informacoes Básicas
export const StatsCard = styled.div`
  margin: 1.2vw 0.5vw;
  p {
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;
  }
`;
export const StatsType = styled.div`
  width: 100%;
`;

//Estilizacao dos Botoes: Adicionar, Ir para os detalhes e remover
export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
  height: 20%;
  margin: 0 auto;
  margin-bottom: 8px;
`;
export const StyledBtnDetails = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  text-decoration: underline;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;
export const StyledBtnCapture = styled.button`
  background-color: white;
  width: 9.7vw;
  height: 2.5vw;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 30vw;
    height: 5vh;
  }
`;

export const StyledBtnRemove = styled.button`
  background-color: #ff6262;
  color: white;
  width: 9.7vw;
  height: 2.5vw;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 30vw;
    height: 5vh;
  }
`;
