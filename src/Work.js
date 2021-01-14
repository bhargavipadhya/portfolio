import React from 'react';
import {workList} from "./workList";
import {Link} from 'react-router-dom';
import './Work.scss';
// import nushare from '../public/VUI-voice.png';

const Work = () => {
    return(
        <div className="Work">
            <div>
                <ul className="work-list">
                    {workList.map((item, index) => (
                        <Link to={`/${item.url}`} key={index}>
                            <li>
                                <div className="item">
                                    <img src={process.env.PUBLIC_URL + item.img} className="img"/>
                                    <span>{item.name}</span>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Work;