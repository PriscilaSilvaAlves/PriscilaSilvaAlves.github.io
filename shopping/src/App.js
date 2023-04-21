import './App.css';
import Home from './components/Home.js';
import Publi from './components/Publi.js';
import Buy from './components/Buy.js';
import Contact from './components/Contact.js';

function App({ itens }) {
  return (
    <>
      <Home></Home>
      <Publi></Publi>
      <Buy itens={ itens }></Buy>
      <Contact></Contact>
    </>
  );
}

export default App;
