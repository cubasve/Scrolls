import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faClock, faScroll } from "@fortawesome/free-solid-svg-icons";
import "./Set6.css";

export default function setSix() {
	return (
		<div className="page book book-page four-content">
			<div className="page half front">
				<div className="content">
					{/* <h6>Page 11</h6> */}
					<FontAwesomeIcon icon={faPaw} size="3x" />
					<ul>
						<li className="small-screen">
							All men are my brothers yet I am different from each.
						</li>
						<li>I am a unique creature.</li>
						<li>
							Henceforth, I will capitalize on this difference for it is an
							asset to be promoted to the fullest.
						</li>
						<li className="small-screen">
							I will place my uniqueness on display in the market place.
						</li>
						<li className="small-screen">
							I will begin now to accent my differences; hide my similarities.
						</li>
						<li className="small-screen">I will win for I am unique.</li>
					</ul>
				</div>
			</div>

			<div className="page half back five-title">
				<div className="content">
					{/* <h6>Page 12</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">5</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>I will live this day as if it is my last</h3>
					<FontAwesomeIcon icon={faClock} size="3x" />
				</div>
			</div>
		</div>
	);
}
