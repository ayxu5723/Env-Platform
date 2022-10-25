import React from 'react';
import TimeLine from '../components/TimeLine';

export default function About() {
    
    return (
        <div className='bg-ocean-trash-image w-full h-full bg-cover bg-center flex items-center px-4'>
            <div className='uppercase text-center text-slate-800 font-extrabold w-1/2 justify-center bg-white/80'>
                <h1 className='text-8xl'> ENV Platform </h1>
                <h3>Join your local community environment group</h3>
                <div className=" gap-2">
            </div>
            </div>
                <div className='text-center justify-end content-end w-1/2'>
            <div className='flex flex-wrap'>
            <TimeLine />
            
            </div>
        </div>
  
    </div>  
    )
}