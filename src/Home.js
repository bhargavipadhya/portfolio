import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="intro-section">
                <h1 className="name">
                    Bhargavi Padhya
                </h1>
                <div className="description">
                    Designer, Developer, Bookworm, Fitness enthusiast
                </div>

                <div className="cta">
                    <Link to='/work'>See my work</Link> | <Link to='/about'>More about me</Link>
                </div>
            </div>
        </div>
    )
};

export default Home;