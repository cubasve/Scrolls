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

export default function setTwo() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 3</h1>
                    <FontAwesomeIcon icon={faHeart} size="3x" />
                    <h3>I will greet this day with love in my heart</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 4</h1>
                    <FontAwesomeIcon icon={faFistRaised} size="3x" />
                    <h3>I will persist until I succeed</h3>
                </div>
          </div>
        </>
    )
}