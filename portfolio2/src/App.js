import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Nav from "./components/Nav";
import './App.css';
import Contato from "./components/contato";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Header />
        <Main />
        <Contato />
        <Footer />
      </div>
    </>
  );
}

export default App;