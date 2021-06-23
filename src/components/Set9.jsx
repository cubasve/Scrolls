import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faScroll,
    faSyncAlt, 
    faHeart, 
    faFistRaised, 
    faPaw, 
    faClock, 
    faSmile, 
    faGrinTears, 
    faChartLine, 
    faRunning, 
    faBrain, 
    } from '@fortawesome/free-solid-svg-icons';

export default function setNine() {
    return (
        <div className="page book book-page">
            <div className="page half front">
                <div className="content">
                    <h1>Page 17</h1>
                    <FontAwesomeIcon icon={faGrinTears} size="3x" />
                    <ul>
                        <li className="small-screen">How can I laugh when confronted with man or deed which offends me?</li>
                        <li>Whenever good humor threatens to depart from me, say 'This too shall pass'.</li>
                        <li>For all worldly things shall indeed pass.</li>
                        <li>And with laughter all things will be reduced to their proper size.</li>
                        <li className="small-screen">Each day will be triumphant only when my smiles bring forth smiles from others.</li>
                    </ul> 
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                    <h1>Page 18</h1>
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