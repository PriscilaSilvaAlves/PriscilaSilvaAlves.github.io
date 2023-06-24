import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "./admin";

function RouteSwitch(){
    return (
        <HashRouter>
            <Routes>    
                <Route exac path="/" element={<App />} />
                <Route exact path="/#quem-e" element={<App />} />
                <Route exact path="/admin" element={<Admin />} />
            </Routes>
        </HashRouter>
    );
}

export default RouteSwitch;