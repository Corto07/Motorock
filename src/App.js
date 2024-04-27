import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Components/Home/Home"
import UnderConst from "./Pages/UnderConst/UnderConst";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/const' element={<UnderConst />} />
      </Routes>

    </div>
  );
}

export default App;