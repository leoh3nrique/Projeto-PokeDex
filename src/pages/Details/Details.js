import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  BackImage,
  BasicStats,
  ContainerBaseStats,
  ContainerDetails,
  ContainerDetailsPokemon,
  ContainerImages,
  ContainerOtherStats,
  DivFilha,
  DivPai,
  FrontImage,
  MainImage,
  MovesStats,
  StyledBtnRemove,
} from "./styled";
import backgroundImage from "../../assets/backgroundImagePokemon.svg";
import { typesOfPokemons } from "../../constants/typesOfPokemons";
import { StyledH1 } from "../HomePage/styled";

const Details = () => {
  const context = useContext(GlobalContext);
  const { detailsPokemon } = context;

  return (
    <>
      <Header/>
      <StyledBtnRemove>Remove</StyledBtnRemove>
      <ContainerDetails backgroundImage={backgroundImage}>
        <StyledH1>Detalhes</StyledH1>
        <ContainerDetailsPokemon backgroundColor={detailsPokemon.background}>
          <ContainerImages>
            <FrontImage>
              <img src={detailsPokemon.sprites.front_default} alt="Front of pokemon " />
            </FrontImage>
            <BackImage>
              <img src={detailsPokemon.sprites.back_default} alt="Back of pokemon" />
            </BackImage>
          </ContainerImages>
          <ContainerBaseStats>
            <h3>BaseStats</h3>
            {detailsPokemon.stats.map((elem) => {
              return (
                <div className="stats">
                  <p>{elem.stat.name}</p>
                  <p className="baseStat">{elem.base_stat}</p>
                  <DivPai>
                    <DivFilha width={elem.base_stat}></DivFilha>
                  </DivPai>
                </div>
              );
            })}
          </ContainerBaseStats>
          <ContainerOtherStats backgroundImage={backgroundImage}>
            <BasicStats>
              <p className="pokemonId">#{detailsPokemon.id}</p>
              <p className="pokemonName">{detailsPokemon.name}</p>

              {detailsPokemon.types.map((elem,index) => {
                return typesOfPokemons(elem, index);
              })}
            </BasicStats>
            <MainImage>
              <img src={detailsPokemon.mainImage} alt="Main Pokemon" />
            </MainImage>
            <MovesStats>
              <h3>Moves</h3>
              <p>{detailsPokemon.moves[0].move.name}</p>
              <p>{detailsPokemon.moves[1].move.name}</p>
              <p>{detailsPokemon.moves[2].move.name}</p>
              <p>{detailsPokemon.moves[3].move.name}</p>
              <p>{detailsPokemon.moves[4].move.name}</p>
            </MovesStats>
          </ContainerOtherStats>
        </ContainerDetailsPokemon>
      </ContainerDetails>
    </>
  );
};
export default Details;
