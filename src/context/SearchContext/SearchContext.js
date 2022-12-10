import { createContext, useContext, useState } from "react";

const SelectContext = createContext()

export const SelectProvider = ({children}) => {
    const [select, setSelect]=useState("izmir")
    const values ={select,setSelect}

    return (<SelectContext.Provider value={values}>{children} </SelectContext.Provider>);
}
export const useSelect = () =>{
    const context = useContext(SelectContext);
    return context
} 
