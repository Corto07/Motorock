import React from "react";
import imgLogo from "../../Assets/Logo_motorock_white.png"
import imgfondo from "../../Assets/fondo_navbar_1.jpg"


function NavBar () {
    return (

    <div className="z-50 fixed w-full flex items-center justify-center bg-cover bg-center shadow-lg shadow-black
    xs:h-[55px] xsm:h-[68px] xsl:h-[78px] sm:h-auto md:h-auto lg:h-auto xl:h-auto"
    style={{ backgroundImage: `url(${imgfondo})` }}
    >
        
    <div className="bg-transparent
    xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[30%]">
        <img className="xs:w-[50%] xsm:w-[50%] xsl:w-[50%] sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%]
        xs:ml-[8%] xsm:ml-[7%] xsl:ml-[7%] sm:ml-[18%] md:ml-[20%] lg:ml-[20%] xl:ml-[18%]"
        src={imgLogo} alt="Logo Motorock"></img>
    </div>
    
    <div className="w-[70%] hidden sm:block font-Fuente1 font-semibold italic bg-transparent sm:flex sm:items-center sm:justify-end 
    sm:text-[20px] md:text-[20px] lg:text-[28px] xl:text-[32px]">
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection"  href="/const" rel="noreferrer">Nosotros</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection"  href="/" rel="noreferrer">Shows</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection" href="/" rel="noreferrer">Discografía</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection" href="/" rel="noreferrer">Fotos</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection" href="/" rel="noreferrer">Videos</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection" href="/" rel="noreferrer">Eventos</a>
      <a className=" text-white sm:px-1 md:px-2 lg:px-2 xl:px-3 reflection sm:mr-11 md:mr-11 lg:mr-16 xl:mr-16" href="/" rel="noreferrer">Contacto</a>
    </div>
    
    
</div>
);

}

export default NavBar;