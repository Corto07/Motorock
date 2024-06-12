import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => { 

  return (
    <div className="relative w-full">
      
      <NavBar/>
      <Header/>
      <Footer/> 
      
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <img
        className="w-full h-full object-cover"
        src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1718069333/MotoRock/black-brick-wall-surface-texture_2_ze3ct6.jpg'
        ></img>
        
      </div>
    </div>
  );
};

export default Home;
