import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import AutoGeoScreen from "../screen/AutoGeoScreen";
import ManualGeoScreen from "../screen/ManualGeoScreen";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/weather-app-React/'} exact component={HomeScreen}/>
                <Route path={'/weather-app-React/auto-zone'} exact component={AutoGeoScreen}/>
                <Route path={'/weather-app-React/manual-zone'} exact component={ManualGeoScreen}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;