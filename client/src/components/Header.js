import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import MenuItems from './MenuItems';


const Header = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }
  return( 
      <div className="fixed w-full text-slate-700 flex justify-between p-4 items-center">
        <div className="text-2xl font-bold text-center uppercase bg-white/50">
          <h1>e <span className='block text-4xl'>Tail</span></h1>
        </div>
        
        <nav>
          <div className = 'absolute right-6 md:hidden top-6 scale-150'>
            <FaBars onClick={showMenu} className="scale-150 cursor-pointer bg-white/70"/>
          </div>
          <ul className = 'hidden md:flex gap-10 p-8 uppercase bg-white/50 font-bold'>
            <li>
              <Link to='/'>
                <span className="hover:text-black">Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <span className="hover:text-black">About
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className="hover:text-black">Donations
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className="hover:text-black">Contact
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className="hover:text-black">Register
                </span>
              </Link>
            </li>
          </ul>
          <MenuItems showMenu={showMenu} active={active}/>
        </nav>
      </div>

  );
};


export default Header;