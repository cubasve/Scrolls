import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const book = Array.from(document.getElementsByClassName('page'));

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
    <div id="animation" className="App">
      {/* Page 1 */}
      <div className="front-1 book page">
        <h1>Page 1</h1>
      </div>

      {/* Page 2 */}
      <div className="back-2 book page">
        <h1>Page 2</h1>
      </div>

      {/* Page 3 */}
      <div className="back-2 book page">
        <h1>Page 2</h1>
      </div>

      {/* Page 4 */}
      <div className="back-2 book page">
        <h1>Page 2</h1>
      </div>

      {/* Page 5 */}
      <div className="back-2 book page">
        <h1>Page 2</h1>
      </div>
    </div>
  );
}
