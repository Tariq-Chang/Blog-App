import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "./CardDetails.css";

function CardDetails() {
    const {id} = useParams();
    const [blogData, setBlogData] = useState("");
    const navigate = useNavigate();
    const blogs = useSelector(state => state.blogs.blogs);

    useEffect(() => {
        const blog = blogs.find((blog) => blog.id === Number(id));
        setBlogData(blog);
    }, [])

  return (
    <div style={{paddingTop:"100px"}}>
        <button onClick={() => navigate(-1)} className="back__btn">Back</button>
        <div className="blog__container">
          <div className="blog__image">
            <img src={blogData.imageURL} alt={blogData.title} />
            {/* <cite className="created__at">{blogData.created_at}</cite>
            <cite className="author__name">{blogData.author.name}</cite> */}
          </div>
          {/* <div className="blog__info">
            <p>{blogData.created_at}</p>
          </div> */}
          <div className="blog__title">
            <h2>{blogData.title}</h2>
          </div>
          <div className="blog__content">
            <p>{blogData.body}</p>
          </div>
          {/* <div className="blog__tags">
              {
                blogData.tags.map((tag) => {
                  return <span>{tag}</span>
                })
              }
          </div> */}
        </div>
    </div>
  )
}

export default CardDetails
