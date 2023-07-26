import React from 'react';
 import asd from '../assets/Fondo_montaña_2.jpg'
export default function Dashboard(){


  return(
    <>
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-widht[1240px] mx-auto grid md:grid-cols-2'>
          <img className="w-[300px] mx-auto" src={asd} alt="/"/>
          <div className='flex flex-col justify-center'>
            <h2 className='text-[#00df9a] text-2xl font-bold py-1'>Apuntar mas alto</h2>
            <h2 className='font-bold text-4xl py-4'>Asegurate un puesto</h2>
            <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nisi, totam iusto eius accusantium vitae eligendi minima mollitia deserunt molestiae numquam esse! Adipisci fugit eligendi aspernatur. Nihil tempore vel dignissimos.</p>
          </div>
          
        </div>
      </div>
    </>
  ); 

}