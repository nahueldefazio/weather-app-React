import AppRoutes from "./routes/AppRoutes";
import {WeatherProvider} from "./context/weatherContext"
import "./App.css"

function App() {
    return(
        <WeatherProvider>
            <AppRoutes/>
        </WeatherProvider>
        )

}

export default App;
