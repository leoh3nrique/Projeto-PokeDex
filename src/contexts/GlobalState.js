import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"

const GlobalState = ({children}) =>{
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(()=>{
        getPokemons()
    },[])


    const getPokemons = async () =>{
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            setPokemons(response.data.results)
        }catch(error){
            console.log("erro",error.response)
        }
    }


    const addToPokedex = (pokemon) =>{
        const findInPokedex = pokedex.find((elem)=>{
            return elem.id === pokemon.id
        })
        if(!findInPokedex){
            const copyPokedex = [...pokedex, pokemon]
            setPokedex(copyPokedex)


        }else{
            console.log("ja esta adicionado")
        }

    }

    const data = {
        pokemons,
        pokedex,
        addToPokedex
    }




    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export default GlobalState