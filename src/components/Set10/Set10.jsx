import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons";
import "./Set10.css";

export default function setTen() {
	return (
		<div className="page book book-page">
			<div className="page half front eight-content">
				<div className="content">
					{/* <h6>Page 19</h6> */}
					<FontAwesomeIcon icon={faChartLine} size="3x" />
					<ul>
						<li className="small-screen">
							I will not commit not the terrible crime of aiming too low.
						</li>
						<li className="small-screen">
							I will do the work that a failure will not do.
						</li>
						<li className="small-screen">
							I will always let my reach exceed my grasp.
						</li>
						<li className="small-screen">
							I will never be content with my performance in the market.
						</li>
						<li>I will always raise my goals as soon as they are attained.</li>
						<li>
							I will always strive to make the next hour better than this one.
						</li>
						<li>I will always announce my goals to the world.</li>
					</ul>
				</div>
			</div>

			<div className="page half back nine-title">
				<div className="content">
					{/* <h6>Page 20</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">9</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>I will act now</h3>
					<FontAwesomeIcon icon={faRunning} size="3x" />
				</div>
			</div>
		</div>
	);
}
