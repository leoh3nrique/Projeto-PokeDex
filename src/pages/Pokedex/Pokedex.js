import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  ContainerPokedex,
  StyledHeaderAnimated,
  StyledPokedex,
} from "./styled";
import { useLocation } from "react-router-dom";
import CatchPokemon from "../../components/CatchPokemon/CatchPokemon";
import { PokedexCard } from "./components/PokedexCard";
import { EmptyPokedex } from "./components/EmptyPokedex";
const Pokedex = () => {
  const context = useContext(GlobalContext);
  const { captureAlert, deleteAlert, pokedex } = context;
  const location = useLocation();
  return (
    <>
      <Header />
      <ContainerPokedex>
        {deleteAlert && <CatchPokemon />}
        {captureAlert && <CatchPokemon />}
        {location.pathname === "/pokedex" && (
          <StyledHeaderAnimated>Meus Pokémons</StyledHeaderAnimated>
        )}
        <StyledPokedex>
          {Object.values(pokedex).length === 0 ? (
            <EmptyPokedex/>
            
          ) : (
            <PokedexCard />
          )}
        </StyledPokedex>
      </ContainerPokedex>
    </>
  );
};
export default Pokedex;
