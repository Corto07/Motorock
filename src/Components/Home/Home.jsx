import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./home.module.css";

import videoPres from "../../Assets/Motorock_720.mp4"

function Home() { 

  return (
    <div className={style.container}>

      <NavBar/>
      <Footer/>


      <div className={style.videopres}>
        <video className={style.video} muted autoPlay loop>
          <source src={videoPres} type="video/mp4">
          </source>
        </video>
      </div>         
      <div className={style.capa}></div> /* Capa para darle un toque de opacidad a la imagen */
      <div className={style.capafondo}></div> /* Para que tenga un fondo */
      
      <div>    
        <Link to='/'>
          <button className={style.boton} type="submit">Volver</button> 
        </Link>
      </div>    

    </div>
  );
};

export default Home;
