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

export default function setSeven() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 13</h1>
                    <FontAwesomeIcon icon={faClock} size="3x" />
                    <p>
                        I will avoid with fury the killers of time.
                        Procrastination I will destroy with action.
                        The duties of today I shall fulfill today.
                        This day I will make the best day of my life.
                        I will make every hour count and each minute I will trade only for something of value.
                        Each minute of today will be more fruitful than hours of yesterday.
                        My last must be my best.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 14</h1>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">6</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will be the master of my emotions</h3>
                </div>
            </div>
        </>
    );
}