import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faScroll,
    faSyncAlt, 
    faHeart, 
    faFistRaised, 
    faPaw, 
    faClock, 
    faSmile, 
    faGrinTears, 
    faChartLine, 
    faRunning, 
    faBrain, 
    } from '@fortawesome/free-solid-svg-icons';

export default function setFour() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 7</h1>
                    <FontAwesomeIcon icon={faSmile} size="3x" />
                    <h3>I will be the master of my emotions</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 8</h1>
                    <FontAwesomeIcon icon={faGrinTears} size="3x" />
                    <h3>I will laugh at the world</h3>
                </div>
            </div>
        </>
    );
}