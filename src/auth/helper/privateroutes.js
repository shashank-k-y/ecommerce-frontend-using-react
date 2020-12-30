import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

import {isAuthenticated} from "./index";

 const Privateroutes=({children, ...rest})=> {
    return (
        <Route
            {...rest}
            render = {(props)=>
                isAuthenticated 
                ? (
                    <Component {...props}/>
                ):(
                    <Redirect
                    to = {{
                        pathname: "/signin",
                        state: {from:props.location},
                    }}
                    />
                )
            }
        />
    );
}
export default Privateroutes