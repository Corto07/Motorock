import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shows from "../Shows/Shows";
import Discografia from "../Discografia/Discografia";
import Fotos from "../Fotos/Fotos";
import Videos from "../Videos/Videos";
import Eventos from "../Eventos/Eventos";
import Contacto from "../Contacto/Contacto";

const Home = () => { 

  return (
    <div className="relative w-full">
      
      <NavBar/>
      <Header/>
      <Shows/>
      <Discografia/>
      <Fotos/>
      <Videos/>
      <Eventos/>
      <Contacto/>
      <Footer/> 
      
      <div className="fixed top-0 left-0 w-full h-full z-0 opacity-30">
        <img className="w-full h-full object-cover"
        src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029649/MotoRock/black-brick-wall-surface-texture_mcigm2.jpg'
        alt="fondo"
        ></img>
        
      </div>
    </div>
  );
};

export default Home;
