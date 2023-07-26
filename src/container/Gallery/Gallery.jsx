import React from 'react'
import { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';



const Gallery = () => {

  const imageGallery = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    }
    else {
      current.scrollLeft += 300
    }
  }
  return (
    <div className=' bg-black flex flex-col justify-center items-center py-[3rem] px-[3rem] md:flex-row '>
      <div className='flex-1 flex items-start flex-col min-w-[500px] sm:min-w-[500px] min-w-[100%] pr-[2rem] justify-center'>
        <div className='mb-[16px]'>
          <p className='font-cormorant text-white '>Instagram</p>
          <img src={images.spoon} alt="" className='w-[35px]' />
          <h1 className='font-cormorant text-golden font-bold text-[50px]'>Photo Gallery</h1>
          <p className='font-sans text-grey mt-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type='button' className='bg-white text-black py-[5px] px-[1rem] mt-[1rem]'>View More</button>
        </div>
      </div>

      <div className='flex-1 flex flex-row max-w-[50%] md:max-w-[50%] max-w-[100%] relative'>
        <div className='flex flex-row w-max overflow-x-scroll container' ref={scrollRef}>
          {imageGallery.map((image, index) => {
            return <div className='relative  min-w-[301px]  h-[447px] sm:min-w-[301px] min-w-[240px] sm:h-[447px] h-[320px] mr-[2rem] flex justify-center items-center hover:opacity-[0.35]' key={`gallery-image-${index + 1}`} >
              <img src={image} alt="gallery_image" className='w-full h-[100%] object-cover opacity-1 duration-1000 ease-linear' />
              <BsInstagram className='absolute text-white text-[2rem] opacity-1 cursor-pointer duration-500 ease hover:opacity-100' />
            </div>
          })}
        </div>

        <div className='w-full flex justify-between item-center py-[0] px-[1rem] absolute bottom-[5%]'>
          <BsArrowLeftShort className='text-golden text-[2rem] cursor-pointer bg-black rounded-lg hover:text-white' onClick={() => scroll('left')} />
          <BsArrowRightShort className='text-golden text-[2rem] cursor-pointer bg-black rounded-lg hover:text-white' onClick={() => scroll('right')} />

        </div>
      </div>



    </div>
  )
}

export default Gallery