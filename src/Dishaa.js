import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Dishaa.scss';

const Dishaa = () => {
    return(
        <div className="Dishaa">
            <Navbar/>
            <div className="dishaa-container">
                <h1 style={{textAlign: 'center'}}>Dishaa Pratishthaan</h1>
                <div></div>
            </div>
            <Footer/>
        </div>
    )
};

export default Dishaa;