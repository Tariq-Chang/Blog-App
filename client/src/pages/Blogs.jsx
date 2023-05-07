import React from 'react'
import Blog from './Blog';
import "./Blogs.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Blogs() {
  const blogs = useSelector(state => state.blogs.blogs);
  return (
    <div className="cards">
      {
        blogs.map((blog) => {
          return <Link to={`/blog/${blog.id}`} style={{textDecoration:"none"}}><Blog blog={blog} key={blog.id}/></Link>
        })
      }
    </div>
  )
}

export default Blogs;
