import React from 'react'
import {Link} from 'react-router-dom'
import DropDownMenu from './DropDownMenu'
import ButtonStyle from './ButtonStyle'

const Header = () => {
  return (
    <header className='bg-slate-100'>
    <div className='flex justify-between items-center mx-auto p-5'>
      <Link to='/first'>
        <h1 className='font-bold sm:text-xl flex flex-wrap'>
          <span className='text-green-500 text-4xl'>MENTOR</span>
        </h1>
      </Link>
  
      <ul className='flex gap-4'>
        <Link to='/first'>
          <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
            About
          </li>
        </Link> 
        <Link to='/courses'>
          <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
            Courses
          </li>
        </Link>
        <Link to='/pricing'>
          <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
            Pricing
          </li>
        </Link>  
        
        <li className='hidden sm:inline hover:underline text-lg'>
            <DropDownMenu />
        </li>
        
        <Link to='/contact'>
          <li className='hidden sm:inline text-lg text-slate-700 hover:underline'>
            Contact
          </li>
        </Link>
        <Link to='/about'>
          <li className='hidden sm:inline text-slate-700'>
            <ButtonStyle />
          </li>
        </Link>
      </ul>
    </div>
  </header>
  )
}

export default Header