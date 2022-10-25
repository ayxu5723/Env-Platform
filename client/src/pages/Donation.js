import React from 'react';
import DonationForm from '../components/DonationForm';

export default function Donate() {
    
    return (
        <div className='bg-forest-fire w-full h-full bg-cover bg-center flex items-center px-4'>
            <div className='uppercase text-center text-white font-extrabold w-1/2 justify-center'>
                <h1 className='text-8xl'> ENV Platform </h1>
                <h3>Join your local community environment group</h3>
            <div className=" gap-2">
            </div>
            </div>
            <div className='text-center justify-end content-end w-1/2 bg-white/40'>
                <div className='flex flex-wrap'>
                 <DonationForm />
                </div>
            </div>
  
        </div>  
    )
}