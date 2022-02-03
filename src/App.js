import "./App.css";
import React from "react";

import Aulas from "./components/Aulas";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";
import NotFound from "./components/NotFound";
import Aula from "./components/Aula";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assistir from "./components/Assistir";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/aulas/:id" element={<Aula />}></Route>
          <Route path="/aulas" element={<Aulas />}></Route>
          <Route path="/assistir" element={<Assistir />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
