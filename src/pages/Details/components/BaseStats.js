import { ContainerBaseStats, DivFilha, DivPai } from "../styled";
export const BaseStats = ({pokemon}) => {
  return (
    <ContainerBaseStats>
      <h3>BaseStats</h3>
      {pokemon.stats.map((elem, index) => {
        return (
          <div className="stats" key={index}>
            <p>{elem.stat.name}</p>
            <p className="baseStat">{elem.base_stat}</p>
            <DivPai>
              <DivFilha width={elem.base_stat}></DivFilha>
            </DivPai>
          </div>
        );
      })}
    </ContainerBaseStats>
  );
};
