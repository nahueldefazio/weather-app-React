import React, {useContext} from 'react';
import WeatherContext from "./context/weatherContext";
import {Link} from "react-router-dom";

function ShowData() {

    const {weather} = useContext(WeatherContext);
    console.log(weather)

    if (weather === null){
       return null
    }else {
        return (
            <>
                <div>
                    <div className={'d-flex align-items-center'}>
                        <h1>{weather.name} - {weather.sys.country}</h1>
                        <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={"icon_weather"}/>
                    </div>
                    <h1>Temperatura: {weather.main.temp}°</h1>
                    <h1>Sensación térmica: {weather.main.feels_like}°</h1>
                    <h1>Temp. Min: {weather.main.temp_min}°</h1>
                    <h1>Temp. Max: {weather.main.temp_max}°</h1>
                    <h1>Humedad: {weather.main.humidity}%</h1>
                </div>
                <Link to={'/weather-app-React/'} className={'btn btn-warning'}>
                    Menu
                </Link>
            </>


        );
    }


}

export default ShowData;