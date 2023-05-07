import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <nav className="nav__container">
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="link">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
