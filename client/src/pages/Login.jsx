import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import { Mail, KeyRound, EyeOff, Eye } from 'lucide-react';
import logo from '../images/login.png';
import axios from 'axios'

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();
  const showPassword = () => {
    setShow(prev=>!prev);
  }
  const submitForm =async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,password
      });

      console.log("login sucess", res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      alert("Login sucessful !!");
      usenavigate("/")
    } catch (error) {

      console.log("error",error)
    }
    console.log(email,password)
  }

  return (
    <div className=" w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-orange-500 to-sky-500">
      <div className=" w-[90%] p-5 bg-gray-950 flex flex-col items-center   gap-3 rounded-xl shadow-slate-500 text-gray-300 ">
        <img src={logo} alt="a" className='w-50'/>
        <h1 className=" text-gray-200 font-semibold text-3xl">
          Welcome back 👋
        </h1>
        <p className=" font-mono ">
          Don't have an account ?{" "}
          <Link
            to={"/register"}
            className=" text-indigo-300 font-semibold hover:underline "
          >
            Register here
          </Link>
        </p>
        <div className=" w-full flex flex-col  gap-3">
          {/* input for mail */}
          <div className=" w-full bg-gray-900  flex items-center p-3 rounded-md gap-3">
            <Mail size={28} />
            <input
              type="email "
             required
              className="border-0  bg-transparent w-full text-sm md:text-base outline-none "
              placeholder="Enter your mail "
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          {/* input for password  */}
          <div className=" w-full bg-gray-900  flex items-center p-3 rounded-md gap-3">
            <KeyRound size={28} />
            <input
              type={show ? "text" : "password"}
              required
              className="border-0  bg-transparent w-full text-sm md:text-base outline-none "
              placeholder="Enter your password "
              onChange={(e=>setPassword(e.target.value))}
            />
            <button onClick={showPassword}>
              {show ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
          </div>
          {/* button */}
          <button className=' w-full bg-sky-500 border-0 hover:border border-indigo-600 rounded-lg outline-none p-3 text-xl text-gray-900 font-bold mb-11'
          onClick={submitForm}
          >
            Login
         </button>
        </div>
        
      </div>
    </div>
  );
}

export default Login