import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  grid-row-gap: 45px;
  min-height: 56.7vh;

  @media (max-width: 480px) {
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

`;

const animation = keyframes`
    from{
        top:-20vh;
        color: black;
        text-decoration: underline;
        transform: scale(0.8 , 1);
    }
    to{
        top: 0;
        color: white;
    }

`;

const animationMobile = keyframes`
  from{
        left: -30vw;
        display: none;
        text-decoration: underline;
        transform: scale(0.8 , 1);
    }
    to{
        left: 8vw;
        color: white;
    }
`

export const StyledH1 = styled.h1`
  align-self: flex-start;
  margin: 40px 68px;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  position: relative;
  animation: ${animation} 0.3s;

  @media (max-width: 480px) {
    font-size: 30px;
    animation: ${animationMobile} 0.3s;

  }


`;


export const MainContainer = styled.div`
  background-color: #5e5e5e;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media (max-width: 480px) and (min-width: 320px) {
    width: 100vw;
    margin: 0 auto;

  }
 
`;

