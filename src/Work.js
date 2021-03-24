import React, { useState } from 'react';
import {workList} from "./workList";
import {Link} from 'react-router-dom';
import './Work.scss';
import Navbar from "./Navbar";
import {workTimeline} from "./workTimeline";
// import nushare from '../public/VUI-voice.png';
import voda from './assets/voda_logo.png';
import Footer from "./Footer";
import NavbarForHome from "./NavbarForHome";


const Work = () => {

    const [timelineItem, setTimelineItem] = useState(3);
    const IMG = (img_path) => {
        return require(`./assets/${img_path}`)
    };

    const extraProjects = () => (
        <div className="extra-projects">
            <p style={{textAlign: 'center'}} className="extra-title">UNIVERSITY PROJECTS WORTH MENTIONING</p>
            <ul>
                <li>Viz4Welfare - <a href="https://vizbostonpublicschools.shinyapps.io/bpsfinal2/" target="_blank" rel="noreferrer">Boston Public Schools Data Analysis</a></li>
                <li>Empirical Research Methods Research Proposal - <a href="https://www.researchgate.net/project/Use-of-VRET-to-reduce-Speech-Anxiety-in-Teenagers" target="_blank" rel="noreferrer">Use of Virtual Reality Exposure Therapy to reduce Speech Anxiety in teenagers</a></li>
            </ul>
        </div>
    );

    return(
        <div className="Work" id="work">
            <NavbarForHome/>
            <div className="work-container">

                <div className="main-timeline-container">
                    <p className="main-title">TIMELINE OF WORK</p>
                    <div className="line"/>
                    <div className="tab-menu-container">
                        {workTimeline.map((item, i) => (
                            <div key={i} className="tab-menu">
                                <span onClick={() => setTimelineItem(item.id)}>
                                    <img src={window.location.origin + item.logo} className="timeline-logo" alt={item.company + 'logo'} width="60"/>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="tab-content-container">
                        {workTimeline.map((item, index) => {
                                return timelineItem === item.id &&
                                    <div key={index} className="tab-content">
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            <img src={window.location.origin + item.img} className="item-image"/>
                                        </a>
                                        <div className="item-info">
                                            <small>{item.year} • {item.company} • {item.location}</small>
                                            <h3 className="title"><b>{item.title}</b></h3>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                }
                        )}
                    </div>
                </div>

                <ul className="projects">
                    <p style={{textAlign: 'center'}} className="projects-title">MY WORK</p>
                    {workList.map((item, index) => (
                        <Link to={`/project/${item.url}`} key={index} className="project-container">
                            <li>
                                <div className="project">
                                    <span className="project-image-container">
                                        <img src={process.env.PUBLIC_URL + item.img} className="project-image"/>
                                    </span>
                                    <span className="project-info">
                                        <p>{item.location}</p>
                                        <p>{item.name}</p>
                                    </span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>

                {extraProjects()}
            </div>
            <Footer/>
        </div>
    )
};

export default Work;