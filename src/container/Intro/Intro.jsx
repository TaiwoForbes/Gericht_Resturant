import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import { useRef } from 'react';
import { useState } from 'react';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="h-screen relative">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
       className='w-full h-full object-cover '/>
      <div className="absolute inset-0 bg-overlay flex justify-center items-center">
        <div
          className="w-[100px] h-[100px] rounded-full border-[1px] border-solid border-golden flex justify-center items-center cursor-pointer"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill className='text-white text-[30px]' />
          ) : (
            <BsFillPlayFill className='text-white text-[30px]' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
