import { useContext } from "react";
import Card from "../../components/Card/Card";
import { GlobalContext } from "../../contexts/GlobalContext";
import { MainContainer, StyledContainer, StyledH1, StyledMain } from "./styled";
import Header from "../../components/Header/Header";
import CatchPokemon from "../../components/CatchPokemon/CatchPokemon";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const { pokemons, isVisible ,pokedex} = context;

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
        {isVisible && <CatchPokemon />}

        <StyledContainer>
          {filtrarLista().map((pokemon, index) => {
            return <Card index={index} key={pokemon.url} url={pokemon.url} />;
          })}
        </StyledContainer>
      </MainContainer>
    </>
  );
};
export default HomePage;
