import styled from "styled-components";

export const StyledCard = styled.div`
    width: 440px;
    height: 210px;
    background-color: ${(props) => props.background};
    display: flex;
    flex-direction: column;
    border-radius:12px;
    padding: 4px;
     
`

export const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 80%;

`
export const StyledInfo = styled.div`
    width: 50%;

`

export const ContainerImage = styled.div`
    background-image: url(${(props)=> `${props.backgroundImage}`});
    background-position:center;
    background-position:absolute;
    width:50%;
    
`

export const StyledImage = styled.img`
    width: 193px;
    position: relative;
    top: -7.8vh;
    right: -0.6vw;
`
export const StatsCard = styled.div`
    margin: 18px 8px ;
    p{
        color: white;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }
`
export const StatsType = styled.div`
    width: 100%;
`


export const ContainerBtn = styled.div`
    display: flex;
    justify-content: space-between;
    width: 88%;
    height: 20%;
    margin: 0 auto;
    margin-bottom: 8px;
`
export const StyledBtnDetails = styled.button`
    border: none;
    background-color: transparent;
    font-size: 16px;
    text-decoration: underline;
    color: white;
    font-weight: 700;
    cursor: pointer;
`
export const StyledBtnCapture = styled.button`
    background-color: white;
    width: 146px;
    height: 38px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 10px;

`

export const StyledBtnRemove = styled.button`
    width: 146px;
    height: 38px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #FF6262;;
`