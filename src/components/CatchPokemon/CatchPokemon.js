import { Div, DivVazia } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useLocation } from "react-router-dom";

export const CatchPokemon = () => {
  const context = useContext(GlobalContext);
  const { setIsVisible } = context;
  const location = useLocation();

  return (
    <>
      <DivVazia onClick={() => setIsVisible(false)}>
        {location.pathname === "/" && (
          <Div>
            <h1>GOTCHA</h1>
            <p>O pokemon foi adicionado a sua Pokédex</p>
          </Div>
        )}
        {location.pathname === "/pokedex" && (
          <Div>
            <h1>Oh,no!</h1>
            <p>O pokemon foi removido da sua Pokédex</p>
          </Div>
        )}
      </DivVazia>
    </>
  );
};

export default CatchPokemon;
