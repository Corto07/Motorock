import React from "react";
import Juan from "../../Assets/Juan01.jpg";
import Marian from "../../Assets/Marian01.jpg";
import Brujo from "../../Assets/Brujo01.jpg";
import Pablo from "../../Assets/Pablo01.jpg";
// import fondo_header from "../../Assets/fondo_header01.jpg";
// import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-400 bg-cover bg-center"
     >
      
      <div className="w-[90%] h-auto flex flex-wrap mt-4 mb-4">
      
    <div className="w-full md:w-1/2 lg:w-1/4 p-2">
      <div className="w-full h-[550px] rounded-lg overflow-hidden m-2">
        <img className="w-full h-[100%] object-cover rounded-lg" src={Juan} alt="Juan"></img>
      </div> 
    </div> 

    <div className="w-full md:w-1/2 lg:w-1/4 p-2">
    <div className="w-full h-[550px] rounded-lg overflow-hidden m-2">
      <img className="w-full h-[100%] object-cover rounded-lg" src={Marian} alt="Marian"></img>
      </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 p-2"> 
      <div className="w-full h-[550px] rounded-lg overflow-hidden m-2">
      <img className="w-full h-[100%] object-cover rounded-lg" src={Brujo} alt="Brujo"></img>
      </div>
 </div>

      <div className="w-full md:w-1/2 lg:w-1/4 p-2"> 
      <div className="w-full h-[550px] rounded-lg overflow-hidden m-2">
      <img className="w-full h-[100%] object-cover rounded-lg" src={Pablo} alt="Pablo"></img>
      </div>
    </div>
  </div>   
    </div>  

  );
};

export default Header;

// style={{ backgroundImage: `url(${fondo_header})` }}