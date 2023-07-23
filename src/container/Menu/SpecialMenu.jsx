import React from 'react';

import { data, images } from '../../constants';
import menu from '../../assets/menu.png'
import spoon from '../../assets/spoon.png'
import MenuItems from '../../components/MenuItems';

const SpecialMenu = () => (
  <div className=' bg-black flex justify-center items-center flex-col py-[2rem] px-[2.5rem]' id='menu'>
    <div className='mb-[2rem] flex  text-center '>
      <div className='mb-[16px]'>
        <p className='font-cormorant text-white'>Menu that fits your palatte</p>
        <img src={spoon} alt="" className='pl-[7rem]' />
        <h1 className='font-cormorant text-golden font-bold text-[50px]'>Today's Special</h1>
      </div>
    </div>



    <div className='w-full my-[2rem] flex justify-center items-start flex-row sm:flex-row flex-col items-center'>
      <div className='flex-1 w-full flex-col flex justify-center items-center'>
        <p className='font-cormorant font-bold text-white text-[45px] sm:text-[45px] text-[40px] leading-[58.5px] tracking-wider'>Wine & Beer</p>

        <div className='flex flex-col my-[2rem] w-full' >
          {
            data.wines.map((wine, index) => {
              return <MenuItems key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            })
          }
        </div>
      </div>

      <div className='w-[410px] sm:w-[410px] w-[90%] mx-[2rem] '>
        <img src={menu} alt="menu" className='w-full' />
      </div>


      <div className='flex-1 w-full flex-col flex justify-center items-center '>
        <p className='font-cormorant font-bold text-white text-[45px] sm:text-[45px] text-[40px] leading-[58.5px] tracking-wider'>Cocktails</p>
        <div className='flex flex-col my-[2rem] w-full' >
          {
            data.cocktails.map((cocktail, index) => {
              return <MenuItems key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            })
          }
        </div>
      </div>
      
    </div>

          <div className='mt-1'>
            <button type='button' className='bg-golden py-[1rem] px-[4rem]'>View More</button>

          </div>
  </div>
);

export default SpecialMenu;

{/* <div className='pl-[5rem] sm:pl-[5rem] pl-[2px]'>
      <div className='mb-[16px]'>
        <p className='font-cormorant'>Chase the New Flavour</p>
        <img src={spoon} alt="spoon" />
      </div> */}
