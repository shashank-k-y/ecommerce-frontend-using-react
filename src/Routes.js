import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Privateroutes from "./auth/helper/Privateroutes";

import Home from "./core/Home";
import Signup from "./user/signup";


const Routes = () => {
    return(
        <BrowserRouter>
        <switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
    
        </switch>
        </BrowserRouter>

    );
};

export default Routes;

