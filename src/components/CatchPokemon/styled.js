import styled from "styled-components";

export const ContainerNotification = styled.div`
  width: 99vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  top: 0vh;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
export const StyledNotification = styled.div`
  width: 450px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  left: 34.5vw;
  top: 26vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 60vw;
    height: 20vh;
    left: 20vw;
    top: 34vh;
  }
`;
