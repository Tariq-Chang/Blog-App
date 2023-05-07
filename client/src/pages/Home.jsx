import React from 'react'
import homeImage from '../images/home2.jpg';
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {    
    return (
        <main>
            <section className="home__container">

                <aside className="left">
                    <img src={homeImage} alt="blog vector image" />
                </aside>
                <section className="right">
                    <article className="heading">
                        <h1 className="heading__title">Where the Power Of Words Comes to Life</h1>
                        <p className="heading__description">platform for writers and readers to come together and share their passion for the written word.</p>
                    </article>

                    <button className="create__btn"><Link to="/create_form" className="create__btnLink">Create Blog</Link></button>
                </section>
            </section>
        </main>
    )
}

export default Home
