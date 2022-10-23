import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

const MenuItems = ({showMenu, active}) => {
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
          <Link to='/'>Donations</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
        <li>
          <Link to='/'>Explore</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuItems