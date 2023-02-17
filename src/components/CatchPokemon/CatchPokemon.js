import { StyledNotification, ContainerNotification } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const CatchPokemon = () => {
  const context = useContext(GlobalContext);
  const { captureAlert, setCaptureAlert, deleteAlert, setDeleteAlert } =
    context;


  return (
    <>
      <ContainerNotification
        onClick={() => {
          setCaptureAlert(false);
          setDeleteAlert(false)
        }}
      >
        {captureAlert && (
          <StyledNotification>
            <h1>GOTCHA</h1>
            <p>O pokemon foi adicionado a sua Pokédex</p>
          </StyledNotification>
        )}
        {deleteAlert && (
          <StyledNotification>
            <h1>Oh,no!</h1>
            <p>O pokemon foi removido da sua Pokédex</p>
          </StyledNotification>
        )}
      </ContainerNotification>
    </>
  );
};

export default CatchPokemon;
