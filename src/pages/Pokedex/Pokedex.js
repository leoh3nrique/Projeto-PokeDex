import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../constants/url";


const Pokedex = () =>{
    const context = useContext(GlobalContext)
    const {pokedex} = context
    return (
        <>
            <Header/>
            
            {pokedex.map((elem, index)=>{
                return <Card key={index} url={`${BASE_URL}/${elem.name}`}/>
            })}

        </>

    )
}
export default Pokedex;