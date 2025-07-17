import React from 'react'
import banner from '../images/QuikFundr Logo_ Secure Financial Solutions.png';
import { Plug,Telescope } from "lucide-react";

export default function HeroSection() {
  return (
    <section className=" bg-gradient-to-r  from-indigo-600 via-indigo-500 to-sky-400 text-white py-20 px-5 ">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className=" flex-1">
          <h1 className=" text-4xl md:text-6xl font-bold text-ellipsis leading-tight mb-6 text-center ">
            Your Journey to{" "}
            <span className=" text-yellow-600">Financial Freedom</span> <br />
            Starts Here
          </h1>
          <p className=" text-2xl md:text-4xl font-semibold text-clip leading-snug text-center mb-4 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Get instant approval, low interest rates, and flexible repayment
            options — all in one place.
          </p>

          <div className=' flex flex-col gap-6 sm:flex-row items-center justify-center mb-4'>
            <button className=" bg-slate-100 text-indigo-600 px-6 py-5  flex items-center  gap-2 border-none hover:border rounded-md border-gray-400 hover:bg-slate-400 hover:text-gray-100 font-semibold">
              <Plug />
              Apply Now
            </button>
            <button className=" bg-slate-100 text-indigo-600 px-6 py-5  flex items-center  gap-2 border-none hover:border rounded-md border-gray-400 hover:bg-slate-400 hover:text-gray-100 font-semibold">
              <Telescope />
              Explore Blogs
            </button>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <img src={banner} className=" rounded-sm shadow-md  " />
      </div>
    </section>
  );
}
