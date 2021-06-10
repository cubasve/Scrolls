import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSyncAlt,
    faHeart,
    faFistRaised, 
    faPaw, 
    faScroll,
    } from '@fortawesome/free-solid-svg-icons';

export default function setThree() {
    return (
        <div className="page book book-page">
             <div className="page half front">
                <div className="content">
                    <h6>Page 5</h6>
                    <FontAwesomeIcon icon={faSyncAlt} size="3x" />
                    <p>
                        The only difference between those who have failed and those who have succeeded lies in the difference of their habits. 
                        Good habits are the key to all success.
                        Bad habits are the unlocked door to failure.
                        Thus, I will form good habits and become their slave.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h6>Page 6</h6>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">2</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will greet this day with love in my heart</h3>
                    <FontAwesomeIcon icon={faHeart} size="3x" />
                </div>
            </div>
        </div>
    );
}