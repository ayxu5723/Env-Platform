import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import Auth from '../utils/auth';

const MenuItems = ({showMenu, active}) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <div>
      <ul className = {active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-white/40 backdrop-blur-lg gap-8 p-8 md:hidden' : 'hidden'}>
        <FaTimes onClick={showMenu} className="cursor-pointer"/>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/donate'>Donations</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
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
    </div>
  )
}

export default MenuItems