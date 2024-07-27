import React from 'react'
import banner_img from '../assets/yoga_two.webp'

function Banner() {
  return (
    <div className='container flex flex-row bg-amber-200 bg-opacity-50 pt-6 pl-6 pr-6 justify-between rounded-xl'>
      <div className='w-2/3 flex flex-col mt-4'>
        <h2 className='text-4xl font-bold text-wrap'> Discover Your Inner Peace </h2>
        <p className='mt-6 text-lg'> Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation. </p>
        <button className='mt-24 w-1/3 p-6 bg-black text-white font-semibold text-xl rounded-lg'> Explore Below </button>
      </div>
      <img src={banner_img} alt='Banner Image to place here' width={'30%'}/>
    </div>
  )
}

export default Banner