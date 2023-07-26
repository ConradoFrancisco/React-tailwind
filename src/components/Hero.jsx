import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed';
export default function Hero(){

  return(
    <div className="text-white">
      <div className="max-w-[600px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold text-2xl">Crecé con tu Respiracion</p>
        <h2 className="md:text-7xl s:text-6xl text-4xl font-bold md:py-4">Implementa hoy</h2>
        <div className="flex align-middle justify-center">
          <p className="md:text-3xl font-bold">Rapido y flexible para: </p>
          <Typed className="md:text-3xl font-bold pl-2 max-w-[500px]" strings={[' Ceos',' Atletas','']} typeSpeed={120} backSpeed={130} loop/>
        </div>
        <p className="md:text-2xl font-bold text-slate-400 py-5 text-1xl">Reservá una guia de respiración personalizada para mejorar en el ámbito que te propongas</p>
        <Link to='#' className="bg-[#00df9a] w-[200px] rounded-md mx-auto  text-black py-3 px-6 font-medium">Solicitar</Link>
      </div>
    </div>
  );
}