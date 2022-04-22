import React from "react";
import { Fragment } from "react";
import "./App.css";
import NavBar from "./UI/navbar";
import { Routes, Route } from "react-router-dom";

import About from "./components/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./UI/footer";
import Expense from "./components/Projects/projectA/expense";
import GaryBlue from "./components/Projects/projectB/garyBlue";
import Python from "./components/Projects/projectC/python";
import Buisness from "./components/Projects/projectD/buisness";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/projects/*" element={<Projects />}>
            <Route path="projectA" element={<Expense />}></Route>
            <Route path="projectB" element={<GaryBlue />}></Route>
            <Route path="projectC" element={<Python />}></Route>
            <Route path="projectD" element={<Buisness />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
