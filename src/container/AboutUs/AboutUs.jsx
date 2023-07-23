import React from 'react';

import g from '../../assets/g.png';
import spoon from '../../assets/spoon.png';
import knife from '../../assets/knife.png';

const AboutUs = () => (
  <div className='bg-image relative flex justify-center py-16 px-[9rem]      sm:py-16 py-5  sm:px-[9rem] px-[14px]' id='about'>
    <div className='flex justify-center items-center'>
      {/* "g" image with negative z-index */}
      <img src={g} alt="g letter" className='w-[391px] h-[415px] sm:w-[391px] w-[300px] sm:h-[415px] h-[270px] absolute z-[0] ' />

      <div className='w-full z-40 flex justify-center align-center'>
        <div className='flex-1 flex justify-center items-end flex-col'>
          <h1 className='font-cormorant text-white'>About Us</h1>
          <img src={spoon} alt="about spoon" className='spoon' />
          <p className='text-grey text-left text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='mt-6 bg-golden py-2 px-6 md:py-2 py-1 px-6 md:px-6 px-4          sm:py-1 py-1 px-6 sm:px-4 px-2'>Know More</button>
        </div>

        <div className='my-[2rem] mx-[4rem] s'>
          <img src={knife} className='h-[910px] sm:h-[910px] h-[600px] ' alt="about knife" />
        </div>

        <div className='flex-1 flex justify-center items-start flex-col'>
          <h1 className='font-cormorant text-white'>History</h1>
          <img src={spoon} alt="about spoon" className='spoon' />
          <p className='text-grey text-left text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='mt-6 bg-golden py-2 px-6 md:py-2 py-1 px-6 md:px-6 px-4          sm:py-1 py-1 px-6 sm:px-4 px-2 '>Know More</button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
