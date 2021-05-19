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
                    {/* <h6>Page 12</h6> */}
                    <span className="scroll-icon">
                        <FontAwesomeIcon icon={faScroll} size="1x" />
                        <span className="scroll-number">10</span>
                        <FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
                    </span>
                    <h3>Guidance</h3>
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                    <p>
                        Ask for guidance above all things.
                        Guide me so that I may acquire ability equal to my opportunities.
                        Teach me how to hunt with words and prosper with love so that I may
                        be a lion among men and an eagle in the market place.
                        Bathe me in good habits that the bad ones may drown.
                        Discipline me in the habit of trying and trying again.
                        Suffer me to know that all things shall pass; yet help me to count my blessings today.
                    </p>
                </div>
            </div>
        </div>
    );
}