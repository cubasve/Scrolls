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
                    <h6>Page 3</h6>
                </div>
            </div>

            <div className="page half back">
            <div className="content">
                    {/* <h6>Page 4</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">1</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>Today I begin a new life</h3>
                    <FontAwesomeIcon icon={faSyncAlt} size="3x" />
                </div>
            </div>
        </div>
    );
}