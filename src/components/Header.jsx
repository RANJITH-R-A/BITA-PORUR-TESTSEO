import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <nav className='bg-blue-400 flex justify-around py-5 text-lg text-white '>
            <h1 className='font-bold'>BIT PARK</h1>
            <ul className='flex gap-3 text-lg'>
                <li> <NavLink to='/home'>Home</NavLink> </li>
                <li> <NavLink to='/about'>About</NavLink> </li>
                <li> <NavLink to='/services'>Services</NavLink> </li>
                <li> <NavLink to='/myteam'>MyTeam</NavLink> </li>
                <li> <NavLink to='/contactus'>Contact</NavLink> </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header