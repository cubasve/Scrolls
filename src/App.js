import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./App.css";

import SetOne from "./components/Set1/Set1";
import SetTwo from "./components/Set2/Set2";
import SetThree from "./components/Set3/Set3";
import SetFour from "./components/Set4/Set4";
import SetFive from "./components/Set5/Set5";
import SetSix from "./components/Set6/Set6";
import SetSeven from "./components/Set7/Set7";
import SetEight from "./components/Set8/Set8";
import SetNine from "./components/Set9/Set9";
import SetTen from "./components/Set10/Set10";
import SetEleven from "./components/Set11/Set11";

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

export default function App() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const book = Array.from(document.getElementsByClassName("book-page"));

		book.forEach((page, index) => {
			gsap.set(page, { z: -index * 1 });

			gsap.to(page, {
				rotateY: `-=${180 - index / 2}`,
				scrollTrigger: {
					scrub: 1,
					start: () => index * (window.innerHeight * 0.4),
					end: () => (index + 1) * (window.innerHeight * 0.4),
				},
			});

			gsap.to(page, {
				z: index,
				scrollTrigger: {
					scrub: 1,
					start: () => index * (window.innerHeight * 0.4),
					end: () => (index + 0.5) * (window.innerHeight * 0.4),
				},
			});
		});
	}, []);

	return (
		<main id="book-animation">
			<div className="scroll book">
				<div className="content">
					<h3>Scroll down to read the book</h3>
				</div>
			</div>

			<div className="book" id="book">
				<SetOne />
				<SetTwo />
				<SetThree />
				<SetFour />
				<SetFive />
				<SetSix />
				<SetSeven />
				<SetEight />
				<SetNine />
				<SetTen />
				<SetEleven />

				{/* Back of book */}
				<div className="page book cover back book-page">
					<div className="content last-page">
						{/* <h6>End of Book</h6> */}
						<FontAwesomeIcon icon={faBrain} size="3x" />
						<ul>
							<li>Ask for guidance above all things.</li>
							<li>
								Guide me so that I may acquire ability equal to my
								opportunities.
							</li>
							<li className="small-screen">
								Teach me how to hunt with words and prosper with love so that I
								may be a lion among men and an eagle in the market place.
							</li>
							<li className="small-screen">
								Bathe me in good habits that the bad ones may drown.
							</li>
							<li>Discipline me in the habit of trying and trying again.</li>
							<li className="small-screen">
								Suffer me to know that all things shall pass; yet help me to
								count my blessings today.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
