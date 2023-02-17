import { ContainerMovesStats } from "../styled"

export const MovesStats = ({pokemon}) =>{
    return(
        <ContainerMovesStats>
            <h3>Moves</h3>
            <p>{pokemon.moves[0].move.name}</p>
            <p>{pokemon.moves[1].move.name}</p>
            <p>{pokemon.moves[2].move.name}</p>
            <p>{pokemon.moves[3].move.name}</p>
            <p>{pokemon.moves[4].move.name}</p>
      </ContainerMovesStats>

    )
}