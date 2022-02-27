import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Home from "../Home/Home";
import About from "../Pages/about/About";
import Tours from "../Pages/tours/Tours";
import Contact from "../Pages/contact/Contact";
import Login from "../Pages/login-register/Login";
import Register from "../Pages/login-register/Register";
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
