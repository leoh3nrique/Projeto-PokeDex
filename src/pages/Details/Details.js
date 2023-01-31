import Header from "../../components/Header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Details = () =>{
    const context = useContext(GlobalContext)
    const {detailsPokemon} = context
    console.log(detailsPokemon)

    return  (
        <>
            <Header/>

        </>
    )
}
export default Details;