import React from "react";
import imagen from "../../Assets/imgUnder.png"
import { Link } from "react-router-dom";

const UnderConst = () => {

    return (
      <div className="text-center bg-black">
        <img className="mt-12 mb-20 block flex justify-center mx-auto w-[70%]" src={imagen} alt="Sitio en Construcción" />
        <Link to="/">
          <button className="px-4 py-2 border border-yellow-400 rounded-lg text-yellow-400 hover:text-red-500 hover:border-red-500">Regresar</button>
        </Link>
      </div>
    )
}

export default UnderConst;