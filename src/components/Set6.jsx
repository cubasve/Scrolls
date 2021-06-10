import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaw, 
    faClock,
    faBrain, 
    faRunning, 
    faScroll
    } from '@fortawesome/free-solid-svg-icons';

export default function setSix() {
    return (
        <div className="page book book-page">
            <div className="page half front">
                <div className="content">
                    <h6>Page 11</h6>
                    <FontAwesomeIcon icon={faPaw} size="3x" />
                    <p>
                        All men are my brothers yet I am different from each.
                        I am a unique creature.
                        Henceforth, I will capitalize on this difference for it is an asset to be promoted to the fullest.
                        I will place my uniqueness on display in the market place.
                        I will begin now to accent my differences; hide my similarities.
                        I will win for I am unique.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h6>Page 12</h6>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">5</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will live this day as if it is my last</h3>
                    <FontAwesomeIcon icon={faClock} size="3x" />
                </div>
            </div>
        </div>
    );
}