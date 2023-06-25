import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "./admin";

function RouteSwitch(){
    return (
        <BrowserRouter>
            <Routes>    
                <Route exac path="/" element={<App />} />
                <Route exact path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;