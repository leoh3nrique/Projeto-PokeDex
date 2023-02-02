import Header from "../../components/Header/Header";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  ContainerPokedex,
  StyledHeaderAnimated,
  StyledPokedex,
} from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import CatchPokemon from "../../components/CatchPokemon/CatchPokemon";
import { PokedexCard } from "./components/PokedexCard";

const Pokedex = () => {
  const context = useContext(GlobalContext);
  const { pokedex, isVisible, details, removeFromPokedex } = context;
  const location = useLocation();
  const navigate = useNavigate();

  
  return (
    <>
      <Header />
      <ContainerPokedex>
        {isVisible && <CatchPokemon />}
        {location.pathname === "/pokedex" && (
          <StyledHeaderAnimated>Meus Pokémons</StyledHeaderAnimated>
        )}
        <StyledPokedex>
          <PokedexCard />
        </StyledPokedex>
      </ContainerPokedex>
    </>
  );
};
export default Pokedex;
