import angryPikachu from "../../../assets/angry-pikachu.gif";
import { StyledEmptyPokedex } from "../styled";

export const EmptyPokedex = () => {
  return (
    <StyledEmptyPokedex>
      <img src={angryPikachu} />
      <span>Sua pokedex está vazia!</span>
    </StyledEmptyPokedex>
  );
};
