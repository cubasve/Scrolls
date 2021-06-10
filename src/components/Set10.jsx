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

export default function setTen() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 19</h1>
                    <FontAwesomeIcon icon={faChartLine} size="3x" />
                    <p>
                        I will not commit not the terrible crime of aiming too low.
                        I will do the work that a failure will not do.
                        I will always let my reach exceed my grasp.
                        I will never be content with my performance in the market.
                        I will always raise my goals as soon as they are attained.
                        I will always strive to make the next hour better than this one.
                        I will always announce my goals to the world.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 20</h1>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">9</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will act now</h3>
                    <FontAwesomeIcon icon={faRunning} size="3x" />
                </div>
            </div>
        </>
    );
}