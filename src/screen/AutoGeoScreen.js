import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import ShowData from "../showData";
import {Button, Spinner} from "react-bootstrap";
import WeatherContext from "../context/weatherContext";
import {Link} from "react-router-dom";

function AutoGeoScreen(props) {
    const [status, setStatus] = useState("");

    const {setWeather} = useContext(WeatherContext);

    const API_KEY = "e8a1ffc4742780c265efd9993a509053"

    function coords(position) {

        const {latitude: lat, longitude: lon} = position.coords

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=es&units=metric`

        axios.get(url).then(res => {
            console.log(res)
            setWeather(res.data)
            setStatus(res.statusText)
        })
    }

    function getWeather() {
        navigator.geolocation.getCurrentPosition(coords)
    }

    useEffect(() => {
        getWeather()
    }, []);


    if (status === "OK") {
        return (
            <>
                <ShowData/>

            </>
        );
    } else {
        return (
            <>
                <Button variant="primary" disabled className={'d-block m-auto mt-5'}>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>

            </>


        )
            ;
    }
}

export default AutoGeoScreen;