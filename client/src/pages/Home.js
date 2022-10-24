import React from 'react';


const Home = () => {

  return(
    <div className='bg-tree-image w-full h-full bg-cover bg-center flex items-center px-4'>
      <div className='uppercase text-center text-white font-extrabold w-1/2 justify-center'>
        <h1 className='text-8xl'> Tailwind CSS</h1>
        <h3>Join your local community environment group</h3>
        <div className=" gap-2">
        </div>
      </div>
      <div className='text-center justify-end content-end w-1/2'>
        <div className='flex flex-wrap'>
          <h3 className="uppercase text-white font-extrabold text-4xl">“We are the first generation to feel the effect of climate change and the last generation who can do something about it.” - 
            <span className="italic">Barack Obama</span>
          </h3>
        </div>
      </div>

  </div>  
  );
};

export default Home;
