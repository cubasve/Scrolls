import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faScroll,
	faSyncAlt,
	faLock,
	faKey,
	faUnlockAlt,
	faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function setTwo() {
	return (
		<div className="page book book-page">
			<div className="page half front">
				<div className="content">
					{/* <h6>Page 3</h6> */}
					<h3>
						Unlock the wisdom of 10 ancient scrolls handed down for thousands of
						years
					</h3>
					<span className="lock-key-icon">
						<FontAwesomeIcon icon={faLock} size="2x" transform="left-6" />
						<FontAwesomeIcon icon={faKey} size="2x" />
						<FontAwesomeIcon icon={faUnlockAlt} size="2x" transform="right-6" />
					</span>
					<FontAwesomeIcon icon={faDoorOpen} size="4x" />
				</div>
			</div>

			<div className="page half back">
				<div className="content">
					{/* <h6>Page 4</h6> */}
					<span className="scroll-icon">
						<FontAwesomeIcon icon={faScroll} size="1x" />
						<span className="scroll-number">1</span>
						<FontAwesomeIcon icon={faScroll} size="1x" flip="horizontal" />
					</span>
					<h3>Today I begin a new life</h3>
					<FontAwesomeIcon icon={faSyncAlt} size="3x" />
				</div>
			</div>
		</div>
	);
}
