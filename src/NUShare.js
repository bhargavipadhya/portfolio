import React from 'react';
import Footer from "./Footer";
import './NUShare.scss';
import introImg from './assets/nushare/intro-img.png';
import bookshareStory from './assets/nushare/bookshare_storyboard.png';
import carpoolStory from './assets/nushare/carpool_storyboard.png';
import housingStory from './assets/nushare/housing_storyboard.png';
import survey from './assets/nushare/survey.png';
import questionnaire from './assets/nushare/questionnaire.JPG';
import quant from './assets/nushare/quantSummary.png';
import qual1 from './assets/nushare/qual1.png';
import qual2 from './assets/nushare/qual2.png';
import qual3 from './assets/nushare/qual3.png';
import wireframe1 from './assets/nushare/wireframe1.png';
import wireframe2 from './assets/nushare/wireframe2.png';
import wireframe3 from './assets/nushare/wireframe3.png';
import wireframe4 from './assets/nushare/wireframe4.png';
import wireframe5 from './assets/nushare/wireframe5.png';
import mefi1 from './assets/nushare/mefi1.png';
import mefi2 from './assets/nushare/mefi2.png';
import mefi3 from './assets/nushare/mefi3.png';
import mefi4 from './assets/nushare/mefi4.png';
import mefi5 from './assets/nushare/mefi5.png';
import NavbarForHome from "./NavbarForHome";

const NUShare = () => {
    return(
        <div className="NUShare">
            <NavbarForHome/>
            <div className="nushare-container">
                {/*<h1 style={{textAlign: 'center'}}>NUShare - A central web portal for Northeastern students</h1>*/}
                <div className="intro">
                    <div className="intro-para">
                        <h1 className="work-heading">
                            <strong>NUShare</strong>
                        </h1>
                        <div className="work-post-head">A central web portal for Northeastern students</div>

                        <div className="work-subhead">
                            <p>New students enrolled at Northeastern University have many queries related to housing and
                            feedback on different courses. They don’t have a centralized platform where such queries are
                                answered.</p>
                            <p>I worked alongside my teammates to gradually and iteratively build a prototype from
                            ground up, that solves the above mentioned user problem. This is a comprehensive look at
                                our UX Design process, prototypes, user studies and analyses.</p>

                            <p><i><b>Note: This project was part of our course curriculum and none of it was ever
                                implemented and shipped to the actual NEU student portal.</b></i></p>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={introImg} className="enlarge-img"/>
                    </div>
                </div>




                <div className="problem-statement">
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER ONE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Elevator pitch and User analysis</h1>
                    </div>
                    <div className="content body-text">
                        <h3>Elevator pitch</h3>
                        <p>
                            NUShare is an online portal designed for the students at Northeastern University to connect with
                            other students on campus and help to ease their study-life. It is a customized form of social
                            media with features that enable students to have easy access to multiple resources in a quick,
                            organized and efficient manner. The two main features we propose and implement here are
                            Book-Share (for sharing books between students) and Housing Reviews (reviews about housing
                            locality nearby university campus).
                        </p>
                        <h3>User analysis</h3>
                        <p>
                            <b>Who will use this product? -></b> The users who will use the website are the students of Northeastern University. The target audience for the website will be majorly the new students joining the university, so that they have a portal to connect with current students and post any queries related to subjects, accommodation or commute etc. or ask for help in any situation they come across.
                        </p>
                        <p>
                            <b>Demographic of the users? -></b> As the targeted audience for this product are students, the age group might vary from 22 - 35 years. Due to its simple interface, students who are familiar with social media websites will be able to use it with ease. The only requirement would be that they are enrolled in a course at Northeastern University and have a husky e-mail id.
                        </p>
                    </div>
                </div>

                <div className="chapter-block">
                    <div className="chapter-pre-label">CHAPTER TWO</div>
                    <div className="divider"/>
                    <h1 className="chapter-heading">Storyboard</h1>
                </div>
                <div className="storyboard">
                    <img src={bookshareStory} alt="Storyboard for book share" />
                    <img src={carpoolStory} alt="Storyboard for carpool"/>
                    <img src={housingStory} alt="Storyboard for housing reviews"/>
                </div>


                <div className="chapter-block">
                    <div className="chapter-pre-label">CHAPTER THREE</div>
                    <div className="divider"/>
                    <h1 className="chapter-heading">Paper prototype</h1>
                </div>
                <div>
                    <div className="paper-prototype">
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/nl4B7sVqTCo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title='Paper prototype for NUShare'
                        />
                    </div>
                </div>


                <div className="chapter-block">
                    <div className="chapter-pre-label">CHAPTER FOUR</div>
                    <div className="divider"/>
                    <h1 className="chapter-heading">Pilot User Study</h1>
                    <p className="chapter-pre-label">(SURVEY, QUESTIONNAIRE AND DATA ANALYSIS)</p>
                </div>
                <div className="pilot-study body-text">
                    <div>
                        <ul>Following was the task list the participants were asked to perform for the study:
                            <li>Editing their profile</li>
                            <li>Follow other users</li>
                            <li>Finding and creating new circles</li>
                            <li>Find and click on NUShare</li>
                            <li>Search for books on Bookshare section</li>
                            <li>Search for a locality on housing reviews</li>
                            <li>Post a comment in the forum</li>
                            <li>Access the quick links</li>
                            <li>Click and view the HELP section</li>
                            <li>Logout at any point in time</li>
                        </ul>
                        <h3>This was the survey that the participants were asked to fill out:</h3>
                        <img src={survey} width="50%"/>
                        <h3>This was the questionnaire that the participants were asked to fill out:</h3>
                        <img src={questionnaire} width="50%"/>

                        <div>
                            <h3>DATA ANALYSIS</h3>
                            <h4>Summary from QUANTITATIVE data collected from the Questionnaire</h4>
                            <img src={quant} width="40%"/>
                            <ul> Positives:
                                <li>No major pre-requisites required! The users could navigate through the portal with the minimal awareness of the use of websites</li>
                                <li>Simplicity of the system was a big plus point, as the users’ ratings leaned towards the system being simple</li>
                                <li>Users were happy to recommend the system to others which would help reach the tool to a greater audience</li>
                            </ul>
                            <ul> Negatives:
                                <li>The user’s were slightly leaning towards not using the system very frequently (but this was expected as the target audience was to help students who are new or just starting their new semester)</li>
                            </ul>

                            <h4>Summary from QUALITATIVE data collected from the Survey </h4>
                            <div className="qualitative-summary">
                                <img src={qual1} width="40%"/>
                                <p>From the survey we got the data that most of the users need to go various portals in order get access to books and any reviews on housing, below is the statistics</p>
                                <img src={qual2} width="40%"/>
                                <p>Another statistic showed that the students had to get housing reviews in person (after being locally here on the campus). This suggests that current existing platforms for housing reviews are not providing the exact details which the students are looking for and they need more information through different means, as in this case they need to connect to various people who have already stayed in different areas</p>
                                <img src={qual3} width="40%"/>
                                <p>We see that the students almost never find the book which they require from the library!!</p>
                            </div>

                            <h4>Conclusion</h4>
                            <ul>What went well?
                                {/*insert metrics table*/}
                                <li>As per our metrics previously, we could get the results on the positive side</li>
                                <li>Of total 10 tasks each 83% were successfully completed without any hassles or any assistance</li>
                                <li>Total time taken to use the portal and use its features was less than 5 minutes, which is under the threshold</li>
                            </ul>

                            <ul>What can be improved?
                                {/*insert metrics table*/}
                                <li>There were four errors which could be handled better in our system:
                                    <ol>
                                        <li>Book-share description was misconceived to be a hyperlink :: Can be resolved by making the text fonts and colour different from links</li>
                                        <li>The results in Book-share were expected to be hyperlinks :: Can be resolved by making individual textboxes for each result returned, so that the relevant options are present within the same box</li>
                                        <li>Circles concept was not clearly understood :: Can be resolved by putting a header of description once into the circle page</li>
                                        <li>Housing reviews didn’t have apartment names/numbers but only locality :: We can sub-divide locality with popular & unpopular apartments</li>
                                    </ol>
                                </li>

                                <li>Frequency of use of the system can be improved by promoting circles feature where students can frequently use it to connect and interact with other students</li>
                                <li>Recommendation to others received a positive note but once we eradicate the errors we should aim to reach 100%!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="chapter-block">
                    <div className="chapter-pre-label">CHAPTER FIVE</div>
                    <div className="divider"/>
                    <h1 className="chapter-heading">Wireframes</h1>
                </div>
                <div className="wireframes">
                    <img src={wireframe1}/>
                    <img src={wireframe2}/>
                    <img src={wireframe3}/>
                    <img src={wireframe4}/>
                    <img src={wireframe5}/>
                    <iframe
                        src="https://www.youtube.com/embed/qyeW0CTOfA4" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen title='NUShare wireframe in use' />
                </div>


                <div className="chapter-block">
                    <div className="chapter-pre-label">CHAPTER SIX</div>
                    <div className="divider"/>
                    <h1 className="chapter-heading">Medium Fidelity Prototype</h1>
                </div>
                <div className="me-fi-prototype">
                    <img src={mefi1}/>
                    <img src={mefi2}/>
                    <img src={mefi3}/>
                    <img src={mefi4}/>
                    <img src={mefi5}/>
                    <iframe src="https://www.youtube.com/embed/T2KqO0fblY8" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen title='NUShare medium fidelity prototype demo' />
                </div>

                {/*<div className="chapter-block">*/}
                {/*    <div className="chapter-pre-label">CHAPTER SEVEN</div>*/}
                {/*    <div className="divider"/>*/}
                {/*    <h1 className="chapter-heading">Research Paper</h1>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <iframe src="https://github.com/bhargavipadhya/HCI_Fall17/blob/master/Assignments/Week10/nushare-central-final.pdf"  width="100%" height="500px"/>*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </div>
    )
};

export default NUShare;