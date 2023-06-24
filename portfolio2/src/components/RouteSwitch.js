import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "../App";
import Admin from "./admin";

function RouteSwitch(){
    return (
        <HashRouter>
            <Routes>    
                <Route path="/" element={<App />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </HashRouter>
    );
}

export default RouteSwitch;