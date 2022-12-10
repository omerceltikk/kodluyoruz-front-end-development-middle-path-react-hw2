import React, { useContext } from 'react'
import cities from "../cities_of_turkey.json"
import { useSelect } from '../../context/SearchContext/SearchContext'

function Header() {
const { setSelect }=useSelect();

const handleChange = (e) => {
    setSelect(e.target.value)
}
const setKeyValue = (e) => {
    if (e.key === "Enter") {
    setSelect(e.target.value)
    }
}

  return (
    <div>
        <select onChange={handleChange}>
            {
                cities.map((e) => (
                    <option key={e.id} value={e.name}>{e.name}</option>
                ))
            }
        </select>
        <p> or </p>
        <div> 
            <input type="text" placeholder="enter a city" onKeyDown={setKeyValue}></input>
        </div>
    </div>
  )
}

export default Header