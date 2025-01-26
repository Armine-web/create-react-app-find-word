import { Main } from "./main.jsx";
import { useState } from "react"
export const Header = () =>{
    const[select, setSelect] = useState("6");

    const hendleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    return(
        <div>
            <h1> EXERCISE YOUR MEMORY</h1>
            <h3> Choose The Number Of Words </h3>
            <select value={select} onChange={hendleSelectChange}>
                <option value="6">6 words</option>
                <option value="9">9 words</option>
                <option value="12">12 words</option>
            </select>
            <Main numberOfWords={select} />  
        </div>
    )
}