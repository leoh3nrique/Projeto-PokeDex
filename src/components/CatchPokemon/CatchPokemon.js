import { StyledNotification, ContainerNotification } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useLocation } from "react-router-dom";

export const CatchPokemon = () => {
  const context = useContext(GlobalContext);
  const { setIsVisible } = context;
  const location = useLocation();

  return (
    <>
      <ContainerNotification onClick={() => setIsVisible(false)}>
        {location.pathname === "/" && (
          <StyledNotification>
            <h1>GOTCHA</h1>
            <p>O pokemon foi adicionado a sua Pokédex</p>
          </StyledNotification>
        )}
        {location.pathname === "/pokedex" && (
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
