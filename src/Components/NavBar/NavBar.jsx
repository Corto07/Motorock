import React from "react";
import imgLogo from "../../Assets/Logo_motorock_white.png"
import imgfondo from "../../Assets/fondo_navbar_1.jpg"


function NavBar () {
    return (

    <div className="w-full h-auto flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${imgfondo})` }}
    >
        
    <div className="w-[30%] bg-transparent">
        <img className="w-[70%] ml-16 " src={imgLogo} alt="Logo Motorock"></img>
    </div>
    
    <div className="w-[70%] font-Fuente1 italic text-[30px] bg-transparent flex items-center justify-end">
      <a className=" text-white m-3 " href="/const" rel="noreferrer">Nosotros</a>
      <a className=" text-white m-3 " href="/" rel="noreferrer">Shows</a>
      <a className=" text-white m-3 " href="/" rel="noreferrer">Discografía</a>
      <a className=" text-white m-3 " href="/" rel="noreferrer">Fotos</a>
      <a className=" text-white m-3 " href="/" rel="noreferrer">Videos</a>
      <a className=" text-white m-3 " href="/" rel="noreferrer">Eventos</a>
      <a className=" text-white m-3  mr-20" href="/" rel="noreferrer">Contacto</a>
    </div>
    
    
</div>
);

}

export default NavBar;