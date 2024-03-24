import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Style from "../Landing/landing.module.css"
import imgfondo from "../../Assets/Fondo_Landing.jpg";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Landing() {

  return (
    <div className={Style.contenedor}>
      
      <img className={Style.fondo} src={imgfondo} alt="Imagen de fondo"/>
      
      <div className={Style.titulo}>»»»» ROCK & BLUES ««««</div>

      <div className={Style.titulo1}>»»»» BAHIA BLANCA ««««</div>

      <div className={Style.titulo2}> <span>»»»» Bienvenidos al Sitio oficial de MotoRock Bahia Blanca «««« </span></div>
      
      <div className={Style.social}>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className={Style.icontwitter} />
        </a>
      
        <a href="https://www.facebook.com/profile.php?id=100048964278841/" target="_blank" rel="noreferrer">
          <FaFacebook className={Style.iconfacebook} />
        </a>
      
        <a href="https://www.instagram.com/motorock2023/" target="_blank" rel="noreferrer">
          <FaInstagram className={Style.iconinstagram} />
        </a>

        <a href="https://www.youtube.com/@Juan.Motorock/" target="_blank" rel="noreferrer">
          <FaYoutube className={Style.iconyoutube} />
        </a>
      
        <a href="https://wa.me/+5492914199129" target="_blank" rel="noreferrer">
          <FaWhatsapp className={Style.iconwhatsapp} />
        </a>      
      </div>
      
      <div>    
        <Link to='/home'>
          <button className={Style.boton} type="submit">ENTRAR</button>
        </Link>
      </div>  
      
    </div>
  );
};

export default Landing;
