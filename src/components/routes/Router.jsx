import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Tours from "../pages/tours/Tours";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </div>
  );
};

export default Router;
