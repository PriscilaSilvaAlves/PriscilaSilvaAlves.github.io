import React from 'react';
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
        <Footer />
      </div>
    </>
  );
}

export default App;
