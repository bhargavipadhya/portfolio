import React, { useState} from 'react';
import './Footer.scss'

const Footer = () => {

    const [showDisclaimer, setShowDisclaimer] = useState(false);

    return(
        <div className="Footer">
            <div className="footer-container">
                <span><i className="fa fa-copyright"/> Bhargavi Padhya • All rights reserved • <span className="disclaimer" onClick={() => setShowDisclaimer(!showDisclaimer)}>Disclaimer</span></span>
                {showDisclaimer && <span>The views expressed here are entirely my own and are not those of my employer</span>}
                <span className="socials">
                    <a href="https://www.linkedin.com/in/bhargavi-padhya/" target="_blank"><i className="fa fa-linkedin"/></a>
                    <a href="https://github.com/bhargavipadhya" target="_blank"><i className="fa fa-github"/></a>
                </span>
            </div>


        </div>
    )
};

export default Footer;