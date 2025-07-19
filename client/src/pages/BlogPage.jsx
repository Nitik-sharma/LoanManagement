import React, { useEffect, useState } from 'react'
import axios from 'axios';
function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  // fetch blogs 
  const fetchBlogs = async (e) => {
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
      
      console.log("data--->",res.data.blogs)
      setBlogs(res.data.blogs)
    } catch (error) {
      console.error("❌ Error fetching blogs:", error);
    }
  }
  useEffect(() => {
   fetchBlogs() 
  }, [])

  // delete blogs function
  
  const deleteBlogs = async (id) => {
    const token = localStorage.getItem("token");
    const confirm = window.confirm("Are you sure you want to delete ? ");
    if (!confirm) return;
    try {
      const deleteRes = axios.delete(
        `https://loanmanagement-i08u.onrender.com/api/blog/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("✅ Blog deleted");
      fetchBlogs();
    } catch (error) {
      alert("Error deleting blog");
    }
  }


  // Edit blogs function

  const editBlogs = async (id, oldTitle, oldContent) => {
    const title = prompt("Enter a new Title", oldTitle);
    const content = prompt("Enter a new Content", oldContent);
    const token = localStorage.getItem("token");

    if (!title || !content) return;

    try {
      const editRes = axios.put(
        `https://loanmanagement-i08u.onrender.com/api/blog/update/${id}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("✅ Blog updated");
      fetchBlogs(); // Refresh after update
    } catch (error) {
       alert("Error updating blog");
    }

  }


  console.log("Blogs -->",blogs)
  return (
    <div>
      <h1 className=" text-3xl font-bold text-center m-4 ">
        📚 Admin Blog Management
      </h1>
      <div className=" space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="">
            <div className=" p-4 shadow border rounded bg-white text-gray-900 flex flex-col items-center ">
              <h3 className=" text-lg font-semibold">{blog.title}</h3>
              <p>{blog.content}</p>
              <div className=" flex gap-3 m-6">
                <button onClick={()=>editBlogs(blog._id,blog.title,blog.content)} className=" px-6 py-3 border rounded bg-yellow-400 flex items-center hover:bg-yellow-600 hover:rounded-2xl hover:text-gray-100 hover:font-bold">
                  ✏️ Edit
                </button>
                <button onClick={()=>deleteBlogs(blog._id)} className=" px-6 py-3 border rounded bg-sky-400 flex items-center hover:bg-sky-600 hover:rounded-2xl hover:text-gray-100 hover:font-bold">
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage