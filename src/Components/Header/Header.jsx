import React from "react";
import { Link } from "react-router-dom";
import videoPres from "../../Assets/Motorock_720.mp4"

const Header = () => {

  return (
    <>
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
      </> 
  );
};

export default Header;
