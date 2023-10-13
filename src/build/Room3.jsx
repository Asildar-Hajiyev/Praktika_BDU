import React from 'react'
import { Link } from 'react-router-dom'
import room3 from "../image/Room3.png"

const Room3 = () => {
  return (
    <div className='flex'>
    <div className='bg-gray-300 w-2/4'>
    <Link className='flex justify-center font-thin' to="/floors">/Colidors</Link>
      <h1 className='font-bold text-2xl flex justify-center py-4'>  Room</h1>
      <p>1 Sitting room <span>40m<sup>2</sup></span></p>
      <p>3 Bedroom <span>25m<sup>2</sup></span></p>
      <p>2 Bathroom <span>20m<sup>2</sup></span></p>
      <p>1 Work room <span>25m<sup>2</sup></span></p>
    </div>
    <div className=''>        
      <img src={room3} alt="room1" className='w-full object-cover' />
    </div>
  </div>
  )
}

export default Room3