import React from 'react';

import { images } from '../../constants'

const Chef = () => (
  <div className='bg-image flex justify-center items-center flex-row md:flex-row flex-col gap-[5rem] md:py-[5rem] py-[4rem] md:px-[10rem] px-[2rem]       py-[5rem] px-[10rem] ' >
    <div className='flex wrapper-img reverse'>
      <img src={images.chef} alt="chef" className='w-[100%] h-[auto]' />
    </div>

    <div className='info'>
      <div className='mb-[16px]'>
        <p className='font-cormorant text-white text-bold text-[24px]'>Chefs Word</p>
        <img src={images.spoon} alt="spoon" />
        <h1 className='font-cormorant text-golden text-semibold text-[64px]'>What We Belive In</h1>

        <div className='flex flex-col w-[100%] mt-[4rem]'>
          <div className='flex justify-start items-end'>
            <img src={images.quote} alt="quote" className='w-[47px] h-[40px] mt-[0rem] mr-[1rem] mb[1rem] ml-[0rem]' />
            <p className='font-sans text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className='font-sans text-white'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
        </div>

        <div className='w-full mt-3rem'>
          <p className='font-cormorant text-golden text-bold text-[32px] tracking-wider mt-6'>Kevin Luo</p>
          <p className='font-sans text-white'>Chef & Founder</p>
          <img src={images.sign} alt="sign" className='w-[250px] mt-[3rem]' />

        </div>
      </div>

    </div>
  </div>
);

export default Chef;
