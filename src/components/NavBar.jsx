import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import gericht from '../assets/gericht.png';
import { useState } from 'react';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className=' text-white w-full flex border-solid border-[2px] border-black justify-between items-center bg-black py-[16px] px-[16px]'>
      <div className='flex justify-center items-center'>
        <img src={gericht} alt="logo" className='ss:flex w-[110px] w-[150px]' />
      </div>

      <ul className='lg:flex hidden justify-center items-center flex-1'>
        <li className='my-0 mx-4 cursor-pointer hover:text-gray-300 '><a href="#home">Home</a></li>
        <li className='my-0 mx-4 cursor-pointer hover:text-gray-300'><a href="#about">About</a></li>
        <li className='my-0 mx-4 cursor-pointer hover:text-gray-300'><a href="#menu">Menu</a></li>
        <li className='my-0 mx-4 cursor-pointer hover:text-gray-300'><a href="#awards">Awards</a></li>
        <li className='my-0 mx-4 cursor-pointer hover:text-gray-300'><a href="#contact">Contact</a></li>
      </ul>

      <div className='ss:flex hidden  justify-center items-center'>
        <a href="#login" className='mx-[32px] no-underline duration-100 ease-linear hover:border-b-[1px] border-solid border-orange-300'>Log In / Register</a>
        <div className='w-[1px] h-[30px] bg-gray' />
        <a href="/" className='mx-[32px] no-underline duration-100 ease-linear hover:border-b-[1px] border-solid border-orange-300'>Book Table</a>
      </div>

      <div className='lg:hidden'>
        <GiHamburgerMenu className='text-white text-[27px]' onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black duration-100 ease-linear col slide z-[5]'>
          <MdOutlineRestaurantMenu className='text-[27px] text-orange-500 cursor-pointer absolute top-[20px] right-[20px] ' onClick={() => { setToggleMenu(false)}} />

          <ul className='flex mt-[150px] items-center justify-center flex-col font-cormorant text-golden'>
            <li className='mx-[32px] my-[16px] text-[32px] cursor-pointer hover:text-white '><a href="#home">Home</a></li>
            <li className='mx-[32px] my-[16px] text-[32px] cursor-pointer hover:text-white'><a href="#about">About</a></li>
            <li className='mx-[32px] my-[16px] text-[32px] cursor-pointer hover:text-white'><a href="#menu">Menu</a></li>
            <li className='mx-[32px] my-[16px] text-[32px] cursor-pointer hover:text-white'><a href="#awards">Awards</a></li>
            <li className='mx-[32px] my-[16px] text-[32px] cursor-pointer hover:text-white'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}
        
      </div>
    </nav>
  )
}

export default NavBar