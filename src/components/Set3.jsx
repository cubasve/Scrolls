import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFistRaised, 
    faPaw, 
    faScroll,
    } from '@fortawesome/free-solid-svg-icons';

export default function setThree() {
    return (
        <>
             <div className="page half front">
                <div className="content">
                    {/* <h6>Page 5</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">3</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will persist until I succeed</h3>
                    <FontAwesomeIcon icon={faFistRaised} size="3x" />
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    {/* <h6>Page 6</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">4</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I am nature's greatest miracle</h3>
                    <FontAwesomeIcon icon={faPaw} size="3x" />
                </div>
            </div>
        </>
    );
}