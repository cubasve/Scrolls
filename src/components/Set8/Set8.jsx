import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faScroll,
	faSmile,
	faGrinTears,
} from "@fortawesome/free-solid-svg-icons";
import "./Set8.css";

export default function setEight() {
	return (
		<div className="page book book-page">
			<div className="page half front six-content">
				<div className="content">
					{/* <h6>Page 15</h6> */}
					<FontAwesomeIcon icon={faSmile} size="3x" />
					<ul>
						<li className="small-screen">
							Each day I awaken with moods that have changed from yesterday.
						</li>
						<li>
							Trees and plants depend on the weather to flourish but I make my
							own weather.
						</li>
						<li>
							Weak is he who permits his thoughts to control his actions; strong
							is he who forces his actions to control his thoughts.
						</li>
						<li className="small-screen">
							I am prepared to control whatever personality awakes in me each
							day.
						</li>
						<li className="small-screen">
							I will master my moods through positive action and when I master
							my moods I will control my destiny.
						</li>
					</ul>
				</div>
			</div>

			<div className="page half back seven-title">
				<div className="content">
					{/* <h6>Page 16</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">7</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>I will laugh at the world</h3>
					<FontAwesomeIcon icon={faGrinTears} size="3x" />
				</div>
			</div>
		</div>
	);
}
