import axios from "axios";
import { useEffect, useState } from "react";
import {
  ContainerImage,
  ContainerInfo,
  StyledCard,
  StyledImage,
  StyledInfo,
  StatsCard,
  StatsType,
  ContainerBtn,
  StyledBtnDetails,
  StyledBtnCapture,
  StyledBtnRemove,
} from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { typesOfPokemons } from "../../constants/typesOfPokemons";
import backgroundImage from "../../assets/backgroundImagePokemon.svg";
import CatchPokemon from "../CatchPokemon/CatchPokemon";
import { ColorBackground } from "../../constants/colorBackgrounds";

const Card = ({ url, index }) => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, details } = context;

  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const copiaPokemon = [];
    const arrayTypes = [];
    try {
      const response = await axios.get(url);
      const types = response.data.types;
      for (let i in types) {
        let getTypes = types[i].type.name;
        arrayTypes.push(getTypes);
        if (arrayTypes.length === 2) {
          break;
        }
      }
      copiaPokemon.push({
        name: response.data.name,
        id: response.data.id,
        types: arrayTypes,
        url: url,
        images: response.data.sprites,
        mainImage:response.data.sprites.other["official-artwork"].front_default,
        backgroundColor: ColorBackground(response.data.types[0].type.name)
        
      });
      setPokemon(copiaPokemon);
    } catch (error) {
      console.log("erro", error.response);
    }
  };

  return (
    <>
      {pokemon.map((elem) => {
        return (
          <StyledCard key={elem.id} background = {elem.backgroundColor} index={index}>
            <ContainerInfo>
              <StyledInfo>
                <StatsCard>
                  <p>#{elem.id}</p>
                  <p>{elem.name}</p>
                </StatsCard>
                <StatsType>
                  {elem.types.map((type,index) => {
                    return typesOfPokemons(type, index);
                  })}
                </StatsType>
              </StyledInfo>

              <ContainerImage backgroundImage={backgroundImage}>
                <StyledImage src={elem.mainImage} />
              </ContainerImage>
            </ContainerInfo>

            <ContainerBtn>
              <StyledBtnDetails onClick={() => details(elem, navigate)}>
                Detalhes
              </StyledBtnDetails>

              {location.pathname === "/" ? (
                <StyledBtnCapture onClick={() => addToPokedex(elem)}>
                  Capturar!
                </StyledBtnCapture>
              ) : (
                <StyledBtnRemove onClick={() => removeFromPokedex(elem)}>
                  Excluir
                </StyledBtnRemove>
              )}
            </ContainerBtn>
          </StyledCard>
        );
      })}
    </>
  );
};

export default Card;
