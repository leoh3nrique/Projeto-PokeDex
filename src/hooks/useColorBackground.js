
export const useColorBackground = (type) =>{
    let color = "";
    switch (type) {
      case "grass":
        color = "#729F92";
        break;

      case "fire":
        color = "#EAAB7D";
        break;

      case "water":
        color = "#71C3FF";
        break;
      case "bug":
        color = "#76A866";
        break;
      case "normal":
        color = "#BF9762";
        break;

      default:
        break;
    }
    return {color}
}