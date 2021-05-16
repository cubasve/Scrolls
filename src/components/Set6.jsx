import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBrain, 
    faRunning, 
    faScroll
    } from '@fortawesome/free-solid-svg-icons';

export default function setSix() {
    return (
        <div className="page book book-page">
            <div className="page half front">
                <div className="content">
                    {/* <h6>Page 11</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">9</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will act now</h3>
                    <FontAwesomeIcon icon={faRunning} size="3x" />
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    {/* <h6>Page 12</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">10</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>Guidance</h3>
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                </div>
            </div>
        </div>
    );
}