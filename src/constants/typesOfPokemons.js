import poison from "../assets/type/poison.svg"
import grass from "../assets/type/grass.svg"
import fire from "../assets/type/fire.svg"
import bug from "../assets/type/bug.svg"
import flying from "../assets/type/flying.svg"
import normal from "../assets/type/normal.svg"
import water from "../assets/type/water.svg"


export const typesOfPokemons = (type, index) =>{


    switch(type){
        case "poison":
            return <img key={index} src={poison} alt="poison"/>
    
        case "grass":
            return <img key={index} src={grass} alt="grass"/>
            
        case "fire":
            return <img key={index} src={fire} alt="fire"/>
        case "water":
            return <img key={index} src={water} alt="water"/>
    
        case "bug":
            return <img key={index} src={bug} alt="bug"/>

        case "flying":
            return <img key={index} src={flying} alt="flying"/>
              
        case "normal":
            return <img key={index} src={normal} alt="normal"/>

        default:
            break       
    }
}

