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

export default function setThree() {
    return (
        <>
             <div className="page half front">
                <div className="content">
                    <h1>Page 5</h1>
                    <FontAwesomeIcon icon={faPaw} size="3x" />
                    <h3>I am nature's greatest miracle</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 6</h1>
                    <FontAwesomeIcon icon={faClock} size="3x" />
                    <h3>I will live this day as if it is my last</h3>
                </div>
            </div>
        </>
    );
}