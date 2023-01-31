import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [detailsPokemon, setDetaisPokemon] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
    const response = await axios.get(`${BASE_URL}`);
     setPokemons(response.data.results)

    } catch (error) {
      console.log("erro", error.response);
    }
  };


  const addToPokedex = (pokemon) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon];
      setPokedex(newPokedex);
    }
   
  };

  const removeFromPokedex = (pokemon) =>{
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemon.name
    );

    setPokedex(newPokedex);
  }

  

  const details = (pokemon, navigate) => {
    setDetaisPokemon(pokemon);
    navigate("/details");
  };

  const data = {
    pokemons,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    details,
    detailsPokemon,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
