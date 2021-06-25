import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faScroll,
	faGrinTears,
	faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "./Set9.css";

export default function setNine() {
	return (
		<div className="page book book-page">
			<div className="page half front seven-content">
				<div className="content">
					{/* <h6>Page 17</h6> */}
					<FontAwesomeIcon icon={faGrinTears} size="3x" color="#00a86b" />
					<ul>
						<li className="small-screen">
							How can I laugh when confronted with man or deed which offends me?
						</li>
						<li>
							Whenever good humor threatens to depart from me, say 'This too
							shall pass'.
						</li>
						<li>For all worldly things shall indeed pass.</li>
						<li>
							And with laughter all things will be reduced to their proper size.
						</li>
						<li className="small-screen">
							Each day will be triumphant only when my smiles bring forth smiles
							from others.
						</li>
					</ul>
				</div>
			</div>

			<div className="page half back eight-title">
				<div className="content">
					{/* <h6>Page 18</h6> */}
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
