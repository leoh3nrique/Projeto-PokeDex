
export const ColorBackground = (type) =>{
    //recebe o tipo de pokemon, e de acordo com o tipo, ele retorna a cor certa 
    let color =""
    switch (type) {
        case "grass":
          return color = "#729F92";
        case "fire":
          return color = "#EAAB7D";
        case "water":
          return color = "#71C3FF";
        case "bug":
          return color = "#76A866";
        case "normal":
          return color = "#BF9762";
        case "poison":
          return color = "#9964AF"
        case "electric":
          return color = "#F1DF8E"
        case "ground":
          return color = "#F5A176"
        case "fairy":
          return color = "#FABCF6"
        case "fighting":
          return color = "#E46D90"
        case "psychic":
          return color = "#EE8A8E"
        case "rock":
          return color = "#D6CAA8"
        case "ghost":
          return color = "#7389CA"
        case "ice":
          return color = "#9AE7DB"
        case "dragon":
          return color = "#2C89D8"
        case "steel":
          return color = "#D3D0D0"
        case "dark":
          return color = "#776F7F"
        default:
          break;
      }

}