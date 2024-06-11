import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="z-10 w-full h-auto flex items-center justify-center bg-cover bg-center"
     >
      
      <div className="z-10 w-[90%] h-auto flex flex-wrap 
      xs:mt-[19%] xsm:mt-[20%] xsl:mt-[20.5%] sm:mt-[9.5%] md:mt-[9.5%] lg:mt-[9%] xl:mt-[9%]">
      
    <div className="w-full md:w-1/2 lg:w-1/4 ">
      <div className="w-full h-[550px] rounded-lg overflow-hidden p-2">
        <img className="w-full h-[100%] object-cover rounded-lg" 
        src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029946/MotoRock/Juan01_gjazzr.jpg" 
        alt="Juan"></img>
      </div> 
    </div> 

    <div className="w-full md:w-1/2 lg:w-1/4 ">
    <div className="w-full h-[550px] rounded-lg overflow-hidden p-2">
      <img className="w-full h-[100%] object-cover rounded-lg" 
      src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029945/MotoRock/Marian01_sxzfms.jpg"
      alt="Marian"></img>
      </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 "> 
      <div className="w-full h-[550px] rounded-lg overflow-hidden p-2">
      <img className="w-full h-[100%] object-cover rounded-lg" 
      src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029946/MotoRock/Brujo01_lcbwie.jpg" 
      alt="Brujo"></img>
      </div>
 </div>

      <div className="w-full md:w-1/2 lg:w-1/4"> 
      <div className="w-full h-[550px] rounded-lg overflow-hidden p-2">
      <img className="w-full h-[100%] object-cover rounded-lg" 
      src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029945/MotoRock/Pablo01_mjf9ob.jpg" 
      alt="Pablo"></img>
      </div>
    </div>
  </div>   
    </div>  

  );
};

export default Header;

// style={{ backgroundImage: `url(${fondo_header})` }}