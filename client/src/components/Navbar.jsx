import React, { useEffect } from 'react'
import { useState } from "react";
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import { FaHome, FaBlogger } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa6";
import logo from '../images/logo.png';
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { RiAdminLine } from "react-icons/ri";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    const getRole = localStorage.getItem("role");

    setRole(getRole);
    setToken(getToken);
  }, [location])
  
  console.log("pbjkvhjvd--------------------------------------->", token, role);

  // get token for login logut route authantication
  const isLoggedIn = localStorage.getItem("token");
  console.log("token--->,login", isLoggedIn);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    alert("You are logout sucessfully");
    setRole(null);
    setToken(null)
    navigate("/login")

  }
  return (
    <div className="bg-indigo-200 px-4 py-5  flex items-center justify-between  text-black">
      <div>
        <h1 className=" flex items-center font-bold hover:border px-3 rounded-md  border-gray-500">
          <img src={logo} className="w-40" />
        </h1>
      </div>
      {/* desktop menu */}
      <div>
        <ul className="hidden md:flex  items-center justify-between gap-3 ">
          {token ? (
            <>
              <Link to={"/"}>
                <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                  <FaHome /> Home
                </li>
              </Link>
              <li
                className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center"
                onClick={handleLogout}
              >
                <FiLogOut />
                Logout
              </li>

              {/* add condition for admin or user route */}
              {role === "admin" ? (
                <>
                  <Link to={"/admin/dashboard"}>
                    <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                      <RiAdminLine /> Admin Dashboard
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/apply"}>
                    <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                      <VscGitStashApply /> Apply loans
                    </li>
                  </Link>

                  <Link to={"/blogs"}>
                    <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                      <FaBlogger /> Blogs
                    </li>
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                  <FiLogIn /> Login
                </li>
              </Link>
              <Link to={"/register"}>
                <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  flex items-center">
                  <FaRegRegistered /> Register
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>

      {/* mobile menu */}
      <div className=" md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <RxCross1 size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-300   transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {isOpen ? (
          <ul className=" md:hidden bg-indigo-300 px-4 py-3 space-y-2 flex flex-col  items-center gap-7 font-extrabold ">
            {token ? (
              <>
                <Link to={"/"}>
                  <li className="hover:border flex rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center">
                    <FaHome /> Home
                  </li>
                </Link>
                <li
                  className="hover:border rounded-md hover:px-4 px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center"
                  onClick={handleLogout}
                >
                  <FiLogOut />
                  Logout
                </li>

                {/* add condition for admin or user route */}
                {role === "admin" ? (
                  <>
                    <Link to={"/admin/dashboard"}>
                      <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center">
                        <RiAdminLine /> Admin
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={"/apply"}>
                      <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center">
                        <VscGitStashApply /> Apply loans
                      </li>
                    </Link>

                    <Link to={"/blogs"}>
                      <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center">
                        <FaBlogger /> Blogs
                      </li>
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700   items-center">
                    <FiLogIn /> Login
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li className="hover:border rounded-md hover:px-4 border-gray-500 hover:font-medium hover:underline hover:text-gray-700  items-center">
                    <FaRegRegistered /> Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar