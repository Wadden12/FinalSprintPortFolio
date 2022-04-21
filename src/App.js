import React from "react";
import { Fragment } from "react";
import "./App.css";
import NavBar from "./UI/navbar";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./UI/footer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/intro" element={<Intro />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
