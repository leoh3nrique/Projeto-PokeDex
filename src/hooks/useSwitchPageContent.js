import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../router/cordinator"

export const useSwitchPageContent = () =>{
    const [initialValue, setInitialValue] = useState(0)
    const [finalValue, setFinalValue] = useState(21)
  
    const a = (navigate, setInitialValue, setFinalValue)=>{
        setInitialValue(finalValue+1)
        setFinalValue(finalValue+21)
        console.log(initialValue)
        goToHome(navigate)
      }
    
    return{initialValue,finalValue,a, setInitialValue, setFinalValue}
    

}