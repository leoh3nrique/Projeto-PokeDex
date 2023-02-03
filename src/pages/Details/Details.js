import Header from "../../components/Header/Header";
import { useContext, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { ColorBackground } from "../../constants/colorBackgrounds";

const Details = () => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const params = useParams();

  const [detailsPokemon, setDetailsPokemon] = useState([]);

  const fetchPokemon = async () => {
    const copiaPokemon = [];
    const arrayTypes = [];
    try {
      const response = await axios.get(`${BASE_URL}/${params.id}/`);
      const types = response.data.types;
      for (let i in types) {
        let getTypes = types[i].type.name;
        arrayTypes.push(getTypes);
        if (arrayTypes.length === 2) {
          break;
        }
      }
      copiaPokemon.push({
        ...response.data,
        name: response.data.name,
        id: response.data.id,
        types: arrayTypes,
        images: response.data.sprites,
        mainImage:
          response.data.sprites.other["official-artwork"].front_default,
        backgroundColor: ColorBackground(response.data.types[0].type.name),
      });
      setDetailsPokemon(copiaPokemon);
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <>
      {detailsPokemon.map((elem,index) => {
        return (
          <div key={index}>
            <Header />
            <StyledBtnRemove>Remove</StyledBtnRemove>
            <ContainerDetails backgroundImage={backgroundImage}>
              <StyledH1>Detalhes</StyledH1>
              <ContainerDetailsPokemon backgroundColor={elem.backgroundColor}>
                <ContainerImages>
                  <FrontImage>
                    <img
                      src={elem.sprites.front_default}
                      alt="Front of pokemon "
                    />
                  </FrontImage>
                  <BackImage>
                    <img
                      src={elem.sprites.back_default}
                      alt="Back of pokemon"
                    />
                  </BackImage>
                </ContainerImages>
                <ContainerBaseStats>
                  <h3>BaseStats</h3>
                  {elem.stats.map((elem) => {
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
                    <p className="pokemonId">#{elem.id}</p>
                    <p className="pokemonName">{elem.name}</p>

                    {elem.types.map((elem, index) => {
                      return typesOfPokemons(elem, index);
                    })}
                  </BasicStats>
                  <MainImage>
                    <img src={elem.mainImage} alt="Main Pokemon" />
                  </MainImage>
                  <MovesStats>
                    <h3>Moves</h3>
                    <p>{elem.moves[0].move.name}</p>
                    <p>{elem.moves[1].move.name}</p>
                    <p>{elem.moves[2].move.name}</p>
                    <p>{elem.moves[3].move.name}</p>
                    <p>{elem.moves[4].move.name}</p>
                  </MovesStats>
                </ContainerOtherStats>
              </ContainerDetailsPokemon>
            </ContainerDetails>
          </div>
        );
      })}
    </>
  );
};
export default Details;
