import styled from "styled-components";

export const StyledPokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  grid-row-gap: 40px;
  min-height: 56.7vh;
  @media (min-width: 320px) and (max-width: 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledEmptyPokedex = styled.div`
  display: flex;
  height: 20vh;
  width: 35vw;
  margin-left: 5vw;
  padding: 5px;
  align-items: center;
  span{
    font-size: 30px;
    font: bold;
    font-family: "Poppins";
    color:white
  }
  @media (min-width: 320px) and (max-width: 480px){ 
    flex-direction: column;
    gap: 3vh;
    height: 60vh;
  }
`
export const ContainerPokedex = styled.div`
  background-color: #5e5e5e;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const StyledHeaderAnimated = styled.h1`
  align-self: flex-start;
  margin: 40px 68px;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  opacity: 1;
`;
