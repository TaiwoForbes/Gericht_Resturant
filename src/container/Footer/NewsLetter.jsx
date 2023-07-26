import React from 'react';

import { images } from '../../constants';



const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
    <div className='mb-[16px]'>
          <p className='font-cormorant text-white '>News Letter</p>
          <img src={images.spoon} alt="" className='w-[35px]' />
          <h1 className='font-cormorant text-golden font-bold text-[50px]'>News Letter</h1>
          
          
        </div>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;