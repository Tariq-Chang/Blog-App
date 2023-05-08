import React, { useState } from 'react'
import "./CreateForm.css";
import createFormImage from "../images/CreateForm.jpg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateForm() {
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const createBlog = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/blogs/create_blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
     
    } catch (error) {
      console.log(error);
    }
    navigate("/blogs");
  }

  const handleChange = (e) => {
    setBlog((prevBlog) => {
      return { ...prevBlog, [e.target.name]: e.target.value }
    })
  }
  console.log(blog);
  return (
    <div>
      <div className="container">
        <div className="create__formLeft">
          <img src={createFormImage} alt="Form Vector Icon" />
        </div>
        <div className="create__formRight">
          <h1>Create Blog</h1>
          <form className="create__form">
            <input type="text" name="title" placeholder="Title here" onChange={handleChange}/>
            <input type="text" name="body" placeholder="Content" id="body" onChange={handleChange} />
            <input type="text" name="imagURL" placeholder="Paste Image URL" onChange={handleChange} />
            <input type="text" name="authors" placeholder="Authors" onChange={handleChange} />
            <input type="text" name="tags" placeholder="Tags" onChange={handleChange} />
            <button onClick={createBlog}>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateForm
