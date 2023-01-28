import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/Details/Details";
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage/>}/>
                <Route path="/pokedex" element = {<Pokedex/>}/>
                <Route path="/details" element = {<Details/>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default Router;