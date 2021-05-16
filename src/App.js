import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './App.css';

import SetOne from './components/Set1';
import SetTwo from './components/Set2';
import SetThree from './components/Set3';
import SetFour from './components/Set4';
import SetFive from './components/Set5';
import SetSix from './components/Set6';
//import SetSeven from './components/Set7';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faScroll,
//     faSyncAlt, 
//     faHeart, 
//     faFistRaised, 
//     faPaw, 
//     faClock, 
//     faSmile, 
//     faGrinTears, 
//     faChartLine, 
//     faRunning, 
//     faBrain, 
//     } from '@fortawesome/free-solid-svg-icons';

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

        {/* Back of book */}
        <div className="page book cover back book-page">
          <div className="content">
            <h1>End of Book</h1>
          </div>
        </div>

      </div>
    </main>
  );
}
