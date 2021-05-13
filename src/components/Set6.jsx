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

export default function setSix() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 11</h1>
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                    <h3>Guidance</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 12</h1>
                </div>
            </div>
        </>
    );
}