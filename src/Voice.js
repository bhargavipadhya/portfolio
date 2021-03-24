import React from 'react';
import Navbar from "./Navbar";
import './Voice.scss';
import Footer from "./Footer";
// import demo from './assets/voice/voice-demo.MP4';
import intro from './assets/voice/intro.jpg';
import NavbarForHome from "./NavbarForHome";

const Voice = () => {
    return(
        <div className="Voice">
            <NavbarForHome/>
            <div className="voice-container">
                {/*<h1 style={{textAlign: 'center'}}>Voice prototype</h1>*/}

                <div className="intro">
                    <div className="intro-para">
                        <h1 className="work-heading">
                            <strong>Voice prototype</strong>
                        </h1>
                        <div className="work-subhead">
                            <p>I worked to gradually and iteratively design and develop a highly interactive native experience from
                                ground up, that uses voice assistants for Walmart customers to solve the below mentioned user problems.</p>
                            <p>The idea behind the prototype: If our algorithm picks something you don't need right now, it's now even easier within the Walmart cart to remove, swap and save items.</p>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={intro} />
                    </div>
                </div>


                <div className="goals-container">
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER ONE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Goals</h1>
                    </div>
                    <div>
                        <ol className="body-text">
                            <li>Create a voice shopping experience that is fast and effortless.</li>
                            <li>Make kicking off your regular grocery shopping basket faster, so you can spend less time in front of screens.</li>
                            <li>Offer new ways for customers to interact with Walmart via voice.</li>
                        </ol>

                    </div>
                </div>


                <div className="pain-points-container">
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER TWO</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Customer pain points</h1>
                    </div>
                    <ol className="body-text">
                        <li>
                            Customers want to use voice to <i>quickly offload</i> an item that they need, to their voice assistant.
                        </li>
                        <li>Often times, even for products the customer purchases frequently, there are <i>multiple variants</i>, so it requires <i>back-and-forth</i> conversation to disambiguate to the correct product.</li>
                        <li>Customers have a limited tolerance for back-and-forth conversation to specify the exact product. Customers are often <i>multitasking</i> and <i>limited cognitive bandwidth.</i></li>
                        <li>In some cases, customers <i>rely on voice output without a screen</i> that can help them visually identify the product.</li>
                    </ol>
                </div>


                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER THREE</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Solution</h1>
                    </div>
                    <div className="body-text">
                        <p>Offload disambiguating to the shopping cart with a fast, in-line interface that enables the customers to quickly correct or choose alternate products.</p>
                        <p>This builds on the existing mental model that users have for using the cart as a list and helps offset some of the lack of precision of voice, to help build confidence and trust.</p>
                        <p>(Future: There is also an opportunity to extend the swap functionality universally to all items in the cart (i.e. solve for OOS a.k.a. Out Of Stock, etc.))</p>
                    </div>
                </div>


                <div>
                    <div className="chapter-block">
                        <div className="chapter-pre-label">CHAPTER FOUR</div>
                        <div className="divider"/>
                        <h1 className="chapter-heading">Prototype</h1>
                    </div>
                    <p className="body-text" style={{textAlign: 'center'}}>* Please contact me for more information and visuals on the prototype. *</p>
                    {/*<div className="prototype">*/}
                        {/*<video width="100%" height="100%" controls >*/}
                        {/*    <source src={demo} type="video/mp4"/>*/}
                        {/*</video>*/}
                    {/*</div>*/}


                </div>

            </div>
            <Footer/>
        </div>
    )
};

export default Voice;