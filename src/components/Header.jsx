import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <nav className='bg-blue-400 flex justify-around py-5 text-lg text-white '>
            <h1 className='font-bold'>BIT PARK</h1>
            <ul className='flex gap-3 text-lg'>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/services'>Services</Link> </li>
                <li> <Link to='/myteam'>MyTeam</Link> </li>
                <li> <Link to='/contact'>Contact</Link> </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header