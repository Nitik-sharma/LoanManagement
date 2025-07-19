import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://loanmanagement-i08u.onrender.com/api/blog/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.blogs);
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("❌ Error fetching blogs:", error);
    }
  }

  useEffect(() => {
  fetchBlogs()
},[])

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center m-5 ">📚Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog._id} >
            <div className=" p-4 shadow  bg-gray-200  rounded m-4  " >
              <h1 className=' text-xl font-bold text-gray-900'>{blog.title}</h1>
              <p className=' text-gray-900 text-lg'>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs