import React from 'react'
import "./Blog.css";
function Blog({ blog }) {

    const cardStyles = {
        backgroundImage: `url(${blog.imageURL})`,
        backgroundSize: "cover",
        objectFit:"contain",
        width:"100%",
    }
    return (
        <div>
            <div className="card__container" style={cardStyles}>
                <div className="card__data">
                    {/* blogs tags */}
                    <div className="card__tags">
                        {
                            blog.tags.map((tag) => {
                                return (<>
                                    <p className="card__tag">{tag}</p>
                                </>)
                            })
                        }
                    </div>
                    {/* blog title */}
                    <div className="card__title">
                        <h3>{blog.title}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
