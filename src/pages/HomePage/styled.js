import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    grid-row-gap: 45px;

    

`
const animation= keyframes`
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

`


export const StyledH1 = styled.h1`
    align-self: flex-start;
    margin: 40px 68px;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    position: relative;
    animation: ${animation} .3s;

` 


export const MainContainer = styled.div`
    background-color: #5E5E5E;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`