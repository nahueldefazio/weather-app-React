import AppRoutes from "./routes/AppRoutes";
import {WeatherProvider} from "./context/weatherContext"
import "./App.css"

import React from "react";

function App() {
    return(
        <WeatherProvider>
            <AppRoutes/>
        </WeatherProvider>
        )

}

export default App;
