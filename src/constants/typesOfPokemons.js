import poison from "../assets/type/poison.svg";
import grass from "../assets/type/grass.svg";
import fire from "../assets/type/fire.svg";
import bug from "../assets/type/bug.svg";
import flying from "../assets/type/flying.svg";
import normal from "../assets/type/normal.svg";
import water from "../assets/type/water.svg";
import dark from "../assets/type/dark.svg";
import dragon from "../assets/type/dragon.svg";
import electric from "../assets/type/eletric.svg";
import fairy from "../assets/type/fairy.svg";
import fighting from "../assets/type/fighting.svg";
import ghost from "../assets/type/ghost.svg";
import ground from "../assets/type/ground.svg";
import ice from "../assets/type/ice.svg";
import psychic from "../assets/type/psychic.svg";
import rock from "../assets/type/rock.svg";
import steel from "../assets/type/steel.svg";

export const typesOfPokemons = (type, index) => {
  //ele recebe o tipo do pokemon, e de acordo com o tipo ele retorna a imagem ja estilizada do tipo em si
  switch (type) {
    case "poison":
      return <img key={index} src={poison} alt="poison" />;
    case "grass":
      return <img key={index} src={grass} alt="grass" />;
    case "fire":
      return <img key={index} src={fire} alt="fire" />;
    case "water":
      return <img key={index} src={water} alt="water" />;
    case "bug":
      return <img key={index} src={bug} alt="bug" />;
    case "flying":
      return <img key={index} src={flying} alt="flying" />;
    case "normal":
      return <img key={index} src={normal} alt="normal" />;
    case "dark":
      return <img key={index} src={dark} alt="dark" />;
    case "dragon":
      return <img key={index} src={dragon} alt="dark" />;
    case "electric":
      return <img key={index} src={electric} alt="electric" />;
    case "fairy":
      return <img key={index} src={fairy} alt="fairy" />;
    case "fighting":
      return <img key={index} src={fighting} alt="fighting" />;
    case "ghost":
      return <img key={index} src={ghost} alt="ghost" />;
    case "ground":
      return <img key={index} src={ground} alt="ground" />;
    case "ice":
      return <img key={index} src={ice} alt="ice" />;
    case "psychic":
      return <img key={index} src={psychic} alt="psychic" />;
    case "rock":
      return <img key={index} src={rock} alt="rock" />;
    case "steel":
      return <img key={index} src={steel} alt="steel" />;

    default:
      break;
  }
};
