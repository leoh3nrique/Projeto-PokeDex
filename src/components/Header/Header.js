import { StyledImage } from "./styled"
import imageHeader from "../../assets/imageHeader.svg"
import { goToHome, goToPokedex } from "../../router/cordinator"
import { useNavigate } from "react-router-dom"


const Header = () =>{
    const navigate = useNavigate()

    return(
        <>
            <StyledImage src={imageHeader}/>
            <button onClick={()=> goToPokedex(navigate)}>Pokedex</button>
            <button onClick={()=> goToHome(navigate)}>home</button>
        </>
    )
}

export default Header