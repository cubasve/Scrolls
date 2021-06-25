import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll, faClock, faSmile } from "@fortawesome/free-solid-svg-icons";
import "./Set7.css";

export default function setSeven() {
	return (
		<div className="page book book-page">
			<div className="page half front five-content">
				<div className="content">
					{/* <h6>Page 13</h6> */}
					<FontAwesomeIcon icon={faClock} size="3x" color="#00a86b" />
					<ul>
						<li>I will avoid with fury the killers of time.</li>
						<li>Procrastination I will destroy with action.</li>
						<li>The duties of today I shall fulfill today.</li>
						<li className="small-screen">
							This day I will make the best day of my life.
						</li>
						<li className="small-screen">
							I will make every hour count and each minute I will trade only for
							something of value.
						</li>
						<li className="small-screen">
							Each minute of today will be more fruitful than hours of
							yesterday.
						</li>
						<li className="small-screen">My last must be my best.</li>
					</ul>
				</div>
			</div>

			<div className="page half back six-title">
				<div className="content">
					{/* <h6>Page 14</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">6</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>I will be the master of my emotions</h3>
					<FontAwesomeIcon icon={faSmile} size="3x" />
				</div>
			</div>
		</div>
	);
}
