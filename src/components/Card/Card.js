import axios from "axios";
import { useEffect, useState } from "react";
import { StyledCard } from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Card = ({url}) => {
    const context = useContext(GlobalContext)
    const {addToPokedex} = context

  const [pokemon, setPokemon] = useState({});
  useEffect(()=>{
    fetchPokemon()
  },[])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log("erro",error.response)
    }
  };


  return(
    <StyledCard>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <button onClick={()=>addToPokedex(pokemon)}>Adicionar</button>

    </StyledCard>
  )

};

export default Card;
