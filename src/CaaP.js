import React from 'react';
import Footer from "./Footer";
import './CaaP.scss';
import caap from './assets/caap/caap.png';
import camera from './assets/caap/camera.png';
import NavbarForHome from "./NavbarForHome";
import entry from './assets/caap/entry.png';
import entryWM from './assets/caap/entryWM.png';
import camExp from './assets/caap/cam-exp.png'
import camExpWM from './assets/caap/cam-expWM.png'
import layering from './assets/caap/layering.png'
import BA1 from './assets/caap/bef-aft-1.png';
import BA2 from './assets/caap/bef-aft-2.png';
import BA3 from './assets/caap/bef-aft-3.png';
import BA4 from './assets/caap/bef-aft-4.png';
import BA5 from './assets/caap/bef-aft-5.png';

const CaaP = () => {
    return(
        <div className="CaaP">
            <NavbarForHome/>
            <div className="caap-container">
                {/*<h1 style={{textAlign: 'center'}}>Camera as a Platform</h1>*/}

                <div className="intro">

                    <div className="intro-para">
                        <h1 className="work-heading">
                            <strong>Camera as a Platform</strong>
                        </h1>
                        <p className="work-subhead">
                            I got to work on something I had never worked on before for development: Camera. I was the
                            one-woman-army responsible to develop a camera experience for the Walmart app. I built a
                            visual search feature, using real data and trained object detection model that
                            scans an object using the camera and displays the search results after filtering from
                            the company’s inventory.
                        </p>
                    </div>
                    <div className="intro-image">
                        <img src={camera} />
                    </div>
                </div>




                <div className="user-questions-container">
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER ONE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">User Questions</h1>
                    </div>
                    <div className="user-questions-content">
                        <span className="user-questions">
                            <ol className="body-text">
                            <li>Why is camera important?</li>
                            <div>
                                <h4>According to surveys:</h4>
                                <ul>
                                    <li>96% of surveyed millennials consider their camera crucial to their smartphone.</li>
                                    <li>Nearly 50% said their smartphone was “practically useless” without a camera.</li>
                                    <li>62% of surveyed millennials want visual search over any other new technology.</li>
                                </ul>
                                <p><b>FUN FACT:</b> 90% of information transmitted to the human brain is visual. </p>
                            </div>
                            <li>How are people using camera to shop?</li>
                            <div>
                                <ul>
                                    <li>Pinterest – visual search, shop the look, instant ideas (image search)</li>
                                    <li>Amazon – visual search, style snap, view in your room</li>
                                    <li>Best Buy/Walmart/Jet.com/Target – QR code scanner</li>
                                    <li>Google Lens/Bing – visual search engine</li>
                                    <li>Forever 21 – image search</li>
                                </ul>
                            </div>
                        </ol>
                        </span>
                        <img src={caap} className="user-questions-image"/>

                    </div>
                </div>

                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER TWO</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">User pain points</h1>
                    </div>
                    <ol className="body-text">
                        <li>"I know what I want, but I don’t know what it’s called."</li>
                        <li>"I don’t know what I want, but I’ll know it when I see it."</li>
                        <li>"I know what I want, but I don’t have the time and patience to apply multiple filters and then scroll through the multiple search results."</li>
                    </ol>
                </div>

                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER THREE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Design problems tackled</h1>
                    </div>
                    <ol className="body-text">
                        <li>Entry point - Always within or near the search bar</li>
                        <div>
                            <figure>
                                <img src={entry} alt="entry point - competetive analysis" />
                                <figcaption>Entry point - Competitive Analysis</figcaption>
                            </figure>

                            <figure>
                                <img src={entryWM} alt="entry point - Walmart prototype " />
                                <figcaption>Entry point - Walmart Prototype </figcaption>
                            </figure>
                        </div>
                        <li>Camera interface and experience</li>
                        <div>
                            <p>- It’s very important to place top-level and frequently-used actions at the bottom of the screen.</p>
                            <p>- Make elements you wish to be easily selectable large and position them close to users.</p>
                            <figure>
                                <img src={camExp} alt="Camera Experience - competetive analysis" />
                                <figcaption>Camera Experience - Competitive Analysis</figcaption>
                            </figure>

                            <figure>
                                <img src={camExpWM} alt="Camera Experience - Walmart prototype " />
                                <figcaption>Camera Experience - Walmart Prototype </figcaption>
                            </figure>
                        </div>
                        <li>Layering and Navigation</li>
                        <div>
                            <p>It is important to keep the user within the camera experience i.e. back-stacking whenever possible.</p>
                            <figure>
                                <img src={layering} alt="Layering and Navigation - Walmart prototype " />
                                <figcaption>Layering and Navigation (Back-stacking) - Walmart Prototype </figcaption>
                            </figure>
                        </div>
                    </ol>
                </div>

                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER FOUR</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Design Decisions</h1>
                        <p className="chapter-pre-label">(BEFORE - AFTER)</p>
                    </div>
                    <div className="body-text before-after">

                        <figure>
                            <img src={BA1} alt="Camera Experience - Walmart prototype " />
                            <img src={BA2} alt="Camera Experience - Walmart prototype " />
                            <figcaption><h4>Small touch targets lead to big problems</h4></figcaption>
                        </figure>

                        <figure>
                            <img src={BA3} alt="Camera Experience - Walmart prototype " />
                            <figcaption><h4>Use color judiciously for communication</h4></figcaption>
                        </figure>

                        <figure>
                            <img src={BA4} alt="Camera Experience - Walmart prototype " />
                            <figcaption><h4>Color contrast matters</h4></figcaption>
                        </figure>

                        <figure>
                            <img src={BA5} alt="Camera Experience - Walmart prototype " />
                            <figcaption><h4>Journey to aesthetic design</h4></figcaption>
                        </figure>
                    </div>

                </div>

                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER FIVE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">If I had more time</h1>
                    </div>
                    <div className="body-text">
                        <h4>Sky is the limit</h4>
                        <ul>
                            <li>Add more familiar mobile interactions.</li>
                            <li>Make the user experience smoother.</li>
                            <li>Work alongside the data science team to get a stronger object-detection model for visual search.</li>
                            <li>Differentiate between the various options with more than just color.</li>
                            <li>Explore the verticals and functionalities on a much deeper level.</li>
                            <li>Figure out ways to integrate the add to cart and checkout functionalities within the camera experience.</li>
                        </ul>
                    </div>

                </div>

                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER SIX</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">What I learned?</h1>
                    </div>
                    <ul className="body-text">
                        <li>Design first approach</li>
                        <p>- Rather than development first approach</p>
                        <li>Follow best practices (familiar design patterns)</li>
                        <p>- Made use of UX laws like, Fitt’s Law, Jakob’s law, Hick’s Law and many more</p>
                        <li>Feature prioritization</li>
                        <p>- If stuck with something, keep it aside and work on another aspect of the prototype</p>
                        <li>Be assertive – go ahead and implement things</li>
                        <p>- Read between the lines and implement things, even if not that great, you can learn from it and use it else where</p>
                        <li>Good distractions</li>
                        <p>- There will always be good kind of distractions, know how to prioritize them & make it work efficiently.</p>
                    </ul>
                </div>

            </div>
            <Footer/>
        </div>
    )
};

export default CaaP;