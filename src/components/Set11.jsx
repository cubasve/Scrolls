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

export default function setEleven() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                    <h1>Page 21</h1>
                    <FontAwesomeIcon icon={faRunning} size="3x" />
                    <p>
                        My dreams are worthless, my plans are dust, my goals are impossible.
                        All are of no value unless they are followed by action.
                        Let me act now even though my actions may not bring happiness or success
                        for it is better to act and fail than not to act and flounder.
                        Only action determines my value in the market place and to multiply my
                        value I will my actions.

                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 22</h1>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">10</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>Guidance</h3>
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                </div>
            </div>
        </>
    );
}