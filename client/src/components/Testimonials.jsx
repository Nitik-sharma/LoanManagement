import React from 'react'

function Testimonials() {
  const reviews = [
    {
      name: "Aman Verma",
      role: "Startup Founder",
      message:
        "This app made it incredibly easy to get a loan when I needed it the most. Quick and hassle-free!",
    },
    {
      name: "Ritika Sharma",
      role: "College Student",
      message:
        "The approval was instant, and the UI is very user-friendly. Highly recommend it to students!",
    },
    {
      name: "Ravi Mehra",
      role: "Freelancer",
      message:
        "Super fast service and excellent customer support. I got the funds within a day!",
    },
  ];
  return (
    <div className=" bg-gray-200  py-16 px-6">
      <div className=" max-w-6xl mx-auto text-center">
        <h2 className=" text-4xl  font-bold text-indigo-500  mb-6">
          What Our Users Say
        </h2>
        <p className=' text-gray-950 font-semibold text-3xl '>Real stories from real users who trusted us with their needs.</p>


        <div className=' grid  md:grid-col-3 gap-7'>
          {
            reviews.map((reviews, index) => {
              return (
                <div key={index} className='px-6 py-6 text-center shadow-lg hover:border border-gray-800 rounded-sm hover:shadow-2xl m-4'>
                  <h1 className=' text-sky-500 font-bold text-2xl'>{reviews.name}</h1>
                  <h2 className=' text-gray-700 font-semibold text-xl'>{reviews.role}</h2>
                  <p className=' text-indigo-600 font-medium'>{ reviews.message}</p>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default Testimonials