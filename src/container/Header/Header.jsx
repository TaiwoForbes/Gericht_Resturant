import React from 'react';
import spoon from '../../assets/spoon.png';
import welcome from '../../assets/welcome.png'
const Header = () => (
  <div className='flex justify-center items-center gap-10 ss:flex-row flex-col py-[90px] px-[2rem] bg-black text-white warapper section' id='home'>
    <div className='pl-[5rem] sm:pl-[5rem] pl-[2rem]'>
      <div className='mb-[16px]'>
        <p className='font-cormorant'>Chase the New Flavour</p>
        <img src={spoon} alt="spoon" />
      </div>

      <h1 className='font-cormorant text-golden tracking-widest leading-[130px] text-[65px]  sm:text-[90px] text-[40px] font-bold sm:leading-[130px] leading-[70px]'>The key to Fine Dining</h1>
      <p className='my-[32px] text-grey'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='bg-white text-black py-[5px] px-[1rem] bg-golden'>Explore Menu</button>
    </div>

    <div className=''>
      <img src={welcome} alt="" className='w-[80%] sm:w-[80%] w-[110%]' />
    </div>
  </div>
);

export default Header;




