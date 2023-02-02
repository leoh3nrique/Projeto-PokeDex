import styled, { keyframes } from "styled-components";

export const StyledBtnRemove = styled.button`
  position: absolute;
  left: 74vw;
  top: 48px;
  width: 226px;
  height: 57px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #ff6262;
  cursor: pointer;
`;



export const ContainerDetails = styled.div`
  width: 100%;
  height: 57vw;
  background-color: #5e5e5e;
  background-image: url(${(props) => `${props.backgroundImage}`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000px;
  border:.001px solid #5e5e5e;
  `;

  const animation = keyframes`
    from{
      transform: scale(0.3, 0.3);

    }
    to{
      transform:translate(10px, 0%);
    }
  
  `

export const ContainerDetailsPokemon = styled.div`
  width: 1400px;
  height: 665px;
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;
  display: flex;
  gap: 10px;
  border-radius: 24px;
  position: relative;
  animation:${animation} .3s;

`;

export const ContainerImages = styled.div`
  height: 613px;
  margin: 20px 25px;
`;

export const FrontImage = styled.div`
  width: 280px;
  height: 280px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 180px;
  }
`;
export const BackImage = styled.div`
  width: 280px;
  height: 280px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 53px;
  img {
    width: 180px;
  }
`;

export const ContainerBaseStats = styled.div`
  width: 343px;
  height: 613px;
  background-color: white;
  margin: 20px 25px;
  border-radius: 12px;
  padding: 5px;
  .stats {
    display: flex;
    align-items: center;
    margin: 10px auto;
    border-top: 0.5px solid black;
    width: 80%;
    height: 30px;
    padding: 15px;
  }
  p {
    width: 70px;
    text-align: end;
  }
  .baseStat {
    text-align: center;
  }
`;

export const DivPai = styled.div`
  width: 100px;
`;
export const DivFilha = styled.div`
  background-color: red;
  width: ${(props) => `${props.width}%`};
  height: 10px;
`;

export const ContainerOtherStats = styled.div`
  width: 50%;
  height: 613px;
  margin: 10px;

  background-image: url(${(props) => `${props.backgroundImage}`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 900px;
`;
export const BasicStats = styled.div`
  width: 350px;
  height: 150px;
  .pokemonId {
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
  }
  .pokemonName {
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 15px;
  }
`;

export const MainImage = styled.div`
  img {
    width: 300px;
  }
  position: absolute;
  right: 50px;
  top: 250px;
`;
export const MovesStats = styled.div`
  border: 1px solid white;
  width: 292px;
  height: 463px;
  background-color: white;
  border-radius: 14px;
  padding: 5px;
  p {
    background-color: #ececec;
    border: 1px dotted black;
    width: 100px;
    height: 25px;
    margin: 10px;
    border-radius: 15px;
    text-align: center;
  }
`;
