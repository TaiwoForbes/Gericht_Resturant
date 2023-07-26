import React from 'react';

import { data, images } from '../../constants';
import MenuItems from '../../components/MenuItems';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='flex-1 flex justify-start items-start min-w-[230px] m-[1rem]'>
    <img src={imgUrl} alt="award" className='w-[50px] h-[50px]'  />
    <div className='flex flex-col ml-[1rem]' >
      <p className='font-cormorant text-golden'>{title}</p>
      <p className='font-cormorant text-white'>{subtitle}</p>
    </div>
  </div>

)

const Laurels = () => (
  <div className='bg-image flex gap-7   sm:flex-row flex-col justify-center items-center py-[5rem] px-[2rem]' id='awards'>
    <div className='flex justify-center items-center'>
      <div className='mb-[16px]'>
        <p className='font-cormorant text-white '>Awards & Recognition</p>
        <img src={images.spoon} alt="" className='pl-[7rem]' />
        <h1 className='font-cormorant text-golden font-bold text-[50px]'>Our Laurels</h1>

        <div className='flex justify-start items-start flex-wrap mt-[3rem]'>
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}

        </div>

      </div>
    </div>

    <div className='img'>
      <img src={images.laurels} alt="laurels" />
    </div>

  </div>
);

export default Laurels;
