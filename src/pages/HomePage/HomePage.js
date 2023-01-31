import { useContext } from "react";
import Card from "../../components/Card/Card";
import { GlobalContext } from "../../contexts/GlobalContext";
import { MainContainer, StyledContainer } from "./styled";
import Header from "../../components/Header/Header";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const { pokemons, pokedex } = context;

  const filtrarLista = () =>
    pokemons.filter((pokemonInList) =>
        !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


  return (
    <>
        <Header />

      <MainContainer>
      <StyledContainer>
      {filtrarLista().map((pokemon)=>{
        return(
          <Card
            key={pokemon.url}
            url={pokemon.url}
          />
        )
      })}
      </StyledContainer>
      </MainContainer>
        
        
    </>
  );
};
export default HomePage;
