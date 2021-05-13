import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export default function setOne() {
    return (
        <>
            <div className="page half front">
                <div className="content">
                <h1>Page 1</h1>
                    <FontAwesomeIcon icon={faScroll} size="3x" />
                <h1>Scrolls</h1>
                <h3>A summary of Og Mandino's "The Greatest Salesman in the World"</h3>
                </div>
            </div>

            <div className="page half back">
                <div className="content">
                <h1>Page 2</h1>
                <FontAwesomeIcon icon={faSyncAlt} size="3x" />
                <h3>Today I begin a new life</h3>
                </div>
            </div>
        </>
    )
}