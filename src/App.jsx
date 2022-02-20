import React from "react";
import "./App.css";
import Header from "./components/UI/header/Header";
import Composition from "./components/UI/composition/Composition";
import Hero from "./components/UI/hero/Hero";
import Slider from "./components/UI/slider/Slider";
import NavBar from "./components/UI/header/NavBar";
import Routes from "./components/routes/Router";
import Footer from "./components/UI/footer/Footer"

const App = () => {
  return (
    <main>
      <Header />
      <Routes />
      <Footer/>
    </main>
  );
};

export default App;
