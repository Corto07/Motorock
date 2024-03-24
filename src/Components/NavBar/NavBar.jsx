import React from "react";
import style from "../NavBar/navbar.module.css";
import imgLogo from "../../Assets/Logo_motorock_white.png"
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function NavBar () {

    return (
<div className={style.container}>
    
    <img className={style.image} src={imgLogo} alt="Logo Motorock"></img>
    
    
    <div className={style.menu}>
      <a className={style.estilo} href="/detail" rel="noreferrer">Nosotros</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Shows</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Discografia</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Fotos</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Videos</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Eventos</a>
      <a className={style.estilo} href="/detail" rel="noreferrer">Contacto</a>
    </div>
    
    <div className={style.social}>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter className={style.icontwitter} />
        </a>
  
        <a href="https://www.facebook.com/profile.php?id=100048964278841/" target="_blank" rel="noreferrer">
            <FaFacebook className={style.iconfacebook} />
        </a>
  
        <a href="https://www.instagram.com/motorock2023/" target="_blank" rel="noreferrer">
            <FaInstagram className={style.iconinstagram} />
        </a>

        <a href="https://www.youtube.com/@Juan.Motorock/" target="_blank" rel="noreferrer">
            <FaYoutube className={style.iconyoutube} />
        </a>
  
       <a href="https://wa.me/+5492914199129" target="_blank" rel="noreferrer">
          <FaWhatsapp className={style.iconwhatsapp} />
        </a>      
    </div>


</div>
);

}

export default NavBar;