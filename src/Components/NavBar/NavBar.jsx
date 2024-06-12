import React, { useState, useEffect } from 'react';

function NavBar () {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById('sidebar');
      const openSidebarButton = document.getElementById('open-sidebar');
      if (sidebar && openSidebarButton && !sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

        document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (

    <div className="z-50 fixed w-full h-auto flex items-center justify-center shadow-lg shadow-black"
    style={   
      { 
        background:
        "linear-gradient(to right, black, black, black, transparent, black, black, black)",
      }
      }   
    
    // style={{ 
    //   backgroundImage: "url('https://res.cloudinary.com/dhmkge0ia/image/upload/v1718069333/MotoRock/black-brick-wall-surface-texture_2_ze3ct6.jpg')",    
    // }}
    >

    {/* Burguer Menu */}
    <div className='xs:w-[20%] xsm:w-[20%] xsl:w-[20%] sm:hidden '>
        <button className="text-white xs:ml-6 xsm:ml-7 xsl:ml-8 " id="open-sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

        {/* Sidebar */}
        <div className={`fixed xs:top-[9%] xsm:top-[9%] xsl:top-[9%] sm:hidden left-0 text-white w-96 h-full transition-transform transform ${sidebarOpen ? 'translate-x-0 ' : '-translate-x-full'} ease-in-out duration-300`}
            style={   
              { 
                background:
                "linear-gradient(to right, black, black, transparent)",
                }
              }   
            id="sidebar">
            {/* Sidebar Content */}
            <div className="mt-4">
                {/* <h1 className="text-2xl text-sky-600 ml-5 font-semibold">Menú</h1> */}
                <ul className="mt-4">
                    <li className="mb-3 ml-5"><a href="#home" className="block hover:text-sky-600">Nosotros</a></li>
                    <li className="mb-3 ml-5"><a href="#about" className="block hover:text-sky-600">Shows</a></li>
                    <li className="mb-3 ml-5"><a href="#project" className="block hover:text-sky-600">Discografía</a></li>
                    <li className="mb-3 ml-5"><a href="#tools" className="block hover:text-sky-600">Fotos</a></li>
                    <li className="mb-3 ml-5"><a href="#contact" className="block hover:text-sky-600">Videos</a></li>
                    <li className="mb-3 ml-5"><a href="#contact" className="block hover:text-sky-600">Eventos</a></li>
                    <li className="mb-3 ml-5"><a href="#contact" className="block hover:text-sky-600">Contacto</a></li>
                </ul>
            </div>
        </div>

        <div className="bg-transparent
    xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[30%]">
        <img className="xs:w-[50%] xsm:w-[50%] xsl:w-[50%] sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[70%]
        xs:ml-[42%] xsm:ml-[43%] xsl:ml-[43%] sm:ml-[18%] md:ml-[20%] lg:ml-[20%] xl:ml-[18%]"
        src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1718029637/MotoRock/Logo_motorock_white_ijbzqp.png" 
        alt="Logo Motorock"></img>
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