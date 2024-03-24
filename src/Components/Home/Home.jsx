import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./home.module.css";


import Header from "../Header/Header";

function Home() { 

  return (
    <div className={style.container}>

      <NavBar/>
      <Header/>
      <Footer/> 

    </div>
  );
};

export default Home;
