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
    StyledBtnRemove,
  } from "../../../components/Card/styled";
  import { typesOfPokemons } from "../../../constants/typesOfPokemons";
import backgroundImage from "../../../assets/backgroundImagePokemon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";

  
  


export const PokedexCard = () => {
    const context = useContext(GlobalContext);
    const { pokedex,  details, removeFromPokedex } = context;
    const navigate = useNavigate();
    const params = useParams()

    
    return (
        <>
      {pokedex.map((elem) => {
        return (
          <StyledCard key={elem.id} background = {elem.backgroundColor} >
            <ContainerInfo>
              <StyledInfo>
                <StatsCard>
                  <p>#{elem.id}</p>
                  <p>{elem.name}</p>
                </StatsCard>
                <StatsType>
                  {elem.types.map((type, index) => {
                    return typesOfPokemons(type, index);
                  })}
                </StatsType>
              </StyledInfo>

              <ContainerImage backgroundImage={backgroundImage}>
                <StyledImage src={elem.mainImage} />
              </ContainerImage>
            </ContainerInfo>

            <ContainerBtn>
              <StyledBtnDetails onClick={() => details(elem, navigate, params)}>
                Detalhes
              </StyledBtnDetails>

              <StyledBtnRemove onClick={() => removeFromPokedex(elem)}>
                Excluir
              </StyledBtnRemove>
            </ContainerBtn>
          </StyledCard>
        );
      })}
    </>
  );
};
