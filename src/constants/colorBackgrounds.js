

export const ColorBackground = (type) =>{
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
    
        default:
          break;
      }

}