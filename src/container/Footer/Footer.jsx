import React from 'react';

import {FtOverlay,NewsLetter} from '../../container'

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi' 

const Footer = () => (
  <div className=' bg-image w-full relative z-1 flex justify-start items-center flex-col bg-black  pt-[0rem] px-[5rem]'>
    <FtOverlay/>
    <NewsLetter/>
  </div>
);

export default Footer;
