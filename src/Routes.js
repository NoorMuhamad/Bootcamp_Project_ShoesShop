import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbarmenu from "./components/Navbarmenu";
import Upcoming from "./components/Upcoming";
import  Upcomingproduct from "./components/Upcomingproduct";


export const Routes = () => {
    return (
        <Router>
            <Navbarmenu/>
            <div>
                <Switch>
                    <Route exact path="/"><Upcoming/></Route>
                    <Route path="/product/:id"><Upcomingproduct/></Route>
                </Switch>
            </div>
        </Router>
    )
}
