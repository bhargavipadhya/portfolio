import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavbarForHome from "./NavbarForHome";
import './Contact.scss';

const Contact = () => {
    return(
        <div className="Contact">
            <NavbarForHome/>

            <div className="contact-container">
                <h1 className="contact-heading">
                    Get in touch
                </h1>
                <div className="contact-content">
                    <a href="https://www.linkedin.com/in/bhargavi-padhya/" target="_blank" rel="noreferrer">
                        <span className="icon-text">
                            <i className="fa fa-linkedin"/>
                            <span>Message me on LinkedIn</span>
                        </span>
                    </a>
                    <a href = "mailto: pbhargavi65@gmail.com">
                        <span className="icon-text">
                            <i className="fa fa-envelope"/>
                            <span>Shoot me an email</span>
                        </span>
                    </a>
                </div>
            </div>

            <Footer/>
        </div>
    )
};

export default Contact;