import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { goToDetails } from "../router/cordinator";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const [captureAlert, setCaptureAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const [initialValue, setInitialValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const [swap, setSwap] = useState("");
  const [page, setPage] = useState(1);


  //Função feita para mudar os pokemons, trocando os valores da url, fazendo que a requisição ocorra novamente e renderize novos pokemons
  const switchPage = () => {
    if (swap === "right") {
      setFinalValue(finalValue + 21);
      setPage(page + 1);
      setSwap("");
    }
    if (swap === "left") {
      setFinalValue(finalValue - 21);
      setPage(page - 1);
      if (finalValue === 0) {
        alert("Voce esta na primeira pagina!");
        setPage(1);
        setFinalValue(0);
      }
      setSwap("");
    }
    setInitialValue(finalValue);
  };

  useEffect(() => {
    switchPage();
  }, [swap]);

  useEffect(() => {
    getPokemons();
  }, [switchPage]);

  //pega todos pokemons da API
  const getPokemons = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=21&offset=${initialValue}`
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log("erro", error.response);
    }
  };


  //adicionar o pokemon que vem como parametro na pokedex
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
    setCaptureAlert(true);
  };

  //remove o pokemon que vem como parametro da pokedex
  const removeFromPokedex = (pokemon) => {
    const pokedexCopy = [...pokedex];
    const filter = pokedexCopy.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== pokemon.id
    );
    setPokedex(filter);
    setIsVisible(true);
    setDeleteAlert(true);
  };

  //vai para a pagina de detalhes, id do pokemon é passado como path params
  const details = async (pokemon, navigate) => {
    goToDetails(navigate, pokemon.id); 
  };

  const data = {
    pokemons,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    details,
    captureAlert,
    setCaptureAlert,
    deleteAlert,
    setDeleteAlert,
    page,
    swap,
    setSwap,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
