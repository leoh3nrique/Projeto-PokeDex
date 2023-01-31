import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerImage, ContainerInfo, StyledCard, StyledImage, StyledInfo } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useLocation, useNavigate } from "react-router-dom";
import { typesOfPokemons } from "../../constants/typesOfPokemons";
import backgroundImage from "../../assets/backgroundImagePokemon.svg"

const Card = ({ url }) => {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const context = useContext(GlobalContext);
  const { addToPokedex, details } = context;

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
        ...response.data,
        name: response.data.name,
        id: response.data.id,
        types: arrayTypes,
        images: response.data.sprites,
        mainImage: response.data.sprites.other.home.front_default
      });
      setPokemon(copiaPokemon);
    } catch (error) {
      console.log("erro", error.response);
    }
  };



  return (
    <>
      {pokemon.map((elem) => {
        let color = ""
        switch (elem.types[0]) {
          case "grass":
            color = "#729F92"
            break;
        
          case "fire":
            color = "#EAAB7D"
            break;
        
          case "water":
            color = "#71C3FF"
            break;
          case "bug":
            color = "#76A866"
            break;
          case "normal":
            color = "#BF9762"
            break;
        
          default:
            break;
        }


        return (
          <StyledCard key={elem.id} background = {color}  >
            <ContainerInfo >
              <StyledInfo>
                <p>{elem.name}</p>
                {elem.types.map((type)=>{
                  return typesOfPokemons(type)
                })}
              </StyledInfo>
              <ContainerImage backgroundImage = {backgroundImage}>
                <StyledImage  src={elem.mainImage}/>
              </ContainerImage>

            </ContainerInfo>
            

            <div>
              {location.pathname === "/" ? (
                <button onClick={() => addToPokedex(elem)}>Adicionar</button>
              ) : (
                <button>Remove</button>
              )}
              <button onClick={() => details(elem, navigate)}>Detalhes</button>
            </div>
          </StyledCard>
        );
      })}
    </>
  );
};

export default Card;
