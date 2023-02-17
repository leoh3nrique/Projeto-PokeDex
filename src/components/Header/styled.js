import styled, { keyframes } from "styled-components";

const animationBtnPokedex = keyframes`
  from{
    left: 30vw;
    display: none;
  }
  to{
    left: 1vw;

  }

`;
const animationBtnHomeMobile = keyframes`
  from{
    display: none;
    left: 30vw;
  }
  to{
    left: 1.4vw ;
  }

`;

const animationBtnHome = keyframes`
    from{
        top: 22vh;
        transform: scale(2, 2);
    }
    to{
        top:0vh;
    }

`;

//Estilização Container Header
export const StyledHeader = styled.header`
  height: 22vh;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: 40vh;
    max-width: 480px;
    width: 100vw;
  }
`;

//Estilizacao Button Pokedex

export const StyledBtnPokedex = styled.button`
  width: 287px;
  height: 74px;
  border: none;
  border-radius: 8px;
  background-color: #33a4f5;
  color: white;
  font-size: 1em;
  cursor: pointer;
  position: relative;
  left: 74vw;
  @media (min-width: 320px) and (max-width: 480px) {
    left: -3vw;
    top: 27vh;
    width: 250px;
    height: 60px;
    animation: ${animationBtnPokedex} 0.4s;
  }
`;

//Estilizacao Button Home

export const StyledBtnHome = styled.button`
  width: 210px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.5em;
  position: relative;
  left: 6vw;
  top: 0vh;
  animation: ${animationBtnHome} 0.4s;

  @media (max-width: 480px) {
    top: 30vh;
    left: 1.4vw;
    animation: ${animationBtnHomeMobile} 0.4s;
  }
`;

//Estilizacao Logo
export const ContainerLogo = styled.figure`
  position: absolute;
  left: 37vw;
  @media (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    left: 8vw;
    top: 3vh;
  }
`;

export const StyledImage = styled.img`
  width: 307px;
`;
