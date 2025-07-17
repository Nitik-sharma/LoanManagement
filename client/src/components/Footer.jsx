import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer className=" bg-indigo-800 text-white py-10 ">
      <div className=" w-max-6xl mx-auto text-center px-4 grid md:grid-col-3 gap-8">
        {/* App info */}

        <div>
          <h1 className=" text-4xl md:text-5xl text-gray-700 font-bold">
            Quik Fundr{" "}
          </h1>
          <h2 className=" text-3xl md:text-4xl text-gray-700 font-bold">
            Quick and secure Loan
          </h2>
          <p className=" text-2xl md:text-3xl text-gray-700 font-bold">
            Empowering your financial journey with fast and secure loans.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Apply Loan
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="/register" className="hover:underline">
                Register
              </a>
            </li>
          </ul>
              </div>
              {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-200 text-xl">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-indigo-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LoanSwift. All rights reserved.
      </div>
<div>
      </div>
    </footer>
  );
}

export default Footer