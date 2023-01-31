import styled, { keyframes } from "styled-components";

export const StyledHeader = styled.header`
    height: 22vh;
    display: flex;
    align-items: center;
    width: 100%;
`

const a = keyframes`
    from{
        top: 22vh;
        transform: scale(2, 1);

    }
    to{
        top:0vh;
    }

`



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
    animation: ${a} .4s;

    `

export const StyledImage = styled.img`
    width: 307px;
`

export const ContainerLogo = styled.figure`
    position: absolute;
    left: 37vw;
`

export const StyledBtnPokedex = styled.button`
    width: 287px;
    height: 74px;
    border: none;
    border-radius: 8px;
    background-color: #33A4F5;
    color: white;
    font-size: 1em;
    cursor: pointer;
    position: relative;
    left: 74vw;

`