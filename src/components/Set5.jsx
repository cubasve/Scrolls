import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFistRaised,
    faPaw,
    faChartLine, 
    faGrinTears,
    faScroll,
    } from '@fortawesome/free-solid-svg-icons';

export default function setFive() {
    return (
        <div className="page book book-page">
             <div className="page half front">
                <div className="content">
                    <h6>Page 9</h6>
                    <FontAwesomeIcon icon={faFistRaised} size="3x" />
                    <p>
                        Failure I may still encounter at the thousandth step, 
                        yet success hides behind the next bend in the road.
                        Always will I take another step. 
                        I must fail often to succeed only once.
                        When each day is ended, not regarding whether it has been a success of a failure,
                        I will attempt to achieve one more sale. 
                        Never will I allow any day to end in failure. 
                        Nor will I allow yesterday's success to lull me into today's complacency.
                        If I persist long enough I will win.
                    </p>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h6>Page 10</h6>
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">4</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>I am nature's greatest miracle</h3>
                    <FontAwesomeIcon icon={faPaw} size="3x" />
                </div>
            </div>
        </div>
    );
}