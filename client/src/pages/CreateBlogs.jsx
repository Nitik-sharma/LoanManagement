import React, { useState } from 'react'
import axios from 'axios';
function CreateBlogs() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleForm = async(e) => {
        e.preventDefault();
        console.log(title, content)
        const token = localStorage.getItem("token");
        try {
            const blog = await axios.post(
              "https://loanmanagement-i08u.onrender.com/api/blog/create",
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
            console.log(blog.data)
          alert("Blog created Sucessfully")
          setTitle("");
          setContent("")
        } catch (error) {
            console.error("Blog creation error:", error);
            alert("Error creating blog");
        }
    }
  return (
    <div className=' flex items-center justify-center flex-col w-full'>
      <div className="w-[80%] m-8 p-6 max-w-2xl rounded bg-white shadow">
        <h2 className=" text-2xl  font-bold mb-4">Create a new Blog</h2>
        <form onSubmit={handleForm} action="" className=" flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            id=""
            className="border p-2 rounded-sm text-gray-800 outline-none"
            required
            value={title}
                      onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            name=""
            id=""
            placeholder="Blog Content "
            className=" border p-4 text-gray-800 rounded-sm outline-none h-40"
            required
            value={content}
                      onChange={(e)=>setContent(e.target.value)}
          ></textarea>

          <button type='submit' className=" w-full p-3 bg-gray-800 text-gray-50  rounded-sm text-xl">
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogs