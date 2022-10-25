import React from 'react'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='bg-coral-death w-full h-full bg-cover bg-center flex items-center px-4'>
    <div className='uppercase text-center text-white font-extrabold w-1/2 justify-center'>
      <h1 className='text-8xl'> ENV Platform </h1>
      <h3>Join your local community environment group</h3>
      <div className=" gap-2">
      </div>
    </div>
    <div className='text-center justify-end content-end w-1/2'>
        <ContactForm />
    </div>

</div> 
  )
}

export default Contact;