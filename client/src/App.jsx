import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from './features/blogSlice';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import CreateForm from './pages/CreateForm';
import UpdateForm from './pages/UpdateForm';
import CardDetails from './pages/CardDetails';

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);
  useEffect(() => {
    const fetchData = async() => {
      await fetch("http://localhost:5000/blogs")
        .then((response) => response.json())
        .then((data) => dispatch(setBlogs(data)));
    }
    fetchData();
  }, [])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog/:id" element={<CardDetails/>}/>
        <Route path="/create_form" element={<CreateForm/>}/>
        <Route path="/update_form" element={<UpdateForm/>}/>
      </Routes>
    </div>
  )
}

export default App
