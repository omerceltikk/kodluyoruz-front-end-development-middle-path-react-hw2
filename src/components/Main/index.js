import React from 'react'
import { useWheather } from '../../context/WeatherContext/WeatherContext'

function Main() {
    const {hour, days, icons, temps} = useWheather();
    return (

        <div className="Main">
        { (
          <>
          <div className='section'>
            <div className="weather today">
              <p>{days[0]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icons[0]}@2x.png`}
                alt=""
              />
              <div>
                <span>{temps[0].temp_max}º</span>
                <span>{temps[0].temp_min}º</span>
              </div>
            </div>
            <div className="weather">
              <p>{days[1]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icons[1]}@2x.png`}
                alt=""
              />
              <div>
                <span>{temps[1].temp_max}º</span>
                <span>{temps[1].temp_min}º</span>
              </div>
            </div>
            <div className="weather">
              <p>{days[2]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icons[2]}@2x.png`}
                alt=""
              />
              <div>
                <span>{temps[2].temp_max}º</span>
                <span>{temps[2].temp_min}º</span>
              </div>
            </div>
            <div className="weather">
              <p>{days[3]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icons[3]}@2x.png`}
                alt=""
              />
              <div>
                <span>{temps[3].temp_max}º</span>
                <span>{temps[3].temp_min}º</span>
              </div>
            </div>
            <div className="weather">
              <p>{days[4]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${icons[4]}@2x.png`}
                alt=""
              />
              <div>
                <span>{temps[4].temp_max}º</span>
                <span>{temps[4].temp_min}º</span>
              </div>
            </div>
            </div>
          </>
        )}
      </div>
   
  )
}

export default Main