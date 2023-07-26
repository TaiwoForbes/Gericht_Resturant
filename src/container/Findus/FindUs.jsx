import React from 'react'
import { images } from '../../constants'
const FindUs = () => {
  return (
    <div className='bg-image flex gap-[2rem] justify-between py-[5rem] px-[5rem] sm:flex-row flex-col' id='contact'>
      <div className='info'>
        <div className='mb-[16px]'>
          <p className='font-cormorant text-white '>Contact</p>
          <img src={images.spoon} alt="" className='w-[35px]' />
          <h1 className='font-cormorant text-golden font-bold text-[50px] mb-[3rem]'>Find Us</h1>


          <div className="content text-white">
            <p className="font-sans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
            <p className="font-cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
            <p className="font-sans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="font-sans">Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button type='button' className='bg-white text-black py-[5px] px-[1rem] mt-[1rem]'>Visit Us</button>
        </div>
      </div>

      <div className='img'>
        <img src={images.findus} alt="find us" className='w-[500px]' />

      </div>

    </div>
  )
}

export default FindUs