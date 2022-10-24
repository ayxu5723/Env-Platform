import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import Auth from '../utils/auth';

const Header = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return( 
      <div className="fixed w-full text-slate-900 flex justify-between p-4 items-center">
        <div className="text-2xl font-bold text-center uppercase bg-white/80">
          <h1>e <span className='block text-4xl'>Tail</span></h1>
        </div>
        
        <nav>
          <div className='flex items-center md:hidden top-6 scale-150'>
            <FaBars onClick={showMenu} className="scale-150 cursor-pointer bg-white/70"/>
          </div>
          <ul className='hidden md:flex gap-10 p-8 uppercase bg-white/50 font-bold'>
            <li>
              <Link to='/'>
                <span className="hover:text-cyan-600">Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <span className="hover:text-cyan-600">About
                </span>
              </Link>
            </li>
            <li>
              <Link to='/donate'>
                <span className="hover:text-cyan-600">Donations
                </span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <span className="hover:text-cyan-600">Contact
                </span>
              </Link>
            </li>
            {Auth.loggedIn() ? (
            <>
            <li>
              <Link to='/me'>
                <span className="hover:text-cyan-600">Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link to='/announcements'>
                <span className="hover:text-cyan-600">Announcements
                </span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span className="hover:text-cyan-600 bg-indigo-700 border-indigo-700 rounded-md px-8 py-3" onClick={logout}>Logout
                </span>
              </Link>
            </li>
            </>
            ) : (
              <>
              <li>
                <Link to='/signup'>
                  <span className="hover:text-cyan-600">Register
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <span className="hover:text-cyan-600 bg-indigo-700 border-indigo-700 rounded-md px-8 py-3">Sign In
                  </span>
                </Link>
              </li>
              </>
            )}  
          </ul>

          <MenuItems showMenu={showMenu} active={active}/>
        </nav>
      </div>

  );
};


export default Header;