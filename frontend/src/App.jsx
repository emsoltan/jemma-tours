import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Home/Navigation/Header";
import Footer from "./components/Home/Footer/Footer";
// import Slider from "./components/UI/Slider"

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
