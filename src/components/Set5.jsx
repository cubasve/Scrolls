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

export default function setFive() {
    return (
        <>
             <div className="page half front">
                <div className="content">
                    <h1>Page 9</h1>
                    <FontAwesomeIcon icon={faChartLine} size="3x" />
                    <h3>I will multiply my value a hundredfold</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 10</h1>
                    <FontAwesomeIcon icon={faRunning} size="3x" />
                    <h3>I will act now</h3>
                </div>
            </div>
        </>
    );
}