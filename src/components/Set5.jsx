import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChartLine, 
    faGrinTears,
    faScroll,
    } from '@fortawesome/free-solid-svg-icons';

export default function setFive() {
    return (
        <div className="page book book-page">
             <div className="page half front">
                <div className="content">
                    {/* <h6>Page 9</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">7</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will laugh at the world</h3>
                    <FontAwesomeIcon icon={faGrinTears} size="3x" />
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    {/* <h6>Page 10</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">8</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I will multiply my value a hundredfold</h3>
                    <FontAwesomeIcon icon={faChartLine} size="3x" />
                </div>
            </div>
        </div>
    );
}