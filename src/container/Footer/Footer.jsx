import React from 'react'


import { FtOverlay, NewsLetter } from '../../container'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants'


const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <div className=' bg-image w-full relative z-0 flex  justify-start items-center flex-col bg-black  pt-[2rem] px-[5rem] '>
      <FtOverlay />
      <NewsLetter />

      <div className='w-full flex flex-wrap justify-between items-start mt-[5rem] px-[2rem] text-white'>
        <div className="flex-1 m-[1rem] text-center">
          <h1 className="font-cormorant font-900 capitalize mb-[1rem] text-[32px]">Contact Us</h1>
          <p className="font-sans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="font-sans">+1 212-344-1230</p>
          <p className="font-sans">+1 212-555-1230</p>
        </div>

        <div className="flex-1 m-[1rem] text-center flex justify-center items-center flex-col">
          <img src={images.gericht} alt="footer logo" className='w-[200xp] mb-[0.75rem]' />
          <p className="font-sans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon img" style={{ marginTop: 15 }} />
          <div className="mt-[0.5rem] flex gap-3 text-[24px] cursor-pointer social__icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="flex-1 m-[1rem] text-center">
          <h1 className="font-cormorant font-900 capitalize mb-[1rem] text-[32px]">Working Hours</h1>
          <p className="font-sans">Monday-Friday:</p>
          <p className="font-sans mb-[1rem]">08:00 am - 12:00 am</p>
          <p className="font-sans">Saturday-Sunday:</p>
          <p className="font-sans">07:00 am - 11:00 pm</p>
        </div>

      </div>

      <div className='mt-[3rem]'>
        <p className='font-sans text-white'>{date} Gericht. All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer



