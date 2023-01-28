import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Card from "../../components/Card/Card";


const Pokedex = () =>{
    const context = useContext(GlobalContext)
    const {pokedex} = context
    console.log("pokedex",pokedex)
    return (
        <>
            <Header/>
            
            {pokedex.map((elem, index)=>{
                return <Card key={index} url={elem.url}/>
            })}

        </>

    )
}
export default Pokedex;