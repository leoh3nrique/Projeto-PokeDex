import Header from "../../components/Header/Header";
import { useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../constants/url";
import { ContainerPokedex, StyledHeaderAnimated, StyledPokedex } from "./styled";
import { useLocation } from "react-router-dom";


const Pokedex = () =>{
    const context = useContext(GlobalContext)
    const {pokedex} = context
    const location = useLocation()
    
    return (
        <>
            <Header/>
            <ContainerPokedex>
                {location.pathname === "/pokedex" && <StyledHeaderAnimated a = {1}>Meus Pokémons</StyledHeaderAnimated>}
                <StyledPokedex>
                    {pokedex.map((elem, index)=>{
                        return <Card key={index} url={`${BASE_URL}/${elem.name}`}/>
                    })}
                    

                </StyledPokedex>
            </ContainerPokedex>

        </>

    )
}
export default Pokedex;