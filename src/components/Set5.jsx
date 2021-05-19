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
                    <p>
                        How can I laugh when confronted with man or deed which offends me?
                        Whenever good humor threatens to depart from me, say 'This too shall pass'.
                        For all worldly things shall indeed pass.
                        And with laughter all things will be reduced to their proper size.
                        Each day will be triumphant only when my smiles bring forth smiles from others.
                    </p>
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
                    <p>
                        I will not commit not the terrible crime of aiming too low.
                        I will do the work that a failure will not do.
                        I will always let my reach exceed my grasp.
                        I will never be content with my performance in the market.
                        I will always raise my goals as soon as they are attained.
                        I will always strive to make the next hour better than this one.
                        I will always announce my goals to the world.
                    </p>
                </div>
            </div>
        </div>
    );
}