import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import WeatherContext from "../context/weatherContext";


function HomeScreen() {

    const {setWeather} = useContext(WeatherContext);

    return (
        <div className={'container d-flex flex-column align-items-center'}>
                <h1>Weather App</h1>
                <img src={'https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif'}
                     className="rounded-circle gif my-3"/>


            <Link to={'/weather-app-React/auto-zone'} className={'btn btn-danger w-50 my-4'}>
                Auto-Detection Zone
            </Link>
            <Link to={'/weather-app-React/manual-zone'} className={'btn btn-info w-50'} onClick={setWeather(null)}>
                Manual-Detection Zone
            </Link>
        </div>

    );
}

export default HomeScreen;