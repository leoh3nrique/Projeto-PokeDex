import { typesOfPokemons } from "../../../constants/typesOfPokemons";
import { ContainerBasicStats } from "../styled";

export const BasicStats = ({pokemon}) =>{
    return(

        <ContainerBasicStats>
        <p className="pokemonId">#{pokemon.id}</p>
        <p className="pokemonName">{pokemon.name}</p>

        {pokemon.types.map((elem, index) => {
          return typesOfPokemons(elem, index);
        })}
      </ContainerBasicStats>

    )
}