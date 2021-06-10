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

export default function setEight() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 15</h1>
                    <FontAwesomeIcon icon={faSmile} size="3x" />
                    <p>
                        Each day I awaken with moods that have changed from yesterday.
                        Trees and plants depend on the weather to flourish but I make my own weather.
                        Weak is he who permits his thoughts to control his actions;
                        strong is he who forces his actions to control his thoughts.
                        I am prepared to control whatever personality awakes in me each day.
                        I will master my moods through positive action and when I master my moods I will control my destiny.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 16</h1>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">7</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will laugh at the world</h3>
                    <FontAwesomeIcon icon={faGrinTears} size="3x" />
                </div>
            </div>
        </>
    );
}