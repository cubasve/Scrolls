import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import "./Set1.css";

export default function setOne() {
	return (
		<div className="page book cover front book-page">
			<div className="page half front zero-title">
				<div className="content">
					{/* <h6>Page 1</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="3x" />
						<FontAwesomeIcon icon={faScroll} size="3x" flip="horizontal" />
					</span>
					<h1>Scrolls</h1>
					<h3>
						A summary of Og Mandino's "The Greatest Salesman in the World"
					</h3>
				</div>
			</div>

			<div className="page half back zero-shoutout">
				<div className="content">
					{/* <h6>Page 2</h6> */}
					<p>
						This book animation is adapted from{" "}
						<a
							href="https://delilah-career-storybook.vercel.app/"
							target="_blank"
							className="link"
						>
							Delilah's project
						</a>
					</p>
					<p className="scroll-down">Scroll down to read the book</p>
				</div>
			</div>
		</div>
	);
}
