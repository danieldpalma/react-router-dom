import "./App.css";
import React from "react";

import Aulas from "./components/Aulas";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/aulas" element={<Aulas />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
