import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeart,
    faFistRaised,
    faClock, 
    faScroll,
    faSmile, 
    } from '@fortawesome/free-solid-svg-icons';

export default function setFour() {
    return (
        <div className="page book book-page">
            <div className="page half front">
                <div className="content">
                    {/* <h6>Page 7</h6> */}
                    <FontAwesomeIcon icon={faHeart} size="3x" />
                    <ul>
                        <li>I will look on all things with love.</li>
                        <li>I will love the ambitious for they can inspire me. </li>
                        <li>I will love the failures for they teach me.</li>
                        <li className="small-screen">Love is my shield to repulse the arrows of hate and the spears of anger.</li>
                        <li className="small-screen">And most of all I will love myself. For when I do I will zealously inspect all things which enter my body, my mind, my soul, and my heart.</li>
                    </ul>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    {/* <h6>Page 8</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">3</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will persist until I succeed</h3>
                    <FontAwesomeIcon icon={faFistRaised} size="3x" />
                </div>
            </div>
        </div>
    );
}