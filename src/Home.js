import React from 'react';
import './Home.scss';
import home1 from './assets/FullSizeRender.jpg';
import Navbar from "./Navbar";
import {recommendationList} from './recommendationList';
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <img src={home1} className="home-image" alt="picture of bhargavi padhya taking in the sun & surrounded by nature"/>
            <div className="intro-section">
                <h1 className="name-heading">
                    Bhargavi Padhya
                </h1>
                <div className="name-subheading">
                    Designer, Developer, Bookworm, Fitness enthusiast
                </div>

            </div>
            <div className="about-description">
                Hello, World!
                <p>I am a developer who brings concepts and designs to life using code. I'm also a designer who makes sure that, that code, results in providing a delightful user experience.
                I'm a UX unicorn in the world full of designers and developers. I love having the knowledge from both the worlds, and applying those to solve complex UI problems.
                    I'm a curious life-long learner, a motivated self-starter and a result-oriented person. I love working in teams, there's just something about that buzz of working together towards a shared common goal. When it comes to work, I would like to be involved in projects that I find challenging and with people that inspire me.</p>
                <p>If you catch me outside of work, I'm an avid crime novel reader, tennis lover, and you'll most likely see me petting dogs and cats.</p>
            </div>
            <div className="kind-words">
                <h1 className="name-heading">Kind words</h1>
                <div className="reco-container-container">
                {recommendationList.map((r,i) => (
                        <div key={i} className="single-reco-container">
                            <p className="recommendation">{r.words}</p>
                            <div className="member-name"><a href={r.linkedin}>{r.name}</a></div>
                            <small className="member-company-designation">{r.company}</small>
                        </div>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;