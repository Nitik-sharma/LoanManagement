import React from 'react'
import { FaFileAlt, FaThumbsUp, FaMoneyCheckAlt } from "react-icons/fa";

function HowItsWork() {
  return (
    <div className="bg-white text-gray-700 py-16 px-6">
      <div className=" max-w-6xl  mx-auto  text-center">
        <h2 className=" tex-3xl md:text-5xl  font-mono  text-sky-700 ">
          💬 How its Work{" "}
        </h2>
        <p className=" text-2xl md:text-4xl font-serif text-indigo-950 mb-7 mt-2">
          {" "}
          Follow these 3 easy steps to get your loan approved and disbursed
          quickly.
        </p>
        <div className=" grid md:grid-col-3 gap-10">
          {/* step 1 */}
          <div className=" bg-gray-50 rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <div className=" text-indigo-600 mb-5">
              <FaFileAlt size={28} />
            </div>
            <h1 className=" text-gray-500 font-bold mb-4">
              1.Fill the Application
            </h1>
            <p className=" text-gray-600 font-extrabold">
              Complete a simple loan application form with basic details and
              documents.
            </p>
          </div>

          {/* Step 2 */}

          <div className=" bg-gray-50 rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <div className=" text-indigo-600 mb-5">
              <FaThumbsUp size={28} />
            </div>
            <h1 className=" text-gray-500 font-bold mb-4">2. Get Approved</h1>
            <p className=" text-gray-600 font-extrabold">
              Our team will quickly verify and approve your loan request based
              on eligibility.
            </p>
          </div>

          {/* step 3 */}
          <div className=" bg-gray-50 rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <div className=" text-indigo-600 mb-5">
              <FaMoneyCheckAlt size={28} />
            </div>
            <h1 className=" text-gray-500 font-bold mb-4">3. Receive Funds</h1>
            <p className=" text-gray-600 font-extrabold">
              Once approved, the loan amount is instantly transferred to your
              bank account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItsWork