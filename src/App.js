import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Components/Home/Home"
import Landing from "./Components/Landing/Landing";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;