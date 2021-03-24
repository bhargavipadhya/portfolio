import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import bnp from './assets/red.png';
import './NavbarForHome.scss';

const NavbarForHome = () => {

    let listener = null;
    const [scrollState, setScrollState] = useState("navigation");

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            const scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 80) {
                if (scrollState !== "navigation-scroll") {
                    setScrollState("navigation-scroll")
                }
            }
            else {
                if (scrollState !== "navigation") {
                    setScrollState("navigation")
                }
            }
        });
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState]);

    return(
        <div className="NavbarForHome">
            <div className={scrollState === "navigation" ? "navigation" : "navigation-scroll"}>
                <Link to='/'><span>
                    <img src={bnp} width="10%"/>
                </span></Link>
                <span>
                    <ul className="nav-items">
                        <Link to='/'><li className="nav-item">HOME</li></Link>
                        <Link to='/work'><li className="nav-item">WORK</li></Link>
                        {/*<Link to='/photography'><li className="nav-item">PHOTOGRAPHY</li></Link>*/}
                        <Link to='/contact'><li className="nav-item">CONTACT</li></Link>
                    </ul>
                </span>
            </div>

        </div>
    )
};

export default NavbarForHome;