import styled from "styled-components"


export const Page = styled.div`
  align-self: flex-end;
  margin-right: 2.5vw;
  width: 200px;
  height: 100px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  span{
    color: white;
    cursor: pointer;
    font-size: 22px;
    font-family: "Poppins";
  }
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width: 480px){
    align-self: center;
  }
`