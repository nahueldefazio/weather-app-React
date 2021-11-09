import {createContext, useState} from "react";
import axios from "axios";

export const WeatherContext = createContext()
const {Provider} = WeatherContext

export const WeatherProvider = ({children}) => {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = "e8a1ffc4742780c265efd9993a509053"

    function getManualWeather(city_name_input) {
        setLoading(true)

        const {cityName: city_name} = city_name_input
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&lang=es&units=metric`

        axios.get(url).then(res => {
            setWeather(res.data)
            setLoading(false)
        })
    }

    const contextValue = {
        getManualWeather,
        weather,
        setWeather,
        loading
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default WeatherContext