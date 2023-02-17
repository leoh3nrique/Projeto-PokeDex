import Header from "../../components/Header/Header";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  ContainerDetails,
  ContainerDetailsPokemon,
  ContainerOtherStats,
  MainImage,
  StyledBtn,
} from "./styled";
import backgroundImage from "../../assets/backgroundImagePokemon.svg";
import { StyledH1 } from "../HomePage/styled";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { ColorBackground } from "../../constants/colorBackgrounds";
import { Images } from "./components/Images";
import { BaseStats } from "./components/BaseStats";
import { BasicStats } from "./components/BasicStats";
import { MovesStats } from "./components/MovesStats";
import CatchPokemon from "../../components/CatchPokemon/CatchPokemon";

const Details = () => {
  useEffect(() => {
    fetchDetailsPokemon();
  }, []);

  const context = useContext(GlobalContext);
  const {
    pokedex,
    addToPokedex,
    removeFromPokedex,
    captureAlert,
    deleteAlert,
  } = context;

  //é feita uma nova requisição com o id (que é pego do path params) e a url base, trazendo todas as informações do pokemon
  
  const [detailsPokemon, setDetailsPokemon] = useState([]);
  const params = useParams();

  const fetchDetailsPokemon = async () => {
    const copiaPokemon = [];
    const arrayTypes = [];
    try {
      const response = await axios.get(`${BASE_URL}/${params.id}/`);
      const types = response.data.types;
      //ele percorre os tipos do pokemon e adiciona no arrayTypes, trazendo uma maior facilidade na hora de renderizar esses tipos do pokemon
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
        mainImage:response.data.sprites.other["official-artwork"].front_default,
        backgroundColor: ColorBackground(response.data.types[0].type.name), //constante feita pra trazer a cor certa do background
      });
      setDetailsPokemon(copiaPokemon);
    } catch (error) {
      console.log("erro", error);
    }
  };

  return (
    <>
      {captureAlert && <CatchPokemon />}
      {deleteAlert && <CatchPokemon />}

      {detailsPokemon.map((elem, index) => {
        return (
          <div key={index}>
            <Header />
            {pokedex.find((pk) => pk.name === elem.name) === undefined ? (
              <StyledBtn color={"#33a4f5"} onClick={() => addToPokedex(elem)}>
                Adicionar
              </StyledBtn>
            ) : (
              <StyledBtn
                color={"#ff6262"}
                onClick={() => removeFromPokedex(elem)}
              >
                Remover
              </StyledBtn>
            )}

            <ContainerDetails backgroundImage={backgroundImage}>
              <StyledH1>Detalhes</StyledH1>
              <ContainerDetailsPokemon backgroundColor={elem.backgroundColor}>
                <Images
                  front={elem.sprites.front_default}
                  back={elem.sprites.back_default}
                />
                <BaseStats pokemon={elem} />
                <ContainerOtherStats backgroundImage={backgroundImage}>
                  <BasicStats pokemon={elem} />
                  <MainImage>
                    <img src={elem.mainImage} alt="Main Pokemon" />
                  </MainImage>
                  <MovesStats pokemon={elem} />
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
