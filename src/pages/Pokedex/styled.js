import styled from "styled-components";

export const StyledPokedex = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    grid-row-gap: 40px;
    @media (max-width: 480px) {
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

`
export const ContainerPokedex = styled.div`
    background-color: #5E5E5E;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`


export const StyledHeaderAnimated = styled.h1`
    align-self: flex-start;
    margin: 40px 68px;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    opacity:1 ;

 


`