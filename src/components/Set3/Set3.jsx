import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSyncAlt,
	faHeart,
	faScroll,
} from "@fortawesome/free-solid-svg-icons";
import "./Set3.css";

export default function setThree() {
	return (
		<div
			className="page book book-page one-content"
			style={{ backgroundImage: "/images/newLife.jpeg" }}
		>
			<div className="page half front">
				<div className="content">
					{/* <h6>Page 5</h6> */}
					<FontAwesomeIcon icon={faSyncAlt} size="3x" color="#00a86b" />
					<ul>
						<li>
							The only difference between those who have failed and those who
							have succeeded lies in the difference of their habits.{" "}
						</li>
						<li>Good habits are the key to all success.</li>
						<li className="small-screen">
							Bad habits are the unlocked door to failure.
						</li>
						<li className="small-screen">
							Thus, I will form good habits and become their slave.
						</li>
					</ul>
				</div>
			</div>

			<div className="page half back two-title">
				<div className="content">
					{/* <h6>Page 6</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">2</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>I will greet this day with love in my heart</h3>
					<FontAwesomeIcon icon={faHeart} size="3x" />
				</div>
			</div>
		</div>
	);
}
