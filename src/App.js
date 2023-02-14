import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home  from "./Components/Home"
import About  from "./Components/About"
import Support  from "./Components/Support"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
