import React from 'react'
import Corridor from "../image/White_corridor.jpeg"
import { Link } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";


const Floors = () => {
  return (
    <div>
        <img src={Corridor} className='w-full object-cover relative' alt="" />
        <Link to="/room3" className='absolute room_loc1'>
        <MdLocationOn size={45} />
        </Link>
        <Link to="/room2" className='absolute room_loc2'>
        <MdLocationOn size={45} />
        </Link>
        <Link to="/room1" className='absolute room_loc3'>
        <MdLocationOn size={45} />
        </Link>
        <Link to="/room4" className='absolute room_loc4'>
        <MdLocationOn size={45} />
        </Link>
        <Link to="/reseption" className='absolute room_loc5 flex'>
        <MdLocationOn size={45} /><p className='font-bold text-blue-200 text-2xl'>Register</p>
        </Link>
    </div>
  )
}

export default Floors