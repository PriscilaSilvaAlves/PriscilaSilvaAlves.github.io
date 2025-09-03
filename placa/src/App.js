import './App.css';
import PlacasVerticais from './pages/PlacasVerticais';
import PlacasHorizontais from './pages/PlacasHorizontais';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App (){
    return(
        <div className="App">
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/vertical" element={ <PlacasVerticais /> } />
                    <Route path="/horizontal" element={ <PlacasHorizontais /> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;