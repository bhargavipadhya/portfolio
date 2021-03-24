import React from 'react';
import './About.scss'
import Navbar from "./Navbar";
import home from "./assets/home4.jpeg";

const About = () => {
    return(
        <div className="About">
            <Navbar/>
            <img src={home} className="home-image" />
            <div className="about-container" id="">
                <div className="about-paragraph">
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>

        </div>
    )
};

export default About;