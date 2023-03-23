import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Service from '../Service/Service'
import Signup from "../SignUp/Signup";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Routes>
    </div>
  );
};

export default Routers;
