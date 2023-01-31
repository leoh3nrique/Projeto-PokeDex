import styled from "styled-components";

export const StyledCard = styled.div`
    width: 440px;
    height: 210px;
    border: 0.5px solid black;
    background-color: ${(props) => props.background};
    display: flex;
    flex-direction: column;
     
`

export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    height: 60%;

`

export const StyledInfo = styled.div`
    width: 46%;

`

export const ContainerImage = styled.div`
    background-image: url(${(props)=> `${props.backgroundImage}`});
    background-position:center;
    width:46%
    
`

export const StyledImage = styled.img`
    width: 193px;
    position: relative;
    top: -10vh;
    right: -3vw;

    
`

