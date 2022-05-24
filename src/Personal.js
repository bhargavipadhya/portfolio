import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavbarForHome from "./NavbarForHome";

const Personal = () => {
    return(
        <div className="Photography">
            <NavbarForHome/>
            <div style={{height: '50vw',  marginTop: '200px'}}>
                Personal stuff :P
            </div>

            <Footer/>
        </div>
    )
};

export default Personal;
