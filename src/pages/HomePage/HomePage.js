import { useContext } from "react";
import Card from "../../components/Card/Card";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  MainContainer,
  StyledContainer,
  StyledH1,
} from "./styled";
import Header from "../../components/Header/Header";
import CatchPokemon from "../../components/CatchPokemon/CatchPokemon";
import { SwitchPages } from "../../components/SwitchPages.js/SwitchPages";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const {
    pokemons,
    pokedex,
    captureAlert,
  } = context;

  const filtrarLista = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      <Header />
      <MainContainer>
        <StyledH1>Todos Pokémons</StyledH1>
        {captureAlert && <CatchPokemon />}

        <StyledContainer>
          {filtrarLista().map((pokemon, index) => {
            return <Card index={index} key={pokemon.url} url={pokemon.url} />;
          })}
        </StyledContainer>
        <SwitchPages />
      </MainContainer>
    </>
  );
};
export default HomePage;
