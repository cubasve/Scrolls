import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSyncAlt, 
  faHeart, 
  faFistRaised, 
  faPaw, 
  faClock, 
  faSmile, 
  faGrinTears, 
  faChartLine, 
  faRunning, 
  faBrain } from '@fortawesome/free-solid-svg-icons';

export default function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const book = Array.from(document.getElementsByClassName('book-page'));

    book.forEach((page, index) => {
      gsap.set(page, { z: -index * 1 });

      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => index * (window.innerHeight * 0.4),
          end: () => (index + 1) * (window.innerHeight * 0.4),
        }
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
    // <div>

    //   <main>
        <main id="book-animation">
          <div className="scroll book">
            <h1>Intro</h1>
          </div>

          <div className="book" />

          <div className="book" id="book">

            {/* 1st Set */}
            {/* <div className="page book cover front book-page"> */}
            <div className="page book cover book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 1</h1>
                  <FontAwesomeIcon icon={faSyncAlt} size="3x" />
                  <h3>Today I begin a new life</h3>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 2</h1>
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                  <h3>I will greet this day with love in my heart</h3>
                </div>
              </div>
            </div>

            {/* 2nd Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 3</h1>
                  <FontAwesomeIcon icon={faFistRaised} size="3x" />
                  <h3>I will persist until I succeed</h3>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 4</h1>
                  <FontAwesomeIcon icon={faPaw} size="3x" />
                  <h3>I am nature's greatest miracle</h3>
                </div>
              </div>
            </div>

            {/* 3rd Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 5</h1>
                  <FontAwesomeIcon icon={faClock} size="3x" />
                  <h3>I will live this day as if it is my last</h3>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 6</h1>
                  <FontAwesomeIcon icon={faSmile} size="3x" />
                  <h3>I will be the master of my emotions</h3>
                </div>
              </div>
            </div>

            {/* 4th Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 7</h1>
                  <FontAwesomeIcon icon={faGrinTears} size="3x" />
                  <h3>I will laugh at the world</h3>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 8</h1>
                  <FontAwesomeIcon icon={faChartLine} size="3x" />
                  <h3>I will multiply my value a hundredfold</h3>
                </div>
              </div>
            </div>

            {/* 5th Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 9</h1>
                  <FontAwesomeIcon icon={faRunning} size="3x" />
                  <h3>I will act now</h3>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 10</h1>
                  <FontAwesomeIcon icon={faBrain} size="3x" />
                  <h3>Guidance</h3>
                </div>
              </div>
            </div>

            {/* 6th Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 11</h1>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 12</h1>
                </div>
              </div>
            </div>

            {/* 7th Set */}
            <div className="page book book-page">
              <div className="page half front">
                <div className="content">
                  <h1>Page 13</h1>
                </div>
              </div>

              <div className="page half back">
                <div className="content">
                  <h1>Page 14</h1>
                </div>
              </div>
            </div>

            {/* Back of book */}
            {/* <div className="page book cover back book-page"> */}
            <div className="page book cover book-page">
              <div className="content">
                <h1>End of Book</h1>
              </div>
            </div>

          </div>
        </main>
    //   </main>
    // </div>
  );
}
