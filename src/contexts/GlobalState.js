import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { goToDetails } from "../router/cordinator";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [detailsPokemon, setDetailsPokemon] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=21&offset=0`);
      setPokemons(response.data.results);
    } catch (error) {
      console.log("erro", error.response);
    }
  };

  const addToPokedex = (pokemon) => {
    const copyPokedex = [...pokedex];

    const isAlreadyOnPokedex = copyPokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );
    if (!isAlreadyOnPokedex) {
      let newObj = {
        ...pokemon,
      };
      copyPokedex.push(newObj);
    }
    setPokedex(copyPokedex);
    setIsVisible(true);
  };

  const removeFromPokedex = (pokemon) => {
    const pokedexCopy = [...pokedex];
    const filter = pokedexCopy.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== pokemon.id
    );
    setPokedex(filter);
    setIsVisible(true);
  };

  const details = async(pokemon, navigate, params) => {
    try{
      const response = await axios.get(pokemon.url)
      // `${BASE_URL}/`
      let newObj ={
        ...response.data,
        name:pokemon.name,
        background: pokemon.backgroundColor,
        id:pokemon.id,
        mainImage: pokemon.mainImage,
        images: pokemon.images,
        types: pokemon.types
      }
      setDetailsPokemon(newObj)
      goToDetails(navigate, pokemon.id)

    }catch(erro){
      console.log(erro.response)
    }    


  };

  const data = {
    pokemons,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    details,
    detailsPokemon,
    setDetailsPokemon,
    isVisible,
    setIsVisible,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
