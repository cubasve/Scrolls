import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeart, 
    faScroll,
    faSyncAlt, 
    } from '@fortawesome/free-solid-svg-icons';

export default function setTwo() {
    return (
        <div className="page book book-page">
            <div className="page half front">
                <div className="content">
                    {/* <h6>Page 3</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">1</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>Today I begin a new life</h3>
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
                    {/* <h6>Page 4</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">2</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will greet this day with love in my heart</h3>
                    <FontAwesomeIcon icon={faHeart} size="3x" />
                    <p>
                        I will look on all things with love.
                        {/* I will love all manners of men for each has qualities to be admired even though they be hidden. */}
                        I will love the ambitious for they can inspire me. 
                        I will love the failures for they teach me. 
                        Love is my shield to repulse the arrows of hate and the spears of anger.
                        And most of all I will love myself. For when I do I will zealously inspect all things which enter my body, my mind, my soul, and my heart.
                    </p>
                </div>
            </div>
        </div>
    );
}