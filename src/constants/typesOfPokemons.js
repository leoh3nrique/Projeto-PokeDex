import poison from "../assets/type/poison.svg"
import grass from "../assets/type/grass.svg"
import fire from "../assets/type/fire.svg"
import bug from "../assets/type/bug.svg"
import flying from "../assets/type/flying.svg"
import normal from "../assets/type/normal.svg"
import water from "../assets/type/water.svg"


export const typesOfPokemons = (type) =>{


    switch(type){
        case "poison":
            return <img src={poison}/>
    
        case "grass":
            return <img src={grass}/>
            
        case "fire":
            return <img src={fire}/>
        case "water":
            return <img src={water}/>
    
        case "bug":
            return <img src={bug}/>

        case "flying":
            return <img src={flying}/>
              
        case "normal":
            return <img src={normal}/>

        default:
            break       
    }
}

