import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import axios from 'axios';
function ApplyLoan() {
  const [loanType, setLoanType] = useState("personal");

  const [amount, setAmount] = useState("");
  const [durationMonths, setDurationMonths] = useState("");
  const [admin, setAdmin] = useState([]);

  // handle form
  const handleFormSubmit =async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Token in apply to ===", token);
    if (!token) return alert("Please login for Apply ");
    try {
      const res = await axios.post(
        "https://loanmanagement-i08u.onrender.com/api/loan/apply",
        {
          loanType,
          amount,
          durationMonths,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Loan Applied", res.data);
      alert("Form submitted ");
      setAmount("");
      setDurationMonths("");
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Loan application failed!");
    }

    


    console.log(loanType, amount, durationMonths);
  }

  useEffect(() => {
    const fetchAdmin = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "https://loanmanagement-i08u.onrender.com/api/user/all/admins", {
            headers: {
              Authorization:`Bearer ${token}`,
            }
          }
        );

        console.log("Data--->", res.data)
        setAdmin(res.data);
      } catch (error) {
        console.error("Error fetching admins", error);
      }
    }
    fetchAdmin()
},[])



  return (
    <div className=" w-full h-screen bg-gradient-to-r from-orange-300 via-yellow-200 to-red-500 flex items-center justify-center ">
      <div className="w-[95%]  flex flex-col rounded-md shadow-lg text-gray-200 items-center justify-center gap-4 bg-gray-900  ">
        <div className=" flex items-start gap-7">
          <img src={logo} alt="" className=" w-32" />
          <h1 className=" text-gray-200 font-semibold text-xl text-center">
            Welcome 👋
          </h1>
        </div>
        <h1 className=" text-gray-200 font-semibold text-xl">
          💼 Loan Application{" "}
        </h1>
        <form
          onSubmit={handleFormSubmit}
          action=""
          className=" w-[99%] mb-6 flex flex-col gap-3 items-center"
        >
          <div className=" bg-gray-500  border-none py-2 px-3 rounded-md shadow-lg  w-full flex items-center">
            <label
              htmlFor=""
              className=" block text-gray-800 text-start font-medium"
            >
              Loan Type
            </label>

            <select
              name=""
              id=""
              className=" w-full bg-transparent border-none outline-none rounded-sm text-gray-800  font-bold"
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="personal" className=" bg-gray-500">
                Personal
              </option>
              <option value="business" className=" bg-gray-500">
                Business
              </option>
              <option value="education" className=" bg-gray-500">
                Education
              </option>
            </select>
          </div>

          {/* Amount  */}

          <div className=" bg-gray-500  border-none py-2 px-3 rounded-md shadow-lg  w-full flex items-center">
            <label
              htmlFor=""
              className=" block text-gray-800 text-start font-medium"
            >
              Amount (INR)
            </label>

            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Amount...."
              className=" w-full bg-transparent border-none outline-none rounded-sm text-gray-800  font-bold"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Durition */}

          <div className=" bg-gray-500  border-none py-2 px-3 rounded-md shadow-lg  w-full flex items-center">
            <label
              htmlFor=""
              className=" block text-gray-800 text-start font-medium"
            >
              Duration (months)
            </label>

            <input
              type="number"
              name=""
              id=""
              placeholder="12"
              className=" w-full bg-transparent border-none outline-none rounded-sm text-gray-800  font-bold"
              onChange={(e) => setDurationMonths(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-700 p-2 rounded-sm text-center font-bold text-gray-900 hover:bg-indigo-600 transition "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyLoan