import React from 'react'
import { FaLock, FaClock, FaHeadset, FaRocket } from "react-icons/fa";


function Features() {

    const feature = [
        {
            id:1,
        icon: FaLock,
        title: "Secure & Trusted",
        subTitle: "Your data is safe with industry-grade security systems.",
      },
      {
        id:2,
        icon: FaClock,
        title: "Instant Approvals",
        subTitle: "Get loan approvals within minutes of submitting your form.",
      },
      {
        id:3,
        icon: FaHeadset,
        title: "24/7 Support",
        subTitle: "Always available to assist you through live chat or phone.",
      },
      {
        id:4,
        icon: FaRocket,
        title: "Fast Disbursal",
        subTitle: "Funds are transferred directly to your account swiftly.",
      },
    ];
  return (
    <div className=" bg-indigo-100 py-16 px-5  text-gray-800">
      <div className=" max-w-6xl mx-auto text-center ">
        <h2 className=" text-4xl md:text-6xl font-normal text-gray-600 hover:text-gray-950 transition-colors mb-4">
          Why Choose us ?
        </h2>
        <p className=" text-2xl md:text-4xl font-medium text-gray-700  mb-4 mt-3">
          Experience the best loan platform designed for simplicity and speed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  { feature.map((features) => {
                       return  ( <div key={features.id} className=' p-6 bg-white text-gray-700 hover:text-gray-600 shadow-lg hover:shadow-2xl transition m-4'>
                              
                              <features.icon className='text-3xl text-indigo-300 hover:text-indigo-600 '/>
                              <h2 className=' text-2xl md:text-3xl text-gray-600 hover:text-indigo-900 font-semibold'>{features.title}</h2>
                              <p className=' text-gray-500 font-medium p-3'> {features.subTitle }</p>
                          </div>)
                     
                      })
          }
        </div>
      </div>
    </div>
  );
}

export default Features