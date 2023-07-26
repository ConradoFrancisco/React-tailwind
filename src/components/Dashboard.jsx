import React from 'react';
 import asd from '../assets/Fondo_montaña_2.jpg'
export default function Dashboard(){


  return(
    <>
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-widht[1240px] mx-auto md:grid-cols-2'>
          <img src={asd} alt="/"/>
        </div>
      </div>
    </>
  ); 

}