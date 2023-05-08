import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
      <div>
        <nav className="nav__container">
          <button className="orange__btn">
            <Link to="/create_form" className="create__btn">
              Create Blog
            </Link>
          </button>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="link">
                Blogs
              </Link>
            </li>
          </ul>
          <div className="auth__container">
            <button className="orange__btn">
              <Link to="/create_blog" className="create__btn">
                Login
              </Link>
            </button>
            <button className="orange__btn">
              <Link to="/create_blog" className="create__btn">
                Sign Up
              </Link>
            </button>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
