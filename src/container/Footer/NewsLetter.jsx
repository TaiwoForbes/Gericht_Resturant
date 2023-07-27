import React from 'react';

import { images } from '../../constants';



const Newsletter = () => (
  <div className="py-[2rem] px-[2rem]  border-solid border-[1px] border-golden bg-black">
    <div className="text-center">
      <div className='mb-[16px] flex flex-col justify-center items-center'>
        <p className='font-cormorant text-white '>News Letter</p>
        <img src={images.spoon} alt="" className='w-[35px]' />
      </div>
      <h1 className="text-cormorant text-golden font-cormorant  font-bold text-[50px] text">Subscribe To Our Newsletter</h1>
      <p className="font-sans text-white">And never miss latest Updates!</p>
    </div>
    <div className="flex-row mt-[3rem] flex justify-center items-center sm:flex-row flex-col gap-11">
      <input type="email" placeholder="Enter your email address" className='w-[100%]  border-solid border-[1px] border-golden rounded-md text-[1rem] font-cormorant text-white  py-[0.75rem] px-[1rem] bg-black' />
      <button type="button" className="bg-white py-[0.75rem] px-[1rem] rounded-md font-cormorant w-max">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;