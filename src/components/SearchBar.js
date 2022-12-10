import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'


function SearchBar() {
    const [city,setCity] = useState("");
    const [coor, setCoor] =useState({
        lat:"",
        lon:"",
        change: false,
    })


    useEffect(() => {
        // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=07d464ac349f7281b7c32c4afb11ca53`)
        // .then((res) => res.json())
        // .then((res) => {
        //     setCoor({lat:res[0].lat , lon: res[0].lon}) 
        //     console.log(coor) 
        // })
        
    },[city])

    const citySubmit = (e) => {
        if(e.key === "Enter"){
            setCity(e.target.value)
            getData();
        }
    }
    const getData = async () => {

        const coordinates = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=07d464ac349f7281b7c32c4afb11ca53`)
        
        const weather = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.data[0].lat}&lon=${coordinates.data[0].lon}&appid=07d464ac349f7281b7c32c4afb11ca53&units=metric`)
        // const log =  await console.log(weather.data);

       setTimeout(()=> {
        const eightDays = axios(`https://api.weatherbit.io/v2.0/forecast/&lat=${coordinates.data[0].lat}&lon=${coordinates.data[0].lon}&key=ad24b73d6fc2411ea06d8b7c086c17d0	
        `)
        .then((res) => res.json())
        console.log(eightDays);
       },2000)

        // .then(await ((res) =>setCoor({lat:res[0].lat , lon: res[0].lon})))
        // .then(await console.log(coor))
        
    }
    

  return (
    <div>
       <input onKeyPress={citySubmit} placeholder="enter a city name"></input>
       
        <select>
          
        </select>
    </div>
  )
}

export default SearchBar