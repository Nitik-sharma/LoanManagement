import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { Mail, KeyRound, EyeOff, Eye ,User,MousePointer} from "lucide-react";
import logo from "../images/login.png";
import axios from "axios";
function Register() {
  const [show, setShow] = useState(false);
  const [name,setName]=useState("")
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
    const showPassword = () => {
      setShow(prev=>!prev);
    }
  const submitForm = async(e) => {
    e.preventDefault();
    alert("Form submitted"); // ✅ this helps test if the function is even being called
    console.log("Name:", name, "Email:", email, "Password:", password);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,email,password,role
      })
      console.log("restartion ", res.data);
      alert("Registeration sucessfuly ");
      navigate("/login")

    } catch (error) {
      console.log("error",error)
    }
      console.log(name,email,password)
    }
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-orange-500 to-sky-500">
      <div className=" w-[90%] p-5 bg-gray-950 flex flex-col items-center   gap-3 rounded-xl shadow-slate-500 text-gray-300 ">
        <h1 className=" text-gray-200 font-semibold text-3xl">
          Welcome Here 👋
        </h1>
        <p className=" font-mono ">
          If you have an account ?{" "}
          <Link
            to={"/login"}
            className=" text-indigo-300 font-semibold hover:underline "
          >
            Login here
          </Link>
        </p>
        <form onSubmit={submitForm} className="w-full flex flex-col gap-3">
          {/* Name input */}
          <div className="w-full bg-gray-900 flex items-center p-3 rounded-md gap-3">
            <User size={28} />
            <input
              type="text"
              required
              className="bg-transparent w-full text-sm md:text-base outline-none"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email input */}
          <div className="w-full bg-gray-900 flex items-center p-3 rounded-md gap-3">
            <Mail size={28} />
            <input
              type="email"
              required
              className="bg-transparent w-full text-sm md:text-base outline-none"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div className="w-full bg-gray-900 flex items-center p-3 rounded-md gap-3">
            <KeyRound size={28} />
            <input
              type={show ? "text" : "password"}
              required
              className="bg-transparent w-full text-sm md:text-base outline-none"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={showPassword}>
              {show ? <Eye size={28} /> : <EyeOff size={28} />}
            </button>
          </div>

          {/* Role input */}
          <div className="w-full bg-gray-900 flex items-center p-3 rounded-md gap-3">
            <MousePointer size={28} />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-transparent w-full text-sm md:text-base outline-none"
            >
              <option value="user">user</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 rounded-lg p-3 text-xl text-gray-900 font-bold mb-11"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register