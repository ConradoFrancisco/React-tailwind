import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Link } from "react-router-dom";
export default function Navbar(){

  const [navMob, setnavMob] = useState(false);

  const handleNav = () =>{
    setnavMob(!navMob);
  }

    return(
    <>
        <div className='text-white flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]'>
          <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>EXECUTIVE TRAINING</h1>
            <ul className="hidden md:flex">
              <li className="p-4">Inicio</li>
              <li className="p-4">Acerca </li>
              <li className="p-4">Registrarse</li>
              <li className="p-4"><Link to='#'>Ingresar</Link></li>
            </ul>
          <div onClick={handleNav} className="block md:hidden">
            {navMob ? <AiOutlineMenu size={25} style={{color:'white'}}/> : <AiOutlineClose size={25} style={{color:'white'}}/>}
          </div>
        </div>
        <div className={navMob ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full bg-black ease-in-out duration-300" : "fixed ease-in-out duration-300 left-[-100%]"}>
          <ul className= "text-white uppercase pt-24 h-full p-4">
            <h2 className='w-full text-3xl font-bold text-[#00df9a]'>OXYGEN ADVANTAGE</h2>
            <li className="p-4 border-b border-b-slate-600">Inicio</li>
            <li className="p-4 border-b border-b-slate-600">Acerca</li>
            <li className="p-4 border-b border-b-slate-600">Registrarse</li>
            <li className="p-4"><Link to='#'>Ingresar</Link></li>
          </ul>
        </div>
    </>
    )
}