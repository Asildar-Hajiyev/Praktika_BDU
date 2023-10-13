import React from "react";
import reseption from "../image/reseption.png";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const Reseption = () => {
  return (
    <div className="flex justify-between ">
      <div className="px-4 mt-2">
        <form action="">
          <h1 className="font-bold text-3xl py-2">Register</h1>
          <p className="border-b mb-6">
            Please fill in this form to create an account.
          </p>

          <div className="grid ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="focus:bg-gray-300 focus:outline-none w-full px-4 py-3 my-2 bg-gray-200 border-0"
              placeholder="Enter Email"
            />
            <label htmlFor="psw">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="psw"
              required
              className="focus:bg-gray-300 focus:outline-none w-full px-4 py-3 my-2 bg-gray-200 border-0"
            />
            <label htmlFor="psw-repeate">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              id="psw-repeate"
              className="focus:bg-gray-300 focus:outline-none w-full px-4 py-3 my-2 bg-gray-200 border-0"
            />
          </div>
         <hr className="my-3"/>
     <p className="mt-5 mb-3">By creating an account you agree to our <Link className="border-b text-blue-500">Terms & Privacy</Link>.</p>
     <button className="bg-green-500 p-3 w-full text-white">Register</button>
     <div class="flex justify-center p-3">
    <p className="p-3">Already have an account? <Link to="/singin" className="text-blue-500 border-b">Sign in</Link>.</p>
  </div>
        </form>
      </div>

      <div className="">
        <img src={reseption} alt="" className="h-full object-cover relative"/>
        <Link to="/project" className="absolute mdlocation_reseption_exit flex">
        <MdLocationOn size={45} /><p className="text-4xl text-black">Çıxış</p>
      </Link>
      
      </div>
    </div>
  );
};

export default Reseption;
